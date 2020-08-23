clean:
	rm -rf venv

venv:
	python3 -m venv venv

build: venv
	source venv/bin/activate; \
	pip install -r requirements.txt; \

run: 
	source venv/bin/activate; \
	python word_group/main.py; \
