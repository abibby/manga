package site

import (
	"encoding/json"
	"fmt"
	"log"
	"net/url"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/spf13/viper"

	"bitbucket.org/zwzn/manga/comicbox"
	"bitbucket.org/zwzn/mangadownload/mal"
)

type MangaDexSeries struct {
	Manga struct {
		CoverURL    string  `json:"cover_url"`
		Description string  `json:"description"`
		Title       string  `json:"title"`
		Artist      string  `json:"artist"`
		Author      string  `json:"author"`
		Status      int64   `json:"status"`
		Genres      []int64 `json:"genres"`
		LastChapter string  `json:"last_chapter"`
		LangName    string  `json:"lang_name"`
		LangFlag    string  `json:"lang_flag"`
	}
	Chapter map[int64]struct {
		Volume     string  `json:"volume"`
		Chapter    string  `json:"chapter"`
		Title      string  `json:"title"`
		LangCode   string  `json:"lang_code"`
		GroupID    int64   `json:"group_id"`
		GroupName  string  `json:"group_name"`
		GroupID2   int64   `json:"group_id_2"`
		GroupName2 *string `json:"group_name_2"`
		GroupID3   int64   `json:"group_id_3"`
		GroupName3 *string `json:"group_name_3"`
		Timestamp  int64   `json:"timestamp"`
	}
	Status string `json:"status"`
}

func (s *MangaDexSeries) ChapterURLs() []string {

	chapterURLs := []string{}
	for id, _ := range s.Chapter {
		chapterURLs = append(chapterURLs, fmt.Sprintf("https://mangadex.org/api/chapter/%d", id))
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
	MangaID   int64    `json:"manga_id"`
	GroupID   int64    `json:"group_id"`
	GroupID2  int64    `json:"group_id_2"`
	GroupID3  int64    `json:"group_id_3"`
	Comments  int64    `json:"comments"`
	Server    string   `json:"server"`
	Pages     []string `json:"page_array"`
	LongStrip int64    `json:"long_strip"`
	Status    string   `json:"status"`
}

func (s *MangaDexChapter) ImageURLs() []string {
	imageURLs := []string{}
	for _, page := range s.Pages {
		imageURL := s.Server + filepath.Join(s.Hash, page)
		if strings.HasPrefix(imageURL, "/") {
			imageURL = "https://mangadex.org" + imageURL
		}
		imageURLs = append(imageURLs, imageURL)
	}
	return imageURLs
}

var langs = map[string]string{
	"ar": "sa",
	"bn": "bd",
	"bg": "bg",
	"ca": "ct",
	"zh": "cn",
	"hk": "hk",
	"cs": "cz",
	"da": "dk",
	"nl": "nl",
	"en": "gb",
	"ph": "ph",
	"fi": "fi",
	"fr": "fr",
	"de": "de",
	"el": "gr",
	"hu": "hu",
	"id": "id",
	"it": "it",
	"ja": "jp",
	"ko": "kr",
	"ms": "my",
	"mn": "mn",
	"fa": "ir",
	"pl": "pl",
	"br": "br",
	"pt": "pt",
	"ro": "ro",
	"ru": "ru",
	"hr": "rs",
	"es": "es",
	"mx": "mx",
	"sv": "se",
	"th": "th",
	"tr": "tr",
	"uk": "ua",
	"vi": "vn",
}

func mangaDexDownload(rawurl, malID string) error {
	u, _ := url.Parse(rawurl)
	parts := strings.Split(u.Path, "/")

	if len(parts) < 3 {
		return fmt.Errorf("invalid url: not enough parts")
	}

	if parts[1] != "manga" {
		return fmt.Errorf("invalid url: not a series")
	}

	apiURL := fmt.Sprintf("https://mangadex.org/api/manga/%s", parts[2])

	series := &MangaDexSeries{}
	getJson(apiURL, series)

	vLang := viper.GetString("language")
	lang, ok := langs[vLang]
	if !ok {
		lang = vLang
	}

	for id, ch := range series.Chapter {
		if ch.LangCode == lang {

			book := &comicbox.Book{}
			book.Author = series.Manga.Author
			book.Series = series.Manga.Title
			book.Title = ch.Title
			book.Number, _ = strconv.ParseFloat(ch.Chapter, 64)
			book.Volume, _ = strconv.ParseInt(ch.Volume, 10, 64)
			book.DateReleased = comicbox.JSONTime(time.Unix(ch.Timestamp, 0))

			if !chapterExists(book) {
				mangaDexDownloadChapter(series, id, malID, book)
			}
		}
	}
	return nil
}

func mangaDexDownloadChapter(series *MangaDexSeries, id int64, malID string, book *comicbox.Book) {
	chapter := &MangaDexChapter{}
	getJson(fmt.Sprintf("https://mangadex.org/api/chapter/%d", id), chapter)

	book.ImageURLs = chapter.ImageURLs()

	if malID != "0" {
		malData, err := mal.GetManga(malID)
		if err == nil {
			book.Summary = malData.Synopsis
			book.CommunityRating = malData.Score
			book.Genre = strings.Join(malData.Genres, ",")
			book.Web = fmt.Sprintf("https://myanimelist.net/manga/%s", malID)
		}
	}
	err := saveChapter(book)
	if err != nil {
		log.Fatal(err)
	}
}

func getJson(url string, target interface{}) error {
	r, err := client.Get(url)
	if err != nil {
		return err
	}
	defer r.Body.Close()

	return json.NewDecoder(r.Body).Decode(target)
}
