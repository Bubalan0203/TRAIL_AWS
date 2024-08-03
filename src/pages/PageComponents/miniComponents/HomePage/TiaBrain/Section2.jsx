import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import img1 from '../../../../../assets/Brain/Brain.jpg';
import { CSSTransition } from 'react-transition-group';




const StyledModal = styled(Modal)`

  .modal-dialog {
    max-width: 35%;
    max-height: 70vh;
    margin: auto;
     
    
    @media (max-width: 1200px) {
      max-width: 45%;
      max-height: 65vh;
    }

    @media (max-width: 992px) {
      max-width: 50%;
      max-height: 60vh;
    }

    @media (max-width: 768px) {
      max-width: 50%;
      max-height: 55vh;
    }

    @media (max-width: 576px) {
      max-width: 70%;
      max-height: 50vh;
    }
  }

  .modal-content {
    border-radius:10px;
    color: #fff;
    border: 2px solid #232e34; /* Add this line to set the border */
  }
`;



const CloseButton = styled.button`
  color: #fff;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  position:absolute;
  right:20px;
  top:1px;

  &:hover {
    color: #000;
  }

  @media (max-width: 992px) {
    font-size: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const StyledModalBody = styled(Modal.Body)`
  background:#232e34;
  color: #fff;
  padding: 1.8rem;
  align-items: center;
  
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;

  @media (max-width: 992px) {
    font-size: 0.8rem;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 1rem;
  }

  @media (max-width: 576px) {
    font-size: 0.6rem;
    padding: 0.8rem;
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 90%;
  height: auto;
  max-height: 30vh;
  margin: 0 auto 1rem auto;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 992px) {
    width: 90%;
    max-height: 35vh;
  }

  @media (max-width: 768px) {
    width: 87%;
    max-height: 30vh;
  }

  @media (max-width: 576px) {
    width:70%;
    max-height:20vh;
  }
`;


const TiaBrain = () => {
    const cardData = [
        { title: "What are Brainwaves?", text: "Brainwaves, akin to musical notes, range from the slow, drumbeat-like Delta waves to the fast, flute-like  Gamma waves, reflecting our varying states of consciousness and activity." },
        { title: "Brain Waves: Frequencies To Understand", text: "While all five types of brainwaves are present at any time, the dominant wave reflects our current state of consciousness" },
        { title: "Gamma Waves", text: "Gamma waves, essential for learning and perception, are linked to higher cognitive functions and can be enhanced through meditation" },
        { title: "Beta Waves", text: "Beta waves, associated with conscious thought and logical thinking, increase with stimulants and can lead to stress if excessive." },
        { title: "Alpha Waves", text: "Alpha waves, bridging conscious and subconscious thought, promote deep relaxation and can be hindered by excessive stress." },
        { title: "Theta Waves", text: "Theta waves, associated with deep emotions and creativity, offer benefits when balanced but may lead to depression or suggestibility if overproduced." },
        { title: "Delta Waves", text: "Delta waves, the slowest brainwaves, are crucial for deep, restorative sleep and play a role in unconscious  bodily functions, but abnormalities can affect cognition and awareness." },
        { title: "Are you wondering what kind of brain waves you produce?", text: "Our brain activity encompasses a mix of all brainwave frequencies simultaneously, emphasizing the importance of balance rather than isolated production of specific types for optimal cognitive function." },
        { title: "How do we acheive the balance?", text: "Optimal brain functioning requires both flexibility to adapt to varying demands and resilience to bounce back from challenges, ensuring stability and efficiency in cognitive processes." },
        { title: "So — what do we know so far?", text: "EEG biofeedback enhances brain flexibility and resilience by training various brainwave patterns, promoting balanced activity for optimal performance across different tasks and states." },
        { title: "What stops our brain from having this balance all the time?", text: "Injuries, medications, fatigue, emotional distress, pain, and stress can create persistent patterns of brain activity, akin to chaotic attractors, hindering flexibility and resilience." },
        { title: "DELTA WAVES (.5 TO 3 HZ)", text: "Delta brainwaves, slow and deep like a drumbeat, facilitate deep meditation,  dreamless sleep, and promote healing and regeneration, emphasizing the importance of restorative sleep for overall well-being." },
        { title: "THETA WAVES (3 TO 8 HZ)", text: "Theta brainwaves, prevalent in deep meditation and sleep, serve as a gateway to learning and memory, fostering vivid imagery, intuition, and access to subconscious material, including fears and past experiences." },
        { title: "ALPHA WAVES(8 TO 12 HZ)", text: "Alpha brainwaves, prevalent in quiet, reflective states and meditation, embody the essence of 'the power of now,' fostering mental coordination, calmness, alertness,and learning while promoting mind-body integration." },
        { title: "BETA WAVES (12 TO 38 HZ)", text: "Beta brainwaves, dominant in our waking state, reflect engagement, problem-solving, decision-making, and focused mental activity, with different bands representing varying levels of cognitive processing and energy expenditure." },
        { title: "GAMMA WAVES (38 TO 42 HZ)", text: "Gamma brainwaves, the fastest and most subtle, facilitate simultaneous processing of information across brain areas, associated with states of universal love, altruism, and expanded consciousness, yet their generation and function remain a mystery." },
    ];

    const modalData = [ 
        {content: "At the core of our thoughts, emotions, and behaviors is the communication between neurons in our brains,  producing brainwaves through synchronized electrical pulses. These brainwaves, detected using sensors on the scalp, are categorized into bandwidths to describe their functions but are better seen as a continuous spectrum of consciousness. Brainwaves range from Delta waves, which are slow, loud, and functional, to Gamma waves, which are fast,  subtle, and complex. An analogy is comparing brainwaves to musical notes: low-frequency waves resemble a deep drum beat, while high-frequency waves are like a high-pitched flute. Our brainwaves shift with our  activities and emotions. Dominance of slower waves can make us feel tired or dreamy, whereas higher  frequencies make us feel wired or hyper-alert. ",imgSrc:img1},
        {content:"Before discussing specifics, it's important to understand that when I mention a particular brainwave, I'm referring to its dominance. Throughout the day, your EEG will display all five types of brainwaves simultaneously, but one will dominate depending on your state of consciousness. For instance, if you're awake but have severe ADHD, slower waves (alpha and/or theta) might be more prominent than beta waves. During sleep, slower frequencies are common, but even gamma waves can be involved in REM sleep.",imgSrc:img1},
        {content:"Gamma waves, ranging from 40 Hz to 100 Hz, are crucial for higher processing tasks, learning, memory, and information processing. The 40 Hz gamma wave is particularly important for sensory binding and perception. Individuals with lower gamma activity often face learning disabilities and mental challenges. The frequency range is from 40 Hz to 100 Hz, which is the highest. Too much gamma activity can lead to anxiety, high arousal, and stress. Too little gamma activity can result in ADHD, depression, and learning disabilities. Optimal gamma activity is essential for binding senses, cognition, information processing, learning, perception, and REM sleep. Gamma waves can be increased through meditation",imgSrc:img1},
        {content:"Beta waves, known as high-frequency, low-amplitude brainwaves, are commonly observed when we are awake. They play a role in conscious thought and logical thinking, helping us focus and complete tasks. However, excessive beta activity can lead to stress and anxiety, while too little can result in ADHD, daydreaming, and poor cognition. Beta waves increase with stimulants like caffeine. The frequency range is from 12 Hz to 40 Hz, which is high. Too much beta activity can cause adrenaline, anxiety, high arousal, inability to relax, and stress. Too little beta activity can lead to ADHD, daydreaming, depression, and poor cognition. Optimal beta activity is essential for conscious focus, memory, and problem-solving. Beta waves can be increased through coffee, energy drinks, and various stimulants.",imgSrc:img1},
        {content:"The alpha frequency range serves as a bridge between conscious thinking and the subconscious mind. It induces feelings of deep relaxation and helps us calm down when needed. Stress can lead to alpha blocking, where excessive beta activity inhibits alpha production. This occurs when we become overly aroused. The frequency range is from 8 Hz to 12 Hz, which is moderate. Too much alpha activity can lead to daydreaming, inability to focus, and excessive relaxation. Too little alpha activity can result in anxiety, high stress, insomnia, and OCD. Optimal alpha activity is essential for relaxation. Alpha waves can be increased through alcohol, marijuana, relaxants, and some antidepressants.",imgSrc:img1},
        {content:"Theta waves, ranging from 4 Hz to 8 Hz, are associated with daydreaming and deep emotions. Excessive theta activity may lead to depression and heightened suggestibility due to deep relaxation. However, moderate theta levels can enhance intuition, creativity, and a sense of naturalness. Theta is also important for restorative sleep. The frequency range is from 4 Hz to 8 Hz, which is slow. Too much theta activity can lead to ADHD, depression, hyperactivity, impulsivity, and inattentiveness. Too little theta activity can result in anxiety, poor emotional awareness, and stress. Optimal theta activity is essential for creativity, emotional connection, intuition, and relaxation. Theta waves can be increased through depressants.",imgSrc:img1},
        {content:"Delta waves, the slowest recorded brainwaves (0 Hz to 4 Hz), are most commonly found in infants and young children. They signify deep relaxation and restorative sleep, aiding in unconscious bodily functions like heart rate regulation and digestion. Adequate delta production ensures rejuvenating sleep, but abnormal activity can lead to learning disabilities or diminished conscious awareness, particularly in cases of brain injuries. The frequency range is from 0 Hz to 4 Hz, which is the slowest. Too much delta activity can lead to brain injuries, learning problems, severe ADHD, and impaired thinking. Too little delta activity can result in poor body rejuvenation, diminished brain revitalization, and sleep disturbances. Optimal delta activity is essential for immune system support, natural healing, and restorative sleep. ",imgSrc:img1},
        {content:"Indeed, it's a common misconception to think of producing only one type of brainwave during specific activities, like generating alpha during meditation. In reality, our brain activity involves a blend of all frequencies simultaneously, with some being more prominent depending on the task or state of consciousness. The categories simply help describe the shifts in brain activity we observe during different activities.The important takeaway is balance. Regularly producing too much or too little of any brainwave frequency can lead to various issues. Striving for a balanced mix of brainwave activity is essential for optimal cognitive functioning and overall well-being.",imgSrc:img1},
        {content:"Flexibility and resilience are both crucial for optimal brain functioning. Flexibility allows us to adapt our brain activity to match the demands of different situations. For instance, we need beta waves for focus at work but may benefit from more alpha waves to relax at home or slow down for sleep. When we can't shift our brain activity accordingly, we encounter difficulties. Similarly, after brain injury or trauma, the brain may stabilize by slowing down, but if it remains stuck in this pattern, it can lead to concentration issues and cognitive difficulties.Resilience, on the other hand, is about stability and the ability to bounce back from negative events. Just as resilient individuals are healthier and happier, a resilient brain can recover from unhealthy habits or stressors. ",imgSrc:img1},
        {content:"Achieving both flexibility and resilience in the brain requires access to a variety of different brain states, each characterized by specific patterns and types of brainwave frequencies. EEG biofeedback, also known as neurofeedback, enhances both flexibility and resilience by utilizing EEG to observe brainwave activity. It's crucial to understand neurofeedback as a method for training the behavior of brainwaves rather than promoting one specific type of activity. For overall health and wellness, we require a balance of all brainwave types. However, it's essential for the brain to have the flexibility and resilience to adjust its activity according to the demands of the moment. This adaptability allows us to effectively navigate various tasks and situations throughout our daily lives.",imgSrc:img1},
        {content:"Injury, medications (including alcohol), fatigue, emotional distress, pain, and stress can all create patterns in our brain activity that are difficult to shift. These patterns can be likened to chaotic attractors in chaos theory, where our brain gets stuck in a particular behavior. Being stuck in such a pattern hinders flexibility and resilience, keeping us in a state we don't want to be in and making it challenging to redirect our focus and energy elsewhere. Achieving flexibility and resilience requires breaking free from these patterns and allowing our brain to adapt to different situations and demands.",imgSrc:img1},
        {content:"Delta brainwaves are indeed the slowest but most prominent brainwaves, akin to a deep drum beat in terms of frequency and penetration. They are primarily generated during the deepest states of meditation and dreamless sleep. Delta waves lead to a suspension of external awareness and are associated with empathy. Moreover, this state stimulates healing and regeneration, underscoring the importance of deep restorative sleep in the overall healing process.",imgSrc:img1},
        {content:"Theta brainwaves are most commonly observed during sleep but also prevail during deep meditation. They serve as a gateway to learning and memory, allowing us to focus on internal signals rather than external stimuli. Theta represents a twilight state, experienced briefly as we wake or fall asleep. In this state, we enter a dreamlike realm characterized by vivid imagery, heightened intuition, and access to information beyond our conscious awareness. It's within theta where we store our fears, troubled history, and nightmares.",imgSrc:img1},
        {content:"Alpha brainwaves are prevalent during quiet and flowing thoughts, as well as certain meditative states. They represent the power of now grounding, us in the presentmoment. Alpha serves as the resting state for the brain, fostering mentalcoordination, calmness, alertness, integration of  mind and body, and facilitating learning.",imgSrc:img1}, 
        {content:"Beta brainwaves dominate our waking state of consciousness, especially when we're focused on cognitive tasks and the external environment. Beta activity reflects fastmental engagement, alertness, problem-solving, decision-making, and overall mental activity. It's further divided into three  bands: Low Beta (12-15Hz)corresponds to a state of fast idle or musing, Beta (15-22Hz) indicates high engagement, and Hi-Beta (22-38Hz) signifies highly complex thought, integrating new experiences, high anxiety, or excitement. While beta activity is essential for cognitive function, continual high-frequency processing can be energetically demanding and inefficient for the brain.",imgSrc:img1},
        {content:"Gamma brainwaves are the fastest of all brainwaves, resembling the high-frequency tones of a flute. They are associated with the simultaneous processing of information across different brain regions, facilitating rapid transmission of information. Gamma activity is subtle and requires a quiet mind to access. Initially dismissed as mere brain noise, researchers later discovered its high activity during states of universal love, altruism, and higher virtues.Gamma rhythms play a role in modulating perception and consciousness, vanishing under anesthesia. Their frequency surpasses that of neuronal firing, posing a mystery regarding their generation. The presence of gamma waves is linked to expanded consciousness and spiritual emergence.",imgSrc:img1}
      ];

    const cardsPerPage = 6;

    const chunkedCards = [];
    for (let i = 0; i < cardData.length; i += cardsPerPage) {
        chunkedCards.push(cardData.slice(i, i + cardsPerPage));
    }

    const getCardTitle = (title) => title;

    const getCardText = (text) => text;

    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalImgSrc, setModalImgSrc] = useState('');

    const handleShowModal = (index) => {
        setModalContent(modalData[index].content);
        setModalImgSrc(modalData[index].imgSrc);
        setModalShow(true);
    };

    const handleCloseModal = () => setModalShow(false);

    return (
        <>
            <Section3>
                <Container className="my-5">
                    <h1 className="text-center mb-4">BRAIN WAVES</h1>
                    <Carousel interval={null} indicators={false} controls={true} prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon custom-prev" />} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon custom-next" style={{ maxWidth: '1400px' }} />}>
                        {chunkedCards.map((chunk, pageIndex) => (
                            <Carousel.Item key={pageIndex}>
                                <Row>
                                    {chunk.map((card, cardIndex) => {
                                        const globalIndex = pageIndex * cardsPerPage + cardIndex;
                                        return (
                                            <Col key={cardIndex} sm={12} md={6} lg={4} className="mb-4">
                                                <Card className="h-100 bg-dark text-white">
                                                    <Card.Body>
                                                        <Card.Title>{getCardTitle(card.title)}</Card.Title>
                                                        <Card.Text>{getCardText(card.text)}</Card.Text>
                                                        <Button variant="link" className="text-white" onClick={() => handleShowModal(globalIndex)}>More ></Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <CSSTransition in={modalShow} timeout={300} classNames="fade" unmountOnExit>
                    <StyledModal show={modalShow} onHide={handleCloseModal} centered>
          <StyledModalBody>
    <CloseButton onClick={handleCloseModal} aria-label="Close">
        &times;
      </CloseButton>
      <StyledImage src={modalImgSrc} alt="Modal content" />
      {modalContent}
    </StyledModalBody>
  </StyledModal>
</CSSTransition>
                </Container>
            </Section3>
        </>
    );
};

const Section3 = styled.div`
    background-color: #0f0f12; /* Secondary color */
    overflow: hidden;
    color: #f00d88;

    .card {
        border-radius: 15px;
        transition: transform 0.2s, background-color 0.2s;
        border: 2px solid #333; /* Border color */
    }

    .card:hover {
        transform: scale(0.9);
        background-color: #b24185c2 !important;
    }

    .card-title {
        font-size: 1.5rem;
        font-family: Helvetica;
    }

    .card-text {
        font-size: 1.1rem;
        font-family: Helvetica;
    }

    .btn-link {
        font-size: 0.875rem;
        font-family: Helvetica;
        text-decoration: none;
        color: #b3b3b3;
    }

    .btn-link:hover {
        color: white;
    }

    .container {
        max-width: 1200px;
    }

    h1 {
        color: #f00d88;
        font-size: 40px;
        font-weight: bold;
        font-family: Helvetica;
    }

    .bg-dark {
        background-color: #0f0f12 !important;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        border-radius: 50%;
        width: 40px;
        height: 50px;
        background-size: 100% 100%;
    }

    .carousel-control-prev {
        left: -70px;
    }

    .carousel-control-next {
        right: -70px;
    }

    .carousel {
        width: 100%;
    }

    .carousel-control-prev,
    .carousel-control-next {
        width: 5%;
    }


    @media (max-width: 1200px) {
        .carousel-control-prev {
            left: 10px;
        }

        .carousel-control-next {
            right: 10px;
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
            width: 30px;
            height: 40px;
        }

        .card {
            border-radius: 20px;
        }

        .card:hover {
            transform: scale(0.9) !important;
            background-color:  #b24185c2 !important;
        }

        .card-title {
            font-size: 1.3rem !important;
        }

        .card-text {
            font-size: 1rem !important;
        }

        .btn-link {
            font-size: 0.8rem !important;
        }
    }

    @media (max-width: 991px) {
        .carousel-control-prev {
            left: 10px;
        }

        .carousel-control-next {
            right: 10px;
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
            width: 30px;
            height: 40px;
        }

        .card {
            border-radius: 20px;
        }

        .card:hover {
            transform: scale(0.9) !important;
            background-color:  #b24185c2 !important;
        }

        .card-title {
            font-size: 1.2rem !important;
        }

        .card-text {
            font-size: 0.9rem !important;
        }

        .btn-link {
            font-size: 0.75rem !important;
        }
    }

    @media (max-width: 768px) {
        .carousel-control-prev {
            left: 5px;
        }

        .carousel-control-next {
            right: 5px;
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
            width: 25px;
            height: 35px;
        }

        .card {
            border-radius: 10px;
        }

        .card:hover {
            transform: scale(0.9) !important;
            background-color:  #b24185c2!important;
        }

        .card-title {
            font-size: 1.1rem !important;
        }

        .card-text {
            font-size: 0.85rem !important;
        }

        .btn-link {
            font-size: 0.7rem !important;
        }
    }

    @media (max-width: 576px) {
        .carousel-control-prev {
            left: 2px;
        }

        .carousel-control-next {
            right: 2px;
        }

        .carousel-control-prev-icon,
        .carousel-control-next-icon {
            width: 20px;
            height: 30px;
        }

        .card {
            border-radius: 10px;
        }

        .card:hover {
            transform: scale(0.9) !important;
            background-color:  #b24185c2 !important;
        }

        .card-title {
            font-size: 1rem !important;
        }

        .card-text {
            font-size: 0.8rem !important;
        }

        .btn-link {
            font-size: 0.65rem !important;
        }
    }
`;
export default TiaBrain;