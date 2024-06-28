import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="Header">
      <div className="logo">JLEBLANC</div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">Présentation</Link></li>
          <li><Link to="/projects">Réalisation</Link></li>
          <li><Link to="/activities">Activités</Link></li>
          <li><Link to="/skills">Compétences</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Mon CV</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
