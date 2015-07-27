//including bl in order to trap the stream again and turn it into data.
var http = require('http')
var bl = require('bl')
var count = 0
var results = []

function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(results[i])
    }
}
//creating an http Get function in which we will use a get
//to grab the data from process.argv which will be sent by learnyounode
//it will then be piped into 3 separate strings until they are completed.
function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err);
            //grabbing the results index and stringing it
            results[index] = data.toString();
            count++

                if (count ==xx= 3)
                    printResults()

        }))
    })
}

for (var i = 0; i < 3; i++)
    httpGet(i)