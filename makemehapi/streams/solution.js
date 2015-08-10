var Hapi = require('hapi');
var rot13 = require('rot13-transform');
var Path = require('path');
var fs = require('fs');

var server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply) {
		var inputFile = fs.createReadStream('./input.txt')
		reply(inputFile.pipe(rot13()));
	}
})

server.start(function(){
	console.log('There is a server running on ' + server.info.uri)
})