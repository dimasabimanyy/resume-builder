import React from "react";
import { useResumeContext } from "../../context/ResumeContext";
import ModernTemplate from "./ModernTemplate";
import ClassicTemplate from "./ClassicTemplate";
import { FaEye, FaPalette } from "react-icons/fa";

const ResumePreview = () => {
  const { resumeData, changeTemplate } = useResumeContext();
  const { selectedTemplate } = resumeData;

  const handleTemplateChange = (e) => {
    changeTemplate(e.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaEye className="text-gray-600" />
          <h2 className="font-medium text-gray-700">Resume Preview</h2>
        </div>
        <div className="flex items-center bg-white rounded-md border border-gray-300 p-1 shadow-sm">
          <FaPalette className="text-gray-500 ml-2" />
          <select
            value={selectedTemplate}
            onChange={handleTemplateChange}
            className="text-sm border-0 focus:ring-0 py-1 px-2 rounded"
          >
            <option value="modern">Modern Template</option>
            <option value="classic">Classic Template</option>
          </select>
        </div>
      </div>

      <div
        className="overflow-y-auto p-6 bg-gray-100 min-h-[800px]"
        id="resume-preview"
      >
        <div className="max-w-[21cm] mx-auto shadow-lg">
          {selectedTemplate === "modern" ? (
            <ModernTemplate resumeData={resumeData} />
          ) : (
            <ClassicTemplate resumeData={resumeData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
