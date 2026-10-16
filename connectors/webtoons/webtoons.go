package webtoons

import (
	"fmt"
	"net/http"
	"net/url"
	"regexp"
	"strconv"
	"strings"
	"time"

	"github.com/PuerkitoBio/goquery"
	"github.com/abibby/manga/services/httpratelimit"
	"github.com/abibby/manga/site"
)

const baseURL = "https://www.webtoons.com"

type Webtoons struct {
	client *http.Client
}

var _ site.MangaSite = &Webtoons{}

func init() {
	site.RegisterMangaSite(NewWebtoons())
}

func NewWebtoons() *Webtoons {
	return &Webtoons{client: httpratelimit.NewClient(750 * time.Millisecond)}
}

func (w *Webtoons) SiteName() string { return "Webtoons" }

func (w *Webtoons) Test(rawurl string) bool {
	u, err := url.Parse(rawurl)
	if err != nil || (u.Scheme != "https" && u.Scheme != "http") {
		return false
	}
	switch strings.ToLower(u.Hostname()) {
	case "webtoons.com", "www.webtoons.com", "m.webtoons.com":
		return true
	}
	return false
}

func (w *Webtoons) document(u *url.URL) (*goquery.Document, error) {
	req, err := http.NewRequest(http.MethodGet, u.String(), nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("User-Agent", "Mozilla/5.0")
	req.Header.Set("Referer", baseURL+"/")
	req.Header.Set("Cookie", "needCCPA=false; pagGDPR=true")
	resp, err := w.client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("fetch Webtoons page: %w", err)
	}
	defer resp.Body.Close()
	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		return nil, fmt.Errorf("fetch Webtoons page %s: %s", u, resp.Status)
	}
	return goquery.NewDocumentFromReader(resp.Body)
}

// Some older episode links wrap the viewer URL in a JavaScript function.
var quotedURL = regexp.MustCompile(`['"]([^'"]+)['"]`)

var chapterPatterns = []*regexp.Regexp{
	regexp.MustCompile(`(?i)\b(?:chapter|chap|ch|episode|ep)\.?\s*[:#-]?\s*(\d+(?:\.\d+)?)\b`),
	regexp.MustCompile(`^\s*#(\d+(?:\.\d+)?)\b`),
	regexp.MustCompile(`^\s*(\d+(?:\.\d+)?)(?:\s|[-:.)–—]|$)`),
}

var seasonPattern = regexp.MustCompile(`(?i)\b(?:season\s*|s)(\d+)\b`)

// Titles describe the actual chapter; list numbers and episode IDs also count
// prologues, announcements, and other entries that can shift the numbering.
func bookNumbers(title, listNumber, episodeID string) (chapter float64, volume int) {
	for _, pattern := range chapterPatterns {
		match := pattern.FindStringSubmatch(title)
		if len(match) != 2 {
			continue
		}
		n, err := strconv.ParseFloat(match[1], 64)
		if err != nil {
			continue
		}
		// Seasons may restart chapter numbering. Preserve them as volumes so
		// chapters with the same number do not share a download filename.
		if season := seasonPattern.FindStringSubmatch(title); len(season) == 2 {
			volume, _ = strconv.Atoi(season[1])
		}
		return n, volume
	}
	chapter, err := strconv.ParseFloat(strings.TrimPrefix(strings.TrimSpace(listNumber), "#"), 64)
	if err != nil {
		chapter, _ = strconv.ParseFloat(episodeID, 64)
	}
	return chapter, 0
}

func (w *Webtoons) episodeURL(base *url.URL, href string) (*url.URL, error) {
	if strings.HasPrefix(strings.ToLower(href), "javascript:") {
		match := quotedURL.FindStringSubmatch(href)
		if len(match) != 2 {
			return nil, fmt.Errorf("invalid Webtoons episode link: %q", href)
		}
		href = match[1]
	}
	u, err := base.Parse(href)
	if err != nil {
		return nil, err
	}
	if !w.Test(u.String()) || !strings.HasSuffix(u.Path, "/viewer") ||
		u.Query().Get("title_no") != base.Query().Get("title_no") {
		return nil, fmt.Errorf("invalid Webtoons episode link: %q", href)
	}
	if n, err := strconv.Atoi(u.Query().Get("episode_no")); err != nil || n <= 0 {
		return nil, fmt.Errorf("invalid Webtoons episode number: %q", href)
	}
	u.Scheme, u.Host, u.Fragment = "https", "www.webtoons.com", ""
	return u, nil
}

