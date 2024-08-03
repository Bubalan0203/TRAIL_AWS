import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import image1 from '../../../../../assets/img2.avif';
import image2 from '../../../../../assets/img2.avif';
import image3 from '../../../../../assets/img2.avif';
import image4 from '../../../../../assets/img2.avif';
// Animation keyframes
const fadeInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components for CSS styling
const Wrapper = styled.div`
  background-color: #0f0f12;
  font-family: 'Helvetica';
`;

const TestimonialSection = styled.div`
  padding: 50px 0;
  justify-content: center;
  width: 100%;
`;

const TestimonialTitle = styled.h2`
  text-align: center;
  color: #f00d88; opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (props.isVisible ? 'translateY(0)' : 'translateY(-100%)')};
  transition: opacity 2s ease-out, transform 2s ease-out;
  animation: ${(props) => (props.isVisible ? css`${fadeInTop} 2s ease-out` : 'none')};
`;

const HR = styled.hr`
  width: 60%;
  background-color: #fff;
  height: 2px;
  margin: 20px auto;
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;

  .carousel-item {
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .carousel-item-next,
  .carousel-item-prev,
  .carousel-item.active {
    display: flex;
    justify-content: center;
  }
`;

const TestimonialItem = styled.div`
  text-align: center;
  padding: 30px;
  background-color: #232e34;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: 0 auto;
  height: 400px; /* Fixed height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 70%;
    height: 350px; /* Fixed height */
    padding: 25px;
  }

  @media (max-width: 480px) {
    width: 90%;
    height:310px; /* Fixed height */
    padding: 20px;
  }
`;

const Heading = styled.h3`
  font-weight: bold;
  margin-bottom: 15px;
  color: #f00d88;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1 rem;
  }
`;


const Subtext = styled.p`
  color: #fff;
  font-size:1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size:0.9rem;
  }
`;


const Testimonial = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const testimonialItems = [
    {
      heading: "Fine motor skills",
      subtext: "Fine motor skills are involved in smaller movements that occur in the wrists, hands, fingers, and the feet and toes. They participate in smaller actions such as picking up objects between the thumb and finger, writing carefully, and even blinking. ",
      img: image1,
    },
    {
      heading: "Gross motor skills ",
      subtext: "Gross motor skills are important to enable children to perform every day functions, such as walking, running, skipping, as well as playground skills and sporting skills",
      img: image2,
    },
    {
      heading: "Emotional Skills",
      subtext: "Emotional development involves learning what feelings and emotions are, understanding how and why they happen, recognising one’s own feelings and those of others, and developing effective ways of managing them",
      img: image3,
    },
    {
      heading: "Social Skills ",
      subtext: "Social skill facilitates interaction and communication with others. This learning improves students’ communication with peers and adults, improves cooperative teamwork, and helps them become effective, caring, concerned members of their communities. ",
      img: image4,
    },
    {
      heading: "Communication Skills ",
      subtext: "Communication development for young children includes gaining the skills to understand and to express thoughts, feelings, and information. ",
      img: image4,
    },
    {
      heading: "Cognitive Skills ",
      subtext: "Cognitive skill development in children involves the progressive building of learning skills, such as attention, memory and thinking. These crucial skills enable children to process sensory information and eventually learn to evaluate, analyse, remember, make comparisons and understand cause and effect.",
      img: image4,
    }
  ];

  return (
    <Wrapper>
      <TestimonialSection>
        <TestimonialTitle ref={titleRef} isVisible={isVisible}>Focus Area</TestimonialTitle>
        <HR />
        <StyledCarousel>
          {testimonialItems.map((item, index) => (
            <Carousel.Item key={index}>
              <TestimonialItem>
                <Heading>{item.heading}</Heading>
                <Subtext>{item.subtext}</Subtext>
              </TestimonialItem>
            </Carousel.Item>
          ))}
        </StyledCarousel>
      </TestimonialSection>
    </Wrapper>
  );
};

export default Testimonial;
