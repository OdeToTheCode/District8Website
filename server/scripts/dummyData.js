const mongoose = require('mongoose');
const Meeting = require('../models/meetings');
const Event = require('../models/events');
const DistrictMeeting = require('../models/districtMeetings');

mongoose.connect('mongodb://localhost:27017/district8-aa-website', { useNewUrlParser: true });

const meetingData = [
  {
    title: 'Meeting 1',
    date: new Date('2024-01-10'),
    time: '10:00 AM',
    location: 'Location 1',
    description: 'Description 1',
  },
  {
    title: 'Meeting 2',
    date: new Date('2024-01-11'),
    time: '11:00 AM',
    location: 'Location 2',
    description: 'Description 2',
  },
  {
    title: 'Meeting 3',
    date: new Date('2024-01-12'),
    time: '12:00 PM',
    location: 'Location 3',
    description: 'Description 3',
  },
  {
    title: 'Meeting 4',
    date: new Date('2024-01-13'),
    time: '1:00 PM',
    location: 'Location 4',
    description: 'Description 4',
  },
  {
    title: 'Meeting 5',
    date: new Date('2024-01-14'),
    time: '2:00 PM',
    location: 'Location 5',
    description: 'Description 5',
  }
];

const eventData = [
  {
    title: 'Event 1',
    date: new Date('2024-01-10'),
    time: '10:00 AM',
    location: 'Location 1',
    description: 'Description 1',
  },
  {
    title: 'Event 2',
    date: new Date('2024-01-11'),
    time: '11:00 AM',
    location: 'Location 2',
    description: 'Description 2',
  },
  {
    title: 'Event 3',
    date: new Date('2024-01-12'),
    time: '12:00 PM',
    location: 'Location 3',
    description: 'Description 3',
  },
  {
    title: 'Event 4',
    date: new Date('2024-01-13'),
    time: '1:00 PM',
    location: 'Location 4',
    description: 'Description 4',
  },
  {
    title: 'Event 5',
    date: new Date('2024-01-14'),
    time: '2:00 PM',
    location: 'Location 5',
    description: 'Description 5',
  }
];

const districtMeetingData = [
  {
    title: 'District Meeting 1',
    date: new Date('2024-01-10'),
    time: '10:00 AM',
    location: 'Zoom',
    description: 'zoom link: https://zoom.us/j/123456789',
  },
  {
    title: 'District Meeting 2',
    date: new Date('2024-01-11'),
    time: '11:00 AM',
    location: 'Zoom',
    description: 'zoom link: https://zoom.us/j/123456789',
  },
  {
    title: 'District Meeting 3',
    date: new Date('2024-01-12'),
    time: '12:00 PM',
    location: 'Zoom',
    description: 'zoom link: https://zoom.us/j/123456789',
  },
  {
    title: 'District Meeting 4',
    date: new Date('2024-01-13'),
    time: '1:00 PM',
    location: 'Zoom',
    description: 'zoom link: https://zoom.us/j/123456789',
  },
  {
    title: 'District Meeting 5',
    date: new Date('2024-01-14'),
    time: '2:00 PM',
    location: 'Zoom',
    description: 'zoom link: https://zoom.us/j/123456789',
  }
];

async function insertDummyData() {
  try {
    await Meeting.insertMany(meetingData);
    await Event.insertMany(eventData);
    await DistrictMeeting.insertMany(districtMeetingData);

    console.log('Successfully inserted dummy data');
  } catch (error) {
    console.error('Error inserting dummy data', error);
  } finally {
    mongoose.disconnect();
  }
}

insertDummyData();