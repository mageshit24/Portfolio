import React from "react";
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="card project-card" data-aos="fade-up">
      {project.video ? (
        <video
          src={project.video}
          controls
          className="project-media"
        ></video>
      ) : (
        <img
          src={project.image}
          alt={project.title}
          className="project-media"
        />
      )}
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
            View Project
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
