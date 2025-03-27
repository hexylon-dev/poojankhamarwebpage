import React from 'react';
import { motion } from 'framer-motion';

const LatestLab = () => {
  return (
    <div className="bg-black text-white p-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,51,0.05),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffff33]/20 to-transparent"></div>

      {/* Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-center mb-16"
      >
        <span className="relative inline-block text-4xl  md:text-7xl lg:text-7xl font-semibold">
          Latest from
          <span className="text-[#ffff33]"> My Lab</span>
          <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#ffff33] to-yellow-400"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </span>

      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* First Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-[#ffff33]/20 rounded-3xl blur-3xl group-hover:bg-[#ffff33]/30 transition-all duration-500"></div>
          <div className="relative z-10 bg-black/40 rounded-3xl p-1">
            <img
              src="https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="AI Robot"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 rounded-2xl"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-[#ffff33] font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">ARTIFICIAL INTELLIGENCE</p>
              <h2 className="text-2xl font-bold">
                The Technological Path to Artificial General Intelligence (AGI): A Comprehensive Deep Dive
              </h2>
              <p className="mt-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Explore the cutting-edge advancements and challenges in AGI development...</p>
            </div>
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-[#ffff33]/20 rounded-3xl blur-3xl group-hover:bg-[#ffff33]/30 transition-all duration-500"></div>
          <div className="relative z-10 bg-black/40 rounded-3xl p-1">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
              alt="Neural Network"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 rounded-2xl"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-[#ffff33] font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">NEURAL NETWORKS</p>
              <h2 className="text-2xl font-bold">
                The Future of Neural Networks: Breaking Through Traditional Boundaries
              </h2>
              <p className="mt-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Discover how neural networks are evolving beyond conventional limitations...</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16"
      >
        <button className="group relative px-8 py-4 overflow-hidden rounded-xl bg-[#ffff33] hover:bg-[#ffff33]/90 transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          <span className="relative inline-flex items-center font-semibold text-black">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
      </motion.div>
    </div>
  );
};

export default LatestLab;
