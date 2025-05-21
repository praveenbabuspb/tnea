import React from 'react';
import { CollegeData, ALL_CATEGORIES } from '../types';
import { formatCutoff, getCutoffColor } from '../utils/filterUtils';

interface CutoffTableProps {
  college: CollegeData;
}

const CutoffTable: React.FC<CutoffTableProps> = ({ college }) => {
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {ALL_CATEGORIES.map((category) => (
              <th 
                key={category} 
                className="px-3 py-2 text-xs font-medium text-gray-700 uppercase tracking-wider text-center border-b"
              >
                {category}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {ALL_CATEGORIES.map((category) => (
              <td 
                key={category} 
                className={`px-3 py-2 text-sm text-center border-b ${getCutoffColor(college[category])}`}
              >
                {formatCutoff(college[category])}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CutoffTable;