// src/Portfolio.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import image from '../../../../../assets/mainpage/Tiaedgem.jpeg';
import image1 from '../../../../../assets/mainpage/Tiaedgem.jpeg';

const fadeInFromUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInFromDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Section = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  opacity: 0;
  animation: ${({ animate }) => (animate ? fadeInFromRight : 'none')} 2s forwards;

  &:nth-child(2) {
    animation: ${({ animate }) => (animate ? fadeInFromLeft : 'none')} 2s forwards;
  }
`;

const Text = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 20px 0;
  margin-top: 40px;
  opacity: 0;
  animation: ${({ animate }) => (animate ? fadeInFromDown : 'none')} 2s forwards;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Texth = styled.p`
  font-size: 5rem;
  text-align: center;
  margin: 20px 0;
  opacity: 0;
  animation: ${({ animate }) => (animate ? fadeInFromUp : 'none')} 2s forwards;

  @media (max-width: 768px) {
    font-size: 39px;
  }
`;

const Section12 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container ref={ref}>
      <Section>
        <Texth animate={inView}>
          VIP
        </Texth>
        <Image src={image1} alt="Photographer" animate={inView} />
      </Section>
      <Section>
        <Image src={image} alt="Photographer" animate={inView} />
        <Text animate={inView}>
        A VIP is a freelancing entrepreneur.  VIP SYSTEM is a world changing business concept, a solution for unemployment, involves big companies and trained entrepreneurs and VIP SYSTEM teaches the world immense happiness through business.  VIP SYSTEM encourages the youngsters to start the business with high dreams.
        </Text>
      </Section>
    </Container>
  );
};

export default Section12;