var request = require('request');

const SYGIC_API_KEY = "MNsb98pTSk9PSt4xkTGic4yYWZxb7qKO5sO1thFb";

exports.getTourListByCategory = function(req, res) {
    var category = req.body.category;
    var limit = req.body.limit;
  var headers = {
    'x-api-key': SYGIC_API_KEY
  };

  var options = {
    url: 'https://api.sygictravelapi.com/1.0/en/places/list',
    method: 'GET',
    headers: headers,
    qs: {'categories': category, 'limit': limit}
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // Print out the response body
      return res.send(response.body);
    }
  })
};