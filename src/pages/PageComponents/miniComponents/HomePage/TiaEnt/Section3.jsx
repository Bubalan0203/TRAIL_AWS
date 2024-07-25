import React, { useState } from "react";
import styled from "@emotion/styled";
import Image1 from "../../../../../assets/Ent/ability.jpg";
import Image2 from "../../../../../assets/Ent/Contribution.jpg";
import Image3 from "../../../../../assets/Ent/living.jpg";
import Image4 from "../../../../../assets/Ent/Network.jpg";

const bottomButtonData = [
  {
    text: "Enhanced Managerial Abilities",
    heading: "Learning leadership through hands-on experience",
    subtext:
      "Managing a business enhances entrepreneurial skills such as leadership, decision-making, and strategic planning. This hands-on experience often leads to personal growth and may inspire further education or training in business management.",
    image: Image1,
  },
  {
    text: "Contribution to Development",
    heading: "Driving growth and creating opportunities",
    subtext:
      "Entrepreneurs stimulate economic growth by investing their own resources, attracting capital, and creating job opportunities within the community. Their businesses contribute to wealth creation and overall economic prosperity.",
    image: Image2,
  },
  {
    text: "Improving Standards of Living",
    heading: "Innovating for better quality of life",
    subtext:
      "Entrepreneurs innovate products and services that meet diverse consumer needs, thereby improving quality of life and fulfilling niche market demands that larger corporations may overlook.",
    image: Image3,
  },
  {
    text: "Networking and Mentorship",
    heading: "Connecting with allies for shared success",
    subtext:
      "Entrepreneurship connects individuals with like-minded professionals, mentors, and industry leaders. These networks provide support, guidance, and potential partnerships that foster business growth and success.",
    image: Image4,
  },
];

