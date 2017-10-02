var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/members', function(req, res, next) {
  res.render('members');
});

router.get('/research', function(req, res, next) {
  res.render('research');
});

router.get('/events', function(req, res, next) {
  res.render('events');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});
module.exports = router;
