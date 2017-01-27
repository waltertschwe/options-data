const request = require("es6-request");

exports.get_data = function() {
	var url = 'http://www.google.com/finance/option_chain?q=AAPL&output=json';

	// ES6 GET request
	request.get( url ).then( (body) => {
		console.log(body);
	});
}
