package mangadex

import (
	"strconv"

	"github.com/abibby/manga/site"
	"github.com/abibby/mangadexv5"
)

type Book struct {
	client    *mangadexv5.Client
	mdChapter *mangadexv5.Chapter
}

var _ site.Book = &Book{}

func NewBook(client *mangadexv5.Client, chapter *mangadexv5.Chapter) *Book {
	return &Book{
		client:    client,
		mdChapter: chapter,
	}
}

func (b *Book) Pages() []site.Page {
	atHomeServer, err := b.client.AtHomeServer(b.mdChapter.ID)
	if err != nil {
		return nil
	}

	pages := []site.Page{}

	for i := range b.mdChapter.Data {
		pages = append(pages, site.DefaultPage(b.mdChapter.PageURL(atHomeServer, i)))
	}
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
	vol, _ := strconv.Atoi(b.mdChapter.Volume.String())
	return vol
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
