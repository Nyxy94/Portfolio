// src/components/Projects.js
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faHtml5, faCss3Alt, faGithub, faSass } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faFileAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './Projects.scss';
import projectData from '../../Data/projectsData.json';

library.add(faReact, faJs, faHtml5, faCss3Alt, faSearch, faFileAlt, faGithub, faSass, faExternalLinkAlt);

Modal.setAppElement('#root');

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'faReact':
        return faReact;
      case 'faJs':
        return faJs;
      case 'faHtml5':
        return faHtml5;
      case 'faCss3Alt':
        return faCss3Alt;
      case 'faSearch':
        return faSearch;
      case 'faFileAlt':
        return faFileAlt;
      case 'faGithub':
        return faGithub;
      case 'faSass':
        return faSass;
      case 'faExternalLinkAlt':
        return faExternalLinkAlt;
      default:
        return null;
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} onClick={() => openModal(project)} />
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel={selectedProject.title}
          className="project-modal"
          overlayClassName="project-overlay"
        >
          <button className="close-button" onClick={closeModal}>X</button>
          <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.description}</p>
          <div className="technologies">
            {selectedProject.technologies.map((tech, index) => (
              <FontAwesomeIcon key={index} icon={getIcon(tech.icon)} title={tech.name} />
            ))}
          </div>
          <div className="links">
            <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            {selectedProject.liveLink && (
              <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Visiter le site
              </a>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
