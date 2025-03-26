import React, { useState } from 'react';
import { X, Briefcase, MapPin, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function JobModal({ job, onClose }) {
  const navigate = useNavigate();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isQualificationsExpanded, setIsQualificationsExpanded] = useState(false);
  
  const handleNavigate = (job) => {
    navigate('/apply-form', { state: { job } });
  };
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-800">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{job.role}</h2>
              <div className="flex items-center space-x-4 text-gray-400">
                <div className="flex items-center">
                  <Building2 className="w-4 h-4 mr-2 text-[#FF6600]" />
                  <span>Workspace {job.workspace_id}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-[#FF6600]" />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Description Section */}
            <div className="p-4 bg-gray-800 rounded-lg">
              <button 
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="w-full flex items-center justify-between text-lg font-semibold text-white mb-2"
              >
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-[#FF6600]" />
                  Role Description
                </div>
                {isDescriptionExpanded ? (
                  <ChevronUp className="w-5 h-5 text-[#FF6600]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#FF6600]" />
                )}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                isDescriptionExpanded ? 'max-h-[1000px]' : 'max-h-[100px]'
              }`}>
                <p className="text-gray-400">{job.role_description}</p>
              </div>
              {job.role_description.length > 200 && (
                <button 
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                  className="w-full text-center mt-2"
                >
                  <span className="text-[#FF6600] text-sm cursor-pointer hover:text-[#FF8533]">
                    {isDescriptionExpanded ? 'Show less...' : 'Show more...'}
                  </span>
                </button>
              )}
            </div>

            {/* Qualifications Section */}
            <div className="p-4 bg-gray-800 rounded-lg">
              <button 
                onClick={() => setIsQualificationsExpanded(!isQualificationsExpanded)}
                className="w-full flex items-center justify-between text-lg font-semibold text-white mb-2"
              >
                <span>Qualifications</span>
                {isQualificationsExpanded ? (
                  <ChevronUp className="w-5 h-5 text-[#FF6600]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#FF6600]" />
                )}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                isQualificationsExpanded ? 'max-h-[1000px]' : 'max-h-[100px]'
              }`}>
                <p className="text-gray-400">{job.qualifications}</p>
              </div>
              {job.qualifications.length > 200 && (
                <button 
                  onClick={() => setIsQualificationsExpanded(!isQualificationsExpanded)}
                  className="w-full text-center mt-2"
                >
                  <span className="text-[#FF6600] text-sm cursor-pointer hover:text-[#FF8533]">
                    {isQualificationsExpanded ? 'Show less...' : 'Show more...'}
                  </span>
                </button>
              )}
            </div>

            <button
              className="w-full bg-[#FF6600] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#FF6600]/90 transition-colors"
              onClick={() => handleNavigate(job)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
