import React from 'react';
import styled from 'styled-components';
import image2 from '../../../../../assets/mainpage/Tiaplaym.jpeg';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column; /* Adjusted for smaller screens */
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 35px;
  margin-top: 20px;
  max-width: 80%;
  box-shadow: 0px 4px 8px rgba(2.9, 2.9, 6.9, 11.99);
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    margin-top: 40px;
  }
`;

const TestimonialImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  border-radius: 30px;
  margin-bottom: 0px;
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    max-width: none;
    width: 28%;
    margin-right: 40px;
  }

  ${TestimonialContainer}:hover & {
    transform: scale(1.01);
  }
`;

const TestimonialContent = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-left: 0px;
  }
`;

const Button = styled.button`
  padding: 10px 20px; /* Reduced padding for better button size */
  background-color: #f14bb4;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 15px;
  color: white;

  &:hover {
    background-color: #333;
  }

  @media (min-width: 768px) {
    margin-top: 20px; /* Adjusted margin for larger screens */
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
    padding: 5px 8px;
  }
`;

const TestimonialText = styled.p`
  max-width: 100%;
  font-size: 18px;
  color: #666;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Title = styled.h2`
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 39px;
    margin-top: 20px;
  }
`;

const Section9 = () => {
  return (
    <Container>
      <TestimonialContainer>
        <TestimonialImage src={image2} alt="Testimonial" />
        <TestimonialContent>
          <Title>TIA PLAY</Title>
          <TestimonialText>
          TIA PLAY prioritizes children's safety and freedom within boundaries, fostering an international outlook and encouraging responsible decision-making. They aim to develop children into independent, morally upright individuals through physical, mental, and spiritual education, ensuring a smooth transition to primary school with a focus on literacy and readiness.
          </TestimonialText>
          <a href="/tiaplay">
            <Button>Know More</Button>
          </a>
        </TestimonialContent>
      </TestimonialContainer>
    </Container>
  );
};

export default Section9;
