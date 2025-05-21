import React from 'react';
import { CollegeData } from '../types';
import CutoffTable from './CutoffTable';
import SeatAvailability from './SeatAvailability';

interface BranchCardProps {
  branch: CollegeData;
}

const BranchCard: React.FC<BranchCardProps> = ({ branch }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow duration-200 mb-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {branch.brn}
          </h3>
          <p className="text-sm text-gray-500">Code: {branch.code}</p>
        </div>
        <div className="mt-2 sm:mt-0">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
            {branch.brc}
          </span>
        </div>
      </div>
      
      <CutoffTable college={branch} />
      
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-1">Seat Availability</h4>
        <SeatAvailability college={branch} />
      </div>
    </div>
  );
};

export default BranchCard;