var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

/* At the top, with other redirect methods before other routes */
app.get('*',function(req,res,next){

  if(req.headers['x-forwarded-proto']!='https') {

  	res.redirect('https://ancient-retreat-8481.herokuapp.com/'+req.url);
  }
  else {

  	//next(); /* Continue to other routes if we're not redirecting */
  }
})

//app.use(express.logger('dev'));
app.use(morgan('combined'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);