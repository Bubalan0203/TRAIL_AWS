import React from 'react';


import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Navbar from '../MainPage/Navbar';
import Footer from '../MainPage/Footer';

const mobileSectionStyle = {
  paddingBottom: '0px', // Zero padding bottom for mobile devices
  backgroundColor: '#0f0f12', // Ensure the background color is black
};

const bodyStyle = {
  backgroundColor: '#0f0f12',
  paddingBottom: '80px', // Adjust the value as needed
};

const TiaLive = () => {
  const isMobile = window.innerWidth <= 768; // You can adjust the breakpoint as needed

  const sectionStyleWithNoBg = {
    paddingBottom: isMobile ? '0px' : '80px',
    backgroundColor: 'transparent',
  };

  return (
    <div >
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <div style={sectionStyleWithNoBg}><Section1 /></div>
      <div style={sectionStyleWithNoBg}><Section2 /></div>
      <div style={sectionStyleWithNoBg}><Section3 /></div>
      <div style={isMobile ? mobileSectionStyle  :bodyStyle}><Section4 /></div>
      <div style={isMobile ? mobileSectionStyle  :bodyStyle}><Section5 /></div>
      <div style={isMobile ? mobileSectionStyle  :bodyStyle}><Section6 /></div>
      <Footer />
    </div>
  );
};

export default TiaLive;