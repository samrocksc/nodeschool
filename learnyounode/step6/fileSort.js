//including a path for the file system
var fs = require('fs');
//including the path module to be able to sort by file extension
var path = require('path');
//exporting a module, so that it can be used to quickly sort files
module.exports = function(dirname, ext, callback) {
  var extension = "." + ext;
  fs.readdir(dirname, function(err, files) {
    if (err) {
      callback(err, null);
    }
    else {
      result = [];
      files.forEach(function(entry) {
        if (path.extname(entry) == extension) {
          result.push(entry);
        }
      });
      callback(null, result);
    }
  });
  
};