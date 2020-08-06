var express = require('express')
var router = express.Router()
const Tesseract = require('../tesseract.js')
const queries = require('../queries')


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.status(200).send(Tesseract.result);
  queries.getAllMatches().then(matches => res.status(200).send({matches}))
})
router.post('/', function (req, res, next){
  queries.createNewMatch(req.body.path, req.body.lang).then(res.status(201).send("OCR initiated"))
})

module.exports = router


// express-ocr-example