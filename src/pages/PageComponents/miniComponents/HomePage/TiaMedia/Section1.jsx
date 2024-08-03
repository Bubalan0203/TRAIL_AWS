import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Image1 from '../../../../../assets/Media/Media.jpg'; // Replace with your image path

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
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
                <img src={Image1} alt="Image 1" className="first" />
                <img src={Image1} alt="Image 2" className="second" />
              </div>
            </div>
          </div>
          <div className="text">
            <h1>TIA MEDIA</h1>
            <p>
              The creative expression of an Artist comes to life only with the right tools. TIA MEDIAS aims to prepare students in a realistic and practical way to take up a career in the film industry. Learning to be a filmmaker isn't something that can be taught from a book. Here at TIA MEDIAS you learn-by-doing, through a combination of hands-on experience and visiting tutors who are experts in their fields.
            </p>
            <p>
              You gain experience at writing, lighting, camerawork, editing and directing. Our range of offering includes courses for everybody from a Master artist, students of vis-com or layman with a hobby. It’s a practical lab for a visual communication student. Try a short film, make a TV Ad or create a family documentary. Applicants to MEDIAS do not require any previous experience in the film or television industry.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    min-height: 80vh;
    max-width: 1400px;
    margin: 0 auto;
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
    padding: 20px;
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
    width: 300px;
    height: auto;
    position: relative;
    top: 30px;
    left: -110px;
    z-index: 1;
  }

  .image-with-outline img.second {
    position: absolute;
    width: 300px;
    top: 195px;
    left: 20px;
    z-index: 1;
  }

  .text {
    max-width: 600px;
    opacity: 0;
    animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 1s ease-out forwards;
  }

  .text h1 {
    margin-bottom: 20px;
    color: #f00d88;
    opacity: 0;
    animation: ${({ isVisible }) => (isVisible ? slideIn : 'none')} 1s ease-out forwards;
  }

  .text p {
    margin-bottom: 20px;
    font-size: 1.2rem !important;
    opacity: 0;
    animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 1.5s ease-out forwards;
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
      max-width: 300px;
    }

    .image-with-outline::before {
      border-width: 4px;
      left: 0;
    }

    .image-with-outline img.second {
      top: 150px;
      left: 80px;
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

    .image-with-outline img.second {
      top: 80px;
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
  }
`;

export default App;
