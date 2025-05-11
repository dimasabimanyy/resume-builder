import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';
import { FaTrash, FaPlus } from 'react-icons/fa';

const ExperienceForm = () => {
  const { resumeData, addExperience, updateExperience, removeExperience } = useResumeContext();
  const { experience } = resumeData;

  const handleChange = (id, field, value) => {
    updateExperience(id, field, value);
  };

  const handleAddExperience = () => {
    addExperience();
  };

  const handleRemoveExperience = (id) => {
    if (confirm('Are you sure you want to remove this experience?')) {
      removeExperience(id);
    }
  };

  return (
    <div className="form-section rounded-t-none">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Work Experience</h2>
        <button 
          onClick={handleAddExperience}
          className="flex items-center gap-1 text-sm btn-primary"
        >
          <FaPlus size={12} /> Add Experience
        </button>
      </div>

      {experience.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-center">
          <p className="text-gray-500 mb-4">No work experience added yet</p>
          <button 
            onClick={handleAddExperience}
            className="flex items-center gap-1 text-sm btn-primary"
          >
            <FaPlus size={12} /> Add Your First Experience
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div 
              key={exp.id} 
              className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm transition-all hover:shadow-md relative"
            >
              <button 
                onClick={() => handleRemoveExperience(exp.id)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Remove experience"
              >
                <FaTrash size={14} />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="form-label">Company</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    value={exp.company} 
                    onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
                    placeholder="e.g., Google Inc."
                  />
                </div>
                
                <div>
                  <label className="form-label">Position</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    value={exp.position} 
                    onChange={(e) => handleChange(exp.id, 'position', e.target.value)}
                    placeholder="e.g., Senior Developer"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="form-label">Start Date</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    value={exp.startDate} 
                    onChange={(e) => handleChange(exp.id, 'startDate', e.target.value)}
                    placeholder="e.g., May 2021"
                  />
                </div>
                <div>
                  <label className="form-label">End Date</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    value={exp.endDate} 
                    onChange={(e) => handleChange(exp.id, 'endDate', e.target.value)}
                    placeholder="e.g., Present"
                  />
                </div>
              </div>
              
              <div>
                <label className="form-label">Description</label>
                <textarea 
                  className="input-field h-24" 
                  value={exp.description}
                  onChange={(e) => handleChange(exp.id, 'description', e.target.value)}
                  placeholder="Describe your responsibilities and achievements..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Use bullet points to highlight key achievements and responsibilities.
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;