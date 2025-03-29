import React, { useEffect, useRef } from 'react';
import { Lightbulb, Users, Trophy, Rocket, Brain, Sparkles, ArrowRight, Star } from 'lucide-react';

// Optimized feature card with reduced animations and effects
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group bg-black p-8 rounded-2xl border-2 border-[#ffff33] hover:shadow-lg transition-all duration-300 relative">
      {/* Simplified background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffff33]/5 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="bg-black/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#ffff33]/20 transition-all duration-300">
          <Icon className="w-8 h-8 text-[#ffff33]" />
        </div>
        <h3 className="text-[#ffff33] text-2xl font-bold mb-4 flex items-center gap-2">
          {title}
          <Star className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const App = () => {
  const heroRef = useRef(null);
  
  // Throttled mousemove handler
  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e) => {
      if (!heroRef.current || ticking) return;
      
      ticking = true;
      
      requestAnimationFrame(() => {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        heroRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
        heroRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
        
        ticking = false;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Features Grid */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Why Choose{' '}
          <span className="relative inline-block">
            <span className="text-[#ffff33] relative z-10">Innovation Hub</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ffff33]/50"></span>
          </span>
        </h2>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Join a community of visionaries and innovators who are reshaping the future through groundbreaking ideas and collaboration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Lightbulb}
            title="Every Great Innovation Starts with an Idea"
            description="From groundbreaking startups to revolutionary technologies, every big change began as a simple idea."
          />
          <FeatureCard
            icon={Users}
            title="Collaboration Turns Ideas into Reality"
            description="An idea grows stronger when it's nurtured by a community of thinkers, creators, and problem-solvers."
          />
          <FeatureCard
            icon={Trophy}
            title="Get the Recognition Your Idea Deserves"
            description="Ideas thrive when they get the right exposure and attention. Our platform ensures your innovation reaches the right people."
          />
          <FeatureCard
            icon={Rocket}
            title="Break the Barrier Between Thoughts & Action"
            description="Many brilliant ideas never see the light of day simply because they remain unshared. Take the first step today."
          />
          <FeatureCard
            icon={Brain}
            title="Be a Part of the Future of Innovation"
            description="The world is constantly evolving, and those who dare to think differently lead the way."
          />
          <FeatureCard
            icon={Sparkles}
            title="Transform Your Vision"
            description="Don't let your ideas stay in your mind—share them today and be part of the future!"
          />
        </div>
      </div>

      {/* CTA Section - Simplified animations */}
      {/* <div className="container mx-auto px-4 py-24">
        <div className="relative bg-black border-2 border-[#ffff33] rounded-3xl p-16 max-w-5xl mx-auto overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffff33]/10 via-transparent to-[#ffff33]/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Ready to Share Your{' '}
              <span className="text-[#ffff33] relative">
                Game-Changing
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ffff33]/50"></span>
              </span>{' '}
              Idea?
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Join our community of innovators and turn your vision into reality. The next big breakthrough could be your idea shared on our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-[#ffff33] text-black font-bold py-4 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2">
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-[#ffff33] text-[#ffff33] font-bold py-4 px-8 rounded-full hover:bg-[#ffff33]/10 transition-all duration-300">
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default App;