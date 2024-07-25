import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faBook, faQuestionCircle, faClipboardList, faFileAlt, faUsers, faCogs, faSitemap, faBlog, faNewspaper, faPaperclip, faAddressBook, faLink, faHandshake } from '@fortawesome/free-solid-svg-icons';
import CompanyLogo from '../../../../../assets/mainpage/logo.png';// Adjust this path
import { TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider, styled as muiStyled } from '@mui/material/styles';
import img1 from '../../../../../assets/mainpage/limg1.jpg'; // Import your images
import img2 from '../../../../../assets/mainpage/limg2.jpg';
import img3 from '../../../../../assets/mainpage/limg3.jpg';
import img4 from '../../../../../assets/mainpage/limg4.jpg';
import img5 from '../../../../../assets/mainpage/limg5.jpg';
import img from '../../../../../assets/mainpage/tia-removebg-preview.png';


const FooterContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 40px 20px;
`;

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 220px;
  margin: 20px 10px;

  &:first-child {
    flex: 2;
  }

  @media (max-width: 991px) {
    margin: 10px 0;
  }
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 8px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.2s;
    margin-left: 8px;

    &:hover {
      color: #f149b0;
    }
  }

  svg {
    margin-right: 8px;
  }
`;

const ProductsList = styled(List)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const Logoo = styled.img`
  height: 40px;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 24px;
    transition: color 0.2s;

    &:hover {
      color: #ccc;
    }
  }

  @media (max-width: 991px) {
    margin-top: 10px;
  }
`;

const BookButton = styled.button`
  background-color: #f149b0;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #8a0c62;
    color: #fff;
  }
@media (max-width: 991px) {
  margin-top:35px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    padding: 8px 16px;
  }
`;

const HorizontalLine = styled.hr`
  border: 1px solid #333;
  margin: 20px 0;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CompanyInfo = styled.div`
  p {
    margin: 0;
  }

  @media (max-width: 991px) {
    margin-bottom: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #fff;
    margin-left: 10px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #f149b0;
    }

    &:not(:last-child) {
      margin-right: 10px;
      position: relative;

      &:after {
        content: "|";
        position: absolute;
        right: -10px;
        color: #fff;
      }
    }
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const Footer = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount



  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <FooterContainer>
      <Columns>
        <Column>
          <Title>Our Products</Title>
          <ProductsList>
            <ListItem><a href="/tiabrain"><FontAwesomeIcon icon={faCogs} />Tia Brain</a></ListItem>
            <ListItem><a href="/tiaedge"><FontAwesomeIcon icon={faClipboardList} />Tia Edge</a></ListItem>
            <ListItem><a href="/tiaent"><FontAwesomeIcon icon={faFileAlt} />Tia Entrepreneurship</a></ListItem>
            <ListItem><a href="/tialive"><FontAwesomeIcon icon={faCogs} />Tia Live Tutor</a></ListItem>
            <ListItem><a href="/tiatest"><FontAwesomeIcon icon={faBook} />Tia Test Hub</a></ListItem>
            <ListItem><a href="/tiamock"><FontAwesomeIcon icon={faPaperclip} />Tia Mock</a></ListItem>
            <ListItem><a href="/tiashewin"><FontAwesomeIcon icon={faQuestionCircle} />Tia She Win</a></ListItem>
            <ListItem><a href="/tiamedia"><FontAwesomeIcon icon={faUsers} />Tia Medias</a></ListItem>
            <ListItem><a href="/tiaplay"><FontAwesomeIcon icon={faUsers} />Tia Play</a></ListItem>
          </ProductsList>
        </Column>

        <Column>
          <Title>Gallery</Title>
          <List>
            <ListItem><a href="/gallery"><FontAwesomeIcon icon={faLink} />Images & Videos</a></ListItem>
          </List>
        </Column>

        <Column>
          <Title>Company</Title>
          <List>
            <ListItem><a href="/about"><FontAwesomeIcon icon={faBlog} />About Us</a></ListItem>
            <ListItem><a href="/about"><FontAwesomeIcon icon={faNewspaper} />Our Mission</a></ListItem>
            <ListItem><a href="/about"><FontAwesomeIcon icon={faClipboardList} />Help</a></ListItem>
            <ListItem><a href="/about"><FontAwesomeIcon icon={faClipboardList} />Contact Us</a></ListItem>
           
          </List>
        </Column>

        <Column>
          <Title>Contact Us</Title>
          <List>
            <ListItem><FontAwesomeIcon icon={faSitemap} />3008 Switzerland</ListItem>
            <ListItem><a href="mailto:info@surgeonslab.com"><FontAwesomeIcon icon={faEnvelope} />info@Tiait.com</a></ListItem>
          </List>
        </Column>

        <Column>
          <Title>Call us on</Title>
          <List>
            <ListItem><FontAwesomeIcon icon={faPhone} />EMEA: <a href="tel:+41798392964">+41 798392964</a></ListItem>
            <ListItem><FontAwesomeIcon icon={faPhone} />AMERICAS: <a href="tel:+16174305282">+1 617 430 5282</a></ListItem>
            <ListItem><FontAwesomeIcon icon={faPhone} />APAC: <a href="tel:+918610513927">+91 8610513927</a></ListItem>
          </List>
        </Column>
      </Columns>
      <SocialContainer>
        <Logoo src={CompanyLogo} alt="Company Logo" />
        <SocialIcons>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaLinkedin /></a>
        </SocialIcons>
        <BookButton  href="#" onClick={openModal}>Login</BookButton>
      </SocialContainer>
      <HorizontalLine />
      <BottomSection>
        <CompanyInfo>
          <p>&copy; 2024 TIA. All rights reserved.</p>
        </CompanyInfo>
        <Links>
        
          <a href="#">Privacy Policy</a>
         
        </Links>
      </BottomSection>

      <ThemeProvider theme={theme}>
      <div>
       
        {isModalOpen && (
          <ModalOverlay>
            <Modal>
              <LeftPanel>
                <ImageOverlay>
                  <Image src={imageArray[currentImageIndex]} alt="Carousel Image" />
                  <WelcomeText>
                    <h2>Welcome to our new website</h2>
                    <p>Events will be displayed here</p>
                  </WelcomeText>
                </ImageOverlay>
              </LeftPanel>
              <RightPanel>
                <CloseButton onClick={closeModal}>X</CloseButton>
                <Logo src={img} alt="Logo" /> {/* Add the logo */}
                <LoginForm>
                  <Titlee>Login to your Account</Titlee>
                  <InputWrapper>
                    <TextField
                      id="username"
                      label="User Name"
                      variant="filled"
                      fullWidth
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <TextField
                      id="password"
                      label="Password"
                      type="password"
                      variant="filled"
                      fullWidth
                    />
                  </InputWrapper>
                  <ButtonWrapper>
                    <LoginButtonStyled>Login</LoginButtonStyled>
                  </ButtonWrapper>
                </LoginForm>
              </RightPanel>
            </Modal>
          </ModalOverlay>
        )}
      </div>
    </ThemeProvider>


    </FooterContainer>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#a70e6e', // Pink color
    },
    text: {
      primary: '#ffffff', // White color for input text
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          color: '#ffffff', // White color for input text
          backgroundColor: '#333', // Initial background color
          '&:hover': {
            backgroundColor: '#444', // Background color on hover
          },
          '&.Mui-focused': {
            backgroundColor: '#555', // Background color when focused
          },
          '& .MuiFilledInput-underline:before': {
            borderBottomColor: '#ffffff', // Initial underline color white
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#a70e6e', // Underline color on hover
          },
          '&.Mui-focused:before': {
            borderBottomColor: '#a70e6e', // Underline color when focused
          },
        },
        input: {
          color: '#ffffff', // White color for input text
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ffffff', // White color for label
          '&.Mui-focused': {
            color: '#a70e6e', // Pink color for label when focused
          },
        },
      },
    },
  },
});
const imageArray = [img1, img2, img3, img4, img5]; 


