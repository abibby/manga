package jaiminisbox

import (
	"regexp"
	"strconv"
	"strings"

	"github.com/PuerkitoBio/goquery"
	"github.com/abibby/manga/site"
)

var extractNumberRE = regexp.MustCompile("\\d+(\\.\\d+)?")

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
			title = strings.TrimSpace(parts[1])
		}

		chapterParts := strings.Split(parts[0], " ")

		if len(chapterParts) < 2 {
			chapterParts = []string{"", extractNumberRE.FindString(eTitle.Text())}
		}

		chapter, _ := strconv.ParseFloat(chapterParts[1], 64)
		link, _ := eTitle.Attr("href")
		books = append(books, &Book{
			url: link,
			info: site.BookInfo{
				Title:       title,
				Series:      series,
				Chapter:     chapter,
				RightToLeft: true,
			},
		})
	})
	return books, nil
}
