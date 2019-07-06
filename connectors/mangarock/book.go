package mangarock

import (
	"fmt"

	"github.com/zwzn/manga/site"
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

func (b *Book) Pages() []string {
	pages, err := Pages(b.seriesChapter.ID)
	if err != nil {
		panic(err)
	}
	urls := make([]string, 0, len(pages))
	for _, page := range pages {
		if page.Role == "credit" {
			continue
		}
		urls = append(urls, page.URL)
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
func (b *Book) Info() *site.BookInfo {
	return &site.BookInfo{
		Series:  b.Series(),
		Title:   b.seriesChapter.Title(),
		Volume:  b.seriesChapter.Volume(),
		Chapter: b.Chapter(),
		Summary: b.series.Description,
		Author:  b.series.Author,
	}
}
