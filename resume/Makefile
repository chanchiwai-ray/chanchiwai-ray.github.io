TEX = pdflatex
BUILD = build
BIBTEX = bibtex
DATA = ./data.yaml

all: resume.pdf

%.pdf: %.tex init
	$(TEX)  -output-directory=$(BUILD) $<

%.tex:
	poetry run parse-tex $(basename $@) $(DATA)

init:
	poetry install
	mkdir -p $(BUILD)

lint:
	poetry run codespell .
	poetry run ruff format --diff .
	poetry run ruff check --no-fix .
	poetry run mypy --install-types --non-interactive .

format:
	poetry run codespell -w .
	poetry run ruff format .
	poetry run ruff check --fix --exit-zero --silent .

clean:
	poetry env remove --all
	rm -rf $(BUILD)
