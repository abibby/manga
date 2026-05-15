package mpproto

import (
	"fmt"
	"io"
	"net/http"

	"github.com/google/uuid"
	proto "google.golang.org/protobuf/proto"
)

//go:generate protoc --go_out=.. mpproto.proto

type Client struct {
	sessionToken string
	httpClient   *http.Client
}

func NewClient(c *http.Client) *Client {
	return &Client{
		sessionToken: uuid.New().String(),
		httpClient:   c,
	}
}

func (c *Client) Get(path string, a ...interface{}) (*SuccessResult, error) {
	req, err := http.NewRequest("GET", fmt.Sprintf(path, a...), http.NoBody)
	if err != nil {
		return nil, err
	}

	req.Header.Add("SESSION-TOKEN", c.sessionToken)

	r, err := c.httpClient.Do(req)
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
