package mangadex

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"os"
	"regexp"
	"sort"
	"strconv"
	"strings"

	"github.com/mmcdole/gofeed"
	"github.com/pkg/errors"

	"github.com/spf13/viper"
	"github.com/zwzn/manga/site"
	"golang.org/x/text/transform"
	"golang.org/x/text/unicode/norm"
)

type MangaDex struct {
}

func init() {
	site.RegisterMangaSite(NewMangaDex())
}

func NewMangaDex() *MangaDex {
	return &MangaDex{}
}

func (m *MangaDex) SiteName() string {
	return "MangaDex"
}

func (m *MangaDex) Books(rawurl string) ([]site.Book, error) {
	return mangaDexDownload(rawurl, 0)
}

func (m *MangaDex) Test(rawurl string) bool {
	u, err := url.Parse(rawurl)
	if err != nil {
		return false
	}
	return u.Hostname() == "mangadex.org" || u.Hostname() == "mangadex.cc"
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

func mangaDexDownload(rawurl string, from int64) ([]site.Book, error) {
	u, err := url.Parse(rawurl)
	if err != nil {
		return nil, err
	}
	parts := strings.Split(u.Path, "/")

	if len(parts) < 3 {
		return nil, fmt.Errorf("invalid url: not enough parts")
	}
	u.Host = hostName
	switch parts[1] {
	// case "manga", "title":
	// 	return mangaDexDownloadSeries(parts[2], from)
	case "rss":
		return mangaDexDownloadRSS(u.String())
	}

	return nil, fmt.Errorf("invalid url: not a series or list")

}

// func mangaDexDownloadSeries(id string, from int64) ([]site.Book, error) {

// 	idI, err := strconv.Atoi(id)
// 	if err != nil {
// 		return nil, err
// 	}
// 	series, err := Series(idI)
// 	if err != nil {
// 		return nil, err
// 	}
// 	https://mangadex.org/rss/7nCrX9Yzb5QAgNScxmBkFHGyqat4ER8d/manga_id/16617
// 	return series.download()
// }

func mangaDexDownloadRSS(rawurl string) ([]site.Book, error) {
	fp := gofeed.NewParser()
	feed, err := fp.ParseURL(rawurl)
	if err != nil {
		return nil, err
	}

	reTitle := regexp.MustCompile(`^(.*) - (?:Volume (\d+), )?Chapter (\d+(?:\.\d+)?)`)
	reLink := regexp.MustCompile(`^https://mangadex\.(?:org|cc)/chapter/(\d+)$`)

	books := []site.Book{}

	for _, ch := range feed.Items {
		matches := reTitle.FindStringSubmatch(ch.Title)
		if len(matches) < 2 {
			fmt.Fprintf(os.Stderr, "invalid title %s", ch.Title)
			continue
		}
		series := matches[1]

		chapter, err := strconv.ParseFloat(matches[3], 64)
		if err != nil {
			return nil, err
		}

		volume, _ := strconv.Atoi(matches[2])

		id, err := strconv.Atoi(reLink.FindStringSubmatch(ch.Link)[1])
		if err != nil {
			return nil, err
		}
		book := NewBook(id, series, chapter, volume)
		books = append(books, book)
	}

	return books, nil
}

func lang() string {
	vLang := viper.GetString("language")
	lang, ok := langs[vLang]
	if !ok {
		return vLang
	}
	return lang
}

func sortChapters(chapters map[int64]*MangaDexSeriesChapter) []*MangaDexSeriesChapter {
	newChaps := make([]*MangaDexSeriesChapter, len(chapters))
	i := 0
	for id, ch := range chapters {
		ch.ID = id
		newChaps[i] = ch
		i++
	}

	sort.Slice(newChaps, func(i, j int) bool {
		numI, err := strconv.ParseFloat(newChaps[i].Chapter, 64)
		if err != nil {
			return true
		}
		numJ, err := strconv.ParseFloat(newChaps[j].Chapter, 64)
		if err != nil {
			return true
		}
		return numI < numJ
	})

	return newChaps
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

func getJson(url string, target interface{}) error {
	r, err := http.Get(url)
	if err != nil {
		return err
	}
	defer r.Body.Close()
	return errors.Wrapf(json.NewDecoder(r.Body).Decode(target), "failed to get json at '%s'", url)
}
