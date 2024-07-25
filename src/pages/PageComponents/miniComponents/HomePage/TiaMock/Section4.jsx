import React, { useState } from 'react';
import styled from 'styled-components';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is TIA-TEST HUB exams?",
      answer: "TIA-TEST HUB exams are identical to the real exams. It helps one prepare for the final examination. One can understand the exam pattern, question types, and difficulty level and improve his/her exam-taking skills."
    },
    {
      question: " What is the importance of attempting TIA-TEST HUB test?",
      answer: " TIA-TEST HUB tests are based on the actual exam pattern, giving a detailed examination overview so that one can have an idea about how to appear for the tests to score better marks."
    },
    {
      question: "How to register for TIA-TEST HUB test?",
      answer: "The steps to register for the tests by TIA-TEST HUB are provided above on this page.  We suggest the students to follow the instructions to register with us."
    },
    {
      question: "Can I attempt the mock test questions of TIA-TEST HUB on a laptop?",
      answer: "Yes, one can attempt these tests on laptops, PCs, or even mobile."
    },
    {
      question: "How to prepare for Government Exams at home?",
      answer: "Students can prepare for Government exams at home without joining any Coaching Institute by devoting 5 to 6 hours a day completely on self-study.  Students can join TIA EDGE for more results."
    }
  ];

  return (
    <ProductDetailsContainer>
      <div className="faq-container">
        <h1>Tia Mock - FAQ</h1>
        <p>Here are answers to most common questions. Can't find an answer? Call us!</p>
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
  height:auto;
  width: 100%;
  color:White;
  background-color: #0f0f12;
  padding-top:80px;

  .faq-container {
    font-family: Arial, sans-serif;
    max-width:1440px;
    margin: 0 auto;
    padding:10px;
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
  
  .faq-section h3 {
    font-size: 1.75rem;
    margin-bottom: 15px;
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
    font-size: 1rem;
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
    .faq-section h3 {
      font-size: 1.5rem;
    }
    .faq-question {
      font-size: 1.125rem;
    }
    .faq-answer {
      font-size: 0.875rem;
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
    .faq-section h3 {
      font-size: 1.25rem;
    }
    .faq-question {
      font-size: 1rem;
    }
    .faq-answer {
      font-size: 0.75rem;
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
    .faq-section h3 {
      font-size: 1rem;
    }
    .faq-question {
      font-size: 0.875rem;
    }
    .faq-answer {
      font-size: 0.625rem;
    }
  }
`;

export default FAQ;
