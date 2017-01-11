var express = require('express');
var app = express();
var os = require('os');
var port = process.env.PORT || 8080;

app.get('/', function(req,res) {
	var ip = req.ip;
	var lang = req.header('accept-language').split(',')[0];
	var cpu = req.header('user-agent').split(') ')[0].split(' (')[1];
	var obj = {
		address: ip,
		language: lang,
		software: cpu
	};
	res.send(obj);
});

app.listen(port, function(){
	console.log('Request Header App listening on port' + port);
});