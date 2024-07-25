import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../../../../assets/mainpage/image1.jpeg'; // Replace with the correct path

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
  background-color: white;


   @media (min-width: 768px) {
  margin-bottom:120px;
}
`;

const Heading = styled.h1`
  font-size: 5em;
  margin-bottom: 50px;
  width:100%;
  max-width:500px;
  margin-left:80px;

  @media (max-width: 768px) {
  margin-left:0px;
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
  margin-left:80px;

  @media (max-width: 1375px) {
  margin-left:5px; 
}
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  text-align: left;
  width:100%;
  max-width:500px;
  margin-left:80px;

  @media (max-width: 768px) {
 margin-left:0px;
 font-size:13px;
 max-width:200px;
}
`;

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;

 @media (max-width: 768px) {
 margin-left:0px;
 font-size:16px; 
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
   width:120px;
  height:38px;
   

  &:hover {
    background-color: #f14bb4;
  }
    
    @media (max-width: 768px) {
  font-size: 11px;
  width:90px;
  height:30px;
    padding: 5px 10px;
}
`;

const Section2 = () => {
  return (
    <PageContainer>
      <Heading>TIA EDGE</Heading>
      <Container>
        <OverlayContent>
          <Title>TIA Edge offers specialized education for competitive exams in India's Government, Insurance, and Banking sectors, emphasizing job security and personal fulfillment through achievement.</Title>
          <a href="/tiaedge">
          <Button>Know More</Button>
          </a>
        </OverlayContent>
      </Container>
    </PageContainer>
  );
};

export default Section2;
