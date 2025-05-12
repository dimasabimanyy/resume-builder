// src/components/Layout/Header.jsx (updated)
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
    setShowResetConfirm(true);
  };
  
  const confirmReset = () => {
    resetData();
    setShowResetConfirm(false);
  };
  
  const cancelReset = () => {
    setShowResetConfirm(false);
  };
  
  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {Logo ? <Logo /> : <h1 className="text-2xl font-bold">Resume Builder</h1>}
          
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
            
            <button 
              onClick={handleReset}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
              disabled={isExporting}
            >
              <FaTrash size={14} />
              <span>Reset</span>
            </button>
            
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
      
      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Reset Resume</h3>
            <p className="text-gray-600 mb-6">
              This will delete all your resume data. This action cannot be undone. Are you sure you want to continue?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelReset}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmReset}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Reset All Data
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;