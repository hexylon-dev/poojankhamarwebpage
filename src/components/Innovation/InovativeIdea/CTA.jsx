import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="relative bg-black border border-[#ffff33] md:border-2 rounded-xl md:rounded-3xl p-6 md:p-12 lg:p-16 max-w-5xl mx-auto overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffff33]/10 via-transparent to-[#ffff33]/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">
            Ready to Share Your{' '}
            <span className="text-[#ffff33] relative">
              Game-Changing
              <span className="absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-[#ffff33]/50"></span>
            </span>{' '}
            Idea?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center mb-8 md:mb-12 max-w-3xl mx-auto">
            Join our community of innovators and turn your vision into reality. The next big breakthrough could be your idea shared on our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button
              onClick={() => navigate('/ideas-sharing')}
              className="bg-[#ffff33] text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;