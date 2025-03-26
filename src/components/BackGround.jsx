import React from 'react';

const Background = ({ position }) => {
  const positionClasses = {
    'top-right': '-translate-y-1/2 translate-x-1/2 top-0 right-0 animate-pulse-slow',
    'bottom-left': 'translate-y-1/2 -translate-x-1/2 bottom-0 left-0 animate-float',
  };

  return (
    <>
      {/* Primary glow */}
      <div
        className={`absolute w-[35rem] h-[35rem] bg-gradient-to-r from-[#ff6600] to-[#ff8533] rounded-full blur-[180px] opacity-20 transition-all duration-1000 ${positionClasses[position]}`}
      />
      {/* Secondary glow */}
      <div
        className={`absolute w-[25rem] h-[25rem] bg-gradient-to-br from-[#ff8533] to-[#ff4500] rounded-full blur-[150px] opacity-15 
        ${position === 'top-right' ? 'top-24 right-24 animate-float-slow' : 'bottom-24 left-24 animate-pulse-slow'}`}
      />
      {/* Accent glow */}
      <div
        className={`absolute w-[15rem] h-[15rem] bg-gradient-to-tr from-[#ff4500] to-[#ff6600] rounded-full blur-[100px] opacity-10 
        ${position === 'top-right' ? 'top-36 right-36 animate-spin-slow' : 'bottom-36 left-36 animate-float-reverse'}`}
      />
    </>
  );
};

export default Background;
