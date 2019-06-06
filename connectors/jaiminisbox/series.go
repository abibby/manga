package jaiminisbox

import (
	"strconv"
	"strings"

	"github.com/PuerkitoBio/goquery"
	"github.com/zwzn/manga/site"
)

func seriesBooks(rawurl string) ([]site.Book, error) {
	doc, err := goquery.NewDocument(rawurl)
	if err != nil {
		return nil, err
	}

	series := strings.TrimSpace(doc.Find("h1.title").Text())

	books := []site.Book{}
	doc.Find(".element").Each(func(i int, row *goquery.Selection) {
		eTitle := row.Find(".title a")
		parts := strings.Split(eTitle.Text(), ":")
		title := ""
		if len(parts) > 1 {
			title = parts[1]
		}
		chapter, _ := strconv.ParseFloat(strings.Split(parts[0], " ")[1], 64)
		link, _ := eTitle.Attr("href")
		books = append(books, &Book{
			url: link,
			info: site.BookInfo{
				Title:   title,
				Series:  series,
				Chapter: chapter,
			},
		})
	})
	return books, nil
}
