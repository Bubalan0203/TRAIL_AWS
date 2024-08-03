import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  console.log('BackToTopButton rendered'); // Add this line

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div style={styles.backToTop}>
      {isVisible && (
        <button onClick={scrollToTop} style={styles.button}>
       ⮝
        </button>
      )}
    </div>
  );
};

const styles = {
  backToTop: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    zIndex: 1000,
  },
  button: {
    backgroundColor: 'transparent',
    color: '#f00d88',
    border: '2px solid #f00d88',
    borderRadius: '50%',
    padding: '5px 12px',
    fontSize: '24px',
    cursor: 'pointer',
    transition: 'opacity 0.4s ease-in-out',
  },
  '@media (max-width: 768px)': {
    backToTop: {
      bottom: '20px',
      right: '20px',
    },
  },
};

export default BackToTopButton;
