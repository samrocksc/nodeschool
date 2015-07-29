//use the through2 npm module
var through = require('through2');
var stream = through(write,end);

//create a through stream with a write and end function
//write
function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

//done function
function end(done) {
  done();
}

process.stdin.pipe(stream).pipe(process.stdout);
