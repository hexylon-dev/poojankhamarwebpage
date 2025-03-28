import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

function ContriForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white relative overflow-hidden">
      {/* SEO Improvements */}
      <Helmet>
        <title>Innovator's Playbook - Share Your Idea</title>
        <meta name="description" content="Share your bold and innovative ideas with Poojan Khamar's Innovator's Playbook." />
        <meta name="keywords" content="Innovation, Bold Ideas, Creativity, Entrepreneurship, Future Thinking" />
        <meta name="author" content="Poojan Khamar" />
      </Helmet>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffff33]/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          {/* Hero Section */}
          <div className={`space-y-12 mb-24 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] bg-clip-text text-transparent leading-tight tracking-tight">
              Innovator's Playbook
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-white/90">Bold Ideas by Poojan Khamar</h2>
            <div className="flex justify-center">
              <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#ffff33] to-yellow-300 rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 px-4">
              Ideas are not bound by rules. They come from where imagination collides with courage. The world changes when someone dares to think differently.
            </p>
          </div>

          {/* Contribution Form Section */}
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#ffff33] to-yellow-400 bg-clip-text text-transparent">
              Share Your Vision
            </h2>
            <p className="text-lg text-gray-300 text-center">Have a bold idea that could reshape the future? Let's hear it.</p>

            {/* Form */}
            <div className="max-w-3xl mx-auto mt-10">
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
                  <div>
                    <label className="block text-lg font-medium text-gray-200">Company Name</label>
                    <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} placeholder="Enter your company name" className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-200">Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-200">Industry</label>
                    <input type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder="Enter your industry" className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none" />
                  </div>
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
  );
}

export default ContriForm;
