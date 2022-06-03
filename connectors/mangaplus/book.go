package mangaplus

import (
	"bytes"
	"encoding/hex"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"

	"github.com/abibby/manga/connectors/mangaplus/mpproto"
	"github.com/abibby/manga/site"
)

type Book struct {
	title   *mpproto.TitleDetailView
	chapter *mpproto.Chapter
}

var _ site.Book = &Book{}

func books(uri string) ([]site.Book, error) {
	u, err := url.Parse(uri)
	if err != nil {
		return nil, err
	}
	parts := strings.Split(u.Path, "/")[1:]
	if parts[0] != "titles" {
		return nil, fmt.Errorf("not page")
	}
	id := parts[1]

	result, err := mpproto.Get("https://jumpg-webapi.tokyo-cdn.com/api/title_detail?title_id=%s", id)
	if err != nil {
		panic(err)
	}

	bs := []site.Book{}
	for _, ch := range result.GetTitleDetailView().GetFirstChapterList() {
		bs = append(bs, &Book{
			title:   result.GetTitleDetailView(),
			chapter: ch,
		})
	}
	for _, ch := range result.GetTitleDetailView().GetLastChapterList() {
		bs = append(bs, &Book{
			title:   result.GetTitleDetailView(),
			chapter: ch,
		})
	}
	return bs, nil
}

func (b *Book) Pages() []site.Page {
	result, err := mpproto.Get("https://jumpg-webapi.tokyo-cdn.com/api/manga_viewer?chapter_id=%s&split=yes&img_quality=high", b.ID())
	if err != nil {
		panic(err)
	}

	pages := []site.Page{}
	for _, page := range result.GetMangaViewer().GetPages() {
		pageURL := page.GetMangaPage().GetImageUrl()
		if pageURL != "" {
			encKey, err := hex.DecodeString(page.GetMangaPage().GetEncryptionKey())
			if err != nil {
				panic(err)
			}
			pages = append(pages, &Page{
				url:           pageURL,
				encryptionKey: encKey,
			})
		}
	}

	return pages
}
func (b *Book) ID() string {
	return fmt.Sprint(b.chapter.GetChapterId())
}
func (b *Book) Series() string {
	return b.title.GetTitle().GetName()
}
func (b *Book) SeriesID() string {
	return fmt.Sprintf("mangaplus:%d", b.title.Title.TitleId)
}
func (b *Book) Chapter() float64 {
	ch, err := strconv.ParseFloat(b.chapter.GetName()[1:], 64)
	if err != nil {
		return 0
	}
	return ch
}
func (b *Book) Volume() int {
	return 0
}
func (b *Book) Info() *site.BookInfo {
	return &site.BookInfo{
		Series:       b.Series(),
		Title:        b.chapter.GetSubTitle(),
		Volume:       b.Volume(),
		Chapter:      b.Chapter(),
		Summary:      b.title.GetOverview(),
		Author:       b.title.GetTitle().GetAuthor(),
		Web:          fmt.Sprintf("https://mangaplus.shueisha.co.jp/viewer/%d", b.chapter.GetChapterId()),
		DateReleased: time.Unix(int64(b.chapter.GetStartTimeStamp()), 0),
		RightToLeft:  true,
	}
}

type Page struct {
	url           string
	encryptionKey []byte
}

func getPages(id string) []Page {
	r, err := http.Get(fmt.Sprintf("https://jumpg-webapi.tokyo-cdn.com/api/manga_viewer?chapter_id=%s&split=yes&img_quality=high", id))
	if err != nil {
		panic(err)
	}
	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err)
	}

	pages := []Page{}
	lines := strings.Split(string(b), "\n")
	for _, line := range lines {
		if !strings.HasPrefix(line, "\x91\x01https://") {
			continue
		}
		parts := strings.Split(line, "\x01")
		encKey, err := hex.DecodeString(parts[2])
		if err != nil {
			panic(err)
		}
		pages = append(pages, Page{
			url:           strings.TrimSuffix(parts[1], "\x10\x90\x06\x18\xf9\b*\x80"),
			encryptionKey: encKey,
		})
	}
	return pages
}

var _ site.Page = &Page{}
var _ site.ImageDecrypter = &Page{}

func (p *Page) URL() (string, error) {
	return p.url, nil
}
func (p *Page) ImageDecrypt(encrypted io.Reader) (io.Reader, string) {

	o, err := ioutil.ReadAll(encrypted)
	if err != nil {
		panic(err)
	}

	a := len(p.encryptionKey)

	for s := 0; s < len(o); s++ {
		o[s] ^= p.encryptionKey[s%a]
	}

	return bytes.NewReader(o), "png"
}
