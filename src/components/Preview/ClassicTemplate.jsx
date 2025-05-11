import React from "react";

const ClassicTemplate = ({ resumeData }) => {
  const { personal, experience, education, skills } = resumeData;

  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
      {/* Header - Classic style with centered text */}
      <div className="text-center mb-6 pb-4 border-b-2 border-gray-300">
        <h1 className="text-2xl font-serif uppercase tracking-wide text-gray-900">
          {personal.name || "Your Name"}
        </h1>
        <div className="mt-2 text-gray-700 text-sm">
          {(personal.email || personal.phone) && (
            <p>
              {personal.email}
              {personal.email && personal.phone && " | "}
              {personal.phone}
            </p>
          )}
          {personal.location && <p>{personal.location}</p>}
        </div>
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
      {experience.length > 0 && (
        <div className="mb-5">
          <h2 className="text-base font-serif uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
            Professional Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-800">
                  {exp.company || "Company"}
                </h3>
                <span className="text-gray-600 text-sm">
                  {exp.startDate}
                  {exp.startDate && exp.endDate && " - "}
                  {exp.endDate}
                </span>
              </div>
              <p className="italic text-gray-700 mb-1">
                {exp.position || "Position"}
              </p>
              {exp.description && (
                <p className="text-gray-700 text-sm">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-5">
          <h2 className="text-base font-serif uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-800">
                  {edu.institution || "Institution"}
                </h3>
                <span className="text-gray-600 text-sm">
                  {edu.startDate}
                  {edu.startDate && edu.endDate && " - "}
                  {edu.endDate}
                </span>
              </div>
              <p className="italic text-gray-700 mb-1">
                {edu.degree || "Degree"}
              </p>
              {edu.description && (
                <p className="text-gray-700 text-sm">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-base font-serif uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-3">
            Skills
          </h2>
          <p className="text-gray-700">{skills.join(" • ")}</p>
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;
