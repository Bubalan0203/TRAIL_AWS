import React, { useRef } from 'react';
import Section1 from "../pages/PageComponents/miniComponents/HomePage/MainPage/Section1";
import Section2 from '../pages/PageComponents/miniComponents/HomePage/MainPage/Section2';
import Section3 from '../pages/PageComponents/miniComponents/HomePage/MainPage/Section3';
import Section4 from '../pages/PageComponents/miniComponents/HomePage/MainPage/Section4';
import Section5 from '../pages/PageComponents/miniComponents/HomePage/MainPage/Section5';
import Section6 from '../pages/PageComponents/miniComponents/HomePage/MainPage/Section6';
import Section7 from '../pages/PageComponents/miniComponents/HomePage/MainPage/Section7';
import Section8 from '../pages/PageComponents/miniComponents/HomePage/MainPage/Section8';
import Section9 from '../pages/PageComponents/miniComponents/HomePage/MainPage/Section9';
import Section10 from '../pages/PageComponents/miniComponents/HomePage/MainPage/Section10';
import Grid from '../pages/PageComponents/miniComponents/HomePage/MainPage/Grid';
import Navbar from '../pages/PageComponents/miniComponents/HomePage/MainPage/Navbar';
import Footer from '../pages/PageComponents/miniComponents/HomePage/MainPage/Footer';
import Landingpage from '../pages/PageComponents/miniComponents/HomePage/MainPage/Landingpage';
import About from '../pages/PageComponents/miniComponents/HomePage/MainPage/AboutTheCompany/AboutTheCompany';
import Galleryy from '../pages/PageComponents/miniComponents/HomePage/MainPage/Gallery/GalleryCompany';

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
    };

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="App">
            <Navbar />
            <Landingpage />

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
            <Footer />
        </div>
    );
}

export default App;
