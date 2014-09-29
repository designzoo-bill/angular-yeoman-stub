var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

console.log("env: ", process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {

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

		//next();
	}
};

app.use(redirect_to_https);

//app.use(express.logger('dev'));
app.use(morgan('combined'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);