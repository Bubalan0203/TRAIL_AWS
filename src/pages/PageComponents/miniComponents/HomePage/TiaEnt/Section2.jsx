import React, { useState } from "react";
import styled from "@emotion/styled";
import Image1 from "../../../../../assets/Ent/Flexible.jpeg";
import Image2 from "../../../../../assets/Ent/Autonomy.jpeg";
import Image3 from "../../../../../assets/Ent/Belief.jpg";
import Image4 from "../../../../../assets/Ent/Contribution.jpg";

const buttonData = [
  {
    text: "Flexible Schedule",
    heading: "Freedom to shape your workday.",
    subtext:
      " Entrepreneurs have the freedom to create their own schedules, allowing them to work during their most productive hours or accommodate personal commitments like family time or hobbies. This flexibility contributes to improved mental and physical well-being.",
    image: Image1,
  },
  {
    text: "Autonomy",
    heading: "Directing your own path to success",
    subtext:
      " With complete ownership of their business, entrepreneurs have the autonomy to make decisions and direct their company’s growth. This sense of self-governance fosters motivation and dedication to achieving business success. ",
    image: Image2,
  },
  {
    text: " Personal Beliefs",
    heading: "Turning passion into business purpose",
    subtext:
      " Entrepreneurship offers the opportunity to build a career that aligns with one’s core values and beliefs. Whether it’s promoting environmental conservation or supporting social causes, entrepreneurs can integrate their principles into their business practices",
    image: Image3,
  },
  {
    text: "Development",
    heading: "Embracing challenges for continuous evolution",
    subtext:
      " Running a business requires constant adaptation and learning. Entrepreneurs develop a growth mindset, embracing challenges as opportunities for innovation and improvement. This ongoing professional development prevents stagnation and ensures business relevance. ",
    image: Image4,
  },
];

const TopSection = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);

    const imageElement = document.querySelector(
      ".grid-content .grid-images img"
    );
    const textElement = document.querySelector(".grid-content .grid-text");
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
      <div className="container-top">
        <h1 style={{ color: "#f00d88" }}>Advantages of Entrepreneurship</h1>
        <div className="grid">
          <div className="grid-buttons">
            {buttonData.map((button, index) => (
              <StyledButton
                key={index}
                className={activeButton === index ? "active" : ""}
                onClick={() => handleButtonClick(index)}
              >
                {button.text}
              </StyledButton>
            ))}
          </div>
          <div className="grid-content">
            <div className="grid-images">
              <img
                src={buttonData[activeButton].image}
                alt={`Image ${activeButton + 1}`}
              />
            </div>
            <div className="grid-text">
              <h2>{buttonData[activeButton].heading}</h2>
              <p>{buttonData[activeButton].subtext}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  font-family: Helvetica;

  .container-top {
    text-align: center;
    margin: 0;
    color: white; /* Text color set to white */
  }

  .container-top h4 {
    display: inline-block;
    border: 2px solid gray;
    padding: 2px;
    border-radius: 5px;
  }

  .container-top h1 {
    margin: 0;
    padding-bottom: 25px;
    font-size: 2rem; /* Default font size for larger screens */
  }

  .container-top p {
    margin-bottom: 20px;
    font-size: 1.1rem; 
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
    width: 35rem;
    margin: 10px 10px;
  }

  .grid-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    padding: 0 10px;
  }

  .grid-images {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .grid-images img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    max-width: 100%; /* Ensure the image doesn't exceed the container size */
    max-height: 50vh; /* Set a max height */
    border-radius: 8px;
    object-fit: cover; /* Ensure the image covers the container while maintaining aspect ratio */
  }

  .grid-text {
    text-align: left;
    padding-bottom: 20px;
  }

  .grid-text h2 {
    margin: 0 0 15px 0;
    font-size: 1.5rem;
  }

  .grid-text p {
    text-align: justify;
  }

  .grid-text ul {
    padding-left: 1.2em;
  }

  .grid-text li {
    margin-bottom: 10px;
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
    .container-top h1 {
      font-size: 1.6rem !important; /* Adjust font size for medium screens */
    }

    .grid-buttons {
      width: 30rem;
    }
  }

  @media (max-width: 992px) {
    .container-top h1 {
      font-size: 1.3rem !important; /* Adjust font size for smaller screens */
    }

    .grid-buttons {
      width: 25rem;
    }

    .grid-buttons button,
    .extra-button {
      font-size: 1rem !important; /* Adjust font size for smaller screens */
      padding: 12px; /* Reduce padding for smaller screens */
    }

    .grid-content {
      gap: 15px; /* Reduce gap between image and text for smaller screens */
    }

    .grid-text {
      padding-bottom: 15px; /* Reduce padding for smaller screens */
    }

    .grid-text h2 {
      font-size: 1.2rem; /* Adjust font size for smaller screens */
    }

    .grid-text p {
      font-size: 0.8rem; /* Adjust font size for smaller screens */
    }

    .grid-text .read-more {
      font-size: 0.9rem; /* Adjust button font size for smaller screens */
      padding: 8px 16px; /* Adjust button padding for smaller screens */
    }
  }

  @media (max-width: 768px) {
    .container-top h1 {
      font-size: 1.3rem !important; /* Adjust font size for mobile screens */
    }

    .grid {
      flex-direction: column;
    }

    .grid-content {
      align-items: center;
      padding: 0;
      flex-direction: column; /* Stack image and text vertically */
    }

    .grid-text {
      padding-left: 0;
      text-align: center;
    }

    .grid-buttons {
      margin: 20px 0;
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .container-top h1 {
      font-size: 1.2rem !important; /* Adjust font size for very small screens */
    }

    .grid-buttons button {
      font-size: 1rem !important; /* Adjust font size for buttons on small screens */
      padding: 15px;
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
  color: #000; /* Set text color to black */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-family: Helvetica, sans-serif;
  font-weight: 300;

  &:hover {
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  &.active {
    background-color: #f00d88;
    color: #fff; /* Set text color to white */
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
    padding: 8px;
  }
`;

export default TopSection;
