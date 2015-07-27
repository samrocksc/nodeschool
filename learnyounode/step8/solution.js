var http = require('http')
var bl = require('bl')

//utilizing bufferlist on the second part of the process.argv with 
//callback on the pipe of data to bl.
http.get(process.argv[2], function (res) {
	//utilizing bl as a callback to console the data.	
	res.pipe(bl(function (err, data){
		if(err)
			return console.error(err)
		data = data.toString()
		console.log(data.length);
		console.log(data);
	}))
})