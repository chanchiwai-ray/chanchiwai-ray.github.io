RESUME_PATH=./resume
WEBSITE_PATH=./website
DATA_ENC = ./data.enc.yaml

.DEFAULT_GOAL := help

##@ Help

help:  ## Display this help message
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##@ Available targets

edit:  ## Edit potentially sensitive data
	./scripts/edit $(DATA_ENC)

init:  ## Initialize project
	./scripts/init $(RESUME_PATH) $(WEBSITE_PATH)

build: init  ## Build resume and website
	./scripts/build $(DATA_ENC) $(RESUME_PATH) $(WEBSITE_PATH)

clean: ## Clean all unnecessary files
	./scripts/clean $(RESUME_PATH) $(WEBSITE_PATH)

.PHONY: help
