import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import { Fade } from 'react-awesome-reveal';

const Sec6 = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { ref, inView } = useInView({ triggerOnce: true });

  const tabs = [
    {
      id: 1,
      title: 'Individual Attention',
      content: 'Students receive personalized guidance tailored to their specific needs, allowing tutors to focus on individual strengths and weaknesses. This one-on-one attention ensures that each student fully understands the material, asks questions without hesitation, and progresses at their own pace.',
    },
    {
      id: 2,
      title: 'Boosts Confidence',
      content: 'One-on-one tutoring helps build students confidence in their abilities. Personalized attention and tailored feedback foster a positive learning environment, encouraging students to take risks and tackle challenging subjects. As students see their progress and understand complex concepts, their self-esteem grows.',
    },
    {
      id: 3,
      title: 'Homework and Test Guidance',
      content: 'Tutors provide assistance with homework and prepare students for class tests, ensuring that they thoroughly understand their assignments and are well-prepared for assessments. By offering step-by-step guidance and clarifying doubts, tutors help students complete their homework accurately and on time.',
    },
    {
      id: 4,
      title: 'K-12 Education System',
      content: 'TIA LIVE TUTOR supports the K-12 education system, offering comprehensive educational support from Kindergarten to 12th grade. This inclusive approach ensures that students receive consistent and high-quality tutoring throughout their academic journey. The platform provides age-appropriate learning materials and teaching methods.',
    },
  ];

  return (
    <Container ref={ref}>
      <Fade direction="up" duration={800} triggerOnce>
        <Header>
          <HeaderTitle>Advantages For School Students</HeaderTitle>
        </Header>
      </Fade>
      <ContentContainer>
        <Tabs>
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              active={activeTab === tab.id}
            >
              <Circle active={activeTab === tab.id}>{tab.id}</Circle>
            </Tab>
          ))}
          <Line />
        </Tabs>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <Fade direction="up" duration={800} triggerOnce key={tab.id}>
                <TabContent>
                  <TabText>
                    <TabTitle>{tab.title}</TabTitle>
                    <TabDescription>{tab.content}</TabDescription>
                  </TabText>
                </TabContent>
              </Fade>
            )
        )}
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 0;
  background-color: #0f0f12;
  color: white;
  padding: 20px;
  font-family: Helvetica, sans-serif;
`;

const Header = styled.div`
  text-align: center;
  font-size: 1.2em;
  padding-bottom: 20px;
  color: #f00d88;
`;

const HeaderTitle = styled.h5`
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

const Tab = styled.div`
  cursor: pointer;
  text-align: center;
  z-index: 1;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

const Circle = styled.span`
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
  border: 2px solid white;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  background-color: ${(props) => (props.active ? 'white' : '#f00d88')};
  color: ${(props) => (props.active ? '#f00d88' : 'white')};
  transition: background-color 0.3s, color 0.3s;
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  width: 90%;
  height: 2px;
  background-color: white;
  z-index: 0;
`;

const TabContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const TabText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 60px;
  line-height: 1.8;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.9em;
  }
`;

const TabTitle = styled.h3`
  font-weight: bold;
  line-height: 1.6;
  width: 100%;
  color: #f00d88;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const TabDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export default Sec6;
