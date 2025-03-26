import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Maximize2, Target, RefreshCw, Users } from 'lucide-react';

const features = [
  {
    title: 'Custom-Fit Solutions',
    description:
      'We build AI tools that are perfectly aligned with your business objectives, ensuring a smooth integration into your existing processes without disruption.',
    icon: Settings,
    gradient: 'from-violet-500 to-indigo-600',
  },
  {
    title: 'Scalable',
    description:
      'Our solutions are built to evolve with your business, adapting to new challenges and opportunities as you grow.',
    icon: Maximize2,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Result-Oriented',
    description:
      'We focus on delivering measurable outcomes, whether it\'s streamlining workflows, enhancing productivity, or improving decision-making through real-time insights.',
    icon: Target,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Continuous Improvement',
    description:
      'We constantly refine and optimize AI models based on real-world feedback, ensuring your solutions stay effective and up-to-date.',
    icon: RefreshCw,
    gradient: 'from-orange-500 to-red-600',
  },
  {
    title: 'Client-Centric',
    description:
      'Our dedicated support and personalized approach ensure that we\'re with you every step of the way, helping you achieve long-term success.',
    icon: Users,
    gradient: 'from-pink-500 to-rose-600',
  },
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group w-full"
    >
      <div className="relative z-10 p-6 sm:p-8 bg-black/50 backdrop-blur-xl border border-neutral-800 rounded-2xl transition-all duration-500 hover:border-neutral-600 hover:transform hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl hover:shadow-neutral-900">
        <div className={`inline-flex p-2 sm:p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4 sm:mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all duration-300">{feature.title}</h3>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">{feature.description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
    </motion.div>
  );
};

export default function OurWorkUnique() {
  return (
    <section className="relative bg-black overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a1a1a,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,#1a1a1a,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,#1a1a1a,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-4 sm:mb-6 lg:mb-8 px-4"
          >
            What Makes Us Unique
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Unique, Scalable, and Results-Driven AI that Grows with You
          </motion.p>
        </div>

        <div className="grid gap-6 sm:gap-8">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
          
          {/* Second row - 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:w-full lg:w-3/4 mx-auto">
            {features.slice(3).map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
