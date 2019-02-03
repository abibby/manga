ldflags = -ldflags '-X "github.com/zwzn/manga/cmd.Date=$(shell date)"'

all:
	go build $(ldflags)
	