'use strict';
var weather = require('openweather-apis');

var geocoder = require('geocoder');

const GOOGLE_API_KEY = {key: process.env.GOOGLE_KEY};

exports.getLocation = function(req, res) {
    var address = req.body.address;
    geocoder.geocode(address, function ( err, data ) {
        var lat = data.results[0].geometry.location.lat;
        var lng = data.results[0].geometry.location.lng;
        return res.json({lat:lat, lng:lng})
    }, GOOGLE_API_KEY);
};

exports.getWeather = function(req, res) {
    var lat = req.body.lat;
    var lng = req.body.lng;
    weather.setAPPID('2a1ad423e9fad1a3ceda81fda56b1366');

    weather.setLang('en');
    weather.setCoordinate(lat,lng)
    weather.setUnits('metric');
    weather.getWeatherForecastForDays(3, function(err, obj){
        return res.json(obj)
    });


};