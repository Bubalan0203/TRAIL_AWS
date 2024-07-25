import React from 'react';
import styled from 'styled-components';
import dir1 from '../../../../../../assets/mainpage/aboutthecompany/dir1.jpg';
import dir2 from '../../../../../../assets/mainpage/aboutthecompany/dir2.jpg';
import dir3 from '../../../../../../assets/mainpage/aboutthecompany/dir3.jpg';
import comp1Background from '../../../../../../assets/mainpage/aboutthecompany/company.jpg';

const trustees = [
    { image: dir1, name: 'Mrs. Sheeba Joseph', title: 'OUR FOUNDER, CEO & Director' },
    { image: dir2, name: 'Mr. Joseph', title: 'Director' },
    { image: dir3, name: 'Ms. Priyadharsini Devaraj', title: 'COO' },
];

const Section3 = () => {
    return (
        <Section>
             <GradientOverlayTop />
             <GradientOverlayBottom />
              <Overlay>
            <Content>
                <Heading>Our Founders</Heading>
                <AppContainer>
                    {trustees.map((trustee, index) => (
                        <TrusteeCard key={index}>
                            <ImageContainer>
                                <TrusteeImage src={trustee.image} alt={trustee.name} />
                            </ImageContainer>
                            <InfoContainer>
                                <TrusteeName>{trustee.name}</TrusteeName>
                                <TrusteeTitle>{trustee.title}</TrusteeTitle>
                            </InfoContainer>
                        </TrusteeCard>
                    ))}
                </AppContainer>
            </Content>
            </Overlay>
        </Section>
    );
};

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    margin-top: 100px;
   background-image: url(${comp1Background});
    background-size: cover;
    background-position: center;
    width:100%;
    height:100vh;

 @media (max-width: 900px) {
         height:auto;
         margin-bottom:80px;

    }
    @media (max-width: 768px) {
         height:auto;
         margin-bottom:80px;

    }
         
`;

const Overlay = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  font-family: 'Roboto', sans-serif;
   top:-120px;
`;

const GradientOverlayTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  z-index: 1;
  height: 90%;
  background: linear-gradient(to bottom, black, transparent);
`;

const GradientOverlayBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  z-index: 1;
  height: 90%;
  background: linear-gradient(to top, black, transparent);
`;




const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    width: 100%;
`;

const Heading = styled.h1`
    color: #fff;
    font-size: 5rem;
    margin-bottom: 20px;
    margin-top: 170px;

      @media (max-width: 768px) {
      font-size: 4rem;
      margin-left:20px;
    }
`;

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 110px;
     color: black;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;

    }
`;

const TrusteeCard = styled.div`
    width: 320px;
    padding-top: 80px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
    margin: 20px;
    position: relative;
    overflow: visible;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (max-width: 1090px) {
       width: 250px;/* Adjust card width for smaller screens */
       margin-bottom:130px;
    }
    
    @media (min-width: 768px) {
      
       margin-bottom:130px;
    }

`;

const ImageContainer = styled.div`
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 290px;
    height: 290px;
    border-radius: 10px;
    overflow: hidden;
    border: 0px solid #fff;
    background-color: #fff;

    @media (max-width: 1090px) {
        width: 230px; /* Adjust card width for smaller screens */
        height: 280px;
    }
`;

const TrusteeImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.2);
        
    }
`;

const InfoContainer = styled.div`
    margin-top: auto;
    padding: 10px 0;
`;

const TrusteeName = styled.h3`
    margin: 10px 0 5px 0;
    font-size: 18px;
    font-weight: bold;
`;

const TrusteeTitle = styled.p`
    margin: 0;
    color: #555;
`;


export default Section3;