const BottomSection = () => {
  const [activeButtonBottom, setActiveButtonBottom] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButtonBottom(index);

    const imageElement = document.querySelector(
      ".grid-content-bottom .grid-images img"
    );
    const textElement = document.querySelector(".grid-content-bottom .grid-text");
    if (imageElement && textElement) {
      imageElement.classList.add("blink");
      textElement.classList.add("blink");
      setTimeout(() => {
        imageElement.classList.remove("blink");
        textElement.classList.remove("blink");
      }, 500);
    }
  };

  return (
    <Container>
      <div className="container-bottom">
        <div className="grid">
          <div className="grid-content-bottom">
            <div className="grid-images">
              <img
                src={bottomButtonData[activeButtonBottom % bottomButtonData.length].image}
                alt={`Image ${activeButtonBottom + 1}`}
              />
            </div>
            <div className="grid-text">
              <h1 className="section-heading">
                {bottomButtonData[activeButtonBottom % bottomButtonData.length].heading}
              </h1>
              <p>
                {bottomButtonData[activeButtonBottom % bottomButtonData.length].subtext}
              </p>
            </div>
          </div>
          <div className="grid-buttons">
            {bottomButtonData.map((button, index) => (
              <StyledButton
                key={index}
                className={activeButtonBottom === index ? "active" : ""}
                onClick={() => handleButtonClick(index)}
              >
                {button.text}
              </StyledButton>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  font-family: Helvetica;

  .container-bottom {
    text-align: center;
    margin: 0;
    color: white; /* Text color set to white */
  }

  .container-bottom h2 {
    margin: 0;
    padding-bottom: 25px;
    font-size: 2rem; /* Default font size for larger screens */
  }

  .container-bottom p {
    margin-bottom: 20px;
    text-align: justify;
  }

  .grid {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px; /* Maximum width of the page */
    margin: 0 auto;
  }

  .grid-buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 30rem;
    margin: 10px 20px;
  }

  .grid-content-bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    padding: 0 10px;
  }

  .grid-content-bottom .grid-images {
    align-self: flex-start;
    width: 100%; /* Make sure the container takes full width */
  }

  .grid-images img {
      width: 100%;
    height: auto; /* Maintain aspect ratio */
    max-width: 100%; /* Ensure the image doesn't exceed the container size */
    max-height: 50vh; /* Set a max height */
    border-radius: 8px;
    object-fit: cover; 
  }

  .grid-text {
    text-align: left;
    padding-bottom: 20px;
  }

  .grid-text .section-heading {
    font-size: 1.8rem !important; /* Adjust the font size as needed */
    font-weight: 600;
    margin-bottom: 10px;
  }

  .grid-text p {
    text-align: justify;
    font-size: 1.1rem;
  }

  .grid-text .read-more {
    background-color: #f00d88;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
  }

  .blink {
    animation: blink-animation 0.5s ease-in-out;
  }

  @keyframes blink-animation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* Media Queries */
  @media (max-width: 1200px) {
    .container-bottom h2 {
      font-size: 1.6rem !important; /* Adjust font size for medium screens */
    }

    .grid-images img {
      width: 100% !important;
    }
  }

  @media (max-width: 992px) {
    .container-bottom h2 {
      font-size: 1.3rem !important; /* Adjust font size for smaller screens */
    }

    .grid-buttons {
      width: 25rem;
    }

    .grid-buttons button,
    .extra-button {
      font-size: 1rem !important; /* Adjust font size for smaller screens */
      padding: 12px !important; /* Reduce padding for smaller screens */
    }

    .grid-images img {
      width: 100%;
      height: auto; /* Ensure the image maintains its aspect ratio */
    }

    .grid-content-bottom {
      gap: 15px; /* Reduce gap between image and text for smaller screens */
    }

    .grid-text {
      padding-bottom: 15px; /* Reduce padding for smaller screens */
    }

    .grid-text .section-heading {
      font-size: 1.2rem !important; /* Adjust font size for smaller screens */
    }

    .grid-text p {
      font-size: 0.8rem !important; /* Adjust font size for smaller screens */
    }

    .grid-text .read-more {
      font-size: 0.9rem !important; /* Adjust button font size for smaller screens */
      padding: 8px 16px !important; /* Adjust button padding for smaller screens */
    }
  }

  @media (max-width: 768px) {
    .container-bottom h2 {
      font-size: 1.3rem !important; /* Adjust font size for mobile screens */
    }

    .grid {
      flex-direction: column;
    }

    .grid-buttons {
      order: 1;
      margin: 20px 0;
      width: 100%;
    }

    .grid-images {
      order: 2;
      align-items: center;
    }

    .grid-content-bottom {
      order: 3;
      align-items: center;
      padding: 0;
    }

    .grid-text {
      padding-left: 0;
      text-align: center;
    }

    .grid-images img {
      width: 100% !important;
      height: auto !important; /* Maintain aspect ratio */
    }

    .grid-buttons button,
    .extra-button {
      font-size: 1rem !important; /* Adjust font size for smaller screens */
      padding: 12px !important; /* Reduce padding for smaller screens */
    }
  }

  @media (max-width: 576px) {
    .container-bottom h2 {
      font-size: 1.2rem !important; /* Adjust font size for very small screens */
    }

    .grid-buttons button {
      font-size: 1rem !important; /* Adjust font size for buttons on small screens */
      padding: 15px !important;
    }

    .grid-images img {
      width: 100% !important;
      height: auto !important; /* Ensure the image maintains its aspect ratio */
    }
  }
`;

const StyledButton = styled.button`
  text-align: left;
  padding: 15px;
  font-size: 1.125rem;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  color:#000;!important
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-family: Helvetica, sans-serif;
  font-weight: 300;
  white-space: nowrap;

  &:hover {
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  &.active {
    background-color: #f00d88;
    color:#fff;!important
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 992px) {
    font-size: 1rem;
    padding: 12px;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px;
    width: 50%;
    margin-left: 25%;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    width: 80%;
    margin-left: 10%;
    padding: 8px;
  }
`;

export default BottomSection;
