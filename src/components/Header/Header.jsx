// src/components/Header.js
import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import bannerImage from "/blu.webp"
import ScrollArrow from '../ScrollArrow/ScrollArrow';
const Header = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header  id="home" className="header">
      <div className="banner">
        <img src={bannerImage} alt="Banner" />
        <div className="overlay">
          <h1>Jordane Leblanc</h1>
          <div className="icons">
            <a href="https://github.com/Nyxy94" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/jordan-leblanc-098481293/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <ScrollArrow direction="down" targetId="about" alwaysVisible={true} />
        </div>
      </div>
    </header>
  );
}

export default Header;
