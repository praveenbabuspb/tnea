import React from 'react';
import { BookOpen, Info, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <BookOpen size={24} className="text-yellow-300 mr-2" />
            <span className="text-xl font-bold">TNEA Cutoff Explorer</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            <div className="flex items-center mb-3 md:mb-0">
              <Info size={18} className="mr-2 text-blue-300" />
              <span className="text-sm text-gray-300">Data is for demonstration purposes</span>
            </div>
            
            <div className="flex items-center">
              <Mail size={18} className="mr-2 text-blue-300" />
              <span className="text-sm text-gray-300">contact@tneacutoffs.edu</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>© 2023-2024 TNEA Cutoff Explorer. All rights reserved.</p>
          <p className="mt-1">Disclaimer: This is a demonstration application. Data may not be accurate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;