import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form className="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <div style={{ display: 'none' }}>
          <label>
            Ne remplissez pas ce champ si vous êtes humain : <input name="bot-field" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" placeholder="Votre nom" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse email</label>
          <input type="email" id="email" name="email" placeholder="someone@something.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Votre message..." required></textarea>
        </div>
        <button type="submit" className="submit-btn">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
