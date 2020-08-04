package mangaplus

import (
	"net/url"

	"github.com/abibby/manga/site"
)

type MangaPlus struct {
}

func init() {
	site.RegisterMangaSite(NewMangaPlus())
}

func NewMangaPlus() *MangaPlus {
	return &MangaPlus{}
}

func (m *MangaPlus) SiteName() string {
	return "MangaPlus"
}

func (m *MangaPlus) Books(rawurl string) ([]site.Book, error) {
	return books(rawurl)
}

func (m *MangaPlus) Test(rawurl string) bool {
	u, err := url.Parse(rawurl)
	if err != nil {
		return false
	}
	return u.Hostname() == "mangaplus.shueisha.co.jp"
}
