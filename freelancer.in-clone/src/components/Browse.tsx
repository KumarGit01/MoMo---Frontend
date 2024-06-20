import React from 'react';
import { useProjects } from '../context/ProjectContext';
import ProjectCard from './ProjectCard';
import Filters from './Filter';
import SkeletonLoader from './SkeletonLoader';
import './Browse.css'; // Import CSS for Browse component

const Browse: React.FC = () => {
  const { filteredProjects, filters, loading } = useProjects();

  return (
    <div className="browse-container">
      <h1 className="browse-title">Browse Projects</h1>
      <div className="browse-content">
        <Filters filters={filters} />
        <div className="project-list">
          {loading ? (
            <SkeletonLoader count={5} />
          ) : (
            filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p>No projects found with selected filters.</p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;
