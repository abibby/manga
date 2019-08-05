package mangadex

import (
	"fmt"
	"strconv"
	"time"

	"github.com/zwzn/manga/site"
)

type Book struct {
	id      int
	series  string
	chapter float64
	volume  int
	// seriesChapter *MangaDexSeriesChapter
	mdChapter *MangaDexChapter
	mdSeries  *MangaDexSeries
}

var _ site.Book = &Book{}

func NewBook(id int, series string, chapter float64, volume int) *Book {
	return &Book{
		id:      id,
		series:  series,
		chapter: chapter,
		volume:  volume,
	}
}

func (b *Book) Pages() []string {
	chapter := b.mangaDexChapter()
	return chapter.ImageURLs()
}
func (b *Book) ID() string {
	return fmt.Sprint(b.id)
}
func (b *Book) Series() string {
	return b.series
}
func (b *Book) Chapter() float64 {
	return b.chapter
}
func (b *Book) Volume() int {
	return b.volume
}
func (b *Book) Info() *site.BookInfo {
	chapter := b.mangaDexChapter()
	series := b.mangaDexSeries()

	info := &site.BookInfo{}
	info.Author = stripCtlAndExtFromUnicode(series.Manga.Author)
	info.Series = stripCtlAndExtFromUnicode(b.series)
	info.Title = stripCtlAndExtFromUnicode(chapter.Title)
	info.Chapter = b.Chapter()
	info.Volume, _ = strconv.Atoi(chapter.Volume)
	info.DateReleased = time.Unix(chapter.Timestamp, 0)
	return info
}

func (b *Book) mangaDexChapter() *MangaDexChapter {
	if b.mdChapter == nil {
		var err error
		b.mdChapter, err = Chapter(b.id)
		if err != nil {
			panic(err)
		}
	}
	return b.mdChapter
}

func (b *Book) mangaDexSeries() *MangaDexSeries {
	if b.mdSeries == nil {
		var err error
		chapter := b.mangaDexChapter()
		b.mdSeries, err = chapter.Series()
		if err != nil {
			panic(err)
		}
	}
	return b.mdSeries
}
