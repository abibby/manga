package site

import (
	"encoding/json"
	"fmt"
	"net/url"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/PuerkitoBio/goquery"
	"golang.org/x/text/transform"
	"golang.org/x/text/unicode/norm"

	"github.com/spf13/viper"

	"bitbucket.org/zwzn/manga/comicbox"
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

func mangaDexDownload(rawurl string, from int64) error {
	u, _ := url.Parse(rawurl)
	parts := strings.Split(u.Path, "/")

	if len(parts) < 3 {
		return fmt.Errorf("invalid url: not enough parts")
	}

	switch parts[1] {
	case "manga", "title":
		return mangaDexDownloadSeries(parts[2], from)
	case "list":
		return mangaDexDownloadList(parts[2])
	}

	return fmt.Errorf("invalid url: not a series or list")

}

func mangaDexDownloadList(id string) error {
	doc, err := goquery.NewDocument(fmt.Sprintf("https://mangadex.org/list/%s", id))
	if err != nil {
		return err
	}

	links := doc.Find("a.manga_title")

	links.Each(func(i int, link *goquery.Selection) {
		href, ok := link.Attr("href")
		if !ok {
			return
		}
		mangaDexDownload(fmt.Sprintf("https://mangadex.org%s\n", href), 0)
	})
	return nil
}

func mangaDexDownloadSeries(id string, from int64) error {

	apiURL := fmt.Sprintf("https://mangadex.org/api/manga/%s", id)

	series := &MangaDexSeries{}
	err := getJson(apiURL, series)
	if err != nil {
		return err
	}

	vLang := viper.GetString("language")
	lang, ok := langs[vLang]
	if !ok {
		lang = vLang
	}

	for id, ch := range series.Chapter {
		if ch.LangCode == lang {

			book := &comicbox.Book{}
			book.Author = stripCtlAndExtFromUnicode(series.Manga.Author)
			book.Series = stripCtlAndExtFromUnicode(series.Manga.Title)
			book.Title = stripCtlAndExtFromUnicode(ch.Title)
			book.Number, _ = strconv.ParseFloat(ch.Chapter, 64)
			book.Volume, _ = strconv.ParseInt(ch.Volume, 10, 64)
			book.DateReleased = comicbox.JSONTime(time.Unix(ch.Timestamp, 0))

			if book.Number >= float64(from) && !chapterExists(book) {
				err = mangaDexDownloadChapter(series, id, book)
				if err != nil {
					fmt.Printf("error downloading chapter: %v", err)
				}
			}
		}
	}
	return nil
}

// https://rosettacode.org/wiki/Strip_control_codes_and_extended_characters_from_a_string#Go
func stripCtlAndExtFromUnicode(str string) string {
	isOk := func(r rune) bool {
		return r < 32 || r >= 127
	}
	// The isOk filter is such that there is no need to chain to norm.NFC
	t := transform.Chain(norm.NFKD, transform.RemoveFunc(isOk))
	// This Transformer could also trivially be applied as an io.Reader
	// or io.Writer filter to automatically do such filtering when reading
	// or writing data anywhere.
	str, _, _ = transform.String(t, str)
	return str
}

func mangaDexDownloadChapter(series *MangaDexSeries, id int64, book *comicbox.Book) error {
	chapter := &MangaDexChapter{}
	getJson(fmt.Sprintf("https://mangadex.org/api/chapter/%d", id), chapter)

	book.ImageURLs = chapter.ImageURLs()

	// if malID != "0" {
	// 	malData, err := mal.GetManga(malID)
	// 	if err == nil {
	// 		book.Summary = malData.Synopsis
	// 		book.CommunityRating = malData.Score
	// 		book.Genre = strings.Join(malData.Genres, ",")
	// 		book.Web = fmt.Sprintf("https://myanimelist.net/manga/%s", malID)
	// 	}
	// }
	err := saveChapter(book)
	if err != nil {
		return err
	}
	return nil
}

func getJson(url string, target interface{}) error {
	r, err := client.Get(url)
	if err != nil {
		return err
	}
	defer r.Body.Close()

	return json.NewDecoder(r.Body).Decode(target)
}
