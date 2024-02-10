
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Events from './components/Events';
import Meeting from './components/Meeting';
import DistrictMeetings from './components/DistrictMeetings';
import Contact from './components/Contact';
import Resources from './components/Resources';

import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header />
        <div className='child-of-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/meeting" element={<Meeting />} />
            <Route path="/districtMeetings" element={<DistrictMeetings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
