package site

import (
	"os"
	"path/filepath"
	"time"

	"go.etcd.io/bbolt"
)

type DB struct {
	db *bbolt.DB
}

func OpenDB(path string) (*DB, error) {
	dir := filepath.Dir(path)

	err := os.MkdirAll(dir, 0775)
	if err != nil {
		return nil, err
	}

	db, err := bbolt.Open(path, 0666, &bbolt.Options{
		Timeout:      time.Second * 10,
		NoGrowSync:   false,
		FreelistType: bbolt.FreelistArrayType,
	})
	if err != nil {
		return nil, err
	}

	return &DB{db: db}, nil
}

func (db *DB) SeriesName(book Book) (string, error) {
	series := ""
	err := db.db.Update(func(tx *bbolt.Tx) error {
		b, err := bucket(tx, "series")
		if err != nil {
			return err
		}

		s := b.Get([]byte(book.SeriesID()))
		if s != nil {
			series = string(s)
			return nil
		}

		series = book.Series()
		return b.Put([]byte(book.SeriesID()), []byte(book.Series()))
	})
	if err != nil {
		return "", err
	}
	return series, nil
}

func (db *DB) Close() error {
	return db.db.Close()
}

func bucket(tx *bbolt.Tx, name string) (*bbolt.Bucket, error) {
	b := tx.Bucket([]byte(name))
	if b == nil {
		b, err := tx.CreateBucket([]byte(name))
		if err != nil {
			return nil, err
		}
		return b, nil
	}
	return b, nil
}
