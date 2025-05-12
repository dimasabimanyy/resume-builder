// src/components/Form/PersonalInfoForm.jsx
import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const PersonalInfoForm = () => {
  const { resumeData, updatePersonalInfo } = useResumeContext();
  const { personal } = resumeData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePersonalInfo(name, value);
  };

  return (
    <div className="p-4 bg-white rounded-b-lg shadow">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input 
          type="text" 
          name="name"
          className="w-full p-2 border rounded" 
          value={personal.name || ''} 
          onChange={handleChange}
          placeholder="e.g., John Doe"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            name="email"
            className="w-full p-2 border rounded" 
            value={personal.email || ''} 
            onChange={handleChange}
            placeholder="e.g., johndoe@example.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input 
            type="tel" 
            name="phone"
            className="w-full p-2 border rounded" 
            value={personal.phone || ''} 
            onChange={handleChange}
            placeholder="e.g., +1 234 567 890"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <input 
          type="text" 
          name="location"
          className="w-full p-2 border rounded" 
          value={personal.location || ''} 
          onChange={handleChange}
          placeholder="e.g., New York, NY"
        />
      </div>
      
      {/* New online presence fields */}
      <div className="mt-6 mb-4">
        <h3 className="text-gray-700 font-medium mb-2">Online Presence (Optional)</h3>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center">
            <span className="text-blue-600 mr-2"><FaLinkedin /></span>
            <input 
              type="text" 
              name="linkedin"
              className="w-full p-2 border rounded" 
              value={personal.linkedin || ''} 
              onChange={handleChange}
              placeholder="LinkedIn URL (e.g., linkedin.com/in/johndoe)"
            />
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-800 mr-2"><FaGithub /></span>
            <input 
              type="text" 
              name="github"
              className="w-full p-2 border rounded" 
              value={personal.github || ''} 
              onChange={handleChange}
              placeholder="GitHub URL (e.g., github.com/johndoe)"
            />
          </div>
          
          <div className="flex items-center">
            <span className="text-green-600 mr-2"><FaGlobe /></span>
            <input 
              type="text" 
              name="website"
              className="w-full p-2 border rounded" 
              value={personal.website || ''} 
              onChange={handleChange}
              placeholder="Portfolio or Website URL"
            />
          </div>
        </div>
      </div>
      
      <div className="mb-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
        <textarea 
          name="summary"
          className="w-full p-2 border rounded h-32" 
          value={personal.summary || ''}
          onChange={handleChange}
          placeholder="Brief overview of your professional background and key strengths..."
        ></textarea>
        <p className="text-xs text-gray-500 mt-1">
          A strong summary will grab the employer's attention. Keep it under 3-4 sentences.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoForm;