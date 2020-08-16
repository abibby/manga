package mangadex

import (
	"github.com/abibby/manga/site"
)

func (s *MangaDexSeries) download() ([]site.Book, error) {
	books := []site.Book{}

	for id, chapter := range s.Chapter {
		book := NewBook(int(id), s.Manga.Title, chapter.ChapterF64(), chapter.VolumeI())
		books = append(books, book)
	}

	return books, nil
}
