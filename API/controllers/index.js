var express = require('express');
var router = express.Router();
var corsConfig = require('../config/cors.conf');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({ status : true})
  next();
});

router.get('/loaderio-773068efd4af7b6e22e9944ad14765aa', function(req, res, next) {
  res.download('loaderio-773068efd4af7b6e22e9944ad14765aa.txt');
});

module.exports = router;
