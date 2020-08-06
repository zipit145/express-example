# express-ocr-example

## Goal
Build a basic express.js tesseract optical character recognition server. 
- Limit my time spent on this to 8 hours or less
- Add database postgresql knex database
- Create a basic get route for storing match information
- Create a post route that inititates tesseract recognize
- Store this result in the database
- Clean up boilerplate code from express, variable declarations, and general file structure
- Add unit tests
- Add search term to Tesseract function and change data structure to store arrays of results coordinates for image manipulations

## Tech Used
- Express.js
- Knex.js
- Tesseract.js
- PostgreSQL

## Usage
Sample POST body:
{
    "path": "https://tesseract.projectnaptha.com/img/eng_bw.png",
    "lang": "eng"
}

Useful Commands:
- ```knex migrate:latest```
- ```knex migrate:rollback```
- ```knex seed:run```

## Status
- Limit my time spent on this to 8 hours or less (complete)
- Add database postgresql knex database (complete)
- Create a basic get route for storing match information (complete)
- Create a post route that inititates tesseract recognize (complete)
- Store this result in the database (complete)
- Clean up boilerplate code from express, variable declarations, and general file structure (incomplete)
- Add unit tests (incomplete)
- Add search term to Tesseract function and change data structure to store arrays of results coordinates for image manipulations (incomplete)