'use client';

import React, { useState, useEffect, useRef } from 'react';

const slides = [
  { title: "Custom AI Development Process", description: "Our Custom AI Development process starts with in-depth consultations to understand your unique business needs." },
  { title: "AI-Powered Automation", description: "Unlock the power of AI-driven business automation to streamline operations across key departments." },
  { title: "Real-Time Data Analytics", description: "We provide real-time data visualization and actionable insights through intelligent dashboards." },
  { title: "Seamless AI Integration", description: "We ensure seamless AI integration with your existing business systems without disrupting daily operations." },
  { title: "Machine Learning Solutions", description: "Implement cutting-edge machine learning models to enhance decision-making and predict trends." },
  { title: "AI-Driven Customer Experience", description: "Transform your customer interactions with AI-powered chatbots and personalized recommendations." },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slides.length;
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.children[0].offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * activeIndex,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  const extendedSlides = [...slides, slides[0]];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#003B73] via-black to-black flex items-center justify-center p-4 w-full relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-[#FF6B00]/10 blur-3xl" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-[#003B73]/10 blur-3xl" />
      </div>

      <div className="w-full max-w-[90vw] relative z-10">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-5xl md:text-6xl 2xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-[#003B73] animate-gradient-x">
            AI Methodology of Hexylon
          </h2>
          <h2 className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming Ideas into Actionable AI with Our Proven Methodology
          </h2>
        </div>
        
        <div className="w-full max-w-7xl mx-auto p-8">
          <div ref={carouselRef} className="flex gap-6 overflow-hidden">
            {extendedSlides.map((slide, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] 
                  transition-all duration-500 ease-out p-8 rounded-2xl cursor-pointer
                  backdrop-blur-lg border group
                  ${
                    index === activeIndex
                      ? "bg-gradient-to-br from-[#003B73]/90 to-[#002347]/90 border-[#FF6B00]/50 shadow-lg shadow-[#FF6B00]/20"
                      : "bg-gray-900/40 border-gray-800/50 hover:border-[#FF6B00]/30 hover:bg-gray-800/50"
                  }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#003B73] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF6B00] group-hover:to-[#003B73] transition-all duration-300">
                    {slide.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 space-x-6">
            <button
              onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)}
              className="group relative px-8 py-4 rounded-xl border border-[#FF6B00]/30 
                bg-gradient-to-br from-gray-900/90 to-gray-800/90
                hover:from-[#003B73]/90 hover:to-[#002347]/90 
                transition-all duration-300 text-gray-300
                hover:text-white hover:border-[#FF6B00]/50 backdrop-blur-lg
                flex items-center space-x-3 hover:shadow-xl hover:shadow-[#FF6B00]/20
                overflow-hidden"
            >
              {/* Animated background glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/20 to-[#003B73]/20 blur-xl" />
              </div>
              
              <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium relative z-10">Previous</span>
            </button>

            <button
              onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides)}
              className="group relative px-8 py-4 rounded-xl border border-[#FF6B00]/30 
                bg-gradient-to-br from-gray-900/90 to-gray-800/90
                hover:from-[#003B73]/90 hover:to-[#002347]/90 
                transition-all duration-300 text-gray-300
                hover:text-white hover:border-[#FF6B00]/50 backdrop-blur-lg
                flex items-center space-x-3 hover:shadow-xl hover:shadow-[#FF6B00]/20
                overflow-hidden"
            >
              {/* Animated background glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/20 to-[#003B73]/20 blur-xl" />
              </div>
              
              <span className="font-medium relative z-10">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
