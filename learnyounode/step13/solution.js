var http = require('http')
var url = require('url')


//first endpoint for /api/parsetime, returning a json
var routes = {
    '/api/parsetime': function(parsedURL) {
        return {
        	hour: getHours();
        	
        }
    }
    //second endpoint for /api/unixtime returning a json object
    '/api/unixtime': function(parsedURL) {
        return {

        }
    }
}

//write an http server that servs JSON when it receives a GET 
//request.
server = http.createServer(function(request, response) {

})