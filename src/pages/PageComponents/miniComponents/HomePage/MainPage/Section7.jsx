
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import image1 from '../../../../../assets/mainpage/Tiashwwinm.jpg';

// Keyframes for the slide-up animation
const slideUp = keyframes`
  0% {
    transform: translateY(30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Keyframes for the fade-in animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Set minimum height to occupy full viewport */
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1200px; /* Limit maximum width */
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items on smaller screens */
    align-items: center;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 600px; /* Adjust width for content */
  text-align: left; /* Ensure text alignment */
  opacity: 0; /* Initial state for animation */
  transform: translateY(20%); /* Initial state for animation */
  
  &.animate {
    animation: ${fadeIn} 1.3s forwards;
  }

  @media (min-width: 775px) {
    margin-top: 0px;
  }
`;

const Title = styled.h2`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 39px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px; /* Adjust width for image */
  margin-left: auto; /* Push image to the right on larger screens */
  margin-right: auto; /* Center image on smaller screens */
  text-align: center; /* Center image */
  opacity: 0; /* Initial state for the animation */
  transform: translateY(100%); /* Initial state for the animation */

  &.animate {
    animation: ${slideUp} 1.5s forwards;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;

  @media (min-width: 768px) {
    margin-left: 40px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const Button = styled.button`
  padding: 8px 10px;
  background-color: #333;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  color: white;
  margin-top: 20px;

  &:hover {
     background-color: #f14bb4;
  }

  @media (min-width: 768px) {
    padding: 8px 10px; /* Increased padding */
    font-size: 15px; /* Increased font size for better visibility */
    cursor: pointer;
    border-radius: 20px; /* Adjusted border radius */
    width: 120px;
    height: 38px;
  }

  @media (max-width: 1024px) {
    font-size: 11px;
    width: 90px;
    height: 30px;
    padding: 1px 8px;
  }
`;

const Section7 = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <Content ref={contentRef} className={isIntersecting ? 'animate' : ''}>
          <Title>TIA SHEWIN</Title>
          <Description>
          TIA SHEWIN focuses on women entrepreneurship, encompassing the creation, management, and growth of businesses led by women. It emphasizes seizing opportunities, strategic planning, financial management, and risk-taking to achieve business goals. Government definitions stress ownership and employment criteria, highlighting women entrepreneurs' significant contributions to economic and social development globally within diverse cultural contexts.
          </Description>
          <a href="/tiashewin">
            <Button>Know More</Button>
          </a>
        </Content>
        <ImageContainer ref={imageRef} className={isIntersecting ? 'animate' : ''}>
          <Image src={image1} alt="Radiology Software Screenshot 1" />
        </ImageContainer>
      </ContentWrapper>
    </Container>
  );
};

export default Section7;
