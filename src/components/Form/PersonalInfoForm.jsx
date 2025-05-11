import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';

const PersonalInfoForm = () => {
  const { resumeData, updatePersonalInfo } = useResumeContext();
  const { personal } = resumeData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePersonalInfo(name, value);
  };

  return (
    <div className="form-section rounded-t-none">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="form-label">Full Name</label>
          <input 
            type="text" 
            name="name"
            className="input-field" 
            value={personal.name} 
            onChange={handleChange}
            placeholder="e.g., John Doe"
          />
        </div>
        
        <div>
          <label className="form-label">Email</label>
          <input 
            type="email" 
            name="email"
            className="input-field" 
            value={personal.email} 
            onChange={handleChange}
            placeholder="e.g., john.doe@example.com"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="form-label">Phone</label>
          <input 
            type="tel" 
            name="phone"
            className="input-field" 
            value={personal.phone} 
            onChange={handleChange}
            placeholder="e.g., +62 812 3456 7890"
          />
        </div>
        
        <div>
          <label className="form-label">Location</label>
          <input 
            type="text" 
            name="location"
            className="input-field" 
            value={personal.location} 
            onChange={handleChange}
            placeholder="e.g., Jakarta, Indonesia"
          />
        </div>
      </div>
      
      <div className="mb-1">
        <label className="form-label">Professional Summary</label>
        <textarea 
          name="summary"
          className="input-field h-32" 
          value={personal.summary}
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