import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Section7 = () => {
    const cards = [
        { title: 'Quality of Human Capital', points: ['Examination of the impact of the Indian education system on employability and skill development.'] },
        { title: 'National Development Goals', points: ['India\'s ambitions for economic growth and global influence, highlighting the need for a skilled workforce.', ] },
        { title: 'Role Models', points: ['Identification of successful individuals from India who have made significant contributions in various fields.', ] },
        { title: 'Objectives of Education', points: ['Examination of the fundamental goals of education, including promoting critical thinking, creativity, and self-awareness.' ] },
        { title: 'Career Options', points: ['Analysis of the limited career options perceived by Indian youth and the influence of societal expectations.', ] },
        { title: 'Flexibility in Course Structure', points: ['Comparison of the rigid course structure in the Indian education system with the flexibility offered by foreign education.'] },
        { title: 'Industry Orientation', points: ['Examination of the gap between Indian education and industry needs, particularly in terms of skill development and relevance.'] },
        { title: 'Teaching Techniques and Faculty', points: ['Comparison of teaching methods and faculty qualifications in India and abroad.'] },
        { title: 'Student Engagement', points: ['Exploration of the emphasis on assignments, projects, and practical learning in foreign education.'] },
        { title: 'Cultural Exposure and Work Experience', points: ['Examination of the cultural exposure and diversity experienced by students in foreign education settings.'] }
    ];

    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
    const [clickedCardIndex, setClickedCardIndex] = useState(null);

    const handleCardClick = (index) => {
        setClickedCardIndex(index);
    };

    return (
        <PageContainer>
            <VipLoginContainer className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ProductDescription className="row g-3">
                            <div className="col-12">
                                <h2>Indian Education vs Foreign Education</h2>
                            </div>
                            {cards.map((card, index) => (
                                <div className="col-md-6" key={index}>
                                    <Card
                                        className={`${index === hoveredCardIndex ? 'hover' : ''} ${index === clickedCardIndex ? 'clicked' : ''}`}
                                        onMouseEnter={() => setHoveredCardIndex(index)}
                                        onMouseLeave={() => setHoveredCardIndex(null)}
                                        onClick={() => handleCardClick(index)}
                                    >
                                        <CardHeader>{index + 1}</CardHeader>
                                        <CardBody>
                                            <CardTitle>{card.title}</CardTitle>
                                            <CardText>
                                                <ul>
                                                    {card.points.map((point, i) => (
                                                        <li key={i}>{point}</li>
                                                    ))}
                                                </ul>
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </ProductDescription>
                    </div>
                </div>
            </VipLoginContainer>
        </PageContainer>
    );
}

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const PageContainer = styled.div`
    background-color:#0f0f12;
    color: white;
`;

const VipLoginContainer = styled.div`
    padding: 20px;
`;

const ProductDescription = styled.div`
    h2 {
        font-size: 50px;
        font-family:Helvetica;
        font-weight: bold;
        margin-bottom: 20px;
        color: #f00d88;
        @media (max-width: 768px) {
            font-size: 20px;
        }
    }
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    border: 2px solid #333;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    padding: 10px;
    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
    margin-bottom: 20px;
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;

    &.hover {
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        background-color: rgba(178, 65, 133, 0.1);
    }

    &.clicked {
        background-color: rgba(178, 65, 133, 0.2);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        &:not(:last-child) {
            margin-right: 0;
        }
    }
`;

const CardHeader = styled.div`
    background-color: #f00d88;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    font-family:Helvetica;
    padding:0;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    @media (max-width: 768px) {
        font-size: 1rem;
        font-family: Helvetica;
    }
`;

const CardBody = styled.div`
    flex: 1;
`;

const CardTitle = styled.div`
    font-size:1.4rem;
    font-weight: bold;
    font-family:Helvetica;
    color: #f00d88;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size:0.8rem;
        font-family: Helvetica;
    }
`;

const CardText = styled.div`
    font-size: 1rem;
    line-height: 1.2;
    ul {
        padding-left: 20px;
    }
    li {
        margin-bottom: 5px;
    }
    @media (max-width: 768px) {
        font-size: 1rem;
        font-family: Helvetica;
    }
`;

export default Section7;
