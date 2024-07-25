import React from 'react';
import styled from 'styled-components';

import rightImage2 from '../../../../../assets/mainpage/Tiaentm1.jpeg'; // Replace with the correct path
import rightImage1 from '../../../../../assets/mainpage/Tiaentm2.jpeg'; // Replace with the correct path
import rightImage3 from '../../../../../assets/mainpage/Tiaentm3.jpeg'; // Replace with the correct path

const Container = styled.div`
  display: flex;
  background-color: black;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    width:auto;
  }

  @media (max-width: 768px) {
    margin-top:50px;
    margin-bottom: 0px;
    height:auto; 
  }
`;

const LeftColumn = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  margin-bottom: 2px;
  margin-top: -70px;
  margin-left:20px;
  margin-right:20px;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-left:10px;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px; /* Adjust the gap between grid items */
  width: 100%;
  max-width: 850px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    height:auto;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 0px;

  @media (max-width: 768px) {   
    margin-top:85px;
    margin-bottom: 0px;
    font-size:39px;
  }
`;

const Stitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 40px;
  margin-top:0px;

  @media (max-width: 768px) {
    margin-top:5px;
    margin-bottom: 0px;
    font-size:25px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size:16px;
    margin-top:20px;
  }
`;

const Button = styled.button`
  background-color: #333;
  color:white;
  border: none;
  padding: 8px 10px; /* Increased padding */
  font-size: 15px; /* Increased font size for better visibility */
  cursor: pointer;
  border-radius: 20px; /* Adjusted border radius */
  width:120px;
  height:38px;

  &:hover {
    background-color: #f14bb4;
  }
  
  @media (max-width: 768px) {
    margin-bottom:5px;
    font-size: 11px;
    width:90px;
    height:30px;
    padding: 5px 8px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 330px;
  border-radius: 10px;
  height:240px;
  transition: transform 0.3s ease; /* Add transition for smooth zoom effect */

  &:hover {
    transform: scale(1.1); /* Zoom in on hover */
  }

  @media (max-width: 1024px) {
    max-width: 260px;
    height:160px;
  }
     @media (min-width: 768px) {
    margin-top:20px;
  }
`;

const BlueBackground = styled.div`
  background-color: white; /* Light blue background color */
  flex: 1; /* Take up remaining space */
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  transform: skewX(0deg);

  @media (max-width: 768px) {
    height:auto;
    width:100%;
  }
`;

const Section3 = () => {
  return (
    <Container>
      <BlueBackground>
        <LeftColumn>
          <Title>TIA </Title>
          <Stitle>ENTREPRENEURSHIP</Stitle>
          <Subtitle>
            TIA Entrepreneurship empowers individuals to embrace risk, innovate, and lead teams towards business success. It emphasizes adaptability to seize new market opportunities and avoid attachment to current products or services.
          </Subtitle>
          <a href="/tiaent">
          <Button>Know More</Button>
          </a>
        </LeftColumn>
      </BlueBackground>
      <RightColumn>
        <ImageContainer>
          <Image src={rightImage1} alt="Product 1" />
        </ImageContainer>
        <div>
          <ImageContainer>
            <Image src={rightImage2} alt="Product 2" />
          </ImageContainer>
          <ImageContainer style={{ marginTop: '20px' }}>
            <Image src={rightImage3} alt="Product 3" />
          </ImageContainer>
        </div>
      </RightColumn>
    </Container>
  );
};

export default Section3;
