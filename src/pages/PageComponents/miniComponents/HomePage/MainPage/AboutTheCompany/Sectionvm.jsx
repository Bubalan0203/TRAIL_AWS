import React from 'react';
import styled from 'styled-components';
import img1 from '../../../../../../assets/mainpage/aboutthecompany/mimg1.jpg';
import img2 from '../../../../../../assets/mainpage/aboutthecompany/mimg2.jpg';
import img3 from '../../../../../../assets/mainpage/aboutthecompany/mimg3.jpg';
import img4 from '../../../../../../assets/mainpage/aboutthecompany/mimg4.jpg';
import img5 from '../../../../../../assets/mainpage/aboutthecompany/mimg1.jpg';

// Styled Components
const Container = styled.div`
  width: 100%;
  padding: 20px;
  overflow-y: hidden;
  margin-top: 150px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    margin-top: 50px;
  }
`;

const Section = styled.div`
  margin-bottom: 50px;
  margin-right: 30px;
 

  @media (max-width: 1310px) {
    margin-left: 100px;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    margin-left: 50px;
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  @media (min-width: 1310px) {
  margin-left: 200px;
  }
`;

const Heading = styled.h2`
  color: #333;
  max-width: 400px;
  width: 100%;
  font-size: 50px;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 30px;

 @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  flex: 1;
  padding: 10px;
  font-size: 1.2em;
  max-width: 800px;
  width: 100%;
  margin-left: -40px;

  
  @media (max-width: 1024px) {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    font-size:1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
  width: 100%;
  margin-left: -80px;

  @media (min-width: 1024px) and  (max-width: 1480px){
    margin-left: 10px;
  }

    @media (max-width: 1024px) {
    margin-left: 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 240px;
  height: 250px;
  margin: 10px;
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: 480px) {
    width: 80%;
    height: 220px;
    margin: 5px 0;
  }
  
`;

const Sectionv = styled.div`
  margin-bottom: 50px;
  background-color: black; /* light blue background */
  padding: 50px 2px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const VisionBackgroundText = styled.h1`
  position: absolute;
  top: 5%;
  left: 63%;
  transform: translate(-50%, -50%);
  font-size: 350px;
  color: rgba(0, 0, 0, 0.1); /* light grey background text */
  white-space: nowrap;
  z-index: 0;

  @media (max-width: 1024px) {
    font-size: 200px;
    left: 50%;
    display:none;
  }

  @media (max-width: 768px) {
    font-size: 150px;
    left: 50%;
  }

  @media (max-width: 480px) {
    font-size: 100px;
    top: 10%;
  }
`;

const Headingv = styled.h2`
  color: white;
  max-width: 400px;
  width: 100%;
  font-size: 50px;
  padding-right:20px;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Contentv = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-left: 200px;

  @media (max-width: 1024px) {
    margin-left: 50px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    flex-direction: column;
  }
  
   @media (min-width: 480px) {
     margin-right:30px;
  }

  @media (min-width: 1160px) and  (max-width: 1300px) {
    margin-left: 100px;
  }

 @media (min-width: 900px) and  (max-width: 1160px) {
    margin-left: 40px;
  }

`;

const Textv = styled.div`
  flex: 1;
  padding: 10px;
  font-size: 1.2em;
  max-width: 700px;
  width: 100%;
  margin-left: 0;
  margin-right: 20px;
  color: white;

  @media (max-width: 1024px) {
    font-size: 1em;
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Imagesv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1700px;
  width: 100%;
  margin-left: -10px;

  @media (max-width: 1024px) {
    margin-left: 2px;
  } 
     @media (max-width: 480px) {
    margin-left: -1px;
  } 

`;

const Imagev = styled.img`
  width: 500px;
  height: 380px;
  margin: 0px;
  object-fit: cover;
  border-radius: 20px;
  justify-content: center;

  @media (max-width: 1024px) {
     width:490px;
     height: auto;
     margin-top:40px;
  }
 @media (max-width: 768px) {
     width:380px;
     height: auto;
  }
     @media (max-width: 480px) {
     width:280px;
     height: auto;
  }
`;

const Sectionw = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;
  padding: 0 20px;
`;

const Headingw = styled.h2`
  color: #333;
  font-size: 50px;
  text-align: center;
  margin-bottom: 20px;


  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;



const Textw = styled.div`
  font-size: 19px;
  max-width: 700px;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const WhyChooseUsContent = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 1.2em;
  max-width: 700px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 1em;
  }
`;

// Component
const Sectionvm = () => {
  return (
    <Container>
      {/* Our Mission Section */}
      <Section>
        <Content>
          <Heading>Our Mission</Heading>
          <Text>
            To discover, nurture, and promote talent across diverse fields by providing access to resources, personalized guidance, mentorship, and opportunities. Through strategic partnerships and innovative programs, we aim to empower aspiring talents to realize their full potential and become leaders in their respective industries.         
          </Text>
        </Content>
        <Images>
          <Image src={img1} alt="Image 1" />
          <Image src={img2} alt="Image 2" />
          <Image src={img3} alt="Image 3" />
          <Image src={img4} alt="Image 4" />
        </Images>
      </Section>

      {/* Our Vision Section */}
      <Sectionv>
        <Contentv>
          <div>
            <Headingv>Our Vision</Headingv>
            <Textv>
              To empower individuals by cultivating their unique talents and fostering a community where potential thrives. To revolutionize cognitive enhancement through cutting-edge neurotechnologies, empowering individuals to unlock their full cognitive potential and lead more fulfilling lives. Aspiration to leverage advanced neuroscience to enhance cognitive abilities, emphasizing empowerment and personal fulfillment as key outcomes for their customers or stakeholders.
            </Textv>
          </div>
          <Imagesv>
            <Imagev src={img5} alt="Image 5" />
          </Imagesv>
        </Contentv>
      </Sectionv>

      {/* Why You Should Choose Us Section */}
      <Sectionw>
        <WhyChooseUsContent>
          <Headingw>Why You Should <br/>Choose Us</Headingw>
          <Textw>
            Choose us to revolutionize cognitive enhancement through advanced neurotechnologies, empowering you to unlock your full potential and lead a more fulfilling life with unparalleled support and guidance.
          </Textw>
        </WhyChooseUsContent>
      </Sectionw>
    </Container>
  );
}

export default Sectionvm;
