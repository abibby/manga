package main

import (
	"encoding/hex"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
)

/*
 e.prototype.getBlobImageURL = function(t) {
	var e = this;
	return new Promise(function(response, n) {
		var r = e.hex2Bin(e.pageData.encryption_hex)
			, i = new XMLHttpRequest;
		i.onreadystatechange = function() {
			if (4 === i.readyState)
				if (200 === i.status) {
					var o = new Uint8Array(i.response);
					if (r)
						for (var a = r.length, s = 0; s < o.length; s++)
							o[s] ^= r[s % a];
					var u = URL.createObjectURL(new Blob([o],{
						type: "image/" + e.format
					}));
					response(u)
				} else
					n("We can't load file: " + e.src + i)
		}
		,
		i.open("GET", e.src, !0),
		i.responseType = "arraybuffer",
		i.send()
	})
}
*/

type Page struct {
	url           string
	encryptionKey []byte
}

func main() {
	r, err := http.Get("https://jumpg-webapi.tokyo-cdn.com/api/manga_viewer?chapter_id=1006010&split=yes&img_quality=high")
	if err != nil {
		panic(err)
	}
	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err)
	}

	os.Stdout.Write(getPages(b)[0].Image())
}

func getPages(b []byte) []Page {
	pages := []Page{}
	lines := strings.Split(string(b), "\n")
	for _, line := range lines {
		if !strings.HasPrefix(line, "\x91\x01https://") {
			continue
		}
		parts := strings.Split(line, "\x01")
		encKey, err := hex.DecodeString(parts[2])
		if err != nil {
			panic(err)
		}
		pages = append(pages, Page{
			url:           strings.TrimSuffix(parts[1], "\x10\x90\x06\x18\xf9\b*\x80"),
			encryptionKey: encKey,
		})
	}
	return pages
}

func (p *Page) Image() []byte {
	r, err := http.Get(p.url)
	if err != nil {
		panic(err)
	}
	o, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err)
	}

	a := len(p.encryptionKey)

	for s := 0; s < len(o); s++ {
		o[s] ^= p.encryptionKey[s%a]
	}
	return o
}
