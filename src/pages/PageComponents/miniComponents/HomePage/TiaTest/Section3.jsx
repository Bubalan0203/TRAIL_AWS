import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight, FaArrowLeft, FaHome,          
      FaChartBar, FaClipboardList, FaTools, FaShieldAlt ,FaFileAlt, FaKeyboard, FaTrain, FaWrench, FaRegFlag, FaPiggyBank , FaBriefcase , FaCashRegister, 
      FaFileInvoiceDollar, FaFileContract, FaFileInvoice , FaUserFriends, FaMoneyBillWave, FaMoneyBillWaveAlt, FaCity, 
      FaBrain , FaGraduationCap, FaGlobe, FaChartLine, FaUserSecret, FaBusinessTime , FaSeedling, FaPlane,  FaLandmark , FaAnchor , FaUtensils, FaIdCard   } from 'react-icons/fa';

import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  padding: 0;
  font-family: Helvetica;
`;

const Container = styled.div`
  background-color: #f00d88;
  color: white;
  padding: 80px;
  box-sizing: border-box;
  width: 100%;
  max-height: 100vh;
  transition: transform 0.5s ease-in-out;
  position: absolute;
  overflow-y: auto;

  @media (max-width: 1024px) {
    padding: 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }

  @media (max-height: 600px) {
    position: relative;
  }
`;

const Heading = styled.h1`
  margin: 0;
  padding-bottom: 20px;
  text-align: left;
  font-size: 2em;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const GridItem = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 0.8;
  padding: 20px;
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #0f0f12;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const IconWrapper = styled.div`
  margin-right: 20px;
  font-size: 26px;
  color: white;
  transition: color 0.3s ease;

  ${GridItem}:hover & {
    color: #0f0f12;
  }

  @media (max-width: 768px) {
    margin-right: 15px;
  }

  @media (max-width: 480px) {
    margin-right: 10px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
 
`;

const MainText = styled.div`
  font-weight: bold;
  font-size: 25px;
   

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const SubText = styled.div`
  font-size: 18px;
  color: white;
  transition: color 0.3s ease;

  ${GridItem}:hover & {
    color: #0f0f12;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const NavButtons = styled.div`
  position: absolute;
  top: 48%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  left:0;
  padding: 0 0;
  box-sizing: border-box;
  @media (max-width: 1198px) {
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    padding: 0 0px;
  }
`;

const NavButton = styled.button`
  background-color: #f00d88;
  border-radius: 50%;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 22px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #999;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 14px;
  }
`;

const StyledModalHeader = styled(Modal.Header)`
  background-color: white;
  border: none;
  padding-top: 0.5rem;
  padding-bottom:0.5rem;
  color: black;
  
  .modal-title{
  padding-top: 1rem;
  margin-left:38%;
  }
`;

const StyledModalBody = styled(Modal.Body)`
  background-color: white;
  color: black;
  font-size: 1em;
  text-align: center;
  padding: 1.5rem;
  position: relative;

  @media (max-width: 991px) {
    font-size: 0.9em;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
  .modal-content {
   padding: 10px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    background-color: white;
}

`;

// Sample data for itemsList
const items = [
  { icon: <FaChartBar />, mainText: "SSC CGL", subText: "Combined Graduate Level Exam", modalContent: "The SSC CGL exam is a multi-tier examination conducted by the Staff Selection Commission to select candidates for various Group B and C posts in government ministries, departments, and organizations. It includes topics such as general knowledge, quantitative aptitude, reasoning, and English comprehension. " },
  { icon: <FaClipboardList />, mainText: "SSC CHSL", subText: "Combined Higher Secondary Level", modalContent: "The SSC CHSL exam is conducted by the Staff Selection Commission to recruit for positions like Lower Division Clerk, Postal Assistant, and Data Entry Operator. Candidates aged 18 to 27 are eligible to apply for this exam. " },
  { icon: <FaTools />, mainText: "SSC JE", subText: "Junior Engineer", modalContent: "The SSC JE exam is conducted annually to recruit Junior Engineers in various government organizations. This exam is a gateway for engineering graduates to secure prestigious technical posts in civil, electrical, and mechanical fields. " },
  { icon:  <FaShieldAlt />, mainText: "SSC CPO ", subText: "Central Police Organisation", modalContent: "The SSC CPO exam recruits candidates for police departments such as Delhi Police, CISF, and CAPF. It includes physical and written tests to select Assistant SubInspectors and Sub-Inspectors. " },
  { icon: <FaShieldAlt/>, mainText: "SSC GD ", subText: "General Duty Constable", modalContent: "The SSC GD exam is conducted to recruit General Duty Constables for various government departments. It includes a physical test, written exam, and medical examination. " },
  { icon: <FaFileAlt />, mainText: "SSC MTS", subText: "Multi-Tasking Staff", modalContent: "The SSC MTS exam recruits candidates for various non-technical posts in central government departments. It includes a computer-based test followed by a descriptive paper. " },
  { icon: <FaKeyboard />, mainText: "SSC Stenographer ", subText: "", modalContent: "The SSC Stenographer exam recruits candidates for Stenographer Grade C and D posts in various government ministries and departments. The selection processincludes a computer-based test and a skill test in stenography. " },
  { icon: <FaTrain />, mainText: "RRB ALP", subText: "Assistant Loco Pilot", modalContent: "The RRB ALP exam is conducted by the Railway Recruitment Board to recruit Assistant Loco Pilots. This exam includes a computer-based test and a skill test. " },
];

const items2 = [
  { icon: <FaTrain />, mainText: "RRB NTPC", subText: "Non-Technical Popular Categories", modalContent: "The RRB NTPC exam recruits for various non-technical posts in Indian Railways. Positions include Station Master, Goods Guard, and Commercial Apprentice. " },
  { icon: <FaTools />, mainText: "RRB JE", subText: "Junior Engineer", modalContent: "The RRB JE exam is conducted to recruit Junior Engineers in Indian Railways. It includes posts like Junior Engineer, Junior Engineer (IT), and Depot Material Superintendent. " },
  { icon: <FaWrench />, mainText: "RRB Grade D ", subText: "", modalContent: "The RRB Grade D exam recruits eligible candidates for posts such as Track Maintainer Grade-IV, Helper/Assistant, and Pointsman in various departments of Indian Railways. " },
  { icon: <FaRegFlag />, mainText: "UPSC CAPF ", subText: "Central Armed Police Forces Assistant Commandant", modalContent: "The UPSC CAPF exam recruits Assistant Commandants in various police organizations in India. The selection process includes a written test, physical standards test, and interview. " },
  { icon: <FaPiggyBank />, mainText: "SBI PO", subText: "Probationary Officer", modalContent: "The SBI PO exam recruits Probationary Officers for the State Bank of India. The exam includes preliminary, main examinations, and an interview. " },
  { icon: <FaBriefcase />, mainText: "SBI SO", subText: "Specialist Officer", modalContent: "The SBI SO exam recruits candidates for specialized roles in the State Bank of India. It includes a written exam and an interview. " },
  { icon: <FaCashRegister />, mainText: "SBI Clerk", subText: "Customer Support", modalContent: "The SBI Clerk exam recruits Junior Associates for customer support and sales in SBI branches. The exam includes preliminary and main tests." },
  { icon: <FaFileInvoiceDollar />, mainText: "IBPS PO ", subText: " Probationary Officers", modalContent: "The IBPS PO exam recruits Probationary Officers for various participating banks. Theselection process includes preliminary, main examinations, and an interview." },
];

const items3 = [
  { icon: <FaBrain />, mainText: " IBPS SO", subText: "Specialist Officer", modalContent: "The IBPS SO exam recruits candidates for specialist roles such as IT Officer, Law Officer, and HR/Personnel Officer. The exam includes a written test and an interview.  " },
  { icon: <FaCashRegister />, mainText: "IBPS Clerk", subText: "", modalContent: "The IBPS Clerk exam recruits candidates for clerical posts in participating banks. The exam process includes preliminary and main examinations. " },
  { icon: <FaCity />, mainText: "IBPS RRB  ", subText: "Regional Rural Bank Exam", modalContent: "The IBPS RRB exam recruits candidates for various positions in Regional Rural Banks. Positions include Officer Scale I, II, III, and Office Assistant." },
  { icon: <FaMoneyBillWaveAlt/>, mainText: "RBI Grade B ", subText: "Officer Scale", modalContent: "The RBI Grade B exam recruits Grade B officers for the Reserve Bank of India. The selection process includes preliminary, main examinations, and an interview " },
  { icon: <FaMoneyBillWave />, mainText: "RBI Assistant Exam", subText: "", modalContent: "The RBI Assistant exam recruits Assistants for various RBI branches across India. The exam includes preliminary, main examinations, and a language proficiency test.  " },
  { icon: <FaUserFriends/>, mainText: " NIACL Assistant ", subText: "", modalContent: "The NIACL Assistant exam recruits Assistants for New India Assurance Company Limited. The selection process includes preliminary, main examinations, and a regional language test.  " },
  { icon: <FaFileInvoice  />, mainText: "NIACL AO ", subText: "", modalContent: "The NIACL AO exam recruits Administrative Officers for New India Assurance Company Limited. The exam includes a preliminary test, main test, and interview. ." },
  { icon: <FaFileContract />, mainText: "NICL Exam  ", subText: "", modalContent: "The NICL exam recruits candidates for various posts in the National Insurance Company Limited. The exam includes preliminary and main tests, followed by an interview." },
];

const items4 = [
  { icon: <FaIdCard />, mainText: "LIC AAO", subText: "Assistant Administrative Officer", modalContent: "The LIC AAO exam recruits Assistant Administrative Officers for the Life Insurance Corporation of India. The exam includes a preliminary test, main test, and interview." },
  { icon: <FaGraduationCap />, mainText: "LIC ADO", subText: "Apprentice Development Officer", modalContent: "The LIC ADO exam recruits Apprentice Development Officers for LIC. The selection process includes an online test and an interview." },
  { icon: <FaHome />, mainText: "LIC HFL", subText: "Housing Finance Limited", modalContent: "The LIC HFL exam recruits candidates for various positions in LIC Housing Finance Limited. The exam includes online tests and interviews." },
  { icon: <FaUtensils />, mainText: "FCI Manager Exam ", subText: "", modalContent: "The FCI Manager exam recruits Managers for the Food Corporation of India. The selection process includes a preliminary test, main test, and interview. " },
  { icon: <FaAnchor />, mainText: "NDA", subText: "National Defence Academy Exam", modalContent: "The NDA exam recruits candidates for the National Defence Academy and Naval Academy. It includes a written test followed by an interview conducted by the Services Selection Board (SSB). " },
  { icon: <FaLandmark />, mainText: " CDS", subText: "Combined Defence Service Exam", modalContent: "The CDS exam recruits Commissioned Officers for the Indian Military Academy, Officers Training Academy, Indian Naval Academy, and Indian Air Force Academy. It includes a written test and SSB interview. " },
  { icon: <FaPlane />, mainText: "AFCAT", subText: "Air Force Common Admission Test ", modalContent: "The AFCAT is conducted twice a year by the Indian Air Force to recruit candidates fortechnical and non-technical posts. The selection process includes a written test and an interview." },
  { icon: <FaSeedling />, mainText: " NABARD", subText:"National Bank for Agriculture and Rural Development", modalContent: "The NABARD exam recruits officers for various positions in the National Bank for Agriculture and Rural Development. The selection process includes preliminary, main examinations, and an interview. " },
];

const items5 = [
  { icon: <FaBusinessTime />, mainText: "SIDBI ", subText: "", modalContent: "The SIDBI exam recruits Grade A officers for the Small Industries Development Bank of India. The exam includes a written test and an interview. " },
  { icon: <FaGraduationCap />, mainText: "CAT", subText: "Common Aptitude Test", modalContent: "The CAT is a national-level entrance exam conducted by IIMs for admission to MBA programs. It includes sections on quantitative aptitude, data interpretation, logical reasoning, and verbal ability. " },
  { icon: <FaUserSecret />, mainText: "ACIO IB", subText: "", modalContent: "The ACIO IB exam recruits Assistant Central Intelligence Officers for the Intelligence Bureau. The selection process includes a written test and an interview. " },
  { icon: <FaChartLine />, mainText: "Indian Economic Exam Service  ", subText: "", modalContent: "The Indian Economic Service exam recruits officers for formulating and implementing economic policies in India. The exam includes a written test and an interview. " },
  { icon: <FaGlobe />, mainText: "CDSE", subText: "Combined Defence Services Examination", modalContent: "The CDS exam is conducted by the UPSC for recruitment into the Indian Armed Forces. It includes a written test and an interview by the Services Selection Board(SSB). " },
  { icon: <FaGraduationCap />, mainText: " GATE", subText: "Graduate Aptitude Test in Engineering", modalContent: "The GATE exam is a national-level entrance test for postgraduate studies in engineering and PSU recruitment. It includes multiple-choice and numerical answertype questions" },
 
];

const itemsList = [items, items2, items3, items4, items5];

const MyComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [mainText, setMainText] = useState('');

  const handleOpenModal = (mainText, modalContent) => {
    setMainText(mainText);
    setModalContent(modalContent);
    setShowModal(true);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsList.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemsList.length) % itemsList.length);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Wrapper>
      <Container>
        <Heading>LIST OF MAJOR COMPETITIVE EXAMS</Heading>
        <GridContainer>
          {itemsList[currentIndex].map((item, index) => (
            <GridItem key={index} onClick={() => handleOpenModal(item.mainText, item.modalContent)}>
              <IconWrapper>{item.icon}</IconWrapper>
              <TextWrapper>
                <MainText >{item.mainText}</MainText>
                <SubText>{item.subText}</SubText>
              </TextWrapper>
            </GridItem>
          ))}
        </GridContainer>
        <NavButtons>
          <NavButton onClick={handlePrevious}>
            <FaArrowLeft />
          </NavButton>
          <NavButton onClick={handleNext}>
            <FaArrowRight />
          </NavButton>
        </NavButtons>
      </Container>

      <StyledModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        modalContent={{ mainText, modalContent }}
      />
    </Wrapper>
  );
};

const StyledModal = ({ showModal, handleCloseModal, modalContent }) => (
  <Modal show={showModal} onHide={handleCloseModal} centered>
    <StyledModalHeader closeButton>
      <Modal.Title>{modalContent.mainText}</Modal.Title>
    </StyledModalHeader>
    <StyledModalBody>
      <p>{modalContent.modalContent}</p>
    </StyledModalBody>
  </Modal>
);

export default MyComponent;
