import React from 'react';
import { ResumeProvider } from './context/ResumeContext';
import Header from './components/Layout/Header';
import MainContainer from './components/Layout/MainContainer';

function App() {
  return (
    <ResumeProvider>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
          <Header />
          <MainContainer />
          
          <footer className="mt-10 text-center text-gray-500 text-sm py-6 border-t border-gray-200">
            <p>© 2025 Resume Builder Online | Build professional resumes in minutes</p>
          </footer>
        </div>
      </div>
    </ResumeProvider>
  );
}

export default App;