var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

var http = require('http');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var forceSsl = function (req, res, next) {

	if (req.headers['x-forwarded-proto'] !== 'https') {

		return res.redirect(['https://', req.get('Host'), req.url].join(''));
	} 
	else {

		next();
	}
}

app.configure(function () {

    if (env === 'production') {

        app.use(forceSsl);
    }

	//app.use(express.logger('dev'));
	app.use(morgan('combined'));
	app.use(gzippo.staticGzip("" + __dirname + "/dist"));
	app.listen(process.env.PORT || 5000);
}