// src/components/UI/EmptyState.jsx
import React from 'react';

const EmptyState = ({ 
  icon, 
  title, 
  message, 
  actionText, 
  onAction 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      {icon && (
        <div className="text-neutral-400 mb-4">
          {icon}
        </div>
      )}
      
      <h3 className="text-lg font-medium text-neutral-900 mb-2">
        {title}
      </h3>
      
      <p className="text-neutral-500 max-w-md mb-6">
        {message}
      </p>
      
      {onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;