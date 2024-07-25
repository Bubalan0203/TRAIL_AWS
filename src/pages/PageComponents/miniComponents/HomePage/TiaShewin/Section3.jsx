import React, { useState } from 'react';
import img1 from '../../../../../assets/Shewin/Cultural.jpeg';
import img2 from '../../../../../assets/Shewin/Equality.jpeg';
import img3 from '../../../../../assets/Shewin/Supportive.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styled from 'styled-components';

const Sec20 = () => {
  

  

  return (
    <Section id="blog">
      <Container>
        <Title>Factors that Influence Women Entrepreneurship</Title>

        <BlogCard>
          <BlogCardHeader>
            <BlogCardImg src={img1} alt="Artwork on table" />
          </BlogCardHeader>
          <BlogCardBody>
            <BlogCardTitle>Cultural Factors</BlogCardTitle>
           
            <Paragraph>
            Organizations with more women in management typically exhibit cultures with high human orientation (fairness, generosity, caregiving, kindness),gender equity, and performance orientaVon (innovation, improvement, excellence). They also show low power distance(authority, power disVncVon, and status privileges)
  </Paragraph>
          </BlogCardBody>
        </BlogCard>

        <BlogCard>
          <BlogCardHeader>
            <BlogCardImg src={img2} alt="Person working on computer" />
          </BlogCardHeader>
          <BlogCardBody>
            <BlogCardTitle>Gender Equity and Work-Life Balance</BlogCardTitle>
            <Paragraph>
            Impact of Gender Egalitarian Cultures:In lower gender egalitarian cultures, women are rated lower in work-life balance by their supervisors compared to men, affecVng their performance appraisals. This discrepancy is not found in high gender egalitarian cultures.
</Paragraph>
          </BlogCardBody>
        </BlogCard>

        <BlogCard>
          <BlogCardHeader>
            <BlogCardImg src={img3} alt="Person working on computer" />
          </BlogCardHeader>
          <BlogCardBody>
            <BlogCardTitle>Supportive Environment</BlogCardTitle>
            <Paragraph>
            A supportive environment for women's entrepreneurship requires investments in human and financial capital. Providing opportunities for growth is essential for fostering women's entrepreneurship. Additionally, innovative and progressive institutional and infrastructural provisions are necessary to create a conducive environment for women entrepreneurs.
            </Paragraph>
          </BlogCardBody>
        </BlogCard>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  color: #f00d88;
  font-family: 'Helvetica', sans-serif;

`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  text-align: center;
`;

const Title = styled.h6`
  font-size:28px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

const BlogCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BlogCardHeader = styled.div`
  flex: 1;
`;

const BlogCardImg = styled.img`
  width: 100%;
  height: 100%;
`;

const BlogCardBody = styled.div`
  flex: 2;
  padding: 20px;
  text-align: left;
`;

const BlogCardTitle = styled.h5`
  font-size: 25px;
  margin-bottom: 15px;
  color: #f00d88;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: black;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const BlogCardCaption = styled.p`
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const IconWrapper = styled.span`
  margin-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const iconStyle = {
  marginRight: '6px',
  color: '#e83e8c',
};

const BlogCardLink = styled.button`
  color: #007bff;
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export default Sec20;
