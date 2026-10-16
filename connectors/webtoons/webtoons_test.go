package webtoons

import (
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"
	"testing"
	"time"

	"github.com/abibby/manga/site"
	"github.com/stretchr/testify/require"
)

type roundTripFunc func(*http.Request) (*http.Response, error)

func (f roundTripFunc) RoundTrip(r *http.Request) (*http.Response, error) { return f(r) }

func testConnector(t *testing.T, handler func(*http.Request) (int, string)) *Webtoons {
	t.Helper()
	return &Webtoons{client: &http.Client{Transport: roundTripFunc(func(r *http.Request) (*http.Response, error) {
		require.Equal(t, "www.webtoons.com", r.URL.Host)
		require.Equal(t, baseURL+"/", r.Referer())
		require.NotEmpty(t, r.UserAgent())
		require.Contains(t, r.Header.Get("Cookie"), "pagGDPR=true")
		status, body := handler(r)
		return &http.Response{
			StatusCode: status, Status: fmt.Sprintf("%d %s", status, http.StatusText(status)),
			Body: io.NopCloser(strings.NewReader(body)), Header: make(http.Header), Request: r,
		}, nil
	})}}
}

const seriesURL = baseURL + "/en/fantasy/example/list?title_no=95"

func listHTML(layout, episodes string) string {
	return `<html><head><meta property="og:title" content="Example &amp; Friends">
	<meta property="og:description" content="A story">
	<meta property="com-linewebtoon:webtoon:author" content="Creator"></head><body>
	<div class="info"><h2 class="genre">Fantasy</h2></div>
	<div class="detail_body"><div class="` + layout + `"><ul>` + episodes + `</ul></div></div></body></html>`
}

func episode(href, number, title string) string {
	return `<li><a href="` + href + `"><span class="subj"><span>` + title + `</span></span>
	<span class="tx">` + number + `</span><span class="date">Feb 9, 2025</span></a></li>`
}

func TestURLMatching(t *testing.T) {
	w := &Webtoons{}
	for _, rawurl := range []string{seriesURL, "http://webtoons.com/en/canvas/example/list?title_no=1", "https://m.webtoons.com/fr/fantasy/example/list?title_no=1"} {
		require.True(t, w.Test(rawurl), rawurl)
	}
	for _, rawurl := range []string{"", "%", "https://webtoons.com.evil.test/en", "https://evil.test/?webtoons.com", "ftp://www.webtoons.com/en", "https://webtoons.com@evil.test"} {
		require.False(t, w.Test(rawurl), rawurl)
	}
}

func TestBooksPaginationAndMetadata(t *testing.T) {
	for _, layout := range []string{"detail_lst", "detail_list_area"} {
		for _, ending := range []string{"empty", "repeated"} {
			t.Run(layout+"/"+ending, func(t *testing.T) {
				requests := 0
				latest := episode("/en/fantasy/example/third/viewer?title_no=95&amp;episode_no=3", "#2", "Season 2 - Ep. 0")
				older := episode("javascript:openViewer('/en/fantasy/example/second/viewer?title_no=95&amp;episode_no=2')", "#1", "Second")
				first := episode("//www.webtoons.com/en/fantasy/example/first/viewer?title_no=95&amp;episode_no=1", "#0", "Prologue")
				w := testConnector(t, func(r *http.Request) (int, string) {
					requests++
					require.LessOrEqual(t, requests, 3, "pagination must terminate")
					require.Equal(t, fmt.Sprint(requests), r.URL.Query().Get("page"))
					require.Empty(t, r.URL.Query().Get("sort"))
					switch requests {
					case 1:
						return 200, listHTML(layout, latest+older)
					case 2:
						return 200, listHTML(layout, older+first)
					default:
						if ending == "repeated" {
							return 200, listHTML(layout, older+first)
						}
						return 200, listHTML(layout, "")
					}
				})
				books, err := w.Books(seriesURL + "&page=10&sort=ASC")
				require.NoError(t, err)
				require.Len(t, books, 3)
				require.Equal(t, 3, requests)
				require.Equal(t, "3", books[0].ID())
				require.Equal(t, "webtoons:en:originals:95", books[0].SeriesID())
				require.Equal(t, float64(0), books[0].Chapter())
				require.Equal(t, 2, books[0].Volume())
				require.Equal(t, float64(0), books[2].Chapter())
				require.Equal(t, "Example & Friends", books[0].Series())
				info := books[0].Info()
				require.Equal(t, books[0].Chapter(), info.Chapter)
				require.Equal(t, books[0].Volume(), info.Volume)
				require.Equal(t, "Season 2 - Ep. 0", info.Title)
				require.Equal(t, "Creator", info.Author)
				require.Equal(t, "Fantasy", info.Genre)
				require.Equal(t, "A story", info.Summary)
				require.Equal(t, time.Date(2025, 2, 9, 0, 0, 0, 0, time.UTC), info.DateReleased)
				require.True(t, info.LongStrip)
				require.False(t, info.RightToLeft)
				require.Nil(t, info.Pages, "shared downloader must fill in image dimensions")
			})
		}
	}
}

func TestCanvasAndLanguageIdentity(t *testing.T) {
	requests := 0
	w := testConnector(t, func(r *http.Request) (int, string) {
		requests++
		body := ""
		if requests == 1 {
			body = episode("/fr/canvas/example/first/viewer?title_no=95&amp;episode_no=1", "", "First")
		}
		return 200, listHTML("detail_list_area", body)
	})
	books, err := w.Books("https://m.webtoons.com/fr/canvas/example/list?title_no=95")
	require.NoError(t, err)
	require.Len(t, books, 1)
	require.Equal(t, "webtoons:fr:canvas:95", books[0].SeriesID())
	require.Equal(t, float64(1), books[0].Chapter(), "fall back to episode ID when the display number is absent")
}

