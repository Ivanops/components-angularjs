var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../client'));

app.get('/', sayHi);
app.get('/*', send404);

function send404 (req, res) {
  res.status(400).send('URL not found');
}

function sayHi(req, res) {
  res.status(200).send('hello POC');
}

app.listen(3000, function(){
  console.log('Server listen on 3000');
});