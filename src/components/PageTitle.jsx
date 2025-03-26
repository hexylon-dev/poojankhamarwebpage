import React from 'react';

export function PageTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16 sm:mb-20 lg:mb-24 relative group perspective">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6600] via-[#ff8533] to-[#ff6600] opacity-20 blur-3xl group-hover:opacity-30 transition-opacity rounded-lg animate-pulse"></div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-6 sm:mb-8 lg:mb-10 relative tracking-tight">
        {title}
        <div className="absolute -bottom-4 sm:-bottom-5 lg:-bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
          <span className="w-2 sm:w-3 lg:w-4 h-1 sm:h-1.5 bg-[#ff6600] rounded-full animate-bounce"></span>
          <span className="w-2 sm:w-3 lg:w-4 h-1 sm:h-1.5 bg-[#ff8533] rounded-full animate-bounce delay-75"></span>
          <span className="w-2 sm:w-3 lg:w-4 h-1 sm:h-1.5 bg-[#ff6600] rounded-full animate-bounce delay-150"></span>
        </div>
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed tracking-wide px-4 sm:px-6">
        {subtitle}
      </p>
    </div>
  );
}
