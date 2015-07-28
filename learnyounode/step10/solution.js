var net = require('net')
//creating a now function
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }

//declaring the pipe as c
var server = net.createServer(function (c) {
	console.log('something connected');
	c.on('end', function () {
		console.log('client disconnected');
	})
	//piping a write to the server
	c.write(now() + '\n');
	c.end();

})
//using a callback to show that the server is listening in console.log
server.listen(process.argv[2], function () {
	console.log('server listening')
});