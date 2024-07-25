import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import imageSrc from '../../../../../assets/mainpage/Tiamocm2.jpg';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Set minimum height to occupy full viewport */
  background-color: black;

  @media (max-width: 1024px) {
    height: auto;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;  
  margin-top: 80px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const LeftContent = styled.div`
  max-width: 620px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    text-align: left;
    margin-bottom: 10px;
    margin-top: 0px;
    font-size: 39px;
    text-align: center;
  }
  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 30px;
    margin-top: -30px;
    font-size: 21px;
    text-align:center;
  }

  h1 {
    font-size: 5rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      align-items: center;
      margin-bottom: 30px;
      margin-top: -30px;
      font-size: 39px;
      text-align:center;

    }
  }
`;

const StyledUl = styled.ul`
  font-size: 18px;
  list-style-type: none; /* Remove bullet points */
  padding-left: 0;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

const StyledLii = styled.li`
  margin-bottom: 15px;
`;

const RightContent = styled.div`
  max-width: 650px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    margin-left: 20px;
  }
`;

const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  
  &.animate {
    opacity: 1;
    animation: ${moveUpDown} 4s infinite; /* Adjusted duration to 3s */
  }
`;

const Button = styled.button`
  padding: 8px 10px; /* Reduced padding for better button size */
  background-color: #f14bb4;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  color: white;
  margin-top: 20px;
 

  &:hover {
    background-color: #333;
  }

  @media (min-width: 1024px) {
    margin-top: 30px; /* Adjusted margin for larger screens */
    padding: 8px 10px; /* Increased padding */
    font-size: 15px; /* Increased font size for better visibility */
    cursor: pointer;
    border-radius: 20px; /* Adjusted border radius */
    width: 120px;   
 height: 38px;
  margin-left:-40px;
  }

  @media (max-width: 1024px) {
    font-size: 11px;
    width: 90px;
    height: 30px;
    padding: 5px 8px;
  }
`;

const Section62 = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const image = imageRef.current;
      if (image) {
        const rect = image.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          image.classList.add('animate');
        } else {
          image.classList.remove('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <PageContainer>
      <ContentContainer>
        <LeftContent>
          <h1>TIA MOCK</h1>
          <StyledUl>
            <StyledLii>
            TIA MOCK promotes learning a new language for cognitive enhancement and personal growth, emphasizing resilience and achievement through overcoming challenges. It highlights the practical benefits of language skills for easier travel, enabling direct communication with locals for navigation and cultural immersion. Learning a new language not only expands cultural horizons but also builds confidence in stepping outside comfort zones, enhancing overall adaptability and communication abilities.
            </StyledLii>
          </StyledUl>
          <a href="/tiamock">
          <Button>Know More</Button>
          </a>
        </LeftContent>
        <RightContent>
          <Image ref={imageRef} src={imageSrc} alt="Online Education" />
        </RightContent>
      </ContentContainer>
    </PageContainer>
  );
};

export default Section62;
