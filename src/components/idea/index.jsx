"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { ChevronRight, Lock, Zap, Users, Target, HardHat, Lightbulb, BrainCircuit } from "lucide-react"

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

  // Hero section icons with animation
  const HeroIcons = () => (
    <div className="absolute inset-0 pointer-events-none">
      <div className={`absolute top-20 left-10 transform transition-all duration-1000 ${heroAnimation.icons ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <HardHat className="w-12 h-12 text-[#ffff33]/50 animate-bounce" />
      </div>
      <div className={`absolute top-40 right-20 transform transition-all duration-1000 delay-300 ${heroAnimation.icons ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <Lightbulb className="w-12 h-12 text-[#ffff33]/50 animate-pulse" />
      </div>
      <div className={`absolute bottom-40 left-1/3 transform transition-all duration-1000 delay-500 ${heroAnimation.icons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <BrainCircuit className="w-12 h-12 text-[#ffff33]/50 animate-spin" />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffff33]/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div className="max-w-5xl mx-auto px-4 py-16 mt-12">
          {/* Enhanced Hero Section */}
          <div
            className={`mb-24 relative transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {/* Animated Hero Icons */}
            {/* <HeroIcons /> */}

            {/* Header */}
            <div className="text-center mb-16 relative z-10">
              <h1
                className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 transform mt-16 
                  ${heroAnimation.title ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <span className="bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] bg-clip-text text-transparent ">
                  Innovator's Playbook – <br /> Bold Ideas, Real Impact
                </span>
              </h1>

              <h2
                className={`inline-block px-6 py-2 rounded-full bg-[#ffff33]/10 border border-[#ffff33]/20 text-[#ffff33] font-medium mb-6 transition-all duration-1000 delay-300 transform 
                  ${heroAnimation.subtitle ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                Innovation Hub
              </h2>

              <div
                className={`max-w-3xl mx-auto transition-all duration-1000 delay-500 transform 
                  ${heroAnimation.description ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <p className="text-xl text-gray-300 leading-relaxed">
                  Ideas shape the future, but only when they're{" "}
                  <span className="italic">heard, valued, and nurtured</span>. At{" "}
                  <span className="font-bold text-[#ffff33]">Innovation Hub</span>, we provide a{" "}
                  <span className="italic">safe and transparent platform</span> where your ideas{" "}
                  <span className="italic">remain yours</span> while gaining the visibility they deserve.
                </p>
              </div>
            </div>

            {/* Main Features - Stacked Cards */}
            <div className="space-y-8 mb-12">
              {/* First Card */}
              <div className="bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-[#ffff33]/20 transition-all">
                <div className="grid gap-8">
                  <div className="flex items-start">
                    <div className="bg-[#ffff33]/10 p-3 rounded-xl mr-4 shrink-0">
                      <Zap className="w-8 h-8 text-[#ffff33]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#ffff33] mb-2">Your Idea. Your Ownership.</h3>
                      <p className="text-gray-300">
                        Every idea you share stays <span className="italic">100% yours</span>. We ensure{" "}
                        <span className="font-bold">strict confidentiality</span> and protect your intellectual
                        property.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#ffff33]/10 p-3 rounded-xl mr-4 shrink-0">
                      <Users className="w-8 h-8 text-[#ffff33]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#ffff33] mb-2">A Trusted Network</h3>
                      <p className="text-gray-300">
                        Your idea isn't just seen; it's valued. Our platform connects you with{" "}
                        <span className="italic">like-minded innovators</span> who can help shape, refine, and enhance
                        your vision.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#ffff33]/10 p-3 rounded-xl mr-4 shrink-0">
                      <Target className="w-8 h-8 text-[#ffff33]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#ffff33] mb-2">Attract Opportunities</h3>
                      <p className="text-gray-300">
                        Game-changing ideas deserve the right exposure. When you submit your concept, it can{" "}
                        <span className="italic">
                          gain traction among industry experts, collaborators, and future partners
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div className="bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-[#ffff33]/20 transition-all">
                <h3 className="text-2xl font-bold text-[#ffff33] mb-6 flex items-center">
                  <Lock className="w-6 h-6 mr-2" />  Your Innovation, Your Control
                </h3>
                <p className="text-gray-300 mb-6">
                  We understand the importance of <span className="italic">idea security</span>. That's why we have a{" "}
                  <span className="font-bold">transparent system</span> where you decide{" "}
                  <span className="italic">who can engage with your idea and how</span>.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="flex items-start">
                    <div className="text-[#ffff33] mr-3 font-bold">🔹</div>
                    <div>
                      <h4 className="font-semibold text-white">Confidentiality Assured</h4>
                      <p className="text-gray-300">We do not claim ownership of any idea submitted.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[#ffff33] mr-3 font-bold">🔹</div>
                    <div>
                      <h4 className="font-semibold text-white">Community-Driven Validation</h4>
                      <p className="text-gray-300">
                        Get real feedback from <span className="italic">trusted innovators, not just anyone</span>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[#ffff33] mr-3 font-bold">🔹</div>
                    <div>
                      <h4 className="font-semibold text-white">Path to Recognition & Success</h4>
                      <p className="text-gray-300">
                        The more you share, the closer you get to{" "}
                        <span className="italic">turning your vision into reality</span>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#ffff33]/10 rounded-xl p-4 border border-[#ffff33]/20">
                  <p className="text-center font-semibold text-white">
                    📢{" "}
                    <span className="italic">
                      Have a bold idea? Share it with confidence, and let's build the future together!
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contribution Section */}
            <div
              className={`mb-24 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-[#ffff33] to-yellow-400 bg-clip-text text-transparent">
                  Share Your Vision
                </h2>
                <p className="text-2xl text-gray-300">Have a bold idea that could reshape the future? Let's hear it.</p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div
                  className="bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-zinc-800 
                  hover:border-[#ffff33]/30 transition-all duration-500 shadow-2xl hover:shadow-[#ffff33]/10
                  transform hover:-translate-y-1"
                >
                  <form
                    onSubmit={handleSubmit}
                    className="bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-6 md:p-10 border-zinc-800 hover:border-[#ffff33]/30 transition-all shadow-xl"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lg font-medium text-gray-200">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-gray-200">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Enter subject"
                          className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-gray-200">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-gray-200">Phone Number</label>
                        <input
                          type="tel"
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="w-full bg-zinc-800/50 rounded-lg p-3 text-white border border-zinc-700 focus:border-[#ffff33] focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label className="block text-lg font-medium text-gray-200">Brief Description</label>
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
                      className="w-full bg-[#ffff33] text-black py-3 rounded-lg font-semibold text-lg mt-6 hover:bg-yellow-400 transition-all"
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
    </div>
  )
}

export default InnovationHub