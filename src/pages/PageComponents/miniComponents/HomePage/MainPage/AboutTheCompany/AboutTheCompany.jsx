import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Sectionvm from './Sectionvm';
import Navbar from '../Navbar';
import Footer from '../Footer';
import BackToTopButton from '../BackToTopButton';

function About() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const sectionvmRef = useRef(null);
  const location = useLocation();

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      switch (section) {
        case 'about-us':
          scrollToSection(section1Ref);
          break;
        case 'founders':
          scrollToSection(section3Ref);
          break;
        case 'mission':
          scrollToSection(sectionvmRef);
          break;
        case 'contact-us':
          scrollToSection(section4Ref);
          break;
        default:
          break;
      }
    }
  }, [location]);

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} refs={{ section1Ref, section2Ref, section3Ref, section4Ref, sectionvmRef }} />
      <br />
      <br />
      <br />
      <div ref={section1Ref}><Section1 /></div>
      <div ref={section2Ref}><Section2 /></div>
      <div ref={section3Ref}><Section3 /></div>
      <div ref={section4Ref}><Section4 /></div>
      <div ref={sectionvmRef}><Sectionvm /></div>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default About;