import React, { useState } from 'react';
import styled from 'styled-components';

const Sec10 = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const toggleCardContent = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const cards = [
    {
      category: 'Tia Brain',
      title: 'Parallel Communication',
      text: 'Engage in activities like cooking, playing a game, or even driving while discussing important topics. This creates a comfortable...',
      fullText: [
        'Engage in activities like cooking, playing a game, or even driving while discussing important topics.This creates a comfortable environment for teenagers to open up.',
        'Parallel activities help maintain a natural flow of conversation, reducing the likelihood of arguments and making it easier to address potentially contentious issues.',
      ],
    },
    {
      category: 'Tia Brain',
      title: 'Focusing on the Right Thing, Not on Being Right',
      text: 'Emphasize understanding and empathy over winning an argument or proving a point. This builds trust and shows teenagers...',
      fullText: [
        'Emphasize understanding and empathy over winning an argument or proving a point. This builds trust and shows teenagers that their opinions are valued.',
        'Recognize that being right isn’t as important as maintaining a positive and supportive relationship.',
      ],
    },
    {
      category: 'Tia Brain',
      title: 'Listening',
      text: 'Practice active listening by dedicating specific times to fully focus on your teenager without interruptions. This can help...',
      fullText: [
        'Practice active listening by dedicating specific times to fully focus on your teenager without interruptions. This can help build a stronger connection and understanding.',
        'Listening involves more than just hearing words; it requires valuing the teenagers experiences and validating their feeling.Avoid dismissing or trivializing their concerns.',
      ],
    },
    {
      category: 'Tia Brain',
      title: 'Teaching Life Skills',
      text: 'Equip teenagers with the skills to manage multiple demands by modeling decision-making and problem-solving...',
      fullText: [
        'Equip teenagers with the skills to manage multiple demands by modeling decision-making and problem-solving in your daily life',
        'Discuss real-life scenarios where you had to balance conflicting priorities, demonstrating how to make informed choices',
      ],
    },
    {
      category: 'Tia Brain',
      title: 'The Wonder of Parenting',
      text: 'Parenting is a dynamic journey that involves adapting to the evolving needs of children. Each interaction, whether big...',
      fullText: [
        'Parenting is a dynamic journey that involves adapting to the evolving needs of children. Each interaction, whether big or small, contributes to their development',
        'Parent behaviors, attitudes, and daily actions significantly shape a child self-esteem, values,and worldview.',
      ],
    },
    {
      category: 'Tia Brain',
      title: 'Parents Facing the Pressure to be the Best',
      text: 'Social pressures to ensure children excel can lead to over-scheduling with extracurricular activities, tutoring, and enrichment...',
      fullText: [
        ' Social pressures to ensure children excel can lead to over-scheduling with extracurricular activities, tutoring, and enrichment classes.',
        'Parents struggle to balance providing the best learning environment with the demands of their careers, often feeling guilty and overwhelmed.',
      ],
    },
  ];

  return (
    <NewsSection id="news">
      <Container>
        <Row>
          <Title>Communicating with Teenagers</Title>
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
                    <CardText>
                      {expandedCards[index] ? (
                        <ul>
                          {card.fullText.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        card.text
                      )}
                    </CardText>
                  </CardBody>
                  <Link href="#!" onClick={() => toggleCardContent(index)}>
                    {expandedCards[index] ? (
                      <SvgIcon xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 0 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
                      </SvgIcon>
                    ) : (
                      <SvgIcon xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                      </SvgIcon>
                    )}
                  </Link>
                </CardBodyWrapper>
              </Card>
            </ColCard>
          ))}
        </CardRow>
        <Row>
          <ColCard>
            <BtnContainer>
              <Btn onClick={toggleShowAll}>
                {showAll ? 'Hide' : 'View all'}
              </Btn>
            </BtnContainer>
          </ColCard>
        </Row>
      </Container>
    </NewsSection>
  );
};

const NewsSection = styled.section`
  padding: 40px 0;
  background-color: #0f0f12;
`;

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #f00d88;
  font-size: 35px !important;
  font-weight: bold !important;
  font-family: Helvetica !important;
  margin-bottom: 20px !important;

  @media (max-width: 768px) {
    font-size: 30px !important;
  }

  @media (max-width: 480px) {
    font-size: 25px !important;
  }
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ColCard = styled.div`
  flex: 1 1 calc(33.333% - 30px);
  margin: 15px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  background-color:#232e34;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.7vw !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 2vw !important;
  overflow: hidden;
  height: 100%;
`;

const CardBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardBody = styled.div`
  padding: 20px !important;
  color: #f00d88;
  flex: 1;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px !important;
`;

const DateText = styled.p`
  margin: 0 !important;
  color: #6c757d !important;
`;

const Badge = styled.span`
  background-color: #f00d88 !important;
  color: #fff !important;
  padding: 5px 10px !important;
  border-radius: 20px !important;
  font-size: 0.875rem !important;
`;

const CardTitle = styled.h5`
  font-size: 1.2rem !important;
  font-weight: 450 !important;
  margin: 10px 0 !important;

  @media (max-width: 768px) {
    font-size: 1rem !important;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem !important;
  }
`;

const CardText = styled.p`
  font-size: 1.2rem !important;
  color: #fff !important;

  @media (max-width: 768px) {
    font-size: 1rem !important;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem !important;
  }
`;

const Link = styled.a`
  display: inline-block !important;
  margin-top: 10px !important;
  color: #b24185c2 !important;
  text-decoration: none !important;
`;

const SvgIcon = styled.svg`
  margin-left: 25px !important;
  margin-bottom: 10px !important;
  color: #f00d88 !important;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
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
    font-size: 0.875rem !important;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem !important;
  }
`;

export default Sec10;