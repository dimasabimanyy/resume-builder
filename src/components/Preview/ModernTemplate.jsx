import React from 'react';

const ModernTemplate = ({ resumeData }) => {
  const { personal, experience, education, skills } = resumeData;
  
  return (
    <div className="bg-white p-8 shadow-md">
      <div className="mb-8 pb-6 border-b-2 border-gray-300">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{personal.name || 'Your Name'}</h1>
        <div className="flex flex-wrap gap-3 mt-2 text-gray-600 text-sm">
          {personal.email && <span className="flex items-center gap-1"><span className="font-medium">Email:</span> {personal.email}</span>}
          {personal.phone && <span className="flex items-center gap-1"><span className="font-medium">Phone:</span> {personal.phone}</span>}
          {personal.location && <span className="flex items-center gap-1"><span className="font-medium">Location:</span> {personal.location}</span>}
        </div>
        {personal.summary && <p className="mt-4 text-gray-700 leading-relaxed">{personal.summary}</p>}
      </div>
      
      {experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 pb-1 border-b border-gray-200">Professional Experience</h2>
          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                  <h3 className="font-bold text-lg text-gray-800">{exp.position || 'Position'}</h3>
                  <span className="text-gray-600 text-sm bg-blue-50 px-2 py-0.5 rounded">
                    {exp.startDate}{exp.startDate && exp.endDate && ' - '}{exp.endDate}
                  </span>
                </div>
                <p className="text-blue-600 font-medium">{exp.company || 'Company'}</p>
                {exp.description && <p className="mt-2 text-gray-700 text-sm leading-relaxed">{exp.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 pb-1 border-b border-gray-200">Education</h2>
          <div className="space-y-5">
            {education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                  <h3 className="font-bold text-lg text-gray-800">{edu.degree || 'Degree'}</h3>
                  <span className="text-gray-600 text-sm bg-blue-50 px-2 py-0.5 rounded">
                    {edu.startDate}{edu.startDate && edu.endDate && ' - '}{edu.endDate}
                  </span>
                </div>
                <p className="text-blue-600 font-medium">{edu.institution || 'Institution'}</p>
                {edu.description && <p className="mt-2 text-gray-700 text-sm leading-relaxed">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {skills.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 pb-1 border-b border-gray-200">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-sm">
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