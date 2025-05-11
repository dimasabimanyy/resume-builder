import React, { useState } from 'react';
import FormTabs from '../Form/FormTabs';
import PersonalInfoForm from '../Form/PersonalInfoForm';
import ExperienceForm from '../Form/ExperienceForm';
import EducationForm from '../Form/EducationForm';
import SkillsForm from '../Form/SkillsForm';
import ResumePreview from '../Preview/ResumePreview';

const MainContainer = () => {
  const [activeTab, setActiveTab] = useState('personal');
  
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
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      {/* Form Section */}
      <div className="flex flex-col">
        <FormTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderActiveForm()}
      </div>
      
      {/* Preview Section */}
      <div className="hidden xl:block sticky top-8 self-start">
        <ResumePreview />
      </div>
      
      {/* Mobile Preview (shown below form on smaller screens) */}
      <div className="xl:hidden">
        <ResumePreview />
      </div>
    </div>
  );
};

export default MainContainer;