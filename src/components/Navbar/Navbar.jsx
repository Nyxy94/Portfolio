// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Ferme le menu hamburger après le défilement
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home" onClick={() => scrollToSection('home')}>JLeblanc</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => scrollToSection('home')}>Acceuil</a></li>
        <li><a href="#about" onClick={() => scrollToSection('about')}>A propos</a></li>
        <li><a href="#skills" onClick={() => scrollToSection('skills')}>Compétences</a></li>
        <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projets</a></li>
        <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
