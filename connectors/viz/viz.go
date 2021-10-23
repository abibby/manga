package viz

import (
	"net/url"

	"github.com/abibby/manga/site"
)

type Viz struct {
}

func init() {
	site.RegisterMangaSite(NewMangaPlus())
}

func NewMangaPlus() *Viz {
	return &Viz{}
}

func (m *Viz) SiteName() string {
	return "Viz"
}

func (m *Viz) Books(rawurl string) ([]site.Book, error) {
	return books(rawurl)
}

func (m *Viz) Test(rawurl string) bool {
	u, err := url.Parse(rawurl)
	if err != nil {
		return false
	}
	return u.Hostname() == "www.viz.com"
}
