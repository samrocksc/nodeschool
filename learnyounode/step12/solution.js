var net = require('net');
var http = require('http');
var fs = require('fs');
var through2 = require('through2-map');
var filename = process.argv[3]
var server = process.argv[2]

content = through2(function (chunk){
	return chunk.toString().toUpperCase();
})

server = http.createServer(function (req, res) {
	if(req.method === 'POST') {
		req.pipe(content).pipe(res)
	}
})

server.listen(process.argv[2]);