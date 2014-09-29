var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

//app.use(express.logger('dev'));
app.use(morgan('combined'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);

function ensureSec(req, res, next) {
    if (req.headers['x-forwarded-proto'] == 'https') { 
        return next(); 
    } else {
        res.redirect('https://' + req.headers.host + req.path);
    }
}