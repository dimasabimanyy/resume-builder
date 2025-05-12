import React, { useState } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';
import { useResumeContext } from '../../context/ResumeContext';

const TemplateSelectionModal = ({ isOpen, onClose }) => {
  const { resumeData, changeTemplate } = useResumeContext();
  const { selectedTemplate } = resumeData;
  const [selectedColor, setSelectedColor] = useState('emerald');
  
  const templates = [
    {
      id: 'modern',
      name: 'Modern',
      image: '/templates/modern-template.png', // You'll need to add these images
      recommended: true
    },
    {
      id: 'classic',
      name: 'Classic',
      image: '/templates/classic-template.png',
      recommended: true
    },
    {
      id: 'minimal',
      name: 'Minimal',
      image: '/templates/minimal-template.png',
      recommended: false
    },
    {
      id: 'professional',
      name: 'Professional',
      image: '/templates/professional-template.png',
      recommended: true
    },
    {
      id: 'creative',
      name: 'Creative',
      image: '/templates/creative-template.png',
      recommended: false
    },
    {
      id: 'executive',
      name: 'Executive',
      image: '/templates/executive-template.png',
      recommended: true
    }
  ];
  
  // In the real implementation, we'll only have 'modern' and 'classic' working
  // but showing more options makes the UI look more complete
  
  const colors = [
    { id: 'gray', value: '#6B7280' },
    { id: 'blue', value: '#2563EB' },
    { id: 'purple', value: '#7C3AED' }, 
    { id: 'cyan', value: '#0891B2' },
    { id: 'emerald', value: '#059669' },
    { id: 'green', value: '#16A34A' },
    { id: 'red', value: '#DC2626' },
    { id: 'pink', value: '#EC4899' },
    { id: 'yellow', value: '#EAB308' },
    { id: 'black', value: '#000000' },
    { id: 'white', value: '#FFFFFF', border: true },
    { id: 'lightblue', value: '#7DD3FC' },
    { id: 'lightgreen', value: '#86EFAC' },
    { id: 'neongreen', value: '#4ADE80' }
  ];
  
  const handleSelectTemplate = (templateId) => {
    // For now we'll only update template if it's one we've actually implemented
    if (templateId === 'modern' || templateId === 'classic') {
      changeTemplate(templateId);
    } else {
      // Show a message that only modern and classic are available
      alert("For the MVP, only Modern and Classic templates are available.");
    }
  };

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Change template</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Template Preview */}
          <div className="w-1/3 bg-gray-100 p-6 border-r overflow-y-auto">
            <div className="max-w-xs mx-auto bg-white shadow-lg p-4 rounded">
              {/* This would be a dynamic preview of the selected template */}
              <div className="aspect-[1/1.4] bg-gray-50 flex items-center justify-center">
                <img 
                  src={templates.find(t => t.id === selectedTemplate)?.image || '/templates/modern-template.png'} 
                  alt="Template preview" 
                  className="max-h-full object-contain"
                />
              </div>
            </div>
            
            {/* Color selection */}
            <div className="mt-6">
              <h3 className="font-medium mb-2">Choose color:</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map(color => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-8 h-8 rounded-full ${color.border ? 'border border-gray-300' : ''} ${selectedColor === color.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                    style={{ backgroundColor: color.value }}
                    aria-label={`Select ${color.id} color`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Template Gallery */}
          <div className="w-2/3 p-6 overflow-y-auto">
            <div className="grid grid-cols-2 gap-6">
              {templates.map(template => (
                <div key={template.id} className="relative">
                  <div 
                    className={`border rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg ${selectedTemplate === template.id ? 'ring-4 ring-blue-500' : ''}`}
                    onClick={() => handleSelectTemplate(template.id)}
                  >
                    <div className="aspect-[3/4] relative">
                      <img 
                        src={template.image}
                        alt={`${template.name} template`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Checkmark for selected template */}
                      {selectedTemplate === template.id && (
                        <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                          <FaCheck size={12} />
                        </div>
                      )}
                      
                      {/* Recommended badge */}
                      {template.recommended && (
                        <div className="absolute bottom-0 left-0 right-0 bg-teal-500 text-white text-center text-xs py-1 font-medium">
                          RECOMMENDED
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Modal Footer */}
        <div className="p-4 border-t flex justify-end">
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