import React from 'react';
import styled from 'styled-components';
import img1 from '../../../../../assets/Brain/Brain.jpg';// Update this path to the actual image path

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: Helvetica;
  background: url(${img1}) no-repeat center center;
  background-size: cover;
  height:100vh;
  color: white;
  padding: 20px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 50px;
  }
`;

const Content = styled.div`
  max-width: 700px;
  margin: 0 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  @media (min-width: 768px) {
    margin: 0 50px;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 30px;

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
        <Title>Tia Play</Title>
        <Subtitle>There is a powerful need for symbolism, and that means the architecture must have something that appeals to the human heart.</Subtitle>
      </Content>
    </Container>
  );
};

export default App;