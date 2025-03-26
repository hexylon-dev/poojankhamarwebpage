import React from 'react';

export const PageHeader = ({ title, subtitle }) => (
  <div className="relative text-center mb-16 md:mb-32">
    {/* Animated glow effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-64 md:w-96 h-64 md:h-96 bg-[#ff6600] rounded-full blur-[180px] opacity-10 animate-pulse" />
    
    <div className="relative px-4">
      {/* Hexagon decoration */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-12 md:-top-16 w-24 md:w-32 h-24 md:h-32 
        rotate-45 border border-[#ff6600]/20" />
      
      <span className="inline-block text-[#ff6600] text-lg font-medium mb-4 
        tracking-[0.2em] uppercase relative">
        <span className="absolute -left-8 top-1/2 w-6 h-[1px] bg-[#ff6600]/40" />
        Our Services
        <span className="absolute -right-8 top-1/2 w-6 h-[1px] bg-[#ff6600]/40" />
      </span>
      
      <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r 
          from-[#ff6600] to-orange-500">
          {title}
        </span>
      </h1>
      
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#ff6600]/50" />
        <div className="w-3 h-3 rotate-45 border border-[#ff6600]/50" />
        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#ff6600]/50" />
      </div>
      
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  </div>
);
