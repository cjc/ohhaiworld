var http = require("http");
var express = require('express');
var app = express.createServer();

app.use(express.staticProvider(__dirname + '/static'));
app.register('.haml', require('hamljs'));

app.get('/', function(req, res){
  console.dir(req.headers);
  res.render('index.haml',{
    locals: {
      title: 'oh hai, world',
      host: req.headers.host 
    }
  });
});

module.exports = app;
