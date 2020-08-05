var express = require('express');
var router = express.Router();
const Tesseract = require('../tesseract.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hello world');
});

module.exports = router;
