"use client"

import { useEffect, useRef, useState } from "react"
import Head from "next/head"
import Poojansir from "../../assets/poojan-khamar-bold-innovator.avif"

export default function About() {
  const [isSticky, setIsSticky] = useState(false)
  const imageContainerRef = useRef(null)
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsSticky(scrollPosition > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isLargeScreen = windowWidth >= 1024

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Poojan Khamar – Bold Innovator, Futurist & Fearless Leader</title>
        <meta name="description" content="Welcome to Poojan Khamar's Innovation Lab – where creativity meets courage, and every idea is designed to shape tomorrow. Explore bold ideas, fearless innovations, and a future-driven leadership journey." />
        <meta name="keywords" content="Poojan Khamar, Innovator, Futurist, Leadership, Technology, AI, Entrepreneurship" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Facebook & LinkedIn */}
        <meta property="og:title" content="Poojan Khamar – Bold Innovator, Futurist & Fearless Leader" />
        <meta property="og:description" content="Explore Poojan Khamar’s journey of fearless innovations, bold ideas, and future-driven leadership." />
        <meta property="og:image" content="https://poojankhamar.in/images/poojan-khamar-bold-innovator.avif" />
        <meta property="og:url" content="https://poojankhamar.in/about-poojan-khamar" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Poojan Khamar – Innovator & Futurist" />
        <meta name="twitter:description" content="Building beyond boundaries with creativity, leadership, and transformation." />
        <meta name="twitter:image" content="https://poojankhamar.in/images/poojan-khamar-bold-innovator.avif" />

        {/* Structured Data (Schema Markup) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Poojan Khamar",
            "url": "https://poojankhamar.in/about-poojan-khamar",
            "jobTitle": "Innovator, Futurist, Entrepreneur",
            "image": "https://poojankhamar.in/images/poojan-khamar-bold-innovator.avif",
            "description": "Poojan Khamar is a fearless innovator and entrepreneur, pushing boundaries in technology and leadership."
          }
          `}
        </script>
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white font-sans">
        <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">

          {/* Header Section */}
          <div className="mt-10 sm:mt-24 md:mt-18 text-center">
            <h1 className="text-4xl  md:text-5xl lg:text-5xl font-bold text-[#ffff33] mb-4 sm:mb-6 md:mb-8 leading-tight">
              Poojan Khamar: Bold Ideas, Fearless Innovations & Leadership
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#ffff33] mx-auto mb-6 sm:mb-8"></div>
          </div>

          {/* Bio Section */}
          <div className="mb-16 sm:mb-20 md:mb-24 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            <p className="mb-6 sm:mb-8 leading-relaxed text-gray-300">
              I'm <span className="font-bold text-[#ffff33]">Poojan Khamar</span>, a relentless innovator, creative
              leader, and futurist who believes in building beyond boundaries.
            </p>
            <div className="flex justify-center">
              <button
                className={`bg-[#ffff33] text-black font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full border-none cursor-pointer 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#ffff33]/30
                  ${isButtonHovered ? "bg-yellow-300" : ""}`}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                Contact Me Directly
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 md:mb-24">
            <div ref={imageContainerRef} className="w-full lg:w-1/2 order-1 lg:order-none">
              <div className={`${isSticky && isLargeScreen ? "sticky top-20" : "mt-8"} transform transition-transform duration-300 hover:scale-[1.02]`}>
                <img
                  src={Poojansir || "/placeholder.svg"}
                  alt="Poojan Khamar - Bold Innovator and Futuristic Leader"
                  className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl shadow-[#ffff33]/20"
                />
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
