
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import PoojanSir from "../../assets/PoojanSir.avif";
import { useNavigate } from "react-router-dom";

const JourneyPage = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} id="journey" className="min-h-screen bg-black text-white py-8 md:py-16 px-4 md:px-16 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className=" inset-0 z-0">
        <motion.div style={{ y: backgroundY }} className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-yellow-300/[0.02] blur-[100px]" />
        <div className="absolute top-[40%] right-[5%] w-[40%] h-[40%] rounded-full bg-yellow-300/[0.03] blur-[80px]" />
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffff33] via-yellow-200 to-yellow-300 mb-8 md:mb-16 tracking-tight text-center"
        >
          Explore My Journey
        </motion.h1>

        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center md:items-start">

          {/* Image Section */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: imageInView ? 1 : 0.3,
              scale: imageInView ? 1 : 0.95
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 md:ml-8 relative mb-8 md:mb-0 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300/10 to-transparent opacity-50 rounded-2xl"></div>
              <div className="rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(240,190,30,0.15)] group">
                <img
                  src={PoojanSir || "/placeholder.svg"}
                  alt="Professional portrait"
                  className="w-[335px] h-[420px] object-cover object-center transition-all duration-1000 group-hover:scale-[1.03]"
                  style={{ width: '335px', height: '420px' }} // Fixed dimensions
                />
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="flex-1 space-y-6 md:space-y-10 max-w-2xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-base md:text-lg lg:text-xl leading-relaxed"
            >
              I'm <span className="font-bold text-[#ffff33] relative">
                Poojan Khamar
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-yellow-300/80 to-transparent"></span>
              </span> – an innovator who believes in breaking the mold. My journey is forged through relentless ideas, learning from every rise and fall, and building the future with bold decisions.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-gray-300 text-sm md:text-base leading-relaxed"
            >
              Here, you'll find not just concepts, but real transformations – whether it's tech, leadership, or life lessons, everything is born from experience and designed to inspire.
            </motion.div>

            <button
              onClick={(e) => navigate("/about-poojan-khamar")}
              className="shimmer-button flex items-center gap-2 md:gap-4 hover-scale group animate-fade-in-up mt-2 md:mt-4 z-50"
              style={{ animationDelay: "1s" }}
            >
              <span className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-[#ffff33] to-yellow-500 rounded-full pulse"></span>
              <span className="relative text-sm md:text-base">
                Explore My About
                <span className="absolute-bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ffff33] to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </button>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "70%" }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="h-[1px] bg-gradient-to-r from-yellow-300/50 to-transparent mx-auto md:mx-0"
            ></motion.div>


          </div>
        </div>

        {/* Quotes Section */}
        {/* <div className="mt-16 md:mt-40 space-y-16 md:space-y-48">
          <QuoteBlock delay={0.7} direction="left" quote="A fearless mind builds what others fear to imagine." />
          <QuoteBlock delay={0.9} direction="right" quote="Innovation isn't about comfort. It's about courage." className="md:ml-auto max-w-lg" />
          <QuoteBlock delay={1.1} direction="left" quote="Failures taught me strategy. Success taught me responsibility." className="max-w-3xl" />
        </div> */}

        {/* Footer Line */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent mt-16 md:mt-32"
        ></motion.div>
      </div>
    </div>
  );
};

const QuoteBlock = ({ quote, delay, direction, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : direction === "left" ? -50 : 50
      }}
      transition={{ duration: 0.9, delay: isInView ? 0.2 : 0 }}
      className={`flex flex-col group relative text-center md:text-left ${className}`}
    >
      <div className="absolute -inset-6 bg-gradient-to-tr from-yellow-300/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
      <div className="text-yellow-300 text-5xl md:text-7xl font-serif self-center md:self-start">"</div>
      <div className="text-xl md:text-2xl lg:text-3xl italic my-4 mx-auto md:mx-0 md:ml-6 text-yellow-100 max-w-xl">{quote}</div>
      <div className="text-yellow-300 text-5xl md:text-7xl font-serif self-center md:self-end">"</div>
    </motion.div>
  );
};

export default JourneyPage;
