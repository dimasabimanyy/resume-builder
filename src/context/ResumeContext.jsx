import React, { createContext, useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const ResumeContext = createContext();

export const useResumeContext = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  // Initial data structure
  const initialData = {
    personal: {
      name: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
    },
    experience: [],
    education: [],
    skills: [],
    selectedTemplate: "modern",
  };

  // Get data from localStorage or use initial data
  const [resumeData, setResumeData] = useState(() => {
    const savedData = localStorage.getItem("resumeData");
    return savedData ? JSON.parse(savedData) : initialData;
  });

  const [templateColor, setTemplateColor] = useState("emerald");

  const changeTemplateColor = (color) => {
    setTemplateColor(color);
  };

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  // Update personal info
  const updatePersonalInfo = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  // Add experience entry
  const addExperience = () => {
    const newExperience = {
      id: uuidv4(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    };

    setResumeData((prev) => ({
      ...prev,
      experience: [...prev.experience, newExperience],
    }));

    return newExperience.id;
  };

  // Update experience entry
  const updateExperience = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  // Remove experience entry
  const removeExperience = (id) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  // Add education entry
  const addEducation = () => {
    const newEducation = {
      id: uuidv4(),
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    };

    setResumeData((prev) => ({
      ...prev,
      education: [...prev.education, newEducation],
    }));

    return newEducation.id;
  };

  // Update education entry
  const updateEducation = (id, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  // Remove education entry
  const removeEducation = (id) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  // Update skills
  const updateSkills = (skillsArray) => {
    setResumeData((prev) => ({
      ...prev,
      skills: skillsArray,
    }));
  };

  // Change template
// In your ResumeContext.jsx
const changeTemplate = (template) => {
  // Simply update the template without complex operations
  setResumeData(prev => {
    // Create a new object to ensure state change is detected
    return {
      ...prev,
      selectedTemplate: template
    };
  });
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
    templateColor,
    changeTemplateColor,
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};
