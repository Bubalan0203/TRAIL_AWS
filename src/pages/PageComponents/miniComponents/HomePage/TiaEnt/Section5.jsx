import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import image1 from '../../../../../assets/img2.avif';
import image2 from '../../../../../assets/img2.avif';
import image3 from '../../../../../assets/img2.avif';
import image4 from '../../../../../assets/img2.avif';

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
  color: #f00d88;
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
    height:320px; /* Fixed height */
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
  font-size:1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size:0.9rem;
  }
`;


const Testimonial = () => {
  const testimonialItems = [
    {
      heading: "Uncertain Income",
      subtext: "Entrepreneurs often face fluctuating income streams, especially in the early stages of their business. This uncertainty can stem from various factors such as market demand, competition, operational challenges, and economic conditions. Unlike a traditional salaried job, where income is predictable and steady, entrepreneurial ventures require a high tolerance for financial risk and variability.",
      img: image1,
    },
    {
      heading: "Time Demands",
      subtext: "Successful entrepreneurship demands a significant time commitment, often surpassing traditional work hours. Unlike a typical 9-to-5 job, running a business can require working early mornings, late nights, weekends, and even holidays. Entrepreneurs are responsible for all aspects of their business, from strategic planning and financial management to marketing, sales, and customer service.",
      img: image2,
    },
    {
      heading: "Possibility of Failure",
      subtext: "The entrepreneurial journey is fraught with risks, and the possibility of business failure is a constant challenge. Statistics show that a significant percentage of startups do not survive beyond their first few years. This stark reality can be daunting for aspiring entrepreneurs, but understanding the potential for failure and preparing for it can pave the way for long-term success.",
      img: image3,
    },
    {
      heading: "Building Customer Base",
      subtext: "Attracting and retaining customers is essential for business success. Starting with minimal reviews and referrals, entrepreneurs face the challenge of establishing a strong customer base from scratch. However, with strategic marketing and customer engagement initiatives, they can cultivate a loyal customer base, fostering long-term relationships and brand advocacy.",
      img: image4,
    },
    {
      heading: "Attracting Investors",
      subtext: "Securing initial capital through investors or partners is challenging but pivotal for business growth, particularly for capital-intensive ventures. Entrepreneurs with compelling business plans and clear value propositions can attract potential investors, aligning financial support with strategic business objectives.",
      img: image4,
    },
    {
      heading: "Increased Responsibilities",
      subtext: "Entrepreneurship encompasses diverse responsibilities, from financial management to operational oversight and strategic decision-making. Despite the inherent challenges, assuming multifaceted roles empowers entrepreneurs to gain invaluable skills and maintain holistic control over their business's trajectory.",
      img: image4,
    },
    {
      heading: "High Stress Levels",
      subtext: "Managing a business entails high levels of stress due to the relentless pursuit of opportunities and operational excellence. Yet, entrepreneurs who effectively manage stress through resilience-building practices and proactive problem-solving can sustain motivation and achieve long-term success.Prioritize tasks and allocate time effectively.",
    },
  ];

  return (
    <Wrapper>
      <TestimonialSection>
        <TestimonialTitle>Challenges</TestimonialTitle>
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
