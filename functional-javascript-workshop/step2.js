function repeat(operation, num) {
	function nouse(){
		console.log()
	}
	for(i = 1;i < num; i++) {
		nouse();
	}
}

module.exports = repeat
