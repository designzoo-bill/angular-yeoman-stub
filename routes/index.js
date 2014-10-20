exports.index = function(req, res) {
	console.log('test: ', __dirname);
    res.sendFile("index.html", { root: '././dist/' });
};