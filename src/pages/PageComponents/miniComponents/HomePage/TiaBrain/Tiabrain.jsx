import React, { useRef } from 'react';
import Section0 from './Section0';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import Section10 from './Section10';
import Section11 from './Section11';
import Section12 from './Section12';
import Navbar from '../MainPage/Navbar';
import Footer from '../MainPage/Footer';

const mobileSectionStyle = {
  paddingBottom: '0px',
  backgroundColor: '#0f0f12',
};

const bodyStyle = {
  backgroundColor: '#0f0f12',
  paddingBottom: '80px',
};

const TiaBrain = () => {
  const isMobile = window.innerWidth <= 768;

  const sectionRefs = {
    section0: useRef(null),
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
    section7: useRef(null),
    section8: useRef(null),
    section9: useRef(null),
    section10: useRef(null),
    section11: useRef(null),
    section12: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  const sectionStyleWithNoBg = {
    paddingBottom: isMobile ? '0px' : '80px',
    backgroundColor: 'transparent',
  };

  return (
    <div>
      <Navbar />
      <div style={isMobile ? mobileSectionStyle : bodyStyle}><Section0 /></div>
      <div ref={sectionRefs.section1} style={isMobile ? mobileSectionStyle : bodyStyle}><Section1 scrollToSection={scrollToSection} /></div>
      <div ref={sectionRefs.section11} style={isMobile ? mobileSectionStyle : bodyStyle}><Section11 /></div>
      <div ref={sectionRefs.section2} style={isMobile ? mobileSectionStyle : bodyStyle}><Section2 /></div>
      <div ref={sectionRefs.section3} style={isMobile ? mobileSectionStyle : bodyStyle}><Section3 /></div>
      <div  style={sectionStyleWithNoBg}><Section4 /></div>
      <div  style={isMobile ? mobileSectionStyle : bodyStyle}><Section5 /></div>
      <div  style={isMobile ? mobileSectionStyle : bodyStyle}><Section6 /></div>
      <div ref={sectionRefs.section7} style={isMobile ? mobileSectionStyle : bodyStyle}><Section7 /></div>
      <div ref={sectionRefs.section8} style={isMobile ? mobileSectionStyle : bodyStyle}><Section8 /></div>
      <div  style={isMobile ? mobileSectionStyle : bodyStyle}><Section9 /></div>
      <div style={isMobile ? mobileSectionStyle : bodyStyle}><Section12 /></div>
      <div  style={isMobile ? mobileSectionStyle : bodyStyle}><Section10 /></div>
      <Footer />
    </div>
  );
};

export default TiaBrain;