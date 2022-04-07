package mangadex

import (
	"fmt"
	"net/http/cookiejar"
	"net/url"
	"strings"
	"time"

	"github.com/abibby/manga/site"
	"github.com/abibby/mangadexv5"
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

	if u.Path == "/titles/feed" {
		return mangaDexDownloadFeed(from)
	}

	switch parts[1] {
	case "manga", "title":
		return mangaDexDownloadSeries(parts[2], from)
	}

	return nil, fmt.Errorf("invalid url: not a series or list")
}

func mangaDexDownloadSeries(id string, from int64) ([]site.Book, error) {
	c := mangadexv5.NewClient()
	err := c.Authenticate(viper.GetString("mangadex.username"), viper.GetString("mangadex.password"), "./md-token.json")
	if err != nil {
		return nil, err
	}

	var chapters []*mangadexv5.Chapter
	var response *mangadexv5.PaginatedResponse
	request := &mangadexv5.ChapterListRequest{
		TranslatedLanguage: []string{"en"},
		MangaID:            id,
		Limit:              100,
	}
	books := []site.Book{}

	for mangadexv5.EachPage(request, response) {
		chapters, response, err = c.ChapterList(request)
		if err != nil {
			return nil, err
		}

		newBooks, err := downloadChapters(c, chapters)
		if err != nil {
			return nil, err
		}

		books = append(books, newBooks...)
	}
	return books, nil
}

func mangaDexDownloadFeed(from int64) ([]site.Book, error) {
	c := mangadexv5.NewClient()
	err := c.Authenticate(viper.GetString("mangadex.username"), viper.GetString("mangadex.password"), "./md-token.json")
	if err != nil {
		return nil, err
	}

	chapters, _, err := c.UserFeedChapters(&mangadexv5.UserFeedChaptersRequest{
		TranslatedLanguage: []string{"en"},
		Limit:              100,
		OrderCreatedAt:     mangadexv5.OrderDescending,
	})
	if err != nil {
		return nil, err
	}

	return downloadChapters(c, chapters)
}

func downloadChapters(c *mangadexv5.Client, chapters []*mangadexv5.Chapter) ([]site.Book, error) {
	err := c.AttachManga(chapters)
	if err != nil {
		return nil, err
	}
	books := []site.Book{}

	for _, chapter := range chapters {
		if chapter.Pages > 0 {
			books = append(books, NewBook(c, chapter))
		}
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
