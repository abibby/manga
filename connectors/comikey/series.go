package comikey

import (
	"fmt"
	"strings"

	"github.com/abibby/manga/site"
	"github.com/mmcdole/gofeed"
)

type Series struct {
	Name    string
	Summary string
	Genre   string
	Author  string
}

func seriesBooks(id string) ([]site.Book, error) {
	fp := gofeed.NewParser()
	feed, err := fp.ParseURL(fmt.Sprintf("https://comikey.com/sapi/comics/%s/feed.rss", id))
	if err != nil {
		return nil, err
	}

	s := &Series{
		Name:    feed.Title,
		Summary: feed.Description,
		Genre:   strings.Join(feed.Categories, ", "),
		Author:  strings.TrimSpace(strings.Split(feed.Copyright, "|")[0]),
	}

	books := make([]site.Book, len(feed.Items))

	for i, b := range feed.Items {
		books[i] = &Book{
			series:   s,
			feedItem: b,
		}
	}

	return books, nil
}
