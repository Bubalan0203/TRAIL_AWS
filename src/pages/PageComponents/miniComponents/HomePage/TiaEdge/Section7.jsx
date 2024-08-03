import React, { useState } from 'react';
import styled from 'styled-components';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is TIA-EDGE?",
      answer: "TIA-Edge helps aspirants to fulfill their dreams. We provide training for competitive exams like NEET, IIT-JEE, NTSE, OLYMPIADS and many more. We enhance the capability and capacity of young talents and mold them perfectly to achieve their goals. TIA Edge focuses on the best quality Education by a team of highly-experienced and dedicated faculties."
    },
    {
      question: "What are the benefits of TIA-EDGE?",
      answer: (
        <ul>
          <li>Job security.</li>
          <li>Financial security.</li>
          <li>Status quo.</li>
          <li>Balance in work and life.</li>
          <li>Contentment.</li>
        </ul>
      )
    },
    {
      question: "How to prepare for Government Exams at home?",
      answer: "Students can prepare for Government exams at home without joining any Coaching Institute by devoting 5 to 6 hours a day completely on self-study. Students can join TIA EDGE for more results."
    },
    {
      question: "For which government post is the highest salary being paid?",
      answer: "Salary is one of the major factors driving candidates to choose one among the various Government sector exams as a career option. Currently, the salary structure for Government posts is based on the 7th pay commission. Under the highest salary posts, IAS, IPS and IFS top the chart."
    },
    {
      question: "How to start a competitive exam preparation?",
      answer: "First, a student must go through the exam pattern for the exam, followed by the syllabus and based on it, he/she can start the competitive exam preparation."
    },
    {
      question: "Can a student qualify competitive exams with 3 months of preparation?",
      answer: "Qualifying any competitive exam with 3 months of preparation is not impossible, but the aspirant needs to put in extra hard work, effort and dedicate almost 10 to 12 hours a day for preparation. Also, having any previous knowledge of the topics included in the syllabus shall also act as an added advantage."
    },
    {
      question: "What are some of the government exams which come under TIA Edge?",
      answer: (
        <ul>
          <li>UPSC Civil Services Exam</li>
          <li>SSC CGL Exam</li>
          <li>SSC CHSL Exam</li>
          <li>RRB NTPC Exam</li>
          <li>UPSC Indian Engineering Service Exam</li>
          <li>Government Exams Related Links</li>
          <li>RBI Exam</li>
          <li>RBI Grade B Salary</li>
          <li>IBPS PO Mains Exam Analysis</li>
          <li>SBI SO</li>
          <li>RBI Grade B Result</li>
          <li>SSC JE Salary</li>
          <li>NIACL Admit Card</li>
          <li>SBI Exam</li>
          <li>RRB Admit Card</li>
        </ul>
      )
    }
  ];

  return (
    <ProductDetailsContainer>
      <div className="faq-container">
        <h1>TiaEdge - FAQ</h1>
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
  height: auto;
  width: 100%;
  color: Black;
  padding-top: 80px;

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
    color: #555;
    font-size: 1.1rem
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
    .faq-section h3 {
      font-size: 1.25rem;
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
    .faq-section h3 {
      font-size: 1rem;
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
