package mangarock

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"io"
	"io/ioutil"

	"github.com/abibby/manga/site"
)

type Book struct {
	seriesChapter *MangaRockChapter
	series        *MangaRockSeries
}

var _ site.Book = &Book{}

func NewBook(ch *MangaRockChapter, series *MangaRockSeries) *Book {
	return &Book{
		seriesChapter: ch,
		series:        series,
	}
}

func (b *Book) Pages() []site.Page {
	pages, err := Pages(b.seriesChapter.ID)
	if err != nil {
		panic(err)
	}
	urls := make([]site.Page, 0, len(pages))
	for _, page := range pages {
		if page.Role == "credit" {
			continue
		}
		urls = append(urls, page)
	}
	return urls
}
func (b *Book) ID() string {
	return fmt.Sprint(b.seriesChapter.ID)
}
func (b *Book) Series() string {
	return b.series.Name
}
func (b *Book) Chapter() float64 {
	return b.seriesChapter.Chapter()
}
func (b *Book) Volume() int {
	return b.seriesChapter.Volume()
}
func (b *Book) Info() *site.BookInfo {
	return &site.BookInfo{
		Series:      b.Series(),
		Title:       b.seriesChapter.Title(),
		Volume:      b.seriesChapter.Volume(),
		Chapter:     b.Chapter(),
		Summary:     b.series.Description,
		Author:      b.series.Author,
		RightToLeft: true,
	}
}

func (p *Page) URL() (string, error) {
	return p.ImageURL, nil
}
func (m *Page) ImageDecrypt(encrypted io.Reader) (io.Reader, string) {
	const key = 0x65

	b, err := ioutil.ReadAll(encrypted)
	if err != nil {
		return site.NewErrorReader(err), "webp"
	}
	decrypted := make([]byte, 0, len(b)+15)
	n := make([]byte, 4)
	binary.LittleEndian.PutUint32(n, uint32(len(b)+7))
	header := []byte{82, 73, 70, 70, n[0], n[1], n[2], n[3], 87, 69, 66, 80, 86, 80, 56}
	decrypted = append(decrypted, header...)

	for _, c := range b {
		decrypted = append(decrypted, key^c)
	}

	return bytes.NewReader(decrypted), "webp"
}
