package mangadex

import (
	"fmt"
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

func (b *Book) Pages() ([]site.Page, error) {
	atHomeServer, err := b.client.AtHomeServer(b.mdChapter.ID)
	if err != nil {
		return nil, err
	}

	pages := []site.Page{}

	for i := range atHomeServer.Chapter.Data {
		pages = append(pages, site.DefaultPage(b.mdChapter.PageURL(atHomeServer, i)))
	}
	return pages, nil
}
func (b *Book) ID() string {
	return b.mdChapter.ID
}
func (b *Book) Series() string {
	titles := b.mdChapter.Manga().Title
	title, ok := titles["en"]
	if ok {
		return title
	}
	for _, t := range titles {
		return t
	}
	return ""
}
func (b *Book) SeriesID() string {
	return fmt.Sprintf("mangadex:%s", b.mdChapter.Manga().ID)
}
func (b *Book) Chapter() float64 {
	chapter, _ := strconv.ParseFloat(b.mdChapter.Chapter.String(), 64)
	return chapter
}
func (b *Book) Volume() int {
	vol, _ := strconv.Atoi(b.mdChapter.Volume.String())
	return vol
}
func (b *Book) Info() *site.BookInfo {
	info := &site.BookInfo{
		// Author:    stripCtlAndExtFromUnicode(b.mdChapter.Manga().Author().Name),
		Series:       stripCtlAndExtFromUnicode(b.mdChapter.Manga().Title.String()),
		Title:        stripCtlAndExtFromUnicode(b.mdChapter.Title),
		Chapter:      b.Chapter(),
		Volume:       b.Volume(),
		DateReleased: b.mdChapter.PublishAt,
		RightToLeft:  true,
	}

	return info
}
