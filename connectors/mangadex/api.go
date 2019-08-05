package mangadex

import (
	"fmt"
)

var chapters = map[int]*MangaDexChapter{}
var series = map[int]*MangaDexSeries{}

func Chapter(id int) (*MangaDexChapter, error) {
	chapter, ok := chapters[id]
	if ok {
		return chapter, nil
	}
	apiURL := fmt.Sprintf("https://mangadex.org/api?type=chapter&id=%d", id)

	err := getJson(apiURL, chapter)
	if err != nil {
		return nil, err
	}

	chapters[id] = chapter

	return chapter, nil
}

func Series(id int) (*MangaDexSeries, error) {
	serie, ok := series[id]
	if ok {
		return serie, nil
	}
	apiURL := fmt.Sprintf("https://mangadex.org/api?type=manga&id=%d", id)

	err := getJson(apiURL, serie)
	if err != nil {
		return nil, err
	}

	series[id] = serie

	return serie, nil
}
