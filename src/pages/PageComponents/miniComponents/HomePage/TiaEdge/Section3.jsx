import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../../../../assets/Edge//Benefit.jpeg';

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
            <TextSecondary>Benefits Of Tia Edge</TextSecondary>
            <Description>
            The major benefits of cracking competitive exams and securing positions in the Government,
            Insurance, or Banking sectors:
            </Description>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>Positions in the Government sector offer stable job security, providing employees
              with peace of mind regarding their employment.</PointText>
            </PointContainer>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>Competitive salaries, along with benefits and allowances, make these sectors
              attractive, ensuring financial stability for employees and their families.</PointText>
            </PointContainer>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>Working in the Government or Banking sectors commands respect and is
              considered prestigious, contributing to a positive societal status.</PointText>
            </PointContainer>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>With regulated working hours and structured policies, employees can maintain
              a healthy balance between their professional and personal lives.</PointText>
            </PointContainer>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export default Sec2;



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
  @media (min-width: 991px) {
    flex-direction: row;
    margin: 0 -15px;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 1rem 15px;
  max-width: 100%;
  @media (min-width: 991px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

const Image = styled.img`
  max-width:90%;
  width:90%;
  height: 350px;
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
  color:#f00d88 !important;
  text-align: center;
  font-size: 1.5rem;
  @media (min-width: 991px) {
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
  @media (min-width: 991px) {
    text-align: left;
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  margin-bottom: 0.7rem !important;
  font-weight: 400;
  color: #000 !important;
  text-align: center;
  font-size: 1rem;
  @media (min-width:991px) {
    text-align: left;
    font-size: 1.2rem;
  }
`;

const PointContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem !important;
  justify-content: center;
  @media (min-width:991px) {
    justify-content: flex-start;
  }
`;

const PointText = styled.p`
  font-weight: 500;
  margin-bottom: 0 !important;
  color: #000 !important;
  font-size:0.9rem;
  margin-left: 1rem;
  @media (min-width: 991px) {
    font-size:1.2rem;
  }
`;
