package mangaplus

import (
	"encoding/hex"
	"fmt"
	"io"
	"net/url"
	"strconv"
	"strings"
	"time"

	"github.com/abibby/manga/connectors/mangaplus/mpproto"
	"github.com/abibby/manga/site"
	"github.com/abibby/manga/streams"
)

type Book struct {
	title   *mpproto.TitleDetailView
	chapter *mpproto.Chapter
	viewer  *mpproto.MangaViewer
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

	result, err := mpproto.Get("https://jumpg-webapi.tokyo-cdn.com/api/title_detailV3?title_id=%s", id)
	if err != nil {
		return nil, err
	}

	siteBooks := []site.Book{}
	for _, chapterList := range result.GetTitleDetailView().GetChapterList() {
		for _, ch := range chapterList.GetFirstChapters() {
			siteBooks = append(siteBooks, &Book{
				title:   result.GetTitleDetailView(),
				chapter: ch,
			})
		}
		for _, ch := range chapterList.GetLastChapters() {
			siteBooks = append(siteBooks, &Book{
				title:   result.GetTitleDetailView(),
				chapter: ch,
			})
		}
	}
	return siteBooks, nil
}

func (b *Book) getMangaViewer() (*mpproto.MangaViewer, error) {
	if b.viewer == nil {
		result, err := mpproto.Get("https://jumpg-webapi.tokyo-cdn.com/api/manga_viewer?chapter_id=%s&split=yes&img_quality=high", b.ID())
		if err != nil {
			return nil, err
		}
		b.viewer = result.GetMangaViewer()
	}
	return b.viewer, nil
}

func (b *Book) Pages() ([]site.Page, error) {
	result, err := b.getMangaViewer()
	if err != nil {
		return nil, err
	}

	pages := []site.Page{}
	for i, page := range result.GetPages() {
		mp := page.GetMangaPage()
		pageURL := mp.GetImageUrl()
		if pageURL != "" {
			encKey, err := hex.DecodeString(mp.GetEncryptionKey())
			if err != nil {
				return nil, err
			}

			pageType := site.PageTypeStory
			if i == 0 {
				pageType = site.PageTypeFrontCover
			}

			switch mp.GetType() {
			case mpproto.Page_LEFT, mpproto.Page_RIGHT:
				pageType = site.PageTypeSpreadSplit
			case mpproto.Page_DOUBLE:
				pageType = site.PageTypeSpread
			}

			pages = append(pages, &Page{
				url:           pageURL,
				encryptionKey: encKey,
				pageType:      pageType,
			})
		}
	}

	return pages, nil
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
	bookPages, err := b.Pages()
	if err != nil {
		panic(fmt.Errorf("failed to fetch pages: %w", err))
	}
	pages := make([]*site.InfoPage, len(bookPages))
	for i, p := range bookPages {
		pages[i] = &site.InfoPage{
			Type: p.(*Page).pageType,
		}
	}

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
		Pages:        pages,
	}
}

type Page struct {
	url           string
	encryptionKey []byte
	pageType      site.PageType
}

var _ site.Page = &Page{}
var _ site.ImageDecrypter = &Page{}

func (p *Page) URL() (string, error) {
	return p.url, nil
}
func (p *Page) ImageDecrypt(encrypted io.Reader) io.Reader {
	keyLen := len(p.encryptionKey)
	if keyLen == 0 {
		return encrypted
	}
	return streams.TransformerBuffer(encrypted, func(w io.Writer, r io.Reader) error {
		b := make([]byte, keyLen)
		for {
			n, err := r.Read(b)
			if err != nil {
				return err
			}
			for i := range n {
				b[i] ^= p.encryptionKey[i]
			}
			_, err = w.Write(b)
			if err != nil {
				return err
			}
		}
	})
}
