const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  title: String,
  date: Date,
  time: String,
  location: String,
  description: String,
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
