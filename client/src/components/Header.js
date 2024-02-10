import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';
import aaLogo from '../assets/images/AAlogo.webp';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className='header-container'>
        <img src={aaLogo} alt="Logo" className="logo" />
        <h1 className='title'><Link to="/" className="linkTitle">AA District 8 St. Paul Minnesota</Link></h1>
        <button className="menu-button" onClick={toggleMenu}>
          {showMenu ? 'Close' : 'Menu'}
        </button>
      </div>
      <nav className={`nav-container ${showMenu ? 'show' : ''}`}>
        <ul className='nav-item'>
          <li><Link to="/" className='nav-link nav-button'>Home</Link></li>
          <li><Link to="/events" className='nav-link nav-button'>Events</Link></li>
          <li><Link to="/meeting" className='nav-link nav-button'>Meeting</Link></li>
          <li><Link to="/districtMeetings" className='nav-link nav-button'>District Meetings</Link></li>
          <li><Link to="/contact" className='nav-link nav-button'>Contact</Link></li>
          <li><Link to="/resources" className='nav-link nav-button'>Resources</Link></li>
        </ul>
      </nav>
    </header>

  );

}

export default Header;
