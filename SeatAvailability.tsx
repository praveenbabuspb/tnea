import React from 'react';
import { CollegeData } from '../types';

interface SeatAvailabilityProps {
  college: CollegeData;
}

const SeatAvailability: React.FC<SeatAvailabilityProps> = ({ college }) => {
  const categoryMap = [
    { label: 'OC', total: college.octl, available: college.ocal },
    { label: 'BC', total: college.bctl, available: college.bcal },
    { label: 'BCM', total: college.bcmtl, available: college.bcmal },
    { label: 'MBC', total: college.mbctl, available: college.mbcal },
    { label: 'SC', total: college.sctl, available: college.scal },
    { label: 'SCA', total: college.scatl, available: college.scaal },
    { label: 'ST', total: college.sttl, available: college.stal },
  ];

  return (
    <div className="mt-3 grid grid-cols-7 gap-1 text-xs">
      {categoryMap.map((cat) => (
        <div 
          key={cat.label} 
          className="flex flex-col items-center justify-center bg-gray-50 p-1 rounded"
        >
          <span className="font-medium text-gray-700">{cat.label}</span>
          <div className="flex items-center justify-center space-x-1 mt-1">
            <span 
              className={`inline-block px-1.5 py-0.5 rounded ${
                cat.available > 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
              }`}
              title="Available Seats"
            >
              {cat.available}
            </span>
            <span className="text-gray-400">/</span>
            <span 
              className="inline-block px-1.5 py-0.5 rounded bg-blue-100 text-blue-800"
              title="Total Seats"
            >
              {cat.total}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeatAvailability;