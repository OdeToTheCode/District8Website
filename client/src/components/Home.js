import React from 'react'; 
import { Link } from 'react-router-dom'

import '../styles/Home.css';

const Home = () => {

  return (
    <div className='body'>
      <div className="child-of-body">
        <h1 className='title'>Welcome to AA District 8 - St. Paul, Minnesota</h1>
          <h2 className="small-title"><Link to='/'>About Us</Link></h2>
          <p className='content'>District 8 is a vibrant and supportive community within Alcoholics Anonymous (AA) located in St. Paul, Minnesota. Our mission is to provide a safe and welcoming space for individuals seeking recovery from alcohol addiction. We are part of a larger fellowship that shares experience, strength, and hope to help one another achieve and maintain sobriety.</p>
        
          <h2 className="small-title"><Link to="/meetings">Meetings in Our District</Link></h2>
          <p className='content'>
            Join us for our regular meetings where individuals come together to share their experiences, challenges, and successes on the journey to recovery. Whether you're new to AA or a seasoned member, our meetings offer a supportive environment where everyone is welcome.
          </p>
        
          <h2 className="small-title"><Link to="/events">Events and Gatherings</Link></h2>
          <p className='content'>Stay updated on upcoming events and gatherings within District 8. From speaker meetings to workshops and social events, our community comes together to celebrate recovery and build connections that last a lifetime.</p>
          <h2 className="small-title"><Link to="/districtMeetings">District Meetings</Link></h2>
          <p className='content'>Participate in our District Meetings where members can contribute to the organization and planning of AA activities in the St. Paul area. These meetings are an excellent opportunity to get involved, share ideas, and play an active role in supporting our fellowship.</p>
        
          <h2 className="small-title"><Link to="/contact">Contact Us</Link></h2>
          <p className='content'>Have questions about our meetings or events? Want to get involved? Contact us today to learn more about our community and how you can join us in supporting individuals on the path to recovery.</p>
          <h2 className="small-title"><Link to="/resources">Resources</Link></h2>
          <p className='content'>Looking for additional resources to support your recovery? Check out our list of helpful resources and links to other AA communities in the St. Paul area.</p>
          <h2 className="small-title">Disclaimer</h2>
          <p className='content'>Alcoholics Anonymous World Services, Inc. has not approved, endorsed, or reviewed this website, nor is it affiliated with it, and the ability to link to AAs site does not imply otherwise.</p>
      </div>
    </div>
  );
}

export default Home;