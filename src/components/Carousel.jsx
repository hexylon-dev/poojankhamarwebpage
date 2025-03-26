import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Carousel({ carouselData }) {
  const { title, content, reasons, constantImage } = carouselData;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add hover effect animation for slide number
  const slideNumberVariants = {
    hover: { scale: 1.1, color: "#60A5FA" },
    tap: { scale: 0.95 }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto mb-8 sm:mb-16">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          className="text-3xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#ff6600] via-[#ff9966] to-[#ff6600] text-transparent bg-clip-text bg-size-200 animate-gradient"
        >
          {title}
        </motion.h4>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-center max-w-3xl mx-auto text-sm sm:text-base"
        >
          {content}
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
          <motion.div 
            className="w-full md:w-2/3 space-y-4 sm:space-y-8 p-8 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-lg shadow-2xl border border-gray-700/30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.div 
              className="border-t border-gray-700/50 pt-4"
              variants={slideNumberVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="text-2xl sm:text-3xl font-mono text-blue-400 tracking-wider">
                {reasons[currentSlide].id.toString().padStart(2, '0')}
              </span>
            </motion.div>

            <AnimatePresence mode='wait'>
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4 sm:space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-200 to-blue-100 text-transparent bg-clip-text">
                  {reasons[currentSlide].title}
                </h2>
                <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
                  {reasons[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center pt-6">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + reasons.length) % reasons.length)}
                className="group relative px-6 py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-lg overflow-hidden"
                aria-label="Previous slide"
              >
                <span className="relative z-10 text-white group-hover:text-blue-100">← Previous</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-105" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % reasons.length)}
                className="group relative px-6 py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-lg overflow-hidden"
                aria-label="Next slide"
              >
                <span className="relative z-10 text-white group-hover:text-blue-100">Next →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity transform group-hover:scale-105" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/3 flex gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-full h-64 md:h-full aspect-square overflow-hidden rounded-xl shadow-2xl relative group">
              <motion.img
                src={constantImage}
                alt="Constant"
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
