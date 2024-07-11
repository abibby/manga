package mpproto

import (
	"fmt"
	"io"
	"net/http"

	proto "google.golang.org/protobuf/proto"
)

//go:generate protoc --go_out=.. mpproto.proto

func Get(path string, a ...interface{}) (*SuccessResult, error) {

	r, err := http.Get(fmt.Sprintf(path, a...))
	if err != nil {
		return nil, err
	}
	defer r.Body.Close()
	b, err := io.ReadAll(r.Body)
	if err != nil {
		return nil, err
	}
	resp := &Response{}

	err = proto.Unmarshal(b, resp)
	if err != nil {
		return nil, err
	}

	if resp.GetSuccess() == nil {
		return nil, resp.GetError()
	}

	return resp.GetSuccess(), nil
}

func (e *ErrorResult) Error() string {
	return e.String()
}
