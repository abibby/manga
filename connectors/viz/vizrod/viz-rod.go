package vizrod

import (
	"time"

	"github.com/go-rod/rod"
	"github.com/go-rod/rod/lib/proto"
)

type Viz struct {
	loggedIn bool
	browser  *rod.Browser
	page     *rod.Page
}

func New() (*Viz, error) {
	b := rod.New()
	err := b.Connect()
	if err != nil {
		return nil, err
	}
	p, err := b.Page(proto.TargetCreateTarget{URL: "https://www.viz.com/"})
	if err != nil {
		return nil, err
	}
	err = p.WaitLoad()
	if err != nil {
		return nil, err
	}
	return &Viz{
		loggedIn: false,
		browser:  b,
		page:     p,
	}, nil
}

func (v *Viz) Login(user, pass string) error {
	if v.loggedIn {
		return nil
	}
	v.page.MustElement(`[href="#modal-login"]`).MustClick()
	// time.Sleep(time.Second)
	v.page.MustElement(`#try_login`).MustInput(user)
	v.page.MustElement(`#try_pass`).MustInput(pass)
	v.page.MustElement(`[value="Log in"]`).MustClick()
	time.Sleep(time.Millisecond * 100)
	v.loggedIn = true
	// v.page.MustScreenshot("a.png")
	return nil
}

func (v *Viz) GetHTML(uri string) (string, error) {
	v.page.Navigate()
	err := v.page.Navigate(uri)
	if err != nil {
		return "", err
	}

	v.page.MustWaitNavigation()

	return v.page.HTML()
}
