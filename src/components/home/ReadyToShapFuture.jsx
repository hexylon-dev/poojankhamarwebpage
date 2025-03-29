import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const ReadyShapeFuture = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navigate = useNavigate();

  return (
    <section id="cta" className="relative min-h-[80vh] bg-gradient-to-b from-black via-black to-[#0a0a0a] flex items-center justify-center py-16 md:py-24 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="h-full w-full bg-[linear-gradient(45deg,transparent_48%,#ffff33_48%,#ffff33_52%,transparent_52%)] bg-[length:24px_24px]"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          className="relative rounded-[2.5rem] overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 p-8 sm:p-12 md:p-16 lg:p-20">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Let's Build Something
                  <span className="block mt-2 text-[#ffff33]">Extraordinary Together</span>
                </h2>
                <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8">
                  Ready to transform your ideas into reality? I bring creativity, technical expertise, and a passion for innovation to every project.
                </p>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 lg:mb-0"
              >
                {/* <div className="text-center">
                    <div className="text-[#ffff33] text-2xl sm:text-3xl font-bold mb-1">3+</div>
                    <div className="text-gray-400 text-sm sm:text-base">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#ffff33] text-2xl sm:text-3xl font-bold mb-1">50+</div>
                    <div className="text-gray-400 text-sm sm:text-base">Projects Completed</div>
                  </div>
                  <div className="text-center col-span-2 sm:col-span-1">
                    <div className="text-[#ffff33] text-2xl sm:text-3xl font-bold mb-1">100%</div>
                    <div className="text-gray-400 text-sm sm:text-base">Client Satisfaction</div>
                  </div> */}
              </motion.div>
            </div>

            {/* Right Content - CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full lg:w-auto"
            >
              <div className="bg-white/[0.05] backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-[#ffff33] text-xl sm:text-2xl font-semibold mb-6">Share Your Idea</h3>
                <div className="space-y-4">
                  <motion.button
                    onClick={() => navigate("/contact")}
                    className="w-full bg-[#ffff33] text-black rounded-xl px-8 py-4 font-semibold text-base sm:text-lg 
                             transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,51,0.3)] 
                             active:scale-95 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Let's Connect
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </motion.button>

                  <button onClick={() => navigate("/innovation-hub")}
                    className="w-full border border-[#ffff33]/30 text-[#ffff33] rounded-xl px-8 py-4 font-semibold text-base sm:text-lg
                                   transition-all duration-300 hover:bg-[#ffff33]/10">
                    Explore Ideas
                  </button>
                </div>

                {/* <div className="mt-8 text-center">
                  <p className="text-gray-400 text-sm mb-2">Typical response time</p>
                  <p className="text-white font-medium">Within 24 hours</p>
                </div> */}
              </div>
            </motion.div>
          </div>

          {/* Dynamic Glow Effect */}
          <motion.div
            className="absolute inset-0 -z-10"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 255, 51, 0.15), transparent 50%)`,
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ReadyShapeFuture

