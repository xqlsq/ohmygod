var http = require('http');
var https = require('https');
var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();


var options = {
    key: fs.readFileSync('./ssl/1536674492375.key'),
    cert: fs.readFileSync('./ssl/1536674492375.pem')
};

app.get('/', function(req, res) {
    res.send('hello world');
  });

  http.createServer(app).listen(80);

  https.createServer(options, app).listen(443);