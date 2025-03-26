import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import Navbar from '../components/Navbar1';
import { AddApplicantApi, GetJobApi } from '../service/api';
const FormSteps = {
  PERSONAL: 0,
  PROFESSIONAL: 1,
  DOCUMENTS: 2,
  REVIEW: 3
};
let filesValue;
const ApplyForm = () => {
  const location = useLocation();
  const job = location.state?.job;
  const [currentStep, setCurrentStep] = useState(FormSteps.PERSONAL);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(null);
  const resumeInput = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const availabilityOptions = [
    { value: 'immediate', label: 'Available Immediately' },
    { value: '1_week', label: '1 Week Notice' },
    { value: '2_weeks', label: '2 Weeks Notice' },
    { value: '3_weeks', label: '3 Weeks Notice' },
    { value: '1_month', label: '1 Month Notice' },
    { value: '2_months', label: '2 Months Notice' },
    { value: '3_months', label: '3 Months Notice' }
  ];

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    current_address: "",
    resume: null,
    work_samples: [],
    linkedin_profile: "",
    availability: "",
    current_company: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    console.log('File selected:', files[0]); // Debug log
    filesValue = files[0];
    if (files[0]) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const handleNavigation = (e) => {
    e.preventDefault();
    if (currentStep !== FormSteps.REVIEW) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleFinalSubmit = async () => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSuccessMessage(null);

    try {
      const formDataToSend = new FormData();

      // Handle file first
      if (formData.resume instanceof File) {
        formDataToSend.append('resume', filesValue);
      }

      // Append other form fields
      Object.keys(formData).forEach(key => {
        if (key !== 'resume') {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Append static IDs
      formDataToSend.append('workspace_id', "a5a98e56-7703-446f-b00f-2f8c19861e9b");
      formDataToSend.append('job_posting_id', "6fdd3853-db69-4982-939c-e2f65c3325c9");

      const response = await AddApplicantApi(formDataToSend);

      if (response.Status === "Success") {
        setSuccessMessage("Application submitted successfully!");
        setSubmitStatus('success');
        setTimeout(() => {
          navigate('/careers');
        }, 2000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case FormSteps.PERSONAL:
        return <PersonalInfoStep formData={formData} handleChange={handleChange} />;
      case FormSteps.PROFESSIONAL:
        return <ProfessionalInfoStep formData={formData} handleChange={handleChange} />;
      case FormSteps.DOCUMENTS:
        return <DocumentsStep formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} ref={resumeInput} />;
      case FormSteps.REVIEW:
        return <ReviewStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* CSS Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#ff6600 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-[#ff6600]/10" />

      <Navbar />

      {/* Job Header */}
      <header className="relative bg-gradient-to-r from-black to-black/50 border-b border-[#ff6600]/20">
        <div className="max-w-5xl mx-auto py-12 px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Apply for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6600] to-[#ff8533]">
                  {job.role}
                </span>
              </h1>
              <div className="flex items-center space-x-4 text-gray-400">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  {job.company_name}
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {job.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Form Section */}
      <main className="relative max-w-4xl mx-auto py-12 px-4">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between">
            {['Personal Info', 'Professional', 'Documents', 'Review'].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2
                  ${index <= currentStep
                    ? 'border-[#ff6600] text-[#ff6600]'
                    : 'border-gray-600 text-gray-600'}`}>
                  {index + 1}
                </div>
                <div className={`text-sm ${index <= currentStep ? 'text-[#ff6600]' : 'text-gray-600'}`}>
                  {step}
                </div>
              </div>
            ))}
          </div>
          <div className="relative mt-4">
            <div className="absolute top-0 h-1 w-full bg-gray-800 rounded">
              <div
                className="absolute h-full bg-[#ff6600] rounded transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-[#ff6600]/10 shadow-lg shadow-[#ff6600]/5 p-8 "
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff6600]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#ff6600]/5 rounded-full blur-3xl" />

          <form onSubmit={handleNavigation} className="relative">
            {successMessage && (
              <div className="mb-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                {successMessage}
              </div>
            )}
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between items-center">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="group px-6 py-2 flex items-center text-gray-400 hover:text-[#ff6600] transition-colors"
                >
                  <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              )}

              {currentStep === FormSteps.REVIEW ? (
                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  className="group px-8 py-3 bg-gradient-to-r from-[#ff6600] to-[#ff8533] text-white rounded-lg
                    hover:shadow-lg hover:shadow-[#ff6600]/20 disabled:opacity-50 transition-all duration-300
                    flex items-center space-x-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              ) : (
                <button
                  type="submit"
                  className="group px-8 py-3 bg-gradient-to-r from-[#ff6600] to-[#ff8533] text-white rounded-lg
                    hover:shadow-lg hover:shadow-[#ff6600]/20 transition-all duration-300
                    flex items-center space-x-2"
                >
                  Continue
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

// Update input styles with better spacing and modern design
const inputStyles = `
  mt-2 block w-full rounded-lg bg-gray-800/50 border-gray-700 text-white 
  shadow-sm focus:border-[#ff6600] focus:ring-[#ff6600] transition-all duration-300
  hover:bg-gray-800/70 backdrop-blur-sm px-4 py-3
`;

const PersonalInfoStep = ({ formData, handleChange }) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-semibold text-[#ff6600] mb-6">Personal Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          className={inputStyles}
          required
          placeholder="Enter your full name"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputStyles}
          required
          placeholder="your.email@example.com"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          className={inputStyles}
          required
          pattern="[0-9]{10}"
          placeholder="10-digit phone number"
          title="Please enter a 10-digit phone number"
        />
      </div>

      <div className="md:col-span-2 space-y-2">
        <label className="block text-sm font-medium text-gray-300">
          Current Address <span className="text-red-500">*</span>
        </label>
        <textarea
          name="current_address"
          value={formData.current_address}
          onChange={handleChange}
          rows={3}
          className={inputStyles}
          required
          placeholder="Enter your current address"
        />
      </div>
    </div>
  </div>
);

const ProfessionalInfoStep = ({ formData, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const availabilityOptions = [
    { value: 'immediate', label: 'Available Immediately' },
    { value: '1_week', label: '1 Week Notice' },
    { value: '2_weeks', label: '2 Weeks Notice' },
    { value: '3_weeks', label: '3 Weeks Notice' },
    { value: '1_month', label: '1 Month Notice' },
    { value: '2_months', label: '2 Months Notice' },
    { value: '3_months', label: '3 Months Notice' }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-[#ff6600] mb-6">Professional Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Current Company <span className="text-gray-400">(Optional)</span>
          </label>
          <input
            type="text"
            name="current_company"
            value={formData.current_company}
            onChange={handleChange}
            className={inputStyles}
            placeholder="Enter company name"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Years of Experience <span className="text-gray-400">(Optional)</span>
          </label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className={inputStyles}
            placeholder="Enter years of experience"
            min="0"
            step="1"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            LinkedIn Profile <span className="text-gray-400">(Optional)</span>
          </label>
          <input
            type="url"
            name="linkedin_profile"
            value={formData.linkedin_profile}
            onChange={handleChange}
            className={inputStyles}
            placeholder="https://linkedin.com/in/your-profile"
            pattern="https://.*"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">
            Availability <span className="text-red-500">*</span>
          </label>
          <div className="relative mt-2">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`${inputStyles} w-full text-left flex justify-between items-center hover:border-[#ff6600]/50 transition-all duration-300`}
            >
              <span className={formData.availability ? 'text-white' : 'text-gray-400'}>
                {formData.availability ? 
                  availabilityOptions.find(opt => opt.value === formData.availability)?.label 
                  : "When can you start?"}
              </span>
              <svg className={`h-5 w-5 transform transition-transform duration-300 text-[#ff6600] ${isOpen ? 'rotate-180' : ''}`} 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute z-50 mt-1 w-full rounded-lg bg-gray-800/95 backdrop-blur-sm shadow-xl border border-[#ff6600]/10 
                            max-h-60 overflow-y-auto animate-fadeIn divide-y divide-gray-700/50">
                {availabilityOptions.map((option) => (
                  <div
                    key={option.value}
                    className="group px-4 py-3 hover:bg-[#ff6600]/10 cursor-pointer first:rounded-t-lg last:rounded-b-lg 
                              transition-all duration-200 flex items-center justify-between"
                    onClick={() => {
                      handleChange({ 
                        target: { name: 'availability', value: option.value }
                      });
                      setIsOpen(false);
                    }}
                  >
                    <span className="text-white group-hover:text-[#ff6600] transition-colors">
                      {option.label}
                    </span>
                    {formData.availability === option.value && (
                      <svg className="h-5 w-5 text-[#ff6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DocumentsStep = React.forwardRef(({ formData, handleChange, handleFileChange }, ref) => (
  <div className="space-y-8">
    <h2 className="text-2xl font-semibold text-[#ff6600] mb-6">Documents & Portfolio</h2>
    <div className="grid grid-cols-1 gap-8">
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-300">
          Resume <span className="text-red-500">*</span>
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-lg hover:border-[#ff6600]/50 transition-colors">
          <div className="space-y-2 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col items-center text-sm text-gray-400">
              <input
                ref={ref}
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
                required
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md font-medium text-[#ff6600] hover:text-[#ff8533] focus-within:outline-none"
              >
                <span>Upload a file</span>
                <span className="ml-2">or drag and drop</span>
              </label>
              <p className="text-xs text-gray-500 mt-2">PDF, DOC, or DOCX up to 10MB</p>
              {formData.resume && (
                <p className="text-sm text-green-500 mt-2">
                  Selected file: {formData.resume.name}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">Work Samples (Optional)</label>
        <textarea
          name="work_samples"
          value={formData.work_samples}
          onChange={handleChange}
          rows={4}
          className={inputStyles}
          placeholder="Please provide links to your work samples or portfolio (one per line)"
        />
        <p className="mt-2 text-sm text-gray-500">Add links to your projects, GitHub repositories, or portfolio websites</p>
      </div>
    </div>
  </div>
));

// Add display name for better debugging
DocumentsStep.displayName = 'DocumentsStep';

const ReviewStep = ({ formData }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-[#ff6600]">Review Your Application</h2>
    <div className="bg-gray-800/50 p-6 rounded-lg space-y-6 border border-gray-700">
      <div>
        <h3 className="text-lg font-medium text-[#ff6600]">Personal Information</h3>
        <dl className="mt-3 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-400">Full Name</dt>
            <dd className="mt-1 text-sm text-white">{formData.full_name}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Email</dt>
            <dd className="mt-1 text-sm text-white">{formData.email}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Phone</dt>
            <dd className="mt-1 text-sm text-white">{formData.phone_number}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Address</dt>
            <dd className="mt-1 text-sm text-white">{formData.current_address}</dd>
          </div>
        </dl>
      </div>

      <div>
        <h3 className="text-lg font-medium text-[#ff6600]">Professional Information</h3>
        <dl className="mt-3 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-400">Current Company</dt>
            <dd className="mt-1 text-sm text-white">{formData.current_company}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Experience</dt>
            <dd className="mt-1 text-sm text-white">{formData.experience} years</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">LinkedIn</dt>
            <dd className="mt-1 text-sm text-white">{formData.linkedin_profile}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Availability</dt>
            <dd className="mt-1 text-sm text-white">{formData.availability}</dd>
          </div>
        </dl>
      </div>

      <div>
        <h3 className="text-lg font-medium text-[#ff6600]">Documents</h3>
        <dl className="mt-3 grid grid-cols-1 gap-x-4 gap-y-6">
          <div>
            <dt className="text-sm font-medium text-gray-400">Resume</dt>
            <dd className="mt-1 text-sm text-white">
              {formData.resume?.name || 'No file uploaded'}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-400">Work Samples</dt>
            <dd className="mt-1 text-sm text-white">{formData.work_samples || 'None provided'}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
);

export default ApplyForm;