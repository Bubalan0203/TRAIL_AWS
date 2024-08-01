import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
// Animations
const jump = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

// Styled components
const StyledInsuranceSection = styled.div`
  padding: 2rem;
  text-align: left;
  font-family: Arial, sans-serif;
  color: #333;
  margin-top: 40px;
`;

const StyledInsuranceHeader = styled.div`
  display: flex;
  justify-content: center; /* Center align header */
  align-items: center;
  margin-bottom: 40px;
  text-align: center; /* Center align text */
`;

const StyledH1 = styled.h1`
  margin-top: 20px;
  font-size: 45px;
  margin-bottom: 1rem;
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center; /* Center align features */
  align-items: center;
  margin-bottom: 40px;
`;

const StyledInsuranceFeatures = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* Adjust the gap between features */
  
  @media (max-width: 768px) {
    flex-direction: column; /* Stack features vertically on smaller screens */
  }
`;

const StyledFeature = styled.div`
  background-color: #101010;
  padding: 1rem;
  border-radius: 8px;
  width: calc(30% - 20px); /* Adjust width to fit three features in a row */
  box-shadow: 4px 8px 12px #3b3b3b;
  margin-bottom: 20px; /* Adjust margin between features */
  transition: transform 0.3s ease-in-out;

  &:hover {
    animation: ${jump} 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
  }
`;

const StyledFeatureText = styled.p`
  font-size: 0.9rem; /* Adjust font size for smaller screens */
  color: #aeaaaa;
`;

const StyledInsuranceStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center stats on smaller screens */
  gap: 20px;
  margin-top: 50px;
`;

const StyledStat = styled.div`
  text-align: center;
  padding: 20px 50px; /* Decrease padding */
  border-radius: 8px;
  box-shadow: 9px 15px 19px rgba(0, 0, 1, 0.2);
`;

const StatValue = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: bold; /* Make the numbers bold */
  color: #f14bb4;
`;

const StatText = styled.p`
  font-size: 0.9rem;
`;

// Incrementing number animation
const useIncrementingNumber = (end, start = 0, duration = 2000) => {
  const [value, setValue] = useState(start);
  
  useEffect(() => {
    let startTime;
    const step = timestamp => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, start, duration]);

  return value;
};

// React component
const Section2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const yearsOfExperience = useIncrementingNumber(inView ? 11 : 0);
  const totalStudents = useIncrementingNumber(inView ? 40000 : 0);
  const branches = useIncrementingNumber(inView ? 150 : 0);
  const entrepreneurs = useIncrementingNumber(inView ? 1000 : 0);

  return (
    <StyledInsuranceSection ref={ref}>
      <StyledInsuranceHeader>
        <StyledH1>Talent Initiators and Accelerators (India) Private Limited</StyledH1>
      </StyledInsuranceHeader>

      <FeaturesContainer>
        <StyledInsuranceFeatures>
          <StyledFeature>
            <StyledFeatureText>
              Our company’s name is tia Talent Initiators and Accelerators India Private Limited. It was started on October 13th 2013. It is an 11 year old company. The mission of the company is to create more younger entrepreneurs in India. The vision of the company is creating ten thousand entrepreneurs by 2028. It has 150 branches in Tamil Nadu. It is an ISO certified company. The company’s head office is in Podanur Coimbatore.
            </StyledFeatureText>
          </StyledFeature>
          <StyledFeature>
            <StyledFeatureText>
              Becoming one’s own boss, making one’s own rules and creating something unique by starting one’s own business. Entrepreneurs are people with the ability and desire to establish their own business. Successful entrepreneurs see the risks involved in starting a new business, but understand that without risk, there is no reward. Entrepreneurs are innovators that work tirelessly to bring their business ideas to life and reap the profits.
            </StyledFeatureText>
          </StyledFeature>
          <StyledFeature>
            <StyledFeatureText>
              Entrepreneurship is about identifying opportunities, taking initiative, and creating value in the marketplace. Entrepreneurs play a crucial role in driving economic growth, innovation, and job creation in society.
            </StyledFeatureText>
          </StyledFeature>
        </StyledInsuranceFeatures>
      </FeaturesContainer>

      <StyledInsuranceStats>
        <StyledStat>
          <StatValue>{yearsOfExperience}+</StatValue>
          <StatText>Years of Experience</StatText>
        </StyledStat>
        <StyledStat>
          <StatValue>{totalStudents}+</StatValue>
          <StatText>Total number of students</StatText>
        </StyledStat>
        <StyledStat>
          <StatValue>{branches}+</StatValue>
          <StatText>Branch</StatText>
        </StyledStat>
        <StyledStat>
          <StatValue>{entrepreneurs}+</StatValue>
          <StatText>Entrepreneur</StatText>
        </StyledStat>
      </StyledInsuranceStats>
    </StyledInsuranceSection>
  );
};

export default Section2;
