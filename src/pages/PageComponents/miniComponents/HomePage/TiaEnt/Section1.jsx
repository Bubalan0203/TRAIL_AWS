import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import image1 from '../../../../../assets/img2.avif';
import image2 from '../../../../../assets/img2.avif';
import image3 from '../../../../../assets/img2.avif';
import image4 from '../../../../../assets/img2.avif';

const servicesData = {
  toleranceForRisk: {
    title: 'Tolerance for Risk',
    content: (
      <>
        <strong>Courageous Risk-taking:</strong> Successful entrepreneurs embrace risks associated with starting a business, understanding that calculated risks are necessary for growth and innovation.
        <br />
        <strong>Resilience in Failure:</strong> They learn from failures and setbacks, using them as opportunities to refine strategies and improve future outcomes.
      </>
    ),
    image: image1
  },
  leadershipQualities: {
    title: 'Leadership Qualities',
    content: (
      <>
        <strong>Visionary Leadership:</strong> Entrepreneurs provide a clear vision for their business, inspiring and aligning their team towards common goals.
        <br />
        <strong>Effective Communication:</strong> They communicate effectively, ensuring clarity in goals, roles, and expectations among team members.
        <br />
        <strong>Decision-making Skills:</strong> Entrepreneurs make informed decisions swiftly, balancing risks and opportunities to drive business growth.
      </>
    ),
    image: image2
  },
  openMindedness: {
    title: 'Open-mindedness',
    content: (
      <>
        <strong>Adaptability:</strong> Successful entrepreneurs adapt to changing market conditions and customer needs, evolving their business strategies to stay competitive.
        <br />
        <strong>Innovation:</strong> They constantly seek new ideas and opportunities, remaining open to innovative solutions that can disrupt existing markets or create new ones.
      </>
    ),
    image: image3
  },
  innovative: {
    title: 'Innovative',
    content: (
      <>
        <strong>Creativity:</strong> Entrepreneurs foster creativity within their teams, encouraging out-of-the-box thinking to solve problems and capitalize on opportunities.
        <br />
        <strong>Continuous Improvement:</strong> They innovate continuously, refining products, services, or processes to stay ahead of competitors and meet evolving customer demands.
      </>
    ),
    image: image4
  }
};

const fadeInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0f0f12;
  align-items: center;
  padding: 20px;
  padding-bottom: 90px;
  color: #fff;
  font-family: Helvetica, sans-serif;

  .services-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    width: 90%;
  }

  .services-description {
    text-align: center;
    margin-bottom: 20px;
    max-width: 600px;
  }

  .services-description h2 {
    margin-bottom: 10px;
    color: #f00d88;
    font-size: 2em;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: ${(props) => (props.isVisible ? 'translateY(0)' : 'translateY(-100%)')};
    transition: opacity 2s ease-out, transform 3s ease-out;
    animation: ${(props) => props.isVisible && css`${fadeInTop} 2s ease-out`};
  }

  .services-description p {
    margin: 0;
    font-size: 1.2em;
    line-height: 1.5;
     opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: ${(props) => (props.isVisible ? 'translateY(0)' : 'translateY(-50%)')};
    transition: opacity 2s ease-out, transform 2s ease-out;
    animation: ${(props) => props.isVisible && css`${fadeInLeft} 2s ease-out`};
  }

  .services-tabs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .tabs {
    width: 100%;
  }

  .tab {
    width: 90%;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    text-align: left;
    padding: 10px 0;
    margin: 0 auto;
  }

  .tab-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-size: 1.2em;
    color: #f00d88;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }

  .dropdown-icon {
    font-size: 0.8em;
  }

  .tab-content {
    padding: 10px 20px;
    background-color: #1c1c1f;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .tab-content img {
    max-width: 100%;
    margin-left: 10%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 5px;
    @media (max-width: 1400px) {
      margin-left: 0;
    }
  }

  .tab-content p {
    margin-bottom: 10px;
    font-size: 1.1em;
  }

  @media (min-width: 1028px) {
    .services-container {
      flex-direction: row;
      justify-content: space-between;
    }

    .services-description {
      flex: 1;
      text-align: left;
      margin-right: 40px;
    }

    .services-tabs {
      flex: 1;
      align-items: flex-start;
    }

    .tab {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .services-description h2 {
      font-size: 1.6em;
    }
    .services-description {
      padding: 0 20px;
      font-size: 0.8em;
    }

    .tab-title {
      font-size: 1em;
    }

    .tab-content p {
      font-size: 0.8em;
    }
  }
`;

const Services = () => {
  const [activeTab, setActiveTab] = useState('');
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(activeTab === tab ? '' : tab);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <Wrapper isVisible={isVisible}>
      <div className="services-container">
        <div className="services-description">
          <h2 ref={titleRef}>Tia Entrepreneurship</h2>
          <p>
            Becoming one’s own boss, making one’s own rules, and creating something unique by starting a business is the essence of entrepreneurship. Successful entrepreneurs can create and extract value from researched opportunities by turning them into viable businesses. They possess the ability and desire to establish their own enterprises, recognizing the inherent risks involved but understanding that without risk, there is no reward.
          </p>
        </div>
        <div className="services-tabs">
          <div className="tabs">
            {Object.keys(servicesData).map((tab) => (
              <div key={tab} className="tab" onClick={() => handleTabClick(tab)}>
                <div className="tab-title">
                  {servicesData[tab].title}
                  <span className="dropdown-icon">{activeTab === tab ? '▲' : '▼'}</span>
                </div>
                {activeTab === tab && (
                  <div className="tab-content">
                    <img src={servicesData[tab].image} alt={servicesData[tab].title} />
                    <p>{servicesData[tab].content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
