package comicbox

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"time"
)

type JSONTime time.Time

type Book struct {
	Series          string   `json:"series"`
	Summary         string   `json:"summary"`
	Author          string   `json:"author"`
	Web             string   `json:"web"`
	Genre           string   `json:"genre"`
	Tags            string   `json:"tags"`
	MediaType       string   `json:"type"`
	Title           string   `json:"title"`
	Volume          int64    `json:"volume"`
	CommunityRating float64  `json:"community_rating"`
	Number          float64  `json:"number"`
	DateReleased    JSONTime `json:"date_released"`
	Rating          float64  `json:"rating"`
	File            string   `json:"file"`

	ScanURL   string   `json:"-"`
	ImageURLs []string `json:"-"`
}

type ComicBoxError struct {
	StatusCode int64  `json:"error"`
	Message    string `json:"message"`
}

func (t JSONTime) MarshalJSON() ([]byte, error) {
	//do your serializing here
	stamp := fmt.Sprintf("\"%s\"", time.Time(t).Format("2006-01-02 15:04:05.999999999 -0700 MST"))
	return []byte(stamp), nil
}

func (b *Book) Name() string {
	name := b.Series
	if b.Volume != 0 {
		name += fmt.Sprintf(" V%d", b.Volume)
	}
	if b.Number != 0 {
		name += fmt.Sprintf(" #%f", b.Number)
	}
	if b.Volume == 0 && b.Number == 0 {
		name += " " + b.Title
	}
	return name
}

func (b *Book) Upload(path string) error {
	bookJSON, err := json.MarshalIndent(b, "", "    ")
	if err != nil {
		return err
	}

	// fmt.Printf("uploading %s", b.GetName())
	resp, err := http.Post(path, "application/json", bytes.NewReader(bookJSON))
	if err != nil {
		return err
	}

	if resp.StatusCode != 200 {
		if b, err := ioutil.ReadAll(resp.Body); err == nil {
			cbErr := ComicBoxError{}
			err := json.Unmarshal(b, &cbErr)
			if err == nil {
				return fmt.Errorf(cbErr.Message)
			}
		}

		return fmt.Errorf(resp.Status)
	}

	return nil
}
