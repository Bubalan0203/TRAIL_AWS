import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Modal } from 'react-bootstrap';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import img1 from '../../../../../assets/Brain/Ancient.jpg';

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

const Section5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalImgSrc, setModalImgSrc] = useState('');
  const [setNode, entry] = useIntersectionObserver({ threshold: 0.9 });

  const cards = [
    {
      title: "Ancient Roots of Learning in India",
      text: "India's educational heritage traces back to antiquity, evidenced by the discovery of written scripts during the Indus Valley Civilization. Despite the script remaining undeciphered, it underscores the importance of education in ancient times."
    },
    {
      title: "Evolution of Education during the Vedic Period",
      text: "Around 1500 BC, the settlement of Aryans in the Gangetic valley marked the beginning of a more sophisticated educational system. This era witnessed the emergence of Hinduism and the oral transmission, and later, the written compilation of the Vedas."
    },
    {
      title: "Institutionalization of Learning in Early Centuries CE",
      text: "In the early centuries of the Christian era, formalized education gained prominence. The study of logic and epistemology became focal points, with philosophical schools like Hindus, Buddhists, and Jains delving into these disciplines. Notably, Jains made significant contributions to epistemology."
    },
    {
      title: "Educational Processes in Ancient India",
      text: "Ancient Indian education revolved around three core processes: Sravana, Manana, and Nidhyasana. Sravana emphasized listening to the teachings of the teacher, Manana encouraged independent contemplation to derive meaning, and Nidhyasana focused on complete assimilation and realization of truth through experiential learning."
    }
  ];

  const handleScroll = (event) => {
    const { deltaY } = event;
    if (deltaY > 0) {
      // Scroll down
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    } else {
      // Scroll up
      setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    }
  };

  const handleShowModal = (content, imgSrc) => {
    setModalContent(content);
    setModalImgSrc(imgSrc);
    setModalShow(true);
  };

  const handleCloseModal = () => setModalShow(false);

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      entry.target.classList.add('hover-effect');
    } else if (entry) {

    }
  }, [entry]);

  return (
    <PageContainer onWheel={handleScroll}>
      <Section6 className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <Title>ANCIENT INDIAN EDUCATION SYSTEM AND VALUES</Title>
            <VerticalCarouselContainer>
              <Arrow top onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)}>
                <FaArrowUp />
              </Arrow>
              <VerticalCarousel activeIndex={activeIndex}>
                {cards.map((card, index) => (
                  <CarouselItem key={index} active={index === activeIndex}>
                    <CustomCard>
                      <CardBody className="custom-scroll">
                        <CardTitle>{card.title}</CardTitle>
                        <CardText>{card.text}</CardText>
                      </CardBody>
                    </CustomCard>
                  </CarouselItem>
                ))}
              </VerticalCarousel>
              <Arrow onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length)}>
                <FaArrowDown />
              </Arrow>
            </VerticalCarouselContainer>
          </div>

          <div className="col-lg-6 col-md-12">
            <LargeCard ref={setNode}>
              <img src={img1} className="card-img-top fade-in" alt="Large card image" />
            </LargeCard>
          </div>
        </div>
      </Section6>

      <Modal show={modalShow} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton className="bg-light border-0 py-2" />
        <Modal.Body className="bg-light text-dark position-relative" style={{ fontSize: '1.2em' }}>
          <img src={modalImgSrc} alt="Modal content" className="img-fluid mb-4" style={{ width: '100%', height: 'auto', maxHeight: '70vh' }} />
          {modalContent}
        </Modal.Body>
      </Modal>
    </PageContainer>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const hoverEffect = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const PageContainer = styled.div`
  background-color: #0f0f12;
  color: white;
  padding: 60px 0;
`;

const Section6 = styled.div`
  padding: 60px;
  width: 100%;

  .custom-scroll {
    height: 250px;
    overflow-y: auto;
    padding-right: 17px;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .custom-scroll::-webkit-scrollbar {
    width: 0;
    display: none;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const VerticalCarouselContainer = styled.div`
  position: relative;
  margin-top: 20px;
  height: 400px;
`;

const VerticalCarousel = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const CustomCard = styled.div`
  background-color: #232e34;
  margin-top: 40px;
  color: #fff;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid #444;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #222;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

const CarouselItem = styled.div`
  position: absolute;
  top: ${(props) => (props.active ? '0' : '50%')};
  opacity: ${(props) => (props.active ? '1' : '0')};
  transition: top 0.5s ease-in-out, opacity 0.5s ease-in-out;
  width: 100%;
`;

const CardBody = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #f00d88;
  text-align: center;
  margin-bottom: 20px;
  animation: fadeInDown 1s ease-in-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 992px) {
    font-size: 2em;
  }
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const CardTitle = styled.h4`
  font-size: 1.5em;
  color: #f00d88;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
  @media (max-width: 576px) {
    font-size: 1em;
  }
`;

const CardText = styled.p`
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
  @media (max-width: 576px) {
    font-size: 0.8em;
  }
`;

const LargeCard = styled.div`
  height: 90%;
  margin-bottom: 20px;
  border-radius: 15px;
  overflow: hidden;
  border: 3px solid #333;
  position: relative;
  margin-left: 10%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1.5s ease-in-out forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    animation: ${fadeIn} 1.5s ease-in-out forwards;
  }

  &.fade-in img {
    opacity: 1;
  }

  &.hover-effect img {
    animation: ${hoverEffect} 5s ;
  }

  @media (max-width: 991px) {
    margin-top: 20px;
    margin-left: 0;
  }
`;

const Arrow = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 1;
  font-size: 1.3em;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 10px;

  ${(props) => (props.top ? 'top: -15px;' : 'bottom: 47px;')}
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export default Section5;
