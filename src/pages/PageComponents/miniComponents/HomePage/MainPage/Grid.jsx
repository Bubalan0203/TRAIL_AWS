import React from 'react';
import styled from 'styled-components';
import BrainLogo from '../../../../../assets/mainpage/Brainlogo.png';
import EdgeLogo from '../../../../../assets/mainpage/Edgelogo.png';
import TiaLT from '../../../../../assets/mainpage/TiaLT.png';
import TesthubLogo from '../../../../../assets/mainpage/Testhublogo.png';
import MockLogo from '../../../../../assets/mainpage/Mocklogo.png';
import ShewinLogo from '../../../../../assets/mainpage/Shewinlogo.png';
import MediasLogo from '../../../../../assets/mainpage/Mediaslogo.png';
import PlayLogo from '../../../../../assets/mainpage/Playlogo.png';

const products = [
  { id: 1, name: 'Program enhances focus, discipline, memory, talents, and overall behavioral improvements.', logo: BrainLogo, bgColor: 'white', sectionRef: 'section1Ref', style: 'style1' },
  { id: 3, name: 'Government sector jobs offer stability, respect, and personal achievement opportunities.', logo: EdgeLogo, bgColor: 'white', sectionRef: 'section3Ref', style: 'style3' },
  { id: 4, name: 'Entrepreneurs thrive on innovation, risk-taking, leadership, and seizing opportunities.', logo: EdgeLogo, bgColor: 'white', sectionRef: 'section4Ref', style: 'style4' },
  { id: 5, name: 'TIA Live Tutor offers personalized online tuition solving students study issues.', logo: TiaLT, bgColor: 'white', sectionRef: 'section5Ref', style: 'style5' },
  { id: 7, name: 'TIA Test Hub offers extensive practice for competitive exam preparation online.', logo: TesthubLogo, bgColor: 'white', sectionRef: 'section7Ref', style: 'style7' },
  { id: 6, name: 'TIA MOC promotes language learning for cognitive growth and global interaction.', logo: MockLogo, bgColor: 'white', sectionRef: 'section6Ref', style: 'style6' },
  { id: 2, name: 'TIA She Win empowers women in entrepreneurship for economic and social impact.', logo: ShewinLogo, bgColor: 'white', sectionRef: 'section2Ref', style: 'style2' },
  { id: 8, name: 'TIA Medias offers hands-on learning in visual communication and media production.', logo: MediasLogo, bgColor: 'white', sectionRef: 'section8Ref', style: 'style8' },
  { id: 9, name: 'TIA Play fosters safe, free-spirited learning for future global citizens.', logo: PlayLogo, bgColor: 'white', sectionRef: 'section9Ref', style: 'style9' },
  { id: 10, name: 'TIA Play fosters safe, free-spirited learning for future global citizens.', logo: EdgeLogo, bgColor: 'white', sectionRef: 'section10Ref', style: 'style10' },
];

const Grid = ({ scrollToSection, sections }) => {
  return (
    <Backg>
      <Container>
        {products.map(product => (
          <Card key={product.id} bgColor={product.bgColor} className={product.style}>
            <Logo src={product.logo} alt={`${product.name} logo`} />
            <ProductName>{product.name}</ProductName>
            <KnowMore onClick={() => scrollToSection(sections[product.sectionRef])}>
              Know More <Arrow>&#8594;</Arrow>
            </KnowMore>
          </Card>
        ))}
      </Container>
    </Backg>
  );
};

export default Grid;
// Styled Components
const Backg = styled.div`
  background-color: black;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh; 
 
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0px;
  }
`;

const Card = styled.div`
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: auto; 

  &.style1 {
    grid-column: span 1;
    grid-row: span 2;
    
      @media (min-width: 900px) {
    height: 402px; /* Increased height */
  }
  }
  &.style2 {
    grid-column: span 1;
    grid-row: span 1;
  }
  &.style3 {
    grid-column: span 2;
    grid-row: span 1;
  }
  &.style4 {
    grid-column: span 1;
    grid-row: span 2;

    @media (min-width: 900px) {
    height: 402px; /* Increased height */
  }
  }

  &.style5 {
    grid-column: span 2;
    grid-row: span 1;
  }
  &.style6 {
    grid-column: span 1;
    grid-row: span 1;
     
  }

  &.style7 {
    grid-column: span 1;
    grid-row: span 1;
    
    @media (min-width: 900px) {
   margin-top: -108px; /* Add margin to align with middle */
    height: 402px; /* Increased height */
  }
  }
  &.style8 {
    grid-column: span 1;
    grid-row: span 1;

     @media (min-width: 900px) {
   margin-top: -108px; /* Add margin to align with middle */
    height: 402px; /* Increased height */
  }
  }
  &.style9 {
    grid-column: span 2;
    grid-row: span 1;
  }
  &.style10 {
    grid-column: span 2;
    grid-row: span 1;
  }

  @media (max-width: 769px) {
    grid-column: span 4 !important;
    grid-row: auto !important;
    width: auto;
    margin-bottom: 20px;
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;

  @media (max-width: 769px) {
    width: 100px;
    height: 50px;
  }
`;

const ProductName = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: 890px) {
    font-size: 12px;
  }
`;

const KnowMore = styled.a`
  text-decoration: none;
  color: #fff;
  background-color: #000;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #FF007F;
  }

  @media (max-width: 890px) {
    font-size: 10px;
    height: 20px;
    width: 85px;
    padding: 2px 4px;
  }
`;

const Arrow = styled.span`
  margin-left: 10px;
`;
