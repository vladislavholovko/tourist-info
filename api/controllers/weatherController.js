'use strict';
const DarkSky = require('dark-sky')
var geocoder = require('geocoder');

const GOOGLE_API_KEY = {key: process.env.GOOGLE_KEY};
const darksky = new DarkSky(process.env.DARK_SKY)

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
    var date = req.body.date;

    darksky
        .latitude(lat)            // required: latitude, string || float.
        .longitude(lng)            // required: longitude, string || float.
        .time(date)             // optional: date, string 'YYYY-MM-DD'.
        .units('ca')                    // optional: units, string, refer to API documentation.
        .language('en')                 // optional: language, string, refer to API documentation.
        .exclude('minutely,daily')      // optional: exclude, string || array, refer to API documentation.
        .extendHourly(false)             // optional: extend, boolean, refer to API documentation.
        .get()                          // execute your get request.
        .then((response)=>{
        return res.json({response})
    })
        .catch(console.log)

};