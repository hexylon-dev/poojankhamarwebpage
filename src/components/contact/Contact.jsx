import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // SEO Optimization

function Index() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    message: ''
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
      
      {/* 🔹 SEO Meta Tags */}
      <Helmet>
        <title>Let's Collaborate - Share Your Idea | My Website</title>
        <meta name="description" content="Have a creative idea or collaboration in mind? Let's make it happen! Share your thoughts, and let's build something innovative together." />
        <meta name="keywords" content="collaboration, project, contact, ideas, innovation, creative projects" />
        <meta name="author" content="Your Name" />
        <link rel="canonical" href="https://yourwebsite.com/contact" />
      </Helmet>

      {/* 🔹 Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#ffff33]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-10xl mx-auto px-6 sm:px-8 py-12 sm:py-16 mt-20">
        
        {/* 🔹 Hero Section */}
        <section className={`space-y-12 mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] bg-clip-text text-transparent leading-tight tracking-tight">
              Let's Collaborate.<br className="hidden sm:block" /> Connect. Create.
            </h1>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#ffff33] to-yellow-300 mx-auto rounded-full my-6"></div>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 text-center leading-relaxed max-w-3xl mx-auto">
            Every great idea, collaboration, or conversation starts with a simple connection. Whether you have a bold project
            in mind or just want to connect – I’m open to new ideas and discussions.
          </p>
        </section>

        {/* 🔹 Contact Form Section */}
        <section className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-900/40 backdrop-blur-xl rounded-2xl p-6 sm:p-10 border border-zinc-800 hover:border-[#ffff33]/30 transition-all duration-500 shadow-2xl hover:shadow-[#ffff33]/10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#ffff33] to-yellow-400 bg-clip-text text-transparent">
                Let's Build Something Exceptional
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-300">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="project">Project Discussion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your thoughts..."
                    rows="4"
                    className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-[#ffff33] text-black font-semibold rounded-lg transition-transform duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Index;
