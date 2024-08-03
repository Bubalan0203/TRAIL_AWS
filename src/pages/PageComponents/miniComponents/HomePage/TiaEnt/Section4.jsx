import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import img1 from '../../../../../assets/Ent/Experience.jpg';
import img2 from '../../../../../assets/Ent/Lifestyle.jpeg';
import img3 from '../../../../../assets/Ent/Collaboration.jpeg';
import img4 from '../../../../../assets/Ent/Pride.jpg';
import img5 from '../../../../../assets/Ent/Higher.jpg';
import img6 from '../../../../../assets/Ent/Success.jpeg';

const fadeInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  font-family: Helvetica, sans-serif;
  text-align: center;
  padding: 20px;
  margin-bottom: 0px;
  color: #fff;
  overflow-x: hidden;
`;

const Header = styled.div`
  font-size: 2rem;
  font-weight: bold;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (props.isVisible ? 'translateY(0)' : 'translateY(-100%)')};
  transition: opacity 2s ease-out, transform 2s ease-out;
  animation: ${(props) => (props.isVisible ? css`${fadeInTop} 2s ease-out` : 'none')};
`;

const Nav = styled.nav`
  display: flex;
  padding: 10px 0;
  flex-wrap: nowrap;
  background-color: #0f0f12;
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
  color: #fff;
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

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const SectionText = styled.div`
  margin: 20px 0;
  font-size: 1.2rem;

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
  max-width: 90%;
  height: 300px;
`;

const sections = {
  Experience: {
    header: "Unexpected Experiences",
    text: "Entrepreneurship involves navigating unpredictable challenges and experiences, which cultivate resilience, decision-making skills, and adaptability. These unexpected situations contribute to personal and professional growth.",
    image: img1,
  },
  Lifestyle: {
    header: "Digital Nomad Lifestyle",
    text: "Depending on the business model, entrepreneurs can work remotely and enjoy flexibility in their location, allowing them to travel and explore while managing their businesses from anywhere in the world.",
    buttonText: "Explore Webkata",
    image: img2,
  },
  Collaborators: {
    header: "Freedom to Choose Collaborators",
    text: "Entrepreneurs have the liberty to select clients, employees, and partners who align with their values and vision, creating a positive work environment and promoting organizational culture.",
    image: img3,
  },
  "Pride and Fulfillment": {
    header: "Sense of Pride and Fulfillment",
    text: "Building and nurturing a successful business instills a deep sense of pride and fulfillment. Entrepreneurs take pride in creating something from scratch, overcoming challenges, and witnessing their vision come to life.",
    image: img4,
  },
  "Higher Profits": {
    header: "Potential for Higher Profits",
    text: "Unlike fixed salaries, entrepreneurs have the potential to earn higher profits based on the success and growth of their businesses. They have control over financial outcomes and can reinvest profits for future expansion.",
    image: img5,
  },
  Success: {
    header: "Full Rewards of Success",
    text: "Entrepreneurs reap the full rewards of their efforts and investments. After covering expenses and payroll, they retain all profits earned, which can be reinvested into the business or used for personal gain.",
    image: img6,
  },
};

const App = () => {
  const [activeSection, setActiveSection] = useState('Experience');

  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <Container isVisible={isVisible}>
      <Header ref={titleRef} isVisible={isVisible}>
        Challenges
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
          <SectionHeader>{sections[activeSection].header}</SectionHeader>
          <SectionText>{sections[activeSection].text}</SectionText>
        </TextContent>
      </Section>
    </Container>
  );
};

export default App;
