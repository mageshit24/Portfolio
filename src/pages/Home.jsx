import React from "react";
import profilePic from "../assets/profile.jpg";

function Home() {
  return (
    <div className="text-center" data-aos="fade-in">
      <img
        src={profilePic}
        alt="Profile"
        className="rounded-circle mb-3"
        width="150"
        height="150"
      />
      <h1 className="display-4">Hi, I'm Magesh Hariram K</h1>
      <p className="lead">Java | MERN | IoT Developer</p>
      <a href="/projects" className="btn btn-primary btn-lg mt-3">View My Work</a>
    </div>
  );
}

export default Home;
