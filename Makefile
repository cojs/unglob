BIN = ./node_modules/.bin/
NODE ?= node

build:
	@mkdir -p build
	@$(BIN)regenerator --include-runtime lib/index.js > build/index.js

test:
	@$(NODE) $(BIN)mocha \
	  --harmony-generators \
		--require should \
		--reporter spec

.PHONY: test build