import React, { useState } from 'react';
import { Lightbulb, Globe2, Rocket, Eye, Sparkles, ArrowRight, Hexagon , ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function HexagonBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {[...Array(20)].map((_, i) => (
        <Hexagon
          key={i}
          className="absolute text-[#ffff33] w-24 h-24 transform rotate-45"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}

function TimelineItem({ icon: Icon, title, description, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div 
      className={`group relative flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-1/2 ${isEven ? 'text-right' : 'text-left'}`}>
        <div 
          className={`inline-block bg-black/40 backdrop-blur-lg p-8 rounded-2xl border border-[#ffff33]/20 
            ${isHovered ? 'border-[#ffff33] scale-105' : ''} transition-all duration-500`}
        >
          <h3 className="text-[#ffff33] text-2xl font-bold mb-4 flex items-center gap-3">
            {!isEven && title}
            <Icon className={`w-8 h-8 ${isHovered ? 'animate-pulse' : ''}`} />
            {isEven && title}
          </h3>
          <p className="text-white/90 leading-relaxed max-w-lg">{description}</p>
        </div>
      </div>

      <div className="relative w-24 flex items-center justify-center">
        <div className="w-1 h-full bg-[#ffff33]/20 absolute"></div>
        <div className={`w-12 h-12 rounded-full bg-black border-4 border-[#ffff33] flex items-center justify-center
          ${isHovered ? 'scale-125' : ''} transition-transform duration-500`}>
          <Lightbulb className={`w-6 h-6 text-[#ffff33] ${isHovered ? 'animate-bounce' : ''}`} />
        </div>
      </div>

      <div className="w-1/2"></div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  const features = [
    { icon: Sparkles, title: "Showcase Your Creativity", description: "Put your unique ideas in front of a community that values innovation and futuristic thinking." },
    { icon: Globe2, title: "Be Part of a Global Network", description: "Engage with like-minded visionaries and explore fresh perspectives to refine and enhance your ideas." },
    { icon: Rocket, title: "Accelerate Your Growth", description: "Turn your concepts into reality by receiving valuable feedback, mentorship, and exposure to industry experts." },
    { icon: Eye, title: "Gain Visibility & Recognition", description: "Stand out as a thought leader and make your mark in the world of innovation and technology." },
    { icon: Sparkles, title: "Shape the Future", description: "Every great idea has the potential to disrupt industries and transform the world—yours could be next!" }
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <HexagonBackground />
      
      <div className="container mx-auto px-4 py-24 relative">
        <div className="text-center mb-32 relative">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#ffff33] via-yellow-300 to-[#ffff33] text-transparent bg-clip-text">
            Why Share Your Ideas on the Innovation Hub?
          </h1>
          <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Bringing your ideas to life starts here! Our idea-sharing platform is designed to help innovators like you connect, collaborate, and create impact.
          </p>
        </div>

        <div className="space-y-24 mb-32">
          {features.map((feature, index) => (
            <TimelineItem key={index} icon={feature.icon} title={feature.title} description={feature.description} index={index} />
          ))}
        </div>

        <div className="text-center relative">
          <button className="group bg-[#ffff33] text-black px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-yellow-300 transition-all duration-500 flex items-center gap-3 mx-auto relative overflow-hidden"
          onClick={() => navigate("/ideas")}>
            <span className="relative z-10">Start your innovation journey today</span>
            <ArrowRight className="w-8 h-8 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