func (w *Webtoons) Books(rawurl string) ([]site.Book, error) {
	u, err := url.Parse(rawurl)
	if err != nil {
		return nil, err
	}
	parts := strings.Split(strings.Trim(u.Path, "/"), "/")
	if !w.Test(rawurl) || len(parts) != 4 || parts[3] != "list" {
		return nil, fmt.Errorf("expected a Webtoons series URL ending in /list?title_no=...")
	}
	titleID := u.Query().Get("title_no")
	if n, err := strconv.Atoi(titleID); err != nil || n <= 0 {
		return nil, fmt.Errorf("invalid Webtoons title_no: %q", titleID)
	}
	u.Scheme, u.Host, u.Fragment = "https", "www.webtoons.com", ""
	// Canvas and Originals have separate title ID namespaces, as do languages.
	kind := "originals"
	if parts[1] == "canvas" || parts[1] == "challenge" {
		kind = "canvas"
	}
	seriesID := fmt.Sprintf("webtoons:%s:%s:%s", parts[0], kind, titleID)
	var books []site.Book
	seen := map[string]bool{}
	var series, summary, author, genre string
	for page := 1; page <= 1000; page++ {
		q := url.Values{"title_no": {titleID}, "page": {strconv.Itoa(page)}}
		u.RawQuery = q.Encode()
		doc, err := w.document(u)
		if err != nil {
			return nil, err
		}
		list := doc.Find(".detail_body .detail_lst, .detail_body .detail_list_area")
		if list.Length() == 0 {
			return nil, fmt.Errorf("Webtoons episode list not found at %s", u)
		}
		if page == 1 {
			series = strings.TrimSpace(doc.Find(`meta[property="og:title"]`).AttrOr("content", ""))
			if series == "" {
				series = strings.TrimSpace(doc.Find("h1.subj, h3.subj").First().Text())
			}
			if series == "" {
				return nil, fmt.Errorf("Webtoons series title not found at %s", u)
			}
			summary = strings.TrimSpace(doc.Find(`meta[property="og:description"]`).AttrOr("content", ""))
			author = strings.TrimSpace(doc.Find(`meta[property="com-linewebtoon:webtoon:author"]`).AttrOr("content", ""))
			genre = strings.TrimSpace(doc.Find(".info .genre").First().Text())
		}
		before := len(books)
		var parseErr error
		list.Find("ul li > a").EachWithBreak(func(_ int, a *goquery.Selection) bool {
			link, err := w.episodeURL(u, a.AttrOr("href", ""))
			if err != nil {
				parseErr = err
				return false
			}
			id := link.Query().Get("episode_no")
			if seen[id] {
				return true
			}
			seen[id] = true
			title := strings.TrimSpace(a.Find(".subj").Text())
			chapter, volume := bookNumbers(title, a.Find(".tx").Text(), id)
			date, _ := time.Parse("Jan 2, 2006", strings.TrimSpace(a.Find(".date").Text()))
			books = append(books, &Book{
				connector: w, url: link, id: id, seriesID: seriesID,
				info: site.BookInfo{
					Series: series, Title: title, Volume: volume,
					Chapter: chapter, Summary: summary, Author: author, Genre: genre,
					Web: link.String(), DateReleased: date, LongStrip: true,
				},
			})
			return true
		})
		if parseErr != nil {
			return nil, parseErr
		}
		// Webtoons can repeat the final page for out-of-range page numbers.
		if len(books) == before {
			if page == 1 {
				return nil, fmt.Errorf("no public Webtoons episodes found at %s", u)
			}
			return books, nil
		}
	}
	return nil, fmt.Errorf("Webtoons episode list exceeded 1000 pages")
}
