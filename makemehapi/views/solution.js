//loading core modules to use hapijs views
var Path = require('path')
var Hapi = require('hapi')

//starting a new server.
var server = new Hapi.Server()

server.connection ({
	host: 'localhost',
	port: Number(process.argv[2]) || 8080
});

//creating the views to work with Handlebars
server.views({
	engines: {
		html: require('handlebars')
	},
	//Here we are using .join to combine the global __dirname with templates
	path: Path.join(__dirname, 'templates')
});

//We create a route that takes /?name=Handling to index.html
server.route({
	method: 'GET',
	path: '/',
	handler: {
		view: 'index.html'
	}
})

//Starting the server and listing the port.
server.start(function() {
	console.log('Server running at: ', server.info.uri)
});