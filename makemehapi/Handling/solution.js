//modules declare
var Hapi = require('hapi')
var path = require('path')

//declare a server
var server = new Hapi.Server();
server.connection ({
	host: 'localhost',
	port: Number(process.argv[2]) || 8080
})

server.route ({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
		reply.file('./index.html')
	}
})

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
