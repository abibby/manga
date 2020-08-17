package mangadex

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/cookiejar"
	"net/url"
	"os"
	"regexp"
	"sort"
	"strconv"
	"strings"
	"time"

	"github.com/mmcdole/gofeed"
	"github.com/pkg/errors"

	"github.com/abibby/manga/site"
	"github.com/spf13/viper"
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
	case "manga", "title":
		return mangaDexDownloadSeries(parts[2], from)
	case "rss":
		return mangaDexDownloadRSS(u.String())
	}

	return nil, fmt.Errorf("invalid url: not a series or list")

}

func mangaDexDownloadSeries(id string, from int64) ([]site.Book, error) {

	idI, err := strconv.Atoi(id)
	if err != nil {
		return nil, err
	}
	series, err := Series(idI)
	if err != nil {
		return nil, err
	}

	return series.download(viper.GetString("language"))
}

func mangaDexDownloadRSS(rawurl string) ([]site.Book, error) {
	fp := gofeed.NewParser()
	r, err := get(rawurl)
	if err != nil {
		return nil, err
	}
	defer r.Body.Close()

	feed, err := fp.Parse(r.Body)
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

var lastRequest time.Time

var hostName string = "mangadex.org"

var cookieJar, _ = cookiejar.New(nil)

func get(rawurl string) (*http.Response, error) {
	timeToWait := (time.Second * 4) - time.Since(lastRequest)
	if timeToWait > 0 {
		time.Sleep(timeToWait)
	}

	lastRequest = time.Now()
	u, err := url.Parse(rawurl)
	if err != nil {
		return nil, err
	}
	u.Host = hostName

	client := &http.Client{
		Jar: cookieJar,
	}
	// spew.Dump(u.String())
	req, err := http.NewRequest("GET", u.String(), nil)
	if err != nil {
		return nil, err
	}

	req.Header.Set("User-Agent", "Mozilla/5.0 (X11; Linux x86_64; rv:71.0) Gecko/20100101 Firefox/71.0")
	req.Header.Set("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
	req.Header.Set("Accept-Language", "en-US,en;q=0.")
	req.Header.Set("DNT", "1")
	req.Header.Set("Connection", "keep-alive")
	req.Header.Set("Upgrade-Insecure-Requests", "1")
	req.Header.Set("Pragma", "no-cache")
	req.Header.Set("Cache-Control", "no-cache")

	r, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	if r.StatusCode < 200 || r.StatusCode > 299 {
		return nil, fmt.Errorf("bad status %s", r.Status)
	}
	return r, nil
}

func getJson(rawurl string, target interface{}) error {
	r, err := get(rawurl)
	if err != nil {
		return err
	}
	defer r.Body.Close()
	return errors.Wrapf(json.NewDecoder(r.Body).Decode(target), "failed to get json at '%s'", rawurl)
}
