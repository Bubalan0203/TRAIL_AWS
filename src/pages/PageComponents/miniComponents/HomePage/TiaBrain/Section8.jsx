import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import img2 from '../../../../../assets/Brain/Cooperation.jpeg';
import img1 from '../../../../../assets/Brain/Inward.jpeg';
import img3 from '../../../../../assets/Brain/Inquire.jpeg';

import img4 from '../../../../../assets/Brain/Gap.jpg';
import img5 from '../../../../../assets/Brain/Parents.jpeg';
import img6 from '../../../../../assets/Brain/Networking.jpg';
import img8 from '../../../../../assets/Brain/Spend.png';


const Section9 = () => {
  useEffect(() => {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <VipLoginContainer className="container">
      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2 style={{ color: '#f00d88' }}>ART OF PARENTING</h2>
            <p>The allure of technology and media captivates teenagers, surpassing the influence of parents and teachers. Parents worry about raising children in a tech-driven world, while teachers struggle to engage students competing with digital distractions. The phrase “I’ll look it up on the internet” exemplifies mistaking information for knowledge. Parents trust schools to educate their children, but both groups have different focuses—parents on their child, teachers on a group. Collaboration is key: How can parents and teachers better communicate and support each other? Understanding modern parenting pressures is essential. This essay explores these pressures, the dynamics between parents, children, and peers, and envisions effective parenting in the 21st century.</p>
          </div>
          <div className="row gy-4">
            {cardData.map((card, index) => (
              <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay={(index + 1) * 100} key={index}>
                <div className="card-item" style={{ background: '#232e34' }}>
                  <div className="card-content">
                    <div className="card-bg" style={{ backgroundImage: `url(${card.image})` }}></div>
                    <div className="card-body">
                      <h4 className="card-title">{card.title}</h4>
                      <p>{card.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="features section-bg">
        <div className="container" data-aos="fade-up">
          <ul className="nav nav-tabs row g-2 d-flex">
            <li className="nav-item col-12 col-md-4">
              <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                <h4>Looking Inward</h4>
              </a>
            </li>
            <li className="nav-item col-12 col-md-4">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                <h4>Cooperation</h4>
              </a>
            </li>
            <li className="nav-item col-12 col-md-4">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                <h4>Inquire Together</h4>
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane active show" id="tab-1">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                  <h3>Art of Looking Inward</h3>
                  <p className="fst-italic">
                  Parenting begins with looking inward—questioning our expectations and understanding how our own well-being shapes our children’s journey.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Parental education involves introspection into one's role and expectations as a parent.</li>
                    <li><i className="bi bi-check2-all"></i>It requires questioning pressures imposed on children and examining personal psychological, emotional, and spiritual states.</li>
                    <li><i className="bi bi-check2-all"></i>A parent's well-being directly impacts a child's welfare, emphasizing the interconnectedness of parent and child.</li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                  <img src={img1} alt="Logo" className="img-fluid" />
                </div>
              </div>
            </div>

            {/* Tab-2 */}
            <div className="tab-pane" id="tab-2">
              <div className="row">
                <div className="col-lg-6 order-5 order-lg-1 mt-3 mt-lg-0 d-flex flex-column ">
                  <h3>Art of Cooperation</h3>
                  <p className="fst-italic" >
                  Parenting is a partnership where parents and teachers cooperate as equals, nurturing wisdom and confidence to guide our children beyond mainstream influences.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Educating oneself includes understanding and fostering mutual relationships between parents, children, and society.</li>
                    <li><i className="bi bi-check2-all"></i>Parents and teachers should collaborate as equals, nurturing confidence and wisdom outside mainstream influences.</li>
                    <li><i className="bi bi-check2-all"></i>Cooperation ensures consistent support for children's well-being across home and school environments.</li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={img2} alt="Logo" className="img-fluid" />
                </div>
              </div>
            </div>

            {/* Tab-3 */}
            <div className="tab-pane" id="tab-3">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>To Inquire Together</h3>
                  <ul>
                    <li><i className="bi bi-check2-all"></i>Inquiry involves constructive dialogue between parents and teachers to align intentions for the child's benefit.</li>
                    <li><i className="bi bi-check2-all"></i>Dialogues should focus on holistic child welfare rather than blame or minor details.</li>
                    <li><i className="bi bi-check2-all"></i>Prioritize communication with children and teenagers, valuing their insights into their own experiences and needs.</li>
                  </ul>
                  <p className="fst-italic">
                  Parenting thrives on collaboration and introspection, ensuring children flourish with wisdom and support.
                  </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={img3} alt="Logo" className="img-fluid" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </VipLoginContainer>
  );
};

const cardData = [
  { title: 'The Generation Gap: Chasing a Mirage', content: 'The term ‘generation gap’ is one of many gaps we hear about today, such as the information gap and technological gap. It often feels like a chasm that the older generation is racing to leap across, leaving them breathless and anxious. Instead of chasing this mirage, we should rethink our approach and challenge the medias portrayal of entire generations as fundamentally different.', image: img4 },
  { title: 'Spending Time, Spending Money', content: 'Parents face a conflict between home life and careers, using terms like ‘juggling act’ to describe their stress. Market forces favor parents who spend long hours at work, leading some to escape back into the office, worsening the problem. The idea of ‘quality time’ misleads parents into thinking the amount of time spent with children matters less than activities. Studies show parents who spend less time with their children spend more money on them.', image: img8 },
  { title: 'Peers and Parents: Tug of War', content: 'Peer relationships often conflict with family relationships. Peer pressure, defined as doing something because of peers, is often used to explain behavior. Youth seek to define their identities, experiencing separation anxiety and clinging to peer groups, which have expanded globally through media. Despite this, peer influence is not one-sided. Youth develop identities and exercise choice, adopting or rejecting peer behaviors.', image: img5 },
  { title: 'Peer Interaction and Networking', content: 'Technology has changed peer interaction, moving it online and increasing vulnerability to harassment. Social networking sites allow global interaction but can be addictive. Online gaming, particularly popular with boys, operates on partial reinforcement, making it highly addictive. Decreased face-to-face interaction impairs non-verbal communication skills, leading to perceived disrespect.', image: img6 },
];


const VipLoginContainer = styled.div`

  .card-bg {
    background-size: cover;
    background-position: center;
    height:300px;
    width:100%;
    min-height: 100px;
  

    @media(max-width:768px){
     height:200px;
    }
  }
  .img-bg {
    background-size: cover;
    min-height: 200px;
    
  }
  .card-body {
    padding: 0;
    color:#fff;
   
    

  }
  :root {
    --font-default: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-primary: "Roboto", sans-serif;
    --font-secondary: "Work Sans", sans-serif;
    --color-default: #364d59;
    --color-primary: #feb900;
    --color-secondary: #52565e;
    scroll-behavior: smooth;
  }
  body {
    font-family: var(--font-default);
    color: var(--color-default);
    overflow-x: hidden;
    background-color: #0f0f12;
  }
  a {
    color: var(--color-primary);
    text-decoration: none;
  }
  a:hover {
    color: #f00d88;
    text-decoration: none;
  }
  section {
    padding: 80px 0;
    overflow: hidden;
    background-color: #0f0f12;
    color: white;
  }
  .section-bg {
    background-color: #0f0f12;
    color: white;
  }
  .section-header {
    text-align: center;
    padding-bottom: 70px;
    color: white;
  }
  .section-header h2 {
    font-size: 50px;
    font-family: Helvetica;
    font-weight: bold;
    position: relative;
    color: #2e3135;
     @media (max-width:789px) {
      font-size:30px;
     left:0;
     right:10px;
    }
      @media (max-width:389px) {
      font-size:10px;
    
    }
  }
  .section-header h2:before,
  .section-header h2:after {
    content: "";
    width: 50px;
    height: 2px;
    background: var(--color-primary);
    display: inline-block;
  }
  .section-header h2:before {
    margin: 0 15px 10px 0;
  }
  .section-header h2:after {
    margin: 0 0 10px 15px;
  }
  .section-header p {
  justify-content:center;
    align-items:center;
    margin: 0px auto 0px auto;
    font-family: 'Helvetica';
    font-size:18px;
    max-width: 100%; /* Increased width */
  }
  @media (min-width: 1199px) {
    .section-header p {
      max-width: 70%;
    }
  }
  @media (min-width: 991px) and (max-width: 1199px) {
    .section-header p {
      max-width: 80%;
    }
  }
  .constructions .card-bg {
    min-height: 220px;
  }
  .constructions .card-body {
    padding: 30px;
  }
  .constructions .card-body h4 {
    font-size: 20px;
    font-family: Helvetica;
    font-weight: 700;
    color: #fff;
    margin-bottom: 10px;
  }
  .constructions .card-body p {
    line-height: 24px;
    font-size:18px;
    font-family: Helvetica;
    margin-bottom: 0;
  }
  .constructions .card-item {
    margin-top: 30px;
    transition: 0.5s;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
  }
  .constructions .card-item:hover {
    transform: translateY(-10px);
  }
  .constructions .card-item:hover .card-body h4,
 {
    color: #f00d88;
  }
      .constructions .card-item:hover .card-body p{
       color: #fff;
      }
  .constructions .card-item:hover {
    background: #fff;
  }
  .constructions .card-bg:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }
  .features {
    padding: 60px 0;
    background: #232e34;
    color:#fff;
    .nav-tabs {
      border-bottom: 0;
      .nav-item {
        margin-bottom: -1px;
        .nav-link {
          border: 0;
          color: #000;
          background: #666;
          padding: 15px;
          border-radius: 5px;
          text-align: center;
          &:hover {
            color: #f00d88;
          }
          &.active {
            background: #f00d88;
            color: #fff;
          }
        }
      }
    }
    .tab-content {
      .tab-pane {
        padding: 40px 0;
        .img-fluid {
          max-width: 80%;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .nav-tabs .nav-item {
      margin-bottom: 10px;
    }
  }
  .row .col-lg-6 {
    display: flex;
    flex-direction: column;
  }
  .row .col-lg-6 .card-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

}

@media (max-width: 398px) {
  .section-header h2 {
    font-size: 10px !important;
    right:0;
    left:0;
  }
}

    @media (max-width: 768px) {
    .section-header h2 {
      font-size: 20px !important;
    }
    .section-header p {
      font-size: 16px !important;
    }
    .card-title {
      font-size: 20px !important;
    }
    .card-body p {
      font-size: 15px !important;
    }
    .nav-link h4 {
      font-size: 18px !important;
    }
    h3 {
      font-size: 25px !important;
    }
    ul {
      font-size: 15px !important;
    }
  }

  @media (min-width: 769px) {
    .section-header h2 {
      font-size: 45px !important;
    }
    .section-header p {
      font-size: 20px !important;
    }
    .card-title {
      font-size:25px !important;
    }
    .card-body p {
      font-size: 18px !important;
    }
    .nav-link h4 {
      font-size: 23px !important;
    }
    h3 {
      font-size: 40px !important;
    }
    ul {
      font-size: 18px !important;
    }
  }
`;

export default Section9;
