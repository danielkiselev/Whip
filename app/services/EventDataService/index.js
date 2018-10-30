var request = require('request')

class EventDataService {

  getEventData(latitude, longitude, callback) {

    var parseString = require('xml2js').parseString;

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://api.eventful.com/rest/events/search?app_key=PTc4mmXnq37xG6Cz&where=${latitude},${longitude}&within=25&date=today&sort_by=popularity&page_size=20`
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.text())
    .then(contents => {
      let xml_response = contents
      parseString(xml_response, (err, result) => {
        callback(result)
      });
    })
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }
}

export default EventDataService
