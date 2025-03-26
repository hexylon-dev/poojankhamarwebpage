
"use client"

import { useEffect, useRef, useState } from "react"
import Poojansir from "../../assets/poojansir3.avif"

// Utility function to conditionally join class names

export default function About() {
  const [isSticky, setIsSticky] = useState(false)
  const imageContainerRef = useRef(null)
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  // const navigate = useNavigate()
  // const location = useLocation()

  // const navItems = [
  //   {
  //     label: "Home",
  //     path: "/",
  //     icon: Home,
  //   },
  //   {
  //     label: "About",
  //     path: "/about",
  //     icon: User,
  //   },
  //   {
  //     label: "Projects",
  //     path: "/projects",
  //     icon: Briefcase,
  //   },
  //   {
  //     label: "Contact",
  //     path: "/contact",
  //     icon: Mail,
  //   },
  // ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 300) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
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
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white font-sans ">
      {/* <div className="flex items-center gap-4 bg-[#ffff33] backdrop-blur-xl rounded-full px-8 py-4 border border-[#ffff33]/20 shadow-[0_0_20px_rgba(255,255,51,0.1)] w-fit">
        {navItems.map((item, index) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path

          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={cn(
                "p-3 bg-black rounded-full transition-all duration-300 nav-icon group relative overflow-hidden",
                isActive && "ring-2 ring-white/20",
              )}
              aria-label={item.label}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffff33]/0 to-[#ffff33]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Icon className="w-5 h-5 text-[#ffff33] group-hover:scale-110 transition-transform duration-300 relative z-10" />
            </button>
          )
        })}
      </div> */}
      <div className="w-full max-w-7xl mx-auto px-4 py-40 ">
        {/* Header Section */}
        <div className="">
          <h1 className="text-6xl font-bold text-[#ffff33] mb-8 leading-tight animate-fade-in">
            About Poojan Khamar – The Bold Innovator
          </h1>
          <div className="w-24 h-1 bg-[#ffff33] mx-auto mb-8"></div>
        </div>

        {/* Bio Section */}
        <div className="mb-24 text-2xl max-w-3xl mx-auto">
          <p className="mb-8 leading-relaxed text-gray-400">
            I'm <span className="font-bold text-[#ffff33]">Poojan Khamar</span>, a relentless innovator, creative
            leader, and futurist who believes in building beyond boundaries. Every success, every failure, every rise
            and fall has shaped not just my journey, but my mindset – bold, fearless, and focused on transformation.
            This is not just about me; it's about how ideas, experiences, and courage can redefine the future.
          </p>

          <button
            className={`bg-[#ffff33] text-black font-semibold py-4 px-8 rounded-full border-none cursor-pointer 
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#ffff33]/30
              ${isButtonHovered ? "bg-yellow-300" : ""}`}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Contact Me Directly
          </button>
        </div>

        {/* Bold Beginning Section with Sticky Image */}
        <div className={`flex flex-col ${isLargeScreen ? "lg:flex-row" : ""} gap-16 mb-24`}>
          <div ref={imageContainerRef} className={`w-full ${isLargeScreen ? "lg:w-1/2" : ""}`}>
            <div
              className={`${isSticky && isLargeScreen ? "sticky top-52" : "mt-32"} transform transition-transform duration-300 hover:scale-[1.02]`}
            >
              <img
                src={Poojansir || "/placeholder.svg"}
                alt="Portrait photo"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl shadow-[#ffff33]/20"
              />
            </div>
          </div>
          <div className={`w-full ${isLargeScreen ? "lg:w-1/2" : ""}`}>
            <h2 className="text-4xl font-bold mb-12 leading-tight text-[#ffff33] mt-80">The Bold Beginning</h2>

            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl mb-6 border border-zinc-800 hover:border-[#ffff33]/30 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#ffff33] text-black p-2 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">Breaking the Mold from Day One</h3>
              </div>
            </div>

            <p className="text-gray-400 mb-16 text-lg leading-relaxed mt-10">
              From an early age, I challenged norms and questioned the ordinary. Growing up in Ahmedabad, my curiosity
              wasn't limited to textbooks – it extended to the real world, technology, and untapped ideas. Every
              experience became a stepping stone towards thinking differently and acting boldly.
            </p>

            <h2 className="text-4xl font-bold mb-10 leading-tight text-[#ffff33] mt-80">Adventures in Innovation</h2>
            <div className="flex flex-col gap-8">
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-800 hover:border-[#ffff33]/30 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#ffff33] text-black p-2 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold">Where Ideas Meet Action</h3>
                </div>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed mt-10">
                Innovation, for me, is not theory—it's action. Whether leading AI-driven platforms like Vidhyarthi AI,
                transforming industries through automation at Lom AI, or building cutting-edge digital ecosystems, each
                project I undertake focuses on solving real-world problems creatively. It's about turning impossible
                ideas into reality.
              </p>

              <h2 className="text-4xl font-bold  leading-tight text-[#ffff33] mt-80">Lessons from Ups & Downs</h2>

              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl mb-6 border border-zinc-800 hover:border-[#ffff33]/30 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#ffff33] text-black p-2 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold">Fail Forward. Rise Stronger.</h3>
                </div>
              </div>

              <p className="text-gray-400 mb-12 text-lg leading-relaxed ">
                My journey wasn't a straight path. Legal challenges, financial hurdles, and personal losses taught me
                more than any success ever could. Each downfall taught me strategy, control, and resilience. Each
                comeback reinforced the alpha mindset – never settle, always rebuild stronger.
              </p>

              <h2 className="text-4xl font-bold  leading-tight text-[#ffff33] mt-80">The Futuristic Vision</h2>

              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-xl mb-6 border border-zinc-800 hover:border-[#ffff33]/30 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#ffff33] text-black p-2 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold">Designing Tomorrow, Today</h3>
                </div>
              </div>

              <p className="text-gray-400  text-lg leading-relaxed ">
                The future belongs to those who dare to create it. My mission is simple – push boundaries, inspire
                change, and empower others through innovation and leadership. Whether it's education, automation, or
                entrepreneurship, my focus is clear: build a bold, creative, and sustainable future.
              </p>

              {/* Spacer to ensure scrolling */}
              {/* <div className="h-48"></div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

