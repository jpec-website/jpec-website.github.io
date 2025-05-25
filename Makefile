all:run

run: 
	npm run dev

build:
	npm run generate

stage:
	npx serve .output/public

test:
	node upload.js
