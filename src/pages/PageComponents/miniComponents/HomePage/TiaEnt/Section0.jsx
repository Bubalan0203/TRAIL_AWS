import React from 'react';
import styled from 'styled-components';
import img1 from '../../../../../assets/Ent/Entrepreneur.jpg'; // Update this path to the actual image path

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: Helvetica, Arial, sans-serif;
  background: url(${img1}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  margin-top:50px;
  color: white;
  padding: 20px;
  text-align: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 50px;
    text-align: left;
  }
`;

const Content = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
 // Optional: adds a background overlay to enhance text readability
  border-radius: 10px;

  @media (min-width: 768px) {
    max-width: 550px;
    margin: 0;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color:#f00d88;

  @media (min-width: 768px) {
    font-size: 2.7rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.8rem;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;


const App = () => {
  return (
    <Container>
      <Content>
        <Title>Tia Enterpreneurship</Title>
        <Subtitle>TIA Entrepreneurship fosters the skills and mindset needed for successful business ventures, emphasizing risk tolerance, leadership, and adaptability to seize market opportunities and turn business ideas into reality.</Subtitle>
      </Content>
    </Container>
  );
};

export default App;