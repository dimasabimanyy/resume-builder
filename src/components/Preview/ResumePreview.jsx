import React, { useState } from 'react';
import { useResumeContext } from '../../context/ResumeContext';
import ModernTemplate from './ModernTemplate';
import ClassicTemplate from './ClassicTemplate';
import { FaEye, FaPalette } from 'react-icons/fa';
import TemplateSelectionModal from './TemplateSelectionModal';

const ResumePreview = () => {
  const { resumeData } = useResumeContext();
  const { selectedTemplate } = resumeData;
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaEye className="text-gray-600" />
            <h2 className="font-medium text-gray-700">Resume Preview</h2>
          </div>
          <button 
            onClick={openModal}
            className="flex items-center gap-2 text-sm btn-secondary"
          >
            <FaPalette size={14} />
            <span>Change Template</span>
          </button>
        </div>
        
        <div className="overflow-y-auto p-6 bg-gray-100 min-h-[800px]" id="resume-preview">
  <div 
    className="resume-container mx-auto bg-white" 
    style={{
      width: '210mm',
      minHeight: '297mm',
      maxWidth: '100%'
    }}
  >
    {selectedTemplate === 'modern' ? (
      <ModernTemplate resumeData={resumeData} />
    ) : (
      <ClassicTemplate resumeData={resumeData} />
    )}
  </div>
</div>
      </div>
      
      <TemplateSelectionModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

export default ResumePreview;