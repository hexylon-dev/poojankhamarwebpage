import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import RightArrowOrange from '../assets/svgs/RightArrowOrange';

const PosterPage = ({ 
  title = "UNLOCK THE POWER OF PREDICTIVE ANALYTICS FOR BUSINESS SUCCESS", 
  description = "Harness the power of predictive analytics to make smarter, data-driven decisions and accelerate growth. Let's work together to uncover opportunities, optimize operations, and maximize profitability.",
  ctaText = "Contact us today to begin your data-driven journey!",
  buttonText = "Get Started" 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute top-8 right-4 sm:top-12 sm:right-8 lg:top-32 lg:right-12 transform hover:scale-110 transition-transform duration-300">
        <RightArrowOrange className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-[#FF6B2B] animate-pulse" />
      </div>
      <div className="absolute -left-10 sm:-left-20 top-10 sm:top-20 w-24 sm:w-40 h-24 sm:h-40 bg-[#FF6B2B]/10 rounded-full blur-3xl" />
      <div className="absolute -right-10 sm:-right-20 bottom-10 sm:bottom-20 w-24 sm:w-40 h-24 sm:h-40 bg-[#FF6B2B]/10 rounded-full blur-3xl" />

      <div className="w-full max-w-[1400px] mx-auto py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 px-4 sm:px-8 lg:px-16 xl:px-24 animate-fadeIn">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-left bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {title}
            </h1>
          </div>
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 px-4 sm:px-8 lg:px-16 xl:px-24">
            <p className="text-base sm:text-lg md:text-xl text-left leading-relaxed animate-slideIn text-gray-400">
              {description}
            </p>
          </div>
        </div>
        <div className="text-center mt-12 sm:mt-16 px-4 sm:px-8">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8 bg-gradient-to-r from-[#FF6B2B] to-[#FF8F5C] bg-clip-text text-transparent">
            {ctaText}
          </p>
          <button className="group bg-[#FF6B2B] hover:bg-[#FF8F5C] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            {buttonText}
            <ArrowUpRight className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PosterPage;
