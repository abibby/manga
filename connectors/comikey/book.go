package comikey

import (
	"encoding/json"
	"io"
	"net/http"
	"os"
	"regexp"
	"strconv"

	"github.com/PuerkitoBio/goquery"
	"github.com/abibby/manga/site"
	"github.com/mmcdole/gofeed"
)

type Book struct {
	series   *Series
	feedItem *gofeed.Item
}
type Metadata struct {
	ReadEndpoint string `json:"read_endpoint"`
	TrkEndpoint  string `json:"trk_endpoint"`
	Comic        struct {
		ID     int    `json:"id"`
		Link   string `json:"link"`
		Name   string `json:"name"`
		E4Pid  string `json:"e4pid"`
		Uslug  string `json:"uslug"`
		Alt    string `json:"alt"`
		Author []struct {
			ID   int    `json:"id"`
			Name string `json:"name"`
			Alt  string `json:"alt"`
		} `json:"author"`
		Artist []struct {
			ID   int    `json:"id"`
			Name string `json:"name"`
			Alt  string `json:"alt"`
		} `json:"artist"`
		Adult bool `json:"adult"`
		Tags  []struct {
			Name        string `json:"name"`
			Description string `json:"description"`
			Slug        string `json:"slug"`
			Color       string `json:"color"`
			IsPrimary   bool   `json:"is_primary"`
		} `json:"tags"`
		Keywords    string `json:"keywords"`
		Description string `json:"description"`
		Excerpt     string `json:"excerpt"`
		ModifiedAt  string `json:"modified_at"`
		Publisher   struct {
			ID        int    `json:"id"`
			Name      string `json:"name"`
			Language  string `json:"language"`
			Homepage  string `json:"homepage"`
			Logo      string `json:"logo"`
			Geoblocks string `json:"geoblocks"`
		} `json:"publisher"`
		Color                string `json:"color"`
		InExclusive          bool   `json:"in_exclusive"`
		InHype               bool   `json:"in_hype"`
		AllFree              bool   `json:"all_free"`
		AvailabilityStrategy struct {
			StartingCount         int    `json:"starting_count"`
			LatestOnlyFree        bool   `json:"latest_only_free"`
			LatestDouble          bool   `json:"latest_double"`
			CatchupCount          int    `json:"catchup_count"`
			Simulpub              bool   `json:"simulpub"`
			FpfBecomesPaid        string `json:"fpf_becomes_paid"`
			FpfBecomesFree        string `json:"fpf_becomes_free"`
			FpfBecomesBacklog     string `json:"fpf_becomes_backlog"`
			BacklogBecomesBacklog string `json:"backlog_becomes_backlog"`
		} `json:"availability_strategy"`
		Campaigns    []interface{} `json:"campaigns"`
		LastUpdated  string        `json:"last_updated"`
		ChapterCount int           `json:"chapter_count"`
		UpdateStatus int           `json:"update_status"`
		UpdateText   string        `json:"update_text"`
		Format       int           `json:"format"`
		Cover        string        `json:"cover"`
		FullCover    string        `json:"full_cover"`
		Logo         string        `json:"logo"`
		Banner       string        `json:"banner"`
		Showcase     string        `json:"showcase"`
		Preview      interface{}   `json:"preview"`
		Thumbnail    string        `json:"thumbnail"`
		ChapterTitle string        `json:"chapter_title"`
		Geoblocks    string        `json:"geoblocks"`
	} `json:"comic"`
	Brand struct {
		Name string `json:"name"`
		Logo string `json:"logo"`
	} `json:"brand"`
	Prefix   string `json:"prefix"`
	Manifest string `json:"manifest"`
	Lastpage string `json:"lastpage"`
	Seed     string `json:"seed"`
}

var _ site.Book = &Book{}

func (b *Book) Pages() []site.Page {
	d, err := goquery.NewDocument(b.feedItem.Link)
	if err != nil {
		panic(err)
	}
	s := d.Find("#lmao-init")
	raw := s.Text()
	data := &Metadata{}
	err = json.Unmarshal([]byte(raw), data)
	if err != nil {
		panic(err)
	}

	r, err := http.Get(data.Manifest)
	if err != nil {
		panic(err)
	}

	io.Copy(os.Stdout, r.Body)

	os.Exit(1)

	return []site.Page{}
}
func (b *Book) ID() string {
	return b.feedItem.GUID
}
func (b *Book) Series() string {
	return b.series.Name
}
func (b *Book) Chapter() float64 {
	matches := regexp.MustCompile(`[^:]* (\d+)`).FindStringSubmatch(b.feedItem.Title)
	ch, err := strconv.ParseFloat(matches[1], 64)
	if err != nil {
		return 0
	}
	return ch
}
func (b *Book) Volume() int {
	return 0
}
func (b *Book) Info() *site.BookInfo {
	return &site.BookInfo{
		Series: b.Series(),
		Title:  b.feedItem.Title,
		// Volume
		Chapter: b.Chapter(),
		Summary: b.series.Summary,
		Author:  b.series.Author,
		Web:     b.feedItem.Link,
		Genre:   b.series.Genre,
		// Tags
		// CommunityRating
		DateReleased: *b.feedItem.PublishedParsed,
		// Rating
		RightToLeft: true,
	}
}
