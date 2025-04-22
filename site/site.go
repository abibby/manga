package site

import (
	"encoding/json"
	"fmt"
	"image"
	"io"
	"log/slog"
	"net/http"
	"os"
	"path"
	"path/filepath"
	fp "path/filepath"
	"slices"
	"strings"
	"time"
)

type Source struct {
	Name string
	URL  string
	From float64
}

// MangaSite is an interface that represents a location to download manga
type MangaSite interface {
	// SiteName returns the name of the site. it is used for the help commands
	SiteName() string
	// Test returns true if the url passed in is can be downloaded from this site
	Test(url string) bool

	// Books returns a list of books
	Books(url string) ([]Book, error)
}

type ImageDecrypter interface {
	ImageDecrypt(io.Reader) io.Reader
}

type ErrorReader struct{ err error }

var _ io.Reader = &ErrorReader{}

func NewErrorReader(err error) *ErrorReader {
	return &ErrorReader{
		err: err,
	}
}

func (er *ErrorReader) Read([]byte) (int, error) {
	return 0, er.err
}

// BookInfo is the data that will be put into the book.json file in the cbz
type BookInfo struct {
	Series          string      `json:"series,omitempty"`
	Title           string      `json:"title,omitempty"`
	Volume          int         `json:"volume,omitempty"`
	Chapter         float64     `json:"chapter,omitempty"`
	Summary         string      `json:"summary,omitempty"`
	Author          string      `json:"author,omitempty"`
	Web             string      `json:"web,omitempty"`
	Genre           string      `json:"genre,omitempty"`
	Tags            string      `json:"tags,omitempty"`
	CommunityRating float64     `json:"community_rating,omitempty"`
	DateReleased    time.Time   `json:"date_released,omitempty"`
	Rating          float64     `json:"rating,omitempty"`
	RightToLeft     bool        `json:"rtl,omitempty"`
	LongStrip       bool        `json:"long_strip,omitempty"`
	Pages           []*InfoPage `json:"pages,omitempty"`
}

type InfoPage struct {
	Type   PageType `json:"type"`
	Height int      `json:"height"`
	Width  int      `json:"width"`
}

type PageType string

const (
	PageTypeFrontCover  = PageType("FrontCover")
	PageTypeStory       = PageType("Story")
	PageTypeSpread      = PageType("Spread")
	PageTypeSpreadSplit = PageType("SpreadSplit")
	PageTypeDeleted     = PageType("Deleted")
)

type Page interface {
	URL() (string, error)
}
type PageTyper interface {
	Type() PageType
}

// Book represents a book on a site.
// Books will offten be loaded without being downloaded,
// try to defer downloading until the method that needs it is called
type Book interface {
	// Pages returns a list of the image URLs of the pages
	Pages() ([]Page, error)
	// ID is a unique representation of the chapter
	ID() string
	// Series is the name of the series the chapter belongs to
	Series() string
	// Series is the name of the series the chapter belongs to
	SeriesID() string
	// Chapter is the number of the chapter
	Chapter() float64
	// Volume is the volume number of the chapter
	Volume() int
	// info contains the information that will be in the book.json file
	Info() *BookInfo
}

type DefaultPage string

func (p DefaultPage) URL() (string, error) {
	return string(p), nil
}

var magnaSites []MangaSite
var client = &http.Client{Timeout: 10 * time.Second}

// RegisterMangaSite registers a connector so it will get used when Download is called
func RegisterMangaSite(site MangaSite) {
	magnaSites = append(magnaSites, site)
}

// ConnectorNames returns a list of the connector names
func ConnectorNames() []string {
	names := []string{}
	for _, connector := range magnaSites {
		names = append(names, connector.SiteName())
	}
	return names
}

type sourceDownload struct {
	db     *DB
	path   string
	site   MangaSite
	source *Source
}

// Download downloads all books from a given URL with chapter >= fromChapter
func Download(db *DB, path string, s *Source) error {
	for _, site := range magnaSites {
		if site.Test(s.URL) {
			d := &sourceDownload{
				db:     db,
				path:   path,
				site:   site,
				source: s,
			}
			return d.download()
		}
	}
	return fmt.Errorf("no site that matches %s", s.URL)
}

