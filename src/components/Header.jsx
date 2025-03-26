import React from 'react';

const Header = () => (
  <div className="relative text-center mb-24 group">
    {/* Multiple layered glowing orbs */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-[#ff6600] to-[#ff8533] rounded-full blur-[100px] opacity-20 animate-pulse-slow" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#ff4500] to-[#ff6600] rounded-full blur-[80px] opacity-15 animate-float-slow" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#ff6600] rounded-full blur-[60px] opacity-10 animate-spin-slow" />

    {/* Decorative lines */}
    <div className="absolute left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent top-0 animate-pulse-slow" />
    <div className="absolute left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#ff6600]/20 to-transparent bottom-0 animate-pulse-slow delay-300" />

    {/* Main content */}
    <div className="relative">
      <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-bold mb-6 group-hover:scale-[1.02] transition-transform duration-500">
        {/* Text gradient with animated border */}
        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ff6600] via-[#ff8533] to-[#ff4500] animate-gradient-x">
          Our Core Values
          <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff6600]/0 via-[#ff6600] to-[#ff6600]/0 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></span>
        </span>
      </h1>

      {/* Enhanced subtitle with gradient and animation */}
      <p className="relative text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto">
        <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent animate-pulse-slow">
          Driving innovation and excellence through our commitment to these fundamental principles
        </span>
      </p>

      {/* Decorative dots */}
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#ff6600] animate-pulse delay-100" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#ff8533] animate-pulse delay-200" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#ff4500] animate-pulse delay-300" />
      </div>

      <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#ff6600] animate-pulse delay-200" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#ff8533] animate-pulse delay-300" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#ff4500] animate-pulse delay-400" />
      </div>
    </div>

    {/* Animated corner accents */}
    <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#ff6600]/30 rounded-tl-lg group-hover:border-[#ff6600] transition-colors duration-500" />
    <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#ff6600]/30 rounded-tr-lg group-hover:border-[#ff6600] transition-colors duration-500" />
    <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#ff6600]/30 rounded-bl-lg group-hover:border-[#ff6600] transition-colors duration-500" />
    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#ff6600]/30 rounded-br-lg group-hover:border-[#ff6600] transition-colors duration-500" />
  </div>
);

export default Header;
