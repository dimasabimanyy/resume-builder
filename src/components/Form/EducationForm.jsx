import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';
import { FaTrash, FaPlus } from 'react-icons/fa';

const EducationForm = () => {
  const { resumeData, addEducation, updateEducation, removeEducation } = useResumeContext();
  const { education } = resumeData;

  const handleChange = (id, field, value) => {
    updateEducation(id, field, value);
  };

  const handleAddEducation = () => {
    addEducation();
  };

  const handleRemoveEducation = (id) => {
    removeEducation(id);
  };

  return (
    <div className="p-4 bg-white rounded-b-lg shadow">
      {education.length === 0 ? (
        <div className="text-center py-4 text-gray-500">
          <p>No education added yet. Add your educational background.</p>
        </div>
      ) : (
        education.map((edu) => (
          <div key={edu.id} className="mb-6 pb-6 border-b border-gray-200 relative">
            <button 
              onClick={() => handleRemoveEducation(edu.id)}
              className="absolute top-0 right-0 text-red-500 hover:text-red-700"
              aria-label="Remove education"
            >
              <FaTrash />
            </button>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={edu.institution} 
                onChange={(e) => handleChange(edu.id, 'institution', e.target.value)}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={edu.degree} 
                onChange={(e) => handleChange(edu.id, 'degree', e.target.value)}
              />
            </div>
            
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  value={edu.startDate} 
                  onChange={(e) => handleChange(edu.id, 'startDate', e.target.value)}
                  placeholder="e.g., Sept 2018"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  value={edu.endDate} 
                  onChange={(e) => handleChange(edu.id, 'endDate', e.target.value)}
                  placeholder="e.g., May 2022"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea 
                className="w-full p-2 border rounded h-24" 
                value={edu.description}
                onChange={(e) => handleChange(edu.id, 'description', e.target.value)}
                placeholder="Additional details about your education..."
              ></textarea>
            </div>
          </div>
        ))
      )}
      
      <button 
        onClick={handleAddEducation}
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        <FaPlus size={12} /> Add Education
      </button>
    </div>
  );
};

export default EducationForm;