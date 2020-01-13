package mangadex

import (
	"fmt"
	"path/filepath"
	"strings"

	"github.com/zwzn/manga/site"
)

type MangaDexSeriesChapter struct {
	ID       int64  `json:"id"`
	Volume   string `json:"volume"`
	Chapter  string `json:"chapter"`
	Title    string `json:"title"`
	LangCode string `json:"lang_code"`
	// GroupID    int64   `json:"group_id"`
	// GroupName  string  `json:"group_name"`
	// GroupID2   int64   `json:"group_id_2"`
	// GroupName2 *string `json:"group_name_2"`
	// GroupID3   int64   `json:"group_id_3"`
	// GroupName3 *string `json:"group_name_3"`
	Timestamp int64 `json:"timestamp"`
}
type MangaDexManga struct {
	// CoverURL    string  `json:"cover_url"`
	// Description string  `json:"description"`
	Title string `json:"title"`
	// Artist string `json:"artist"`
	Author string `json:"author"`
	// Status      int64   `json:"status"`
	// Genres      []int64 `json:"genres"`
	// LastChapter string  `json:"last_chapter"`
	// LangName    string  `json:"lang_name"`
	// LangFlag    string  `json:"lang_flag"`
}

type MangaDexSeries struct {
	Manga   *MangaDexManga                   `json:"manga"`
	Chapter map[int64]*MangaDexSeriesChapter `json:"chapter"`
	Status  string                           `json:"status"`
}

func (s *MangaDexSeries) ChapterURLs() []string {

	chapterURLs := []string{}
	for id, _ := range s.Chapter {
		chapterURLs = append(chapterURLs, fmt.Sprintf("https://%s/api/chapter/%d", hostName, id))
	}
	return chapterURLs
}

type MangaDexChapter struct {
	ID        int64    `json:"id"`
	Timestamp int64    `json:"timestamp"`
	Hash      string   `json:"hash"`
	Volume    string   `json:"volume"`
	Chapter   string   `json:"chapter"`
	Title     string   `json:"title"`
	LangName  string   `json:"lang_name"`
	LangCode  string   `json:"lang_code"`
	MangaID   int      `json:"manga_id"`
	GroupID   int64    `json:"group_id"`
	GroupID2  int64    `json:"group_id_2"`
	GroupID3  int64    `json:"group_id_3"`
	Comments  int64    `json:"comments"`
	Server    string   `json:"server"`
	Pages     []string `json:"page_array"`
	LongStrip int64    `json:"long_strip"`
	Status    string   `json:"status"`
}

func (s *MangaDexChapter) ImageURLs() []site.Page {
	imageURLs := []site.Page{}
	for _, page := range s.Pages {
		imageURL := s.Server + filepath.Join(s.Hash, page)
		if strings.HasPrefix(imageURL, "/") {
			imageURL = "https://" + hostName + imageURL
		}
		imageURLs = append(imageURLs, site.DefaultPage(imageURL))
	}
	return imageURLs
}

func (s *MangaDexChapter) Series() (*MangaDexSeries, error) {
	return Series(s.MangaID)
}

var chapters = map[int]*MangaDexChapter{}
var series = map[int]*MangaDexSeries{}

func Chapter(id int) (*MangaDexChapter, error) {
	chapter, ok := chapters[id]
	if ok {
		return chapter, nil
	}
	apiURL := fmt.Sprintf("https://%s/api?type=chapter&id=%d", hostName, id)

	chapter = &MangaDexChapter{}
	err := getJson(apiURL, chapter)
	if err != nil {
		return nil, err
	}

	chapters[id] = chapter

	return chapter, nil
}

func Series(id int) (*MangaDexSeries, error) {
	serie, ok := series[id]
	if ok {
		return serie, nil
	}
	apiURL := fmt.Sprintf("https://%s/api?type=manga&id=%d", hostName, id)

	serie = &MangaDexSeries{}
	err := getJson(apiURL, serie)
	if err != nil {
		return nil, err
	}

	series[id] = serie

	return serie, nil
}
