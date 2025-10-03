import React from "react";
import profilePic from "../assets/profile.jpg";
import './Home.css';

function Home() {
  return (
    <section className="home" data-aos="fade-in">
      <img
        src={profilePic}
        alt="Profile"
      />
      <h1>Hi, I'm Magesh Hariram K</h1>
      <p>
        Final Year B.Tech IT Student | Full Stack Developer (MERN & Java) | 
        Frontend & Backend Development | HTML, CSS, React, Express.js, Node.js | 
        MongoDB & MySQL | Python | IoT & AI Innovator | Cloud & Data Enthusiast
      </p>
      <a href="/projects" className="btn">View My Work</a>
    </section>
  );
}

export default Home;
