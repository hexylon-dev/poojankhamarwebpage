import React, { useState } from 'react'

function OurProjects({ title, description, features }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mb-32 transform transition-all duration-500 hover:translate-x-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <h2
          className="text-4xl md:text-6xl lg:text-[150px] font-bold mb-4 bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#000011] bg-clip-text text-transparent transform transition-transform duration-500 hover:scale-105 mt-10"
        >
          {title}
        </h2>

      </div>
      <div className="relative">
        <h3 className="text-white text-3xl font-semibold mb-6 transform transition-all duration-300">
          {description}
        </h3>
        <div className="absolute -left-4 top-1/2 w-1 h-0 bg-[#ffff33] transition-all duration-300"
          style={{ height: isHovered ? '100%' : '0%' }}
        ></div>
      </div>
      <p className="text-gray-300 text-lg mb-12 max-w-4xl leading-relaxed">
        {description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 
              transform transition-all duration-300 hover:border-[#ffff33] hover:scale-105 hover:shadow-lg hover:shadow-[#ffff33]/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#ffff33] text-black p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <p className="text-white text-lg font-medium">{feature}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button className="group relative bg-[#ffff33] text-black px-8 py-4 rounded-full font-semibold 
          transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ffff33]/30"
        >
          <span className="relative z-10">Explore Project</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </button>
      </div>
    </div>
  );
}

export default OurProjects