const https = require('https');
var API_KEY = 'AIzaSyB5p3kiamiJiAToX_i_9QSP7zIyzxlUDKE';

exports.getLocation = function (country, city) {
  var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(country + ', ' + city) + '&region=ua&key=' + API_KEY;
  https.get(url, (resp) => {
    var data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      var googleResponce = JSON.parse(data);
      if (googleResponce.status == 'OK') {
        result = new Object();
        result.lat = googleResponce.results[0].geometry.location.lat;
        result.lng = googleResponce.results[0].geometry.location.lng;
        console.log(result.lat + ' ' + result.lng);
        return result;
      } else {
        console.log("При роботі з гугл апі було отримано відповідь зі статусом " + googleResponce.status + '.');
      }

    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}