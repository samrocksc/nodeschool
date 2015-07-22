//declare file system
var fs = require('fs');
//pull the third portion of the node command
var filename = process.argv[2];
//sync the data from command into a usable form from what we learned with variable filename
file = fs.readFileSync(filename);
//store the contents and string it
contents = file.toString();
//print the delimiters of \n
console.log(contents.split('\n').length - 1);

