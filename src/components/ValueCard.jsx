import React from 'react';

const ValueCard = ({ icon: Icon, title, description, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`group relative flex ${isEven ? 'flex-row' : 'flex-row-reverse'} 
        items-center gap-8 bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-8 
        transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl
        border border-neutral-800 hover:border-[#ff6600]/50 hover:bg-neutral-900/90
        hover:shadow-[#ff6600]/5 hover:shadow-2xl`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff6600]/0 via-[#ff6600]/5 to-[#ff6600]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="absolute -inset-[2px] bg-gradient-to-r from-[#ff6600] via-[#ff8533] to-[#ff4500] rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-all duration-700" />
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff6600] to-[#ff8533] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-pulse-slow" />
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#ff6600] via-[#ff8533] to-[#ff4500] transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
          <div className="absolute inset-[2px] rounded-full bg-neutral-900/90 flex items-center justify-center">
            <Icon className="w-10 h-10 text-white transform transition-transform duration-500 group-hover:scale-110 group-hover:text-[#ff6600]" />
          </div>
        </div>
      </div>

      <div className={`flex-1 ${isEven ? 'text-left' : 'text-right'} relative z-10`}>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent mb-3 group-hover:from-[#ff6600] group-hover:to-[#ff8533] transition-all duration-500">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>

      <div className={`absolute ${isEven ? '-left-2' : '-right-2'} top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-[#ff6600]/0 via-[#ff6600] to-[#ff6600]/0 opacity-0 group-hover:opacity-50 transition-opacity duration-700`} />
      
      <div className={`absolute ${isEven ? '-left-3' : '-right-3'} top-1/2 -translate-y-1/2 flex flex-col gap-2`}>
        <div className="w-1.5 h-1.5 rounded-full bg-[#ff6600] opacity-0 group-hover:opacity-75 transition-all duration-700 delay-100" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#ff8533] opacity-0 group-hover:opacity-75 transition-all duration-700 delay-200" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#ff4500] opacity-0 group-hover:opacity-75 transition-all duration-700 delay-300" />
      </div>
    </div>
  );
};

export default ValueCard;
