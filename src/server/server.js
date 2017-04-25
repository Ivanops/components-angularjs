var users = [
  {name:'Ivan'},
  {name:'Jhon'},
  {name:'Jake'},
  {name:'Cris'},
  {name:'Tom'},
  {name:'Logan'},
]

var express = require('express');
var app = express();
// var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client'));
// app.use(bodyParser());

app.get('/', sayHi);
app.get('/users', getUsers);
app.get('/*', send404);


function getUsers(req, res) {
  res.status(200).send(users);
}
function send404 (req, res) {
  res.status(400).send('URL not found');
}

function sayHi(req, res) {
  res.status(200).send('hello POC');
}

app.listen(3000, function(){
  console.log('Server listen on 3000');
});