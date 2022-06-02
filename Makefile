GC=go

all: web/dist/app.js
	$(GC) build $(ldflags) -o bin/comicbox

web/dist/app.js:
	cd dist && \
		npm install && \
		npm run build

dev:
	$(GC) run -tags dev main.go