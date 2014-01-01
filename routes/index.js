
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index.html');
};

/*
 * GET a fortune.
 */

exports.fortune = function(req, res){
	// http://www.dzone.com/snippets/execute-unix-command-nodejs
	var command = "fortune"
		, sys = require('sys')
		, exec = require('child_process').exec
		, child;


	res.setHeader('Content-Type', 'application/json');

	// executes `pwd`
	child = exec(command, function (error, stdout, stderr) {
		if (error !== null) {
			console.log('exec error: ' + error);
			return Error(error);
		}

		res.end(JSON.stringify({ message: stdout }));
	});

}
