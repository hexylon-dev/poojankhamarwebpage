import React from 'react';
import { LucideIcon } from 'lucide-react';

export const ServiceCard = ({ icon: Icon, title, description, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className={`group relative ${isEven ? 'lg:translate-y-16' : ''}`}
      style={{
        transform: `perspective(2000px) rotateX(0deg)`,
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 
        border border-[#ff6600]/10 transition-all duration-500
        hover:border-[#ff6600]/30 group-hover:translate-y-[-0.5rem]
        hover:shadow-[0_0_50px_-12px_rgba(255,102,0,0.3)]">
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff6600]/20 to-transparent opacity-0 
          group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hexagon background pattern */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10">
          <div className="absolute w-32 h-32 -right-16 -top-16 rotate-45 border border-[#ff6600]/20" />
          <div className="absolute w-32 h-32 -left-16 -bottom-16 rotate-45 border border-[#ff6600]/20" />
        </div>
        
        <div className="relative z-10">
          {/* Icon container with floating animation */}
          <div className="relative w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 transform-gpu 
            transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
            <div className="absolute inset-0 bg-[#ff6600] rounded-xl blur-xl opacity-20 
              group-hover:opacity-40 transition-opacity" />
            <div className="relative h-full bg-gradient-to-br from-[#ff6600] to-orange-600 
              rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 
            group-hover:text-[#ff6600] transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
