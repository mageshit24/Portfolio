import React from "react";
import './About.css';
import profileImg from '../assets/profile.jpg'; // your profile picture

function About() {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      <div className="about-container">
        <img src={profileImg} alt="MAGESH HARIRAM K" className="profile-img" />
        <div className="about-text">
          <p>
            I am an IT enthusiast with experience in Java, MERN stack, IoT, and AI-based projects. 
            I enjoy creating innovative solutions that combine software and hardware for real-world problems.
          </p>
          <p>
            I have completed multiple academic and personal projects including a Smart Pillow for Sleep Monitoring, Automated Water Management System, and a Vaccine Reminder System. My goal is to contribute to impactful technology solutions.
          </p>
          <a href="/assets/resume.pdf" download className="btn-primary">Download Resume</a>
        </div>
      </div>
    </div>
  );
}

export default About;
