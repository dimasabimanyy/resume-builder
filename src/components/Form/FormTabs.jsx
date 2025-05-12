// src/components/Form/FormTabs.jsx
import React from 'react';
import { 
  FaUser, 
  FaBriefcase, 
  FaGraduationCap, 
  FaTools,
  FaCode,
  FaCertificate,
  FaLanguage
} from 'react-icons/fa';

const FormTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'personal', label: 'Personal', icon: <FaUser /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'skills', label: 'Skills', icon: <FaTools /> },
    { id: 'projects', label: 'Projects', icon: <FaCode /> },
    { id: 'certificates', label: 'Certificates', icon: <FaCertificate /> },
    { id: 'languages', label: 'Languages', icon: <FaLanguage /> }
  ];

  return (
    <div className="bg-white rounded-t-lg border border-gray-200 overflow-x-auto">
      <nav className="flex whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center gap-2 px-4 py-3 text-sm font-medium
              ${activeTab === tab.id 
                ? 'text-blue-600 border-b-2 border-blue-500 bg-blue-50' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50 border-b-2 border-transparent'}
            `}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default FormTabs;