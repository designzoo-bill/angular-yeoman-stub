var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

// Routes - to support HTML5Mode - Start

// api call for client to get the env
app.get('/node-env', function(req, res, next){
  
    return res.json({ env: app.get('env') });
});

app.get('/:name', function(req, res, next) {

    res.sendFile('index.html', {root: './dist/'});
});

app.all('/', function(req, res, next) {

    res.sendFile('index.html', {root: './dist/'});
});

app.get('/styles/:name', function (req, res) {

  var name = req.params.name;
  res.sendFile(name, {root: './dist/styles/'});
});

app.get('/scripts/:name', function (req, res) {

  var name = req.params.name;
  res.sendFile(name, {root: './dist/scripts/'});
});

app.get('/views/:name', function (req, res) {

  var name = req.params.name;
  res.sendFile(name, {root: './dist/views/'});
});

app.get('/images/:name', function (req, res) {

  var name = req.params.name;
  res.sendFile(name, {root: './dist/images/'});
});

// Routes - End

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
