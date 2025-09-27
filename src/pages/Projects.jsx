import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectList from "../data/projectsData";

function Projects() {
  return (
    <div>
      <h2 className="mb-4" data-aos="fade-down">My Projects</h2>
      <div className="row">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
