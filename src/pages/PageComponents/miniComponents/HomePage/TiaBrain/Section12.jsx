import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../../../../assets/Brain/Level.jpg';

const useIntersectionObserver = (options) => {
  const [entry, setEntry] = useState(null);
  const [node, setNode] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setEntry(entry), options);
    const currentNode = node;

    if (currentNode) {
      observer.observe(currentNode);
    }

    return () => {
      if (currentNode) {
        observer.unobserve(currentNode);
      }
    };
  }, [node, options]);

  return [setNode, entry];
};

const Sec2 = () => {
  const [setNode1, entry1] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode2, entry2] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode3, entry3] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode4, entry4] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode5, entry5] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode6, entry6] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode7, entry7] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (entry1 && entry1.isIntersecting) {
      entry1.target.classList.add('fade-slide-in');
    }
    if (entry2 && entry2.isIntersecting) {
      entry2.target.classList.add('fade-slide-in');
    }
    if (entry3 && entry3.isIntersecting) {
      entry3.target.classList.add('fade-slide-in');
    }
    if (entry4 && entry4.isIntersecting) {
      entry4.target.classList.add('fade-slide-in');
    }
    if (entry5 && entry5.isIntersecting) {
      entry5.target.classList.add('fade-slide-in');
    }
    if (entry6 && entry6.isIntersecting) {
      entry6.target.classList.add('fade-slide-in');
    }
    if (entry7 && entry7.isIntersecting) {
      entry7.target.classList.add('fade-slide-in');
    }
  }, [entry1, entry2, entry3, entry4, entry5, entry6, entry7]);

  return (
    <Section id="manager">
      <Container>
        <Row>
          <Column>
            <Image src={img1} alt="Manager" ref={setNode7} />
          </Column>
          <Column>
            <TextSecondary>Tia Brain Levels</TextSecondary>
            <PointContainer ref={setNode1}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>CECDP (Closed Eye Concentration Development Program)</PointText>
            </PointContainer>
            <PointContainer ref={setNode2}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>OECDP (Open Eye Concentration Development program)</PointText>
            </PointContainer>
            <PointContainer ref={setNode3}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>DCDP (Deep Concentration Development Program)</PointText>
            </PointContainer>
            <PointContainer ref={setNode4}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>ASET (Advanced Skill Enhancement Training)</PointText>
            </PointContainer>
            <PointContainer ref={setNode5}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>360˚ SM (Success Multiplier)</PointText>
            </PointContainer>
            <PointContainer ref={setNode6}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>EMP (Emotional Management Program)</PointText>
            </PointContainer>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  width: 100%;
  font-family: Helvetica;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    flex-direction: row;
    margin: 0 -15px;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 1rem 15px;
  max-width: 100%;
  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

const Image = styled.img`
  max-width: 95%;
  width: 95%;
  height: 300px;
  transition: opacity 1.2s ease-in-out, transform 0.5s ease-in-out;
  opacity: 0;
  &.fade-slide-in {
    opacity: 1;
    animation: ${fadeSlideIn} 0.8s ease-out;
  }
`;

const TextSecondary = styled.h5`
  color: #f00d88;
  text-align: center;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 1.75rem;
  }
`;

const PointContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: flex-start;
  opacity: 0;
  transition: opacity 1s ease-in-out, transform 2.5s ease-in-out;

  &.fade-slide-in {
    opacity: 1;
    animation: ${fadeSlideIn} 2.8s ease-out;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
`;

const PointText = styled.p`
  font-weight: 500;
  margin-bottom: 0;
  color: #fff;
  font-size: 0.9rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default Sec2;
