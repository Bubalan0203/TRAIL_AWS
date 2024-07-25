import React from "react";
import styled from "styled-components";
import Image1 from '../../../../../assets/Media/Media.jpg'; // Replace with your image path


const App = () => {
  return (
    <Wrapper>
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
            <div className="experience">
               
              <div className="details">
                
            </div>
           </div>
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
}

.text h4 {
  color: #f00d88; /* Changed color */
  margin-bottom: 10px;
}

.text h1 {
  margin-bottom: 20px;
  color: #f00d88;
}

.text p {
  margin-bottom: 20px;
  font-size: 1.2rem !important;
}

.experience {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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
    font-size: 1 rem !important;
  }

  .text p {
    font-size: 0.9rem !important;
  }
}
`;

export default App;