func TestBooksUsesTitleNumbers(t *testing.T) {
	for _, tc := range []struct {
		title      string
		listNumber string
		chapter    float64
		volume     int
	}{
		{"Chapter 3", "#4", 3, 0},
		{"Chapter 3 (Part 2)", "#4", 3, 0},
		{"CH. 003 - Arrival", "#4", 3, 0},
		{"Chap. 3.5: Bonus", "#4", 3.5, 0},
		{"Episode 3", "#4", 3, 0},
		{"Ep.3 - Arrival", "#4", 3, 0},
		{"Episode #3", "#4", 3, 0},
		{"Episode 0 - Prologue", "#1", 0, 0},
		{"3", "#4", 3, 0},
		{"003 - Arrival", "#4", 3, 0},
		{"3. Arrival", "#4", 3, 0},
		{"3.5 - Bonus", "#4", 3.5, 0},
		{"#3: Arrival", "#4", 3, 0},
		{"[Season 2] Ep. 3", "#104", 3, 2},
		{"S2 - Episode 3", "#104", 3, 2},
		{"[Season 3] Ep. 235 (Season 3 Finale)", "#652", 235, 3},
		{"Arrival", "#4", 4, 0},
		{"Season 2 Finale", "#104", 104, 0},
		{"A journey of 3 days", "#4", 4, 0},
		{"Arrival", "", 4, 0},
	} {
		t.Run(tc.title+"/"+tc.listNumber, func(t *testing.T) {
			w := testConnector(t, func(r *http.Request) (int, string) {
				body := ""
				if r.URL.Query().Get("page") == "1" {
					body = episode("/en/fantasy/example/chapter/viewer?title_no=95&amp;episode_no=4", tc.listNumber, tc.title)
				}
				return 200, listHTML("detail_list_area", body)
			})
			books, err := w.Books(seriesURL)
			require.NoError(t, err)
			require.Len(t, books, 1)
			book := books[0]
			require.Equal(t, "4", book.ID(), "episode identity must remain independent of chapter numbering")
			require.Equal(t, tc.chapter, book.Chapter())
			require.Equal(t, tc.volume, book.Volume())
			require.Equal(t, tc.chapter, book.Info().Chapter)
			require.Equal(t, tc.volume, book.Info().Volume)
			require.Equal(t, tc.title, book.Info().Title)
		})
	}
}

func TestBooksErrors(t *testing.T) {
	for _, rawurl := range []string{baseURL, seriesURL + "invalid", baseURL + "/en/fantasy/example/list", baseURL + "/en/fantasy/example/list?title_no=-1", baseURL + "/en/fantasy/example/ep/viewer?title_no=95&episode_no=1"} {
		t.Run(rawurl, func(t *testing.T) {
			_, err := (&Webtoons{}).Books(rawurl)
			require.Error(t, err)
		})
	}
	for _, tc := range []struct {
		name   string
		status int
		body   string
	}{
		{"HTTP failure", 403, "Forbidden"},
		{"missing list", 200, "<html>Login required</html>"},
		{"empty list", 200, listHTML("detail_lst", "")},
		{"invalid episode", 200, listHTML("detail_lst", episode("/viewer?title_no=95&episode_no=bad", "#1", "Bad"))},
	} {
		t.Run(tc.name, func(t *testing.T) {
			w := testConnector(t, func(*http.Request) (int, string) { return tc.status, tc.body })
			_, err := w.Books(seriesURL)
			require.Error(t, err)
		})
	}
}

func TestPages(t *testing.T) {
	requests := 0
	w := testConnector(t, func(*http.Request) (int, string) {
		requests++
		return 200, `<img data-url="https://example.test/thumbnail.jpg">
		<div class="viewer"><div class="viewer_lst"><div class="viewer_img">
		<img src="placeholder.gif" data-url="//cdn.example.test/first.jpg?type=q90&amp;token=keep">
		<img data-url="/images/second.png?type=q90">
		</div></div></div>`
	})
	u, err := url.Parse(baseURL + "/en/fantasy/example/first/viewer?title_no=95&episode_no=1")
	require.NoError(t, err)
	b := &Book{connector: w, url: u}
	pages, err := b.Pages()
	require.NoError(t, err)
	require.Len(t, pages, 2)
	for i, expected := range []string{"https://cdn.example.test/first.jpg?token=keep", baseURL + "/images/second.png"} {
		actual, err := pages[i].URL()
		require.NoError(t, err)
		require.Equal(t, expected, actual)
		require.Equal(t, u.String(), pages[i].(site.ImageHeaderProvider).ImageHeaders().Get("Referer"))
		require.Equal(t, site.PageTypeStory, pages[i].(site.PageTyper).Type())
	}
	_, err = b.Pages()
	require.NoError(t, err)
	require.Equal(t, 1, requests, "page URLs should be cached")
}

func TestPagesErrors(t *testing.T) {
	for _, body := range []string{"<html>Episode unavailable</html>", `<div class="viewer"><div class="viewer_lst"><div class="viewer_img"><img data-url="data:invalid"></div></div></div>`} {
		w := testConnector(t, func(*http.Request) (int, string) { return 200, body })
		u, err := url.Parse(seriesURL)
		require.NoError(t, err)
		b := &Book{connector: w, url: u}
		_, err = b.Pages()
		require.Error(t, err)
		require.Nil(t, b.pages)
	}
}
