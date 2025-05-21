import React from 'react';
import { BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen size={32} className="text-yellow-300" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">TNEA Cutoff Explorer</h1>
              <p className="text-sm md:text-base text-blue-100">
                Explore TN Engineering Admission Cutoffs
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
              2023-24 Data
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;