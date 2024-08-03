import React, { useState } from 'react';
import styled from 'styled-components';
import img2 from '../../../../../../assets/mainpage/aboutthecompany/comp1.jpg';

const StyledMobileAppSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  font-family: Arial, sans-serif;
`;

const StyledAppContent = styled.div`
  display: flex;
  align-items: center;
justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledAppText = styled.div`

  text-align: center;
  font-size:21px;
margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    font-size:16px;
  }
     @media (min-width: 1200px) {
     margin-left: 100px;
  }
`;

const StyledDownloadAppButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  font-size:19px;

  &:hover {
    background-color: #333;
  }

    @media (max-width: 768px) {
    font-size:15px;
      padding: 8px 12px;
  }

`;

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100%;
`;

const StyledModalContent = styled.div`
  background: transparent;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  max-width: 90%;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: black;
  border: 2px solid #333;
  border-radius: 5px;
  font-size: 1rem;
  padding: 5px 10px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  color: aliceblue;

  &:hover {
    background: #333;
    color: white;
  }
`;

const StyledContainer7 = styled.div`
  position: relative;
  color: white;
  border-radius: 10px;
  background-color: #1d1e22;
  width: 100%;
  max-width: 700px;
  padding: 20px;
  margin-top: 30px;
`;

const StyledInputField = styled.input`
  width: 100%;
  height: 68px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledInputContainer = styled.div`
  margin-top: 1rem;
`;

const StyledDivider1 = styled.hr`
  border: 1px solid #ddd;
  margin: 20px 0;
`;

const StyledMessageBubble = styled.div`
  background-color: #b24185c2;
  border-radius: 20px;
  padding: 10px 15px;
  margin: 10px 0;
  max-width: 80%;
  color: white;
`;

const StyledMessageText = styled.p`
  margin: 5px 0;
`;

const StyledAppImage = styled.img`
  max-width: 57%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const MobileAppSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledMobileAppSection>
      <StyledAppContent>
        <StyledAppImage src={img2} alt="App" />
        <StyledAppText>
          <h1>Stay connected</h1>
          <p>"Get Assistance from 10AM - 6PM"</p>
          <StyledDownloadAppButton onClick={handleOpenModal}>Chat BOT</StyledDownloadAppButton>
        </StyledAppText>
      </StyledAppContent>

      {isModalOpen && (
        <StyledModalOverlay>
          <StyledModalContent>
            <StyledCloseButton onClick={handleCloseModal}>close</StyledCloseButton>
            <StyledContainer7>
              <div className="header">
                <StyledMessageBubble>
                  <StyledMessageText>
                    Hello! This is a WhatsApp-like message.
                    <br />
                    <span style={{ fontSize: '0.8em', color: '#888' }}>10:30 AM</span>
                  </StyledMessageText>
                </StyledMessageBubble>

                <StyledMessageBubble>
                  <StyledMessageText>
                    Western Light was laid down as the steel-hulled, single-screw commercial cargo ship SS Western Light by the Northwest Steel Company in Portland, Oregon, under a United States Shipping Board contract.
                    <br />
                    <span style={{ fontSize: '0.8em', color: '#888' }}>11:45 AM</span>
                  </StyledMessageText>
                </StyledMessageBubble>

                <StyledMessageBubble>
                  <StyledMessageText>
                    After her completion in 1918, the Board transferred to U.S.
                    <br />
                    <span style={{ fontSize: '0.8em', color: '#888' }}>12:00 PM</span>
                  </StyledMessageText>
                </StyledMessageBubble>

                <StyledDivider1 />

                <StyledInputField type="text" placeholder="Enter your text here" />
              </div>
            </StyledContainer7>
          </StyledModalContent>
        </StyledModalOverlay>
      )}
    </StyledMobileAppSection>
  );
};

export default MobileAppSection;
