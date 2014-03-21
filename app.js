var express = require('express'),
	routes = require('./routes');

var dust = require('dustjs-linkedin'),
	cons = require('consolidate');

var app = express();
app.engine('dust', cons.dust);
app.set('view engine', 'dust');

app.use('/img',express.static(__dirname + '/img'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/lib',express.static(__dirname + '/lib'));
app.use('/templates',express.static(__dirname + '/templates'));
app.use('/css',express.static(__dirname + '/css'));

app.get('/', routes.home);
app.get('/hotel-list', routes.hotelList);
app.get('/api/hotels', routes.api.getHotels);

app.listen(8888);
