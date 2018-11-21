ldflags = -ldflags '-X "bitbucket.org/zwzn/manga/cmd.Date=$(shell date)"'

all:
	@echo date is $(DATE)
	go build $(ldflags)

deploy:
	env GOOS=freebsd go build -o mangaBSD $(ldflags)
	scp mangaBSD famp:~/manga
	ssh -t famp 'sudo mv ./manga /usr/bin/manga && manga version'
