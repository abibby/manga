package mangarock

import (
	"io"
	"net/url"
	"strings"

	"github.com/abibby/manga/site"
)

// curl 'https://api.mangarockhd.com/query/web401/manga_detail?country=Canada'
//     -H 'Accept: application/json'
//     -H 'Referer: https://mangarock.com/manga/mrs-serie-100359900'
//     -H 'Origin: https://mangarock.com'
//     -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
//     -H 'Content-Type: application/json'
//     --data-binary '{"oids":{"mrs-serie-100350535":0},"sections":["basic_info","summary"]}' --compressed

type MangaRock struct {
}

func init() {
	site.RegisterMangaSite(NewMangaRock())
}

func NewMangaRock() *MangaRock {
	return &MangaRock{}
}

var _ site.MangaSite = &MangaRock{}

func (m *MangaRock) SiteName() string {
	return "MangaRock"
}

func (m *MangaRock) Test(rawurl string) bool {
	u, err := url.Parse(rawurl)
	if err != nil {
		return false
	}
	return u.Hostname() == "mangarock.com"
}

func (m *MangaRock) Books(rawurl string) ([]site.Book, error) {
	u, err := url.Parse(rawurl)
	if err != nil {
		return nil, err
	}
	parts := strings.Split(u.Path, "/")
	if parts[1] == "manga" {
		return downloadSeries(parts[2])
	}
	return nil, nil
}

func downloadSeries(id string) ([]site.Book, error) {
	s, err := Series(id)
	if err != nil {
		return nil, err
	}
	b := s.Books()
	return b, nil
}

type errorReader struct{ err error }

var _ io.Reader = &errorReader{}

func (er *errorReader) Read([]byte) (int, error) {
	return 0, er.err
}
