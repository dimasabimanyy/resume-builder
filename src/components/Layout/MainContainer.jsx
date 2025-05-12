// src/components/Layout/MainContainer.jsx
import React, { useState } from 'react';
import { useResumeContext } from '../../context/ResumeContext';
import { exportToPDF } from '../../utils/pdfExport';
import FormTabs from '../Form/FormTabs';
import PersonalInfoForm from '../Form/PersonalInfoForm';
import ExperienceForm from '../Form/ExperienceForm';
import EducationForm from '../Form/EducationForm';
import SkillsForm from '../Form/SkillsForm';
import ResumePreview from '../Preview/ResumePreview';
import FloatingActionButton from '../UI/FloatingActionButton';

const MainContainer = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isExporting, setIsExporting] = useState(false);
  const { resumeData } = useResumeContext();
  
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
  
  const renderActiveForm = () => {
    switch (activeTab) {
      case 'personal':
        return <PersonalInfoForm />;
      case 'experience':
        return <ExperienceForm />;
      case 'education':
        return <EducationForm />;
      case 'skills':
        return <SkillsForm />;
      default:
        return <PersonalInfoForm />;
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="fade-in">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <FormTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="p-6 slide-up">
              {renderActiveForm()}
            </div>
          </div>
        </div>
        
        {/* Preview Section */}
        <div className="lg:sticky lg:top-8 self-start fade-in">
          <ResumePreview />
        </div>
      </div>
      
      {/* Floating Action Button for Mobile */}
      <FloatingActionButton 
        onClick={handleExportPDF}
        loading={isExporting}
      />
    </div>
  );
};

export default MainContainer;