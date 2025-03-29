import { useEffect, useRef, useState } from "react"
import Poojansir from '../../assets/poojansir3.avif'
import { useNavigate } from "react-router-dom"

export default function About() {
  const [isSticky, setIsSticky] = useState(false)
  const imageContainerRef = useRef(null)
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  )

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

  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white font-sans">
      {/* SEO Meta Tags */}
      <head>
        <title>About Poojan Khamar - Visionary Innovator & Entrepreneur</title>
        <meta
          name="description"
          content="Learn about Poojan Khamar, an innovative leader transforming industries with AI, automation, and technology-driven solutions."
        />
        <meta name="keywords" content="Poojan Khamar, AI entrepreneur, innovation, leadership, technology" />
        <meta name="author" content="Poojan Khamar" />
      </head>

      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mt-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ffff33] mb-8 leading-tight animate-fade-in text-center">
            About Poojan Khamar – The Bold Innovator
          </h1>
          <div className="w-24 h-1 bg-[#ffff33] mx-auto mb-8"></div>
        </div>

        <div className="mb-24 text-md md:text-lg max-w-3xl mx-auto">
          <p className="mb-8 leading-relaxed text-gray-400 text-center sm:text-left">
            I'm <span className="font-bold text-[#ffff33]">Poojan Khamar</span>,
            a relentless innovator, creative leader, and futurist who believes
            in building beyond boundaries. Every success, every failure, every
            rise and fall has shaped not just my journey, but my mindset – bold,
            fearless, and focused on transformation.
          </p>

          <div className="flex justify-center sm:justify-start">
            <button
              className={`bg-[#ffff33] text-black font-semibold py-4 px-8 rounded-full border-none cursor-pointer 
        transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#ffff33]/30
        ${isButtonHovered ? "bg-yellow-300" : ""}`}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              onClick={() => navigate("/contact")}
            >
              Explore journey
            </button>
          </div>
        </div>

        {/* Bold Beginning Section with Sticky Image */}
        <div className={`flex flex-col ${isLargeScreen ? "lg:flex-row" : ""} gap-16 mb-24`}>
          <div ref={imageContainerRef} className={`w-full ${isLargeScreen ? "lg:w-1/2" : ""}`}>
            <div className={`${isSticky && isLargeScreen ? "sticky top-48" : ""} transform transition-transform duration-300 hover:scale-[1.02]`}>
              <img
                src={Poojansir}
                alt="Portrait photo"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl shadow-[#ffff33]/20"
              />
            </div>
          </div>
          <div className={`w-full ${isLargeScreen ? "lg:w-1/2" : ""}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight text-[#ffff33]">The Bold Beginning</h2>
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl mb-6 border border-zinc-800 hover:border-[#ffff33]/30 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#ffff33] text-black p-2 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">Breaking the Mold from Day One</h3>
              </div>
            </div>

            <p className="text-gray-400 mb-16 text-md md:text-lg leading-relaxed">
              From an early age, I challenged norms and questioned the ordinary. Growing up in Ahmedabad, my curiosity
              wasn't limited to textbooks – it extended to the real world, technology, and untapped ideas.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight text-[#ffff33] mt-80">Adventures in Innovation</h2>
            <div className="flex flex-col gap-8">
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-800 hover:border-[#ffff33]/30 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#ffff33] text-black p-2 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold">Where Ideas Meet Action</h3>
                </div>
              </div>
              <p className="text-gray-400 text-md md:text-lg leading-relaxed">
                Innovation, for me, is not theory—it's action. Whether leading AI-driven platforms like Vidhyarthi AI,
                transforming industries through automation at Lom AI, or building cutting-edge digital ecosystems,
                each project I undertake focuses on solving real-world problems creatively.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight text-[#ffff33] mt-80">Lessons from Ups & Downs</h2>
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl mb-6 border border-zinc-800 hover:border-[#ffff33]/30 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#ffff33] text-black p-2 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">Fail Forward. Rise Stronger.</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-16 text-md md:text-lg leading-relaxed">
                My journey wasn't a straight path. Legal challenges, financial hurdles, and personal losses taught me
                more than any success ever could. Each downfall taught me strategy, control, and resilience.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight text-[#ffff33] mt-80">The Futuristic Vision</h2>
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl mb-6 border border-zinc-800 hover:border-[#ffff33]/30 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#ffff33] text-black p-2 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">Designing Tomorrow, Today</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-16 text-md md:text-lg leading-relaxed">
                The future belongs to those who dare to create it. My mission is simple – push boundaries, inspire
                change, and empower others through innovation and leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
