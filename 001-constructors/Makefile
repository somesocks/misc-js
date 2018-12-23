
NPM = pnpm

.PHONY: help build test


##
##
##	001-constructor
##		this is the base project makefile
##
##

default: help

##	COMMANDS
##

##		make help - display the help
##
help:
	@grep "^##.*" ./Makefile

test-cases:
	$(NPM) run cmd-test-cases -- $(MOCHA)

##		make test - run tests
##
test: test-cases


##
##
