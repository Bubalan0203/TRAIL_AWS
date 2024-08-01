import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import image from '../../../../../assets/mainpage/Tiaedgem.jpeg';
import image1 from '../../../../../assets/mainpage/Tiaedgem.jpeg';

const fadeInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #000;
  padding: 20px;

  @media(min-width: 1024px) {
    flex-direction: column;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 20px;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1s ease-in-out, transform 1.5s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media(min-width: 768px) {
    padding: 0;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 5em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 39px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: row;  // Changed from column to row
  width: 100%;
  max-width: 1000px;  // Adjust max-width as needed
  margin-top: 20px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-in-out, transform 1.5s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    flex-direction: column;  // Stack images vertically on smaller screens
  }
`;

const Image = styled.img`
  width: 50%;  // Adjust width as needed
  height: auto;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;  // Remove right margin for the last image
  }

  @media (max-width: 768px) {
    width: 100%;  // Full width on smaller screens
    margin-bottom: 10px;  // Margin between images
  }
`;


const Section13 = () => {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <ContentSection className={isVisible ? 'visible' : ''}>
        <Title>ELLEN DOWNING</Title>
        <Paragraph>
          I've been painting for eight years. While being an artist is a difficult tug-of-war between my inner dreamer and critic, I've grown to love this process a lot. It hasn't just taught me much about the world, but also about myself.
        </Paragraph>
      </ContentSection>
      <ImageSection className={isVisible ? 'visible' : ''}>
        <Image src={image} alt="First" />
        <Image src={image1} alt="Second" />
      </ImageSection>
    </Container>
  );
};

export default Section13;
