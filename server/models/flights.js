var mongoose = require('mongoose');

var flightSchema = new mongoose.Schema({
  airportCode : { type: String, required: true }
})

module.exports = mongoose.model('Flight', flightSchema);
