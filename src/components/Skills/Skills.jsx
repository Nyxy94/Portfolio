import React from 'react';
import './Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faBootstrap, faReact, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import reduxIcon from '../../assets/icons/redux2.svg'; // Importez l'icône Redux SVG

library.add(faHtml5, faCss3Alt, faJsSquare, faBootstrap, faReact, faPaintBrush, faGit, faGithub);

const skillsData = [
  { name: 'HTML5', icon: <FontAwesomeIcon icon={faHtml5} size="3x" /> },
  { name: 'CSS3', icon: <FontAwesomeIcon icon={faCss3Alt} size="3x" /> },
  { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJsSquare} size="3x" /> },
  { name: 'Bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} size="3x" /> },
  { name: 'React', icon: <FontAwesomeIcon icon={faReact} size="3x" /> },
  { name: 'Styled Components', icon: <FontAwesomeIcon icon={faPaintBrush} size="3x" /> },
  { name: 'Redux', icon: <img src={reduxIcon} alt="Redux" className="skill-icon" /> }, // Utilisez l'icône Redux SVG
  { name: 'Git', icon: <FontAwesomeIcon icon={faGit} size="3x" /> },
  { name: 'GitHub', icon: <FontAwesomeIcon icon={faGithub} size="3x" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Compétences</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
