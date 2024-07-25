import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import image1 from '../../../../../assets/mainpage/Tiatesthubm.jpeg';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  height: 100vh;
  background-color: black; 

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  color: white;

  @media (min-width: 768px) {
    font-size: 5rem;
    max-width: 700px;
    margin-left: 80px;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 39px;
  }
  
  h1 {
    font-size: 5rem;
    max-width: 700px;

    @media (max-width: 772px) {
      font-size: 39px;
    }
  }

  p {
    font-size: 18px;
    margin-top: 20px; /* Added margin bottom for paragraph */
  
    @media (min-width: 770px) {
      margin-bottom: -40px;
    }
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const Image = styled.img`
  width: 90%;
  max-width: 550px;
  height: auto;
  margin-top: 20px;
  margin-right: 100px;
  border-radius: 10px;
  transition: opacity 4s;

  @media (min-width: 768px) {
    width: 43%;
    height: 400px;
    margin-top: 0;
    margin-right: 100px;
  }

  @media (max-width: 768px) {
    margin-left: 100px;
  }

  &.fade-in {
    opacity: 1;
  }

  &.fade-out {
    opacity: 0;
  }
`;

const KnowMoreButton = styled.button`
  
  background-color: #f14bb4;
  color: white;
  border: none;
  font-size: 15px; /* Increased font size for better visibility */
  cursor: pointer;
  border-radius: 20px; /* Adjusted border radius */
  width: 120px;
  height: 38px;

  @media (min-width: 768px) {
    margin-top: -120px;
    margin-left: 0px; /* Adjusted margin for spacing */
    margin-right: 0px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
    width: 90px;
    height: 30px;
    padding: 1px 8px;
  }

  &:hover {
   background-color: #333;
  }
`;

const Section5 = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
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
      <Row>
        <Content>
          <h1>TIA Test Hub</h1>
          <p>
            TIA Test Hub provides comprehensive exam practice with past papers for JEE, NEET, and more, while TIA Live Tutor offers personalized online tuition to improve student focus and academic performance.
          </p>
          <a href="/tiatest">
          <KnowMoreButton>Know More</KnowMoreButton>
          </a>
        </Content>
        <Image
          ref={imageRef}
          src={image1}
          alt="Product"
          className={isVisible ? 'fade-in' : 'fade-out'}
        />
      </Row>
    </Container>
  );
};

export default Section5;
