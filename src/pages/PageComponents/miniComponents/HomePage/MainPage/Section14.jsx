import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #000;
  padding-top: 70px;
  justify-content:center;
  align-items:center;
`;

const Box = styled(Link)`
  background: rgba(33.1, 31, 31, 60.15);
  backdrop-filter: blur(55px);
  padding: 20px;
  margin: 15px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  text-align: center;
  text-decoration: none;
  display: block;
  transition: transform 0.5s ease, background 0.3s ease;

  h3 {
    margin-bottom: 10px;
  }

  &:hover {
    transform: translateY(-15px);
    background: rgb(248, 4, 153);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Section14 = ({ scrollToSection,section11Ref , section12Ref,section13Ref }) => {
  
  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    scrollToSection(section12Ref); // Scroll to Section11
  };

  const handleClick1= (event) => {
    event.preventDefault(); // Prevent the default link behavior
    scrollToSection(section11Ref); // Scroll to Section11
  };

  const handleClick2= (event) => {
    event.preventDefault(); // Prevent the default link behavior
    scrollToSection(section13Ref); // Scroll to Section11
  };

  return (
    <Container>
      <Box to="/" onClick={handleClick}>
        <h3>VIP</h3>
        <p>The vision of the company is creating ten thousand entrepreneurs by 2028. It has 150 branches in Tamil Nadu. It is an ISO certified company. The company’s head office is in Podanur Coimbatore.</p>
      </Box>
      <Box to="/" onClick={handleClick1}>
        <h3>FRANCHISE</h3>
        <p>Successful entrepreneurs see the risks involved in starting a new business, but understand that without risk, there is no reward. Entrepreneurs are innovators that work tirelessly to bring their business ideas to life and reap the profits.</p>
      </Box>
      <Box to="/" onClick={handleClick2}>
        <h3>VIP FRANCHISE</h3>
        <p>Entrepreneurship is about identifying opportunities, taking initiative, and creating value in the marketplace. Entrepreneurs play a crucial role in driving economic growth, innovation, and job creation in society.</p>
      </Box>
    </Container>
  );
};

export default Section14;
