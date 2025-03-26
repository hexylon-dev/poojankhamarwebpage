import React from 'react';

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative perspective h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff6600] via-[#ff8533] to-[#ff6600] rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-700 animate-gradient-xy"></div>
      <div className="relative h-full bg-black p-5 sm:p-6 lg:p-8 rounded-2xl shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:rotate-2 backdrop-blur-sm bg-opacity-90 border border-gray-800 flex flex-col">
        <div className="flex items-center justify-center w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-[#ff6600] via-[#ff8533] to-[#ff6600] rounded-2xl transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 shadow-lg">
          <Icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white transform transition-transform duration-700 group-hover:scale-110" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-5 lg:mt-6 mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:from-[#ff6600] group-hover:to-[#ff8533] transition-all duration-700">
          {title}
        </h3>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}
