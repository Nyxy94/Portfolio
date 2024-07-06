// src/components/Footer.js
import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/Nyxy94" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://codepen.io/your-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCodepen} />
        </a>
      </div>
      <p>© 2024 Leblanc Jordane. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
