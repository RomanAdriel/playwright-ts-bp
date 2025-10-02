// components/FolderCard.jsx
import { ChevronRight, FileText } from 'lucide-react';

const FolderCard = ({ name, onClick }: { name: string, onClick: () => void }) => (
  <div 
    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-gray-200 hover:border-blue-300"
    onClick={onClick}
  >
    <div className="p-6">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  </div>
);

export default FolderCard;