// src/components/UI/Toast.jsx
import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaInfoCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';

const Toast = ({ 
  type = 'success', 
  message, 
  duration = 3000,
  onClose 
}) => {
  const [visible, setVisible] = useState(true);
  
  const icons = {
    success: <FaCheckCircle size={20} />,
    info: <FaInfoCircle size={20} />,
    warning: <FaExclamationCircle size={20} />,
    error: <FaExclamationCircle size={20} />
  };
  
  const styles = {
    success: 'bg-green-50 text-green-800 border-green-400',
    info: 'bg-blue-50 text-blue-800 border-blue-400',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-400',
    error: 'bg-red-50 text-red-800 border-red-400'
  };
  
  const iconStyles = {
    success: 'text-green-500',
    info: 'text-blue-500',
    warning: 'text-yellow-500',
    error: 'text-red-500'
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // Wait for fade out animation
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration, onClose]);
  
  return (
    <div 
      className={`fixed bottom-4 right-4 max-w-md py-3 px-4 rounded-lg border shadow-md ${styles[type]} transition-all duration-300 ${visible ? 'opacity-100' : 'opacity-0 translate-y-2'}`}
    >
      <div className="flex items-start">
        <div className={`flex-shrink-0 ${iconStyles[type]}`}>
          {icons[type]}
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button 
          onClick={() => {
            setVisible(false);
            setTimeout(onClose, 300);
          }}
          className="ml-4 flex-shrink-0 text-neutral-400 hover:text-neutral-600"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Toast;
