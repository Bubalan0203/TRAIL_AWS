import React from 'react';

import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

import Navbar from '../MainPage/Navbar';
import Footer from '../MainPage/Footer';
import BackToTopButton from '../MainPage/BackToTopButton';


const mobileSectionStyle = {
  paddingtop: '10px', // Zero padding bottom for mobile devices
};

const bodyStyle = {
  paddingBottom: '90px', // Adjust the value as needed
};

const TiaBrain = () => {
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
      <div style={isMobile ? mobileSectionStyle : bodyStyle}><Section0 /></div>
      <div style={isMobile ? mobileSectionStyle : bodyStyle}><Section1 /></div>
      <div style={isMobile ? mobileSectionStyle : bodyStyle}><Section2 /></div>
      <div style={isMobile ? mobileSectionStyle : bodyStyle}><Section3 /></div>
    
     <Footer />
      <BackToTopButton />
    </div>
  );
};

export default TiaBrain;