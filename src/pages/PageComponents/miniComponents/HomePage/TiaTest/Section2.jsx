import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { FaArrowRight, FaChalkboardTeacher, FaGraduationCap, FaClock, FaChartLine, FaCommentDots,FaUserGraduate  } from 'react-icons/fa';

const App = () => {
  const services = [
    { icon: FaUserGraduate, title: 'Effective Student Guidance', text: 'TIA-TEST HUB combines individual student effort and online assessment tools to achieve excellent results, guiding students through various programs to succeed in life. ' },
    { icon: FaChalkboardTeacher, title: 'Unique Teaching Methodology', text: 'The platform employs a structured learning style and unique teaching methods aimed at excelling in competitive exams like JEE, NEET, KVPY, and Olympiads. ' },
    { icon: FaGraduationCap, title: 'Support for Medical and Engineering Aspirants', text: 'TIA-TEST HUB aids students in gaining admission to medical and engineering colleges by providing targeted assistance.' },
    { icon: FaClock, title: 'JEE Main Preparation', text: 'The hub offers JEE Main Mock Tests online, helping students familiarize themselves with the exam format and manage their time effectively. Chapter-specific tests aid in covering important topics. ' },
    { icon: FaChartLine, title: 'Confidence Building', text: 'Mock Tests designed by TIA-TEST HUB help students gain confidence and improve performance by practicing with real exam formats and question types. ' },
    {  title: 'Personalized Feedback', text: 'TIA-TEST HUB provides detailed insights and solutions after each test, helping students understand their performance and improve their scores through selfassessment. ' },
  ];

  return (
    <AppContainer>
      <GlobalStyle />
      <div className="container">
        <div className="header">
        Introducing a new way to crack JEE, NEET, NTSE, Olympiads, and more: strong
        academic preparation, innovative methods, rigorous practice, a calm temperament,
       and a zeal to win are crucial for success in competitive exams. Students invest years
       of dreams, months of sleepless nights, and weeks of hard work for the "Golden 3
       hours" of exam time, which can change their destiny. 
       <br/>
       <br />
       TIA-TEST HUB offers aninvaluable opportunity to experience and excel in these crucial hours through a vast
       repository of several years of question papers for core subjects across competitive
        exams like JEE, NEET, NTSE, Olympiads, and more. With over 1250 exams covered,
        TIA-TEST HUB allows students to take tests, assess their knowledge, and receive
        instant scoring, providing unlimited practice opportunities with a full package
</div>
        </div>
      <Subtitle>Advantages of TIA-TEST HUB</Subtitle>
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
    font-size: 1.3rem !important;
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
    background-color:#b24185c2;
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
