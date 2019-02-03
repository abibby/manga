package site

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"os"
	fp "path/filepath"
	"time"

	"github.com/spf13/viper"
)

// MangaSite is an interface that represents a location to download manga
type MangaSite interface {
	// Test returns true if the url passed in is can be downloaded from this site
	Test(url string) bool

	// Books returns a list of books
	Books(url string) ([]Book, error)
}

type BookInfo struct {
	Series          string    `json:"series"`
	Title           string    `json:"title"`
	Volume          int64     `json:"volume"`
	Chapter         float64   `json:"chapter"`
	Summary         string    `json:"summary"`
	Author          string    `json:"author"`
	Web             string    `json:"web"`
	Genre           string    `json:"genre"`
	Tags            string    `json:"tags"`
	CommunityRating float64   `json:"community_rating"`
	DateReleased    time.Time `json:"date_released"`
	Rating          float64   `json:"rating"`
}

type Book interface {
	Pages() []string
	ID() string
	Series() string
	Chapter() float64
	Info() *BookInfo
}

var magnaSites []MangaSite

func RegisterMangaSite(site MangaSite) {
	magnaSites = append(magnaSites, site)
}

var client = &http.Client{Timeout: 10 * time.Second}

func Download(url string, fromChapter int64) error {

	for _, site := range magnaSites {
		if site.Test(url) {
			return download(site, url, fromChapter)
		}
	}
	return fmt.Errorf("no site that matches %s", url)
}

func download(site MangaSite, url string, fromChapter int64) error {
	books, err := site.Books(url)
	if err != nil {
		return err
	}

	for _, book := range books {
		if book.Chapter() < float64(fromChapter) {
			continue
		}
		if _, err := os.Stat(folder(book) + ".cbz"); err == nil {
			continue
		}
		fmt.Printf("Downloading %s\n", name(book))
		err := downloadBook(book)
		if err != nil {
			fmt.Println(err)
		}
	}
	return nil
}

func seriesFolder(book Book) string {
	path := viper.GetString("dir")
	folder := fp.Join(path, book.Series())
	return folder
}

func name(book Book) string {
	info := book.Info()
	name := info.Series
	if info.Volume != 0 {
		name += fmt.Sprintf(" V%d", info.Volume)
	}
	if info.Chapter != 0 {
		name += fmt.Sprintf(" #%.6g", info.Chapter)
	}
	if info.Volume == 0 && info.Chapter == 0 {
		name += " " + info.Title
	}
	return name
}
func folder(book Book) string {
	folder := fp.Join(seriesFolder(book), name(book))
	return folder
}

func chapterExists(book Book) bool {
	_, err := os.Stat(folder(book) + ".cbz")
	return err == nil
}

func downloadBook(book Book) error {
	folder := folder(book)
	os.MkdirAll(folder, 0777)
	for i, image := range book.Pages() {
		ext := ""
		u, err := url.Parse(image)
		if err != nil {
			ext = fp.Ext(image)
		} else {
			ext = fp.Ext(u.Path)
		}
		imageFile := fp.Join(folder, fmt.Sprintf("%03d%s", i, ext))
		if _, err := os.Stat(imageFile); err == nil {
			continue
		}
		err = saveFile(image, imageFile)
		if err != nil {
			return err
		}
	}
	b, err := json.Marshal(book)
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
