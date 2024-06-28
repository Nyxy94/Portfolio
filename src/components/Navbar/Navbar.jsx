import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">JLEBLANC</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Acceuil</a></li>
        <li><a href="#about">Présentation</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
