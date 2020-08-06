var express = require('express')
var router = express.Router()
const Tesseract = require('../tesseract.js')
const queries = require('../queries')


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.status(200).send(Tesseract.result);
  queries.getAllMatches().then(matches => res.send({matches}))
})
router.post('/', function (req, res, next){
  queries.createNewMatch(req.body).then(newMatch => res.status(201).send({newMatch}))
})

module.exports = router


// express-ocr-example