package viz

import (
	"bytes"
	"fmt"
	"image"
	"image/jpeg"
	"image/png"
	"io"
	"io/ioutil"
	"net/url"
	"os"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
	"time"

	"github.com/PuerkitoBio/goquery"
	"github.com/abibby/manga/connectors/viz/vizrod"
	"github.com/abibby/manga/site"
	"github.com/rwcarlsen/goexif/exif"
	"github.com/spf13/viper"
)

var client *vizrod.Viz

type Book struct {
	url     string
	series  string
	chapter float64
}

var _ site.Book = &Book{}

func books(uri string) ([]site.Book, error) {
	d, err := goquery.NewDocument(uri)
	if err != nil {
		return nil, err
	}

	chapters := d.Find("a.o_chapter-container[name]")

	chapterURLs := map[string]string{}

	for _, c := range chapters.Nodes {
		node := d.FindNodes(c)
		href, _ := node.Attr("href")
		u, err := url.Parse(href)
		if err == nil && u.Scheme != "javascript" {
			chapterURLs[href], _ = node.Attr("name")
		}
	}
	seriesTitle := d.Find("h2.type-lg")

	bs := []site.Book{}

	for cURL, number := range chapterURLs {
		f, _ := strconv.ParseFloat(number, 64)
		bs = append(bs, &Book{
			url:     cURL,
			series:  seriesTitle.Text(),
			chapter: f,
		})
	}

	token, ok := d.Find(`input[name="authenticity_token"]`).Attr("value")
	if ok {
		_, err := get(uri, "https://www.viz.com/account/refresh_login_links")
		if err != nil {
			return nil, err
		}

		err = login(uri, token)
		if err != nil {
			return nil, err
		}
	}

	return bs, nil
}

func (b *Book) Pages() []site.Page {
	uri := "https://www.viz.com" + b.url

	_, err := get(uri, "https://www.viz.com/account/refresh_login_links")
	if err != nil {
		panic(err)
	}

	responseData, err := get(uri, uri)
	if err != nil {
		panic(err)
	}

	var pageCount = 0
	var mangaID = 0

	if strings.HasPrefix(b.url, "/read/manga") {
		panic("/read/manga urls are not supported")
	} else if strings.HasPrefix(b.url, "/shonenjump") {
		bPageCount := regexp.MustCompile(`var\s+pages\s*=\s*(\d+)`).FindSubmatch(responseData)[1]
		pageCount, err = strconv.Atoi(string(bPageCount))
		if err != nil {
			panic(err)
		}
		strMangaID := regexp.MustCompile(`chapter\/(\d+)`).FindStringSubmatch(b.url)[1]
		mangaID, err = strconv.Atoi(strMangaID)
		if err != nil {
			panic(err)
		}
		// }
	}

	pages := []site.Page{}
	for i := 1; i < pageCount; i++ {

		pages = append(pages, &Page{
			url: fmt.Sprintf("https://www.viz.com/manga/get_manga_url?device_id=3&manga_id=%d&page=%d", mangaID, i),
		})
	}
	// spew.Dump(pages)
	// os.Exit(1)
	return pages
}

func login(uri, csrfToken string) error {
	user := viper.GetString("mangadex.username")
	pass := viper.GetString("mangadex.password")

	if user == "" || pass == "" {
		return nil
	}

	b, err := postString(
		uri,
		"https://www.viz.com/account/try_login",
		fmt.Sprintf(
			"login=%s&pass=%s&uid=0&rem_user=1",
			url.QueryEscape(user),
			url.QueryEscape(pass),
		),
		csrfToken,
	)

	fmt.Printf("%s\n", b)
	os.Exit(1)

	return err
}

func get(referer, uri string) ([]byte, error) {
	return request(referer, "GET", uri, nil, "")
}

func postString(referer, uri, body, csrfToken string) ([]byte, error) {
	return request(
		referer,
		"GET",
		uri,
		[]byte(body),
		csrfToken,
	)
}

func request(referer, method, uri string, body []byte, csrfToken string) ([]byte, error) {
	time.Sleep(time.Millisecond * 100)
	if client == nil {
		var err error
		client, err = vizrod.New()
		if err != nil {
			return nil, err
		}
		err = client.Login(viper.GetString("viz.username"), viper.GetString("viz.password"))
		if err != nil {
			return nil, err
		}
	}
	html, err := client.GetHTML(uri)
}

func (b *Book) ID() string {
	_, name := filepath.Split(b.url)
	name = strings.Split(name, "?")[0]
	return name
}
func (b *Book) Series() string {
	return b.series
}
func (b *Book) Chapter() float64 {
	return b.chapter
}
func (b *Book) Volume() int {
	return 0
}
func (b *Book) Info() *site.BookInfo {
	return &site.BookInfo{
		Series:      b.Series(),
		Volume:      b.Volume(),
		Chapter:     b.Chapter(),
		Web:         b.url,
		RightToLeft: true,
	}
}

type Page struct {
	url string
}

var _ site.Page = &Page{}
var _ site.ImageDecrypter = &Page{}

func (p *Page) URL() (string, error) {
	uri := "https://www.viz.com"
	pageURI, err := get(uri, fmt.Sprintf(p.url))
	if err != nil {
		return "", err
	}

	return string(pageURI), nil
}

func (p *Page) ImageDecrypt(encrypted io.Reader) (io.Reader, string) {
	srcBytes, err := ioutil.ReadAll(encrypted)
	if err != nil {
		return site.NewErrorReader(err), ""
	}
	if err != nil {
		return site.NewErrorReader(err), ""
	}

	x, err := exif.Decode(bytes.NewReader(srcBytes))
	if err != nil {
		return site.NewErrorReader(err), ""
	}

	src, err := jpeg.Decode(bytes.NewReader(srcBytes))
	if err != nil {
		return site.NewErrorReader(err), ""
	}

	imgWidth, err := getInt(x, "ImageWidth")
	if err != nil {
		return site.NewErrorReader(err), ""
	}
	imgHeight, err := getInt(x, "ImageLength")
	if err != nil {
		return site.NewErrorReader(err), ""
	}
	dest := image.NewRGBA(image.Rect(0, 0, imgWidth, imgHeight))

	xSplit := int(dest.Bounds().Dx() / 10)
	ySplit := int(dest.Bounds().Dy() / 15)
	copyRect(
		src, dest,
		0, 0,
		0, 0,
		dest.Bounds().Dx(), ySplit,
	)
	copyRect(
		src, dest,
		0, ySplit+10,
		0, ySplit,
		xSplit, dest.Bounds().Dy()-2*ySplit,
	)
	copyRect(
		src, dest,
		0, 14*(ySplit+10),
		0, 14*ySplit,
		dest.Bounds().Dx(), src.Bounds().Dy()-14*(ySplit+10),
	)
	copyRect(
		src, dest,
		9*(xSplit+10), ySplit+10,
		9*xSplit, ySplit,
		xSplit+(dest.Bounds().Dx()-10*xSplit), dest.Bounds().Dy()-2*ySplit,
	)

	imageUniqueID, err := x.Get("ImageUniqueID")
	if err != nil {
		return site.NewErrorReader(err), ""
	}
	id, err := imageUniqueID.StringVal()
	if err != nil {
		return site.NewErrorReader(err), ""
	}

	shuffleMap := strings.Split(id, ":")
	for piece := 0; piece < len(shuffleMap); piece++ {
		shuffleMapPiece, err := strconv.ParseInt(shuffleMap[piece], 16, 64)
		if err != nil {
			return site.NewErrorReader(err), ""
		}
		copyRect(
			src, dest,
			((piece%8)+1)*(xSplit+10), ((piece/8)+1)*(ySplit+10), // sx, y
			((int(shuffleMapPiece)%8)+1)*xSplit, ((int(shuffleMapPiece)/8)+1)*ySplit, // dx, y
			xSplit, ySplit,
		)
	}

	buff := &bytes.Buffer{}
	err = png.Encode(buff, dest)
	if err != nil {
		return site.NewErrorReader(err), ""
	}
	return buff, "png"
}

func copyRect(src image.Image, dest *image.RGBA, srcX, srcY, destX, destY, w, h int) {

	for x := 0; x < w; x++ {
		for y := 0; y < h; y++ {
			dest.Set(destX+x, destY+y, src.At(srcX+x, srcY+y))
		}
	}
}

func getInt(x *exif.Exif, name string) (int, error) {
	field, err := x.Get(exif.FieldName(name))
	if err != nil {
		return 0, err
	}
	i, err := field.Int64(0)
	if err != nil {
		return 0, err
	}
	return int(i), nil
}

/*
let canvas = document.createElement("canvas");
canvas.width = exif.ImageWidth;
canvas.height = exif.ImageHeight;
let ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, exif.ImageWidth, exif.ImageHeight);

const x_split = Math.floor(exif.ImageWidth / 10);
const y_split = Math.floor(exif.ImageHeight / 15);
const shuffle_map = exif.ImageUniqueID.split(":");

// Draw border pieces
ctx.drawImage(
	bitmap,
	0,
	14 * (y_split + 10),
	0,
	14 * y_split,
	exif.ImageWidth,
	bitmap.height - 14 * (y_split + 10)
);
ctx.drawImage(
	bitmap,
	9 * (x_split + 10),
	y_split + 10,
	9 * x_split,
	y_split,
	x_split + (exif.ImageWidth - 10 * x_split),
	exif.ImageHeight - 2 * y_split
);

	// Draw inside pieces
for (let piece = 0; piece < shuffle_map.length; piece++) {
	shuffle_map[piece] = parseInt(shuffle_map[piece], 16);
	ctx.drawImage(
		bitmap,
		Math.floor(((piece % 8) + 1) * (x_split + 10)),
		Math.floor((Math.floor(piece / 8) + 1) * (y_split + 10)), // sx, sy
		Math.floor(x_split),
		Math.floor(y_split), // sWidth, sHeight
		Math.floor(((shuffle_map[piece] % 8) + 1) * x_split),
		Math.floor((Math.floor(shuffle_map[piece] / 8) + 1) * y_split), // dx, dy
		Math.floor(x_split),
		Math.floor(y_split)
	); // dWidth, dHeight
}
*/
