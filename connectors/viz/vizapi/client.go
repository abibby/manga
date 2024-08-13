package vizapi

import (
	"bytes"
	"fmt"
	"io"
	"log/slog"
	"net/http"
	"net/http/cookiejar"
	"net/url"
	"time"
)

type Client struct {
	httpClient *http.Client
	jar        *cookiejar.Jar

	username string
	password string
	csrf     string

	cookieFile string
	baseURL    string
}

func New(username, password, cookieFile string) (*Client, error) {
	jar, err := cookiejar.New(&cookiejar.Options{})
	if err != nil {
		return nil, err
	}

	c := &Client{
		httpClient: &http.Client{
			Timeout: time.Second * 10,
			Jar:     jar,
		},
		jar:        jar,
		cookieFile: cookieFile,
		baseURL:    "https://www.viz.com",
		username:   username,
		password:   password,
	}
	err = c.loadCookies()
	if err != nil {
		return nil, err
	}
	return c, nil
}

func (c *Client) get(uri string) (*http.Response, error) {
	r, err := http.NewRequest(http.MethodGet, uri, http.NoBody)
	if err != nil {
		return nil, err
	}
	return c.doRequest(r)
}

func (c *Client) postForm(uri string, body url.Values) (*http.Response, error) {
	return c.post(uri, bytes.NewBufferString(body.Encode()))
}

func (c *Client) post(uri string, body io.Reader) (*http.Response, error) {
	r, err := http.NewRequest(http.MethodPost, uri, body)
	if err != nil {
		return nil, err
	}
	return c.doRequest(r)
}

func (c *Client) doRequest(r *http.Request) (*http.Response, error) {
	slog.Debug("viz fetch", "method", r.Method, "url", r.URL)
	r.Header.Add("accept", "application/json, text/javascript, */*; q=0.01")
	r.Header.Add("accept-language", "en-US,en;q=0.9,fr-CA;q=0.8,fr;q=0.7,en-CA;q=0.6")
	r.Header.Add("cache-control", "no-cache")
	r.Header.Add("content-type", "application/x-www-form-urlencoded; charset=UTF-8")
	r.Header.Add("origin", "https://www.viz.com")
	r.Header.Add("pragma", "no-cache")
	r.Header.Add("priority", "u=1, i")
	r.Header.Add("referer", "https://www.viz.com/")
	r.Header.Add("sec-ch-ua", `"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"`)
	r.Header.Add("sec-ch-ua-mobile", "?0")
	r.Header.Add("sec-ch-ua-platform", `"macOS"`)
	r.Header.Add("sec-fetch-dest", "empty")
	r.Header.Add("sec-fetch-mode", "cors")
	r.Header.Add("sec-fetch-site", "same-origin")
	r.Header.Add("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36")
	r.Header.Add("x-client-login", "false")
	r.Header.Add("x-csrf-token", c.csrf)
	r.Header.Add("x-requested-with", "XMLHttpRequest")

	resp, err := c.httpClient.Do(r)
	if err != nil {
		return nil, err
	}
	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		return nil, fmt.Errorf("request %s %s failed: %s", r.Method, r.URL, resp.Status)
	}
	return resp, nil
}
