import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact ">
      <h2>Contact</h2>
      <form name="contact" method="post" data-netlify="true" className="contact-form">
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="redirect" value="/" />
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse email</label>
          <input type="email" id="email" name="email" placeholder="someone@something.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message..." required></textarea>
        </div>
        <button type="submit" className="submit-btn">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
