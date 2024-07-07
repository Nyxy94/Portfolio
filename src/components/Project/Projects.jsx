import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './Projects.scss';
import projectData from '../../Data/projectsData.json';

// Import des images SVG ou PNG des technologies
import reactIcon from '../../assets/icons/react.svg';
import jsIcon from '../../assets/icons/js.svg';
import html5Icon from '../../assets/icons/html5.svg';
import sassIcon from '../../assets/icons/sass.svg';
import mongodbIcon from '../../assets/icons/mongoDB.svg';
import reduxIcon from '../../assets/icons/redux.svg';
import swaggerIcon from '../../assets/icons/swagger.svg';
import nodejsIcon from '../../assets/icons/nodejs.svg';
import githubIcon from '../../assets/icons/github.svg'
import seoIcon from '../../assets/icons/seo.svg'
import figmaIcon from '../../assets/icons/figma.svg'

library.add(faGithub, faExternalLinkAlt);

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
      case 'react.svg':
        return reactIcon;
      case 'js.svg':
        return jsIcon;
      case 'html5.svg':
        return html5Icon;
      case 'sass.svg':
        return sassIcon;
      case 'mongoDB.svg':
        return mongodbIcon;
      case 'redux.svg':
        return reduxIcon;
      case 'swagger.svg':
        return swaggerIcon;
      case 'nodejs.svg':
        return nodejsIcon;
      case 'github.svg' :
        return githubIcon;
      case 'seo.svg' :
        return seoIcon;
      case 'figma.svg' :
        return figmaIcon;
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
    <section id="projects" className="projects">
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
              <img key={index} src={getIcon(tech.icon)} alt={tech.name} title={tech.name} className="technology-icon" />
            ))}
          </div>
          <div className="divider"></div>
          <div className="links">
            <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
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
