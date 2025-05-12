// src/components/UI/FloatingActionButton.jsx
import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const FloatingActionButton = ({ onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="fixed z-10 bottom-6 right-6 lg:hidden bg-primary-600 hover:bg-primary-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all"
    >
      {loading ? (
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
      ) : (
        <FaFilePdf size={24} />
      )}
    </button>
  );
};

export default FloatingActionButton;