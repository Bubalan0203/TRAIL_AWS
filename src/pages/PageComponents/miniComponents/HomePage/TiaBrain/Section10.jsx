import React, { useState } from 'react';
import styled from 'styled-components';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the name of the program?",
      answer: "The name of the program is tia brain concentration development. You must have heard of memory enhancement classes, but this is mainly for concentration improvement. It is a Japanese methodology class for 5-to 15-year-old children to get behavior and academic changes."
    },
    {
      question: "How many levels are there in this program?",
      answer: "There are 3 levels and the first level is for 4 months and second and third level is for 3 months. This may vary according to the child. First level is “closed eye concentration development.” The second level is “open eye concentration development.” The third level is “deep concentration development.”"
    },
    {
      question: "Is it essential to take all the three levels of this class for a child?",
      answer: "Taking all the three levels will help improve your child’s overall improvement."
    },
    {
      question: "Are brain exercises essential to be done daily?",
      answer: "Actually, for good results, focus on the brain exercises done for a minimum of 20 minutes in the morning and evening. Try to do it from day #1. The child should do the exercises consistently. Any habit done for 21 days will bring about a change in the child’s life. If continued for 42 days, it will bring about a positive change in the child’s entire life. The TIA class is a joint effort of parents, trainer and student. All the three in doing teamwork bring good results."
    },
    {
      question: "Are extra TIA brain classes needed for any children?",
      answer: "No, extra TIA brain classes are not needed for any children, but if need arises that is if the child is not able to achieve the result, depending on the child, extra classes can be given. If they follow the guidelines correctly, the given time period of the class is more than enough for the children. Mostly 99% of the children will not need extra TIA brain classes, but extra TIA brain classes are needed only for special children 1%."
    },
    {
      question: "Will this class work for my child?",
      answer: "Yes, this class will work for your child. The child should be in the age group of 5-15. Results can be seen in the age group of 5-12 years, but 13, 14 and 15 varies from child to child. It is a dynamic platform dedicated to nurturing and developing talent through innovative training classes. Those of the children who are below average will surely go from that level to a higher level. The hidden talent of the children comes to light. They are more focused and concentrated after this class. There will be a lot of behavioral changes after this class. They become more orderly and peaceful. Each child is a prodigy with unique talents hidden in them."
    },
    {
      question: "Are there any addons with TIA brain classes?",
      answer: "Yes, MIT (multiple intelligence test) comes as an add-on with this class."
    },
    {
      question: "What is MIT (multiple intelligence test)?",
      answer: "This test can help you determine which intelligences are strongest for a person. MIT is a system that identifies the most prevalent human intrinsic potential of the brain."
    },
    {
      question: "Can I take the MIT report separately?",
      answer: "Yes, MIT (multiple intelligence test) can be taken separately for anyone (no age limit)."
    },
    {
      question: "What type of program can be given for the child?",
      answer: "Each and every child has different kinds of capabilities and it varies from child to child. So only after counseling, we can decide what type of program can be given for your child."
    },
    {
      question: "What is the fee structure for this program?",
      answer: "Fees depend on the type of program the parents are planning to take for the kid and only after counseling, the institute will be able to decide as to what type of program can be given for your child and only after that will be able to know the fee structure."
    },
    {
      question: "Will the institute provide any study material for the children?",
      answer: "No, there is no need for any study material and there will not be any hidden charge to buy things."
    },
    {
      question: "How to locate talent initiators and accelerators institutes?",
      answer: "You can visit www.tiaedu.in or WhatsApp 8883800777 and they will guide you to the exact place."
    },
    {
      question: "How many children does one class accommodate?",
      answer: "For special care and individual attention to be given to the children, children will be divided into classes accordingly."
    }, 
    {
      question: "Can one-on-one class be arranged for the children?",
      answer: "No one-on-one class is there for TIA brain class children. Only for special children one-on-one class will be needed."
    },
    {
      question: "What are the academic results seen in a child after attending the tia class?",
      answer: (
        <ul>
          <li>Grasping power</li>
          <li>Concentration</li>
          <li>Memory enhancement improves</li>
          <li>Discovering their hidden potential</li>
          <li>Expressing unique talents</li>
          <li>Sharp intuition</li>
          <li>Photographic memory</li>
        </ul>
      )
    },
    {
      question: "What are the behavioral results seen in a child after attending the tia class?",
      answer: (
        <ul>
          <li>Increased self confidence</li>
          <li>Eye-to-eye contact</li>
          <li>Social mingling</li>
          <li>Good communication</li>
          <li>Enjoy creativity</li>
          <li>Good self-realization</li>
          <li>Getting rid of fear, shyness, and frustration</li>
          <li>Emotional management</li>
        </ul>
      )
    }
  ];

  return (
    <ProductDetailsContainer>
      <div className="faq-container">
        <h1>TiaBrain - FAQ</h1>
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
    padding: 20px 0;
    font-size: 1.1rem;
    color: #fff;

    ul {
      list-style-type: disc;
      margin: 0;
      padding-left: 20px;
    }
    
    li {
      margin-bottom: 10px;
    }
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
      font-size: 1rem;
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
      font-size: 0.9rem;
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
      font-size: 0.75rem;
    }
  }
`;

export default FAQ;
