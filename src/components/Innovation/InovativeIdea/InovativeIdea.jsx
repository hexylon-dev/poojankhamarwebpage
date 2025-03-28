import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const InovativeIdea = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const particles = Array.from({ length: 15 });

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#111111] relative overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract geometric shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 md:w-80 md:h-80 bg-[#ffff33]/5 rotate-45 rounded-3xl"></div>
        <div className="absolute top-1/3 -right-20 w-60 h-60 md:w-96 md:h-96 bg-[#ffff33]/3 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 md:w-40 md:h-40 bg-[#ffff33]/8 rotate-12 rounded-xl"></div>
        
        {/* Floating particles */}
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-[#ffff33]/30"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              opacity: [Math.random() * 0.3 + 0.2, Math.random() * 0.5 + 0.3]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 bg-[#ffff33]/10 rounded-full">
              <span className="text-[#ffff33] text-sm font-medium">Innovation & Collaboration</span>
            </div>
            
            <motion.h1
              className="text-[#ffff33] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Got an <span className="relative">
                Innovative Idea
                <motion.div 
                  className="absolute -bottom-1 left-0 h-1 bg-[#ffff33]/40 w-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span> or collaboration in mind?
            </motion.h1>
            
            <motion.p
              className="text-[#ffff33]/80 text-base md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Have a project in mind or want to discuss potential opportunities? Get in touch and let's create something amazing together.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: !isMobile ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#ffff33] text-black rounded-lg font-medium flex items-center gap-2 transition-colors duration-300 hover:bg-[#ffff33]/90"
                onClick={() => navigate('/contact')}
              >
                Contact Me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: !isMobile ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent text-[#ffff33] border border-[#ffff33]/30 rounded-lg font-medium transition-colors duration-300 hover:bg-[#ffff33]/10"
                onClick={() => navigate('/projects')}
              >
                See My Work
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right side: Decorative element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block relative"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto">
              {/* Abstract geometric composition */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-full h-full border-4 border-[#ffff33]/20 rounded-full"></div>
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[15%] flex items-center justify-center"
              >
                <div className="w-full h-full border-4 border-[#ffff33]/30 rounded-full"></div>
              </motion.div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[30%] flex items-center justify-center"
              >
                <div className="w-full h-full border-4 border-[#ffff33]/40 rounded-full"></div>
              </motion.div>
              
              <div className="absolute inset-[45%] bg-[#ffff33] rounded-full glow-yellow"></div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute top-[10%] right-[20%] w-10 h-10 bg-[#ffff33]/50 rounded-lg"
                animate={{ y: [-10, 10], rotate: [0, 90] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
              
              <motion.div 
                className="absolute bottom-[20%] left-[15%] w-14 h-14 bg-[#ffff33]/30 rounded-full"
                animate={{ y: [15, -15], x: [5, -5] }}
                transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
              
              <motion.div 
                className="absolute top-[30%] left-[10%] w-8 h-8 border-2 border-[#ffff33]/60 rounded-md"
                animate={{ rotate: [0, 180], scale: [0.9, 1.1] }}
                transition={{ duration: 9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom decorative line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ffff33]/5 via-[#ffff33]/40 to-[#ffff33]/5"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </div>
  );
};

export default InovativeIdea;
