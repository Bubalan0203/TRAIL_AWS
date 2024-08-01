import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import img1 from '../../../../../assets/Edge/Need.webp';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Wrapper ref={ref} isVisible={isVisible}>
      <div className="container">
        <div className="content">
          <div className="images">
            <div className="image-container">
              <div className="image-with-outline">
                <img src={img1} alt="Image 1" className="first" />
                <img src={img1} alt="Image 2" className="second" />
              </div>
            </div>
          </div>
          <div className="text">
            <h4>TIA EDGE</h4>
            <h1>NEED OF TIA EDGE</h1>
            <p>
              TIA-Edge stands as a beacon for aspiring students, offering specialized training for a range of
              competitive exams including NEET, IIT-JEE, NTSE, and Olympiads. Our mission is to empower
              young talents by enhancing their capabilities and capacities, guiding them towards realizing their
              ambitions.
            </p>
            <p>
              This ensures that students receive the best possible preparation to excel in their
              chosen exams. In India, where government jobs are highly sought-after for their stability and
              benefits, TIA-Edge plays a crucial role in equipping candidates with the skills and confidence
              needed to succeed in these competitive sectors.
            </p>
           
            </div>
          </div>
        </div>
      
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  min-height: 80vh;
  max-width: 1400px; /* Increased maximum width */
  margin: 0 auto; /* Centers the container */
  font-family: Helvetica;
}

.content {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}

.images {
  display: flex;
  flex-direction: column;
}

.image-container {
  position: relative;
}

.image-with-outline {
  position: relative;
  padding: 20px; /* Adjust padding as needed */
}

.image-with-outline::before {
  content: "";
  position: absolute;
  top: 30px;
  left: -70px;
  width: 70%;
  height: 170%;
  border: 4px solid #f00d88; /* Changed border color */
  z-index: -1;

  @media (max-width: 1200px) {
 width: 70%;
  height: 150%;
  left: -20px;
}
}

.image-with-outline img.first {
  width: 300px; /* Adjust width as needed */
  height: auto;
  position: relative;
  top: 30px;
  left: -110px;
  z-index: 1;
  
}

.image-with-outline img.second {
  position: absolute;
  width: 300px; /* Adjust width as needed */
  top: 195px; /* Adjust as needed for overlap */
  left: 20px; /* Adjust as needed for horizontal spacing */
  z-index: 1;
}

.text {
  max-width: 600px; /* Increased text width */
  animation: ${props => props.isVisible ? fadeInUp : 'none'} 1s ease-out;
}

.text h4 {
  color: #f00d88; /* Changed color */
  margin-bottom: 10px;
   animation: ${props => props.isVisible ? fadeInLeft : 'none'} 1s ease-out;
}

.text h1 {
  margin-bottom: 20px;
  color: #f00d88;
  animation: ${props => props.isVisible ? fadeInLeft : 'none'} 1s ease-out;
}

.text p {
  margin-bottom: 20px;
  font-size: 1.2rem !important;
  animation: ${props => props.isVisible ? fadeInUp : 'none'} 1.5s ease-out;
}

.experience {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  animation: ${props => props.isVisible ? fadeInUp : 'none'} 2s ease-out;
}

.years-container {
  border: 4px solid #f00d88; /* Changed border color */
  padding: 10px;
  margin-right: 20px;
}

.years {
  font-size: 50px !important;
  font-weight: bold;
}

.details {
  display: flex;
  flex-direction: column;
}

.details span {
  font-size: 18px !important;
}

.read-more {
  background-color: #f00d88; /* Changed background color */
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

@media (max-width: 1200px) {
  .text {
    max-width: 500px !important;
  }
}

@media (max-width: 992px) {
  .text {
    position: relative;
    margin-top: 150px;
  }

  .content {
    flex-direction: column;
    align-items: center;
  }

  .image-with-outline img.first,
  .image-with-outline img.second {
    width: 90%;
    max-width: 300px; /* Adjust width for smaller screens */
  }

  .image-with-outline::before {
    border-width: 4px;
    left: 0;
  }

  .image-with-outline img.second {
    top: 150px; /* Adjust as needed for overlap */
    left: 80px; /* Adjust as needed for horizontal spacing */
  }

  .text h1 {
    font-size: 1.2rem !important;
  }

  .text p {
    font-size: 1rem !important;
  }
}

@media (max-width: 768px) {
  .text {
    text-align: center;
  }

  .experience {
    justify-content: center;
  }

  .image-with-outline img.second {
    top: 80px; /* Adjust for smaller screens */
    left: 50px;
  }

  .text h1 {
    font-size: 1.2rem !important;
  }

  .text p {
    font-size: 1rem !important;
  }
}

@media (max-width: 576px) {
  .text {
    max-width: 100% !important;
  }

  .years-container {
    padding: 5px;
  }

  .years {
    font-size: 40px !important;
  }

  .details span {
    font-size: 16px !important;
  }

  .read-more {
    padding: 8px 16px;
  }

  .text h1 {
    font-size: 1rem !important;
  }

  .text p {
    font-size: 0.9rem !important;
  }
}
`;
