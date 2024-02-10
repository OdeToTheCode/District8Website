
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../styles/Sidebar.css'

const SidebarContent = () => {
  const [nextMeeting, setNextMeeting] = useState({});
  const [nextEvent, setNextEvent] = useState({});

  useEffect(() => {
    const fetchNextMeeting = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/meetings/upcoming');
        setNextMeeting(response.data);
        console.log('Fetched next meeting: ', response.data);
      } catch (error) {
        console.error('Error fetching next meeting: ', error.message);
      }
    };

    const fetchNextEvent = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/events/upcoming');
        setNextEvent(response.data);
        console.log('Fetched next event: ', response.data);
      } catch (error) {
        console.error('Error fetching next event: ', error.message);
      }
    };

    fetchNextMeeting();
    fetchNextEvent();
  }, []);

  return (
    <div className="sidebar-content">
      <h2>Upcoming</h2>
      {nextMeeting.title ? (
        <div className="next-meeting">
          <h3>{nextMeeting.title}</h3>
          <p>Date: {new Date(nextMeeting.date).toLocaleDateString()}</p>
          <p>Location: {nextMeeting.location}</p>
        </div>
      ) : (
        <p>No upcoming meeting</p>
      )}
      {nextEvent.title ? (
        <div className="next-event">
          <h3>{nextEvent.title}</h3>
          <p>Date: {new Date(nextEvent.date).toLocaleDateString()}</p>
          <p>Location: {nextEvent.location}</p>
        </div>
      ) : (
        <p>No upcoming event</p>
      )}
      <Link to="/events">See All Events</Link>
    </div>
  );
}

export default SidebarContent;
