import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import img1 from '../../../../../assets/Live/education.jpeg';
import img2 from '../../../../../assets/Live/exam.jpg';
import img3 from '../../../../../assets/Live/scholoastic1.jpeg';
import img4 from '../../../../../assets/Live/scholastic2.jpeg';
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
              <h1>Central Board of Secondary Education (CBSE)</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img ref={setNode1} src={img1} alt="Osmo Action 4" />
            </div>
            <div className="col-lg-6">
              <div className="container1">
                <h2>CBSE Education</h2>
                <p>The Central Board of Secondary Education (CBSE) is one of the most prestigious and preferred educational boards in India. CBSE provides a healthy education environment that fosters mental development in students. The board is known for its comprehensive syllabus and well-structured exam pattern, offering students a detailed understanding of the entire curriculum.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="container1">
                <h2>CBSE Exam Pattern</h2>
                <p>The CBSE exam pattern emphasizes a balanced assessment of theoretical knowledge and practical skills. It includes multiple-choice questions, short and long answer questions, and practical evaluations in science subjects. Continuous and Comprehensive Evaluation (CCE) ensures regular assessment through formative and summative exams, fostering a holistic learning approach.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <img ref={setNode2} src={img2} alt="Image 2" />
            </div>
          </div>
          <div className="row">
          <div className="col-lg-6">
              <img ref={setNode3} src={img3} alt="Image 3" />
            </div>
            <div className="col-lg-6">
              <div className="container1">
                <h2>Scholastic Assessment</h2>
                <p>Students are assessed on core academic areas, including subjects like social science, science, maths, and languages.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="container1">
                <h2>Co-scholastic Assessment</h2>
                <p>This includes activities such as games, sports, art, music, and craftwork, essential for the holistic development of students. These activities aim to keep students healthy and fit, enhancing their overall learning experience.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <img ref={setNode4} src={img4} alt="Image 4" />
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
    padding: 40px 40px;
    background-color: #0f0f12;
  }

  .Section6 {
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    background-color: #0f0f12;
  }

  h1, h2 {
    color: #f00d88;
    text-align: left;
    font-size: 3.2rem;
    font-weight: normal; /* Ensuring headings are not bold */
  }

  p {
    font-family: Helvetica;
    color: #d3d3d3;
    text-align: left;
    font-size: 21px;
    line-height: 28px;
    margin-top: 25px;
    font-weight: normal; /* Ensuring paragraphs are not bold */
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
    border-radius: 0;
    padding: 40px;
    margin-bottom: 10px;
    text-align: left;
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
      font-size: 18px;
      line-height: 24px;
    }

    .container1 {
      padding: 0;
    }

    h1 {
      font-size: 1.4em;
    }

    h2 {
      font-size: 1.2em;
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
      font-size: 16px;
      line-height: 24px;
    }

    .container1 {
      padding: 0;
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
`;

export default Section6;
