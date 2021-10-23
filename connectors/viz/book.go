package viz

import (
	"bytes"
	"fmt"
	"image"
	"image/jpeg"
	"image/png"
	"io"
	"io/ioutil"
	"net/http"
	"net/http/cookiejar"
	"net/url"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
	"time"

	"github.com/PuerkitoBio/goquery"
	"github.com/abibby/manga/site"
	"github.com/rwcarlsen/goexif/exif"
)

var client *http.Client

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

	return bs, nil
}

func (b *Book) Pages() []site.Page {
	uri := "https://www.viz.com" + b.url
	// const request = new Request(new URL(chapter.id, this.url));
	// let response = await fetch(request);
	// let responseData = await response.text();
	_, err := get(uri, "https://www.viz.com/account/refresh_login_links")
	if err != nil {
		panic(err)
	}

	responseData, err := get(uri, uri)
	if err != nil {
		panic(err)
	}

	// let pageCount = 0;
	// let mangaID = 0;

	var pageCount = 0
	var mangaID = 0

	// if (chapter.id.startsWith("read/manga")) {
	if strings.HasPrefix(b.url, "/read/manga") {
		//   pageCount = parseInt(
		//     [
		//       ...responseData.matchAll(
		//         /<div\s+class="mar-b-md">\s*<strong>\s*Length\s*<\/strong>\s+(\d+)\s+pages\s*<\/div>/g
		//       ),
		//     ][0][1]
		//   );
		//   mangaID = parseInt(
		//     [...responseData.matchAll(/var\s+mangaCommonId\s*=\s*(\d+)/g)][0][1]
		//   );
		// } else if (chapter.id.startsWith("/shonenjump")) {
		panic("/read/manga urls are not supported")
	} else if strings.HasPrefix(b.url, "/shonenjump") {
		//   pageCount = parseInt(
		//     [...responseData.matchAll(/var\s+pages\s*=\s*(\d+)/g)][0][1]
		//   );
		bPageCount := regexp.MustCompile(`var\s+pages\s*=\s*(\d+)`).FindSubmatch(responseData)[1]
		pageCount, err = strconv.Atoi(string(bPageCount))
		if err != nil {
			panic(err)
		}
		//   mangaID = chapter.id.match(/chapter\/(\d+)/)[1];
		strMangaID := regexp.MustCompile(`chapter\/(\d+)`).FindStringSubmatch(b.url)[1]
		mangaID, err = strconv.Atoi(strMangaID)
		if err != nil {
			panic(err)
		}
		// }
	}

	// return Array(pageCount + 1)
	//   .fill()
	//   .map((_, index) => {
	//     let page = new URL("/manga/get_manga_url", this.url);
	//     page.searchParams.set("device_id", 3);
	//     page.searchParams.set("manga_id", mangaID);
	//     page.searchParams.set("page", index);
	//     return this.createConnectorURI({ id: page.href, referer: chapter.id });
	//   });
	pages := []site.Page{}
	for i := 1; i < pageCount; i++ {
		responseData, err := get(uri, fmt.Sprintf("https://www.viz.com/manga/get_manga_url?device_id=3&manga_id=%d&page=%d", mangaID, i))
		if err != nil {
			panic(err)
		}
		pageURI := string(responseData)

		// pageData, err := get(uri, pageURI)
		// if err != nil {
		// 	panic(err)
		// }

		// err = ioutil.WriteFile("./test.png", pageData, 0644)
		// if err != nil {
		// 	panic(err)
		// }

		// os.Exit(1)

		pages = append(pages, &Page{
			url: pageURI,
		})
	}
	// spew.Dump(pages)
	// os.Exit(1)
	return pages
}

func get(referer, uri string) ([]byte, error) {
	time.Sleep(time.Millisecond * 100)
	if client == nil {
		jar, err := cookiejar.New(nil)
		if err != nil {
			return nil, err
		}
		u, _ := url.Parse(referer)

		cs := jar.Cookies(u)
		cs = append(cs, &http.Cookie{
			Name:   "user_visits",
			Value:  "1",
			MaxAge: 300,
			Path:   "/",
		}, &http.Cookie{
			Name:   "user_visits_url",
			Value:  u.Path,
			MaxAge: 300,
			Path:   "/",
		})
		jar.SetCookies(u, cs)
		client = &http.Client{
			Jar: jar,
		}
	}

	req, err := http.NewRequest("GET", uri, nil)
	if err != nil {
		return nil, err
	}

	req.Header.Add("User-Agent", "Mozilla/5.0 (X11; Linux x86_64; rv:93.0) Gecko/20100101 Firefox/93.0")
	req.Header.Add("Accept", "text/html, */*; q=0.01")
	req.Header.Add("Accept-Language", "en-US,en;q=0.5' --compresse")
	req.Header.Add("Referer", referer)
	req.Header.Add("X-client-login", "false")
	req.Header.Add("X-Requested-With", "XMLHttpRequest")
	req.Header.Add("DNT", "1")
	req.Header.Add("Connection", "keep-alive")
	req.Header.Add("Sec-Fetch-Dest", "empty")
	req.Header.Add("Sec-Fetch-Mode", "cors")
	req.Header.Add("Sec-Fetch-Site", "same-origin")
	req.Header.Add("Pragma", "no-cache")
	req.Header.Add("Cache-Control", "no-cache")
	req.Header.Add("TE", "trailer")

	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	b, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}
	return b, nil
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
		Series:  b.Series(),
		Volume:  b.Volume(),
		Chapter: b.Chapter(),
		Web:     b.url,
	}
}

type Page struct {
	url string
}

var _ site.Page = &Page{}
var _ site.ImageDecrypter = &Page{}

func (p *Page) URL() string {
	return p.url
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
