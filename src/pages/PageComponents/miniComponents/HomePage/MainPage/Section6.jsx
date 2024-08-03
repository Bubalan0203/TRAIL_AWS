import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import imageSrc from '../../../../../assets/mainpage/Tiamocm2.jpg';

// Keyframe animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
    justify-content: center;
    align-items: flex-start;
  }
`;

const LeftContent = styled.div`
  max-width: 620px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  opacity: 0; /* Initially hidden */
  animation: ${fadeIn} 0.8s ease-in-out forwards; /* Apply fade-in animation */

  @media (min-width: 1024px) {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 0px;
    font-size: 39px;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 30px;
    margin-top: -30px;
    font-size: 21px;
  }

  h1 {
    font-size: 5rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      margin-bottom: 30px;
      margin-top: -30px;
      font-size: 39px;
    }
  }
`;

const StyledUl = styled.ul`
  font-size: 18px;
  list-style-type: none;
  padding-left: 0;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

const StyledLii = styled.li`
  margin-bottom: 15px;
  color: #666;
`;

const RightContent = styled.div`
  max-width: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0; /* Initially hidden */
  animation: ${fadeIn} 0.8s ease-in-out forwards; /* Apply fade-in animation */

  @media (min-width: 1024px) {
    margin-left: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  animation: ${zoomIn} 3s ease-in-out forwards; /* Apply zoom-in animation */
`;

const Button = styled.button`
  padding: 8px 10px;
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
    margin-top: 30px;
    padding: 8px 10px;
    font-size: 15px;
    width: 120px;
    height: 38px;
    margin-left: -40px;
  }

  @media (max-width: 1024px) {
    font-size: 11px;
    width: 90px;
    height: 30px;
    padding: 5px 8px;
  }
`;

const Section62 = () => {
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          } else {
            entry.target.style.animationPlayState = 'paused';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftContentRef.current) {
      observer.observe(leftContentRef.current);
    }
    if (rightContentRef.current) {
      observer.observe(rightContentRef.current);
    }

    return () => {
      if (leftContentRef.current) {
        observer.unobserve(leftContentRef.current);
      }
      if (rightContentRef.current) {
        observer.unobserve(rightContentRef.current);
      }
    };
  }, []);

  return (
    <PageContainer>
      <ContentContainer>
        <LeftContent ref={leftContentRef}>
          <h1>TIA MOC</h1>
          <StyledUl>
            <StyledLii>
           	TIA MOC promotes learning a new language for cognitive enhancement and personal growth, emphasizing resilience and achievement through overcoming challenges. It highlights the practical benefits of language skills for easier travel, enabling direct communication with locals for navigation and cultural immersion. Learning a new language not only expands cultural horizons but also builds confidence in stepping outside comfort zones, enhancing overall adaptability and communication abilities.
            </StyledLii>
          </StyledUl>
          <a href="/tiamock">
            <Button>Know More</Button>
          </a>
        </LeftContent>
        <RightContent ref={rightContentRef}>
          <Image src={imageSrc} alt="Online Education" />
        </RightContent>
      </ContentContainer>
    </PageContainer>
  );
};

export default Section62;
