// src/components/Layout/Logo.jsx
import React from 'react';

const Logo = ({ size = 'medium', monochrome = false }) => {
  const sizes = {
    small: 'h-6',
    medium: 'h-8',
    large: 'h-10'
  };
  
  const color = monochrome ? 'text-white' : 'text-primary-600';
  
  return (
    <div className={`flex items-center ${sizes[size]} font-bold`}>
      <span className={`${color} mr-1`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={sizes[size]}>
          <path d="M7 8a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z" fill="currentColor" />
          <path d="M7 12a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z" fill="currentColor" />
          <path d="M8 15a1 1 0 100 2h4a1 1 0 100-2H8z" fill="currentColor" />
          <path fillRule="evenodd" clipRule="evenodd" d="M4 4a3 3 0 013-3h10a3 3 0 013 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm3-1a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H7z" fill="currentColor" />
        </svg>
      </span>
      <span className="font-semibold text-neutral-800">Resume<span className={`${monochrome ? 'text-white' : 'text-primary-600'} font-bold`}>Builder</span></span>
    </div>
  );
};

export default Logo;