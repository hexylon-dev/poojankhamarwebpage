"use client"

import { useRef,forwardRef } from "react"
import PoojanSir from "../../assets/PoojanSir.avif"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

const JourneyPage = ({ journeyRef }) => {

  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const imageInView = useInView(imageRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  
  return (
    <div ref={containerRef}  id="journey" className="min-h-screen bg-black text-white py-16 px-8 md:px-16 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,51,0.1),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,51,0.05),transparent_70%)]"></div>
        <motion.div
          style={{ y: backgroundY }}
          className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-yellow-300/[0.02] blur-[100px]"
        ></motion.div>
        <div className="absolute top-[40%] right-[5%] w-[40%] h-[40%] rounded-full bg-yellow-300/[0.03] blur-[80px]"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-yellow-300/[0.02] blur-[60px]"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-[15%] left-[8%] w-1 h-20 bg-gradient-to-b from-yellow-300/30 to-transparent"></div>
      <div className="absolute top-[25%] right-[12%] w-1 h-32 bg-gradient-to-b from-yellow-300/30 to-transparent"></div>
      {/* <div className="absolute bottom-[20%] left-[15%] w-1 h-24 bg-gradient-to-b from-yellow-300/30 to-transparent"></div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-[5%] left-[2%] w-32 h-[1px] bg-gradient-to-r from-yellow-300/50 to-transparent"
        ></motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffff33] via-yellow-200 to-yellow-300 mb-16 tracking-tight md:text-center"
        >
          Explore My Journey
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 mt-32 space-y-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-xl md:text-2xl leading-relaxed"
            >
              I'm{" "}
              <span className="font-bold text-[#ffff33] relative">
                Poojan Khamar
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-yellow-300/80 to-transparent"></span>
              </span>{" "}
              – an innovator who believes in breaking the mold. My journey is forged through relentless ideas, learning
              from every rise and fall, and building the future with bold decisions.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Here, you'll find not just concepts, but real transformations – whether it's tech, leadership, or life
              lessons, everything is born from experience and designed to inspire.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "70%" }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="h-[1px] bg-gradient-to-r from-yellow-300/50 to-transparent"
            ></motion.div>
          </div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: imageInView ? 1 : 0.3,
              scale: imageInView ? 1 : 0.95,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 md:ml-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300/10 to-transparent opacity-50 rounded-2xl"></div>
            <div className="rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(240,190,30,0.15)] group">
              <div className="relative">
                <img
                  src={PoojanSir || "/placeholder.svg"}
                  alt="Professional portrait"
                  className="w-full h-[650px] object-cover transition-all duration-1000 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-yellow-300/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-40 space-y-48">
          <QuoteBlock delay={0.7} direction="left" quote="A fearless mind builds what others fear to imagine." />

          <QuoteBlock
            delay={0.9}
            direction="right"
            quote="Innovation isn't about comfort. It's about courage."
            className="ml-auto max-w-lg"
          />

          <QuoteBlock
            delay={1.1}
            direction="left"
            quote="Failures taught me strategy. Success taught me responsibility."
            className="max-w-3xl"
          />
        </div>

        {/* Decorative footer element */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent mt-32"
        ></motion.div>
      </div>
    </div>
  )
}

const QuoteBlock = ({ quote, delay, direction, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : direction === "left" ? -50 : 50,
      }}
      transition={{ duration: 0.9, delay: isInView ? 0.2 : 0 }}
      className={`flex flex-col group relative ${className}`}
    >
      <div className="absolute -inset-6 bg-gradient-to-tr from-yellow-300/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
      <div className="text-yellow-300 text-7xl font-serif self-start group-hover:text-yellow-200 transition-all duration-500">
        "
      </div>
      <div className="text-2xl md:text-3xl italic my-4 ml-6 group-hover:text-yellow-100 transition-all duration-500">
        {quote}
      </div>
      <div className="text-yellow-300 text-7xl font-serif self-end group-hover:text-yellow-200 transition-all duration-500">
        "
      </div>
    </motion.div>
  )
}

export default JourneyPage

