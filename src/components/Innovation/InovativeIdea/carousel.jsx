"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, Tag } from "lucide-react"

export default function TagSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [activeTag, setActiveTag] = useState(null)

  const contentItems = [
    { 
        title: 'HR Tech Innovations', 
        description: 'Revolutionize workforce management with AI-driven HR solutions for recruitment automation, payroll processing, and employee analytics.', 
        tag: 'HR-Tech'
    },
    { 
        title: 'Smart Sales Analytics', 
        description: 'Drive revenue growth with data-driven sales insights, lead tracking, and CRM automation for optimized performance.', 
        tag: 'Sales-Analytics'
    },
    { 
        title: 'ERP Solutions', 
        description: 'Streamline your business operations with an integrated ERP system for finance, supply chain, and resource management.', 
        tag: 'ERP'
    },
    { 
        title: 'Procurement Automation', 
        description: 'Optimize purchasing workflows with vendor management, cost tracking, and smart procurement tools.', 
        tag: 'Procurement-Tech'
    },
    { 
        title: 'Inventory Management', 
        description: 'Maintain accurate stock levels, reduce waste, and improve supply chain efficiency with smart inventory solutions.', 
        tag: 'Inventory-Tech'
    },
    { 
        title: 'Quality Control Systems', 
        description: 'Ensure product excellence with automated quality checks, defect analysis, and compliance monitoring.', 
        tag: 'Quality-Control'
    },
    { 
        title: 'Assembly Line Optimization', 
        description: 'Enhance manufacturing efficiency with real-time monitoring, workflow automation, and downtime reduction.', 
        tag: 'Assembly-Tech'
    },
    { 
        title: 'Customer Support Tech', 
        description: 'Deliver top-tier customer service with AI-driven ticketing, complaint resolution, and feedback analysis.', 
        tag: 'Customer-Support'
    },
    { 
        title: 'Project Execution Tools', 
        description: 'Manage complex projects with strategic planning tools, automation, and real-time progress tracking.', 
        tag: 'Project-Management'
    },
    { 
        title: 'Admin Workflow Automation', 
        description: 'Streamline administrative tasks with scheduling automation, document management, and reporting tools.', 
        tag: 'Admin-Tech'
    },
    { 
        title: 'Process Automation', 
        description: 'Automate repetitive business processes with AI-driven solutions to boost efficiency and accuracy.', 
        tag: 'Automation'
    },
    { 
        title: 'Business Intelligence Dashboards', 
        description: 'Gain real-time insights with dynamic dashboards, data visualization, and analytics-driven decision-making.', 
        tag: 'BI-Dashboard'
    }
  ];

  // Extract unique tags for the tag filter
  const allTags = [...new Set(contentItems.map(item => item.tag))];
  
  // Filter content items based on active tag
  const filteredItems = activeTag 
    ? contentItems.filter(item => item.tag === activeTag) 
    : contentItems;

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsTransitioning(false), 700)
  }, [filteredItems.length, isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1))
    setTimeout(() => setIsTransitioning(false), 700)
  }, [filteredItems.length, isTransitioning])

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  // Reset current index when filtering changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeTag])

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 6000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  const handleTagClick = (tag) => {
    setActiveTag(activeTag === tag ? null : tag)
  }

  return (
    <>
      <h2 className="relative font-bold text-2xl md:text-3xl lg:text-4xl md:mb-12 mb-8 mt-20 text-center">
        <span className="relative z-10 px-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300">
          Breakthrough Ideas Hub: Fresh & Unique Concepts
        </span>
        <span className="absolute top-full left-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-[#ffff33] to-transparent transform -translate-x-1/2"></span>
      </h2>
      
      {/* Tag filter section */}
      <div className="w-full max-w-7xl mx-auto mb-8 px-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          <button 
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1.5
              ${activeTag === null 
                ? "bg-yellow-300 text-black shadow-[0_0_10px_rgba(250,204,21,0.5)]" 
                : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"}`}
          >
            <Tag className="h-3 w-3" /> All Topics
          </button>
          
          {allTags.map((tag, index) => (
            <button 
              key={index}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1.5
                ${activeTag === tag 
                  ? "bg-yellow-300 text-black shadow-[0_0_10px_rgba(250,204,21,0.5)]" 
                  : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"}`}
            >
              <Tag className="h-3 w-3" /> {tag}
            </button>
          ))}
        </div>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl bg-gradient-to-br from-black via-zinc-900 to-black border-2 border-yellow-300 shadow-[0_0_25px_rgba(250,204,21,0.3)]">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-yellow-300 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-yellow-300 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Progress bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800 z-20">
          <div
            className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 transition-all duration-300 ease-linear"
            style={{ width: filteredItems.length > 0 ? `${((currentIndex + 1) / filteredItems.length) * 100}%` : '0%' }}
          ></div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="relative min-h-[350px] md:min-h-[300px] pl-4">
            <div className="relative h-full w-full p-8 md:p-12">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full p-8 md:p-12 transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 z-10 translate-x-0"
                      : index < currentIndex
                        ? "opacity-0 -translate-x-full z-0"
                        : "opacity-0 translate-x-full z-0"
                  }`}
                >
                  <div className="h-full flex flex-col justify-start pt-8 md:pt-10">
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-bold text-yellow-300 uppercase tracking-widest mr-2 bg-yellow-300/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                        <Tag className="h-3 w-3" /> {item.tag}
                      </span>
                      <span className="text-xs font-bold text-zinc-400 mr-2">
                        {`${index + 1 < 10 ? "0" : ""}${index + 1} / ${filteredItems.length < 10 ? "0" : ""}${filteredItems.length}`}
                      </span>
                      <div className="h-[1px] flex-grow bg-gradient-to-r from-yellow-300/80 to-transparent"></div>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 tracking-tight">
                      {item.title}
                      <span className="inline-block ml-2 align-middle">
                        <Sparkles className="h-5 w-5 text-yellow-300 inline-block animate-pulse" />
                      </span>
                    </h2>

                    <p className="text-sm md:text-base text-zinc-200 leading-relaxed backdrop-blur-sm bg-black/20 p-4 rounded-lg border-l-2 border-yellow-300/50 shadow-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons with enhanced styling */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-yellow-300 text-yellow-300 hover:text-black p-3 rounded-full transition-all duration-300 backdrop-blur-md border border-yellow-300/50 hover:border-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]"
              aria-label="Previous slide"
              disabled={isTransitioning}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-yellow-300 text-yellow-300 hover:text-black p-3 rounded-full transition-all duration-300 backdrop-blur-md border border-yellow-300/50 hover:border-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]"
              aria-label="Next slide"
              disabled={isTransitioning}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-yellow-300 text-yellow-300 hover:text-black px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 backdrop-blur-md border border-yellow-300/50 hover:border-yellow-300 shadow-[0_0_10px_rgba(250,204,21,0.2)] hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] flex items-center gap-1"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="h-3 w-3" /> Pause
                </>
              ) : (
                <>
                  <Play className="h-3 w-3" /> Play
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[350px] md:min-h-[300px] p-8">
            <div className="text-center">
              <p className="text-xl text-yellow-300 mb-4">No items found with this tag</p>
              <button
                onClick={() => setActiveTag(null)}
                className="px-4 py-2 bg-yellow-300 text-black rounded-full font-medium transition-all hover:bg-yellow-400"
              >
                Show All Topics
              </button>
            </div>
          </div>
        )}

        {/* Enhanced pagination indicators */}
        {filteredItems.length > 0 && (
          <div className="flex justify-center gap-3 py-5 border-t border-yellow-300/30 bg-black/40 backdrop-blur-sm overflow-x-auto px-4">
            {filteredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-300 ${
                  index === currentIndex ? "scale-100" : "scale-75 opacity-70 hover:opacity-100 hover:scale-90"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={`block w-3 h-3 rounded-full ${
                    index === currentIndex
                      ? "bg-yellow-300 shadow-[0_0_10px_rgba(250,204,21,0.7)]"
                      : "bg-zinc-700 hover:bg-zinc-500"
                  }`}
                ></span>
                {index === currentIndex && (
                  <span className="absolute inset-0 rounded-full animate-ping bg-yellow-300 opacity-75"></span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}