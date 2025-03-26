import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ReadyShapeFuture = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    const container = document.querySelector('.interactive-bg');
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)] opacity-20">
        {Array.from({ length: 41 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffff33]/30 to-transparent"
            style={{ top: `${(i / 40) * 100}%` }}
          />
        ))}
        {Array.from({ length: 41 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ffff33]/30 to-transparent"
            style={{ left: `${(i / 40) * 100}%` }}
          />
        ))}
      </div>

      {/* Main content container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-6xl aspect-[2/1] rounded-[2rem] overflow-hidden interactive-bg"
      >
        {/* Dynamic gradient background */}
        <div 
          className="absolute inset-0 bg-[#111111]"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 255, 51, 0.15), rgba(17, 17, 17, 1) 50%)`
          }}
        ></div>

        {/* Animated gradient circles */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] aspect-square">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-[#4b4b23] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute inset-[15%] bg-[#5c5c2b] rounded-full opacity-30 blur-lg"></div>
            <div className="absolute inset-[30%] bg-[#6d6d33] rounded-full opacity-40 blur-md"></div>
            <div className="absolute inset-[45%] bg-[#7e7e3b] rounded-full opacity-50 blur-sm"></div>
            <div className="absolute inset-[60%] bg-[#8f8f43] rounded-full opacity-60"></div>
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#ffff33] rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{ 
                y: [null, '-20%'],
                opacity: [null, 0]
              }}
              transition={{ 
                duration: Math.random() * 2 + 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-12 z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#ffff33] text-6xl font-bold mb-8 max-w-[600px] leading-tight"
          >
            Ready to shape 
            <span className="relative inline-block mx-2">
              the future
              <motion.div 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#ffff33] to-[#ffff33]/50"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
            with me?
          </motion.h1>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-[#ffff33] text-black rounded-full w-fit font-semibold overflow-hidden"
          >
            <span className="relative z-10 inline-flex items-center">
              Contact Me Directly
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ReadyShapeFuture;
