import React from 'react';
import './Contact.scss';





const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id="contact" className="contact ">
      <h2>Contact</h2>
      <form className="contact-form" name="contact" netlify netlify-honeypot="bot-field" >
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
        <button type="submit" className="submit-btn" onClick={handleSubmit}>Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
