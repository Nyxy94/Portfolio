// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
          JLeblanc
        </Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
            A propos
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
            Compétences
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
            Projets
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
