const mongoose = require('mongoose');
const Meeting = require('../models/meetings');
const Event = require('../models/events');
const DistrictMeeting = require('../models/districtMeetings');

mongoose.connect('mongodb://localhost:27017/district8-aa-website', { useNewUrlParser: true });

async function deleteAllData() {
  try {
    await Meeting.deleteMany({});
    await Event.deleteMany({});
    await DistrictMeeting.deleteMany({});

    console.log('Successfully deleted all documents');
  } catch (error) {
    console.error('Error deleting documents', error);
  } finally {
    mongoose.disconnect();
  }
}

deleteAllData();
