
// Also create a toast context to manage toasts globally
// src/context/ToastContext.jsx
import React, { createContext, useContext, useState } from 'react';
import Toast from '../components/UI/Toast';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  
  const addToast = (type, message, duration = 3000) => {
    const id = Date.now();
    setToasts(prevToasts => [...prevToasts, { id, type, message, duration }]);
    return id;
  };
  
  const removeToast = (id) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  };
  
  const value = {
    showSuccess: (message, duration) => addToast('success', message, duration),
    showInfo: (message, duration) => addToast('info', message, duration),
    showWarning: (message, duration) => addToast('warning', message, duration),
    showError: (message, duration) => addToast('error', message, duration)
  };
  
  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};