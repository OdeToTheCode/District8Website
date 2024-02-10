const mongoose = require('mongoose');

const districtMeetingSchema = new mongoose.Schema({
  title: String,
  date: Date,
  time: String,
  location: String,
  description: String,
});

const DistrictMeeting = mongoose.model('DistrictMeeting', districtMeetingSchema);

module.exports = DistrictMeeting;