// src/components/Preview/ClassicTemplate.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa';

const ClassicTemplate = ({ resumeData }) => {
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
  
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
      {/* Header - Classic style with centered text */}
      <div className="text-center mb-6 pb-4 border-b-2 border-gray-300">
        <h1 className="text-2xl font-serif uppercase tracking-wide text-gray-900">
          {personal.name || 'Your Name'}
        </h1>
        <div className="mt-2 text-gray-700 text-sm">
          {(personal.email || personal.phone) && (
            <p>
              {personal.email}{personal.email && personal.phone && ' | '}{personal.phone}
            </p>
          )}
          {personal.location && <p>{personal.location}</p>}
        </div>
        
        {/* Online Profiles */}
        {hasOnlineProfiles() && (
          <div className="flex justify-center gap-4 mt-2">
            {personal.linkedin && (
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm">
                <FaLinkedin /> LinkedIn
              </a>
            )}
            {personal.github && (
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex items-center gap-1 text-sm">
                <FaGithub /> GitHub
              </a>
            )}
            {personal.website && (
              <a href={personal.website} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 flex items-center gap-1 text-sm">
                <FaGlobe /> Portfolio
              </a>
            )}
          </div>
        )}
      </div>
      
      {/* Professional Summary */}
      {personal.summary && (
        <div className="mb-5">
          <h2 className="text-base font-serif uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
            Professional Summary
          </h2>
          <p className="text-gray-700">{personal.summary}</p>
        </div>
      )}
      
      {/* Experience */}
      {hasContent(experience) && (
        <div className="mb-5">
          <h2 className="text-base font-serif uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
            Professional Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={exp.id || index} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-800">{exp.company || 'Company'}</h3>
                <span className="text-gray-600 text-sm">
                  {exp.startDate}{exp.startDate && exp.endDate && ' - '}{exp.endDate}
                </span>
              </div>
              <p className="italic text-gray-700 mb-1">{exp.position || 'Position'}</p>
              {exp.description && <p className="text-gray-700 text-sm">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}
      
      {/* Projects Section (New) */}
      {hasContent(projects) && (
        <div className="mb-5">
          <h2 className="text-base font-serif uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
            Projects
          </h2>
          {projects.map((project, index) => (
            <div key={project.id || index} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  {project.title || 'Project'}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </h3>
                <span className="text-gray-600 text-sm">
                  {project.startDate}{project.startDate && project.endDate && ' - '}{project.endDate}
                </span>
              </div>
              {project.technologies && (
                <p className="italic text-gray-700 mb-1">{project.technologies}</p>
              )}
              {project.description && <p className="text-gray-700 text-sm">{project.description}</p>}
            </div>
          ))}
        </div>
      )}
      
      {/* Education */}
      {hasContent(education) && (
        <div className="mb-5">
          <h2 className="text-base font-serif uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={edu.id || index} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-800">{edu.institution || 'Institution'}</h3>
                <span className="text-gray-600 text-sm">
                  {edu.startDate}{edu.startDate && edu.endDate && ' - '}{edu.endDate}
                </span>
              </div>
              <p className="italic text-gray-700 mb-1">{edu.degree || 'Degree'}</p>
              {edu.description && <p className="text-gray-700 text-sm">{edu.description}</p>}
            </div>
          ))}
        </div>
      )}
      
      {/* Certificates Section (New) */}
      {hasContent(certificates) && (
        <div className="mb-5">
          <h2 className="text-base font-serif uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
            Certificates & Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            {certificates.map((cert, index) => (
              <div key={cert.id || index}>
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  {cert.name || 'Certificate'}
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </h3>
                <p className="text-gray-600 text-sm">
                  {cert.issuer}{cert.date && `, ${cert.date}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Languages Section (New) */}
      {hasContent(languages) && (
        <div className="mb-5">
          <h2 className="text-base font-serif uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
            Languages
          </h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {languages.map((lang, index) => (
              <div key={lang.id || index} className="text-gray-700">
                <span className="font-medium">{lang.name}</span>
                <span className="text-gray-500 italic ml-1">({lang.proficiency})</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Skills */}
      {hasContent(skills) && (
        <div>
          <h2 className="text-base font-serif uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
            Skills
          </h2>
          <p className="text-gray-700">{skills.join(' • ')}</p>
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;