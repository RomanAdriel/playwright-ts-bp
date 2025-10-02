// components/EnvironmentCard.jsx
import { ChevronRight, Folder } from 'lucide-react';

const EnvironmentCard = ({ title, onClick }: { title: string, onClick: () => void }) => (
  <div 
    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
    onClick={onClick}
  >
    <div className="p-8">
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Folder className="w-8 h-8 text-white" />
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
    </div>
  </div>
);

export default EnvironmentCard;