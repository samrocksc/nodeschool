var Hapi = require('hapi');
var server = new Hapi.Server;

server.connection({
    host: 'localhost',
    port: Number(process.argv[2]) || 8080
})
//standard server routing for hapi
server.route({
    method: 'GET',
    path: '/{name}',
    handler: function(request, reply) {
        reply('Hello ' + encodeURIComponent(request.params.name));
    }
});

//start a hapi server

server.start(function() {
    console.log('server running on ' + server.info.uri);
})