import React from 'react';
import styled from 'styled-components';
import imageSrc from '../../../../../assets/mainpage/Tiaitm.jpeg'; // Replace with the correct path to your image

const Sectionbg = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  max-width: 1300px;
  background-color: #fff;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.03);
   
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (min-width: 768px) {
    margin: 110px 110px 150px 110px;
  }
     @media (min-width: 1550px) {
    margin-left:170px;
  }
     @media (min-width: 1650px) {
    margin-left:220px;
  }
     @media (min-width: 1750px) {
    margin-left:280px;
  }
    @media (min-width: 1880px) {
    margin-left:330px;
  }
`;

const Image = styled.img`
  width: 40%;
  height: 380px;
  padding: 20px;
  border-radius: 50px;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    border-radius: 30px;
  }

  ${Section}:hover & {
    transform: scale(1.01);
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
  margin-bottom: 20px;

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
          Our IT Solutions is a leading provider of cutting-edge software and technology solutions. We specialize in developing custom applications, optimizing digital infrastructure, and delivering tailored IT services to meet diverse business needs. Our team of skilled professionals is dedicated to driving innovation and enhancing operational efficiency. Committed to excellence, we partner with clients to create impactful solutions that fuel growth and success. Join us in shaping the future of technology.
          </Text>
        </Content>
      </Section>
    </Sectionbg>
  );
};

export default MorphologySection;
