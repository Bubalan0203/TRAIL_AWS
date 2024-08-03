import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const divisions = {
  "West Division": {
    "Coimbatore": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "Tirupur": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "Erode": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "Salem": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "Namakkal": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "The Nilgiris": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"]
  },
  "North Division": {
    "Gandhipuram": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "Peelamedu": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "R.S Puram": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "Vadavalli": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "Saravanampatti": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"]
  },
  "South Division": {
    "Kuniyamuthur": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "Nallampalayam": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "NGGO Colony": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "Periyanaikenpalayam": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"]
  },
  "Central Division": {
    "Mettupalayam": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "Annur": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "Karumathampatti": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "Ondipudur": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"]
  },
  "Puducherry Division": {
    "Ramanathapuram": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"],
    "Pollachi": ["Village 1", "Village 2", "Village 3", "Village 4", "Village 5", "Village 6", "Village 7", "Village 8", "Village 9", "Village 10"]
  }
};

const Section = styled.section`
  padding: 20px;
  background:white;
  margin-top:40px;
`;

const Division = styled.div`
  margin-top:40px;
`;

const DivisionTitle = styled.h2`
  font-family: 'Helvetica', sans-serif;
  color: #f00d88;
  White-space:nowrap;
`;

const CityList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CityItem = styled.li`
  font-family: 'Helvetica', sans-serif;
  color: #000;
  padding: 5px 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const CityLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;  /* Adjust padding to control the space around the label */
`;

const CityName = styled.span`
  margin-left:10px; /* Adjust this to change the space between the name and the icon */
`;

const VillageList = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  margin-top: 5px;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const VillageItem = styled.li`
  font-family: 'Helvetica', sans-serif;
  color: #000;
  padding: 3px 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Section15 = () => {
  const [activeCity, setActiveCity] = useState({});

  const toggleVillages = (division, city) => {
    setActiveCity(prevState => ({
      ...prevState,
      [division]: prevState[division] === city ? null : city,
    }));
  };

  return (
    <Section>
      <h1 style={{ fontFamily: 'Helvetica', color: '#f00d88',textAlign:'center',fontWeight:'bold'}}>TIA Franchise</h1>
      <GridContainer>
        {Object.entries(divisions).map(([division, cities]) => (
          <Division key={division}>
            <DivisionTitle>{division}</DivisionTitle>
            <CityList>
              {Object.entries(cities).map(([city, villages]) => (
                <CityItem key={city}>
                  <CityLabel onClick={() => toggleVillages(division, city)}>
                    <CityName>{city}</CityName>
                    <FontAwesomeIcon icon={activeCity[division] === city ? faAngleUp : faAngleDown} />
                  </CityLabel>
                  <VillageList show={activeCity[division] === city}>
                    {villages.map((village, index) => (
                      <VillageItem key={index}>{village}</VillageItem>
                    ))}
                  </VillageList>
                </CityItem>
              ))}
            </CityList>
          </Division>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Section15;