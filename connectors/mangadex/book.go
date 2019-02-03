package mangadex

import (
	"fmt"
	"strconv"
	"time"

	"bitbucket.org/zwzn/manga/site"
)

type Book struct {
	seriesChapter *MangaDexSeriesChapter
	mdChapter     *MangaDexChapter
	series        *MangaDexSeries
}

func NewBook(ch *MangaDexSeriesChapter, series *MangaDexSeries) *Book {
	return &Book{
		seriesChapter: ch,
		series:        series,
	}
}

func (b *Book) Pages() []string {
	chapter, err := b.chapter()
	if err != nil {
		panic(err)
	}
	return chapter.ImageURLs()
}
func (b *Book) ID() string {
	return fmt.Sprint(b.seriesChapter.ID)
}
func (b *Book) Series() string {
	return b.series.Manga.Title
}
func (b *Book) Chapter() float64 {
	ch, _ := strconv.ParseFloat(b.seriesChapter.Chapter, 64)
	return ch
}
func (b *Book) Info() *site.BookInfo {
	series := b.series
	info := &site.BookInfo{}
	info.Author = stripCtlAndExtFromUnicode(series.Manga.Author)
	info.Series = stripCtlAndExtFromUnicode(series.Manga.Title)
	info.Title = stripCtlAndExtFromUnicode(b.seriesChapter.Title)
	info.Chapter = b.Chapter()
	info.Volume, _ = strconv.ParseInt(b.seriesChapter.Volume, 10, 64)
	info.DateReleased = time.Unix(b.seriesChapter.Timestamp, 0)
	return info
}

func (b *Book) chapter() (*MangaDexChapter, error) {
	if b.mdChapter == nil {
		b.mdChapter = &MangaDexChapter{}
		err := getJson(fmt.Sprintf("https://mangadex.org/api/chapter/%s", b.ID()), b.mdChapter)
		if err != nil {
			return nil, err
		}
	}
	return b.mdChapter, nil
}
