import React, { useState } from 'react';
import styled from 'styled-components';

const Sec4 = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const cards = [
    {
      category: 'Tia Edge',
      title: 'Self Management and Time Management ',
      text: 'Regular class attendance is crucial. Skipping classes can negatively impact your preparation and understanding of key concepts.',
    },
    {
      category: 'Tia Edge',
      title: 'Attend Classes Regularly ',
      text: 'Emphasize understanding and empathy over winning an argument or proving a point. This builds trust and shows teenagers...',
    },
    {
      category: 'Tia Edge',
      title: 'Revise on a Daily Basis',
      text: 'Regular revision helps reinforce concepts learned in class, preventing you from forgetting important information. Make daily revision a habit.',
    },
    {
      category: 'Tia Edge',
      title: 'Solving Exercises, Mock Tests & Model Papers',
      text: 'Practice with mock tests and model papers to simulate exam conditions and familiarize yourself with the types of questions that may be asked. ',
    },
    {
      category: 'Tia Edge',
      title: 'Getting Concepts Clear',
      text: 'Ensure you have a clear understanding of all concepts. Concept clarity is essential for answering questions accurately. ',
    },
    {
      category: 'Tia Edge',
      title: 'Focus',
      text: 'Devote focused study time daily, free from distractions. Even 3 to 4 hours of concentrated study can be highly effective. ',
    },
    {
      category: 'Tia Edge',
      title: 'Solve Previous Year Question Papers ',
      text: 'Review past question papers to understand the exam pattern and the standard of questions. This helps in better preparation and strategy formulation.  ',
    },
    {
      category: 'Tia Edge',
      title: 'Be Regular, Well Planned & Disciplined',
      text: 'Develop a comprehensive study plan. Understand the subjects, topics, exam pattern, and selection process, and allocate time accordingly to each subject. ',
    },
    {
      category: 'Tia Edge',
      title: 'Stay Motivated and Healthy',
      text: 'Devote focused study time daily, free from distractions. Even 3 to 4 hours of concentrated study can be highly effective. Maintain a positive attitude and take care of your physical and mental health. ',
    },
  ];

  return (
    <NewsSection>
      <Container>
        <Row>
          <Title>Goals for Effective Exam Preparation</Title>
        </Row>
        <CardRow>
          {cards.slice(0, showAll ? cards.length : 3).map((card, index) => (
            <ColCard key={index}>
              <Card>
                <CardBodyWrapper>
                  <CardBody>
                    <CardHeader>
                      <h6><Badge>{card.category}</Badge></h6>
                      <DateText>{card.date}</DateText>
                    </CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardText>{card.text}</CardText>
                  </CardBody>
                </CardBodyWrapper>
              </Card>
            </ColCard>
          ))}
        </CardRow>
        <Row>
          <Col>
            <BtnContainer>
              <Btn onClick={toggleShowAll}>
                {showAll ? 'Hide' : 'View all'}
              </Btn>
            </BtnContainer>
          </Col>
        </Row>
      </Container>
    </NewsSection>
  );
};

const NewsSection = styled.section`
  padding: 40px 0 !important;
  background-color: #ffffff !important;
  font-family: Helvetica, Arial, sans-serif !important;
`;

const Container = styled.div`
  max-width: 1350px !important;
  margin: 0 auto !important;
  padding: 0 15px !important;
`;

const Row = styled.div`
  display: flex !important;
  justify-content: center !important;
  margin-bottom: 20px !important;
`;

const Title = styled.h2`
  color: #333 !important;
  font-size: 2rem !important;
  font-weight: 700 !important;
  margin-bottom: 20px !important;

  @media (max-width: 768px) {
    font-size: 1.5rem !important;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem !important;
  }
`;

const CardRow = styled.div`
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: center !important;
`;

const ColCard = styled.div`
  flex: 1 1 calc(33.333% - 30px) !important;
  margin: 15px !important;
  min-width: 300px !important;
  display: flex !important;
  flex-direction: column !important;
`;

const Card = styled.div`
  background-color: rgba(240, 13, 136, 0.35) !important;
  border: 0px solid rgba(242, 237, 237, 1) !important;
  box-shadow: inset -2px 5px 24px 1px rgba(0, 0, 0, 0.38) !important;
  padding: 1.7vw !important;
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  border-radius: 2vw !important;
  overflow: hidden !important;
  height: 100% !important;
`;

const CardBodyWrapper = styled.div`
  display: flex !important;
  flex-direction: column !important;
  flex: 1 !important;
`;

const CardBody = styled.div`
  padding: 20px !important;
  color: #333 !important;
  flex: 1 !important;

  @media (max-width: 768px) {
    padding: 15px !important;
  }

  @media (max-width: 576px) {
    padding: 10px !important;
  }
`;

const CardHeader = styled.div`
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  margin-bottom: 10px !important;
`;

const DateText = styled.p`
  margin: 0 !important;
  color: #6c757d !important;

  @media (max-width: 768px) {
    font-size: 0.875rem !important;
  }

  @media (max-width: 576px) {
    font-size: 0.75rem !important;
  }
`;

const Badge = styled.span`
  background-color: #f00d88 !important;
  color: #fff !important;
  padding: 5px 10px !important;
  border-radius: 20px !important;
  font-size: 0.875rem !important;

  @media (max-width: 768px) {
    font-size: 0.75rem !important;
  }

  @media (max-width: 576px) {
    font-size: 0.625rem !important;
  }
`;

const CardTitle = styled.h5`
  font-size: 1.3rem !important;
  font-weight:600 !important;
  margin: 10px 0 !important;

  @media (max-width: 768px) {
    font-size: 1.1rem !important;
  }

  @media (max-width: 576px) {
    font-size: 1rem !important;
  }
`;

const CardText = styled.p`
  font-size: 1.2rem !important;
  color: #333 !important;

  @media (max-width: 768px) {
    font-size: 1rem !important;
  }

  @media (max-width: 576px) {
    font-size: 0.875rem !important;
  }
`;

const BtnContainer = styled.div`
  display: flex !important;
  justify-content: center !important;
`;

const Btn = styled.button`
  padding: 10px 20px !important;
  margin-top: 80px !important;
  font-size: 1rem !important;
  color: #fff !important;
  background-color: #f00d88 !important;
  border: none !important;
  border-radius: 5px !important;
  cursor: pointer !important;

  @media (max-width: 768px) {
    padding: 8px 16px !important;
    font-size: 0.875rem !important;
  }

  @media (max-width: 576px) {
    padding: 6px 12px !important;
    font-size: 0.75rem !important;
  }
`;

const Col = styled.div`
  flex: 1 !important;
  display: flex !important;
  justify-content: center !important;
`;

export default Sec4;
