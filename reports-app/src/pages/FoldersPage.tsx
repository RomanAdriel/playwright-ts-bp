// pages/FoldersPage.jsx
import { ArrowLeft, Folder } from 'lucide-react';
import FolderCard from '../components/FolderCard';
import type { ReportFile } from '../types/ReportsFile';
import type { ReportData } from '../types/ReportData';

const FoldersPage = ({ currentEnvironment, reportsFile, onFolderClick, onBackToHome }: { currentEnvironment: string, reportsFile: ReportFile, onFolderClick: (folderName: string) => void, onBackToHome: () => void }) => {
  const currentReports: ReportData[] = reportsFile?.find((element) => element.environment === currentEnvironment)?.reports || [];
  console.log(currentReports);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Environments</span>
          </button>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {currentEnvironment.charAt(0).toUpperCase() + currentEnvironment.slice(1)} Environment
          </h1>
          <p className="text-gray-600">
            Select a test suite to view its Allure report
          </p>
        </div>

        <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {currentReports?.map((report: ReportData, index: number) => (
            <FolderCard
              key={index}
              name={report.reportName}
              onClick={() => onFolderClick(report.reportName)}
            />
          ))}
        </div>

        {(!reportsFile || currentReports.length === 0) && (
          <div className="text-center py-16">
            <Folder className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No Reports Found
            </h3>
            <p className="text-gray-500">
              No Allure reports are available for the {currentEnvironment} environment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoldersPage;