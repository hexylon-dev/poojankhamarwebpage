import React, { useState } from 'react';
import InovativeIdea from './InovativeIdea'

function ProjectCard({ title, description, features }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mb-32 transform transition-all duration-500 hover:translate-x-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <h2 className="text-[150px] font-bold mb-4 bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#000011] bg-clip-text text-transparent
          transform transition-transform duration-500 hover:scale-105"
        >
          {title}
        </h2>
      </div>
      <div className="relative">
        <h3 className="text-white text-3xl font-semibold mb-6 transform transition-all duration-300">
          {description}
        </h3>
        <div className="absolute -left-4 top-1/2 w-1 h-0 bg-[#ffff33] transition-all duration-300"
          style={{ height: isHovered ? '100%' : '0%' }}
        ></div>
      </div>
      <p className="text-gray-300 text-lg mb-12 max-w-4xl leading-relaxed">
        {description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 
              transform transition-all duration-300 hover:border-[#ffff33] hover:scale-105 hover:shadow-lg hover:shadow-[#ffff33]/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#ffff33] text-black p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <p className="text-white text-lg font-medium">{feature}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button className="group relative bg-[#ffff33] text-black px-8 py-5 rounded-full font-semibold 
          transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ffff33]/30"
        >
          <span className="relative z-10">Explore Project</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8 mb-16 animate-fade-in">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] bg-clip-text text-transparent
            leading-tight tracking-tight mt-32"
          >
            Innovations that Reimagine Boundaries
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-[#ffff33] to-yellow-400"></div>

          <p className="text-2xl text-gray-300 max-w-4xl leading-relaxed">
            Innovation isn't just about new ideas; it's about fearless execution. I believe in creating solutions that challenge
            the norm, disrupt industries, and redefine the way we think. Every project here is a reflection of bold thinking,
            hands-on leadership, and a vision focused on tomorrow.
          </p>

          <div className="flex justify-start">
            <button className="group relative bg-[#ffff33] text-black px-8 py-4 rounded-full font-semibold 
              transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ffff33]/30"
            >
              <span className="relative z-10">Contact Me Directly</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </button>
          </div>
        </div>

        <div className="space-y-32">
          <ProjectCard
            title="VIDHYARTHI AI"
            description="Empowering Students with Personalized AI Learning Paths"
            features={[
              "Psychological Profiling-Based Learning",
              "AI-Driven Exam Preparation & Career Guidance",
              "Adaptive Study Plans & Progress Tracking"
            ]}
          />

          <ProjectCard
            title="LOM AI"
            description="Automating Industrial Workflows with Intelligence"
            features={[
              "Workflow Analysis & Optimization",
              "Real-Time Analytics & Reporting",
              "Intelligent Automation Implementation"
            ]}
          />

          <InovativeIdea />
        </div>
      </div>
    </div>
  );
}

export default App;