exports.get_data = function() {
	const request = require("es6-request");

	var url = 'http://www.google.com/finance/option_chain?q=AAPL&output=json';

	// ES6 GET request
	request.get( url ).then( (body) => {
		console.log(body);
	});
}
