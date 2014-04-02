
var express = require('express');
var http = require('http');
var app = express();

http.createServer(app).listen( 
			81,
			'angular.hardrockcoders.hu',
			function(err) {
//			    console.log("... port %d in %s mode", app.settigns..address().port, app.settings.env);
			}
		);

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/'));

app.get('/flickr/:queryString', function(req, res){
	var Flickr = require("flickrapi"),
			flickrOptions = {
				user: "dadfe86bb2ace62d95aa8690d1d6c678",
				api_key: "dadfe86bb2ace62d95aa8690d1d6c678",
				secret: "ed66670fbb4d85d2",
				user_id: "122221176%40N08",
				access_token: "72157643322101475-717ce5c550bcd0db",
				access_token_secret:"6cf06a412f0246f4"

			};
	Flickr.authenticate(flickrOptions, function(error, flickr) {
		flickr.photos.search({
			privacy_filter: 1,
			text: req.params.queryString
		}, function(err, result) {
			res.send(result.photos.photo);
		});
	});
});