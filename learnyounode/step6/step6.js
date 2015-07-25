//including the fileSort Module
var fileSort = require('./filesort.js')
//declare variables for the project 
var dirName = process.argv[2];
var ext = process.argv[3];
//creating the fileSort application which will take everything from fileSort.js and run it

fileSort(dirName, ext, function(err, files){
	for(i = 0; i < files.length; i++) {
		console.log(files[i]);
	}
});