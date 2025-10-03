import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import './About.css';
import profile from '../assets/profile.jpg'; // Profile image
import resume from '../assets/resume.pdf'; // Resume PDF

function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Profile Image */}
        <div className="about-image">
          <img src={profile} alt="Magesh Hariram" />
          <a href={resume} download className="resume-button">
            Download Resume
          </a>
        </div>

        {/* About Text */}
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hello! I'm <strong>Magesh Hariram K</strong>, a passionate and detail-oriented developer currently in my final year of B.Tech in Information Technology. I specialize in both frontend and backend development, with experience in <strong>MERN stack</strong>, <strong>Java & Spring Boot</strong>, <strong>Python</strong>, <strong>IoT & AI</strong>, and cloud technologies. I enjoy building responsive, scalable, and innovative solutions while staying updated with the latest industry trends.
          </p>
          
          <h2>What I Do?</h2>
          <p>
            I create full-stack web applications and enterprise-level solutions using <strong>React, Node.js, MongoDB, MySQL, Java, and Spring Boot</strong>. My focus is on delivering seamless user experiences and maintainable code for scalable projects.
          </p>

          <h2>My Approach</h2>
          <p>
            I believe in agile development, collaboration, and leveraging modern technologies to transform ideas into functional applications. Whether it’s web development, IoT projects, or AI applications, I aim to make solutions efficient, robust, and user-friendly.
          </p>

          <h2>Let’s Connect</h2>
          <p>
            I am always open to new projects, collaborations, or opportunities to learn and grow. Feel free to reach out to me via email or connect on 
            <a href="https://www.linkedin.com/in/magesh-hariram-k-6011132a4" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>.
          </p>
          <p>
            <a href="mailto:mageshhariramk@gmail.com"><FaEnvelope /> mageshhariramk@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
