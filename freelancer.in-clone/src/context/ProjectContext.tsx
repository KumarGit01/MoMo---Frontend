import React, { createContext, useState, useContext, useEffect } from 'react';
import projectsData from '../data/projects.json';
import filtersData from '../data/filters.json';

export interface Project {
  id: number;
  title: string;
  description: string;
  budget: string;
  category: string;
  location?: string;
  skillLevel?: string;
  duration?: string;
}

export interface Filter {
  id: number;
  name: string;
  options: string[];
}

interface ProjectContextType {
  projects: Project[];
  filteredProjects: Project[];
  filters: Filter[];
  selectedFilters: { [key: string]: string[] };
  setSelectedFilters: React.Dispatch<React.SetStateAction<{ [key: string]: string[] }>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects] = useState<Project[]>(projectsData);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [filters] = useState<Filter[]>(filtersData);
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const applyFilters = () => {
      let updatedProjects = projects;
  
      Object.entries(selectedFilters).forEach(([filterName, selectedOptions]) => {
        if (selectedOptions.length > 0) {
          updatedProjects = updatedProjects.filter(project =>
            selectedOptions.includes((project as any)[filterName])
          );
        }
      });
  
      setFilteredProjects(updatedProjects);
    };
  
    applyFilters();
  }, [selectedFilters, projects]);
  
  return (
    <ProjectContext.Provider value={{ projects, filteredProjects, filters, selectedFilters, setSelectedFilters, loading, setLoading }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error(' ProjectProvider error');
  }
  return context;
};
