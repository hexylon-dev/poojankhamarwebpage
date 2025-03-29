import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"; // ✅ SEO Meta Tags ke liye

const InnovationHighlight = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    });
  }, [controls]);

  return (
    <>
      {/* ✅ SEO Meta Tags for This Section */}
      <Helmet>
        <title>
          Innovation Hub | Transforming Industries with AI & Automation
        </title>
        <meta
          name="description"
          content="Discover cutting-edge innovations powered by AI, automation, and fearless execution. Explore game-changing ideas that disrupt industries and shape the future."
        />
        <meta
          name="keywords"
          content="innovation hub, AI innovation, automation, disruptive technology, future technology, visionary ideas, AI solutions"
        />
        <meta name="author" content="Hexylon" />
        <meta
          property="og:title"
          content="Innovation Hub | Transforming Industries with AI & Automation"
        />
        <meta
          property="og:description"
          content="Join the movement of disruptive thinkers and innovators. Explore AI-driven solutions, automation advancements, and game-changing ideas."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://poojankhamar.in/innovation" />
        <meta
          property="og:image"
          content="https://poojankhamar.in/images/innovation-thumbnail.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Innovation Hub | Transforming Industries with AI & Automation"
        />
        <meta
          name="twitter:description"
          content="Revolutionizing industries with AI and automation. Be part of the future of innovation."
        />
        <meta
          name="twitter:image"
          content="https://poojankhamar.in/images/innovation-thumbnail.jpg"
        />
      </Helmet>

      <div className="relative p-4 sm:p-6 md:p-10 bg-black overflow-hidden">
        {/* Futuristic background elements */}
        <div

        />

        {/* Diagonal dividing lines */}
        <div className="absolute inset-0 overflow-hidden">

        </div>

        {/* Main content with asymmetric layout */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-32">
          <div className="flex flex-col lg:flex-row items-start">
            {/* Left column: Main content - 60% on desktop */}
            <motion.div
              className="w-full lg:w-3/5 lg:pr-12"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
            >
              {/* Glitch effect title */}
              <div className="relative mb-6">
                <motion.div
                  className="absolute top-0 left-0 w-16 h-1 bg-[#ffff33]"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />

                <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-8 md:mt-10 text-center lg:text-left">
                  <span className="text-white">
                    <span className="text-[#ffff33]">Innovation Hub</span>

                  </span>

                </h1>

                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-2 text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  A Powerhouse for Game Changing Ideas
                </motion.h2>
              </div>

              <motion.p
                className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed mt-6 md:mt-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Turn your vision into reality! Share your innovative ideas,
                collaborate with like-minded creators, and be part of the next
                big breakthrough.
              </motion.p>

              <motion.div
                className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-3 bg-[#ffff33] text-black font-bold rounded-sm text-sm sm:text-base"
                  onClick={() => navigate("/contact")}
                >
                  Contact Me
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-3 border border-[#ffff33] text-[#ffff33] font-bold bg-transparent rounded-sm text-sm sm:text-base"
                  onClick={() => navigate("/projects")}
                >
                  Explore Work
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right column: 3D visualization - 40% on desktop */}
            <motion.div
              className="w-full lg:w-2/5 mt-12 sm:mt-16 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] perspective-[1000px]">
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56"
                  animate={{
                    rotateX: [0, 360],
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Front face */}
                  <div
                    className="absolute inset-0 bg-[#ffff33]/10 border border-[#ffff33]/50"
                    style={{ transform: "translateZ(70px)" }}
                  ></div>
                  {/* Back face */}
                  <div
                    className="absolute inset-0 bg-[#ffff33]/10 border border-[#ffff33]/50"
                    style={{ transform: "translateZ(-70px) rotateY(180deg)" }}
                  ></div>
                  {/* Right face */}
                  <div
                    className="absolute inset-0 bg-[#ffff33]/10 border border-[#ffff33]/50"
                    style={{ transform: "translateX(70px) rotateY(90deg)" }}
                  ></div>
                  {/* Left face */}
                  <div
                    className="absolute inset-0 bg-[#ffff33]/10 border border-[#ffff33]/50"
                    style={{ transform: "translateX(-70px) rotateY(-90deg)" }}
                  ></div>
                  {/* Top face */}
                  <div
                    className="absolute inset-0 bg-[#ffff33]/10 border border-[#ffff33]/50"
                    style={{ transform: "translateY(-70px) rotateX(90deg)" }}
                  ></div>
                  {/* Bottom face */}
                  <div
                    className="absolute inset-0 bg-[#ffff33]/10 border border-[#ffff33]/50"
                    style={{ transform: "translateY(70px) rotateX(-90deg)" }}
                  ></div>
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* Statistics Section - Added as requested */}
          <motion.div
            className="mt-16 md:mt-24 lg:mt-32"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  value: "250+",
                  label: "Ideas",
                  description: "Innovative concepts explored",
                },
                {
                  value: "75%",
                  label: "Implementation Success",
                  description: "Ideas transformed into reality",
                },
                {
                  value: "50+",
                  label: "Visionary Minds",
                  description: "Creative collaborators",
                },
              ].map((stat, index) => (
                <motion.div
                  key={`stat-${index}`}
                  className="relative border border-[#ffff33]/20 bg-black/30 backdrop-blur-md p-4 sm:p-6 group overflow-hidden"
                  whileHover={{
                    y: -5,
                    borderColor: "rgba(255, 255, 51, 0.5)",
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-0 h-1 bg-[#ffff33]"
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 1.5 + index * 0.2 }}
                  />

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
                  >
                    <h3 className="text-[#ffff33] text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                      {stat.value}
                    </h3>
                    <div className="text-white text-lg sm:text-xl font-medium mb-1">
                      {stat.label}
                    </div>
                    <p className="text-zinc-400">{stat.description}</p>
                  </motion.div>

                  <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 right-0 w-16 h-1 bg-[#ffff33]/30"></div>
                    <div className="absolute bottom-0 right-0 w-1 h-16 bg-[#ffff33]/30"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </>
  );
};

export default InnovationHighlight;
