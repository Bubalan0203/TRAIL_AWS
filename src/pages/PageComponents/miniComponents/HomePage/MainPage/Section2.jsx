import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import backgroundImage from '../../../../../assets/mainpage/image1.jpeg'; // Replace with the correct path

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
  background-color: white;

  @media (min-width: 768px) {
    margin-bottom: 120px;
  }

   @media (min-width: 1500px) {
    margin-left: 60px;
  }
    @media (min-width: 1630px) {
    margin-left: 120px;
  }
     @media (min-width: 1730px) {
    margin-left: 150px;
  }
     @media (min-width: 1820px) {
    margin-left: 210px;
  }
     @media (min-width: 1920px) {
    margin-left: 250px;
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Heading = styled.h1`
  font-size: 5em;
  margin-bottom: 50px;
  width: 100%;
  max-width: 500px;
  margin-left: 80px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? fadeInLeft : '')} 2.5s ease forwards;

  @media (max-width: 768px) {
    margin-left: 0px;
    font-size: 39px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 1200px;
  height: 360px;
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
  color: white;
  margin-left: 80px;

  @media (max-width: 1375px) {
    margin-left: 5px;
  }
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  text-align: left;
  width: 100%;
  max-width: 500px;
  margin-left: 80px;

  @media (max-width: 768px) {
    margin-left: 0px;
    font-size: 13px;
    max-width: 200px;
  }
`;

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 0px;
  }
`;


const Button = styled.button`
  background-color: #333;
  border: none;
  color: white;
  padding: 8px 10px; /* Increased padding */
  font-size: 15px; /* Increased font size for better visibility */
  cursor: pointer;
  border-radius: 15px; /* Adjusted border radius */
  width: 120px;
  height: 38px;

  &:hover {
    background-color: #f14bb4;
    /* Apply wiggle animation on hover */
  }

  @media (max-width: 768px) {
    font-size: 11px;
    width: 90px;
    height: 30px;
    padding: 5px 10px;
  }
`;

const Section2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <PageContainer>
      <Heading ref={ref} isVisible={inView}>TIA EDGE</Heading>
      <Container>
        <OverlayContent>
          <Title>
          TIA EDGE offers specialized education for competitive exams in Indian Government, Insurance, and Banking sectors, emphasizing job security and personal fulfilment through achievement.
          </Title>
          <a href="/tiaedge">
            <Button>Know More</Button>
          </a>
        </OverlayContent>
      </Container>
    </PageContainer>
  );
};

export default Section2;
