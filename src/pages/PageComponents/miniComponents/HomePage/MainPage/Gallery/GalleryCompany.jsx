// src/pages/PageComponents/miniComponents/HomePage/MainPage/Gallery/GalleryCompany.jsx
import React from 'react';
import Gallery from './Gallery.jsx'; // Import your Gallery component
import Navbar from '../Navbar.jsx'; // Adjust the path to the correct location
import Footer from '../Footer.jsx'; // Adjust the path to the correct location
import BackToTopButton from '../BackToTopButton.jsx';
function Galleryy() {
  return (
    <>
      <Navbar />
      <br></br>
     <br></br>
     <br></br>
      <Gallery />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default Galleryy;

