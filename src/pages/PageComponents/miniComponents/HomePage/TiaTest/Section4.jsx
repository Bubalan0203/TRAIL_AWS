import React, { useState } from 'react';
import styled from 'styled-components';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is TEST HUB?",
      answer: "An online platform to take practice in cracking JEE, NEET, NTSE, OLYMPIADS, and many more. TIA-TEST HUB exams are identical to the real exams. It helps one prepare for the final examination. One can understand the exam pattern, question types, and difficulty level and improve his/her exam-taking skills."
    },
    {
      question: "What are the advantages of TIA-TEST HUB?",
      answer: "TIA-TEST HUB guides students through various available programs. Programs are aimed at bringing out results in competitive examinations like JEE, NEET, KVPY, Olympiads, and many more. Students can attempt a Mock Test for exams and analyze how they are scoring. Students can compare their scores while attempting the Mock Test with the minimum marks required to qualify. Mock tests help students understand recent exam trends, i.e., the exam pattern and syllabus. This will help students get acquainted with various similar-looking question papers, question patterns, marking schemes, and other aspects."
    },
    {
      question: "What is the importance of attempting the TIA-TEST HUB test?",
      answer: "TIA-TEST HUB tests are based on the actual exam pattern, giving a detailed examination overview so that one can have an idea about how to appear for the tests to score better marks."
    },
    {
      question: "List Some of the Competitive Exams?",
      answer: (
        <ul>
          <li>All banking and clerical exams</li>
          <li>UPSC and all state public service commissions</li>
          <li>Police and military exams</li>
          <li>Teaching and insurance exams</li>
          <li>Finance and civil service exams (IAS, IPS, IFS)</li>
          <li>Medical and engineering entrance exams</li>
          <li>NEET, MBA, MCA entrance exams</li>
          <li>Indian Air Force, Indian Navy, Indian Army</li>
          <li>Fashion designing exams</li>
        </ul>
      )
    }
  ];

  return (
    <ProductDetailsContainer>
      <div className="faq-container">
        <h1>TIA-TEST HUB - FAQ</h1>
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
  color: Black;
  background-color: #fff; /* Added background color for contrast */

  .faq-container {
    font-family: Arial, sans-serif;
    max-width: 1400px;
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
    color: #555;
    font-size: 1.1rem;
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
