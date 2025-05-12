// src/App.jsx
import React from "react";
import { ResumeProvider } from "./context/ResumeContext";
import Header from "./components/Layout/Header";
import MainContainer from "./components/Layout/MainContainer";
import Footer from "./components/Layout/Footer";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <ResumeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 flex flex-col">
          <Header />
          <main className="flex-1">
            <MainContainer />
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </ResumeProvider>
  );
}

export default App;
