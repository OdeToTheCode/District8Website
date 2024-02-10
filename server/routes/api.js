const express = require('express');
const router = express.Router();
const Meeting = require('../models/meetings');
const DistrictMeeting = require('../models/districtMeetings');
const Event = require('../models/events');
const cors = require('cors');

router.get('/meetings', cors(), async (req, res) => {
  try {
    const meetings = await Meeting.find();
    res.json(meetings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/districtMeetings', cors(), async (req, res) => {
  try {
    const districtMeetings = await DistrictMeeting.find();
    res.json(districtMeetings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
);

router.get('/events', cors(), async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
);


module.exports = router;
