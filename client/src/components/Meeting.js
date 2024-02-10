import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/Meetings.css';

const Meeting = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeeting = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/meetings');
        setMeetings(response.data);
        console.log('Fetched meetings: ', response.data);
      } catch (error) {
        console.error('Error fetching meetings: ', error.message);
      }
    };

    fetchMeeting();
  }, []);

  return (
    <div className="meeting-container">
      <h1>District 8 AA Meetings</h1>
      <ul className="meeting-list"> 
        {meetings.map(meeting => (
          <li key={meeting._id} className="meeting-item">
            <strong>{meeting.title}</strong> - <span>{new Date(meeting.date).toLocaleDateString()}</span> - <span>{meeting.location}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meeting;
