import React from 'react';
import { Briefcase, MapPin, Building2, ArrowUpRight, Clock } from 'lucide-react';
// import type { Job } from '../data/jobData';

// interface JobCardProps {
//   job: Job;
//   onClick: () => void;
// }

export default function JobCard({ job, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="group relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6600] to-orange-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
      
      {/* Main card */}
      <div className="relative bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-[#FF6600]/30 transition-all duration-300">
        {/* Top section */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#FF6600]/10 rounded-lg">
              <Briefcase className="w-5 h-5 text-[#FF6600]" />
            </div>
            <span className="px-3 py-1.5 bg-[#FF6600]/10 text-[#FF6600] rounded-full text-sm font-medium">
              {job.department}
            </span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-[#FF6600] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>

        {/* Job title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-[#FF6600] transition-colors duration-300 mb-4">
          {job.role}
        </h3>
        
        {/* Details section */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-400 group-hover:text-gray-300">
            <Building2 className="w-4 h-4 mr-3 text-[#FF6600]" />
            <span className="text-sm">Workspace {job.workspace_id}</span>
          </div>
          <div className="flex items-center text-gray-400 group-hover:text-gray-300">
            <MapPin className="w-4 h-4 mr-3 text-[#FF6600]" />
            <span className="text-sm">{job.location}</span>
          </div>
          <div className="flex items-center text-gray-400 group-hover:text-gray-300">
            <Clock className="w-4 h-4 mr-3 text-[#FF6600]" />
            <span className="text-sm">Full Time</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-300">
          {job.role_description}
        </p>

        {/* Bottom section */}
        <div className="mt-6 pt-6 border-t border-gray-800 group-hover:border-[#FF6600]/20 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-400">Actively hiring</span>
            </div>
            <span className="text-sm text-[#FF6600] font-medium">View Details →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
