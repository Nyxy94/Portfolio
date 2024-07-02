// src/components/Projects.js
import React from 'react';
import './Projects.scss';
import projectsData from '../../Data/projectsData.json'

const Projects = () => {
  return (
    <section id="projects" className="projects ">
      <h2>Projets</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
