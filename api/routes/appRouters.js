'use strict';

module.exports = function(app) {
	var userHandlers = require('../controllers/userController.js');
	var weather = require('../controllers/weatherController');
	var tour = require('../controllers/tourController');

	app.route('/auth/register')
		.post(userHandlers.register);

	app.route('/auth/sign_in')
		.post(userHandlers.sign_in);
    app.route('/weather/get_location')
        .post(weather.getLocation);
    app.route('/weather/get_weather')
        .post(weather.getWeather);
    app.route('/tour/get_list')
        .post(tour.getTourListByCategory);
};
