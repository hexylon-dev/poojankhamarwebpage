import React from 'react';

const HexagonBg = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20">
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="absolute w-32 md:w-48 h-32 md:h-48 transform rotate-45 border border-[#ff6600]/20"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${5 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`
        }}
      />
    ))}
  </div>
);

export default HexagonBg;