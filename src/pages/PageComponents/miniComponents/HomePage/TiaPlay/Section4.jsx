import React, { useState } from 'react';
import styled from '@emotion/styled';

const Sec6 = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: 'Milky course - Infant/Toddler (2 to 3 years)',
      content: 'We strive to provide a safe, engaging, and nurturing environment for children, promoting trust in themselves and their world. Our aim is to help them develop confidence in their emerging abilities, enhance gross motor coordination, fine motor skills, and language skills, and offer opportunities to gain independence in daily tasks.',
    },
    {
      id: 2,
      title: 'Candy course - Primary (3 to 6 years)',
      content: 'Our goal is to accelerate the growth of functional independence, task persistence, and self-regulation in children. We promote social development through respectful, clear communication and safe, natural consequences. Our environment contains a wide variety of materials aimed at refining sensory perception and developing literacy and mathematical understanding. We also provide opportunities for imaginative exploration, fostering confident and creative self-expression.',
    },
    {
      id: 3,
      title: 'Eddy course - Elementary (6 to 12 years)',
      content: 'We offer opportunities for collaborative intellectual exploration, where the childs interests are supported and guided. Our approach supports the development of self-confidence, imagination, intellectual independence, and self-efficacy. Additionally, we foster an understanding of the childs role in their community, culture, and the natural world.',
    },
  ];

  return (
    <Container>
      <Header>
        <HeaderTitle>Courses We Offer</HeaderTitle>
      </Header>
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
              <TabContent key={tab.id}>
                <TabText>
                  <TabTitle>{tab.title}</TabTitle>
                  <TabDescription>{tab.content}</TabDescription>
                </TabText>
              </TabContent>
            )
        )}
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
 padding-top:100px;
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
