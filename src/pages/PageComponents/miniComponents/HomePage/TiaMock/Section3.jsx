import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

const TiaBrain = () => {
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, 300); // Delay before animation starts
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const cardData = [
    {
      title: 'Enhanced Cognitive Abilities',
      text: 'Learning a new language acts as a workout for your brain, enhancing neuroplasticity, which helps form new connections between neurons and strengthens nervous system links.',
    },
    {
      title: 'Personal Growth and Improved Self-Confidence',
      text: 'Tackling the challenges of learning a new language fosters resilience and a sense of achievement. This process nurtures a growth mindset.',
    },
    {
      title: 'Easier Traveling',
      text: 'Knowing the local language makes traveling smoother by enabling direct communication with locals for directions, restaurant recommendations, and everyday conversations.',
    },
    {
      title: 'More Opportunities for Social Connections',
      text: 'Learning a new language increases your chances of forming new social connections, both romantic and platonic, as it expands the pool of people you can communicate with.',
    },
    {
      title: 'More Employment Opportunities',
      text: 'Proficiency in a second language can advance your career and financial prospects. Many job postings require candidates fluent in specific languages, as companies expand globally. This skill provides a competitive advantage.',
    },
    {
      title: 'Broadening Your Perspective',
      text: 'Language learning deepens your understanding and appreciation of different cultures, customs, and traditions. Different languages offer unique expressions and idioms that reflect diverse cultural values.',
    },
  ];

  const cardsPerPage = 6;

  const chunkedCards = [];
  for (let i = 0; i < cardData.length; i += cardsPerPage) {
    chunkedCards.push(cardData.slice(i, i + cardsPerPage));
  }

  return (
    <>
      <Section3>
        <Container className="my-5">
          <h1 className="text-center mb-4">Benefits of Learning a New Language</h1>
          <Carousel
            interval={null}
            indicators={false}
            controls={false}
            prevIcon={
              <span
                aria-hidden="true"
                className="carousel-control-prev-icon custom-prev"
              />
            }
            nextIcon={
              <span
                aria-hidden="true"
                className="carousel-control-next-icon custom-next"
                style={{ maxWidth: '1400px' }}
              />
            }
          >
            {chunkedCards.map((chunk, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {chunk.map((card, idx) => (
                    <Col key={idx} sm={12} md={6} lg={4} className="mb-4">
                      <Card
                        className="h-100 bg-dark text-white card-item"
                        ref={addToRefs}
                      >
                        <Card.Body>
                          <Card.Title>{card.title}</Card.Title>
                          <Card.Text>{card.text}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </Section3>
    </>
  );
};

const Section3 = styled.div`
  background-color: #0f0f12; /* Secondary color */
  overflow: hidden;
  color: #fff;

  .card {
    border-radius: 15px;
    transition: transform 0.5s ease-out, background-color 0.5s ease-out, opacity 0.5s ease-out;
    border: 2px solid #333; /* Border color */
    opacity: 0;
    transform: translateY(50px);
  }

  .card.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover {
    transform: scale(0.9);
    background-color: #b24185c2 !important;
  }

  .card-title {
    font-size: 1.2rem !important;
    color: #f00d88;
  }

  .card-text {
    font-size: 1.2rem !important;
  }

  .btn-link {
    font-size: 0.875rem !important;
    text-decoration: none;
    color: #b3b3b3;
  }

  .btn-link:hover {
    color: white;
  }

  .container {
    max-width: 1200px;
  }

  h1 {
    color: #f00d88;
    font-size: 2.5rem !important;
  }

  .bg-dark {
    background-color: #0f0f12 !important;
  }

  @media (max-width: 991px) {
    .card-title {
      font-size: 1rem !important;
    }
    h1 {
      font-size: 1.4rem !important;
    }
    .card-text {
      font-size: 0.9rem !important;
    }
    .card {
      border-radius: 20px;
    }
    .card:hover {
      transform: scale(0.9) !important;
      background-color: #b24185c2 !important;
    }
  }

  @media (max-width: 768px) {
    .card-title {
      font-size: 1rem !important;
    }
    h1 {
      font-size: 1.2rem !important;
    }
    .card-text {
      font-size: 0.9rem !important;
    }
    .card {
      border-radius: 10px;
    }
    .card:hover {
      transform: scale(0.9) !important;
      background-color: #b24185c2 !important;
    }
  }

  @media (max-width: 576px) {
    .card-title {
      font-size: 1rem !important;
    }
    h1 {
      font-size: 1rem !important;
    }
    .card-text {
      font-size: 0.8rem !important;
    }
    .card {
      border-radius: 10px;
    }
    .card:hover {
      transform: scale(0.9) !important;
      background-color: #b24185c2 !important;
    }
  }
`;

export default TiaBrain;
