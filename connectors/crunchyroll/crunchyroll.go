package crunchyroll

import (
	"net/url"
	"os"

	"github.com/abibby/manga/site"
)

type CrunchyRoll struct {
}

func init() {
	site.RegisterMangaSite(NewCrunchyRoll())

	c, err := NewClient()
	if err != nil {
		panic(err)
	}
	//https://github.com/DasKraken/CR-dl/blob/master/src/api/CrDl.ts
	err = c.Login("", "")
	if err != nil {
		panic(err)
	}
	os.Exit(1)
}

func NewCrunchyRoll() *CrunchyRoll {
	return &CrunchyRoll{}
}

func (m *CrunchyRoll) SiteName() string {
	return "CrunchyRoll"
}

func (m *CrunchyRoll) Books(rawurl string) ([]site.Book, error) {
	return nil, nil
}

func (m *CrunchyRoll) Test(rawurl string) bool {
	u, err := url.Parse(rawurl)
	if err != nil {
		return false
	}
	return u.Hostname() == "crunchyroll.com"
}
