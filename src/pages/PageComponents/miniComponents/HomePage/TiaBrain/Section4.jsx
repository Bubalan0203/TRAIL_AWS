import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
import img1 from '../../../../../assets/img2.avif';

const Section5 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const details = [
    { id: 1, text: 'Indian education prioritizes theory over practical learning, stifling creativity, while foreign countries emphasize practical-based learning and encourage creativity.' },
    { id: 2, text: 'In India, education is often seen as a formality, with a focus on obtaining degrees in specific fields regardless of actual learning, while foreign education values the learning process itself.' },
    { id: 3, text: 'Foreign education curricula incorporate a wide range of subjects including arts and sports, fostering holistic development, whereas Indian education typically emphasizes academic studies with little room for extracurricular activities.' },
    { id: 4, text: 'In Dubai, primary and secondary education is free and compulsory by law, contrasting with India where education has become a lucrative business with privatization and coaching institutes.' },
    { id: 5, text: 'Indian students are often pressured into pursuing careers in engineering or medicine, while arts and sports are considered secondary options, limiting their choices, whereas foreign countries prioritize students\' interests in selecting their field of study.' },
    { id: 6, text: 'In India, students often choose streams based on job prospects and societal trends rather than personal interest, while foreign countries admit students based on their chosen field of interest.' },
    { id: 7, text: 'Indian education relies heavily on memorization and theoretical knowledge, while foreign education emphasizes practical implementation and critical thinking.' },
    { id: 8, text: 'The Indian education system lags in adopting new technologies and updating curricula, while foreign countries regularly update their education systems to align with technological advancements and industry needs.' },
    { id: 9, text: 'Indian students place high value on grades and certificates, often aiming for admission into prestigious institutions like IITs and IIMs, whereas foreign countries prioritize skill development over institutional reputation.' },
    { id: 10, text: 'There is a need for systemic change in the Indian education system to prioritize practical learning, creativity, and individual interests, along with a shift in societal mindset to value diverse career paths and skills over traditional academic achievements.' },
  ];

  return (
    <ProductDetailsContainer>
      <div className="product-details">
        <div className="background-image" role="img" aria-label="Help image representing training models"></div>
        <div className="content">
          <h3>Difference between Indian and Foreign Education System</h3>
          <Slider {...settings} className="details">
            {details.map((detail) => (
              <div key={detail.id} className="detail">
                <h6>{detail.id}.</h6>
                <p>{detail.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </ProductDetailsContainer>
  );
};

const ProductDetailsContainer = styled.div`
  height:80vh;!important
  width: 100%;
  color: white;
  font-family: Helvetica;
  padding-bottom:40px;

  .product-details {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height:100vh;!important
    text-align: center;
    overflow: hidden;
    padding: 20px;
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${img1}) no-repeat center center/cover; /* Use imported image here */
    filter: blur(8px);
    z-index: -1;
  }

  .content {
    position: relative;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    width: 90%;
    max-width: 2100px;
  }

  .content h3 {
    color: #f00d88;
    text-align:center;
  }

  .details {
    display: flex;
    justify-content: center;
    padding: 40px;
  }

  .detail {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    text-align: left;
    height:300px; /* Fixed height for the cards */
    margin: 0 15px; /* Added margin to create space between the cards */
    box-sizing: border-box;
  }

  .slick-slide {
    padding: 0 15px; /* Added padding to ensure spacing between slides */
  }

  .detail h6 {
    margin: 0;
    font-size: 20px;
    color: #f00d88;
  }

  .detail p {
    margin: 10px 0 0;
    font-size:19px;
  }

  /* Custom styles for slick slider arrows */
  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    width: 50px;
    height: 50px;
    color: #b24185c2;
  }

  .slick-prev {
    left: -60px; /* Positioning to the left side */
  }

  .slick-next {
    right: -60px; /* Positioning to the right side */
  }

  .slick-prev::before,
  .slick-next::before {
    font-size: 40px;
    color: white;
  }

  @media (max-width: 1200px) {
    .content {
      width: 95%;
      padding: 15px;
    }
  }

  @media (max-width: 1024px) {
    .slick-prev {
      left: -40px; /* Adjust positioning for smaller screens */
    }

    .slick-next {
      right: -40px; /* Adjust positioning for smaller screens */
    }

    .detail {
      height: 280px; /* Adjusted height for smaller screens */
    }

    .detail h3 {
      font-size: 22px;
    }

    .detail p {
      font-size: 15px;
    }
  }

  @media (max-width: 768px) {
    .content {
      width: 100%;
      padding: 10px;
    }

    .details {
      padding: 20px;
    }

    .detail {
      height: 260px; /* Adjusted height for smaller screens */
      margin: 0 10px;
    }

    .slick-prev,
    .slick-next {
      width: 40px;
      height: 40px;
    }

    .slick-prev::before,
    .slick-next::before {
      font-size: 30px;
    }

    .slick-prev {
      left: -30px;
    }

    .slick-next {
      right: -30px;
    }

    .detail h3 {
      font-size: 20px;
    }

    .detail p {
      font-size: 14px;
    }
  }

  @media (max-width: 578px) {
    .content {
      padding: 5px;
    }

    .details {
      padding: 10px;
    }

    .detail {
      height: 240px; /* Adjusted height for smaller screens */
      margin: 0 5px;
      padding: 15px;
    }

    .slick-prev,
    .slick-next {
      width: 30px;
      height: 30px;
    }

    .slick-prev::before,
    .slick-next::before {
      font-size: 20px;
    }

    .slick-prev {
      left: -20px;
    }

    .slick-next {
      right: -20px;
    }

    .detail h3 {
      font-size: 18px;
    }

    .detail p {
      font-size: 13px;
    }
  }

  @media (max-width: 428px) {
    .content {
      padding: 5px;
    }

    .details {
      padding: 5px;
    }

    .detail {
      height: 220px; /* Adjusted height for smaller screens */
      margin: 0 5px;
      padding: 10px;
    }

    .slick-prev,
    .slick-next {
      width: 25px;
      height: 25px;
    }

    .slick-prev::before,
    .slick-next::before {
      font-size: 18px;
    }

    .slick-prev {
      left: -15px;
    }

    .slick-next {
      right: -15px;
    }

    .detail h3 {
      font-size: 16px;
    }

    .detail p {
      font-size:12px;
    }
  }
`;

export default Section5;
