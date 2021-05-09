package crunchyroll

import (
	"encoding/json"
	"io"
	"net/http"
	"net/http/cookiejar"
	"net/url"
	"os"

	"github.com/davecgh/go-spew/spew"
)

type Query map[string]string

type Client struct {
	host      string
	client    *http.Client
	sessionID string
}

func NewClient() (*Client, error) {
	jar, err := cookiejar.New(&cookiejar.Options{})
	if err != nil {
		return nil, err
	}
	return &Client{
		host: "http://api-manga.crunchyroll.com",
		client: &http.Client{
			Jar: jar,
		},
	}, nil
}

func (a *Client) Request(method string, q Query, v interface{}) error {
	values := url.Values{}
	for key, value := range q {
		values.Add(key, value)
	}
	r, err := a.client.Get(a.host + "/" + method + "?" + values.Encode())
	if err != nil {
		return err
	}
	defer r.Body.Close()

	err = json.NewDecoder(r.Body).Decode(v)
	if err != nil {
		return err
	}
	return nil
}

func (a *Client) Login(user, password string) error {
	r, err := a.client.PostForm("https://www.crunchyroll.com/?a=formhandler", url.Values{
		"formname": {"RpcApiUser_Login"},
		"fail_url": {"http://www.crunchyroll.com/login"},
		"name":     {user},
		"password": {password},
	})
	if err != nil {
		return err
	}
	defer r.Body.Close()

	_, err = io.Copy(os.Stdout, r.Body)
	return err
	// err = json.NewDecoder(r.Body).Decode(v)
	// if err != nil {
	// 	return err
	// }
	// return nil
}

func (a *Client) updateSessionID() error {
	u, err := url.Parse("crunchyroll.com")
	if err != nil {
		return err
	}
	cookies := a.client.Jar.Cookies(u)
	spew.Dump(cookies)
	os.Exit(1)
	// a.sessionID =
	return nil
}
