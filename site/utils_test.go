package site

import (
	"image"
	"image/png"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/require"
)

type headerPage struct {
	DefaultPage
	headers http.Header
}

func (p headerPage) ImageHeaders() http.Header { return p.headers }

func TestSaveImageHeaders(t *testing.T) {
	for _, withHeaders := range []bool{false, true} {
		t.Run(map[bool]string{false: "default page", true: "custom headers"}[withHeaders], func(t *testing.T) {
			referer := ""
			if withHeaders {
				referer = "https://www.webtoons.com/"
			}
			server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				if r.Referer() != referer {
					http.Error(w, "incorrect referer", http.StatusForbidden)
					return
				}
				w.Header().Set("Content-Type", "image/png")
				_ = png.Encode(w, image.NewRGBA(image.Rect(0, 0, 2, 3)))
			}))
			defer server.Close()
			var page Page = DefaultPage(server.URL)
			if withHeaders {
				page = headerPage{DefaultPage(server.URL), http.Header{"Referer": {referer}}}
			}
			filename := filepath.Join(t.TempDir(), "page")
			cfg, err := saveImage(page, filename)
			require.NoError(t, err)
			require.Equal(t, 2, cfg.Width)
			require.Equal(t, 3, cfg.Height)
			_, err = os.Stat(filename + ".png")
			require.NoError(t, err)
		})
	}
}
