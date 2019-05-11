package mangadex

import (
	"fmt"
)

func Chapter(id int) (*MangaDexChapter, error) {
	apiURL := fmt.Sprintf("https://mangadex.org/api?type=chapter&id=%d", id)

	chapter := &MangaDexChapter{}
	err := getJson(apiURL, chapter)
	if err != nil {
		return nil, err
	}

	return chapter, nil
}

func Series(id int) (*MangaDexSeries, error) {
	apiURL := fmt.Sprintf("https://mangadex.org/api?type=manga&id=%d", id)

	series := &MangaDexSeries{}
	err := getJson(apiURL, series)
	if err != nil {
		return nil, err
	}

	return series, nil
}
