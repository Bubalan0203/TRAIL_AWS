import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../../../../assets/Play/Objective.jpg';

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
      <div className="container">
        <div className="header">
        TIA-PLAY provides a natural environment for a child to cultivate their desire to learn, acquire and master skills. Learning is an exciting process of discovery, leading to concentration, motivation, self-discipline and a love of learning. Following the best practices of Montessori education, children at TIA-PLAY, give emphasize to all five     senses than the traditional listening. Focus is on exploration, discovery and creativity with the guidance and encouragement of a trained and caring staff.
        </div>
        </div>
        <Row>
          <Column>
          <Image ref={setNode} src={img1} alt="Manager"/>
          </Column>
          <Column>
            <TextSecondary>Objectives</TextSecondary>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>Caring and safety of the young ones is our first priority.</PointText>
            </PointContainer>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>To make the children’s enjoy freedom with limits</PointText>
            </PointContainer>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>Children’s are encouraged to pursue their interests, make responsible choices for themselves and direct
              themselves to constructive activities</PointText>
            </PointContainer>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText> Educate and nurture children to be righteous, intelligent and healthy individuals; physically, mentally and
              spiritually</PointText>
            </PointContainer>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>Educate and train children to be independent and strong,Develop children of good character and good habits</PointText>
            </PointContainer>
            <PointContainer>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText>  Make a smooth transition from preschool to primary through development of emergent literacy and school
              readiness</PointText>
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
  font-family: Helvetica, sans-serif; /* Set the default font to Helvetica */

  .container {
    font-family: Arial, sans-serif;
    padding: 20px;
    text-align: center;
    
  }

  .header {
    margin-bottom:120px;
    margin-top:20px;
    font-size: 1.2rem;
     color: #fff;
    @media(max-width:787px){
     font-size:0.9rem;
    }
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
  padding-top:50px;
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
  @media (min-width:991px) {
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
  @media (min-width:991px) {
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
  @media (min-width:991px) {
    text-align: left;
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  margin-bottom: 0.7rem !important;
  font-weight: 400;
  color: #fff !important;
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
   @media (max-width:990px) {
    justify-content: flex-start;
  }
`;

const PointText = styled.p`
  margin-bottom: 0 !important;
  color: #fff !important;
  font-size:0.9rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
