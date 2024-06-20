import React from 'react';
import { Project } from '../context/ProjectContext';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

  const handleGetJob = () => {
    alert(`Freelancer clicked "Get Job" for project: ${project.title}`);
  };

  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>Budget: {project.budget}</p>
      <button className="get-job-button" onClick={handleGetJob}>
        Get This Job
      </button>
    </div>
  );
};

export default ProjectCard;
