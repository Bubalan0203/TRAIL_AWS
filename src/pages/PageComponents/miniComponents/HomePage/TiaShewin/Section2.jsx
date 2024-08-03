import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import img1 from '../../../../../assets/Shewin/Influence.jpg'; // Ensure this path is correct
import img2 from '../../../../../assets/Shewin/Trends.jpeg';
import img3 from '../../../../../assets/Shewin/Challenges.jpg';
import img4 from '../../../../../assets/Shewin/Leadership.jpeg';
import img5 from '../../../../../assets/Shewin/Expections.jpg';
import img6 from '../../../../../assets/Shewin/Networks.jpeg';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  font-family: Helvetica, sans-serif;
  text-align: center;
  padding: 20px;
  color: #000;
  overflow-x: hidden;
`;

const Header = styled.div`
  font-size: 2rem;
  font-weight: bold;
  ${({ inView }) =>
    inView &&
    css`
      animation: ${fadeIn} 1s ease-out;
    `}
`;

const Nav = styled.nav`
  display: flex;
  padding: 10px 0;
  flex-wrap: nowrap;
  background-color: #fff;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  gap: 15px;
  margin: 0 29%;

  @media (max-width: 1268px) {
    padding: 10px;
    gap: 10px;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 10px;
    gap: 10px;
    margin: 0;
  }

  @media (max-width: 600px) {
    padding: 10px;
    gap: 0;
    margin: 0;
  }
`;

const NavItem = styled.span`
  font-size: 1.2rem;
  color: #000;
  text-decoration: none;
  padding: 5px;
  cursor: pointer;
  margin: 0;

  ${({ active }) =>
    active &&
    `
    color: #f00d88;
    border-bottom: 2px solid #f00d88;
  `}

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

const TextContent = styled.div`
  max-width: 900px;
  text-align: left;
  margin-top: 20px;
  padding: 0 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;

const SectionHeader = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  ${({ inView }) =>
    inView &&
    css`
      animation: ${fadeIn} 1s ease-out;
    `}

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const SectionText = styled.div`
  margin: 20px 0;
  font-size: 1.15rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const SectionButton = styled.button`
  background-color: #f00d88;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Image = styled.img`
  max-width: 80%;
  height: 300px;
`;

const sections = {
  Influence: {
    header: 'Cultural Influences',
    text: 'Cultural values, norms, and customs significantly shape women’s entrepreneurship, influencing both opportunities and barriers. Traditionally, gender roles have confined women to household and caregiving responsibilities, limiting their access to income-earning opportunities. These cultural expectations perpetuate biases that hinder women from fully participating in entrepreneurial activities.',
    image: img1,
  },
  Trends: {
    header: 'Positive Cultural Trends',
    text: 'Despite these barriers, cultural shifts are recognizing and valuing women’s capabilities in business. Skills developed through multitasking, interpersonal communication, and empathy—often honed through household responsibilities—are increasingly seen as assets in entrepreneurial contexts. As more women assume leadership roles in business, societal acceptance and institutional support grow, reducing cultural barriers and legitimizing women in leadership positions.',
    image: img2,
  },
  Challenges: {
    header: 'Challenges in Gender Bias',
    text: 'Women often face bias in leadership roles due to stereotypes about female leadership styles. Role incongruity theory suggests that perceptions of leadership qualities clash with societal expectations of female behavior, leading to discrimination against women leaders. This bias, reinforced by a think-leader, think-male mindset, hampers women’s access to funding and professional networks necessary for entrepreneurial success.',
    image: img3,
  },
  Leadership: {
    header: 'Positive Attributes of Women’s Leadership',
    text: 'Conversely, qualities traditionally associated with women—such as collaboration, empathy, and community-building—prove invaluable in leadership roles. Research highlights women’s strengths in fostering diverse teams, managing relationships, and navigating global business environments. These skills are pivotal in building successful entrepreneurial ventures and fostering inclusive workplace cultures.',
    image: img4,
  },
  Expectations: {
    header: 'Gender Role Expectations',
    text: 'Stereotypes associating women with communal and nurturing traits, rather than assertiveness and independence, create additional challenges. These stereotypes create a mismatch between perceived female leadership characteristics and societal expectations, making it harder for women to succeed in entrepreneurial ventures. This discrepancy often results in limited funding opportunities and smaller professional networks compared to men.',
    image: img5,
  },
  Networks: {
    header: 'Role Models and Support Networks',
    text: 'Role models play a crucial role in empowering women entrepreneurs. Role models, often family members or peers, inspire and support aspiring female entrepreneurs, shaping their beliefs in their own capabilities. Family support and networks of peers provide essential resources and encouragement, helping women overcome barriers and achieve entrepreneurial success.',
    image: img6,
  },
};

const App = () => {
  const [activeSection, setActiveSection] = useState('Influence');
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });

  return (
    <Container>
      <Header ref={headerRef} inView={headerInView}>
        Cultural Influences on Women’s Entrepreneurship
      </Header>
      <Nav>
        {Object.keys(sections).map((section) => (
          <NavItem
            key={section}
            active={activeSection === section}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </NavItem>
        ))}
      </Nav>
      <Section>
        <Image src={sections[activeSection].image} alt={sections[activeSection].header} />
        <TextContent>
          <SectionHeader inView={headerInView}>{sections[activeSection].header}</SectionHeader>
          <SectionText>{sections[activeSection].text}</SectionText>
        </TextContent>
      </Section>
    </Container>
  );
};

export default App;
