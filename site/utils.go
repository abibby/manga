package site

import (
	"archive/zip"
	"bytes"
	"fmt"
	"image"
	"io"
	"os"
	"path/filepath"
	"strings"

	_ "image/gif"
	_ "image/jpeg"
	_ "image/png"

	_ "golang.org/x/image/bmp"
	_ "golang.org/x/image/webp"
)

func saveImage(site MangaSite, page Page, path string) error {
	uri, err := page.URL()
	if err != nil {
		return err
	}
	response, err := client.Get(uri)
	if err != nil {
		return fmt.Errorf("failed to fetch image: %v", err)
	}

	defer response.Body.Close()

	var body io.Reader = response.Body

	if decoder, ok := page.(ImageDecrypter); ok {
		body = decoder.ImageDecrypt(body)
	}

	b, err := io.ReadAll(body)
	if err != nil {
		return err
	}

	_, imgTyp, err := image.Decode(bytes.NewBuffer(b))
	if err != nil {
		return fmt.Errorf("could not decode image '%s': %v", uri, err)
	}

	ext := "." + imgTyp

	if !strings.HasSuffix(path, ext) {
		path += ext
	}

	return os.WriteFile(path, b, 0644)
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

	filepath.Walk(source, func(path string, info os.FileInfo, err error) error {
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
