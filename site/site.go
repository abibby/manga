package site

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	fp "path/filepath"
	"strings"
	"time"

	"bitbucket.org/zwzn/manga/comicbox"
	"github.com/spf13/viper"
)

var client = &http.Client{Timeout: 10 * time.Second}

type MALInfo struct {
}

func Download(url string, from int64) error {

	url = strings.Replace(url, "https://", "", 1)

	if strings.HasPrefix(url, "mangadex.org") {
		err := mangaDexDownload("https://"+url, from)
		if err != nil {
			return err
		}
	} else {
		fmt.Printf("no downloader for %s\n", url)
	}
	return nil
}
func folder(book *comicbox.Book) string {
	path := viper.GetString("dir")
	folder := fp.Join(path, book.Series, book.Name())
	return folder
}

func chapterExists(book *comicbox.Book) bool {
	_, err := os.Stat(folder(book) + ".cbz")
	return err == nil
}

func saveChapter(book *comicbox.Book) error {
	fmt.Printf("saving chapter %s\n", book.Name())
	folder := folder(book)
	os.MkdirAll(folder, 0777)
	for i, image := range book.ImageURLs {
		err := saveFile(image, fp.Join(folder, fmt.Sprintf("%03d%s", i, fp.Ext(image))))
		if err != nil {
			return err
		}
	}
	b, err := json.Marshal(book)
	if err != nil {
		return err
	}
	ioutil.WriteFile(fp.Join(folder, "book.json"), b, 0777)
	book.File = folder + ".cbz"

	err = zipit(folder, book.File)
	if err != nil {
		return err
	}
	err = os.RemoveAll(folder)
	if err != nil {
		return err
	}

	uploadPath := viper.GetString("upload-path")
	if uploadPath != "" {
		fmt.Printf(" uploading %s\n", book.Name())
		err = book.Upload(uploadPath)
		if err != nil {
			return err
		}
	}
	return nil
}
