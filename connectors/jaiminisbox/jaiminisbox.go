package jaiminisbox

import (
	"net/url"

	"github.com/zwzn/manga/site"
)

type JaiminisBox struct {
}

func init() {
	site.RegisterMangaSite(NewJaiminisBox())
}

func NewJaiminisBox() *JaiminisBox {
	return &JaiminisBox{}
}

func (m *JaiminisBox) Books(rawurl string) ([]site.Book, error) {
	return seriesBooks(rawurl)
}

func (m *JaiminisBox) Test(rawurl string) bool {
	u, err := url.Parse(rawurl)
	if err != nil {
		return false
	}
	return u.Hostname() == "jaiminisbox.com"
}
