// src/components/Layout/Header.jsx
import React, { useState } from 'react';
import Logo from './Logo';
import { useResumeContext } from '../../context/ResumeContext';
import { exportToPDF } from '../../utils/pdfExport';
import { FaFileDownload, FaTrash, FaGithub } from 'react-icons/fa';

const Header = () => {
  const { resumeData, resetData } = useResumeContext();
  const [isExporting, setIsExporting] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  
  const handleExportPDF = async () => {
    try {
      setIsExporting(true);
      await exportToPDF('resume-preview', `${resumeData.personal.name || 'Resume'}.pdf`);
    } catch (error) {
      console.error('PDF Export Error:', error);
      alert('There was a problem generating your PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };
  
  const handleReset = () => {
    if (showResetConfirm) {
      resetData();
      setShowResetConfirm(false);
    } else {
      setShowResetConfirm(true);
      // Auto-hide after 3 seconds
      setTimeout(() => setShowResetConfirm(false), 3000);
    }
  };
  
  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          <div className="flex items-center space-x-4">
            {/* GitHub button - can link to your project */}
            <a 
              href="https://github.com/yourusername/resume-builder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-700 transition-colors"
              aria-label="View source on GitHub"
            >
              <FaGithub size={20} />
            </a>
            
            <div className="relative">
              <button 
                onClick={handleReset}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  showResetConfirm 
                    ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                disabled={isExporting}
              >
                <FaTrash size={14} />
                <span>{showResetConfirm ? 'Confirm Reset' : 'Reset'}</span>
              </button>
              
              {showResetConfirm && (
                <div className="absolute bottom-full mb-2 w-48 p-2 bg-neutral-800 text-white text-xs rounded shadow-lg animate-fade-in">
                  This will delete all your data!
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-neutral-800"></div>
                </div>
              )}
            </div>
            
            <button 
              onClick={handleExportPDF}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md shadow-sm transition-colors"
              disabled={isExporting}
            >
              <FaFileDownload size={16} />
              <span>{isExporting ? 'Exporting...' : 'Export PDF'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;