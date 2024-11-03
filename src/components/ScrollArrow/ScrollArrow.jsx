import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './ScrollArrow.scss';

const ScrollArrow = ({ direction, targetId, alwaysVisible }) => {
  const [isVisible, setIsVisible] = useState(alwaysVisible);

  const toggleVisibility = () => {
    if (!alwaysVisible) {
      if (window.pageYOffset > document.getElementById('about').offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!alwaysVisible) {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }
  }, [alwaysVisible]);

  return (
    <div
      className={`scroll-arrow ${direction === 'up' ? 'scroll-up' : 'scroll-down'} ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTarget}
    >
      <FontAwesomeIcon icon={direction === 'up' ? faChevronUp : faChevronDown} />
    </div>
  );
}

export default ScrollArrow;
