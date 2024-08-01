import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import image from '../../../../../assets/mainpage/Tiaedgem3.jpg';
import image1 from '../../../../../assets/mainpage/Tiaedgem3.jpg';

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInTop = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #000;
  padding: 20px;

  @media(min-width: 1024px) {
    flex-direction: row;
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 570px;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s ease-in-out, transform 1.5s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  @media(min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 10px;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 20px;
  padding-left: 20px;
  text-align: center;
  max-width: 700px;
  width: 100%;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-in-out, transform 1.5s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  @media(min-width: 768px) {
    padding: 0;
    margin-left: 20px;
  }

  @media(min-width: 768px) and (max-width: 1023px) {
    margin-top: 40px;
    text-align: center; 
  }
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 39px;
    text-align: center; 
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center; 
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const ListItem = styled.li`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

 & > svg {
    margin-right: 10px;
    font-size: 10px; /* Adjust this value as needed */
  }
`;

const Section11 = () => {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <ImageSection className={isVisible ? 'visible' : ''}>
        <Image src={image} alt="First" />
        <Image src={image1} alt="Second" />
      </ImageSection>
      <ContentSection className={isVisible ? 'visible' : ''}>
        <Title>FRANCHISE</Title>
        <Paragraph>
          The franchise then runs that location of the purchased business. He or she is responsible for certain decisions, but many other decisions (such as the look, name, and products) are already determined by the
          franchisor and must be kept the same by the franchise.
        </Paragraph>
        <List>
          <ListItem>
            <FontAwesomeIcon icon={faCircle} /> The franchisee runs that location of the purchased business.
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faCircle} /> Responsible for certain decisions, but many are predetermined by the franchisor.
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faCircle} /> Must keep the look, name, and products the same as set by the franchisor.
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faCircle} /> Pays the franchisor either a flat fee or a percentage of revenues or profits.
          </ListItem>
        </List>
      </ContentSection>
    </Container>
  );
};

export default Section11;