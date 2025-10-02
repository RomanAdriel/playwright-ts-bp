// App.jsx
import { useState } from 'react';
import HomePage from './pages/HomePage';
import FoldersPage from './pages/FoldersPage';
import './App.css';
import reports from './assets/reports.json';
import type { ReportFile } from './types/ReportsFile';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [currentEnvironment, setCurrentEnvironment] = useState('');

  const reportsFile: ReportFile = reports as ReportFile;
  

  const handleEnvironmentClick = (environment: string) => {
    setCurrentEnvironment(environment);
    setCurrentView('folders');
  };

  const handleFolderClick = (folderName: string) => {
    const reportUrl = `reports/${currentEnvironment}/${folderName}/index.html`;
    window.open(reportUrl, '_blank');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setCurrentEnvironment('');
  };

  return (
    <div className="font-sans">
      {currentView === 'home' && (
        <HomePage onEnvironmentClick={handleEnvironmentClick} />
      )}
      {currentView === 'folders' && (
        <FoldersPage
          currentEnvironment={currentEnvironment}
          reportsFile={reportsFile}
          onFolderClick={handleFolderClick} 
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
};

export default App;