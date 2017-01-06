var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req,res) {
	var ip = req.ip;
	var lang = req.acceptsLanguages; //não ta funcionando
	var obj = {
		address: ip,
		language: lang
	};
	res.send(obj);
});

app.listen(port, function(){
	console.log('Request Header App listening on port' + port);
});