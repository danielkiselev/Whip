var request = require('request')

class LyftDataService {

  getNearbyDrivers(latitude, longitude, callback) {

    var postData = {
      latitude : latitude,
      longitude : longitude
    };

    var url = 'http://localhost:3000/lyft-data'
    var options = {
      method: 'post',
      url: url,
      body: postData,
      json: true
    }

    request(options, function (err, res, body) {
      if (err) {
        console.error('error posting json: ', err)
        throw err
      }

      var headers = res.headers
      var statusCode = res.statusCode

      let driverMap = res.body;

      console.log('driverMap', driverMap)
      callback(driverMap)
    })
  }
}

export default LyftDataService
