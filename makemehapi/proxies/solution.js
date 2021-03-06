//Declare Hapi as a variable
var Hapi = require('hapi');

//creating the server
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
})

server.route({
    method: 'GET',
    path: '/proxy',
    handler: {
        proxy: {
            host: '127.0.0.1',
            port: 65535
        }
    }
});

server.start();