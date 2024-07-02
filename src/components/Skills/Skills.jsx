// src/components/Skills.js
import React from 'react';
import './Skills.scss';

const skillsData = [
  { name: 'HTML5', icon: 'fa-html5' },
  { name: 'CSS3', icon: 'fa-css3-alt' },
  { name: 'JavaScript', icon: 'fa-js-square' },
  { name: 'Bootstrap', icon: 'fa-bootstrap' },
  { name: 'React', icon: 'fa-react' },
  { name: 'Styled Components', icon: 'fa-paint-brush' },
  { name: 'Redux', icon: 'fa-redux' },
  { name: 'Git', icon: 'fa-git' },
  { name: 'GitHub', icon: 'fa-github' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills ">
      <h2>Compétences</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <i className={`fab ${skill.icon}`}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
