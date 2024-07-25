import React, { useState, useRef, useEffect } from 'react';
import Image1 from '../../../../../assets/Media/Script.jpg';
import Image2 from '../../../../../assets/Media/Film.jpg';
import Image3 from '../../../../../assets/Media/Spot.jpg';

const CarouselExample = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const totalItems = 3;
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
      quote: "SCRIPT WRITING",
      name: "In MEDIAS we teach you the script writing such as film shooting script, narrative script. It will be trained effectively by our highly talented and experienced trainers."
    },
    {
      image: Image2,
      quote: "FILM MAKING ",
      name: "Filmmaking involves a number of discrete stages such as Development, Pre-production, Production, Post-production and Distribution. Each and every stage will be taught to the students in an effective manner. In MEDIAS we teach you photography, cinematography, editing in the best possible way till you achieve a goal."
    },
    {
      image: Image3,
      quote: "SPOT EXPERIENCE ",
      name: "The benefit of spot experience is you can learn and can get more awareness on new things. We teach how to schedule and organize the programs by our experienced trainers."
    },
    {
      image: Image3,
      quote: "INTERNSHIP PROGRAMS",
      name: "Internship programs are conducted for students to gain more experience and knowledge. Internships enable you take your career plan for a test drive. You’ll gain valuable understanding of your major field and be better able to grasp how your coursework is preparing you to enter your chosen career. You’ll gain confidence and can build your resume."
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
      padding: '20px',
      boxSizing: 'border-box',
      margin: '0 auto',
      fontFamily: 'Helvetica'
    }}>
      <div className="header" style={{
        marginBottom: '50px',
        marginTop: '30px',
        fontSize: '34px !important',  // Larger font size for small devices
        color: '#000',
        fontFamily: 'Helvetica'
      }}>
        <h2 style={{
          fontSize: '20px !important', // Smaller font size for small devices
          marginBottom: '20px',
          color: '#f00d88',
          fontFamily: 'Helvetica'
        }}>BECOME A FILM MAKER</h2>
        Becoming a film director is a dream job for many people. If you're ready and willing to put in the time, have creative vision and an impressive ability to make something out of nothing, then becoming a film director might be the perfect job for you. If this is your dream, then you should go for it!
      </div>
      <h1 style={{
        textAlign: 'center',
        fontSize: '20px !important', // Smaller font size for small devices
        marginBottom: '40px',
        fontFamily: 'Helvetica'
      }}>FILM APPRECIATION COURSE</h1>
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
              borderRadius:'15px',
              backgroundColor: '#fff',
              margin: '20px 0',
              fontFamily: 'Helvetica'
            }}>
              <div className="slide-content" style={{
                display: 'flex',
                alignItems: 'flex-start',
                boxSizing: 'border-box',
                padding: '20px',
                borderRadius:'px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                fontFamily: 'Helvetica'
              }}>
                <img src={slide.image} alt="" style={{
                  width: '50%',
                  height: '300px',
                  objectFit: 'cover',
                  marginRight: '0',
                  marginBottom: '20px'
                }} />
                <div style={{
                  width: '90%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  fontFamily: 'Helvetica',
                  marginLeft: '20px'
                }}>
                  <div style={{
                    fontSize: '20px !important',  // Smaller font size for small devices
                    fontWeight: '900',
                    color: '#f00d88',
                    marginBottom: '-2px',
                    alignSelf: 'flex-start',
                    fontFamily: 'Helvetica'
                  }}>&ldquo;</div>
                  <div style={{
                    fontSize: '18px !important', // Smaller font size for small devices
                    marginBottom: '25px',
                    fontFamily: 'Helvetica',
                    color: '#f00d88'
                  }}>{slide.quote}</div>
                  <div style={{
                    fontSize: '16px !important', // Smaller font size for small devices
                    color: '#000',
                    fontFamily: 'Helvetica'
                  }}>{slide.name}</div>
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
