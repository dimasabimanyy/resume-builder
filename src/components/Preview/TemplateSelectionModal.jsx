import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';
import { useResumeContext } from '../../context/ResumeContext';
import ModernTemplate from './ModernTemplate';
import ClassicTemplate from './ClassicTemplate';

const TemplateSelectionModal = ({ isOpen, onClose }) => {
  const { resumeData, changeTemplate } = useResumeContext();
  const { selectedTemplate } = resumeData;
  const [selectedColor, setSelectedColor] = useState('emerald');
  const previewRef = useRef(null);
  
  // Scale factor for the preview (makes it smaller to fit in the sidebar)
  const [scale, setScale] = useState(0.4);
  
  // Resize the preview when window size changes
  useEffect(() => {
    if (isOpen && previewRef.current) {
      const calculateScale = () => {
        const previewWidth = previewRef.current.offsetWidth;
        const containerWidth = previewRef.current.parentElement.offsetWidth;
        // Calculate scale, but don't let it get too small
        const newScale = Math.max(0.3, Math.min(0.5, (containerWidth - 40) / previewWidth));
        setScale(newScale);
      };
      
      calculateScale();
      window.addEventListener('resize', calculateScale);
      
      return () => {
        window.removeEventListener('resize', calculateScale);
      };
    }
  }, [isOpen, selectedTemplate]);
  
  const templates = [
    {
      id: 'modern',
      name: 'Modern',
      recommended: true
    },
    {
      id: 'classic',
      name: 'Classic',
      recommended: true
    },
    {
      id: 'minimal',
      name: 'Minimal',
      recommended: false
    },
    {
      id: 'professional',
      name: 'Professional',
      recommended: true
    },
    {
      id: 'creative',
      name: 'Creative',
      recommended: false
    },
    {
      id: 'executive',
      name: 'Executive',
      recommended: true
    }
  ];
  
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

  // This function renders the actual template with real data
  const renderSelectedTemplate = () => {
    switch(selectedTemplate) {
      case 'modern':
        return <ModernTemplate resumeData={resumeData} />;
      case 'classic':
        return <ClassicTemplate resumeData={resumeData} />;
      default:
        return <ModernTemplate resumeData={resumeData} />;
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
          <div className="w-1/3 bg-gray-100 p-6 border-r overflow-hidden">
            <div className="mb-4">
              <h3 className="font-medium text-gray-700 mb-2">Preview</h3>
            </div>
            <div className="flex justify-center">
              <div 
                className="origin-top bg-white shadow-lg rounded-lg overflow-hidden"
                style={{ 
                  transform: `scale(${scale})`, 
                  transformOrigin: 'top center',
                  width: '21cm',  // A4 width
                  height: '29.7cm', // A4 height
                  maxHeight: '80vh'
                }}
              >
                <div 
                  ref={previewRef} 
                  className="w-full"
                >
                  {renderSelectedTemplate()}
                </div>
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
              {templates.map(template => {
                // For templates we haven't implemented, use screenshots
                const useScreenshot = template.id !== 'modern' && template.id !== 'classic';
                
                return (
                  <div key={template.id} className="relative">
                    <div 
                      className={`border rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg ${selectedTemplate === template.id ? 'ring-4 ring-blue-500' : ''}`}
                      onClick={() => handleSelectTemplate(template.id)}
                    >
                      <div className="aspect-[3/4] relative bg-white">
                        {useScreenshot ? (
                          // For non-implemented templates, show a placeholder/screenshot
                          <img 
                            src={`/templates/${template.id}-template.png`}
                            alt={`${template.name} template`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // If image fails to load, show a fallback
                              e.target.src = '/templates/placeholder.png';
                            }}
                          />
                        ) : (
                          // For implemented templates, show a scaled-down rendered version
                          <div className="w-full h-full overflow-hidden" style={{ transform: 'scale(0.38)', transformOrigin: 'top left' }}>
                            <div className="w-full" style={{ width: '21cm' }}>
                              {template.id === 'modern' ? (
                                <ModernTemplate resumeData={resumeData} />
                              ) : (
                                <ClassicTemplate resumeData={resumeData} />
                              )}
                            </div>
                          </div>
                        )}
                        
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
                      <div className="p-2 text-center bg-white">
                        <h3 className="font-medium">{template.name}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
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