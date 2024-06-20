import React from 'react';
import { Filter } from '../context/ProjectContext';
import { useProjects } from '../context/ProjectContext';
import './Filters.css'; // Import CSS for Filters component

interface FilterProps {
  filters: Filter[];
}

const Filters: React.FC<FilterProps> = ({ filters }) => {
  const { selectedFilters, setSelectedFilters } = useProjects(); // Correct destructuring

  const handleFilterChange = (filterName: string, option: string) => {
    setSelectedFilters(prevFilters => {
      const newSelectedFilters = { ...prevFilters };
      const currentOptions = newSelectedFilters[filterName] || [];

      if (currentOptions.includes(option)) {
        newSelectedFilters[filterName] = currentOptions.filter(opt => opt !== option);
      } else {
        newSelectedFilters[filterName] = [...currentOptions, option];
      }

      return newSelectedFilters;
    });
  };

  return (
    <div className="filter-section">
      {filters.map(filter => (
        <div key={filter.id} className="filter">
          <h3>{filter.name}</h3>
          {filter.options.map(option => (
            <label key={option}>
              <input
                type="checkbox"
                name={filter.name}
                value={option}
                checked={selectedFilters[filter.name]?.includes(option) || false}
                onChange={() => handleFilterChange(filter.name, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filters;
