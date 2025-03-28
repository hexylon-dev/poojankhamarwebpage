import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";  // ✅ SEO Meta Tags ke liye

const InnovationHighlight = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    });
  }, [controls]);

  return (
    <>
      {/* ✅ SEO Meta Tags for This Section */}
      <Helmet>
        <title>Innovations | Disrupting Industries with AI & Automation</title>
        <meta
          name="description"
          content="Explore groundbreaking innovations that challenge norms, disrupt industries, and redefine the future. AI, automation, and fearless execution drive our vision."
        />
        <meta name="keywords" content="innovation, AI solutions, automation, disruptive technology, bold thinking" />
        <meta name="author" content="Poojan Khamar" />
      </Helmet>

      <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
        {/* Futuristic background elements */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(
              circle at ${cursorPosition.x * 100}% ${cursorPosition.y * 100}%, 
              rgba(255, 255, 51, 0.15), 
              transparent 25%
            )`
          }}
        />
        
        {/* Diagonal dividing lines */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute h-[200%] w-1 bg-gradient-to-b from-transparent via-[#ffff33]/60 to-transparent"
            style={{ 
              left: '20%', 
              top: '-50%', 
              transform: 'rotate(15deg)'
            }}
            animate={{
              y: [0, 100],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute h-[200%] w-[2px] bg-gradient-to-b from-transparent via-[#ffff33]/30 to-transparent"
            style={{ 
              left: '70%', 
              top: '-50%', 
              transform: 'rotate(-20deg)'
            }}
            animate={{
              y: [0, 100],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear"
            }}
          />
        </div>

        {/* Binary/Data visualization effect */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`binary-${i}`} 
              className="absolute text-[8px] md:text-xs text-[#ffff33] font-mono whitespace-nowrap"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            >
              {Array.from({ length: 30 }).map(() => Math.round(Math.random())).join('')}
            </div>
          ))}
        </div>

        {/* Main content with asymmetric layout */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="flex flex-col md:flex-row items-start">
            {/* Left column: Main content - 60% on desktop */}
            <motion.div 
              className="w-full md:w-3/5 pr-0 md:pr-12"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
            >
              {/* Glitch effect title */}
              <div className="relative mb-6">
                <motion.div
                  className="absolute top-0 left-0 w-16 h-1 bg-[#ffff33]"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                
                <h1 className="font-bold text-5xl md:text-7xl mt-6 relative inline-block group">
                  <span className="relative text-white z-10">
                    <span className="text-[#ffff33]">Inno</span>vation
                    {/* <span className="relative">
                      <motion.span 
                        className="absolute top-0 left-0 text-[#ffff33] opacity-0 filter blur-[2px]"
                        animate={{
                          opacity: [0, 1, 0],
                          x: [0, -4, 0],
                          y: [0, 2, 0]
                        }}
                        transition={{
                          duration: 0.2,
                          repeat: Infinity,
                          repeatType: "mirror",
                          repeatDelay: 5
                        }}
                      >
                        vation
                      </motion.span>
                    </span> */}
                  </span>
                  <motion.span 
                    className="absolute left-0 bottom-0 w-full h-[3px] bg-[#ffff33]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                  />
                </h1>
                
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold text-white mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  that <span className="text-[#ffff33]">reimagines</span> reality
                </motion.h2>
              </div>
              
              <motion.p 
                className="text-gray-300 text-xl md:text-2xl leading-relaxed mt-8 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Innovation isn't just about new ideas; it's about fearless execution.
                I believe in creating solutions that challenge the norm, disrupt
                industries, and redefine the way we think.
              </motion.p>
              
              <motion.div 
                className="mt-12 flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden group px-8 py-3 bg-[#ffff33] text-black font-bold rounded-sm"
                  onClick={() => navigate("/contact")}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Me
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-[#ffff33] text-[#ffff33] font-bold bg-transparent rounded-sm"
                  onClick={() => navigate("/projects")}
                >
                  Explore Work
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Right column: 3D visualization - 40% on desktop */}
            <motion.div 
              className="w-full md:w-2/5 mt-16 md:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative h-[400px] perspective-[1000px]">
                {/* 3D Cube effect */}
                <motion.div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56"
                  animate={{ 
                    rotateX: [0, 360], 
                    rotateY: [0, 360] 
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity,
                    ease: "linear" 
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Front face */}
                  <div className="absolute inset-0 bg-[#ffff33]/10 border border-[#ffff33]/50" style={{ transform: 'translateZ(70px)' }}></div>
                  {/* Back face */}
                  <div className="absolute inset-0 bg-[#ffff33]/10 border border-[#ffff33]/50" style={{ transform: 'translateZ(-70px) rotateY(180deg)' }}></div>
                  {/* Right face */}
                  <div className="absolute inset-0 bg-[#ffff33]/10 border border-[#ffff33]/50" style={{ transform: 'translateX(70px) rotateY(90deg)' }}></div>
                  {/* Left face */}
                  <div className="absolute inset-0 bg-[#ffff33]/10 border border-[#ffff33]/50" style={{ transform: 'translateX(-70px) rotateY(-90deg)' }}></div>
                  {/* Top face */}
                  <div className="absolute inset-0 bg-[#ffff33]/10 border border-[#ffff33]/50" style={{ transform: 'translateY(-70px) rotateX(90deg)' }}></div>
                  {/* Bottom face */}
                  <div className="absolute inset-0 bg-[#ffff33]/10 border border-[#ffff33]/50" style={{ transform: 'translateY(70px) rotateX(-90deg)' }}></div>
                </motion.div>
                
                {/* Orbiting particles */}
                {/* {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-[#ffff33]"
                    animate={{
                      x: [
                        Math.cos(i * Math.PI / 4) * 120,
                        Math.cos((i * Math.PI / 4) + (2 * Math.PI)) * 120
                      ],
                      y: [
                        Math.sin(i * Math.PI / 4) * 120,
                        Math.sin((i * Math.PI / 4) + (2 * Math.PI)) * 120
                      ],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      times: [0, 0.5, 1]
                    }}
                  />
                ))} */}
              </div>
            </motion.div>
          </div>
          
          {/* Innovation pillars - 3 card layout with tech-inspired styling */}
          <motion.div 
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              {
                title: "Disruptive Thinking",
                description: "Breaking conventional boundaries to create revolutionary solutions.",
                icon: "⚡"
              },
              {
                title: "Cutting-Edge Tech",
                description: "Leveraging the latest technologies to build tomorrow's innovations.",
                icon: "🔬"
              },
              {
                title: "Fearless Execution",
                description: "Turning visionary concepts into tangible, impactful realities.",
                icon: "🚀"
              }
            ].map((item, i) => (
              <motion.div
                key={`pillar-${i}`}
                className="relative overflow-hidden bg-black/40 backdrop-blur-sm border border-[#ffff33]/20 px-6 py-8"
                whileHover={{ 
                  y: -10,
                  borderColor: "rgba(255, 255, 51, 0.6)",
                  boxShadow: "0 10px 30px -10px rgba(255, 255, 51, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-[#ffff33] text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-1 bg-[#ffff33]/50"></div>
                  <div className="absolute top-0 right-0 w-1 h-16 bg-[#ffff33]/50"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default InnovationHighlight;
