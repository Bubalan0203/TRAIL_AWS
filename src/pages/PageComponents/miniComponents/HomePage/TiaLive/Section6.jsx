import React, { useState } from 'react';
import styled from 'styled-components';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a LIVE TUTOR?",
      answer: "LIVE TUTOR can help students and parents who are worried about their studies because sometimes school teachers, due to a lot of responsibility, are not able to pay proper attention to them. Problems faced by school teachers are that many students study at the same time and teachers are not able to handle them individually. Teachers are not able to pay attention to the needs of each student. The needs of those students whose problems are not solved immediately are forced to face a lot of difficulties in studies later on. That is why most students get distracted from their studies. Due to all these problems, students cannot score good marks on exams. TIA LIVE TUTOR online tuition platforms provide their services all over India."
    },
    {
      question: "What are the benefits of LIVE TUTOR?",
      answer: (
        <ul>
          <li>Individual attention.</li>
          <li>Personalized schedules and techniques.</li>
          <li>Boosts confidence of students.</li>
          <li>Provides guidance for homework and class tests.</li>
          <li>Assists in exam strategies.</li>
        </ul>
      )
    },
    {
      question: "What all classes come under LIVE TUTOR?",
      answer: "The K-12 system of education is about ensuring basic elementary education to students from Kindergarten to the 12th grade."
    },
    {
      question: "Is special tuition classes necessary for the students who are under LIVE TUTOR?",
      answer: "TIA LIVE TUTOR has totally eliminated the need to go to a tuition class. Now, students do not need to travel to and from tuitions. Rather, they can attain the benefits of online coaching classes while they are at their home."
    },
    {
      question: "How do students get the right tutor?",
      answer: "TIA LIVE TUTOR connects learners with the right tutors at the right time, creating better outcomes for everyone and personalized learning experiences. Learners can access tutoring with around-the-clock availability of high-quality tutors. This combination allows educators to understand their student’s progress in real-time and provide immediate, personalized tutoring support."
    }
  ];

  return (
    <ProductDetailsContainer>
      <div className="faq-container">
        <h1>TIA Live Tutor - FAQ</h1>
        <p>Here are answers to the most common questions. Can't find an answer? Call us!</p>
        <div className="faq-section">
          <h2>General Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </ProductDetailsContainer>
  );
};

const ProductDetailsContainer = styled.div`
  height: auto;
  width: 100%;
  color: White;
  background-color: #0f0f12;
  padding-top: 80px;

  .faq-container {
    font-family: Arial, sans-serif;
    max-width: 1440px;
    margin: 0 auto;
    padding: 10px;
  }

  .faq-container h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .faq-container p {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  .faq-section {
    margin-top: 20px;
  }

  .faq-section h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .faq-item {
    border-top: 1px solid #ccc;
    padding: 10px 0;
  }

  .faq-item:first-of-type {
    border-top: none;
  }

  .faq-question {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .faq-answer {
    padding: 10px 0;
    font-size: 1.1rem;
    color: #fff;
  }

  @media (max-width: 1200px) {
    .faq-container h1 {
      font-size: 2.25rem;
    }
    .faq-container p {
      font-size: 1.125rem;
    }
    .faq-section h2 {
      font-size: 1.75rem;
    }
    .faq-question {
      font-size: 1.125rem;
    }
    .faq-answer {
      font-size: 0.975rem;
    }
  }

  @media (max-width: 768px) {
    .faq-container h1 {
      font-size: 2rem;
    }
    .faq-container p {
      font-size: 1rem;
    }
    .faq-section h2 {
      font-size: 1.5rem;
    }
    .faq-question {
      font-size: 1rem;
    }
    .faq-answer {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    .faq-container h1 {
      font-size: 1.75rem;
    }
    .faq-container p {
      font-size: 0.875rem;
    }
    .faq-section h2 {
      font-size: 1.25rem;
    }
    .faq-question {
      font-size: 0.875rem;
    }
    .faq-answer {
      font-size: 0.725rem;
    }
  }
`;

export default FAQ;
