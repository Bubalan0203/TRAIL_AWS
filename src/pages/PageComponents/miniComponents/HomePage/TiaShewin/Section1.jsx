import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import img1 from '../../../../../assets/Shewin/Women.jpg';
import img2 from '../../../../../assets/Shewin/Importance.jpeg';


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


    
  }, [entry1, entry2]);

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
            <img ref={setNode1} src={img1}  alt="Osmo Action 4" />
            </div>
            <div className="col-lg-6">
              <div className="container1">
                <h2>Women Entrepreneurship</h2>
                <p>Women entrepreneurship is the process where women create, manage, and develop business enterprises. It encompasses identifying opportunities, developing and executing business strategies, managing financial resources, and taking calculated risks to achieve business objectives. A woman entrepreneur can be defined as a woman or a group of women who innovate, organize, and operate a business enterprise.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="container1">
                <h2>Importance of Women Entrepreneurship</h2> 
                <p>Women entrepreneurship is crucial for creating new jobs and contributing to the social and economic growth of societies. Despite its significance, it remains understudied. The dynamic interaction between gender and culture plays a pivotal role in shaping women's entrepreneurship. This includes gender role expectations, societal cultural dimensions, and the entrepreneurial environment.</p>
              </div>
            </div>
            <div className="col-lg-6">
            <img ref={setNode2} src={img2}  alt="Image 2" />
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
  color: white;

  .container {
    padding: 40px;
  }

  .Section6 {
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1, h2 {
    color: #f00d88;
    text-align: left;
    font-size: 3.2rem;
  }

  p {
    font-family: Helvetica;
    color: #d3d3d3;
    text-align: left;
    font-size: 21px;
    line-height: 28px;
    margin-top: 25px;
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
      font-size: 1.2em;
    }

    h2 {
      font-size: 1.4em;
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
      font-size: 1.3em;
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
