package jaiminisbox

import (
	"encoding/base64"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"regexp"

	"github.com/zwzn/manga/site"
)

type Book struct {
	url   string
	pages []*Page
	info  site.BookInfo
}

type Page struct {
	ID        int    `json:"id"`
	ChapterID string `json:"chapter_id"`
	Filename  string `json:"filename"`
	Hidden    string `json:"hidden"`
	Created   string `json:"created"`
	Lastseen  string `json:"lastseen"`
	Updated   string `json:"updated"`
	Creator   string `json:"creator"`
	Editor    string `json:"editor"`
	Height    string `json:"height"`
	Width     string `json:"width"`
	Mime      string `json:"mime"`
	Size      string `json:"size"`
	URL       string `json:"url"`
	ThumbURL  string `json:"thumb_url"`
}

func (b *Book) Pages() []string {
	if b.pages == nil {
		resp, err := http.Get(b.url)
		if err != nil {
			panic(err)
		}

		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			panic(err)
		}
		resp.Body.Close()
		re := regexp.MustCompile(`JSON.parse\(atob\("([^"]*)"\)`)

		matches := re.FindSubmatch(body)
		pageJSON, err := base64.StdEncoding.DecodeString(string(matches[1]))
		if err != nil {
			panic(err)
		}
		b.pages = []*Page{}
		err = json.Unmarshal(pageJSON, &b.pages)
		if err != nil {
			panic(err)
		}

	}
	images := []string{}
	for _, page := range b.pages {
		images = append(images, page.URL)
	}
	return images
}
func (b *Book) ID() string {
	return ""
}
func (b *Book) Series() string {
	return b.info.Series
}
func (b *Book) Chapter() float64 {
	return b.info.Chapter
}
func (b *Book) Info() *site.BookInfo {
	return &b.info
}