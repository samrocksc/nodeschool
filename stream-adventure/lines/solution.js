var through = require('through2')
var split = require('split')

process.stdin
  .pipe(split());
  .on