func (d *sourceDownload) download() error {
	books, err := d.site.Books(d.source.URL)
	if err != nil {
		return err
	}
	slices.SortFunc(books, func(a, b Book) int {
		return strings.Compare(
			d.sortStr(a),
			d.sortStr(b),
		)
	})

	for _, book := range books {
		if book.Chapter() < d.source.From {
			slog.Debug("chapter too early", "book", d.name(book), "from", d.source.From)
			continue
		}
		bookFile := d.folder(book) + ".cbz"
		if fileExists(bookFile) {
			slog.Debug("chapter already downloaded", "book", d.name(book), "file", bookFile)
			continue
		}
		slog.Info("Downloading book", "name", d.name(book))
		err := d.downloadBook(book)
		if err != nil {
			slog.Error("Failed to download book", "name", d.name(book), "err", err)
		}
	}
	return nil
}

func (d *sourceDownload) bookSeries(book Book) string {
	if d.source.Name != "" {
		return d.source.Name
	}
	name, err := d.db.SeriesName(book)
	if err != nil {
		slog.Warn("Could not find series name in database", "err", err)
		return book.Series()
	}
	return name
}

func (d *sourceDownload) seriesFolder(book Book) string {
	folder := fp.Join(d.path, d.bookSeries(book))
	return folder
}

func (d *sourceDownload) name(book Book) string {
	name := d.bookSeries(book)
	if book.Volume() != 0 {
		name += fmt.Sprintf(" V%d", book.Volume())
	}
	if book.Chapter() != 0 {
		name += fmt.Sprintf(" #%.6g", book.Chapter())
	}
	if book.Volume() == 0 && book.Chapter() == 0 {
		name += " " + book.ID()
	}
	return name
}
func (d *sourceDownload) folder(book Book) string {
	folder := fp.Join(d.seriesFolder(book), d.name(book))
	return folder
}
func (d *sourceDownload) sortStr(book Book) string {
	volume := book.Volume()
	if volume == 0 {
		volume = 999
	}
	return fmt.Sprintf("%s-%05d-%06.2f", d.seriesFolder(book), volume, book.Chapter())
}

func (d *sourceDownload) downloadBook(book Book) error {
	folder := d.folder(book)
	err := os.MkdirAll(folder, 0777)
	if err != nil {
		return err
	}
	pages, err := book.Pages()
	if err != nil {
		return err
	}

	info := book.Info()
	updatePages := info.Pages == nil
	if updatePages {
		info.Pages = make([]*InfoPage, len(pages))
	}
	existingPages := map[string]string{}
	pageFiles, err := os.ReadDir(folder)
	if err != nil {
		return err
	}

	for _, file := range pageFiles {
		name := path.Join(folder, file.Name())
		ext := filepath.Ext(name)
		name = strings.TrimSuffix(name, ext)
		existingPages[name] = name + ext
	}

	for i, page := range pages {
		imageBasePath := fp.Join(folder, fmt.Sprintf("%03d", i))
		var img image.Image
		if file, ok := existingPages[imageBasePath]; ok {
			if updatePages {
				f, err := os.Open(file)
				if err != nil {
					return err
				}
				img, _, err = image.Decode(f)
				f.Close()
				if err != nil {
					return err
				}
			}
		} else {
			img, err = saveImage(page, imageBasePath)
			if err != nil {
				return err
			}
		}

		if updatePages {
			w := img.Bounds().Dx()
			h := img.Bounds().Dy()
			var typ PageType
			if typer, ok := page.(PageTyper); ok {
				typ = typer.Type()
			} else if i == 0 {
				typ = PageTypeFrontCover
			} else if w > h {
				typ = PageTypeSpread
			} else {
				typ = PageTypeStory
			}
			info.Pages[i] = &InfoPage{
				Width:  w,
				Height: h,
				Type:   typ,
			}
		}
	}

	if info.Pages == nil {
		info.Pages = []*InfoPage{}
		for i, p := range pages {
			page := &InfoPage{
				// Width: ,
			}
			if typer, ok := p.(PageTyper); ok {
				page.Type = typer.Type()
			} else {
				if i == 0 {
					page.Type = PageTypeFrontCover
				} else {
					page.Type = PageTypeStory
				}
			}
			info.Pages = append(info.Pages, page)
		}
	}
	info.Series = d.bookSeries(book)
	b, err := json.MarshalIndent(info, "", "    ")
	if err != nil {
		return err
	}
	err = os.WriteFile(fp.Join(folder, "book.json"), b, 0777)
	if err != nil {
		return err
	}

	file := folder + ".cbz"
	err = zipit(folder, file)
	if err != nil {
		return err
	}
	err = os.RemoveAll(folder)
	if err != nil {
		return err
	}

	return nil
}

func fileExists(f string) bool {
	_, err := os.Stat(f)
	return err == nil
}
