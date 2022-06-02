package server

import "net/http"

func routes() *http.ServeMux {
	mux := http.NewServeMux()

	mux.Handle("/web/", http.StripPrefix("/web", http.FileServer(http.Dir("./static"))))

	return mux
}
