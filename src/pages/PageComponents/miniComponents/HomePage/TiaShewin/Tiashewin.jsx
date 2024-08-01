import React from 'react';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Navbar from '../MainPage/Navbar';
import Footer from '../MainPage/Footer';


const mobileSectionStyle = {
  paddingtop: '10px', // Zero padding bottom for mobile devices
};

const bodyStyle = {
  paddingBottom: '70px', // Adjust the value as needed
};

const TiaShewin = () => {
  const isMobile = window.innerWidth <= 768; // You can adjust the breakpoint as needed

  const sectionStyleWithNoBg = {
    paddingBottom: isMobile ? '0px' : '80px',
    backgroundColor: 'transparent',
  };

  return (
    <div >
      <Navbar />
      <div ><Section0 /></div>
      <div ><Section1 /></div>
      <div style={isMobile ? mobileSectionStyle : bodyStyle}><Section2 /></div>
      <div style={isMobile ? mobileSectionStyle : bodyStyle}><Section3 /></div>
      <div style={isMobile ? mobileSectionStyle  :bodyStyle}><Section4 /></div>
   
      <Footer />
    </div>
  );
};

export default TiaShewin;