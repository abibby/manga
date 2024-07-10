package streams

import (
	"bufio"
	"io"
)

func Transformer(r io.Reader, cb func(w io.Writer, r io.Reader) error) io.Reader {
	pr, pw := io.Pipe()
	go func() {
		err := cb(pw, r)
		if err != nil {
			pw.CloseWithError(err)
			return
		}
		pw.Close()
	}()
	return pr
}

func TransformerBuffer(r io.Reader, cb func(w io.Writer, r io.Reader) error) io.Reader {
	return Transformer(r, func(w io.Writer, r io.Reader) (err error) {
		br := bufio.NewReader(r)
		bw := bufio.NewWriter(w)
		defer func() {
			flushErr := bw.Flush()
			if err == io.EOF && flushErr != nil {
				err = flushErr
			}
		}()
		return cb(bw, br)
	})
}
