import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/DistrictMeetings.css';

const DistrictMeetings = () => {
  const [districtMeetings, setDistrictMeetings] = useState([]);

  useEffect(() => {
    const fetchDistrictMeetings = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/districtMeetings');
        setDistrictMeetings(response.data);
        console.log('Fetched district meetings: ', response.data);
      } catch (error) {
        console.error('Error fetching district meetings: ', error.message);
      }
    };

    fetchDistrictMeetings();
  }, []);

  return (
    <div className="district-meetings-container"> 
      <h1>District Meetings</h1>
      <ul className="district-meetings-list">
        {districtMeetings.map(districtMeeting => (
          <li key={districtMeeting._id} className="district-meeting-item">
            <strong>{districtMeeting.title}</strong> - <span>{new Date(districtMeeting.date).toLocaleDateString()}</span> - <span>{districtMeeting.location}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DistrictMeetings;
