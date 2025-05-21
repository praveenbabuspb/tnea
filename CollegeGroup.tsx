import React, { useState } from 'react';
import { CollegeData } from '../types';
import BranchCard from './BranchCard';
import { ChevronDown, ChevronRight, MapPin } from 'lucide-react';

interface CollegeGroupProps {
  collegeName: string;
  branches: CollegeData[];
}

const CollegeGroup: React.FC<CollegeGroupProps> = ({ collegeName, branches }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Format college name to make it more readable
  const formatCollegeName = (name: string) => {
    return name.replace(/\s{2,}/g, ' ').trim();
  };
  
  // Extract location from college name (usually after commas or dashes)
  const extractLocation = (name: string) => {
    const parts = name.split(/,|-/);
    if (parts.length > 1) {
      return parts[parts.length - 1].trim();
    }
    return '';
  };

  return (
    <div className="mb-6 bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
      <div 
        className={`p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors duration-150 ${
          isExpanded ? 'bg-blue-50 border-b border-blue-100' : ''
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">
            {formatCollegeName(collegeName)}
          </h2>
          {extractLocation(collegeName) && (
            <div className="flex items-center mt-1 text-sm text-gray-600">
              <MapPin size={14} className="mr-1 text-blue-500" />
              {extractLocation(collegeName)}
            </div>
          )}
          <div className="text-sm text-blue-600 mt-1">
            {branches.length} {branches.length === 1 ? 'branch' : 'branches'} available
          </div>
        </div>
        <div className="ml-4">
          {isExpanded ? (
            <ChevronDown className="text-blue-600" />
          ) : (
            <ChevronRight className="text-gray-600" />
          )}
        </div>
      </div>
      
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 divide-y divide-gray-100">
          {branches.map((branch) => (
            <BranchCard key={branch._id} branch={branch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeGroup;