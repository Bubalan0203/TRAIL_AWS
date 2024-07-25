
// src/App.js
import React, { useState } from 'react'; 

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Sectionvm from './Sectionvm';
import Navbar from '../Navbar'; // Adjust the path to the correct location
import Footer from '../Footer'; // Adjust the path to the correct location





function About() {

  return (
    <div className="App">
     <Navbar />
     <br></br>
     <br></br>
     <br></br>
     <Section1 />  
     <Section2/>  
      <Section3 />
      <Section4 />
      <Sectionvm />
      <Footer />
    </div>
  );
}

export default About;
