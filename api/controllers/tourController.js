var request = require('request');
require('dotenv').config()


exports.getTourListByCategory = function(req, res) {
    var category = req.body.category;
    var limit = req.body.limit;
  var headers = {
    'x-api-key': process.env.SYGIC_API_KEY
  };

  var options = {
    url: 'https://api.sygictravelapi.com/1.0/en/places/list',
    method: 'GET',
    headers: headers,
    qs: {'categories': category, 'limit': limit}
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      if(req.body.ran === 'true'){
        console.log(body.status_code)
          return res.send(JSON.parse(body).data.places[Math.floor(Math.random()*JSON.parse(body).data.places.length)]);

      }else {
          return res.send(body);
      }

    }
  })
};