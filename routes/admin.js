var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'focus',
  database: 'focus'
});
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// var sql = 'create table admin (id int unsigned not null auto_increment,name varchar(100) not null,email varchar(100) not null,password varchar(100) not null,primary key (id))engine=InnoDB default charset=utf8';
// connection.query(sql,function(err,result){
//   if(err){
//     console.log(err.message);
//     reyturn;
//   }
//   console.log('create table admin success!');
// })

router.get('/',function(req,res,next){
  res.render('login');
});

router.get('/register',function(req,res,next){
  res.render('register');
})

router.post('/login',function(req,res){
  console.log(req.body);
});

router.post('/register',function(req,res){
  var sql = 'insert into admin (name,email,password) values (?,?,?)';
  var addsql = [req.body.name,req.body.email,req.body.password];
  connection.query(sql,addsql,function(err,result){
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("Initial table admin success");
  })
})

module.exports = router;