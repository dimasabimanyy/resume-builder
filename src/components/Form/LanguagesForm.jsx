// src/components/Form/LanguagesForm.jsx
import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';
import { FaTrash, FaPlus, FaGlobe } from 'react-icons/fa';

const LanguagesForm = () => {
  const { resumeData, addLanguage, updateLanguage, removeLanguage } = useResumeContext();
  const { languages } = resumeData;
  
  const proficiencyLevels = [
    'Native', 'Fluent', 'Advanced', 'Intermediate', 'Basic'
  ];

  const handleChange = (id, field, value) => {
    updateLanguage(id, field, value);
  };

  const handleAddLanguage = () => {
    addLanguage();
  };

  const handleRemoveLanguage = (id) => {
    if (window.confirm('Are you sure you want to remove this language?')) {
      removeLanguage(id);
    }
  };

  return (
    <div className="p-4 bg-white rounded-b-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-800">Languages</h2>
        <p className="text-sm text-gray-500">Optional</p>
      </div>
      
      {languages.length === 0 ? (
        <div className="text-center py-6 bg-gray-50 rounded border border-dashed border-gray-300">
          <p className="text-gray-500 mb-4">No languages added yet</p>
          <button 
            onClick={handleAddLanguage}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded inline-flex items-center gap-1"
          >
            <FaPlus size={12} /> Add Language
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {languages.map((lang) => (
            <div key={lang.id} className="p-4 border border-gray-200 rounded-lg relative flex items-center">
              <div className="text-blue-500 mr-3">
                <FaGlobe size={20} />
              </div>
              
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    value={lang.name} 
                    onChange={(e) => handleChange(lang.id, 'name', e.target.value)}
                    placeholder="e.g., English, Spanish, French"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Proficiency</label>
                  <select
                    className="w-full p-2 border rounded"
                    value={lang.proficiency}
                    onChange={(e) => handleChange(lang.id, 'proficiency', e.target.value)}
                  >
                    {proficiencyLevels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button 
                onClick={() => handleRemoveLanguage(lang.id)}
                className="ml-3 text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          
          <button 
            onClick={handleAddLanguage}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center gap-1"
          >
            <FaPlus size={12} /> Add Another Language
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguagesForm;