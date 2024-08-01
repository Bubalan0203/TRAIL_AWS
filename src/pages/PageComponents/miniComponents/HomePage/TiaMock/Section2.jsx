import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import img1 from '../../../../../assets/Mock/mock.jpeg';
import img2 from '../../../../../assets/Mock/Science.jpeg';
import img3 from '../../../../../assets/Mock/language.jpeg';

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

    
  }, [entry1, entry2, entry3]);

  return (
    <StyledSection>
      <div className="container">
        <div className="Section6">
          <div className="row">
            <div className="col-lg-12">
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
            <img ref={setNode1} src={img1} alt="Osmo Action 4" />
            </div>
            <div className="col-lg-6">
              <div className="container1">
                <h2>TIA MOC</h2>
                <p>Talent Initiators & Accelerators India Private Limited introduces Miracle of Communication & Knowledge (MOC). This program aims to empower individuals to share their ideas globally without reliance on intermediaries. By focusing on tongue-mind coordination, it helps learners effectively use their presence of
                    mind in various situations to learn new languages.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="container1">
                <h2>Science Behind TIA MOC</h2>
                <p>One of the key advantages of foreign education is the plethora of educational possibilities it offers. Students
                 have the freedom to choose from a diverse range of courses that align with their career goals and learning
                  preferences. This diversity ensures that students can pursue a course that best meets their individual needs
                and aspirations.</p>
              </div>
            </div>
            <div className="col-lg-6">
            <img ref={setNode2} src={img2} alt="Image 2" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
            <img ref={setNode3} src={img3} alt="Osmo Action 4" />
            </div>
            <div className="col-lg-6">
              <div className="container1">
                <h2>Need for Learning Multiple Languages</h2>
                <p>Learning a new language significantly benefits the brain, enhancing cultural and cognitive understanding while protecting against neurological degeneration. This valuable skill is accessible to anyone at any age, promoting lifelong learning and mental
                   agility.</p>
              </div>
            </div>
          </div>
          </div>
      </div>
    </StyledSection>
  );
}

const StyledSection = styled.div`
font-family:Helvetica;
background-color:#0f0f12;
  .container {
    padding:40px 40px; /* Padding for the outer container */
    background-color:#0f0f12;
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
  }

  p {
    font-family:Helvetica;
    color: #d3d3d3;
    text-align: left;
    font-size: 21px;
    line-height: 28px;
    margin-top:25px; /* Added to remove margin */
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
    align-items: flex-start; /* Align items to flex-start */
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
    max-width: 100%; /* Adjusted max-width */
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
      flex-direction: column; /* Change flex-direction to column on smaller screens */
      align-items: center; /* Center align items */
    }

    .col-lg-6 {
      max-width: 100%; /* Set max-width to 100% for full width on smaller screens */
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
      flex-direction: column; /* Change flex-direction to column on smaller screens */
      align-items: center; /* Center align items */
    }

    .col-lg-6 {
      max-width: 100%; /* Set max-width to 100% for full width on smaller screens */
    }
  }
`;

export default Section6;
