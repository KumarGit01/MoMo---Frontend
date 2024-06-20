import React from 'react';

interface SkeletonLoaderProps {
  count: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton-loader">
          <div className="skeleton-title"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-budget"></div>
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;
