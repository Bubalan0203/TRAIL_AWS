import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../../../../assets/Brain/Drink.jpeg';
import img2 from '../../../../../assets/Brain/Button.jpeg';
import img3 from '../../../../../assets/Brain/Requirement.jpeg';
import vid1 from '../../../../../assets/mainpage/videoooo.mp4'; 
import { useNavigate } from 'react-router-dom';

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

const Section2 = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
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
        <div className="Section2">
          <div className="row">
            <div className="col-lg-12">
              <h1>RESEARCH AND EDUCATION</h1>
              <h2>BRAIN FITNESS</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img ref={setNode1} src={img1} alt="Osmo Action 4" />
            </div>
            <div className="col-lg-6">
              <div className="container1">
                <h2>Drinking more Water</h2>
                <p>Staying hydrated improves brain function and performance. The brain is 85% water, and optimal
                function relies on adequate hydration. Water provides the electrical energy for all brain functions,
                including thought and memory. Brain cells need twice as much energy as other cells, which water
                supplies efficiently. Hydration boosts energy, enhances thinking, and increases creativity. We
                recommend drinking at least a cup of water upon waking to support optimal brain function.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="container1">
                <h2>Brain Buttons</h2>
                <p>This exercise improves blood flow to activate the entire brain. Place one hand over your navel. With
                    the fingertips of the other hand, rub the space between the first and second ribs, just under the
                    collarbones, on either side of the sternum. This stimulates the vestibular system via the solar plexus
                    and the carotid baroreceptors, causing a mild parasympathetic shift.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <img ref={setNode2} src={img2} alt="Image 2" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 video-container">
              <video 
                width="100%" 
                autoPlay 
                loop 
                muted
                playsInline
                ref={videoRef}
              
              >
                <source src={vid1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-lg-6">
              <div className="container1">
                <h2>Deep Breathing</h2>
                <p>Oxygen is crucial for brain function. Although the brain is only 2% of body weight, it receives 15%
                    of cardiac output and 20% of total body oxygen. Deep breathing, involving the diaphragm, helps
                   maintain normal brain function and reduce stress. When you breathe in, your belly should expand,
                    and when you breathe out, it should fall. Many people forget this and use their chest and shoulders,
                    causing shallow breaths that increase stress and anxiety.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="container1">
                <h2>Requirements :</h2>
                <ul>
                  <li>Brain exercise helps people of all ages enhance learning through movement. It focuses on physical activities to boost learning abilities, relaxation, and circulation. Benefits include stress reduction and improved coordination between brain hemispheres</li>
                  <li>No equipment necessary.</li>
                  <li>Effective non-verbal communication.</li>
                  <li>Practical with diverse multi-cultural groups.</li>
                  <li>Suitable for people with physical disabilities.</li>
                  <li>Beneficial for all ages, including children.</li>
                  <li>Enhances listening, reading skills, concentration, and memory, leading to higher academic achievement.</li>
                  <li>Improves blood flow, balance, oxygenation, and overall health for elderly people.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <img ref={setNode3} src={img3} alt="Image 3" />
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  font-family: Helvetica;
  background-color: #0f0f12;
  
  .container {
    padding: 20px 20px;
    background-color: #0f0f12;
  }

  .Section2 {
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
    font-size: 60px;
    white-space: nowrap;
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
    height: 400px;
    border-radius: 0;
    margin-bottom: 10px;
    opacity: 0;
    transition: opacity 1.2s ease-in-out, transform 0.5s ease-in-out;
  }

  img.fade-in {
    opacity: 1;
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
      font-size: 16px;
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

export default Section2;
