import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import image from '../../../../../assets/mainpage/Tiaedgem.jpeg';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: black; /* Set background color to black */
`;

const TopPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    margin-left: 40px;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    margin-left: 40px;
  }
`;

const Logo = styled.img`
  width: 100%;
  max-width: 590px;
  height: 390px;
  border-radius: 10px;
  opacity: 0; /* Initially hidden */
  transition: opacity 3s ease-in-out; /* Smooth transition for fade effect */

  @media (min-width: 768px) {
    margin-right: 40px;
    margin-left: 0px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    width: 100%;
    height: 290px;
  }

  &.fade-in {
    opacity: 1; /* Fade in */
  }

  &.fade-out {
    opacity: 0; /* Fade out */
  }
`;

const CompanyHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const Section = styled.div`
  margin: 50px 0px;
  position: relative;
  max-width: 800px;
`;

const Heading = styled.h1`
  font-size: 5rem;
  margin-bottom: 20px;
  position: relative;
  color: white;
  align-items: center;
  text-align: center;
  opacity: 0; /* Initially hidden */
  transition: opacity 2s ease-in-out; /* Smooth transition for fade effect */

  &.fade-in {
    opacity: 1; /* Fade in */
  }

  &.fade-out {
    opacity: 0; /* Fade out */
  }

  @media (max-width: 768px) {
    font-size: 39px;
    align-items: center;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 18px;
  color: #666;
  margin: 0 auto;
  opacity: 0; /* Initially hidden */
  transition: opacity 2s ease-in-out; /* Smooth transition for fade effect */

  &.fade-in {
    opacity: 1; /* Fade in */
  }

  &.fade-out {
    opacity: 0; /* Fade out */
  }

  @media (min-width: 768px) {
    max-width: 600px;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CenteredSection = styled.div`
  text-align: center;
  margin-top: 50px;

  &::before {
    content: "${props => props.backgroundText}";
    position: absolute;
    top: 62%;
    left: 54%;
    max-width: 1000px;
    width: 100%;
    transform: translate(-50%, -50%);
    font-size: 6rem;
    color: rgba(0, 0, 0, 0.1);
    z-index: -1;
    margin-top: -14px;

    @media (max-width: 767px) {
      margin-top: -8px; /* Hide on smaller screens */
      max-width: 500px;
      font-size: 39px;
    }
  }
`;

const Line = styled.div`
  width: 2px;
  height: 75px;
  background-color: grey;
  margin: 0 auto;
`;

const GetStartedButton = styled.button`
  background-color: #f14bb4;
  color: white;
  border: none;
  padding: 8px 10px; /* Increased padding */
  font-size: 15px; /* Increased font size for better visibility */
  cursor: pointer;
  border-radius: 20px; /* Adjusted border radius */
  width: 120px;
  height: 38px;
  margin-bottom: 50px;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 1024px) {
    font-size: 11px;
    width: 90px;
    height: 30px;
    padding: 2px 8px;
  }
`;

const Section8 = () => {
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          logoRef.current.classList.add('fade-in');
          headingRef.current.classList.add('fade-in');
          textRef.current.classList.add('fade-in');
          headingRef.current.classList.remove('fade-out');
          textRef.current.classList.remove('fade-out');
        } else {
          logoRef.current.classList.remove('fade-in');
          headingRef.current.classList.add('fade-out');
          textRef.current.classList.add('fade-out');
        }
      },
      { threshold: 0.1 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <TopPanel>
        <LeftPanel>
          <Logo ref={logoRef} src={image} alt="Logo" />
        </LeftPanel>
        <RightPanel>
          <Line />
          <Section>
            <Heading ref={headingRef} backgroundText="TIA MEDIAS">TIA MEDIAS</Heading>
            <Text ref={textRef}>
            TIA MEDIAS provides practical, hands-on courses in visual communication, catering to artists, vis-com students, and hobbyists. Participants learn skills in writing, lighting, camerawork, editing, and directing through projects such as short films and TV ads, with no prior industry experience required.
            </Text>
          </Section>
          <a href="/tiamedia">
          <GetStartedButton>Know More</GetStartedButton>
          </a>
          <Line />
        </RightPanel>
      </TopPanel>
    </Container>
  );
};

export default Section8;
