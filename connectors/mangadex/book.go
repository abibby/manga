package mangadex

import (
	"strconv"

	"github.com/abibby/manga/site"
	"github.com/abibby/mangadexv5"
)

type Book struct {
	mdChapter *mangadexv5.Chapter
}

var _ site.Book = &Book{}

func NewBook(chapter *mangadexv5.Chapter) *Book {
	return &Book{mdChapter: chapter}
}

func (b *Book) Pages() []site.Page {
	pages := []site.Page{}
	return pages
}
func (b *Book) ID() string {
	return b.mdChapter.ID
}
func (b *Book) Series() string {
	return b.mdChapter.Manga().Title.String()
}
func (b *Book) Chapter() float64 {
	chapter, _ := strconv.ParseFloat(b.mdChapter.Chapter, 64)
	return chapter
}
func (b *Book) Volume() int {
	return b.mdChapter.Volume.Value()
}
func (b *Book) Info() *site.BookInfo {
	info := &site.BookInfo{}
	// info.Author = stripCtlAndExtFromUnicode(b.mdChapter.Manga().Author().Name)
	info.Series = stripCtlAndExtFromUnicode(b.mdChapter.Manga().Title.String())
	info.Title = stripCtlAndExtFromUnicode(b.mdChapter.Title)
	info.Chapter = b.Chapter()
	info.Volume = b.Volume()
	info.DateReleased = b.mdChapter.PublishAt
	return info
}
