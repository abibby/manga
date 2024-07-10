package streams_test

import (
	"bytes"
	"io"
	"testing"

	"github.com/abibby/manga/streams"
	"github.com/stretchr/testify/assert"
)

func TestTransformer(t *testing.T) {
	in := bytes.NewBufferString("123456")
	out := streams.Transformer(in, func(w io.Writer, r io.Reader) error {
		b := make([]byte, 3)
		for {
			i, err := r.Read(b)
			if err != nil {
				return err
			}
			for j := 0; j < i; j++ {
				b[j] = b[j] + 1
			}
			_, err = w.Write(b)
			if err != nil {
				return err
			}
		}
	})

	b, err := io.ReadAll(out)
	assert.NoError(t, err)
	assert.Equal(t, []byte("234567"), b)
}

func TestTransformerBuffer(t *testing.T) {
	in := bytes.NewBufferString("123456")
	out := streams.TransformerBuffer(in, func(w io.Writer, r io.Reader) error {
		b := make([]byte, 3)
		for {
			i, err := r.Read(b)
			if err != nil {
				return err
			}
			for j := 0; j < i; j++ {
				b[j] = b[j] + 1
			}
			_, err = w.Write(b)
			if err != nil {
				return err
			}
		}
	})

	b, err := io.ReadAll(out)
	assert.NoError(t, err)
	assert.Equal(t, []byte("234567"), b)
}
