import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import img1 from '../../../../../assets/Brain/Global.jpg';
import img2 from '../../../../../assets/Brain/Diverse.jpeg';
import img3 from '../../../../../assets/Brain/Personal.jpeg';
import img4 from '../../../../../assets/Brain/Perspective.jpeg';

const useIntersectionObserver = (options) => {
  const [entry, setEntry] = useState(null);
  const [node, setNode] = useState(null);

  const observer = new IntersectionObserver(([entry]) => setEntry(entry), options);

  useEffect(() => {
    const currentNode = node;
    const currentObserver = observer;

    if (currentNode) {
      currentObserver.observe(currentNode);
    }

    return () => {
      if (currentNode) {
        currentObserver.unobserve(currentNode);
      }
    };
  }, [node, observer]);

  return [setNode, entry];
};

function Section6() {
  const [setNode1, entry1] = useIntersectionObserver({ threshold: 0.9 });
  const [setNode2, entry2] = useIntersectionObserver({ threshold: 0.9 });
  const [setNode3, entry3] = useIntersectionObserver({ threshold: 0.9 });
  const [setNode4, entry4] = useIntersectionObserver({ threshold: 0.9 });

  useEffect(() => {
    if (entry1 && entry1.isIntersecting) {
      entry1.target.classList.add('fade-in');
      entry1.target.classList.add('hover-effect');
    } else if (entry1) {
 
    }

    if (entry2 && entry2.isIntersecting) {
      entry2.target.classList.add('fade-in');
      entry2.target.classList.add('hover-effect');
    } else if (entry2) {

     
    }

    if (entry3 && entry3.isIntersecting) {
      entry3.target.classList.add('fade-in');
      entry3.target.classList.add('hover-effect');
    } else if (entry3) {
 
    }

    if (entry4 && entry4.isIntersecting) {
      entry4.target.classList.add('fade-in');
      entry4.target.classList.add('hover-effect');
    } else if (entry4) {

    }
  }, [entry1, entry2, entry3, entry4]);

  return (
    <StyledSection>
      <div className="container">
        <div className="Section6">
          <div className="row">
            <div className="col-lg-12">
              <h1>FOREIGN EDUCATION VS INDIAN EDUCATION</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img ref={setNode1} src={img1} alt="Global Education" />
            </div>
            <div className="col-lg-6">
              <div className="container1">
                <h2>Globally Recognized Qualifications</h2>
                <p>Foreign education provides students with internationally recognized qualifications, which significantly
                  enhance their career prospects upon returning home. These qualifications carry weight in the global job
                  market, opening up a wide range of opportunities for career advancement and success.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="container1">
                <h2>Diverse Educational Opportunities</h2>
                <p>One of the key advantages of foreign education is the plethora of educational possibilities it offers. Students
                 have the freedom to choose from a diverse range of courses that align with their career goals and learning
                  preferences. This diversity ensures that students can pursue a course that best meets their individual needs
                and aspirations.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <img ref={setNode2} src={img2} alt="Diverse Education" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img ref={setNode3} src={img3} alt="Personalized Learning" />
            </div>
            <div className="col-lg-6">
              <div className="container1">
                <h2>Personalized Learning Approach</h2>
                <p>Foreign education emphasizes a personalized and independent learning approach, allowing students to
                develop intellectual skills needed for the global market. Students are encouraged to think critically, solve problems creatively, and take initiative in their learning journey. This approach fosters self-reliance,
                resilience, and adaptability, qualities highly valued in today's competitive world.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="container1">
                <h2>Global Perspective and Skill Development</h2>
                <p>Studying abroad broadens students' perspectives and develops skills essential for thriving in the global
                   economy. Exposure to diverse cultures, languages, and ways of thinking fosters cross-cultural understanding
                   and adaptability. Additionally, students gain valuable skills such as communication, teamwork, and
                    intercultural competence, which are increasingly sought after by employers in a globalized world.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <img ref={setNode4} src={img4} alt="Global Perspective" />
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  font-family: Helvetica;
  background-color: #0f0f12;

  .container {
    padding: 20px 20px;
    background-color: #0f0f12;
  }

  .Section6 {
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
    padding: 20px;
  }

  h1, h2 {
    color: #f00d88;
    text-align: left;
    font-weight: bold;
  }

  h1 {
    font-size: 50px;
  }

  p {
    color: white;
    text-align: left;
    font-size: 18px;
    line-height: 29.5px;
    margin-top: 15px;
  }

  ul {
    color: white;
    text-align: left;
    font-size: 18px;
    line-height: 29.5px;
    margin-top: 15px;
  }

  img {
    width: 100%;
    height: 350px;
    border-radius: 0;
    margin-bottom: 20px;
    opacity: 0;
    transition: opacity 1.2s ease-in-out, transform 0.5s ease-in-out;
  }

  img.fade-in {
    opacity: 2;
  }

  img.hover-effect {
    animation: hoverEffect 5s ;
  }

  @keyframes hoverEffect {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
  }

  .container1 {
    background-color: #0f0f12;
    color: white;
    border-radius: 0;
    padding: 20px;
    margin-bottom: 10px;
    text-align: left;
    font-size: 18px;
    line-height: 28px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 40px;
  }

  .col-lg-6 {
    flex: 1;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .col-lg-6.video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
  }

  @media (max-width: 991px) {
    p {
      font-size: 16px;
      line-height: 20px;
    }
    ul {
      font-size: 14px;
      line-height: 20px;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 0;
      margin-bottom: 20px;
    }

    .container1 {
      padding: 0px;
      font-size: 14px;
      line-height: 20px;
    }

    h1 {
      font-size: 1.2em;
    }

    h2 {
      font-size: 1em;
    }

    .row {
      flex-direction: column;
      align-items: center;
    }

    .col-lg-6 {
      max-width: 100%;
    }
  }

  @media (max-width: 576px) {
    p {
      font-size: 14px;
      line-height: 20px;
    }
    ul {
      font-size: 14px;
      line-height: 20px;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 0;
      margin-bottom: 20px;
    }

    .container1 {
      padding: 0px;
      font-size: 14px;
      line-height: 20px;
    }

    h1 {
      font-size: 1.2em;
    }

    h2 {
      font-size: 1em;
    }

    .row {
      flex-direction: column;
      align-items: center;
    }

    .col-lg-6 {
      max-width: 100%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    p {
      font-size: 16px;
      line-height: 28px;
    }
    ul {
      font-size: 16px;
      line-height: 28px;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 0;
      margin-bottom: 20px;
    }

    .container1 {
      padding: 0px;
      font-size: 16px;
      line-height: 28px;
    }

    h1 {
      font-size: 2em;
    }

    h2 {
      font-size: 1.5em;
    }
  }

  @media (min-width: 769px) and (max-width: 991px) {
    p {
      font-size: 16px;
      line-height: 20px;
    }

    ul {
      font-size: 16px;
      line-height: 20px;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 0;
      margin-bottom: 10px;
    }

    .container1 {
      padding: 0px;
      font-size: 16px;
      line-height: 20px;
    }

    h1 {
      font-size: 2em;
    }

    h2 {
      font-size: 1.5em;
    }
  }
`;

export default Section6;
