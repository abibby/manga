package viz

import (
	"bytes"
	"errors"
	"fmt"
	"image"
	"image/jpeg"
	"image/png"
	"io"
	"log/slog"
	"net/url"
	"strconv"
	"strings"
	"sync"

	"github.com/abibby/manga/connectors/viz/vizapi"
	"github.com/abibby/manga/site"
	"github.com/abibby/manga/streams"
	"github.com/rwcarlsen/goexif/exif"
	"github.com/spf13/viper"
)

var newAPI = sync.OnceValues(func() (*vizapi.Client, error) {
	return vizapi.New(
		viper.GetString("viz.username"),
		viper.GetString("viz.password"),
		viper.GetString("cookie_file"),
	)
})

type Book struct {
	chapter  *vizapi.Chapter
	series   string
	seriesID string
	c        *vizapi.Client
}

var _ site.Book = &Book{}

func books(uri string) ([]site.Book, error) {
	c, err := newAPI()
	if err != nil {
		return nil, err
	}

	u, err := url.Parse(uri)
	if err != nil {
		return nil, err
	}

	seriesSlug := strings.Split(u.Path, "/")[3]
	series, err := c.GetSeries(seriesSlug)
	if err != nil {
		return nil, err
	}

	books := make([]site.Book, len(series.Chapters))
	for i, chapter := range series.Chapters {
		books[i] = &Book{
			chapter:  chapter,
			seriesID: seriesSlug,
			series:   series.Title,
			c:        c,
		}
	}
	return books, nil
}

func (b *Book) Pages() ([]site.Page, error) {
	d, err := b.c.GetMangaURL(b.chapter.ID, []int{0})
	if errors.Is(err, vizapi.ErrNotOK) {
		err = b.c.Reauthenticate()
		if err != nil {
			return nil, err
		}
		d, err = b.c.GetMangaURL(b.chapter.ID, []int{0})
	}

	if err != nil {
		return nil, err
	}
	meta, err := d.GetMetadata()
	if err != nil {
		return nil, err
	}

	pageCount, err := b.chapter.GetPageCount()
	if err != nil {
		return nil, err
	}

	pages := make([]site.Page, 0, pageCount)

	chunkSize := 5
	cover := true
	for chunkStart := 0; chunkStart < pageCount; chunkStart += chunkSize {
		getMangaURL := sync.OnceValues(func() (*vizapi.MangaURL, error) {
			pageNumbers := make([]int, chunkSize)
			for j := range pageNumbers {
				pageNumbers[j] = chunkStart + j
			}
			slog.Info("getMangaURL", "chunkStart+5", chunkStart+5, "pageCount", pageCount, "meta", meta)
			return b.c.GetMangaURL(b.chapter.ID, pageNumbers)
		})

		for p := chunkStart; p < chunkStart+5 && p <= pageCount; p++ {
			if p == 0 && (len(meta.Spreads) == 0 || meta.Spreads[0] != 0) {
				continue
			}
			pages = append(pages, &Page{
				number:      p,
				cover:       cover,
				meta:        meta,
				getMangaURL: getMangaURL,
			})
			if cover {
				cover = false
			}
		}
	}
	return pages, nil
}

func (b *Book) ID() string {
	return fmt.Sprint(b.chapter.ID)
}
func (b *Book) Series() string {
	return b.series
}
func (b *Book) SeriesID() string {
	return fmt.Sprintf("viz:%s", b.seriesID)
}
func (b *Book) Chapter() float64 {
	return b.chapter.Chapter
}
func (b *Book) Volume() int {
	return 0
}
func (b *Book) Info() *site.BookInfo {
	return &site.BookInfo{
		Series:      b.Series(),
		Volume:      b.Volume(),
		Chapter:     b.Chapter(),
		Web:         b.chapter.URL,
		RightToLeft: true,
	}
}

type Page struct {
	number      int
	cover       bool
	getMangaURL func() (*vizapi.MangaURL, error)
	meta        *vizapi.ChapterMetadata
}

var _ site.Page = &Page{}
var _ site.ImageDecrypter = &Page{}
var _ site.PageTyper = &Page{}

func (p *Page) URL() (string, error) {
	urls, err := p.getMangaURL()
	if err != nil {
		return "", err
	}
	pageURL, ok := urls.Data[p.number]
	if !ok {
		return "", fmt.Errorf("no page %d", p.number)
	}
	return pageURL, nil
}
func (p *Page) Type() site.PageType {
	for _, s := range p.meta.Spreads {
		if p.number == s || p.number == s+1 {
			return site.PageTypeSpreadSplit
		}
	}
	if p.cover {
		return site.PageTypeFrontCover
	}
	return site.PageTypeStory
}

func (p *Page) ImageDecrypt(encrypted io.Reader) io.Reader {
	return streams.Transformer(encrypted, func(w io.Writer, r io.Reader) error {
		srcBytes, err := io.ReadAll(encrypted)
		if err != nil {
			return err
		}

		x, err := exif.Decode(bytes.NewReader(srcBytes))
		if err != nil {
			return err
		}

		src, err := jpeg.Decode(bytes.NewReader(srcBytes))
		if err != nil {
			return err
		}

		imgWidth, err := getInt(x, "ImageWidth")
		if err != nil {
			return err
		}
		imgHeight, err := getInt(x, "ImageLength")
		if err != nil {
			return err
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
			return err
		}
		id, err := imageUniqueID.StringVal()
		if err != nil {
			return err
		}

		shuffleMap := strings.Split(id, ":")
		for piece := 0; piece < len(shuffleMap); piece++ {
			shuffleMapPiece, err := strconv.ParseInt(shuffleMap[piece], 16, 64)
			if err != nil {
				return err
			}
			copyRect(
				src, dest,
				((piece%8)+1)*(xSplit+10), ((piece/8)+1)*(ySplit+10), // sx, y
				((int(shuffleMapPiece)%8)+1)*xSplit, ((int(shuffleMapPiece)/8)+1)*ySplit, // dx, y
				xSplit, ySplit,
			)
		}

		return png.Encode(w, dest)
	})
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
