import React, { useState, useEffect } from 'react';

function ContriFrom() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    description: ''
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffff33]/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="max-w-10xl mx-auto px-4 py-16 mt-20">
          {/* Hero Section */}
          <div className={`space-y-12 mb-32 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center">
              <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] bg-clip-text text-transparent
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
                        Your Idea Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Give your idea a name"
                        className="w-full bg-zinc-800/50 rounded-xl p-4 text-white placeholder-gray-400
                          border border-zinc-700 focus:border-[#ffff33] focus:outline-none focus:ring-2 focus:ring-[#ffff33]/20
                          transition-all duration-300 transform hover:scale-[1.02]"
                      />
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
                      Brief Description of Your Idea
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Share your innovative idea here..."
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
                      <span className="relative z-10 inline-flex items-center">
                        Share Your Idea
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
    </div>
  );
}

export default ContriFrom;