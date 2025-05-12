// src/context/ResumeContext.jsx (updated)
import React, { createContext, useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ResumeContext = createContext();

export const useResumeContext = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  // Updated initial data structure with new fields
  const initialData = {
    personal: {
      name: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
      linkedin: '',  // New field
      github: '',    // New field
      website: '',   // New field
    },
    experience: [],
    education: [],
    skills: [],
    // New sections
    projects: [],
    certificates: [],
    languages: [],
    selectedTemplate: 'modern',
  };

  // Get data from localStorage or use initial data
  const [resumeData, setResumeData] = useState(() => {
    try {
      const savedData = localStorage.getItem('resumeData');
      return savedData ? JSON.parse(savedData) : initialData;
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return initialData;
    }
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    try {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [resumeData]);

  // Update personal info
  const updatePersonalInfo = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value
      }
    }));
  };

  // Experience methods (existing)
  const addExperience = () => {
    const newExperience = {
      id: uuidv4(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }));
    
    return newExperience.id;
  };

  const updateExperience = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  // Education methods (existing)
  const addEducation = () => {
    const newEducation = {
      id: uuidv4(),
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEducation]
    }));
    
    return newEducation.id;
  };

  const updateEducation = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  // Projects methods (new)
  const addProject = () => {
    const newProject = {
      id: uuidv4(),
      title: '',
      description: '',
      technologies: '',
      link: '',
      startDate: '',
      endDate: ''
    };

    console.log({resumeData});
    
    // setResumeData(prev => ({
    //   ...prev,
    //   projects: [...prev.projects, newProject]
    // }));
    
    return newProject.id;
  };

  const updateProject = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === id ? { ...project, [field]: value } : project
      )
    }));
  };

  const removeProject = (id) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }));
  };

  // Certificates methods (new)
  const addCertificate = () => {
    const newCertificate = {
      id: uuidv4(),
      name: '',
      issuer: '',
      date: '',
      link: ''
    };
    
    setResumeData(prev => ({
      ...prev,
      certificates: [...prev.certificates, newCertificate]
    }));
    
    return newCertificate.id;
  };

  const updateCertificate = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      certificates: prev.certificates.map(cert => 
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    }));
  };

  const removeCertificate = (id) => {
    setResumeData(prev => ({
      ...prev,
      certificates: prev.certificates.filter(cert => cert.id !== id)
    }));
  };

  // Languages methods (new)
  const addLanguage = () => {
    const newLanguage = {
      id: uuidv4(),
      name: '',
      proficiency: 'Intermediate' // Default value
    };
    
    setResumeData(prev => ({
      ...prev,
      languages: [...prev.languages, newLanguage]
    }));
    
    return newLanguage.id;
  };

  const updateLanguage = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      languages: prev.languages.map(lang => 
        lang.id === id ? { ...lang, [field]: value } : lang
      )
    }));
  };

  const removeLanguage = (id) => {
    setResumeData(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang.id !== id)
    }));
  };

  // Skills methods (existing)
  const updateSkills = (skillsArray) => {
    setResumeData(prev => ({
      ...prev,
      skills: skillsArray
    }));
  };

  // Template methods (existing)
  const changeTemplate = (template) => {
    setResumeData(prev => ({
      ...prev,
      selectedTemplate: template
    }));
  };

  // Reset all data
  const resetData = () => {
    setResumeData(initialData);
  };

  const value = {
    resumeData,
    updatePersonalInfo,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    updateSkills,
    changeTemplate,
    resetData,
    // New methods
    addProject,
    updateProject,
    removeProject,
    addCertificate,
    updateCertificate,
    removeCertificate,
    addLanguage,
    updateLanguage,
    removeLanguage
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};