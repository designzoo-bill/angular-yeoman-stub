exports.index = function(req, res) {
	console.log('test: ', __dirname);
    res.sendfile(__dirname + "/index.html");
};