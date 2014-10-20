exports.index = function(req, res) {

	console.log('test: ', __dirname);
    res.sendFile(__dirname + "/index.html");
};