import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ServiceV3 = ({ keyFeatures }) => {
  const words = keyFeatures.title.split(' ');
  const firstWord = words[0];
  const restOfTitle = words.slice(1).join(' ');

  const cards = keyFeatures.features;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Modernized background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-[120px] transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[#FF6B2B]/10 to-yellow-500/10 blur-[120px] transform translate-y-1/2" />
        <div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        {/* Enhanced header section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-none tracking-tight">
            <span className="inline-block bg-gradient-to-r from-[#FF6B2B] via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              {firstWord}
            </span>{" "}
            <span className="inline-block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {restOfTitle}
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B2B] to-yellow-500 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Refined cards grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20"
        >
          {cards.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Enhanced card design */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B2B]/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gray-900 rounded-xl p-8 h-full">
                  {/* Card content with enhanced layout */}
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="w-12 h-1 bg-gradient-to-r from-[#FF6B2B] to-yellow-500 rounded-full mb-4" />
                      <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-[#FF6B2B] group-hover:to-yellow-500 transition-all duration-300">
                        {feature.name}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Interactive elements */}
                    {/* <div className="mt-auto flex items-center text-[#FF6B2B] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">Learn More</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div> */}
                  </div>

                  {/* Subtle card hover effects */}
                  <div className="absolute inset-0 rounded-xl border border-gray-800 group-hover:border-[#FF6B2B]/30 transition-colors duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </div>
  );
};

export default ServiceV3;