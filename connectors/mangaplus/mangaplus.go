package mangaplus

import (
	"net/url"
	"time"

	"github.com/abibby/manga/connectors/mangaplus/mpproto"
	"github.com/abibby/manga/services/httpratelimit"
	"github.com/abibby/manga/site"
)

type MangaPlus struct {
	client *mpproto.Client
}

func init() {
	site.RegisterMangaSite(NewMangaPlus())
}

func NewMangaPlus() *MangaPlus {
	return &MangaPlus{
		client: mpproto.NewClient(httpratelimit.NewClient(5 * time.Second)),
	}
}

func (m *MangaPlus) SiteName() string {
	return "MangaPlus"
}

func (m *MangaPlus) Books(rawurl string) ([]site.Book, error) {
	return m.books(rawurl)
}

func (m *MangaPlus) Test(rawurl string) bool {
	u, err := url.Parse(rawurl)
	if err != nil {
		return false
	}
	return u.Hostname() == "mangaplus.shueisha.co.jp"
}
