import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import CollegeList from './components/CollegeList';
import Footer from './components/Footer';
import { collegeData } from './data/colleges';
import { FilterOptions, GroupedCollegeData } from './types';
import { 
  filterColleges, 
  sortColleges, 
  groupCollegesByName,
  getUniqueCollegeNames,
  getUniqueBranchNames
} from './utils/filterUtils';

function App() {
  const [filters, setFilters] = useState<FilterOptions>({
    collegeName: '',
    branchName: '',
    category: '',
    cutoffMin: 0,
    cutoffMax: 200,
    searchQuery: '',
    sortBy: 'college',
    sortOrder: 'asc',
  });

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [filteredColleges, setFilteredColleges] = useState(collegeData);
  const [groupedColleges, setGroupedColleges] = useState<GroupedCollegeData>({});
  const [uniqueCollegeNames, setUniqueCollegeNames] = useState<string[]>([]);
  const [uniqueBranchNames, setUniqueBranchNames] = useState<string[]>([]);

  // Initialize college and branch names when app loads
  useEffect(() => {
    setUniqueCollegeNames(getUniqueCollegeNames(collegeData));
    setUniqueBranchNames(getUniqueBranchNames(collegeData));
  }, []);

  // Apply filters and sorting when filters change
  useEffect(() => {
    const filtered = filterColleges(collegeData, filters);
    const sorted = sortColleges(
      filtered, 
      filters.sortBy, 
      filters.sortOrder, 
      filters.category || 'OC'
    );
    setFilteredColleges(sorted);
    setGroupedColleges(groupCollegesByName(sorted));
  }, [filters]);

  const totalBranches = collegeData.length;
  const filteredBranches = filteredColleges.length;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-6 flex-grow">
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          collegeNames={uniqueCollegeNames}
          branchNames={uniqueBranchNames}
          showAdvancedFilters={showAdvancedFilters}
          setShowAdvancedFilters={setShowAdvancedFilters}
        />
        
        <CollegeList 
          groupedColleges={groupedColleges} 
          totalBranches={totalBranches}
          filteredBranches={filteredBranches}
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;