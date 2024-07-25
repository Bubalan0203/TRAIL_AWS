import React from 'react';
import styled from 'styled-components';
import img1 from '../../../../../assets/Brain/Learning.jpeg'; // Update this path to the actual image path

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, rgba(240, 13, 136, 0.6) 30%, rgba(240, 13, 136, 0.1) 70%), url(${img1}) no-repeat center center;
  background-size: cover;
  height: auto;
  max-height: 110vh;
  padding: 20px;
  position: relative;
  font-family: Helvetica;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50px; /* Adjust width as needed */
    background: linear-gradient(to bottom, rgba(240, 13, 136, 0.8), rgba(240, 13, 136, 0.2));
    z-index: 1; /* Ensure it's above the background but below content */

    @media (min-width: 768px) {
      width: 100px; /* Increase width for larger screens */
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }

  /* Ensure the content is above the pseudo-element */
  & > * {
    position: relative;
    z-index: 2;
  }
`;

const Content = styled.div`
  max-width: 600px;
  margin-left: 60px;
  padding-left: 10px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;
  color: #000;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Highlight = styled.span`
  color: #fff;
  border-bottom: 3px solid #fff; /* Highlight with a main color bottom border */
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 30px;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ImageContainer = styled.div`
  margin: 40px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const App = () => {
  return (
    <Container>
      <Content>
        <Title>
          Tia <Highlight>Live Tutor</Highlight> 
        </Title>
        <Subtitle>
          It is long established fact that reader distracted by the readable content.
        </Subtitle>
      </Content>
      <ImageContainer>
        <StyledImage src={img1} alt="Educational background" />
      </ImageContainer>
      </Container>
   
  );
};

export default App;