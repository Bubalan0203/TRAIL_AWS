import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
import img1 from '../../../../../assets/img2.avif';

const Section4 = () => {
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
    { id: 1 , text: 'TIA LIVE TUTOR offers both online and home tuition for students from 1st to 12th grade and for competitive exams like JEE, NEET, and others. ' },
    { id: 2, text: 'The platform has a vast network of experienced tutors across India, well-versed in various school boards such as CBSE, ICSE, IGCSE, and state boards' },
    { id: 3, text: 'Tutors understand students needs and tailor their teaching methods accordingly.TIA LIVE TUTORS support team is always available to help students find the right online tutor. ' },
    { id: 4, text: 'The platform provides online and offline classes designed to transform traditionallearning methods.TIA LIVE TUTOR offers content specifically developed for CBSE, ICSE, IGCSE, and state board syllabuses. ' },
    { id: 5, text: 'The platform is committed to providing high-quality education to every child,ensuring equal and fair opportunities.Certified teachers introduce listening, speaking, writing, and reading skills to students .' },
    { id: 6, text: 'TIA LIVE TUTOR aims to make high-quality instruction available to students regardless of their location.Teachers provide timely learning moments and round-the-clock help to students.  ' },
    { id: 7, text: 'Indian education relies heavily on memorization and theoretical knowledge, while foreign education emphasizes practical implementation and critical thinking.' },
    { id: 8, text: 'The platform connects learners with the right tutors at the right time, offeringpersonalized tutoring experiences and real-time progress tracking.TIA LIVE TUTOR eliminates the need for students to travel for tuition. ' },
    { id: 9, text: 'The platform helps students score good marks by providing expert guidance and focusing on areas needing improvement,allowing them to benefit from online coaching at home.' },
  ];

  return (
    <ProductDetailsContainer>
      <div className="container">    
      <div className="header">
            Many students and parents are concerned about education as school teachers often struggle to provide individual attention due to large class sizes and numerous responsibilities. This results in unresolved issues for some students, leading to difficulties in studies and lower exam scores.
            <br />
            <br />
            TIA LIVE TUTOR offers home and online tuition services across India. Their platform provides personalized attention, helping students resolve their issues promptly and improve their academic performance. With top-tier services, TIA LIVE TUTOR ensures that each student receives the support they need to succeed in their studies.
          </div>
        </div>

      <div className="product-details">
        <div className="background-image" role="img" aria-label="Help image representing training models"></div>
        <div className="content">
          <h2>BENEFITS OF TIA LIVE TUTOR</h2>
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
  height:auto;
  width: 100%;
  color: white;
  font-family: Helvetica;

  
.container {
    padding: 20px;
    text-align: center;
  }

  .header {
    margin-bottom: 70px;
    margin-top:50px;
    font-size: 1.2rem;
    font-weight: 700; /* Boldest font weight */
    color: #000;
  }
  .product-details {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height:100vh;
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

  .content h2 {
    color: #f00d88;
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

export default Section4;
