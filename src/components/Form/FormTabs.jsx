import React from 'react';
import { 
  FaUser, 
  FaBriefcase, 
  FaGraduationCap, 
  FaTools 
} from 'react-icons/fa';

const FormTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'personal', label: 'Personal', icon: <FaUser /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'skills', label: 'Skills', icon: <FaTools /> }
  ];

  return (
    <div className="bg-white rounded-t-lg border border-gray-200 overflow-hidden">
      <nav className="flex flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center gap-2 px-4 py-3 text-sm font-medium flex-1 transition-colors duration-200
              ${activeTab === tab.id 
                ? 'text-blue-600 border-b-2 border-blue-500 bg-blue-50' 
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-b-2 border-transparent'}
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