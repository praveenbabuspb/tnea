import React from 'react';
import { GroupedCollegeData } from '../types';
import CollegeGroup from './CollegeGroup';
import { ListFilter } from 'lucide-react';

interface CollegeListProps {
  groupedColleges: GroupedCollegeData;
  totalBranches: number;
  filteredBranches: number;
}

const CollegeList: React.FC<CollegeListProps> = ({ 
  groupedColleges, 
  totalBranches,
  filteredBranches
}) => {
  const collegeNames = Object.keys(groupedColleges);

  if (collegeNames.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-gray-50 rounded-lg border border-gray-200 text-center">
        <ListFilter size={48} className="text-gray-300 mb-4" />
        <h3 className="text-xl font-medium text-gray-700 mb-2">No matching results</h3>
        <p className="text-gray-500">
          Try adjusting your filters or search terms to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Showing <span className="font-medium">{filteredBranches}</span> of{' '}
          <span className="font-medium">{totalBranches}</span> branches
        </div>
        <div className="text-sm text-blue-600">
          <span className="font-medium">{collegeNames.length}</span> colleges found
        </div>
      </div>

      {collegeNames.map((collegeName) => (
        <CollegeGroup
          key={collegeName}
          collegeName={collegeName}
          branches={groupedColleges[collegeName]}
        />
      ))}
    </div>
  );
};

export default CollegeList;