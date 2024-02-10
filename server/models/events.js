const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  time: String,
  location: String,
  description: String,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;