import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { FaArrowRight, FaTasks, FaFileAlt, FaGraduationCap, FaChalkboardTeacher, FaBook , FaFlask} from 'react-icons/fa';

const App = () => {
  const services = [
    { icon: FaBook, title: 'Quality Education Focus', text: 'CISCE aims to provide quality education, empowering learners to contribute to a pluralistic society through an engaging learning experience.' },
    { icon: FaChalkboardTeacher, title: 'Class 1 to 5', text: 'The council emphasizes skill refinement in early education. Schools under CISCE can select their textbooks but must follow board guidelines to ensure relevant syllabuses.' },
    { icon: FaGraduationCap, title: 'Class 6 to 10', text: 'For these classes, CISCE provides a well-structured syllabus and guidelines. Schools have a choice of books but must adhere to theme-based learning outcomes defined by the council.' },
    { icon: FaFileAlt, title: 'ICSE Class 10 Board Exam', text: 'The ICSE Class 10 Board exam aligns with the New Education Policy 1986, offering a general education exam with seven subjects—four compulsory and three optional. Subjects include English, History, Commercial Studies, Science, and Environmental Science.' },
    { icon: FaTasks, title: 'ICSE Compartmental Exams', text: 'Students who do not pass the ICSE board examination can take a compartment exam in one subject, provided they pass English and three other subjects. Entries are submitted online by the school head.' },
    { icon: FaFlask, title: 'ICSE Practical Exams', text: 'Practical exams are crucial for subjects like Art, Physics, Indian Music, Home Science, Chemistry, Biology, Biotechnology, Computer Science, and Fashion Designing. They promote experiential learning and are essential for comprehensive understanding and good scores.' },
  ];

  return (
    <AppContainer>
      <GlobalStyle />
      <Subtitle>Indian Certificate of Secondary Education (ICSE)</Subtitle>
      <ShortLine />
      <ServicesContainer>
        {services.map((service, index) => (
          <ServiceBox className={index < 5 ? 'hoverable' : ''} key={index}>
            {index < 5 ? (
              <>
                <service.icon className="icon" />
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceText>{service.text}</ServiceText>
              </>
            ) : (
              <>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceText>{service.text}</ServiceText>
                <ContactNumber>{service.contact}</ContactNumber>
              </>
            )}
          </ServiceBox>
        ))}
      </ServicesContainer>
    </AppContainer>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Helvetica, sans-serif !important;
    overflow-x: hidden; 
  }
  .container {
    font-family: Helvetica, sans-serif !important;
    padding: 20px;
    text-align: center;
    font-weight: bold;
  }

  .header {
    margin-bottom: 30px;
    font-size: 1.4rem !important;
    font-weight: bold;
    color: #000;

    @media (max-width: 480px) {
      font-size: 0.9rem !important;
    }

    @media (max-width: 991px) {
      font-size: 0.95rem !important;
    }
  }
`;

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 10px;
  color: #f00d88;
`;

const Subtitle = styled.p`
  margin-top: 5px;
  font-size: 1.6rem !important;
  color: black;
  font-weight: bolder;
`;

const arrowMove = keyframes`
  from {
    bottom: -50px;
  }
  to {
    bottom: -15px;
  }
`;

const Arrow = styled(FaArrowRight)`
  font-size: 1.5em;
  color: white;
  transition: color 0.3s;
`;

const ArrowBox = styled.div`
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 40px;
  background-color: #f00d88;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, color 0.3s, bottom 0.3s;
  cursor: pointer;
  opacity: 0;

  &:hover {
    background-color: rgba(240, 13, 136, 0.7);
    opacity: 0.6;
  }

  &:hover ${Arrow} {
    color: black;
  }
`;

const movingLine = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(50%);
  }
`;

const ShortLine = styled.div`
  height: 5px;
  background: #f00d88;
  width: 15%;
  margin: 5px 0 30px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f00d88;
    animation: ${movingLine} 2s linear infinite alternate;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  width: 100%;

  @media (min-width: 1680px) {
    width: 80%;
  }
`;

const serviceHover = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

const ServiceBox = styled.div`
  padding: 40px;
  width: 30%;
  border-radius: 10px;
  border: 2px solid #000;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: rgba(240, 13, 136, 0.7);
    animation: ${serviceHover} 0.3s forwards;
  }

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }

  &.hoverable:hover ${ArrowBox} {
    opacity: 0.7;
    animation: ${arrowMove} 0.3s forwards;
  }

  .icon {
    font-size: 2em;
    margin-bottom: 20px;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 1.4em !important;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2em !important;
  }

  @media (max-width: 480px) {
    font-size: 1em !important;
  }
`;

const ServiceText = styled.p`
  font-size: 1.1em !important;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em !important;
  }

  @media (max-width: 480px) {
    font-size: 0.9em !important;
  }
`;

const ContactNumber = styled.p`
  font-size: 1em;
  color: #333;
`;
