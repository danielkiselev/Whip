var path           = require('path'),
    router         = require('express').Router(),
    express        = require('express'),
    mongodb        = require('mongodb'),
    mongoose       = require('mongoose'),
    Flight         = require('../models/flights'),
    lyft           = require('node-lyft')

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../app/index.html'));
});

router.get('/uber', function (req, res) {
  res.sendFile(path.join(__dirname, '../../app/index.html'));
});

router.get('/lyft', function (req, res) {
  res.sendFile(path.join(__dirname, '../../app/index.html'));
});

router.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, '../../app/index.html'));
});

router.get('/flight-data', function (req, res) {

  Flight.find({}, function(err, flights) {

    var flightMap = {};

    flights.forEach(function(flight) {
      flightMap[flight._id] = flight;
    });

    res.send(flightMap);
  });
});

router.post('/lyft-data', function (req, res) {

  var latitude = req.body.latitude;
  var longitude = req.body.longitude;

  let defaultClient  = lyft.ApiClient.instance;
  let clientAuth = defaultClient.authentications['Client Authentication'];
  clientAuth.accessToken = '9xmWqUnPr1l5L4kDsuKEl9JGXGNGKEI19g8ECMmHyAYwC0vE2iZGuemwNhcIzIVcecy3Ud+v5rmWjicNvWeiVpZuJaH2MZOmvR0jQFaARxEV/J002t4B8Ko=';

  let apiInstance = new lyft.PublicApi();

  apiInstance.getDrivers(latitude, longitude).then((data) => {
    console.log('API called successfully. Returned data: ' + data);
    res.send(data)
  }, (error) => {
    console.error(error);
  });
});



module.exports = router;
