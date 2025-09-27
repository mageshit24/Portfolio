import React from "react";
import './Contact.css';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page fade-in">
      <h2>Contact Me</h2>
      <p>Have a project or question? Send me a message!</p>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you for your message!");
          e.target.reset();
        }}
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>

      <div className="contact-info">
        <div>
          <h4>Email</h4>
          <p>mageshhariramk@gmail.com</p>
        </div>
        <div>
          <h4>Phone</h4>
          <p>+91 9626238464</p>
        </div>
        <div>
          <h4>Location</h4>
          <p>6/7, Vijayanoor, Pandarapuram(po), Sathankulam(tk), Thoothukudi - 628 704</p>
        </div>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Contact;
