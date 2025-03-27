import React, { useState, useEffect } from 'react';

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
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffff33]/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className={`space-y-12 mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] bg-clip-text text-transparent
              leading-tight tracking-tight mt-32"
            >
              Let's Collaborate.<br />Connect. Create.
            </h1>
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

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="block text-lg font-medium text-gray-200 group-hover:text-[#ffff33] transition-colors">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-zinc-800/50 rounded-xl p-4 text-white placeholder-gray-400
                        border border-zinc-700 focus:border-[#ffff33] focus:outline-none focus:ring-2 focus:ring-[#ffff33]/20
                        transition-all duration-300 transform hover:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <label className="block text-lg font-medium text-gray-200 group-hover:text-[#ffff33] transition-colors">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-zinc-800/50 rounded-xl p-4 text-white
                        border border-zinc-700 focus:border-[#ffff33] focus:outline-none focus:ring-2 focus:ring-[#ffff33]/20
                        transition-all duration-300 transform hover:scale-[1.02] appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-zinc-800">Select a subject</option>
                      <option value="collaboration" className="bg-zinc-800">Collaboration</option>
                      <option value="project" className="bg-zinc-800">Project Discussion</option>
                      <option value="other" className="bg-zinc-800">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2 group">
                    <label className="block text-lg font-medium text-gray-200 group-hover:text-[#ffff33] transition-colors">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 your number"
                      className="w-full bg-zinc-800/50 rounded-xl p-4 text-white placeholder-gray-400
                        border border-zinc-700 focus:border-[#ffff33] focus:outline-none focus:ring-2 focus:ring-[#ffff33]/20
                        transition-all duration-300 transform hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="block text-lg font-medium text-gray-200 group-hover:text-[#ffff33] transition-colors">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your thoughts or ideas..."
                    rows="4"
                    className="w-full bg-zinc-800/50 rounded-xl p-4 text-white placeholder-gray-400
                      border border-zinc-700 focus:border-[#ffff33] focus:outline-none focus:ring-2 focus:ring-[#ffff33]/20
                      transition-all duration-300 resize-none transform hover:scale-[1.01]"
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="group relative w-full bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] 
                      text-black py-5 rounded-xl font-semibold text-lg overflow-hidden
                      transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#ffff33]/20"
                  >
                    <span className="relative z-10 inline-flex items-center justify-center">
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
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

export default Index;