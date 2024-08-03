import React from 'react';
import styled from 'styled-components';
import companyImage from '../../../../../../assets/mainpage/aboutthecompany/company.jpg';

// Styled components
const AboutCompany = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh; /* Ensure it fills at least the viewport height */
  background: url(${companyImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 80px 0; /* Example of adjusting padding for smaller screens */
  }

  
`;

const OverlayTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const OverlayText = styled.p`
  font-size: 21px;
  width: 80%;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;


const Overlay = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  font-family: 'Roboto', sans-serif;
   top:-120px;
`;

const GradientOverlayTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  z-index: 1;
  height: 60%;
  background: linear-gradient(to bottom, black, transparent);
`;

const GradientOverlayBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  z-index: 1;
  height: 8%;
  background: linear-gradient(to top, black, transparent);
`;

// React component
const ImageSlider = () => {
  return (
    <AboutCompany>
      <GradientOverlayTop />
      <GradientOverlayBottom />
      <Overlay>
        <OverlayTitle>About our company</OverlayTitle>
        <OverlayText>
        Talent Initiators & Accelerators India private limited empowers innovative entrepreneurship. Any venture is only as strong as the people who bring it to life. We are here to bring life to those who bring as many innovative & creative ideas as possible.
        </OverlayText>
      </Overlay>
    </AboutCompany>
  );
};

export default ImageSlider;
