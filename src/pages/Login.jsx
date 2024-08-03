import React, { useRef } from 'react';
import Section1 from "./PageComponents/miniComponents/HomePage/MainPage/Section1";
import Section2 from './PageComponents/miniComponents/HomePage/MainPage/Section2';
import Section3 from './PageComponents/miniComponents/HomePage/MainPage/Section3';
import Section4 from './PageComponents/miniComponents/HomePage/MainPage/Section4';
import Section5 from './PageComponents/miniComponents/HomePage/MainPage/Section5';
import Section6 from './PageComponents/miniComponents/HomePage/MainPage/Section6';
import Section7 from './PageComponents/miniComponents/HomePage/MainPage/Section7';
import Section8 from './PageComponents/miniComponents/HomePage/MainPage/Section8';
import Section9 from './PageComponents/miniComponents/HomePage/MainPage/Section9';
import Section10 from './PageComponents/miniComponents/HomePage/MainPage/Section10';
import Section11 from './PageComponents/miniComponents/HomePage/MainPage/Section11';
import Section12 from './PageComponents/miniComponents/HomePage/MainPage/Section12';
import Section13 from './PageComponents/miniComponents/HomePage/MainPage/Section13';
import Section14 from './PageComponents/miniComponents/HomePage/MainPage/Section14';
import Section15 from './PageComponents/miniComponents/HomePage/MainPage/Section15';
import Grid from './PageComponents/miniComponents/HomePage/MainPage/Grid';
import Navbar from './PageComponents/miniComponents/HomePage/MainPage/Navbar';
import Footer from './PageComponents/miniComponents/HomePage/MainPage/Footer';
import Landingpage from './PageComponents/miniComponents/HomePage/MainPage/Landingpage';
import BackToTopButton from './PageComponents/miniComponents/HomePage/MainPage/BackToTopButton';

function App() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const section7Ref = useRef(null);
    const section8Ref = useRef(null);
    const section9Ref = useRef(null);
    const section10Ref = useRef(null);
    const navbarRef = useRef(null);
    const section15Ref = useRef(null);
    const section14Ref = useRef(null);
    const section11Ref = useRef(null);
    const section12Ref = useRef(null);
    const section13Ref = useRef(null);

    const sections = {
        section1Ref,
        section2Ref,
        section3Ref,
        section4Ref,
        section5Ref,
        section6Ref,
        section7Ref,
        section8Ref,
        section9Ref,
        section10Ref,
        navbarRef,
        section15Ref,
        section14Ref,
        section11Ref,
        section12Ref,
        section13Ref,
    };

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="App">
            <div ref={navbarRef}><Navbar scrollToSection={scrollToSection} section15Ref={section15Ref} /></div>
            <Landingpage />
            <Section14 scrollToSection={scrollToSection} section11Ref={section11Ref} section12Ref={section12Ref} section13Ref={section13Ref} />
            <Grid scrollToSection={scrollToSection} sections={sections} />
            <div ref={section1Ref}><Section1 /></div>
            <div ref={section2Ref}><Section2 /></div>
            <div ref={section3Ref}><Section3 /></div>
            <div ref={section4Ref}><Section4 /></div>
            <div ref={section5Ref}><Section5 /></div>
            <div ref={section9Ref}><Section9 /></div>
            <div ref={section6Ref}><Section6 /></div>
            <div ref={section7Ref}><Section7 /></div>
            <div ref={section8Ref}><Section8 /></div>
            <div ref={section10Ref}><Section10 /></div>
            <div ref={section11Ref}><Section11 /></div>
            <div ref={section12Ref}><Section12 /></div>
            <div ref={section13Ref}><Section13 /></div>
            <div ref={section15Ref}><Section15 /></div>
            <Footer />
            <BackToTopButton />
        </div>
    );
}

export default App;
