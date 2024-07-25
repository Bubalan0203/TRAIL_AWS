import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../../../../assets/Brain/Level.jpg';

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

const Sec2 = () => {
  const [setNode, entry] = useIntersectionObserver({ threshold: 0.9 });

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      entry.target.classList.add('hover-effect');
    } else if (entry) {
     
    }
  }, [entry]);

  return (
    <Section id="manager">
      <Container>
        <Row>
          <Column>
            <Image ref={setNode} src={img1} alt="Manager" />
          </Column>
          <Column>
            <TextSecondary>Tia Brain Levels</TextSecondary>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>CECDP (Closed Eye Concentration Development Program)</PointText>
            </PointContainer>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>OECDP (Open Eye Concentration Development program)</PointText>
            </PointContainer>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>DCDP (Deep Concentration Development Program)</PointText>
            </PointContainer>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>ASET (Advanced Skill Enhancement Training)</PointText>
            </PointContainer>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>360˚ SM (Success Multiplier)</PointText>
            </PointContainer>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>EMP (Emotional Management Program)</PointText>
            </PointContainer>
          </Column>
        </Row>
      </Container>
    </Section>
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

const hoverEffect = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const Section = styled.section`
  width: 100%;
  font-family: Helvetica; /* Set the default font to Helvetica */
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
  @media (min-width:768px) {
    flex-direction: row;
    margin: 0 -15px;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 1rem 15px;
  max-width: 100%;
  @media (min-width:768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

const Image = styled.img`
  max-width:95%;
  width:95%;
  height: 300px;
  opacity: 0;
  transition: opacity 1.2s ease-in-out, transform 0.5s ease-in-out;

  &.fade-in {
    opacity: 1;
  }

  &.hover-effect {
    animation: ${hoverEffect} 5s ;
  }
`;

const TextSecondary = styled.h5`
  color: #f00d88 !important;
  text-align: center;
  font-size: 1.5rem;
  @media (min-width:768px) {
    text-align: left;
    font-size: 1.75rem;
  }
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #f00d88 !important;
  margin-bottom: 1rem !important;
  text-align: center;
  @media (min-width:768px) {
    text-align: left;
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  margin-bottom: 0.7rem !important;
  font-weight: 400;
  color: #fff!important;
  text-align: center;
  font-size: 1rem;
  @media (min-width:768px) {
    text-align: left;
    font-size: 1.2rem;
  }
`;

const PointContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem !important;
  justify-content: flex-start;
  @media (min-width:768px) {
    justify-content: flex-start;
  }
`;

const PointText = styled.p`
  font-weight: 500;
  margin-bottom: 0 !important;
  color: #fff !important;
  font-size: 0.9rem;
  margin-left: 1rem;
  @media (min-width:768px) {
    font-size: 1.2rem;
  }
`;

export default Sec2;
