// src/components/Experience.js
import React, { useEffect, useState } from 'react';
import './Experience.scss';
import experienceData from '../../Data/experienceData.json';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experienceData);
  }, []);

  return (
    <section id="experience" className="experience">
      <h2>Expérience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-details">
              <h3>{exp.role}</h3>
              <p>
                <i className="fas fa-building"></i> {exp.company} <i className="fas fa-map-marker-alt"></i> {exp.location}
              </p>
            </div>
            <div className="experience-meta">
              <span className={`type ${exp.type.toLowerCase().replace(' ', '-')}`}>{exp.type}</span>
              <span className="duration">{exp.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
