import React from 'react';
import styled from 'styled-components';
import img1 from '../../../../../assets/Live/Tutor.jpg'; // Update this path to the actual image path

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: Helvetica, Arial, sans-serif;
  background: url(${img1}) no-repeat center center;
  background-size: cover;
  height: 100vh;
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
  background-color: #007bff;
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

const Link = styled.a`
  color: #007bff;
  margin: 10px;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const App = () => {
  return (
    <Container>
      <Content>
        <Title>Tia Live Tutor</Title>
        <Subtitle>TIA Live Tutor offers comprehensive online tuition across India, addressing individual student needs that are often unmet in traditional school settings, ensuring better academic performance and personalized attention.</Subtitle>
      </Content>
    </Container>
  );
};

export default App;
