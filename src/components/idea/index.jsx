import React, { useState, useEffect } from 'react';
import axios from "axios";

function ContriFrom() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    description: '',
    company_name: 'none',
    phone_number: '',
    address: 'none',
    industry: 'idea'
  });
  const [isVisible, setIsVisible] = useState(false);

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
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.1.50:4000/v1/contactus_responses",
        {
          ...formData,
          workspace_id: "7eea1f02-35ab-4074-97d2-251eaa754ac6" // Default workspace_id
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      setFormData({
        name: '',
        subject: '',
        email: '',
        description: '',
        company_name: '',
        phone_number: '',
        address: '',
        industry: ''
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffff33]/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="max-w-10xl mx-auto px-4 py-16 mt-20">
          {/* Hero Section */}
          <div className={`space-y-12 mb-32 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] bg-clip-text text-transparent
                leading-tight tracking-tight mb-8 animate-gradient"
              >
                Innovator's Playbook
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-white/90 mb-6">Bold Ideas by Poojan Khamar</h2>
            </div>

            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-[#ffff33] to-yellow-300 rounded-full"></div>
            </div>

            <div className="max-w-3xl mx-auto space-y-8 text-center">
              <p className="text-2xl text-gray-300 leading-relaxed">
                Ideas are not bound by rules. They don't come from comfort zones; they are born where imagination collides with
                courage. In a world that rewards followers, I choose to think ahead – questioning, disrupting, and rewriting what's
                possible.
              </p>

              <p className="text-2xl leading-relaxed">
                Every idea here carries a simple belief:
                <span className="font-semibold text-[#ffff33] ml-2 relative">
                  "The world changes when someone dares to think differently."
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffff33]/30"></div>
                </span>
              </p>
            </div>
          </div>

          {/* Contribution Section */}
          <div className={`mb-24 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-[#ffff33] to-yellow-400 bg-clip-text text-transparent">
                Share Your Vision
              </h2>
              <p className="text-2xl text-gray-300">
                Have a bold idea that could reshape the future? Let's hear it.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-zinc-800 
                hover:border-[#ffff33]/30 transition-all duration-500 shadow-2xl hover:shadow-[#ffff33]/10
                transform hover:-translate-y-1"
              >
                <form onSubmit={handleSubmit} className="bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-6 md:p-10  border-zinc-800 hover:border-[#ffff33]/30 transition-all shadow-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-medium text-gray-200">Your Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-lg font-medium text-gray-200">Subject</label>
                      <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter subject" className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-lg font-medium text-gray-200">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-lg font-medium text-gray-200">Phone Number</label>
                      <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Enter your phone number" className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none" />
                    </div>
                    {/* <div>
                      <label className="block text-lg font-medium text-gray-200">Company Name</label>
                      <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} placeholder="Enter your company name" className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none" />
                    </div> */}
                    {/* <div>
                      <label className="block text-lg font-medium text-gray-200">Address</label>
                      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none" />
                    </div> */}
                    {/* <div>
                      <label className="block text-lg font-medium text-gray-200">Industry</label>
                      <input type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder="Enter your industry" className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none" />
                    </div> */}
                  </div>
                  <div className="mt-6">
                    <label className="block text-lg font-medium text-gray-200">Brief Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Share your innovative idea..." rows="4" className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#ffff33] text-black py-3 rounded-lg font-semibold text-lg mt-6 hover:bg-yellow-400 transition-all">
                    Share Your Idea
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContriFrom;