package vizapi

import (
	"encoding/json"
	"fmt"
	"io"
	"log/slog"
	"net/http"
	"net/url"
	"os"
	"regexp"
)

func (c *Client) loadCookies() error {
	b, err := os.ReadFile(c.cookieFile)
	if os.IsNotExist(err) {
		return c.Reauthenticate()
	} else if err != nil {
		return err
	}
	cookies := []*http.Cookie{}
	err = json.Unmarshal(b, &cookies)
	if err != nil {
		return err
	}
	u, err := url.Parse("https://www.viz.com/")
	if err != nil {
		return err
	}
	c.jar.SetCookies(u, cookies)

	return c.updateCSRF()
}

func (c *Client) Reauthenticate() error {
	slog.Info("Viz new login")
	err := c.updateCSRF()
	if err != nil {
		return err
	}

	resp, err := c.postForm("https://www.viz.com/account/try_login", url.Values{
		"login": []string{c.username},
		"pass":  []string{c.password},
		"uid":   []string{"0"},
	})
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	u, err := url.Parse("https://www.viz.com/")
	if err != nil {
		return err
	}
	cookies := c.jar.Cookies(u)

	b, err := json.MarshalIndent(cookies, "", "    ")
	if err != nil {
		return err
	}
	err = os.WriteFile(c.cookieFile, b, 0666)
	if err != nil {
		return err
	}
	return nil
}

func (c *Client) updateCSRF() error {
	resp, err := c.get("https://www.viz.com/account/refresh_login_links")
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	b, err := io.ReadAll(resp.Body)
	if err != nil {
		return err
	}

	csrf := regexp.MustCompile(`var AUTH_TOKEN = "([a-zA-Z0-9\+\/=]+)";`).FindSubmatch(b)
	if len(csrf) == 0 {
		return fmt.Errorf("no csrf token")
	}
	c.csrf = string(csrf[1])
	return nil
}
