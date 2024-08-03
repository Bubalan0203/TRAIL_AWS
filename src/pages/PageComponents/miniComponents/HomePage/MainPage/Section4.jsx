import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import image from '../../../../../assets/mainpage/TiaLTm.png';

// Keyframes for the fade-in animation from bottom
const fadeInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  height: 120vh;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  opacity: 0;  // Initially hidden
  transform: translateY(40px);  // Start from below
  transition: opacity 0.5s ease-in-out, transform 1.5s ease-in-out;

  @media (min-width: 768px) {
    font-size: 5rem;
    max-width: 600px;
    margin-left: 180px;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 39px;
  }

   @media (min-width: 1600px) {
    margin-left: 220px;
  }
    @media (min-width: 1780px) {
    margin-left: 320px;
  }
    @media (min-width: 1880px) {
    margin-left: 390px;
  }


  h1 {
    font-size: 5rem;
    max-width: 700px;

    @media (max-width: 768px) {
      font-size: 39px;
    }
  }

  p {
    font-size: 18px;
    margin-top: 20px;

    @media (min-width: 770px) {
      margin-bottom: -40px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeInFromBottom} 1.5s ease-in-out forwards;
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
  width: 80%;
  max-width: 500px;
  margin-top: 20px;
  border-radius: 10px;
  transition: opacity 1.5s ease-in-out;

  @media (min-width: 768px) {
    width: 39%;
    height: 420px;
    margin-top: 0;
    margin-right: 160px;
    max-width: 730px;
  }

  @media (max-width: 768px) {
    margin-left: 15px;
  }

  &.fade-in {
    opacity: 1;
    animation: ${moveUpDown} 5s infinite;
  }

  &.fade-out {
    opacity: 0;
  }
`;

const KnowMoreButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  font-size: 15px;
  cursor: pointer;
  border-radius: 20px;
  width: 120px;
  height: 38px;

  @media (min-width: 768px) {
    margin-top: -120px;
    margin-left: 0;
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 11px;
    width: 90px;
    height: 30px;
    padding: 1px 8px;
  }

  &:hover {
    background-color: #f14bb4;
  }
`;

const Section4 = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <Container>
      <Row>
        <Content
          ref={contentRef}
          className={isVisible ? 'fade-in' : ''}
        >
          <h1>TIA LIVE TUTOR</h1>
          <p>
           TIA LIVE TUTOR addresses the challenges students face in traditional classrooms by offering personalized online tutoring across India. Their platform ensures individual attention, resolving study difficulties promptly to enhance academic performance and student focus.
          </p>
          <a href="/tialive">
            <KnowMoreButton>Know More</KnowMoreButton>
          </a>
        </Content>
        <Image
          ref={imageRef}
          src={image}
          alt="Product"
          className={isVisible ? 'fade-in' : 'fade-out'}
        />
      </Row>
    </Container>
  );
};

export default Section4;
