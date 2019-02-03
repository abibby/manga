ldflags = -ldflags '-X "bitbucket.org/zwzn/manga/cmd.Date=$(shell date)"'

all:
	go build $(ldflags)
	