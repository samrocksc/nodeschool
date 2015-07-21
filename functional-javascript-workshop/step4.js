module.exports = function getShortMessages(messages) {
	//filter the messages to 50 characters or less
	return messages.filter(function(x){
		return x.message.length < 50;
	})
	.map(function(x) {
		return x.message;
	})

}