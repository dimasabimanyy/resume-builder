import React from 'react';

const ModernTemplate = ({ resumeData }) => {
  const { personal, experience, education, skills } = resumeData;
  
  return (
    <div className="p-6 md:p-8 min-h-full">
      {/* Header Section */}
      <div className="mb-6 pb-4 border-b border-gray-300 text-center">
        <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-wider">
          {personal.name || 'YOUR NAME'}
        </h1>
        
        <div className="mt-2 text-gray-600 text-sm">
          <span>{personal.email || ''}</span>
          {personal.email && personal.phone && <span> | </span>}
          <span>{personal.phone || ''}</span>
          {(personal.email || personal.phone) && personal.location && <span> | </span>}
          <span>{personal.location || ''}</span>
        </div>
      </div>
      
      {/* Professional Summary */}
      {personal.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2 border-b border-gray-200 pb-1">
            Professional Summary
          </h2>
          <p className="text-gray-700">{personal.summary}</p>
        </div>
      )}
      
      {/* Experience Section */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2 border-b border-gray-200 pb-1">
            Professional Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                <div>
                  <h3 className="font-bold text-gray-800">{exp.company || 'Company'}</h3>
                  <p className="italic text-gray-700">{exp.position || 'Position'}</p>
                </div>
                <span className="text-gray-600 text-sm">
                  {exp.startDate || ''}{exp.startDate && exp.endDate && ' - '}{exp.endDate || ''}
                </span>
              </div>
              {exp.description && <p className="mt-1 text-gray-700 text-sm">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}
      
      {/* Education Section */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2 border-b border-gray-200 pb-1">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                <div>
                  <h3 className="font-bold text-gray-800">{edu.institution || 'Institution'}</h3>
                  <p className="italic text-gray-700">{edu.degree || 'Degree'}</p>
                </div>
                <span className="text-gray-600 text-sm">
                  {edu.startDate || ''}{edu.startDate && edu.endDate && ' - '}{edu.endDate || ''}
                </span>
              </div>
              {edu.description && <p className="mt-1 text-gray-700 text-sm">{edu.description}</p>}
            </div>
          ))}
        </div>
      )}
      
      {/* Skills Section */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-gray-800 uppercase mb-2 border-b border-gray-200 pb-1">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">
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