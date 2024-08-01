import React, { useState } from 'react';
import styled from 'styled-components';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is MOC?",
      answer: "MOC (Miracle Of Communication) will help anyone to communicate easier in English. It is a TONGUE-MIND coordination technique to learn a new language. The program is available in a state-of-art software which guides a language learner to confidently speak in the language in a short span of time."
    },
    {
      question: "How many levels are there in MOC?",
      answer: "The software has 12 stages of 25 formulas each, putting together 300 formulas to learn a new language. Duration of each level depends upon the child’s passion to learn a new language."
    },
    {
      question: "What are the basic necessities to undergo a MOC program?",
      answer: "A desktop or laptop and a good net connection."
    },
    {
      question: "Is it of any benefit academically learning this MOC program?",
      answer: "Yes, it will help to make the communication easier with their teachers if they are at school. If they are working, it will help in their career. Even in business, people are benefited with this MOC program."
    },
    {
      question: "What is the required age limit for this MOC program?",
      answer: "Anyone from 10 years to any age. Anyone at any age can start learning a new language. The MOC program is meticulously designed to appreciate learners of any age group. We have kept in our heart, people of every age as well their speed of learning in designing our program."
    },
    {
      question: "What are the benefits of the MOC program?",
      answer: (
        <ul>
          <li>Enhanced Cognitive Abilities</li>
          <li>Personal Growth and Improved Self-Confidence</li>
          <li>Easier Traveling</li>
          <li>More Opportunities for Social Connections</li>
          <li>More Employment Opportunities</li>
          <li>Broadening of Your Perspective</li>
        </ul>
      )
    }
  ];

  return (
    <ProductDetailsContainer>
      <div className="faq-container">
        <h1>MOC - FAQ</h1>
        <p>Here are answers to the most common questions about MOC. Can't find an answer? Call us!</p>
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
    color: #fff;
    font-size:1.1rem;
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
