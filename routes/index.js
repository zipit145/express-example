var express = require('express');
var router = express.Router();
const Tesseract = require('../tesseract.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send(Tesseract.result);
});

module.exports = router;


// express-ocr-example