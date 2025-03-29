"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react"

export default function ContentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const contentItems = [
    {
      title: "Sustainable Living",
      description:
        "Embracing sustainable practices in daily life can significantly reduce your carbon footprint. Simple changes like reducing single-use plastics, conserving water, and choosing renewable energy sources contribute to a healthier planet for future generations.",
    },
    {
      title: "Digital Transformation",
      description:
        "Organizations worldwide are undergoing digital transformation to stay competitive. This involves integrating digital technology into all areas of business, fundamentally changing how they operate and deliver value to customers.",
    },
    {
      title: "Mental Wellness",
      description:
        "Prioritizing mental health is essential for overall wellbeing. Regular meditation, adequate sleep, physical activity, and maintaining social connections can help manage stress and improve your quality of life.",
    },
    {
      title: "Future of Work",
      description:
        "The workplace is evolving with remote work, flexible schedules, and digital collaboration becoming the norm. Companies that adapt to these changes can attract top talent and foster innovation across distributed teams.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "AI is revolutionizing industries from healthcare to finance. Machine learning algorithms can analyze vast amounts of data to identify patterns, make predictions, and automate complex tasks with increasing accuracy.",
    },
    {
      title: "Renewable Energy",
      description:
        "The shift to renewable energy sources like solar, wind, and hydroelectric power is accelerating globally. These sustainable alternatives reduce greenhouse gas emissions while creating new economic opportunities.",
    },
    {
      title: "Nutrition Science",
      description:
        "Recent advances in nutrition science highlight the importance of personalized dietary approaches. Understanding how different foods affect your unique body composition can lead to improved health outcomes.",
    },
    {
      title: "Space Exploration",
      description:
        "Humanity's journey beyond Earth continues with missions to Mars, lunar exploration, and the development of space tourism. These endeavors expand our understanding of the universe and inspire technological innovation.",
    },
    {
      title: "Biodiversity Conservation",
      description:
        "Protecting Earth's biodiversity is crucial for maintaining ecosystem services that humans depend on. Conservation efforts focus on preserving habitats, preventing species extinction, and promoting sustainable resource management.",
    },
    {
      title: "Financial Literacy",
      description:
        "Understanding personal finance fundamentals like budgeting, investing, and debt management empowers individuals to make informed decisions. Building financial knowledge early leads to greater economic security throughout life.",
    },
  ]

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsTransitioning(false), 700)
  }, [contentItems.length, isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1))
    setTimeout(() => setIsTransitioning(false), 700)
  }, [contentItems.length, isTransitioning])

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }

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

  return (
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
          style={{ width: `${((currentIndex + 1) / contentItems.length) * 100}%` }}
        ></div>
      </div>

      <div className="relative min-h-[350px] md:min-h-[300px] pl-4">
        <div className="relative h-full w-full p-8 md:p-12">
          {contentItems.map((item, index) => (
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
                  <span className="text-xs font-bold text-yellow-300 uppercase tracking-widest mr-2 bg-yellow-300/10 px-3 py-1 rounded-full">
                    {`${index + 1 < 10 ? "0" : ""}${index + 1} / ${contentItems.length < 10 ? "0" : ""}${contentItems.length}`}
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

      {/* Enhanced pagination indicators */}
      <div className="flex justify-center gap-3 py-5 border-t border-yellow-300/30 bg-black/40 backdrop-blur-sm">
        {contentItems.map((_, index) => (
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
    </div>
  )
}

