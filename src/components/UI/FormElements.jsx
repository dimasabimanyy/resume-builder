// src/components/UI/FormElements.jsx
import React from 'react';

export const FormSection = ({ title, children }) => (
  <div className="mb-6">
    {title && <h3 className="text-lg font-medium text-neutral-800 mb-4">{title}</h3>}
    {children}
  </div>
);

export const FormRow = ({ children, cols = 1 }) => (
  <div className={`grid grid-cols-1 ${cols > 1 ? `md:grid-cols-${cols}` : ''} gap-4 mb-4`}>
    {children}
  </div>
);

export const TextField = ({ 
  label, 
  id, 
  name, 
  value, 
  onChange, 
  placeholder, 
  type = 'text',
  required = false,
  helper = null
}) => (
  <div className="w-full">
    {label && (
      <label htmlFor={id} className="block text-sm font-medium text-neutral-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <input 
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
    />
    {helper && <p className="mt-1 text-xs text-neutral-500">{helper}</p>}
  </div>
);

export const TextArea = ({ 
  label, 
  id, 
  name, 
  value, 
  onChange, 
  placeholder,
  rows = 4,
  required = false,
  helper = null
}) => (
  <div className="w-full">
    {label && (
      <label htmlFor={id} className="block text-sm font-medium text-neutral-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <textarea 
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors resize-y"
    />
    {helper && <p className="mt-1 text-xs text-neutral-500">{helper}</p>}
  </div>
);

export const Button = ({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary',
  size = 'medium',
  icon = null,
  fullWidth = false,
  disabled = false
}) => {
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-neutral-200 hover:bg-neutral-300 text-neutral-800',
    outline: 'bg-transparent hover:bg-neutral-50 text-neutral-700 border border-neutral-300',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white'
  };
  
  const sizes = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4',
    large: 'py-2.5 px-5 text-lg'
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'} 
        rounded-md font-medium flex items-center justify-center gap-2 transition-all
      `}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
};