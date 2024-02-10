import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/events');
        setEvents(response.data);
        console.log('Fetched events: ', response.data);
      } catch (error) {
        console.error('Error fetching events: ', error.message);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="events-container">
      <h1 className="events-heading">Events</h1>
      <p className="events-description">For more events in District 8 go to <a href="https://aastpaul.org/?topic=11">https://aastpaul.org/?topic=11</a>.</p>
      <ul className="events-list">
        {events.map(event => (
          <li key={event._id} className="event-item"> 
            <strong className="event-title">{event.title}</strong> - <span className="event-date">{new Date(event.date).toLocaleDateString()}</span> - <span className="event-location">{event.location}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
