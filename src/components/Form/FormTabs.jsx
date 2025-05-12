// src/components/Form/FormTabs.jsx
import React from 'react';
import { FaUser, FaBriefcase, FaGraduationCap, FaTools } from 'react-icons/fa';

const FormTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'personal', label: 'Personal', icon: <FaUser /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'skills', label: 'Skills', icon: <FaTools /> }
  ];

  return (
    <div className="bg-white rounded-t-lg border border-neutral-200 overflow-hidden">
      <nav className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium flex-1 transition-all duration-200
              ${activeTab === tab.id 
                ? 'text-primary-600 border-b-2 border-primary-500 bg-primary-50' 
                : 'text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 border-b-2 border-transparent'}
            `}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default FormTabs;