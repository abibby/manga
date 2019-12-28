package site

import (
	"archive/zip"
	"io"
	"log"
	"os"
	fp "path/filepath"
	"strings"
)

// https://stackoverflow.com/a/22417396
func saveFile(site MangaSite, page Page, path string) error {
	response, e := client.Get(page.URL())
	if e != nil {
		log.Fatal(e)
	}

	defer response.Body.Close()

	body := io.Reader(response.Body)
	if decoder, ok := page.(ImageDecrypter); ok {
		ext := ""
		body, ext = decoder.ImageDecrypt(body)
		path = path + "." + ext
	}

	//open a file for writing
	file, err := os.Create(path)
	if err != nil {
		return err
	}
	// Use io.Copy to just dump the response body to the file. This supports huge files
	_, err = io.Copy(file, body)
	if err != nil {
		return err
	}
	file.Close()

	return nil
}

// from http://blog.ralch.com/tutorial/golang-working-with-zip/
func zipit(source, target string) error {
	zipfile, err := os.Create(target)
	if err != nil {
		return err
	}
	defer zipfile.Close()

	archive := zip.NewWriter(zipfile)
	defer archive.Close()

	fp.Walk(source, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		header, err := zip.FileInfoHeader(info)
		if err != nil {
			return err
		}

		header.Name = strings.TrimPrefix(path, source)

		if info.IsDir() {
			header.Name += "/"
		} else {
			header.Method = zip.Deflate
		}

		writer, err := archive.CreateHeader(header)
		if err != nil {
			return err
		}

		if info.IsDir() {
			return nil
		}

		file, err := os.Open(path)
		if err != nil {
			return err
		}
		defer file.Close()
		_, err = io.Copy(writer, file)
		return err
	})

	return err
}
