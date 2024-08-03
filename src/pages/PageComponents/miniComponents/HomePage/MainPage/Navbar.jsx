import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { TextField, Button } from '@mui/material';
import { useLocation,useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider,styled as muiStyled } from '@mui/material/styles';
import img1 from '../../../../../assets/mainpage/limg1.jpg'; // Import your images
import img2 from '../../../../../assets/mainpage/limg2.jpg';
import img3 from '../../../../../assets/mainpage/limg3.jpg';
import img4 from '../../../../../assets/mainpage/limg4.jpg';
import img5 from '../../../../../assets/mainpage/limg5.jpg';
import logo from '../../../../../assets/img2.avif';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faBars, faTimes,  faEye, faEyeSlash  } from '@fortawesome/free-solid-svg-icons';
import img from '../../../../../assets/mainpage/logo.png';



const Navbar = ({ scrollToSection, section15Ref,ref}) => {
   const navigate = useNavigate();
    const location = useLocation();
    const [neurosurgeryDropdown, setNeurosurgeryDropdown] = useState(false);
    const [companyDropdown, setCompanyDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
      }, 3000); // Change image every 3 seconds

      return () => {
        clearInterval(interval);
      };
    }, []); // Empty dependency array ensures effect runs only once on mount
    


    const handleFranchiseClick = (event) => {
      event.preventDefault(); // Prevent the default link behavior
      scrollToSection(section15Ref); // Scroll to Section15
  };



  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    const openModal = () => {
      setModalOpen(true);
    };

    const closeModal = () => {
      setModalOpen(false);
    };



    const toggleNeurosurgeryDropdown = () => {
        setNeurosurgeryDropdown(!neurosurgeryDropdown);
    };

    const toggleCompanyDropdown = () => {
        setCompanyDropdown(!companyDropdown);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleNeurosurgeryMouseEnter = () => {
        if (window.innerWidth > 1024) {
            setNeurosurgeryDropdown(true);
        }
    };

    const handleNeurosurgeryMouseLeave = () => {
        if (window.innerWidth > 1024) {
            setNeurosurgeryDropdown(false);
        }
    };

    const handleCompanyMouseEnter = () => {
        if (window.innerWidth > 1024) {
            setCompanyDropdown(true);
        }
    };

    const handleCompanyMouseLeave = () => {
        if (window.innerWidth > 1024) {
            setCompanyDropdown(false);
        }
    };

    const handleLinkClick = (e, section) => {
      e.preventDefault(); // Prevent default navigation behavior
      scrollToSection(section);
    };


    return (
        <NavbarContainer>
            <Logo1 src={img} alt="logo1" />
            <LinksContainer className={mobileMenuOpen ? 'show' : ''}>
                <Link href="/">Home</Link>
                <Link>
                    <div
                        className="navbar-link"
                        onClick={toggleNeurosurgeryDropdown}
                        onMouseEnter={handleNeurosurgeryMouseEnter}
                        onMouseLeave={handleNeurosurgeryMouseLeave}
                    >
                       Our Products
                        <DropdownIcon icon={neurosurgeryDropdown ? faAngleUp : faAngleDown} />
                        <DropdownMenu className={`dropdown-menu ${neurosurgeryDropdown ? 'show neurosurgery-dropdown' : ''}`}>
                            <DropdownRow>
                                <DropdownItem>
                                    <a href="/tiabrain">
                                        <h4>TIA BRAIN</h4>
                                        <p>TIA BRAIN enhances children's focus, discipline, and memory, revealing hidden talents and addressing behavioral and health issues, bringing relief to parents.</p>
                                    </a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a href="/tiaedge">
                                        <h4>TIA EDGE</h4>
                                        <p>TIA EDGE provides high-quality education tailored for competitive exams in Government, Insurance, and Banking sectors, highlighting job security and work-life balance as significant advantages.</p>
                                    </a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a href="/tiaent">
                                        <h4>TIA ENTREPRENEURSHIP</h4>
                                        <p>TIA Entrepreneurship empowers individuals with risk tolerance, leadership skills, and adaptability to innovate, lead teams, and seize market opportunities in starting and growing businesses.</p>
                                    </a>
                                </DropdownItem>
                            </DropdownRow>
                            <DropdownRow>
                                <DropdownItem>
                                    <a href="/tialive">
                                        <h4>TIA LIVE TUTOR</h4>
                                        <p>TIA LIVE TUTOR addresses educational challenges by offering personalized online tutoring across India, ensuring individual attention and academic support for improved student performance.</p>
                                    </a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a href="/tiamedia">
                                        <h4>TIA MEDIAS</h4>
                                        <p>TIA MEDIAS offers hands-on learning in film and visual communication, catering to beginners, students, and enthusiasts alike, fostering practical skills in writing, directing, editing, and more.</p>
                                    </a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a href="/tiamock">
                                        <h4>TIA MOCK</h4>
                                        <p>TIA MOCK promotes language learning for enhanced cognitive abilities, personal growth, resilience, and seamless travel experiences by fostering fluency and cultural understanding.</p>
                                    </a>
                                </DropdownItem>
                            </DropdownRow>
                            <DropdownRow>
                                <DropdownItem>
                                    <a href="/tiaplay">
                                        <h4>TIA PLAY</h4>
                                        <p>TIA PLAY focuses on nurturing children's safety, independence, international outlook, and development of good character and habits, preparing them for a smooth transition to primary education.</p>
                                    </a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a href="/tiashewin">
                                        <h4>TIA SHE WIN</h4>
                                        <p>TIA SHE WIN supports and empowers women in creating, managing, and growing businesses, contributing to economic growth and social progress through entrepreneurship.</p>
                                    </a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a href="/tiatest">
                                        <h4>TIA TEST HUB</h4>
                                        <p>TIA TEST HUB provides extensive practice and preparation for over 1250 competitive exams, offering access to years of question papers and instant scoring to enhance academic readiness.</p>
                                    </a>
                                </DropdownItem>
                            </DropdownRow>
                        </DropdownMenu>
                    </div>
                </Link>

               {location.pathname === '/' && (
              <Link href="/" onClick={handleFranchiseClick}>Franchise</Link>
                )}


                <Link href="/gallery">Gallery</Link>



        <Link>
        <div
          className="navbar-link"
          onClick={toggleCompanyDropdown}
          onMouseEnter={handleCompanyMouseEnter}
          onMouseLeave={handleCompanyMouseLeave}
        >
          Company
          <DropdownIcon icon={companyDropdown ? faAngleUp : faAngleDown} />
          <DropdownMenu className={`company-dropdown ${companyDropdown ? 'show' : ''}`}>
            <DropdownRow>
              <DropdownItemCompany>
                <DropdownItemCom><a href="/about?section=about-us">About Us</a></DropdownItemCom>
                <DropdownItemCom><a href="/about?section=founders">Founders</a></DropdownItemCom>
                <DropdownItemCom><a href="/about?section=mission">Vision & Mission</a></DropdownItemCom>
                <DropdownItemCom><a href="/about?section=contact-us">Contact Us</a></DropdownItemCom>
              </DropdownItemCompany>
            </DropdownRow>
          </DropdownMenu>
        </div>
      </Link>
                
                <BookSimulation href="#" onClick={openModal}>Login</BookSimulation>
            </LinksContainer>
            
            <MobileMenuToggle onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
            </MobileMenuToggle>

            <ThemeProvider theme={theme}>
      <div>
        {isModalOpen && (
          <ModalOverlay>
            <Modal>
              <LeftPanel>
                <ImageOverlay>
                  <Image src={imageArray[currentImageIndex]} alt="Carousel Image" />
                  <WelcomeText>
                    <h2> Goal Of True Education</h2>
                    <p>TALENT INITIATORS AND ACCELERATORS </p>
                  </WelcomeText>
                </ImageOverlay>
              </LeftPanel>
              <RightPanel>
                <CloseButton onClick={closeModal}>X</CloseButton>
                <Logo src={img} alt="Logo" />
                <LoginForm>
                  <Title>Login to your Account</Title>
                  <InputWrapper>
                    <TextField
                      id="username"
                      label="User Name"
                      variant="filled"
                      fullWidth
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <div style={{ position: 'relative' }}>
                      <TextField
                        id="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        variant="filled"
                        fullWidth
                      />
                      <div
                        onClick={togglePasswordVisibility}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          right: '10px',
                          transform: 'translateY(-50%)',
                          cursor: 'pointer',
                           fontSize: '13px'
                        }}
                      >
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                      </div>
                    </div>
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
        </NavbarContainer>
        
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

const Title = styled.h2`
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


const NavbarContainer = styled.div`
    width: 100%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    z-index: 1000;
    font-family: Arial, sans-serif;

    @media (max-width: 1024px) {
        padding: 1rem;
    }
`;

const Logo1 = styled.img`
    width: 100px;
    height: 50px;
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  cursor: pointer;
  font-size: 15px;
  margin-left: auto;

  &.show {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #000;
    position: absolute;
    top: 80px;
    left: 0;
    padding: 20px 0;
    z-index: 1000;
    align-items: center;
    max-height: 80vh;
    overflow-y: auto;
  }

  @media (max-width: 1024px) {
    display: none;
    width: 100%;
    background-color: #000;
    position: absolute;
    top: 80px;
    left: 0;
    padding: 20px 0;
    z-index: 1000;

    &.show {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      max-height: 80vh;
      overflow-y: auto;
    }
  }
`;


const DropdownIcon = styled(FontAwesomeIcon)`
    margin-left: 5px; /* Adjust the margin to create the desired gap */
`;

const Link = styled.a`
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    justify-content: center; // Center the links horizontally
    align-items: center; // Center items vertically
   
    &:hover {
        color: #FF007F;
    }

    @media (max-width: 1024px) {
        padding: 0px 13px;
        width: 100%; // Take full width on mobile
         // Center text in mobile view
    }
`;



const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  border-radius: 8px;
  padding: 10px;
  width: auto;
  z-index: 1000;
  background-color: #FDE1ED;
  margin-top: 1px;

  &.neurosurgery-dropdown {
    left: 170px; /* Adjust as needed */
    right: 10%;

     @media (min-width: 1280px) and (max-width: 1380px) {
      left: 120px;
      right: 7%;
    }
      @media (min-width: 1200px) and (max-width: 1280px) {
      left: 80px;
      right: 5%;
    }
    @media (min-width: 1100px) and (max-width: 1200px) {
      left: 80px;
      right: 5%;
    }
       @media (min-width: 1024px) and (max-width: 1100px) {
      left: 80px;
      right: 4%;
    }
  }

  &.show {
    display: block;
  }

  @media (max-width: 1024px) {
    position: static;
    width: 100%;
    max-height: none; /* Ensure dropdown is fully visible */
  }
`;

const DropdownRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    border-radius: 15px solid #ddd;
     flex-basis: calc(33.33% - 20px);

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 0;
        width: auto;
        margin-right:20px;
    }
`;

const DropdownItem = styled.div`
    flex-basis: calc(33.33% - 20px);
    margin: 8px;
    padding: 1rem;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    color: #333;
    

    &:hover {
        background-color: #9999;
        color: #FF007F; /* Text color changes to pink on hover */
    }

    a {
        text-decoration: none;
        color: #333;

        &:hover {
            color: #000; /* Link text color changes to pink on hover */
        }

         @media (max-width: 1024px) {
            color: #333;

             &:hover {
            color: #FF007F; /* Link text color changes to pink on hover */
        }
        }
    }


    h4 {
        margin: 0;
        margin-bottom: 0.5rem;
        font-size: 19px;
         font-weight: 590;

         @media (max-width: 1024px) {
            font-size: 12px;
        }
            @media (min-width: 1024px) and (max-width: 1180px) {
            font-size: 14px;
        }
    }

    p {
        margin: 0;
        font-size: 13px;

        @media (max-width: 1024px) {
            margin: 5px 0 0;
            font-size: 10px;
        }
             @media (min-width: 1024px) and (max-width: 1200px) {
            font-size: 12px;
        }
    }
`;

const DropdownItemCompany = styled.div`
    width: auto;
    background-color: #fff;
    font-size: 16px;
    height:auto;
    border-radius:6px;
   

     @media (max-width: 1024px) {
        background-color:white;
        width:auto;
         margin-right:-19px;
         font-size: 12px;
    }
`;

const DropdownItemCom = styled.div`
    margin: 0;
    text-align:center;

    a {
        text-decoration: none;
        color: black;
        display: block;
        padding: 1px;
        margin-left: 0px;
        padding:10px;

    }

    &:hover {
        background-color:#999;
        color: black;
    }
        
`;

const MobileMenuToggle = styled.button`
    display: none;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    right: 1rem;

    @media (max-width: 1024px) {
        display: block;
        
    }
`;

const BookSimulation = styled(Link)`
    background-color: #f149b0;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    margin-left:340px;

    &:hover {
        background-color: #8a0c62;
        color: #fff;
    }
         
    @media (max-width: 1024px) {
        width:30%;
        height:30px;
        font-size:15px;
        padding:5px 8px;
        margin-left:0px;
        justify-content: center; // Center the links horizontally
        align-items: center;
        text-align:center;
    }


@media  (min-width: 2000px) and (max-width: 2500px) {
        margin-left:600px;
        margin-right:0;
    }

     @media  (min-width: 1900px) and (max-width: 2000px) {
        margin-left:540px;
        margin-right:0;
    }
     @media  (min-width: 1800px) and (max-width: 1900px) {
        margin-left:490px;
        margin-right:0;
    }
    @media  (min-width: 1700px) and (max-width: 1800px) {
        margin-left:450px;
        margin-right:0;
    }
 @media  (min-width: 1600px) and (max-width: 1700px) {
        margin-left:420px;
        margin-right:0;
    }
    @media  (min-width: 1570px) and (max-width: 1600px) {
        margin-left:380px;
        margin-right:0;
    }
    @media  (min-width: 1500px) and (max-width: 1570px) {
        margin-left:360px;
        margin-right:0;
    }
    @media  (min-width: 1450px) and (max-width: 1500px) {
        margin-left:320px;
        margin-right:0;
    }
     @media  (min-width: 1380px) and (max-width: 1450px) {
        margin-left:300px;
        margin-right:0;
    }
         @media  (min-width: 1310px) and (max-width: 1380px) {
        margin-left:270px;
        margin-right:0;
    }
    @media  (min-width: 1260px) and (max-width: 1310px) {
        margin-left:240px;
        margin-right:0;
    }
         @media  (min-width: 1210px) and (max-width: 1260px) {
        margin-left:220px;
        margin-right:0;
    }
         @media  (min-width: 1170px) and (max-width: 1210px) {
        margin-left:200px;
        margin-right:0;
    }
         @media  (min-width: 1110px) and (max-width: 1180px) {
        margin-left:170px;
        margin-right:0;
    }
        @media  (min-width: 1060px) and (max-width: 1110px) {
        margin-left:140px;
        margin-right:0;
    }
         @media  (min-width: 1025px) and (max-width: 1060px) {
        margin-left:130px;
        margin-right:0;
    }


`;

export default Navbar;