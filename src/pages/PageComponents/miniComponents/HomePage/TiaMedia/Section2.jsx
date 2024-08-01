import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../../../../assets/Media/Infracture.jpg';

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

  useEffect(() => {
    if (entry1 && entry1.isIntersecting) {
      entry1.target.classList.add('fade-in');
    }
    if (entry2 && entry2.isIntersecting) {
      entry2.target.classList.add('fade-in');
    }
    if (entry3 && entry3.isIntersecting) {
      entry3.target.classList.add('fade-in');
    }
    if (entry4 && entry4.isIntersecting) {
      entry4.target.classList.add('fade-in');
    }
    if (entry5 && entry5.isIntersecting) {
      entry5.target.classList.add('fade-in');
    }
    if (entry6 && entry6.isIntersecting) {
      entry6.target.classList.add('fade-in');
    }
    if (entry7 && entry7.isIntersecting) {
      entry7.target.classList.add('fade-in');
    }
    if (entry8 && entry8.isIntersecting) {
      entry8.target.classList.add('fade-in');
    }
    if (entry9 && entry9.isIntersecting) {
      entry9.target.classList.add('fade-in');
    }
    if (entry10 && entry10.isIntersecting) {
      entry10.target.classList.add('fade-in');
    }
    if (entry11 && entry11.isIntersecting) {
      entry11.target.classList.add('fade-in');
    }
  }, [entry1, entry2, entry3, entry4, entry5, entry6, entry7, entry8, entry9, entry10, entry11]);

  return (
    <Section id="manager">
      <Container>
        <Row>
          <Column>
            <Image ref={setNode1} src={img1} alt="Manager" />
          </Column>
          <Column>
            <TextSecondary ref={setNode2}>INFRASTRUCURE</TextSecondary>
            <PointContainer ref={setNode4}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText ref={setNode5}>The MEDIAS is well-equipped with most up-to-date equipment. We train students to work with advanced
              equipment Sony Alpha 7S 2 4k Resolution.</PointText>
            </PointContainer>
            <PointContainer ref={setNode6}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText ref={setNode7}>The film studio is fully covered with green mat studio (400 sq ft) and LED lights. A full green room allows you to
              go around the world while sitting in the studio.</PointText>
            </PointContainer>
            <PointContainer ref={setNode8}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText ref={setNode9}>Opportunity to work on “real world” projects in order to develop recognized film credits, through partnerships
              with professional productions.</PointText>
            </PointContainer>
            <PointContainer ref={setNode10}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#f00d88" />
              <PointText ref={setNode11}> Hands-on instruction and training is provided by our highly professional and trained staffs,Windows editing suit</PointText>
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
  color: #000 !important;
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
