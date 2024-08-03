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
  const [setNode1, entry1] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode2, entry2] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode3, entry3] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode4, entry4] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode5, entry5] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode6, entry6] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode7, entry7] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode8, entry8] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode9, entry9] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode10, entry10] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode11, entry11] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode12, entry12] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode13, entry13] = useIntersectionObserver({ threshold: 0.1 });
  const [setNode14, entry14] = useIntersectionObserver({ threshold: 0.1 });
  const [setNodeHeader, entryHeader] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    const elements = [
      entry1, entry2, entry3, entry4, entry5, entry6, entry7, entry8, entry9, entry10, entry11, entry12, entry13, entry14, entryHeader
    ];
    
    elements.forEach((entry) => {
      if (entry && entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, [entry1, entry2, entry3, entry4, entry5, entry6, entry7, entry8, entry9, entry10, entry11, entry12, entry13, entry14, entryHeader]);

  return (
    <Section id="manager">
      <Container>
        <div className="container">
          <div className="header" ref={setNodeHeader}>
            TIA-PLAY provides a natural environment for a child to cultivate their desire to learn, acquire and master skills. Learning is an exciting process of discovery, leading to concentration, motivation, self-discipline and a love of learning. Following the best practices of Montessori education, children at TIA-PLAY, give emphasis to all five senses more than traditional listening. Focus is on exploration, discovery, and creativity with the guidance and encouragement of a trained and caring staff.
          </div>
        </div>
        <Row>
          <Column>
            <Image ref={setNode1} src={img1} alt="Manager" />
          </Column>
          <Column>
            <TextSecondary ref={setNode2}>Objectives</TextSecondary>
            <PointContainer ref={setNode3}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText ref={setNode4}>Caring and safety of the young ones is our first priority.</PointText>
            </PointContainer>
            <PointContainer ref={setNode5}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText ref={setNode6}>Children are encouraged to pursue their interests, make responsible choices for themselves, and direct themselves to constructive activities</PointText>
            </PointContainer>
            <PointContainer ref={setNode9}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText ref={setNode10}>Educate and nurture children to be righteous, intelligent, and healthy individuals; physically, mentally, and spiritually</PointText>
            </PointContainer>
            <PointContainer ref={setNode11}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText ref={setNode12}>Educate and train children to be independent and strong, and develop children of good character and good habits</PointText>
            </PointContainer>
            <PointContainer ref={setNode13}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText ref={setNode14}>Make a smooth transition from preschool to primary through development of emergent literacy and school readiness</PointText>
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

const Section = styled.section`
  width: 100%;
  font-family: Helvetica, sans-serif; /* Set the default font to Helvetica */

  .container {
    font-family: Arial, sans-serif;
    padding: 20px;
    text-align: center;
  }

  .header {
    margin-bottom: 120px;
    margin-top: 20px;
    font-size: 1.2rem;
    color: #fff;
    opacity: 0;
    transition: opacity 1.2s ease-in-out, transform 0.5s ease-in-out;

    @media (max-width: 787px) {
      font-size: 0.9rem;
    }

    &.fade-in {
      opacity: 1;
      animation: ${fadeIn} 1.2s ease-in-out;
    }
  }
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
  max-width: 90%;
  width: 90%;
  height: 350px;
  opacity: 0;
  transition: opacity 1.2s ease-in-out, transform 0.5s ease-in-out;

  &.fade-in {
    opacity: 1;
    animation: ${fadeIn} 1.2s ease-in-out;
  }
`;

const TextSecondary = styled.h5`
  color: #f00d88 !important;
  text-align: center;
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity 1.2s ease-in-out, transform 0.5s ease-in-out;

  @media (min-width: 991px) {
    text-align: left;
    font-size: 1.75rem;
  }

  &.fade-in {
    opacity: 1;
    animation: ${fadeIn} 1.2s ease-in-out;
  }
`;

const Description = styled.p`
  margin-bottom: 0.7rem !important;
  font-weight: 400;
  color: #000 !important;
  text-align: center;
  font-size: 1rem;
  opacity: 0;
  transition: opacity 1.2s ease-in-out, transform 0.5s ease-in-out;

  @media (min-width: 991px) {
    text-align: left;
    font-size: 1.2rem;
  }

  &.fade-in {
    opacity: 1;
    animation: ${fadeIn} 1.2s ease-in-out;
  }
`;

const PointContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem !important;
  justify-content: center;
  opacity: 0;
  transition: opacity 1.2s ease-in-out, transform 0.5s ease-in-out;

  @media (min-width: 991px) {
    justify-content: flex-start;
  }

  &.fade-in {
    opacity: 1;
    animation: ${fadeIn} 1.2s ease-in-out;
  }
`;

const PointText = styled.p`
  font-weight: 500;
  margin-bottom: 0 !important;
  color: #fff !important;
  font-size: 0.9rem;
  margin-left: 1rem;
  opacity: 0;
  transition: opacity 1.2s ease-in-out, transform 0.5s ease-in-out;

  @media (min-width: 991px) {
    font-size: 1.2rem;
  }

  &.fade-in {
    opacity: 1;
    animation: ${fadeIn} 1.2s ease-in-out;
  }
`;