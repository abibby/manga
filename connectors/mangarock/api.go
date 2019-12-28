package mangarock

import (
	"encoding/json"
	"fmt"
	"net/http"
	"regexp"
	"strconv"
	"strings"

	"github.com/zwzn/manga/site"
)

type MangaRockSeries struct {
	Name      string   `json:"name"`
	Cover     string   `json:"cover"`
	Alias     []string `json:"alias"`
	Thumbnail string   `json:"thumbnail"`

	ThumbnailExtra struct {
		Generated           bool   `json:"generated"`
		AverageColor        string `json:"averageColor"`
		TextBackgroundColor string `json:"textBackgroundColor"`
		TextColor           string `json:"textColor"`
	} `json:"thumbnail_extra"`

	CoverExtra struct {
		Generated           bool   `json:"generated"`
		AverageColor        string `json:"averageColor"`
		TextBackgroundColor string `json:"textBackgroundColor"`
		TextColor           string `json:"textColor"`
	} `json:"cover_extra"`

	Rank          int    `json:"rank"`
	Removed       bool   `json:"removed"`
	Author        string `json:"author"`
	Completed     bool   `json:"completed"`
	Direction     int    `json:"direction"`
	Categories    []int  `json:"categories"`
	TotalChapters int    `json:"total_chapters"`
	Description   string `json:"description"`

	ReleaseFrequency struct {
		Type   string `json:"type"`
		Unit   string `json:"unit"`
		Amount int    `json:"amount"`
	} `json:"release_frequency"`
}

type MangaRockChapters struct {
	Chapters []*MangaRockChapter
}
type MangaRockChapter struct {
	ID        string `json:"oid"`
	Name      string `json:"name"`
	reMatches []string
}

var chapterRE = regexp.MustCompile(`(?:Vol\.([^ ]+) )?Chapter (\d+(?:\.\d+)?)(?:: (.*))?`)
var chapterREFallback = regexp.MustCompile(`^[^\d]*(\d+)`)

func (m *MangaRockChapter) matches(i int) string {
	if m.reMatches == nil {
		m.reMatches = chapterRE.FindStringSubmatch(m.Name)
	}
	if len(m.reMatches) == 0 {
		matches := chapterREFallback.FindStringSubmatch(m.Name)
		if len(matches) != 0 {
			m.reMatches = []string{"", "", matches[1], ""}
		}
	}
	if len(m.reMatches) <= i {
		return ""
	}
	return m.reMatches[i]
}
func (m *MangaRockChapter) Title() string {
	return m.matches(3)
}
func (m *MangaRockChapter) Volume() int {
	vol, err := strconv.Atoi(m.matches(1))
	if err != nil {
		return 0
	}
	return vol
}
func (m *MangaRockChapter) Chapter() float64 {
	ch, err := strconv.ParseFloat(m.matches(2), 64)
	if err != nil {
		return 0
	}
	return ch
}

type MangaDetailData struct {
	BasicInfo *MangaRockSeries   `json:"basic_info"`
	Chapters  *MangaRockChapters `json:"chapters"`
	// Summary   Summary   `json:"summary"`
	// Default   Default   `json:"default"`
}

type MangaDetailResponse struct {
	Code int                         `json:"code"`
	Data map[string]*MangaDetailData `json:"data"`
}

func Series(id string) (*MangaDetailData, error) {
	// "basic_info"
	// "summary"
	// "artworks"
	// "sub_genres"
	// "social_stats"
	// "author"
	// "character"
	// "publisher"
	// "scanlator"
	// "other_fact"
	// "chapters"
	// "related_series"
	// "same_author"
	// "feature_collections"
	body := fmt.Sprintf(`{"oids":{"%s":0},"sections":["basic_info", "chapters"]}`, id)

	r := &MangaDetailResponse{}
	err := getJson("https://api.mangarockhd.com/query/web401/manga_detail", body, r)
	if err != nil {
		return nil, err
	}

	for _, d := range r.Data {
		return d, nil
	}
	return nil, fmt.Errorf("no response")
}

func getJson(url string, body string, target interface{}) error {
	r, err := http.Post(url, "application/json", strings.NewReader(body))
	if err != nil {
		return err
	}
	defer r.Body.Close()

	// if url != "https://api.mangarockhd.com/query/web401/manga_detail" {
	// 	io.Copy(os.Stdout, r.Body)
	// 	os.Exit(1)
	// }
	return json.NewDecoder(r.Body).Decode(target)
}

func (m *MangaDetailData) Books() []site.Book {
	books := []site.Book{}
	for _, ch := range m.Chapters.Chapters {
		books = append(books, NewBook(ch, m.BasicInfo))
	}
	return books
}

type Page struct {
	ImageURL string `json:"url"`
	Role     string `json:"role"`
}

var _ site.ImageDecrypter = &Page{}
var _ site.Page = &Page{}

type PagesData struct {
	Data []*Page `json:"data"`
}

func Pages(id string) ([]*Page, error) {
	r := &PagesData{}
	err := getJson(fmt.Sprintf("https://api.mangarockhd.com/query/web401/pagesv2?oid=%s", id), "", r)
	if err != nil {
		return nil, err
	}
	// spew.Dump(r)
	// os.Exit(1)
	return r.Data, nil
}

// https://github.com/manga-download/hakuneko/blob/master/web/lib/hakuneko/engine/base/connectors/mangarock.html

// function _decryptImage( encrypted, key, mime ) {
//     let decrypted = new Uint8Array( encrypted.length + 15 );
//     let n = encrypted.length + 7;
//     let header = Uint8Array.of( 82, 73, 70, 70, n & 255, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 87, 69, 66, 80, 86, 80, 56 );
//     let data = encrypted.map( byte => {
//         return ( key ^ byte );
//     } );
//     decrypted.set( header, 0 );
//     decrypted.set( data, header.length );
//     resolve( {
//         mimeType: mime,
//         data: decrypted
//     } );
// }
