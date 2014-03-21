var data = require('../data');

var home = function(request, response) {
	console.log("Home Page , Request: " + request.url);
	response.render("home");
};

var hotelList = function(request, response) {
	console.log("Hotel Listing Page , Request: " + request.url);
	response.render("hotelList", {hotelData : data.hotelData});
};

var getHotels = function(request, response) {
	console.log("GET Hotels API, Request: " + request.url);
	response.send({"data" : data.hotelApiData});
	response.end();
}

module.exports = {
	'home' : home,
	'hotelList' : hotelList,
	'api' : {
		'getHotels' : getHotels
	}
};