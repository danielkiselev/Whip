var request = require('request')

class FlightDataService {

  getFlightData(callback) {

    var url = 'http://localhost:3000/flight-data'
    var options = {
      method: 'get',
      url: url
    }

    request(options, function (err, res, body) {
      if (err) {
        console.error('error posting json: ', err)
        throw err
      }

      var headers = res.headers
      var statusCode = res.statusCode

      let flightMap = JSON.parse(res.body);
      callback(flightMap)
    })
  }
}

export default FlightDataService
