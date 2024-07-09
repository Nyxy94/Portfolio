// src/components/AboutMe.js
import React from 'react';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <section id="about" className="about-me ">
      <div className="about-me-content">
        <h2>A propos</h2>
        <div className="about-me-text">
          <p>Bonjour, je suis Jordane, un développeur passionné par la création d'application web belles et fonctionnelles. J'ai une formation d'intégrateur web, et je me spécialise dans le react.</p>
          <p>Quand je ne code pas, vous pouvez me trouver en train de pratiquer diverses activités sportives, de jouer et de me cultiver. J'apprends constamment et me tiens à jour avec les dernières tendances et technologie en développement web.</p>
        </div>
        {/* <div className="about-me-photo">
          <img src="[Your Photo URL]" alt="Your Name" />
        </div> */}
      </div>
    </section>
  );
}

export default AboutMe;
