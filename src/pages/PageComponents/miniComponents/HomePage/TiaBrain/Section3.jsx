import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../../../../assets/Brain/Foreign.jpeg';

const useIntersectionObserver = (options) => {
  const [entry, setEntry] = useState(null);
  const [node, setNode] = useState(null);

  const observer = new IntersectionObserver(([entry]) => setEntry(entry), options);

  useEffect(() => {
    const currentNode = node;
    const currentObserver = observer;

    if (currentNode) {
      currentObserver.observe(currentNode);
    }

    return () => {
      if (currentNode) {
        currentObserver.unobserve(currentNode);
      }
    };
  }, [node, observer]);

  return [setNode, entry];
};

const Section3 = () => {
  const [setNode, entry] = useIntersectionObserver({ threshold: 0.8 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      setIsVisible(true);
    }
  }, [entry]);

  return (
    <Container className="container-fluid"  >
      <Content className="row">
        <Title isVisible={isVisible} className="col-12">
          Indian Education System Compared To Foreign System
        </Title>
        <TextContainer className="col-12 col-md-5">
          <SubTitle isVisible={isVisible}>Why Foreign Education System is better than Indian Education System?</SubTitle>
        </TextContainer>
        <TextContainer className="col-12 col-md-7">
          <Text isVisible={isVisible}>
            Education system in India is worse than foreign countries including the US, countries of
            the UK, and Gulf countries. This is a known fact. We all know it; but why? Why is the foreign
            education system better than the Indian education system? Today, I will list a few
            differences between the Indian Education System and the Foreign Education System. Have a look.
          </Text>
        </TextContainer>
        <ImageContainer ref={setNode} className="col-12">
          <StyledImage src={img1} alt="Recorder" />
        </ImageContainer>
      </Content>
    </Container>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  background-color: #0f0f12;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 75%;
`;

const Title = styled.h1`
  font-size: 2.3rem;
  font-family: Helvetica;
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-weight: 600;
  line-height: 1.1;
  text-align: center;
  color: #f00d88;
  animation: ${({ isVisible }) => (isVisible ? slideIn : 'none')} 1.2s ease-in-out forwards;

  @media (max-width: 767px) {
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.3rem;
    margin-bottom: 4rem;
  }
`;

const TextContainer = styled.div`
  text-align: left;
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-family: Helvetica;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #f00d88;
  animation: ${({ isVisible }) => (isVisible ? slideIn : 'none')} 1.4s ease-in-out forwards;

  @media (max-width: 767px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;

const Text = styled.p`
  font-family: Helvetica;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #fff;
  text-align: left;
  animation: ${({ isVisible }) => (isVisible ? slideIn : 'none')} 1.6s ease-in-out forwards;

  @media (max-width: 767px) {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.2rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 2rem;

  &.fade-in {
    animation: ${fadeIn} 5s ease-in-out forwards;
  }

  &.hover-effect {
    animation: ${slideIn} 1.6s ease-in-out forwards;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 900px;
  height: auto;
  max-height: 550px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 1000px;
    height: 250px;
  }

  @media (min-width: 768px) {
    max-width: 1000px;
    max-height: 300px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    max-height: 550px;
  }
`;

export default Section3;
