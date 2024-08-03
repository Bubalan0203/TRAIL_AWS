import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import rightImage1 from '../../../../../assets/mainpage/Tiaentm1.jpeg'; // Replace with the correct path
import rightImage2 from '../../../../../assets/mainpage/Tiaentm2.jpeg'; // Replace with the correct path
import rightImage3 from '../../../../../assets/mainpage/Tiaentm3.jpeg'; // Replace with the correct path

const Container = styled.div`
  display: flex;
  background-color: black;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    width: auto;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 0px;
    height: auto;
  }
`;

const LeftColumn = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  margin-bottom: 2px;
  margin-top: -70px;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px; /* Adjust the gap between grid items */
  width: 100%;
  max-width: 850px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 0px;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 1s ease, transform 2s ease;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    margin-top: 85px;
    margin-bottom: 0px;
    font-size: 39px;
  }
`;

const Stitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 40px;
  margin-top: 0px;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 1s ease, transform 2s ease;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    margin-top: 5px;
    margin-bottom: 0px;
    font-size: 25px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 2s ease;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 20px;
  }
`;


const Button = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 8px 10px; /* Increased padding */
  font-size: 15px; /* Increased font size for better visibility */
  cursor: pointer;
  border-radius: 20px; /* Adjusted border radius */
  width: 120px;
  height: 38px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 2.5s ease;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    background-color: #f14bb4;
  }

  @media (max-width: 768px) {
    margin-bottom: 5px;
    font-size: 11px;
    width: 90px;
    height: 30px;
    padding: 5px 8px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 330px;
  border-radius: 10px;
  height: 240px;
  transition: transform 0.3s ease; /* Add transition for smooth zoom effect */

  &:hover {
    transform: scale(1.1); /* Zoom in on hover */
  }

  @media (max-width: 1024px) {
    max-width: 260px;
    height: 160px;
  }

  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;

const BlueBackground = styled.div`
  background-color: white; /* Light blue background color */
  flex: 1; /* Take up remaining space */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transform: skewX(0deg);

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

const Section3 = () => {
  const titleRef = useRef(null);
  const stitleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current.classList.add('fade-in');
          stitleRef.current.classList.add('fade-in');
          subtitleRef.current.classList.add('fade-in');
          buttonRef.current.classList.add('fade-in');
          imageRefs.current.forEach(img => img.classList.add('fade-in'));
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (stitleRef.current) {
      observer.observe(stitleRef.current);
    }
    if (subtitleRef.current) {
      observer.observe(subtitleRef.current);
    }
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }
    imageRefs.current.forEach(img => {
      observer.observe(img);
    });

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (stitleRef.current) {
        observer.unobserve(stitleRef.current);
      }
      if (subtitleRef.current) {
        observer.unobserve(subtitleRef.current);
      }
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
      imageRefs.current.forEach(img => {
        observer.unobserve(img);
      });
    };
  }, []);

  return (
    <Container>
      <BlueBackground>
        <LeftColumn>
          <Title ref={titleRef}>TIA</Title>
          <Stitle ref={stitleRef}>ENTREPRENEURSHIP</Stitle>
          <Subtitle ref={subtitleRef}>
          TIA ENTREPRENEURSHIP empowers individuals to embrace risk, innovate, and lead teams towards business success. It emphasizes adaptability to seize new market opportunities and avoid attachment to current products or services.
          </Subtitle>
          <a href="/tiaent">
            <Button ref={buttonRef}>Know More</Button>
          </a>
        </LeftColumn>
      </BlueBackground>
      <RightColumn>
        <ImageContainer>
          <Image ref={el => (imageRefs.current[0] = el)} src={rightImage1} alt="Product 1" />
        </ImageContainer>
        <div>
          <ImageContainer>
            <Image ref={el => (imageRefs.current[1] = el)} src={rightImage2} alt="Product 2" />
          </ImageContainer>
          <ImageContainer style={{ marginTop: '20px' }}>
            <Image ref={el => (imageRefs.current[2] = el)} src={rightImage3} alt="Product 3" />
          </ImageContainer>
        </div>
      </RightColumn>
    </Container>
  );
};

export default Section3;
