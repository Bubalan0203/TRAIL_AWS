import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import img1 from '../../../../../assets/mainpage/tiabrainimg.jpeg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  margin-left: 100px;
  margin-right: 90px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 10px;
    height: 104vh;
    margin-top: -10px;
  }

  @media (max-width: 782px) {
    margin-top: 80px;
    margin-bottom: 40px;
    height: auto;
  }

  @media (max-width: 766px) {
    margin-left: 5px;
    margin-right: 5px;
  }
    
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 650px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: -70px;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 2rem;
  }

  @media (min-width: 1500px) {
   margin-left:50px;
  }
   @media (min-width: 1700px) {
   margin-left:100px;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 1s ease, transform 2s ease;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 39px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.6;
  word-spacing: 2px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 2s ease;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 700px;
  }
`;

const GetStartedButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 8px 10px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 20px;
  width: 120px;
  height: 38px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 2s ease;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    background-color: #f14bb4;
    animation: 0.8s infinite; /* Apply wiggle animation on hover */
  }

  @media (max-width: 768px) {
    font-size: 11px;
    width: 90px;
    height: 30px;
    padding: 5px 10px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;

  @media (min-width: 768px) {
    margin-left: 40px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 3s ease-in-out;

  &.zoom {
    animation: zoomInOut 5s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
     @media (min-width: 1450px) {
    width: 85%;
  }
    @media (min-width: 1600px) {
    width: 80%;
  }
    @media (min-width: 1700px) {
    width: 75%;
  }
    @media (min-width: 1810px) {
    width: 70%;
  }
     @media (min-width: 1900px) {
    width: 68%;
  }
    @media (min-width: 2000px) {
    width: 60%;
  }
`;

// Animation keyframes
const zoomInOut = `
  @keyframes zoomInOut {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const Section1 = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current.classList.add('fade-in');
          descriptionRef.current.classList.add('fade-in');
          buttonRef.current.classList.add('fade-in');
          imageRef.current.classList.add('zoom');
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <ContentContainer>
        <Title ref={titleRef}>TIA BRAIN</Title>
        <Description ref={descriptionRef}>
           TIA BRAIN unlocks hidden talents in children through concentration development, enhancing discipline, memory, and overall activity. It addresses various issues like squint eyes, stammering, and bedwetting, fostering academic improvement and positive behavioural changes.
        </Description>
        <a href="/tiabrain">
          <GetStartedButton ref={buttonRef}>Know More</GetStartedButton>
        </a>
      </ContentContainer>
      <ImageContainer>
        <Image ref={imageRef} src={img1} alt="TIA BRAIN" />
      </ImageContainer>
      <style>{zoomInOut}</style>
    </Container>
  );
};

export default Section1;
