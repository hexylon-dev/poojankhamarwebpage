import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar1'; // Adjust the path if necessary
import jobData from './JobData'; // Adjust the path if necessary
import { ArrowRight } from 'lucide-react';
import { GetJobsApi } from '../service/api';

const CareerPage = () => {
  const navigate = useNavigate();

  // Filter jobs by workspace_id 1
  // const jobsFiltered = jobData.filter(job => job.workspace_id === '1');

  const [jobsFiltered, setjobsFiltered] = useState([]);
  
  useEffect(() => {
    (async () => {
      const res = await GetJobsApi();
      setjobsFiltered(res.data);
    })();
  }, [])

  const handleNavigateToApplyForm = (id) => {
    // Use job_id in the URL to navigate to the ApplyForm page
    navigate(`/apply-form/${id}`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="bg-[#001830] text-white text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at Hexylon Analytics</h1>
          <p className="text-xl md:text-2xl opacity-90">We are always looking for talented individuals to join our team.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#ff6600] to-[#ff8c00] animate-gradient-x">
          Current Openings
        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {jobsFiltered.map((job, index) => (
            <div key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#ff6600] transition-colors duration-300">
                      {job.role}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {job.location}
                    </p>
                  </div>
                  <span className="bg-[#ff6600]/10 text-[#ff6600] text-xs font-semibold px-2 py-1 rounded">
                    {job.department}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Join our team and work on cutting-edge analytics solutions.
                </p>
              </div>
              <div className="px-6 pb-6">
                <button
                  onClick={() => handleNavigateToApplyForm(job.id)}
                  className="w-full bg-white hover:bg-[#ff6600] text-[#ff6600] hover:text-white border border-[#ff6600] font-semibold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
