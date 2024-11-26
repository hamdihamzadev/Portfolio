import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a href={project.link}  target='blank' className="text-blue-500 hover:underline">
          En savoir plus
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

