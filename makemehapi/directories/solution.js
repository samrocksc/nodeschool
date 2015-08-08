//making inclusions for hapi
var Hapi = require('hapi');
var server = new Hapi.Server();

//setting up the connection for the server
server.connection({
	host: 'localhost',
	port: Number(process.argv[2]) || 8080
});

server.route ({
	method:'GET',
	path: '/foo/bar/baz/file.html',
	handler: {
		file: './public.html'
	}
})


server.start(function () {
  console.log('Server running at:', server.info.uri);
});

