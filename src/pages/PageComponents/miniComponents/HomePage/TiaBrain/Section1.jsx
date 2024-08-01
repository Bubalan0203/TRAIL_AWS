import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import img1 from '../../../../../assets/Brain/Research.jpeg';
import img2 from '../../../../../assets/Brain/Brain.jpg';
import img3 from '../../../../../assets/Brain/Indian.jpg';
import img4 from '../../../../../assets/Brain/Ancient.jpg';
import img5 from '../../../../../assets/Brain/Parenting.jpeg';
import vid1 from '../../../../../assets/mainpage/videoooo.mp4';

const Section1 = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Section_1 ref={sectionRef}>
        <div className="container">
          <Header className={isVisible ? 'visible' : ''}>
            TIA-BRAIN is a brain training program designed to awaken the dormant talents of children by training both sides of the brain. Traditional education often focuses on one side, neglecting the other. Using modern technologies and advanced brain techniques, TIA-BRAIN aims to enhance children's learning potential, preparing them to excel in academics and life. Join the Brain program to achieve your dreams and lead a happy life.
          </Header>
          <div className="grid">
            <Card className="large" backgroundImage={img1}>
              <h5>RESEARCH AND EDUCATION</h5>
              <div className="dropdown-container">
                <KnowMore onClick={() => scrollToSection('section11')}>
                  Know More <Arrow>&#8594;</Arrow>
                </KnowMore>
              </div>
            </Card>
            <Card className="large1" backgroundImage={img2}>
              <h5>BRAIN WAVES</h5>
              <div className="dropdown-container">
                <KnowMore onClick={() => scrollToSection('section2')}>
                  Know More <Arrow>&#8594;</Arrow>
                </KnowMore>
              </div>
            </Card>
            <Card className="large2" backgroundImage={img3}>
              <h5>INDIAN EDUCATION SYSTEM COMPARED TO FOREIGN SYSTEM</h5>
              <div className="dropdown-container">
                <KnowMore onClick={() => scrollToSection('section3')}>
                  Know More <Arrow>&#8594;</Arrow>
                </KnowMore>
              </div>
            </Card>
            <Card className="large3" backgroundImage={img4}>
              <h5>ANCIENT INDIAN EDUCATION SYSTEM AND VALUES</h5>
              <div className="dropdown-container">
                <KnowMore onClick={() => scrollToSection('section7')}>
                  Know More <Arrow>&#8594;</Arrow>
                </KnowMore>
              </div>
            </Card>
            <Card className="large4" backgroundImage={img5}>
              <h5>PARENTING</h5>
              <div className="dropdown-container">
                <KnowMore onClick={() => scrollToSection('section8')}>
                  Know More <Arrow>&#8594;</Arrow>
                </KnowMore>
              </div>
            </Card>
            <Card className="large5">
              <VideoWrapper>
                <video
                  width="100%"
                  height="100%"
                  autoPlay
                  loop
                  muted
                  playsInline
                  ref={videoRef}
                >
                  <source src={vid1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </VideoWrapper>
              <h5>LEARNING</h5>
              <div className="dropdown-container"></div>
            </Card>
          </div>
        </div>
      </Section_1>
    </div>
  );
};

const KnowMore = styled.a`
  text-decoration: none;
  color: #fff;
  background-color: #000;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #FF007F;
  }

  @media (max-width: 890px) {
    font-size: 10px;
    height: 20px;
    width: 85px;
    padding: 2px 4px;
  }
`;

const Arrow = styled.span`
  margin-left: 10px;
`;

const Section_1 = styled.section`
  background-color: #0f0f12;
  color: white;
  font-family: Helvetica;

  .curved-image-container {
    width: 100%;
    height: auto;
    overflow: hidden;
    line-height: 0;
  }

  .curved-image {
    width: 100%;
    height: auto;
    display: block;
  }

  .container {
    font-family: Helvetica;
    padding: 20px;
    text-align: center;
  }

  .header {
    margin-bottom: 70px;
    margin-top: 70px;
    font-family: Helvetica;
    font-size: 20px;
    color: white;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }

    .header {
      font-size: 16px;
    }

    .card h3 {
      font-size: 14px;
    }
    .large3 {
      top: 10px !important;
    }

    .large4 {
      top: 10px !important;
    }

    .large5 {
      top: 10px !important;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
    .large3 {
      bottom: 70px;!important
    }

    .large4 {
      bottom: 40px;!important
    }

    .large5 {
      bottom: 65px;!important
    }
  }
`;

const Card = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  height: 200px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica;
  background-image: url(${props => props.backgroundImage});

  &.large {
    grid-column: span 1;
    height: 380px;
  }

  &.large1 {
    grid-column: span 1;
    height: 310px;
  }

  &.large2 {
    grid-column: span 1;
    height: 290px;
  }

  &.large3 {
    grid-column: span 1;
    height: 330px;
  }

  &.large4 {
    grid-column: span 1;
    height: 400px;
    bottom: 70px;
  }

  &.large5 {
    grid-column: span 1;
    height: 420px;
    bottom: 90px;
  }

  &:hover {
    transform: scale(1.05);
  }

  h5 {
    position: absolute;
    margin: 0;
    right: 0;
    left: 0;
    font-size: 18px;
    font-family: Helvetica;
    text-align: center;
    color: white;
    z-index: 1;

    @media (max-width: 900px) {
      font-size: 1.2em;
    }

    @media (max-width: 600px) {
      font-size: 0.8em;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }

  .dropdown-container {
    position: absolute;
    bottom: 20px; /* Adjust the distance from the bottom */
    right: 0;
    left: 0;
    width: 100%; /* Center align */
    display: flex;
    justify-content: center;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the video covers the card completely */
    border-radius: 10px;
  }
`;


const Header = styled.div`
  margin-bottom: 70px;
  margin-top: 70px;
  font-size: 20px;
  opacity: 0;
  transition: opacity 1s ease-out, transform 1s ease-out;
  transform: translateY(20px);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export default Section1;