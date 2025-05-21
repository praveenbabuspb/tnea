import React from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Category, ALL_CATEGORIES, FilterOptions } from '../types';

interface FilterBarProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  collegeNames: string[];
  branchNames: string[];
  showAdvancedFilters: boolean;
  setShowAdvancedFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  setFilters,
  collegeNames,
  branchNames,
  showAdvancedFilters,
  setShowAdvancedFilters,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, searchQuery: e.target.value }));
  };

  const handleCollegeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, collegeName: e.target.value }));
  };

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, branchName: e.target.value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, category: e.target.value }));
  };

  const handleCutoffMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, cutoffMin: parseInt(e.target.value, 10) || 0 }));
  };

  const handleCutoffMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, cutoffMax: parseInt(e.target.value, 10) || 200 }));
  };

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, sortBy: e.target.value as 'college' | 'cutoff' }));
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, sortOrder: e.target.value as 'asc' | 'desc' }));
  };

  const resetFilters = () => {
    setFilters({
      collegeName: '',
      branchName: '',
      category: '',
      cutoffMin: 0,
      cutoffMax: 200,
      searchQuery: '',
      sortBy: 'college',
      sortOrder: 'asc',
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg my-4 p-4 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
        <div className="relative flex-grow w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by college, branch or code..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white 
                      placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
                      focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
            value={filters.searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        
        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className="flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 
                   rounded-md transition-colors duration-150 min-w-max"
        >
          <SlidersHorizontal size={18} className="mr-2" />
          {showAdvancedFilters ? 'Hide Filters' : 'Advanced Filters'}
        </button>
      </div>

      {showAdvancedFilters && (
        <div className="bg-blue-50 p-4 rounded-md animate-fadeIn mt-2 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">College</label>
              <select
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                          focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filters.collegeName}
                onChange={handleCollegeChange}
              >
                <option value="">All Colleges</option>
                {collegeNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
              <select
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                          focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filters.branchName}
                onChange={handleBranchChange}
              >
                <option value="">All Branches</option>
                {branchNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                          focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filters.category}
                onChange={handleCategoryChange}
              >
                <option value="">All Categories</option>
                {ALL_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Minimum Cutoff
              </label>
              <input
                type="number"
                min="0"
                max="200"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                          focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filters.cutoffMin}
                onChange={handleCutoffMinChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Maximum Cutoff
              </label>
              <input
                type="number"
                min="0"
                max="200"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                          focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filters.cutoffMax}
                onChange={handleCutoffMaxChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                            focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={filters.sortBy}
                  onChange={handleSortByChange}
                >
                  <option value="college">College Name</option>
                  <option value="cutoff">Cutoff Value</option>
                </select>
                <select
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                            focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={filters.sortOrder}
                  onChange={handleSortOrderChange}
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>
            </div>
          </div>
          
          <button
            onClick={resetFilters}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent 
                     text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <X size={16} className="mr-2" /> Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;