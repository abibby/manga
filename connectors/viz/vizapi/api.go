package vizapi

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"regexp"
	"strconv"
	"strings"

	"github.com/PuerkitoBio/goquery"
)

type mangaURL struct {
	RawData  json.RawMessage `json:"data"`
	Error    json.RawMessage `json:"error"`
	Metadata string          `json:"metadata"`
	OK       int             `json:"ok"`
}
type MangaURL struct {
	Data     map[int]string
	Metadata string
	OK       int

	c *Client
}

type ChapterMetadata struct {
	Title   string          `json:"title"`
	Height  int             `json:"height"`
	Width   int             `json:"width"`
	Pages   json.RawMessage `json:"pages"`
	Spreads []int           `json:"spreads"`
}

func (m *MangaURL) GetMetadata() (*ChapterMetadata, error) {
	resp, err := m.c.get(m.Metadata)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	meta := &ChapterMetadata{}
	err = json.NewDecoder(resp.Body).Decode(meta)
	if err != nil {
		return nil, err
	}
	return meta, nil
}

var ErrNotOK = errors.New("not OK")

func (c *Client) GetMangaURL(mangaID int, pages []int) (*MangaURL, error) {
	uri := fmt.Sprintf("https://www.viz.com/manga/get_manga_url?device_id=3&manga_id=%d&pages=%s", mangaID, join(pages, ","))
	// log.Print(uri)
	resp, err := c.get(uri)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	// io.Copy(os.Stdout, resp.Body)
	// os.Exit(1)
	m := &mangaURL{}

	err = json.NewDecoder(resp.Body).Decode(m)
	if err != nil {
		return nil, err
	}

	if m.OK != 1 {
		return nil, fmt.Errorf("get_manga_url request failed: %s %s: %w", m.Error, m.RawData, ErrNotOK)
	}

	data := map[int]string{}
	err = json.Unmarshal(m.RawData, &data)
	if err != nil {
		return nil, fmt.Errorf("could not unmarshal data: %w", err)
	}

	return &MangaURL{
		Data:     data,
		Metadata: m.Metadata,
		OK:       m.OK,
		c:        c,
	}, nil
}

func join[T any](arr []T, joiner string) string {
	b := []byte{}
	for i, v := range arr {
		if i > 0 {
			b = fmt.Append(b, joiner)
		}
		b = fmt.Append(b, v)
	}
	return string(b)
}

type Chapter struct {
	ID      int
	Chapter float64
	URL     string
	c       *Client
}

type SeriesInfo struct {
	Title    string
	Chapters []*Chapter
}

func (c *Client) GetSeries(seriesSlug string) (*SeriesInfo, error) {
	resp, err := c.get(c.baseURL + "/shonenjump/chapters/" + seriesSlug)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	// b, err := io.ReadAll(resp.Body)
	// if err != nil {
	// 	return nil,  err
	// }

	re := regexp.MustCompile(`/shonenjump/[^/]+/chapter/(\d+)`)

	// matches := re.FindAllSubmatch(b, -1)
	// for _, m := range matches {
	// 	spew.Dump(string(m[1]), string(m[2]))
	// }

	d, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		return nil, err
	}

	chaptersLinks := d.Find("a[name]")

	s := &SeriesInfo{
		Title:    d.Find("#series-intro h2").Text(),
		Chapters: make([]*Chapter, 0, chaptersLinks.Length()),
	}

	for _, chapterNode := range chaptersLinks.Nodes {
		node := d.FindNodes(chapterNode)
		chapterNumber, err := strconv.ParseFloat(node.AttrOr("name", ""), 64)
		if err != nil {
			return nil, fmt.Errorf("failed to parse chapter number: %w", err)
		}

		href, _ := node.Attr("href")
		if strings.HasPrefix(href, "/") {
			href = c.baseURL + href
		} else if strings.HasPrefix(href, "http") {
			// noop
		} else if onclick, ok := node.Attr("onclick"); ok {
			href = c.baseURL + re.FindString(onclick)
		}
		if href == "" {
			return nil, fmt.Errorf("cound not find chapter link for chapter %f", chapterNumber)
		}
		matches := re.FindStringSubmatch(href)
		id, err := strconv.Atoi(matches[1])
		if err != nil {
			return nil, err
		}

		s.Chapters = append(s.Chapters, &Chapter{
			ID:      id,
			Chapter: chapterNumber,
			URL:     href,
			c:       c,
		})
	}

	return s, nil
}
func (c *Chapter) GetPageCount() (int, error) {
	resp, err := c.c.get(c.URL)
	if err != nil {
		return 0, err
	}
	defer resp.Body.Close()

	responseData, err := io.ReadAll(resp.Body)
	if err != nil {
		return 0, err
	}

	bPageCount := regexp.MustCompile(`var\s+pages\s*=\s*(\d+)`).FindSubmatch(responseData)[1]
	return strconv.Atoi(string(bPageCount))
}
