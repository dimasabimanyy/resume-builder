// src/components/Form/ProjectsForm.jsx
import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';
import { FaTrash, FaPlus } from 'react-icons/fa';

const ProjectsForm = () => {
  const { resumeData, addProject, updateProject, removeProject } = useResumeContext();
  const { projects } = resumeData;

  console.log(projects);

  const handleChange = (id, field, value) => {
    updateProject(id, field, value);
  };

  const handleAddProject = () => {
    addProject();
  };

  const handleRemoveProject = (id) => {
    if (window.confirm('Are you sure you want to remove this project?')) {
      removeProject(id);
    }
  };

  return (
    <div className="p-4 bg-white rounded-b-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-800">Projects</h2>
        <p className="text-sm text-gray-500">Optional but recommended for technical roles</p>
      </div>
      
      {!projects || projects?.length === 0 ? (
        <div className="text-center py-6 bg-gray-50 rounded border border-dashed border-gray-300">
          <p className="text-gray-500 mb-4">No projects added yet</p>
          <button 
            onClick={handleAddProject}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded inline-flex items-center gap-1"
          >
            <FaPlus size={12} /> Add Your First Project
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="p-4 border border-gray-200 rounded-lg relative">
              <button 
                onClick={() => handleRemoveProject(project.id)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  value={project.title} 
                  onChange={(e) => handleChange(project.id, 'title', e.target.value)}
                  placeholder="e.g., E-commerce Website"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    value={project.startDate} 
                    onChange={(e) => handleChange(project.id, 'startDate', e.target.value)}
                    placeholder="e.g., June 2022"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    value={project.endDate} 
                    onChange={(e) => handleChange(project.id, 'endDate', e.target.value)}
                    placeholder="e.g., Present"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Technologies Used</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  value={project.technologies} 
                  onChange={(e) => handleChange(project.id, 'technologies', e.target.value)}
                  placeholder="e.g., React, Node.js, MongoDB"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Link (Optional)</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  value={project.link} 
                  onChange={(e) => handleChange(project.id, 'link', e.target.value)}
                  placeholder="e.g., https://github.com/username/project"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  className="w-full p-2 border rounded h-24" 
                  value={project.description}
                  onChange={(e) => handleChange(project.id, 'description', e.target.value)}
                  placeholder="Describe what the project does and your role in it..."
                ></textarea>
              </div>
            </div>
          ))}
          
          <button 
            onClick={handleAddProject}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center gap-1"
          >
            <FaPlus size={12} /> Add Another Project
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsForm;