// src/components/Preview/ModernTemplate.jsx (updated)
import React from 'react';
import { FaLinkedin, FaGithub, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa';

const ModernTemplate = ({ resumeData }) => {
  const { personal, experience, education, skills, projects, certificates, languages } = resumeData;
  
  // Helper to check if a section has content
  const hasContent = (section) => {
    if (!section) return false;
    if (Array.isArray(section)) return section.length > 0;
    if (typeof section === 'object') return Object.values(section).some(val => val && val.trim !== '');
    return false;
  };
  
  // Helper to check if the online profiles exist
  const hasOnlineProfiles = () => {
    return personal.linkedin || personal.github || personal.website;
  };
  
  // Helper to format URLs properly
  const formatUrl = (url) => {
    if (!url) return '';
    return url.startsWith('http') ? url : `https://${url}`;
  };
  
  return (
    <div className="bg-white p-8">
      {/* Header Section */}
      <div className="mb-8 pb-4 border-b border-gray-300">
        <h1 className="text-3xl font-bold text-gray-800">{personal.name || 'Your Name'}</h1>
        
        <div className="flex flex-wrap gap-3 mt-2 text-gray-600 text-sm">
          {personal.email && <span>{personal.email}</span>}
          {personal.email && personal.phone && <span>•</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {(personal.email || personal.phone) && personal.location && <span>•</span>}
          {personal.location && <span>{personal.location}</span>}
        </div>
        
        {/* Online Profiles - Fixed alignment */}
        {hasOnlineProfiles() && (
          <div className="flex flex-wrap gap-4 mt-3">
            {personal.linkedin && (
              <a 
                href={formatUrl(personal.linkedin)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 text-sm"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <FaLinkedin style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'middle' }} /> 
                <span style={{ verticalAlign: 'middle' }}>LinkedIn</span>
              </a>
            )}
            {personal.github && (
              <a 
                href={formatUrl(personal.github)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-gray-900 text-sm"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <FaGithub style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'middle' }} /> 
                <span style={{ verticalAlign: 'middle' }}>GitHub</span>
              </a>
            )}
            {personal.website && (
              <a 
                href={formatUrl(personal.website)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-600 hover:text-green-800 text-sm"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <FaGlobe style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'middle' }} /> 
                <span style={{ verticalAlign: 'middle' }}>Portfolio</span>
              </a>
            )}
          </div>
        )}
        
        {personal.summary && <p className="mt-4 text-gray-700">{personal.summary}</p>}
      </div>
      
      {/* Experience Section */}
      {hasContent(experience) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={exp.id || index} className="mb-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                  <h3 className="font-bold text-gray-800">{exp.position || 'Position'}</h3>
                  <span className="text-gray-600 text-sm">
                    {exp.startDate}{exp.startDate && exp.endDate && ' - '}{exp.endDate}
                  </span>
                </div>
                <p className="text-blue-600 font-medium">{exp.company || 'Company'}</p>
                {exp.description && <p className="mt-2 text-gray-700 text-sm">{exp.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Projects Section */}
      {hasContent(projects) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200">
            Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={project.id || index} className="mb-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                  <h3 className="font-bold text-gray-800" style={{ display: 'flex', alignItems: 'center' }}>
                    {project.title || 'Project Title'}
                    {project.link && (
                      <a 
                        href={formatUrl(project.link)} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ marginLeft: '8px', color: '#3b82f6' }}
                      >
                        <FaExternalLinkAlt size={14} style={{ verticalAlign: 'middle' }} />
                      </a>
                    )}
                  </h3>
                  <span className="text-gray-600 text-sm">
                    {project.startDate}{project.startDate && project.endDate && ' - '}{project.endDate}
                  </span>
                </div>
                {project.technologies && (
                  <p className="text-blue-600 font-medium">{project.technologies}</p>
                )}
                {project.description && <p className="mt-2 text-gray-700 text-sm">{project.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Education Section */}
      {hasContent(education) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={edu.id || index} className="mb-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                  <h3 className="font-bold text-gray-800">{edu.degree || 'Degree'}</h3>
                  <span className="text-gray-600 text-sm">
                    {edu.startDate}{edu.startDate && edu.endDate && ' - '}{edu.endDate}
                  </span>
                </div>
                <p className="text-blue-600 font-medium">{edu.institution || 'Institution'}</p>
                {edu.description && <p className="mt-2 text-gray-700 text-sm">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Certificates Section */}
      {hasContent(certificates) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200">
            Certificates & Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <div key={cert.id || index} className="mb-2">
                <h3 className="font-bold text-gray-800" style={{ display: 'flex', alignItems: 'center' }}>
                  {cert.name || 'Certificate Name'}
                  {cert.link && (
                    <a 
                      href={formatUrl(cert.link)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ marginLeft: '8px', color: '#3b82f6' }}
                    >
                      <FaExternalLinkAlt size={14} style={{ verticalAlign: 'middle' }} />
                    </a>
                  )}
                </h3>
                <p className="text-gray-600">
                  <span className="text-blue-600">{cert.issuer}</span>
                  {cert.date && <span className="ml-2">({cert.date})</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Languages Section - Fixed padding */}
      {hasContent(languages) && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200">
            Languages
          </h2>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang, index) => (
              <div 
                key={lang.id || index} 
                className="bg-gray-100 rounded-lg"
                style={{ 
                  display: 'inline-block', 
                  padding: '8px 12px',
                  margin: '0 4px 8px 0'
                }}
              >
                <span className="font-medium">{lang.name}</span>
                <span className="text-gray-500 text-sm ml-2">({lang.proficiency})</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Skills Section - Fixed padding */}
      {hasContent(skills) && (
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                style={{ 
                  display: 'inline-block',
                  backgroundColor: '#ebf5ff', 
                  color: '#3b82f6',
                  border: '1px solid #bfdbfe',
                  borderRadius: '9999px',
                  padding: '4px 12px',
                  fontSize: '0.875rem',
                  margin: '0 4px 8px 0'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;