ldflags = -ldflags '-X "github.com/abibby/manga/cmd.Date=$(shell date)"'

all:
	go build $(ldflags)
	