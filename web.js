var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var routes = require('./routes');
var app = express();

// Routes

app.get('/', routes.index);
//app.get('/partials/:name', routes.partials);

/*app.engine('html', require('html').renderFile);
app.set('view engine', 'html');*/

//app.get('/', routes.index);
//app.get('*', routes.index);

//var path = require('path');

//app.use(app.router);
/*app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile('index.html', {root: './'});
});

// api call for client to get the env
app.get('/node-env', function(req, res, next){
	
    return res.json({ env: app.get('env') });
});*/

/********
 * Routes
 ********/
 
// serve index and view partials
//app.get('/', routes.index);
//app.get('/views/:name', routes.views);
 
// redirect all others to the index (HTML5 history)
//app.get('*', routes.index);

// rewrite for html5 mode to work
/*app.use('/scripts', express.static(__dirname + '/scripts'));
//app.use('/dist', express.static(__dirname + '/../dist'));
app.use('/styles', express.static(__dirname + '/styles'));
//app.use('/partials', express.static(__dirname + '/partials'));

app.all('/*', function(req, res, next) {

    // Just send the index.html for other files to support HTML5Mode
    res.sendfile('index.html', { root: __dirname });
});*/

/*app.get('bower_components/:name', function (req, res) {
  var name = req.params.name;
  res.render('bower_components/' + name);
});

app.get('images/:name', function (req, res) {
  var name = req.params.name;
  res.render('images/' + name);
});

app.get('scripts/:name', function (req, res) {
  var name = req.params.name;
  res.render('scripts/' + name);
});*/

/*app.get('styles/:name', function (req, res) {
  var name = req.params.name;
  res.render('styles/' + name);
});*/

/*app.get('views/:name', function (req, res) {
  var name = req.params.name;
  res.render('views/' + name);
});
*/
/*app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname+'../dist/'});
});*/

/*app.configure(function() {
  app.use('/', express.static(__dirname + '/'));
});*/

/*app.get('/styles/:name', function (req, res) {
  var name = req.params.name;
  res.render('styles/' + name);
});*/

/*app.get('/views/:name', function (req, res) {
  var name = req.params.name;
  res.render('views/' + name);
});*/

/*app.get('*', function(request, response, next) {
  response.sendFile(__dirname + '/dist/index.html');
});*/

/*app.get('/', function(req, res) {
  res.render('index');
});*/

/*app.get('*', function(req, res) {
  res.redirect('/');
});*/

//app.listen(3006); //the port you want to use

/*if (process.env.NODE_ENV === 'production') {

	is_secure = function (req) {req.headers['x-forwarded-proto'] === 'https';};
}

else {

	is_secure = function (req){req.secure;};
}


var redirect_to_https = function(req, res, next) {

	if (!is_secure(req)) {

		res.redirect("https://ancient-retreat-8481.herokuapp.com/" + req.url);
	} 
	else {

		next();
	}
};

app.use(redirect_to_https);*/

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
