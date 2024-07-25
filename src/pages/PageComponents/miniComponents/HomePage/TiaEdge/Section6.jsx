import React, { useState, useRef, useEffect } from 'react';
import Image1 from '../../../../../assets/Edge/Intelligence.jpg';
import Image2 from '../../../../../assets/Edge/Data.jpg';
import Image3 from '../../../../../assets/Edge/English.jpg';
import Image4 from '../../../../../assets/Edge/awareness.jpeg';
import Image5 from '../../../../../assets/Edge/Computer.jpg';
import Image6 from '../../../../../assets/Edge/Effective.jpeg';

const CarouselExample = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const totalItems = 6; // Updated to 6 slides
  const [hoverNext, setHoverNext] = useState(false);
  const [hoverPrev, setHoverPrev] = useState(false);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const slides = [
    {
      image: Image1,
      content: (
        <>
          <h2 style={{ textAlign: 'center', color: '#f00d88', fontSize: '2rem' }}>General Intelligence and Reasoning Ability</h2>
          <p style={{ fontSize: '1.2rem' }}>
            Reasoning is a critical part of almost all competitive exams and is divided into:
          </p>
          <ul style={{ fontSize: '1rem' }}>
            <li><strong>Logical Reasoning or Verbal Reasoning:</strong> Focuses on the ability to think logically and solve problems based on the given information.</li>
            <li><strong>Non-Verbal Reasoning:</strong> Involves solving problems using visual and spatial reasoning skills.</li>
          </ul>
        </>
      )
    },
    {
      image: Image2,
      content: (
        <>
          <h2 style={{ textAlign: 'center', color: '#f00d88', fontSize: '2rem' }}>Data Interpretation and Quantitative Aptitude</h2>
          <p style={{ fontSize: '1.2rem' }}>
            This section is known for its complexity and length, covering:
          </p>
          <ul style={{ fontSize: '1rem' }}>
            <li><strong>Word Problems:</strong> Requires basic arithmetic and mathematical skills.</li>
            <li><strong>Graphs (Bar, Line, Pie Chart, etc.):</strong> Interpretation of data presented in graphical form.</li>
            <li><strong>Simplification:</strong> Simplifying mathematical expressions to find the correct answer.</li>
          </ul>
        </>
      )
    },
    {
      image: Image3,
      content: (
        <>
          <h2 style={{ textAlign: 'center', color: '#f00d88', fontSize: '2rem' }}>English Language/Verbal Ability</h2>
          <p style={{ fontSize: '1.2rem' }}>
            The English section is often challenging due to similar answer choices and limited preparation resources. Key areas to focus on include:
          </p>
          <ul style={{ fontSize: '1rem' }}>
            <li><strong>Grammar:</strong> Tenses, prepositions, conjunctions, nouns, etc.</li>
            <li><strong>Voice and Speech:</strong> Active and passive voice, direct and indirect speech.</li>
          </ul>
          
        </>
      )
    },
    {
      image: Image4,
      content: (
        <>
          <h2 style={{ textAlign: 'center', color: '#f00d88', fontSize: '2rem' }}>General Awareness and Current Affairs</h2>
          <p style={{ fontSize: '1.2rem' }}>
            This section has an extensive syllabus and includes:
          </p>
          <ul style={{ fontSize: '1rem' }}>
            <li><strong>General Knowledge/Static GK:</strong> Facts and information that do not change.</li>
            <li><strong>Current Affairs:</strong> Recent events from the past 4-5 months, covering various fields such as history, geography, politics, and banking awareness.</li>
          </ul>
         
        </>
      )
    },
    {
      image: Image5,
      content: (
        <>
          <h2 style={{ textAlign: 'center', color: '#f00d88', fontSize: '2rem' }}>Computer Knowledge</h2>
          <p style={{ fontSize: '1.2rem' }}>
            Though not heavily weighted, this section is easy to score. It includes basic computer literacy and general knowledge about computers. Candidates can secure good marks with minimal effort by understanding fundamental computer concepts.
          </p>
        </>
      )
    },
    {
      image: Image6,
      content: (
        <>
          <h2 style={{ textAlign: 'center', color: '#f00d88', fontSize: '2rem' }}>Effective Preparation Strategies</h2>
          <p style={{ fontSize: '1.2rem' }}>
            To ensure thorough preparation, candidates should:
          </p>
          <ul style={{ fontSize: '1rem' }}>
            <li><strong>Focus on Weak Areas:</strong> Identify and spend extra time on subjects where improvement is needed.</li>
            <li><strong>Maintain a Positive Attitude:</strong> Stay optimistic and resilient throughout the preparation process.</li>
            <li><strong>Monitor Progress:</strong> Regularly assess which sections require more attention and adjust the study plan accordingly.</li>
          </ul>
        </>
      )
    }
  ];

  const buttonStyle = {
    border: 'none',
    width: '60px',
    height: '60px',
    fontSize: '24px',
    cursor: 'pointer',
    backgroundColor: '#f00d88',
    color: 'white',
    transition: 'all 0.3s ease',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Helvetica',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    outline: 'none',
  };

  const hoverStyleNext = hoverNext ? {
    transform: 'scale(1.1)',
    backgroundColor: '#d00c70',
  } : {};

  const hoverStylePrev = hoverPrev ? {
    transform: 'scale(1.1)',
    backgroundColor: '#d00c70',
  } : {};

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '95%',
      maxWidth: '1100px',
      backgroundColor: '#fff',
      padding: '10px',
      boxSizing: 'border-box',
      margin: '0 auto',
      fontFamily: 'Helvetica'
    }}>
      <div className="header" style={{
        fontSize: '1.3rem',
        color: '#000',
        fontFamily: 'Helvetica'
      }}>
        <h1>Exam Preparation Tips</h1>
      </div>
      <div style={{
        overflow: 'hidden',
        width: '100%',
        marginBottom: '20px'
      }}>
        <div ref={carouselRef} style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          willChange: 'transform'
        }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide" style={{
              minWidth: '100%',
              padding: '20px',
              boxSizing: 'border-box',
              backgroundColor: '#fff',
              margin: '20px 0',
              fontFamily: 'Helvetica'
            }}>
              <div className="slide-content" style={{
                display: 'flex',
                alignItems: 'flex-start',
                boxSizing: 'border-box',
                padding: '20px',
                borderRadius: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                fontFamily: 'Helvetica'
              }}>
                <img src={slide.image} alt="" style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  marginRight: '0',
                  marginBottom: '20px',
                  borderRadius: '20px'
                }} />
                <div style={{
                  width: '90%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  fontFamily: 'Helvetica',
                  marginLeft: '20px'
                }}>
                  {slide.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginTop: '0'
      }}>
        <button
          id="prev"
          onClick={handlePrevClick}
          onMouseEnter={() => setHoverPrev(true)}
          onMouseLeave={() => setHoverPrev(false)}
          style={{
            ...buttonStyle,
            marginRight: '20px',
            ...hoverStylePrev
          }}
        >
          ⟵
        </button>
        <button
          id="next"
          onClick={handleNextClick}
          onMouseEnter={() => setHoverNext(true)}
          onMouseLeave={() => setHoverNext(false)}
          style={{
            ...buttonStyle,
            marginLeft: '20px',
            ...hoverStyleNext
          }}
        >
          ⟶
        </button>
      </div>
      <style>
        {`
          @media (max-width: 900px) {
            .slide-content {
              flex-direction: column !important;
              align-items: center !important;
            }
            .slide-content img {
              width: 100% !important;
              height: auto !important;
              margin-right: 0 !important;
              margin-bottom: 20px !important;
            }
            .slide-content div {
              width: 100% !important;
            }
            .header {
              margin-top: 10px !important;
            }
            .header h2 {
              font-size: 20px !important; // Smaller font size for small devices
            }
            .header {
              font-size: 1rem !important;
            }
            h1 {
              font-size: 20px !important; // Smaller font size for small devices
            }
            .header h2 {
              font-size: 20px !important; // Larger font size for small devices
            }

            .buttonStyle{
             bottom:50px;
            }
          }
          @media (min-width: 900px) {
            .header h2 {
              font-size: 34px !important; // Larger font size for large devices
            }
            .header {
              font-size: 1.3rem !important; // Larger font size for large devices
            }
            h1 {
              font-size: 36px !important; // Larger font size for large devices
            }
            .slide-content div {
              font-size: 20px !important; // Larger font size for large devices
            }
            .slide-content .quote {
              font-size: 60px !important; // Larger font size for large devices
            }
            .slide-content .name {
              font-size: 18px !important; // Larger font size for large devices
            }
          }
        `}
      </style>
    </div>
  );
};

export default CarouselExample;
