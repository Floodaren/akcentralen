var mysql = require('mysql');
var express = require('express')
var bodyParser = require('body-parser');
var app = express()

app.listen(3030, function () {
  console.log('Express server is online on 3030!')
})

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'akcentralen'
});

connection.connect(function(err) {
  console.log(err);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/getAllJobs', function(req,res){
  connection.query('SELECT * FROM JobbLista', 
  function(error,result){
    console.log(result);
    res.send({jobb: result});
  });
});

app.post('/getJobList', function(req,res){
  var user = {userId: req.body.userId}
  connection.query('SELECT * FROM JobbLista WHERE userId = ' + "'" + user.userId + "'", 
  function(error,result){
    for (var i = 0; i<result.length;i++)
    {
      if(result[i].jobStatus == 0) 
      {
        result[i].jobStatus = "Ännu inte utfört";
      } 
      else if (result[i].jobStatus == 1)
      {
        result[i].jobStatus = "Utför jobb";
      }
      else 
      {
        result[i].jobStatus = "Jobb utfört";
      }
    }
    res.send({jobb: result});
  });
});


app.post('/logInUser', function(req, res) {
  var user = {username: req.body.username, password: req.body.password};
  
  connection.query('SELECT id,Email,TypeOfUser FROM Användare WHERE Email = ' + "'" + user.username + "' AND Password = '" + user.password + "'", 
  function(error, result){
    if (result == 0)
    {
      res.send({userId: 0});
    }
    else
    {
      res.send({userId: result[0].id, userName: result[0].Username, email: result[0].Email, typeOfUser: result[0].TypeOfUser});
    }
  }); 
});