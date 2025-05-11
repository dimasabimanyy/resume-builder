import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';
import { exportToPDF } from '../../utils/pdfExport';
import { FaFileDownload, FaTrash } from 'react-icons/fa';

const Header = () => {
  const { resumeData, resetData } = useResumeContext();
  
  const handleExportPDF = () => {
    exportToPDF('resume-preview', `${resumeData.personal.name || 'Resume'}.pdf`);
  };
  
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-6 pb-6 border-b border-gray-200">
      <div className="mb-4 sm:mb-0">
        <h1 className="text-3xl font-bold text-gray-800">Resume Builder</h1>
        <p className="text-gray-500 mt-1">Create a professional resume in minutes</p>
      </div>
      <div className="flex gap-3">
        <button 
          onClick={resetData}
          className="flex items-center gap-2 btn-secondary"
        >
          <FaTrash size={14} />
          <span>Reset</span>
        </button>
        <button 
          onClick={handleExportPDF}
          className="flex items-center gap-2 btn-success"
        >
          <FaFileDownload size={16} />
          <span>Export PDF</span>
        </button>
      </div>
    </header>
  );
};

export default Header;