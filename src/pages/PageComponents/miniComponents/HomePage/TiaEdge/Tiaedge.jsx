import React from 'react';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Navbar from '../MainPage/Navbar';
import Footer from '../MainPage/Footer';


const mobileSectionStyle = {
  paddingtop: '10px', // Zero padding bottom for mobile devices
 
};

const bodyStyle = {
  paddingBottom: '70px', // Adjust the value as needed
  
};

const TiaEdge = () => {
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
      <div style={isMobile ? mobileSectionStyle : bodyStyle}><Section1 /></div>
      <div style={isMobile ? mobileSectionStyle : bodyStyle}><Section2 /></div>
      <div style={isMobile ? mobileSectionStyle : bodyStyle}><Section3 /></div>
      <div ><Section4 /></div>
      <div style={isMobile ? mobileSectionStyle  :bodyStyle}><Section5 /></div>
      <div style={isMobile ? mobileSectionStyle  :bodyStyle}><Section6 /></div>
      <div style={isMobile ? mobileSectionStyle  :bodyStyle}><Section7 /></div>
      <Footer />
    </div>
  );
};

export default TiaEdge;