import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import image1 from '../../../../../assets/mainpage/Tiatesthubm.jpeg';

// Keyframe animation for fading in from the left
const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Keyframe animation for fading in from the right
const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Container styled component
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  height: 100vh;
  background-color: black;

  @media (max-width: 768px) {
    height: auto;
  }
`;

// Row styled component
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

// Content styled component
const Content = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  color: white;

  @media (min-width: 768px) {
    font-size: 5rem;
    max-width: 700px;
    margin-left: 80px;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 39px;
  }
    @media (min-width: 1600px) {
   margin-left:200px;
  }
    @media (min-width: 1850px) {
    margin-left: 260px;
  }

  h1 {
    font-size: 5rem;
    max-width: 700px;
    opacity: 0;
    transition: opacity 6s;

    @media (max-width: 772px) {
      font-size: 39px;
    }

    &.fade-in-left {
      opacity: 1;
      animation: ${fadeInLeft} 1.2s ease-in-out;
    }
  }

  p {
    font-size: 18px;
    margin-top: 20px;
    color: #666;
    opacity: 0;
    transition: opacity 6s;

    @media (min-width: 770px) {
      margin-bottom: -40px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }

    &.fade-in-right {
      opacity: 1;
      animation: ${fadeInLeft} 1.2s ease-in-out;
    }
  }
`;

// Image styled component
const Image = styled.img`
  width: 90%;
  max-width: 550px;
  height: auto;
  margin-top: 20px;
  margin-right: 100px;
  border-radius: 10px;
  transition: opacity 2.5s;

  @media (min-width: 768px) {
    width: 43%;
    height: 400px;
    margin-top: 0;
    margin-right: 100px;
  }

  @media (max-width: 768px) {
    margin-left: 100px;
  }
     @media (min-width: 1700px) {
    margin-right: 200px;
  }
     @media (min-width: 1850px) {
    margin-right: 260px;
  }

  &.fade-in {
    opacity: 1;
  }

  &.fade-out {
    opacity: 0;
  }
`;

// KnowMoreButton styled component
const KnowMoreButton = styled.button`
  background-color: #f14bb4;
  color: white;
  border: none;
  font-size: 15px;
  cursor: pointer;
  border-radius: 20px;
  width: 120px;
  height: 38px;
  opacity: 0;
  transition: opacity 6s;

  @media (min-width: 768px) {
    margin-top: -120px;
    margin-left: 0px;
    margin-right: 0px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
    width: 90px;
    height: 30px;
    padding: 1px 8px;
  }

  &:hover {
    background-color: #333;
  }

  &.fade-in-right {
    opacity: 1;
    animation: ${fadeInLeft} 1.2s ease-in-out;
  }
`;

// Section5 component
const Section5 = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }

      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <Row>
        <Content>
          <h1 ref={titleRef} className={isVisible ? 'fade-in-left' : ''}>TIA TEST HUB</h1>
          <p className={isVisible ? 'fade-in-right' : ''}>
          TIA TEST HUB provides comprehensive exam practice with past papers for JEE, NEET, and more, while TIA Live Tutor offers personalized online tuition to improve student focus and academic performance.
          </p>
          <a href="/tiatest">
            <KnowMoreButton className={isVisible ? 'fade-in-right' : ''}>Know More</KnowMoreButton>
          </a>
        </Content>
        <Image
          ref={imageRef}
          src={image1}
          alt="Product"
          className={isVisible ? 'fade-in' : 'fade-out'}
        />
      </Row>
    </Container>
  );
};

export default Section5;
