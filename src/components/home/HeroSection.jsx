
"use client"
import { useNavigate, useLocation } from "react-router-dom" // Changed to React Router
import { Home, Disc, Flame, FileText, Target, Phone, Linkedin, Instagram } from "lucide-react"
import PoojanSir from "../../assets/Group 51 (9).png"
import pic from "../../assets/Link.png"

// Add the missing cn utility function
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

const navItems = [
  { icon: Home, path: "/", label: "Home" },
  { icon: Disc, path: "/about", label: "About" },
  { icon: Flame, path: "/innovations", label: "Innovations" },
  { icon: FileText, path: "/idea", label: "Idea" },
  { icon: Target, path: "/idea", label: "Target" }, // You might want to update this path
  { icon: Phone, path: "/contact", label: "Contact" },
]

const Page1 = () => {
  // Add React Router hooks
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated gradient background with moving effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,0,0.1),transparent_50%)] animate-pulse"></div>
        </div> */}

      {/* Enhanced grid background with dynamic glow */}
      <div className="absolute inset-0 grid grid-cols-[repeat(30,1fr)] grid-rows-[repeat(30,1fr)] z-0">
        {Array.from({ length: 31 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffff33]/30 to-transparent"
            style={{
              top: `${(i / 30) * 100}%`,
              boxShadow: "0 0 10px rgba(255,255,51,0.1)",
            }}
          />
        ))}
        {Array.from({ length: 31 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ffff33]/30 to-transparent"
            style={{
              left: `${(i / 30) * 100}%`,
              boxShadow: "0 0 10px rgba(255,255,51,0.1)",
            }}
          />
        ))}
      </div>

      {/* Main content with 3D perspective */}
      <div className="relative z-10 container mx-auto px-6 py-32 perspective-1000">
        {/* Top navigation with enhanced effects */}
        <div className="flex justify-between items-center mb-40">
          {/* Profile picture with hover effect */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ffff33] to-yellow-500 overflow-hidden hover-scale relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffff33]/50 to-yellow-500/50 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <img
              src={pic || "/placeholder.svg"}
              alt="Profile"
              className="object-cover w-full h-full relative z-10 transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Navigation icons with glass morphism effect - FIXED SECTION */}
          <div className="flex items-center gap-4 bg-[#ffff33] backdrop-blur-xl rounded-full px-8 py-4 border border-[#ffff33]/20 shadow-[0_0_20px_rgba(255,255,51,0.1)]">
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
          </div>

          {/* CTA Button with advanced hover effects */}
          <button className="bg-[#ffff33] text-black font-medium px-8 py-3.5 rounded-full hover:from-[#ffff33] hover:to-yellow-600 transition-all hover:scale-105 font-['Orbitron'] relative group overflow-hidden shadow-[0_0_20px_rgba(255,255,51,0.3)]">
            <span className="relative z-10">Explore My Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffff33]/0 via-[#ffff33]/30 to-[#ffff33]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Main content area with enhanced animations */}
        <div className="flex flex-col md:flex-row gap-16 items-center mt-20">
          {/* Left side - Text content with advanced typography and animations */}
          <div className="w-full md:w-1/2 space-y-8">
            <h1 className="sm:text-4xl md:text-7xl font-bold text-white leading-tight font-['Orbitron']">
              <span className="inline-block animate-fade-in-up">Bold Ideas.</span>{" "}
              <span
                className="text-white bg-clip-text inline-block animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Fearless
              </span>{" "}
              <br />
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                Innovations.
              </span>{" "}
              <span
                className="text-[#ffff33] block mt-2 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                Future-Driven <br />
                Leadership.
              </span>
            </h1>

            <p
              className="text-gray-300 max-w-lg text-lg font-['Orbitron'] leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffff33] to-yellow-500">
                Poojan Khamar's Innovation Lab
              </span>{" "}
              – where creativity meets courage, and every idea is designed to shape tomorrow.
            </p>

            <button
              className="shimmer-button flex items-center gap-4 font-['Orbitron'] hover-scale group animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              <span className="w-3 h-3 bg-gradient-to-r from-[#ffff33] to-yellow-500 rounded-full pulse"></span>
              <span className="relative">
                Explore My Journey
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ffff33] to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </button>
          </div>

          {/* Right side - Image with hover effects */}
          <div className="w-full md:w-1/2 relative floating group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffff33]/20 to-transparent rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,51,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src={PoojanSir || "/placeholder.svg"}
              alt="Poojan Sir"
              className="w-full h-auto rounded-lg shadow-[0_0_30px_rgba(255,255,51,0.2)] relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Social links with advanced hover effects */}
      <div className="fixed right-[4%] bottom-32 flex flex-col items-center gap-6 z-20">
        <a
          href="https://www.linkedin.com/in/poojan-khamar-30a560126/"
          className="p-4 bg-[#ffff33] rounded-full hover:bg-yellow-400 transition-all duration-300 social-icon group shadow-[0_0_15px_rgba(255,255,51,0.3)]"
        >
          <Linkedin className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href="https://www.instagram.com/poojan_555/"
          className="p-4 bg-[#ffff33] rounded-full hover:bg-yellow-400 transition-all duration-300 social-icon group shadow-[0_0_15px_rgba(255,255,51,0.3)]"
        >
          <Instagram className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-300" />
        </a>
      </div>

      {/* Follow me text with enhanced gradient and glow */}
      <div className="fixed right-[5%] top-1/2 -translate-y-1/2 rotate-90 origin-right text-transparent bg-clip-text bg-gradient-to-b from-[#ffff33] to-yellow-300 tracking-widest text-2xl z-20 font-['Orbitron'] ">
        FOLLOW ME ON
      </div>
    </div>
  )
}

export default Page1