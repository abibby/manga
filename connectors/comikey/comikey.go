package comikey

import (
	"net/url"
	"strings"

	"github.com/abibby/manga/site"
)

type Comikey struct {
}

func init() {
	site.RegisterMangaSite(NewComikey())
}

func NewComikey() *Comikey {
	return &Comikey{}
}

func (m *Comikey) SiteName() string {
	return "Comikey"
}

func (m *Comikey) Books(rawurl string) ([]site.Book, error) {
	u, err := url.Parse(rawurl)
	if err != nil {
		return nil, err
	}
	parts := strings.Split(strings.TrimPrefix(u.Path, "/"), "/")
	if parts[0] == "comics" {
		return seriesBooks(parts[2])
	}
	return nil, nil
}

func (m *Comikey) Test(rawurl string) bool {
	u, err := url.Parse(rawurl)
	if err != nil {
		return false
	}
	return u.Hostname() == "comikey.com"
}
