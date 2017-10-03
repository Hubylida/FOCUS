var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var data_str = fs.readFileSync('members.json',{encoding:'UTF-8'}),
    data = JSON.parse(data_str);

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

router.get('/members_1',function(req,res,next){
  res.render('member',{"name":data[0].name,"title":data[0].title,"head_img":data[0].head_img,"intro":data[0].intro,"phone":data[0].phone,"Email":data[0].Email});
})

module.exports = router;
