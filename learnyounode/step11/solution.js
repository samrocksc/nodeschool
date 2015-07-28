var net = require('net')
var http = require('http');
var fs = require('fs');
var file = process.argv[3];

//opening an http server 
server = http.createServer(function (req, res) {
	fs.createReadStream(file).pipe(res);
})

server.listen(process.argv[2]);