const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
`;

const Modal = styled.div`
display: flex;
background: #141414;
border-radius: 20px;
width: 80%;
max-width: 1000px;
height: 500px;
overflow: hidden;

@media (max-width: 600px) {
flex-direction: column;
width: 90%;
height: auto;
}
`;

const LeftPanel = styled.div`
flex: 1;
background-color: #000;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
position: relative;
border-radius: 20px 0 0 20px;
overflow: hidden;

@media (max-width: 600px) {
border-radius: 20px 20px 0 0;
}
`;

const RightPanel = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
background-color: #000;
color: #fff;
position: relative;
padding: 30px;
border-radius: 0 20px 20px 0;
flex-direction: column;

@media (max-width: 600px) {
border-radius: 0 0 20px 20px;
padding: 20px;
}
`;

const CloseButton = styled.button`
position: absolute;
top: 10px;
right: 10px;
background: transparent;
border: none;
color: #fff;
font-size: 20px;
cursor: pointer;

@media (max-width: 600px) {
top: 5px;
right: 5px;
font-size: 18px;
}
`;

const ImageOverlay = styled.div`
position: relative;
width: 100%;
height: 100%;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 20px 0 0 20px;

@media (max-width: 600px) {
border-radius: 20px 20px 0 0;
}
`;

const WelcomeText = styled.div`
position: absolute;
bottom: 20px;
left: 20px;
color: #fff;
text-align: left;

h2 {
margin-bottom: 10px;
}

p {
margin: 0;
}

@media (max-width: 600px) {
bottom: 10px;
left: 10px;

h2 {
  font-size: 18px;
}

p {
  font-size: 14px;
}
}
`;

const Logo = styled.img`
position: absolute;
top: 20px;
left: 20px;
width: 120px;
height: auto;

@media (max-width: 600px) {
position: relative;
top: auto;
left: auto;
width: 80px;
margin-bottom: 20px; // Add margin-bottom to separate it from the title
}
`;

const LoginForm = styled.div`
background: #000;
padding: 30px;
width: 100%;
max-width: 400px;
display: flex;
flex-direction: column;
align-items: flex-start;

@media (max-width: 600px) {
padding: 20px;
}
`;

const Titlee = styled.h2`
margin-bottom: 20px;
color: #fff;
text-align: left;

@media (max-width: 600px) {
margin-bottom: 10px;
font-size: 18px;
}
`;

const InputWrapper = styled.div`
margin-bottom: 20px;
width: 100%;

@media (max-width: 600px) {
margin-bottom: 10px;
}
`;

const ButtonWrapper = styled.div`
width: 100%;
`;

const LoginButtonStyled = muiStyled(Button)`
width: 100%;
padding: 10px;
border: none;
border-radius: 5px;
background: #a70e6e;
color: #fff;
cursor: pointer;
font-size: 16px;

&:hover {
background: #d41e9f;
}

@media (max-width: 600px) {
padding: 8px;
font-size: 14px;
}
`;




export default Footer;