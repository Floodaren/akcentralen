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

app.get('/test', function (req, res) {
  res.send('Hello World!')
  console.log("test");
})


app.post('/logInUser', function(req, res) {
  var user = {username: req.body.username, password: req.body.password};
  //console.log(user.username + " " + user.password);
  
  connection.query('SELECT id,Username FROM Användare WHERE Username = ' + "'" + user.username + "' AND Password = '" + user.password + "'", 
  function(error, result){
    if (result == 0)
    {
      res.send({userId: 0});
    }
    else
    {
      res.send({userId: result[0].id, userName: result[0].Username});
    }
  }); 
});