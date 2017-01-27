var express = require('express')
var app = express()

app.get( '/', function ( req, res ) {
	res.send( 'Options Action')
})

app.listen( 3000, function() {
	console.log('Options Action App Listening on port 3000')
})