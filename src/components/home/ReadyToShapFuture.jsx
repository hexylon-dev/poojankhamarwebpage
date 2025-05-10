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
    <div id="futureSection" className="min-h-screen bg-black flex items-center justify-center py-24 relative overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 grid-lines"></div>

      {/* Main Content */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full max-w-6xl aspect-[16/13] sm:aspect-[16/11] md:aspect-[2/1] rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden interactive-bg"
      >
        {/* Dynamic Background Effect */}
        <div
          className="absolute inset-0 bg-[#111111]"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 255, 51, 0.15), rgba(17, 17, 17, 1) 50%)`,
          }}
        ></div>

        {/* Animated Floating Circle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] aspect-square">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-[#4b4b23] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute inset-[15%] bg-[#5c5c2b] rounded-full opacity-30 blur-lg"></div>
            <div className="absolute inset-[30%] bg-[#6d6d33] rounded-full opacity-40 blur-md"></div>
            <div className="absolute inset-[45%] bg-[#7e7e3b] rounded-full opacity-50 blur-sm"></div>
            <div className="absolute inset-[60%] bg-[#8f8f43] rounded-full opacity-60"></div>
          </motion.div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#ffff33] rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{ y: [null, '-20%'], opacity: [null, 0] }}
              transition={{ duration: Math.random() * 2 + 3, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        {/* Content Section */}
        <div className="relative h-full flex flex-col justify-center px-12 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-[#ffff33] text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-5 md:mb-8 max-w-[600px] leading-tight"
          >
            Ready to shape
            <span className="relative inline-block mx-2">
              the future
              <motion.div
                className="absolute -bottom-1 sm:-bottom-2 left-0 h-[2px] sm:h-1 bg-gradient-to-r from-[#ffff33] to-[#ffff33]/50"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
            with me?
          </motion.h1>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(255, 255, 51, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 bg-[#ffff33] text-black rounded-full w-fit font-semibold overflow-hidden text-xs sm:text-sm md:text-base"
            onClick={() => {
              navigate("/contact")
            }}
          >
            <span className="relative z-10 inline-flex items-center">
              Contact Me Directly
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-1 sm:ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"> */}


            Contact Me Directly

            {/* </div> */}
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default ReadyShapeFuture

