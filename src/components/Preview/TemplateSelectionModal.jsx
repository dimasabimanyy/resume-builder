import React, { useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import { useResumeContext } from "../../context/ResumeContext";
import ModernTemplate from "./ModernTemplate";
import ClassicTemplate from "./ClassicTemplate";

const TemplateSelectionModal = ({ isOpen, onClose }) => {
  const { resumeData, changeTemplate } = useResumeContext();
  const { selectedTemplate } = resumeData;
  const [selectedColor, setSelectedColor] = useState("emerald");

  const templates = [
    {
      id: "modern",
      name: "Modern",
      recommended: true,
    },
    {
      id: "classic",
      name: "Classic",
      recommended: true,
    },
    {
      id: "minimal",
      name: "Minimal",
      recommended: false,
    },
    {
      id: "professional",
      name: "Professional",
      recommended: true,
    },
    {
      id: "creative",
      name: "Creative",
      recommended: false,
    },
    {
      id: "executive",
      name: "Executive",
      recommended: true,
    },
  ];

  const colors = [
    { id: "gray", value: "#6B7280" },
    { id: "blue", value: "#2563EB" },
    { id: "purple", value: "#7C3AED" },
    { id: "cyan", value: "#0891B2" },
    { id: "emerald", value: "#059669" },
    { id: "green", value: "#16A34A" },
    { id: "red", value: "#DC2626" },
    { id: "pink", value: "#EC4899" },
    { id: "yellow", value: "#EAB308" },
    { id: "black", value: "#000000" },
    { id: "white", value: "#FFFFFF", border: true },
    { id: "lightblue", value: "#7DD3FC" },
    { id: "lightgreen", value: "#86EFAC" },
    { id: "neongreen", value: "#4ADE80" },
  ];

  const handleSelectTemplate = (templateId) => {
    // For now we'll only update template if it's one we've actually implemented
    if (templateId === "modern" || templateId === "classic") {
      changeTemplate(templateId);
    } else {
      // Show a message that only modern and classic are available
      alert("For the MVP, only Modern and Classic templates are available.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header - Fixed at top */}
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold">Change template</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>
        
        {/* Color Selection - Fixed below header */}
        <div className="p-4 border-b bg-white sticky top-[57px] z-10">
          <div className="flex items-center">
            <h3 className="text-gray-700 font-medium mr-4 whitespace-nowrap">Choose color:</h3>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-7 h-7 rounded-full ${
                    color.border ? "border border-gray-300" : ""
                  } ${
                    selectedColor === color.id
                      ? "ring-2 ring-offset-1 ring-blue-500"
                      : ""
                  }`}
                  style={{ backgroundColor: color.value }}
                  aria-label={`Select ${color.id} color`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left - Current Template Preview */}
            <div className="md:col-span-4">
              <h3 className="text-gray-700 font-medium mb-4">Preview</h3>
              <div className="w-full bg-white border rounded-lg overflow-hidden shadow-sm">
                {/* Simple static current template preview - always shows first page */}
                <div className="w-full aspect-[210/297] overflow-hidden">
                  {selectedTemplate === "modern" ? (
                    <div className="p-2 transform scale-[0.32] origin-top-left" style={{ width: "310%" }}>
                      <ModernTemplate resumeData={resumeData} />
                    </div>
                  ) : (
                    <div className="p-2 transform scale-[0.32] origin-top-left" style={{ width: "310%" }}>
                      <ClassicTemplate resumeData={resumeData} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right - Template Options in Grid */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {templates.slice(0, 2).map((template) => (
                  <div key={template.id} className="relative">
                    <div 
                      className={`border rounded-lg cursor-pointer transition-all hover:shadow-lg overflow-hidden ${
                        selectedTemplate === template.id ? "ring-4 ring-blue-500" : ""
                      }`}
                      onClick={() => handleSelectTemplate(template.id)}
                    >
                      {/* Template thumbnail */}
                      <div className="aspect-[3/4] bg-white relative">
                        {template.id === "modern" ? (
                          <div className="p-2 transform scale-[0.28] origin-top-left" style={{ width: "350%" }}>
                            <ModernTemplate resumeData={resumeData} />
                          </div>
                        ) : template.id === "classic" ? (
                          <div className="p-2 transform scale-[0.28] origin-top-left" style={{ width: "350%" }}>
                            <ClassicTemplate resumeData={resumeData} />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <span className="text-gray-400">Preview not available</span>
                          </div>
                        )}
                        
                        {/* Selected checkmark */}
                        {selectedTemplate === template.id && (
                          <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1 z-10">
                            <FaCheck size={16} />
                          </div>
                        )}
                        
                        {/* Recommended badge */}
                        {template.recommended && (
                          <div className="absolute bottom-0 left-0 right-0 bg-teal-500 text-white text-center text-sm py-1 font-medium">
                            RECOMMENDED
                          </div>
                        )}
                      </div>
                      
                      {/* Template name */}
                      <div className="p-2 text-center">
                        <h3 className="font-medium">{template.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional templates in a second row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {templates.slice(2, 4).map((template) => (
                  <div key={template.id} className="relative">
                    <div 
                      className="border rounded-lg cursor-pointer transition-all hover:shadow-lg overflow-hidden"
                      onClick={() => handleSelectTemplate(template.id)}
                    >
                      {/* Placeholder for non-implemented templates */}
                      <div className="aspect-[3/4] bg-gray-50 flex items-center justify-center">
                        <span className="text-gray-400">Coming soon</span>
                      </div>
                      
                      {/* Recommended badge */}
                      {template.recommended && (
                        <div className="absolute bottom-0 left-0 right-0 bg-teal-500 text-white text-center text-sm py-1 font-medium">
                          RECOMMENDED
                        </div>
                      )}
                      
                      {/* Template name */}
                      <div className="p-2 text-center">
                        <h3 className="font-medium">{template.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer - Fixed at bottom */}
        <div className="p-4 border-t sticky bottom-0 bg-white flex justify-end z-10">
          <button
            onClick={onClose}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelectionModal;