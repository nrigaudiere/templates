MAKEFLAGS += -j2

all: module1 module2

.PHONY: install dev watch dev-server build lint lint-apply
install:
		@yarn install

watch:
		@node --no-warnings ./utils/esbuild.mjs --watch

dev-server:
		@node ./utils/serve.mjs

build:
		@node ./utils/esbuild.mjs

lint:
		@npx biome ci .

lint-apply:
		@npx biome check . --apply

dev: dev-server watch
