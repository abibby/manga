package webtoons

import (
	"fmt"
	"net/http"
	"net/url"
	"strings"

	"github.com/PuerkitoBio/goquery"
	"github.com/abibby/manga/site"
)

type Book struct {
	connector *Webtoons
	url       *url.URL
	id        string
	seriesID  string
	info      site.BookInfo
	pages     []site.Page
}

var _ site.Book = &Book{}

func (b *Book) ID() string       { return b.id }
func (b *Book) Series() string   { return b.info.Series }
func (b *Book) SeriesID() string { return b.seriesID }
func (b *Book) Chapter() float64 { return b.info.Chapter }
func (b *Book) Volume() int      { return b.info.Volume }
func (b *Book) Info() *site.BookInfo {
	info := b.info
	return &info
}

func (b *Book) Pages() ([]site.Page, error) {
	if b.pages != nil {
		return b.pages, nil
	}
	doc, err := b.connector.document(b.url)
	if err != nil {
		return nil, err
	}
	var pages []site.Page
	var parseErr error
	doc.Find(".viewer .viewer_lst .viewer_img img[data-url]").EachWithBreak(func(_ int, img *goquery.Selection) bool {
		rawurl := strings.TrimSpace(img.AttrOr("data-url", ""))
		u, err := b.url.Parse(rawurl)
		if err != nil || rawurl == "" || (u.Scheme != "http" && u.Scheme != "https") {
			parseErr = fmt.Errorf("invalid Webtoons image URL: %q", rawurl)
			return false
		}
		// Remove the resizing parameter to request the original image, as HakuNeko does.
		q := u.Query()
		q.Del("type")
		u.RawQuery = q.Encode()
		pages = append(pages, &Page{url: u.String(), referer: b.url.String()})
		return true
	})
	if parseErr != nil {
		return nil, parseErr
	}
	if len(pages) == 0 {
		return nil, fmt.Errorf("no public Webtoons images found at %s (episode may be restricted or use an unsupported viewer)", b.url)
	}
	b.pages = pages
	return pages, nil
}

type Page struct {
	url     string
	referer string
}

var _ site.Page = &Page{}
var _ site.PageTyper = &Page{}
var _ site.ImageHeaderProvider = &Page{}

func (p *Page) URL() (string, error) { return p.url, nil }
func (p *Page) Type() site.PageType  { return site.PageTypeStory }
func (p *Page) ImageHeaders() http.Header {
	return http.Header{
		"Referer":    {p.referer},
		"User-Agent": {"Mozilla/5.0"},
	}
}
