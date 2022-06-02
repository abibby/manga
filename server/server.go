package server

import (
	"fmt"
	"net/http"
)

type ServerOptions struct {
	Port int
}

func Run(o *ServerOptions) error {

	return http.ListenAndServe(fmt.Sprintf(":%d", o.Port), routes())
}
