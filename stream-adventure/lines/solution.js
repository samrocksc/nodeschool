//inserting requirements

var through = require('through2');
var split = require('split');

//starting the line count on the first part of the stream

var lineCount = 0;

//utilizing ? for if true and : if exists
//Using Through to create a function with the buffered stream from stdin.split()

var tr = through(function (buf, _, next) {
  var line = buf.toString();
  this.push(lineCount % 2 === 0
            ? line.toLowerCase() + '\n'
            : line.toUpperCase() + '\n'
  );
  lineCount++;
  next();
});

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout)
