import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectList from "../data/projectsData";
import './Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <p>Here are some of the projects I have worked on:</p>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
