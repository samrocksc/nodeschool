var http = require('http')
var url = require('url')


//first endpoint for /api/parsetime, returning a json
var routes = {
    '/api/parsetime': function(parsedURL) {
        d = new Date(parsedUrl.query.iso)
        return {
            hour: d.getHours(),
            minute: d.getMinutes(),
            second: d.getSeconds()
        }
    }
    //second endpoint for /api/unixtime returning a json object
    '/api/unixtime': function(parsedURL) {
        return {
            unixtime: (new Date(parsedUrl.query.iso)).getTime()
        };
    }
}
}

//write an http server that servs JSON when it receives a GET 
//request.
server = http.createServer(function(req, res) {
	parsedUrl = url.parse(req.url, true);
	routing = routes[parsedUrl.pathname];
	if(routing) {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		response.end(JSON.stringfy(res(parsedUrl)))
	}
	else {
		response.writeHead(404);
		response.end()
	}
})
server.listen(process.argv[2], function(){
	console.log('listening on port' + process.argv[2])
})