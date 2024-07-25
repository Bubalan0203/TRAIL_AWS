import React from 'react';
import styled from 'styled-components';
import imageSrc from '../../../../../assets/mainpage/Tiaitm.jpeg'; // Replace with the correct path to your image


const Sectionbg = styled.div`
  
   @media (max-width: 768px) {
    flex-direction: column;
    height:auto;
    margin-top:20px;
    margin-bottom:20px;
  }
`;


const Section = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  max-width: 1300px;
  background-color: #fff;


  @media (max-width: 768px) {
    flex-direction: column;
    height:auto;
    margin-left:20px;
    margin-right:20px;
  }

    @media (min-width: 768px) {
    margin: 110px 110px 150px 110px;
    
  } 
`;


const Image = styled.img`
  width: 40%;
  height: 380px;
  padding: 20px;
  border-radius: 50px;

  @media (max-width: 768px) {
    width: 90%;
    height:auto;
    border-radius:30px;
  }
`;

const Content = styled.div`
  padding: 20px;
  flex: 1;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 4rem;
  margin: 0;
  margin-bottom:20px;

  @media (max-width: 768px) {
    font-size: 39px;
  }
`;

const Subtitle = styled.h3`
  font-size: 18px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  color: #333;
  

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  background-color: #00b4d8;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const MorphologySection = () => {
  return (
    <Sectionbg>
    <Section>
      <Image src={imageSrc} alt="Endovascular Model" />
      <Content>
        <Title>TIA IT</Title>
        
        <Text>
        "TIA is a comprehensive educational institute dedicated to nurturing individual talents and unleashing hidden potentials through specialized programs. From enhancing concentration, discipline, and memory to fostering academic excellence and personal growth, TIA empowers students to excel in diverse fields, from competitive exams to arts and entrepreneurship. With a commitment to quality education and holistic development, TIA ensures every child and learner achieves their fullest potential."
        </Text>
     
      </Content>
    </Section>
    </Sectionbg>
  );
};

export default MorphologySection;
