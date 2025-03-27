import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InovativeIdea = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    const container = document.querySelector('.interactive-bg');
    if (container && !isMobile) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Simplified background grid for mobile */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-20 md:grid-cols-[repeat(40,1fr)] md:grid-rows-[repeat(40,1fr)]">
        {Array.from({ length: isMobile ? 21 : 41 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffff33]/30 to-transparent"
            style={{ top: `${(i / (isMobile ? 20 : 40)) * 100}%` }}
          />
        ))}
        {Array.from({ length: isMobile ? 21 : 41 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ffff33]/30 to-transparent"
            style={{ left: `${(i / (isMobile ? 20 : 40)) * 100}%` }}
          />
        ))}
      </div>

      {/* Main container with responsive aspect ratio */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-6xl aspect-[1/1.2] sm:aspect-[1/1] md:aspect-[2/1] rounded-xl md:rounded-[2rem] overflow-hidden interactive-bg"
      >
        {/* Background with mobile fallback */}
        <div
          className="absolute inset-0 bg-[#111111]"
          style={!isMobile ? {
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 255, 51, 0.15), rgba(17, 17, 17, 1) 50%)`
          } : {
            background: `radial-gradient(circle at center, rgba(255, 255, 51, 0.1), rgba(17, 17, 17, 1) 70%)`
          }}
        ></div>

        {/* Responsive animated circles */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] sm:w-[40%] aspect-square">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: isMobile ? [0, 180] : [0, 360]
            }}
            transition={{
              duration: isMobile ? 30 : 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-[#4b4b23] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute inset-[15%] bg-[#5c5c2b] rounded-full opacity-30 blur-lg"></div>
            {!isMobile && (
              <>
                <div className="absolute inset-[30%] bg-[#6d6d33] rounded-full opacity-40 blur-md"></div>
                <div className="absolute inset-[45%] bg-[#7e7e3b] rounded-full opacity-50 blur-sm"></div>
              </>
            )}
          </motion.div>
        </div>

        {/* Content with responsive typography */}
        <div className="relative h-full flex flex-col justify-center p-5 sm:p-8 md:px-12 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#ffff33] text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 max-w-full leading-tight"
          >
            Got an Innovative Idea or
            <span className="relative inline-block mx-1 md:mx-2">
              Collaboration in Mind?
            </span>
            Let's Make It Happen.
          </motion.h1>

          <motion.p
            className="text-[#ffff33]/80 text-sm sm:text-base md:text-lg mb-6 max-w-full sm:max-w-[80%] md:max-w-[600px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a project in mind or want to discuss potential opportunities? Get in touch and let's create something amazing together.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: !isMobile ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-[#ffff33] text-black rounded-full w-fit font-semibold overflow-hidden text-sm sm:text-base"
          >
            <span className="relative z-10 inline-flex items-center">
              Contact Me Directly
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default InovativeIdea;