package mpproto

import (
	"fmt"
	"io/ioutil"
	"net/http"

	proto "github.com/golang/protobuf/proto"
)

//go:generate protoc --go_out=. mpproto.proto

func Get(path string, a ...interface{}) (*SuccessResult, error) {

	r, err := http.Get(fmt.Sprintf(path, a...))
	if err != nil {
		panic(err)
	}
	defer r.Body.Close()
	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err)
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
