import React, { useState, useMemo, useEffect } from 'react';
import { Search, Building2, Briefcase, Sparkles } from 'lucide-react';
import jobData from '../Data/JobData';
import JobCard from '../components/JobCard';
import JobModal from '../components/JobModal';
import { GetJobsApi } from '../service/api';


function CareerPageV() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedWorkspace, setSelectedWorkspace] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const [jobsFiltered, setjobsFiltered] = useState([]);
  
  useEffect(() => {
    (async () => {
      const res = await GetJobsApi();
      setjobsFiltered(res.data);
      console.log("res.data",res.data)
    })();
  }, [])

  const departments = useMemo(() => 
    Array.from(new Set(jobsFiltered.map(job => job.department))),
    [jobsFiltered]
  );

  const workspaces = useMemo(() => 
    Array.from(new Set(jobsFiltered.map(job => job.workspace_id))),
    [jobsFiltered]
  );
  console.log("Hello",jobsFiltered)

  const filteredJobs = useMemo(() => {
    if (!searchTerm && !selectedDepartment && !selectedWorkspace) {
      return jobsFiltered;
    }
    
    return jobsFiltered.filter(job => {
      const matchesSearch = job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = !selectedDepartment || job.department === selectedDepartment;
      const matchesWorkspace = !selectedWorkspace || job.workspace_id === selectedWorkspace;
      return matchesSearch && matchesDepartment && matchesWorkspace;
    });
  }, [searchTerm, selectedDepartment, selectedWorkspace, jobsFiltered]);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="relative bg-gradient-to-b from-black to-gray-900 border-b border-[#FF6600]/20 overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&h=1000&q=80')] opacity-7"></div>
{/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&h=1000&q=80')] opacity-7"></div> */}
{/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&h=1000&q=80')] opacity-7"></div> */}



        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-[#FF6600]/20 blur-lg animate-pulse"></div>
              <Briefcase className="relative w-16 h-16 text-[#FF6600]" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white text-center mb-6 tracking-tight">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
            Be part of something extraordinary. Shape the future with us.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-2 text-sm text-gray-400">
            <Sparkles className="w-4 h-4 text-[#FF6600]" />
            <span>{jobsFiltered.length} open positions</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search roles..."
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#FF6600] focus:border-transparent text-white placeholder-gray-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#FF6600] focus:border-transparent text-white appearance-none transition-all"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>

            <select
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#FF6600] focus:border-transparent text-white appearance-none transition-all"
              value={selectedWorkspace}
              onChange={(e) => setSelectedWorkspace(e.target.value)}
            >
              <option value="">All Workspaces</option>
              {workspaces.map(ws => (
                <option key={ws} value={ws}>Workspace {ws}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <JobCard
              key={index}
              job={job}
              onClick={() => setSelectedJob(job)}
            />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <Building2 className="w-16 h-16 mx-auto text-[#FF6600] mb-4 opacity-50" />
            <h3 className="text-xl font-medium text-white mb-2">No positions found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Job Modal */}
      {selectedJob && (
        <JobModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
}

export default CareerPageV;