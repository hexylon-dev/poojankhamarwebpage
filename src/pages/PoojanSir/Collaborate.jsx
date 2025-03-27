import React, { useState, useEffect } from 'react';
import { CreateContactUsResponseApi } from '../../service/api'; // Adjust the import path as needed

function Collabrate() {
  const [formData, setFormData] = useState({
    "workspace_id": "a5a98e56-7703-446f-b00f-2f8c19861e9b",
    "name": "",
    "company_name": "",
    "description": "",
    "email": "",
    "phone_number": "",
    "address": "",
    "industry": ""
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare the data for the API with all required fields
      const apiData = {
        workspace_id: formData.workspace_id,
        name: formData.name,
        company_name: formData.company_name, // Fallback if empty
        description: formData.description,
        email: formData.email,
        phone_number: formData.phone_number,
        address: formData.address, // Fallback if empty
        industry: formData.industry // Fallback if empty
      };

      // Call the API
      const response = await CreateContactUsResponseApi(apiData);
      console.log(response, "response")

      // Check if the response indicates success
      if (response.Status === "Success") {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          subject: 'collaboration',
          email: '',
          phone_number: '',
          description: '',
          workspace_id: "a5a98e56-7703-446f-b00f-2f8c19861e9b",
          company_name: '',
          address: "",
          industry: ""
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffff33]/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className={`space-y-12 mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            {/* <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] bg-clip-text text-transparent
              leading-tight tracking-tight mb-8 mt-30"
            >
              Let's Collaborate.<br />Connect. Create.
            </h1> */}
            <div className="w-32 h-1 bg-gradient-to-r from-[#ffff33] to-yellow-300 mx-auto rounded-full mb-12"></div>
          </div>

          <div className=" mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Every great idea, collaboration, or conversation starts with a simple connection. Whether you have a bold project
              in mind, want to share an idea, or just wish to connect – I'm always open to hearing from forward-thinkers.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className=" mx-auto">
            <div className="bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-zinc-800 
              hover:border-[#ffff33]/30 transition-all duration-500 shadow-2xl hover:shadow-[#ffff33]/10"
            >
              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#ffff33] to-yellow-400 bg-clip-text text-transparent">
                Let's Build Something Exceptional
              </h2>

              {/* Submission Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/50 border border-green-600 rounded-lg text-green-200">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/50 border border-red-600 rounded-lg text-red-200">
                  There was an error submitting your message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="block text-lg font-medium text-gray-200 group-hover:text-[#ffff33] transition-colors">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full bg-zinc-800/50 rounded-xl p-4 text-white placeholder-gray-400
                        border border-zinc-700 focus:border-[#ffff33] focus:outline-none focus:ring-2 focus:ring-[#ffff33]/20
                        transition-all duration-300 transform hover:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <label className="block text-lg font-medium text-gray-200 group-hover:text-[#ffff33] transition-colors">
                      Subject*
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800/50 rounded-xl p-4 text-white
                        border border-zinc-700 focus:border-[#ffff33] focus:outline-none focus:ring-2 focus:ring-[#ffff33]/20
                        transition-all duration-300 transform hover:scale-[1.02] appearance-none cursor-pointer"
                    >
                      <option value="collaboration" className="bg-zinc-800">Collaboration</option>
                      <option value="project" className="bg-zinc-800">Project Discussion</option>
                      <option value="other" className="bg-zinc-800">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2 group">
                    <label className="block text-lg font-medium text-gray-200 group-hover:text-[#ffff33] transition-colors">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                      className="w-full bg-zinc-800/50 rounded-xl p-4 text-white placeholder-gray-400
                        border border-zinc-700 focus:border-[#ffff33] focus:outline-none focus:ring-2 focus:ring-[#ffff33]/20
                        transition-all duration-300 transform hover:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <label className="block text-lg font-medium text-gray-200 group-hover:text-[#ffff33] transition-colors">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      placeholder="+91 your number"
                      className="w-full bg-zinc-800/50 rounded-xl p-4 text-white placeholder-gray-400
                        border border-zinc-700 focus:border-[#ffff33] focus:outline-none focus:ring-2 focus:ring-[#ffff33]/20
                        transition-all duration-300 transform hover:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <label className="block text-lg font-medium text-gray-200 group-hover:text-[#ffff33] transition-colors">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full bg-zinc-800/50 rounded-xl p-4 text-white placeholder-gray-400
                        border border-zinc-700 focus:border-[#ffff33] focus:outline-none focus:ring-2 focus:ring-[#ffff33]/20
                        transition-all duration-300 transform hover:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <label className="block text-lg font-medium text-gray-200 group-hover:text-[#ffff33] transition-colors">
                      Industry
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      placeholder="Your industry"
                      className="w-full bg-zinc-800/50 rounded-xl p-4 text-white placeholder-gray-400
                        border border-zinc-700 focus:border-[#ffff33] focus:outline-none focus:ring-2 focus:ring-[#ffff33]/20
                        transition-all duration-300 transform hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="block text-lg font-medium text-gray-200 group-hover:text-[#ffff33] transition-colors">
                    Your Message*
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Share your thoughts or ideas..."
                    rows="4"
                    required
                    className="w-full bg-zinc-800/50 rounded-xl p-4 text-white placeholder-gray-400
                      border border-zinc-700 focus:border-[#ffff33] focus:outline-none focus:ring-2 focus:ring-[#ffff33]/20
                      transition-all duration-300 resize-none transform hover:scale-[1.01]"
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group relative w-full bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] 
                      text-black py-5 rounded-xl font-semibold text-lg overflow-hidden
                      transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#ffff33]/20
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    <span className="relative z-10 inline-flex items-center justify-center">
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collabrate;