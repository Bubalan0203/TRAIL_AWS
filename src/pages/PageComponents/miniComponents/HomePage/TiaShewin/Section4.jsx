import React from 'react';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Image1 from '../../../../../assets/Shewin/Encourage.jpeg';
import Image2 from '../../../../../assets/Shewin/Financial.jpg';
import Image3 from '../../../../../assets/Shewin/Investors.jpeg';
import Image4 from '../../../../../assets/Shewin/Firms.jpeg';
import Image5 from '../../../../../assets/Shewin/Childcare.jpeg';
import Image6 from '../../../../../assets/Shewin/Gender.jpeg';


const testimonials = [
  {
    text: " Policies should promote direct marketing of investment funds and loans specifically to women. By targeting financial resources directly to female entrepreneurs, these policies can help bridge the gender gap in access to capital, enabling more women to start and grow their businesses.",
    title: "Encouraging Financial Institutions",
    image: Image1,
  },
  {
    text: "Developing tailored financial products for women entrepreneurs can help mitigate funding barriers. Financial institutions need to design products that address the unique needs and circumstances of women in business, such as flexible loan terms and lower interest rates, which can make financial support more accessible and effective.",
    title: "Specific Financial Products",
    image: Image2,
  },
  {
    text: "Increasing the number of female-led investments and establishing funds dedicated to women-owned businesses can significantly promote gender equity in funding. By empowering female investors and creating specific funds for women entrepreneurs, the financial industry can support a more diverse and inclusive business environment.",
    title: "Female Investors and Funds",
    image: Image3,
  },
  {
    text: "In family businesses, women often find themselves as employees rather than successors, with no significant difference in founding rates compared to men. This trend highlights the need for cultural and structural changes within family firms to provide equal opportunities for women to lead and succeed.",
    title: "Family Firms",
    image: Image4,
  },
  {
    text: "Women who embrace traditional gender roles and self-employed mothers tend to have higher success rates in family businesses. Childcare responsibilities often influence this dynamic, suggesting that supportive measures for balancing work and family life can enhance women's success in entrepreneurial ventures.",
    title: "Childcare Responsibilities",
    image: Image5,
  },
  {
    text: "Despite these challenges, women's entrepreneurship remains vital, necessitating gender-specific opportunities and targeted support to address the unique obstacles they face. Tailored programs, mentorship, and resources are essential to fostering an environment where women entrepreneurs can thrive and contribute significantly to economic growth.",
    title: "Gender-Specific Opportunities",
    image:Image6,
  },
];

const createCarouselItem = (testimonial, index) => (
  <Carousel.Item key={index}>
    <TestimonialCard>
      <TestimonialContent>
        <TestimonialText>{testimonial.text}</TestimonialText>
        <Profile>
          <ProfileImage src={testimonial.image} alt="Customer" />
          <ProfileDetails>
            <ProfileTitle>{testimonial.title}</ProfileTitle>
          </ProfileDetails>
        </Profile>
      </TestimonialContent>
    </TestimonialCard>
  </Carousel.Item>
);

const Section1 = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Business Capital for Women Entrepreneurs</SectionTitle>
      <CarouselWrapper>
        <StyledCarousel indicators={true} interval={3000}>
          {testimonials.map(createCarouselItem)}
        </StyledCarousel>
      </CarouselWrapper>
    </SectionWrapper>
  );
};

// Styled components for Section 1
const SectionWrapper = styled.div`
  padding: 60px 20px;
  background: #fff;
  text-align: center;
  font-family: 'Helvetica', sans-serif;
`;

const SectionTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 2.8em;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2.2em;
  }
`;

const CarouselWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const StyledCarousel = styled(Carousel)`
  .carousel-indicators {
    bottom: -70px; /* Move indicators outside */
    margin-bottom: 10px;
  }

  .carousel-indicators li {
    background-color: #e91e63;
    border-radius: 15px; /* Change border-radius for rounded rectangle */
    width: 30px; /* Adjust width for a rectangular shape */
    height: 10px; /* Adjust height for a rectangular shape */
    position: relative;
  }

  .carousel-indicators li::after {
    content: '';
    display: block;
    width: 100%; /* Full width of the indicator */
    height: 2px; /* Adjust height as needed */
    background-color: #ffffff; /* Line color */
    position: absolute;
    top: calc(50% - 1px); /* Center the line vertically */
  }

  .carousel-indicators .active {
    background-color: #e91e63;
    border-radius: 15px; /* Keep the same rounded rectangle shape */
    width: 30px; /* Same width as other indicators */
    height: 3px; /* Same height as other indicators */
  }

  .carousel-indicators .active::after {
    background-color: #ffffff; /* Active line color */
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    display: none; /* Hide previous and next buttons */
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding: 10px;
  }
`;

const TestimonialContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestimonialText = styled.div`
  flex: 2;
  font-size:18px;
  color: #333;
  padding: 40px;
  border: 0px solid #333;
  border-radius: 10px;
  margin-right: 20px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f1f1f1;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    height: auto;
    font-size: 14px;
  }
`;

const Profile = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 20%;
  object-fit: cover;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileName = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ProfileTitle = styled.div`
  font-size: 18px;
  color: #e91e63;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default Section1;
