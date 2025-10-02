// pages/HomePage.jsx
import EnvironmentCard from '../components/EnvironmentCard';
import reports from '../assets/reports.json';

const HomePage = ({ onEnvironmentClick }: { onEnvironmentClick: (environment: string) => void }) => {
  const environments = reports.map((report) => report.environment);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Allure Reports
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access test reports across different environments. Select an environment to view available Allure reports.
          </p>
        </div>

        <div className="grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {environments.map((env) => (
            <EnvironmentCard
              key={env}
              title={env.charAt(0).toUpperCase() + env.slice(1)}
              onClick={() => onEnvironmentClick(env)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;