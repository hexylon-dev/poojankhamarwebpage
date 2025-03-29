
"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { ChevronRight, Lock, Zap, Users, Target, HardHat, Lightbulb, BrainCircuit } from "lucide-react"
import Header from "./idea-comp"

function InnovationHub() {
 
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    description: "",
    company_name: "none",
    phone_number: "",
    address: "none",
    industry: "idea",
  })
  const [isVisible, setIsVisible] = useState(false)
  const [heroAnimation, setHeroAnimation] = useState({
    title: false,
    subtitle: false,
    description: false,
    icons: false
  })

  useEffect(() => {
    setIsVisible(true)

    // Staggered animation for hero section
    const animationTimer = setTimeout(() => {
      setHeroAnimation({
        title: true,
        subtitle: true,
        description: true,
        icons: true
      })
    }, 100)

    return () => clearTimeout(animationTimer)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        "http://192.168.1.50:4000/v1/contactus_responses",
        {
          ...formData,
          workspace_id: "7eea1f02-35ab-4074-97d2-251eaa754ac6", // Default workspace_id
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      console.log("Response:", response.data)
      setFormData({
        name: "",
        subject: "",
        email: "",
        description: "",
        company_name: "",
        phone_number: "",
        address: "",
        industry: "",
      })
      alert("Form submitted successfully!")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to submit form.")
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffff33]/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      {/* Main Content */}
      <div className="relative w-full">
        <div className="w-full">
          <div className={`mb-24 relative transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            
            <Header/>

            {/* Main Features Grid */}
            <div className="w-full flex items-center justify-center  gap-8 mb-12 mt-12">
            
              {/* Animated Security Card */}
              <div className="relative bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 hover:border-[#ffff33]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ffff33]/10 hover:-translate-y-2 group">
                {/* Animated background layer */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ffff33]/5 via-transparent to-[#ffff33]/5 animate-gradient-pan" />
                </div>

                <div className="flex items-center mb-6 overflow-hidden">
                  <Lock className="w-6 h-6 mr-2 text-[#ffff33] animate-icon-pop" />
                  <h3 className="text-2xl font-bold text-[#ffff33] translate-y-6 opacity-0 animate-text-reveal">
                    Your Innovation, Your Control
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 opacity-0 translate-y-6 animate-text-reveal [animation-delay:100ms]">
                  We understand the importance of idea security. Our transparent system lets you decide who engages with your idea.
                </p>

                <div className="space-y-6 mb-6">
                  {[
                    ["Confidentiality Assured", "We do not claim ownership of any idea submitted"],
                    ["Community-Driven Validation", "Get real feedback from trusted innovators, not just anyone"],
                    ["Path to Recognition & Success", "The more you share, the closer you get to turning your vision into reality"]
                  ].map(([title, text], index) => (
                    <div 
                      key={title} 
                      className="flex items-start opacity-0 translate-x-8 animate-slide-in"
                      style={{ animationDelay: `${200 + index * 100}ms` }}
                    >
                      <div className="text-[#ffff33] mr-3 pt-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bullet-pop" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{title}</h4>
                        <p className="text-gray-300 leading-relaxed">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#ffff33]/10 rounded-xl p-4 border border-[#ffff33]/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffff33]/10 to-transparent -skew-x-12 animate-shine" />
                  <p className="relative text-center font-semibold text-white italic opacity-0 animate-fade-in [animation-delay:600ms]">
                    Have a bold idea? Share it with confidence, and let's build the future together!
                  </p>
                </div>
              </div>
            </div>

            {/* Contribution Section (existing code remains the same) */}
            <div className={`w-full transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="text-center space-y-6 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ffff33] to-yellow-400 bg-clip-text text-transparent">
                  Share Your Vision
                </h2>
                <p className="text-xl md:text-2xl text-gray-300">Have a bold idea that could reshape the future? Let's hear it.</p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-6 border border-zinc-800 hover:border-[#ffff33]/30 transition-all">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        ["name", "Your Name", "text", "Enter your name"],
                        ["subject", "Subject", "text", "Enter subject"],
                        ["email", "Email", "email", "name@example.com"],
                        ["phone_number", "Phone Number", "tel", "Enter your phone number"]
                      ].map(([name, label, type, placeholder]) => (
                        <div key={name}>
                          <label className="block text-base font-medium text-gray-200">{label}</label>
                          <input
                            type={type}
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            placeholder={placeholder}
                            className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none"
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-base font-medium text-gray-200">Brief Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Share your innovative idea..."
                        rows="4"
                        className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#ffff33] text-black py-3 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all"
                    >
                      Share Your Idea
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>



          </div>
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes gradient-pan {
          from { background-position: 0% center; }
          to { background-position: -200% center; }
        }

        @keyframes text-reveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes icon-pop {
          0% { transform: scale(0) rotate(-30deg); }
          80% { transform: scale(1.1) rotate(5deg); }
          100% { transform: scale(1) rotate(0); }
        }

        @keyframes bullet-pop {
          0% { transform: scale(0); }
          90% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        @keyframes shine {
          from { left: -100%; }
          to { left: 100%; }
        }

        .animate-gradient-pan {
          animation: gradient-pan 3s linear infinite;
          background-size: 200%;
        }

        .animate-text-reveal {
          animation: text-reveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }

        .animate-icon-pop {
          animation: icon-pop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-bullet-pop {
          animation: bullet-pop 0.4s ease-out forwards;
        }

        .animate-shine {
          animation: shine 1.5s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default InnovationHub;