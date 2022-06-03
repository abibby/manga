package site

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"os"
	fp "path/filepath"
	"sort"
	"time"

	"github.com/spf13/viper"
)

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
	ImageDecrypt(io.Reader) (io.Reader, string)
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
	Series          string    `json:"series,omitempty"`
	Title           string    `json:"title,omitempty"`
	Volume          int       `json:"volume,omitempty"`
	Chapter         float64   `json:"chapter,omitempty"`
	Summary         string    `json:"summary,omitempty"`
	Author          string    `json:"author,omitempty"`
	Web             string    `json:"web,omitempty"`
	Genre           string    `json:"genre,omitempty"`
	Tags            string    `json:"tags,omitempty"`
	CommunityRating float64   `json:"community_rating,omitempty"`
	DateReleased    time.Time `json:"date_released,omitempty"`
	Rating          float64   `json:"rating,omitempty"`
	RightToLeft     bool      `json:"rtl,omitempty"`
}

type Page interface {
	URL() (string, error)
}

// Book represents a book on a site.
// Books will offten be loaded without being downloaded,
// try to defer downloading until the method that needs it is called
type Book interface {
	// Pages returns a list of the image URLs of the pages
	Pages() []Page
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

// Download downloads all books from a given URL with chapter >= fromChapter
func Download(db *DB, url string, fromChapter int64) error {

	for _, site := range magnaSites {
		if site.Test(url) {
			return download(db, site, url, fromChapter)
		}
	}
	return fmt.Errorf("no site that matches %s", url)
}

func download(db *DB, site MangaSite, url string, fromChapter int64) error {
	books, err := site.Books(url)
	if err != nil {
		return err
	}
	sort.Slice(books, func(i, j int) bool {
		return folder(db, books[i]) < folder(db, books[j])
	})
	for _, book := range books {
		if book.Chapter() < float64(fromChapter) {
			continue
		}
		if _, err := os.Stat(folder(db, book) + ".cbz"); err == nil {
			continue
		}
		fmt.Printf("Downloading %s\n", name(db, book))
		err := downloadBook(db, site, book)
		if err != nil {
			fmt.Println(err)
		}
	}
	return nil
}

func bookSeries(db *DB, book Book) string {
	s, err := db.SeriesName(book)
	if err != nil {
		log.Print(err)
		return book.Series()
	}
	return s
}

func seriesFolder(db *DB, book Book) string {
	path := viper.GetString("dir")
	folder := fp.Join(path, bookSeries(db, book))
	return folder
}

func name(db *DB, book Book) string {
	name := bookSeries(db, book)
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
func folder(db *DB, book Book) string {
	folder := fp.Join(seriesFolder(db, book), name(db, book))
	return folder
}

func chapterExists(db *DB, book Book) bool {
	_, err := os.Stat(folder(db, book) + ".cbz")
	return err == nil
}

func downloadBook(db *DB, site MangaSite, book Book) error {
	folder := folder(db, book)
	err := os.MkdirAll(folder, 0777)
	if err != nil {
		return err
	}
	for i, image := range book.Pages() {
		uri, err := image.URL()
		if err != nil {
			return err
		}
		ext := ""
		u, err := url.Parse(uri)
		if err != nil {
			ext = fp.Ext(uri)
		} else {
			ext = fp.Ext(u.Path)
		}
		imageFile := fp.Join(folder, fmt.Sprintf("%03d%s", i, ext))
		if _, err := os.Stat(imageFile); err == nil {
			continue
		}
		err = saveImage(site, image, imageFile)
		if err != nil {
			return err
		}
	}
	b, err := json.MarshalIndent(book.Info(), "", "    ")
	if err != nil {
		return err
	}
	ioutil.WriteFile(fp.Join(folder, "book.json"), b, 0777)
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

// ConnectorNames returns a list of the connector names
func ConnectorNames() []string {
	names := []string{}
	for _, connector := range magnaSites {
		names = append(names, connector.SiteName())
	}
	return names
}
