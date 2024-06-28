// src/components/AboutMe.js
import React from 'react';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="about-me-content">
        <h2>About Me</h2>
        <div className="about-me-text">
          <p>Hi, I'm [Your Name], a passionate developer with a love for creating beautiful and functional web applications. I have a background in [your background], and I specialize in [your specialties].</p>
          <p>When I'm not coding, you can find me [your hobbies or interests]. I am constantly learning and keeping up-to-date with the latest trends and technologies in web development.</p>
        </div>
        <div className="about-me-photo">
          <img src="[Your Photo URL]" alt="Your Name" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
