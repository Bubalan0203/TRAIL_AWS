import React from 'react';
import styled from 'styled-components';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import videoSrc from '../../../../../assets/mainpage/videoooo.mp4'; // Update this path to the actual video path

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica;
  height: 100vh;
  color: white;
  padding: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 50px;
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const FadeOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  &::before,
  &::after {
      content: '';
    position: absolute;
    width: 100%;
    height: 35%; /* Increased height for a larger fade effect */
    left: 0;
  }

  &::before {
    top: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.99), transparent); /* Darker fade */
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.99), transparent); /* Darker fade */
  }
`;

const Content = styled.div`
  max-width:500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  z-index: 1;
  background-color:rgba(0,0,0,0.4);

  @media (min-width: 768px) {
    margin: 0 50px;
  }
 @media (max-width: 768px) {
    max-width:400px;
  }
   @media (max-width: 498px) {
    max-width:300px;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 30px;
  color: #FF007F;
  font-weight:600;
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

   @media (max-width: 768px) {
    font-size:2.5rem;
  }

    @media (max-width: 498px) {
    font-size:1.5rem;
      font-weight:600;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 30px;
  color: black;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 15px 35px;
  margin: 10px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background-color: #0056b3;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Landingpage = () => {
  const [text] = useTypewriter({
    words: ['TALENT INITIATORS AND ACCELERATORS'],
    loop: false,
    delaySpeed: 1500,
  });

  return (
    <Container>
      <BackgroundVideo autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <FadeOverlay />
      <Content>
        <Title>{text}<Cursor /></Title>
        <Subtitle>Our learning company prioritizes continuous employee development, fostering a culture of innovation and adaptability to stay competitive in evolving markets.
        </Subtitle>
        <ButtonContainer>
 
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Landingpage;
