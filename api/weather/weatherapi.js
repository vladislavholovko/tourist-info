const https = require('https');
var googleApi = require('./googleapi.js');
var getLocation = googleApi.getLocation;



var result = await getLocation('Україна', 'Львів');
console.log(result);
/*
var lat = 49.839683;
var lng = 24.029717;

var API_KEY = 'ed1c4ebb396abf6782b0866d9423e08e';

exports.getWeatherForecast = function (country, city, date) {

    var url = 'https://api.darksky.net/forecast/' + API_KEY + '/' + lat + ',' + lng + ',' + date + '?lang=uk';
    https.get(url, (resp) => {
        var data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            var darkskyResponce = JSON.parse(data);
            result = new Object();
            result.lat = googleResponce.results[0].geometry.location.lat;
            result.lng = googleResponce.results[0].geometry.location.lng;
            console.log(result.lat + ' ' + result.lng);
            return result;


        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
*/