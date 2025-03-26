import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RightArrow from "../assets/svgs/RightArrow";
import ImplementedProjects from "./ImplementedProjects";
import Page from "./Page";
import OurWorkUnique from "./OurWorkUnique";
import ScrollDown from "../assets/svgs/ScrollDown";
import HeaderSVG from "../assets/svgs/HeaderSVG";
// import ServicePage2 from "./ServicePage2";
// import PosterPage from "./PosterPage";
// import PredictiveAnalytics from "./PredictiveAnalytics";
// import Carousel from "./Carousel";
import ServiceV3 from "./ServiceV3";
const heroSection = {
      title: "Best Custom \nAI Development Company in Ahmedabad",
      tagline:
        "Revolutionizing Businesses with Innovative AI Solutions, Intelligent Automation, and Real-Time Insights",
      content:
        "Hexylon Analytics stands as the best AI developer company, specializing in custom AI development designed to revolutionize businesses across diverse sectors. Our expertise in innovative AI solutions, intelligent automation, and intuitive dashboards enables organizations to streamline operations, optimize HR, Sales, and Purchasing functions, and gain actionable insights in real time.",
    };
export default function HexylonLanding({
//   heroSection,
//   problemStatement,
//   keyFeatures,
//   workflow,
//   caseStudies,
//   technologyStack,
//   whyHexylon,
//   callToAction,
//   faqs,
}) {
  const { title, tagline, content } = heroSection;
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollPercentage(currentScroll / scrollHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={containerRef} className="relative  overflow-hidden">
        {/* Scoped Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
            radial-gradient(circle at left, rgba(80, 80, 80, 0.4) 0%, rgba(40, 40, 40, 0.3) 30%, rgba(0, 0, 0, 0.9) 100%),
            radial-gradient(circle at center, rgba(80, 80, 80, 0.1) 0%, rgba(40, 40, 40, 0.3) 30%, rgba(0, 0, 0, 0.9) 100%),
            radial-gradient(circle at right, rgba(80, 80, 80, 0.4) 0%, rgba(40, 40, 40, 0.3) 30%, rgba(0, 0, 0, 0.9) 100%)
          `,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Grid lines */}
        <div
          className="absolute inset-0 z-0 bg-black"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "8rem 8rem",
          }}
        />

        <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />

        {/* Scroll percentage indicator */}
        {/* <div className="fixed bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/80 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg z-50 border border-[#FF6600] text-sm sm:text-base">
        {(scrollPercentage * 100).toFixed(1)}%
      </div> */}
        <br />
        <br />
        {/* <br /> */}
        <div
  className="relative max-w-7xl min-h-screen mx-auto z-10 flex flex-col px-4 sm:px-6 lg:px-8 pt-32 md:pt-0"
>
  {/* Right Arrow - Updated positioning */}
  {/* <div className="absolute top-[20vh] right-4 md:top-[13vh] md:right-[8rem]">
    <div className="p-1 sm:p-2 md:p-3 rounded-full shadow-lg transition-colors duration-300">
      <RightArrow className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[#0066ff]" />
    </div>
  </div> */}

  {/* Service Button - Updated margin */}
  <div className="mb-16 md:mb-32">
    <button
      className="service-button"
      style={{
        background: "#FF6600",
        padding: "8px 24px",
        borderRadius: "9999px",
        fontWeight: "600",
        transition: "background-color 0.3s, transform 0.3s",
        color: "white",
        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
        marginTop: "70px",
        "@media (min-width: 1000px)": {
          padding: "12px 36px",
          marginTop: "-100px",
        },
      }}
      onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
    >
      OUR WORK
      <span className="ml-1">›</span>
    </button>
  </div>

  {/* Main Content - Description moved higher */}
  <div className="grid grid-cols-1 gap-4 md:gap-8 mt-8 md:mt-0">
    <h1
      className="service-title text-4xl md:text-8xl"
      style={{
        lineHeight: "1.2",
        fontFamily: "serif",
        color: "white",
        textAlign: "center",
        paddingLeft: "0.5rem",
        marginTop: "-10vh",
        "@media (min-width: 768px)": {
          paddingLeft: "1.5rem",
          marginTop: "-15vh",
        },
        "@media (min-width: 1024px)": {
          marginTop: "-20vh",
        },
      }}
      dangerouslySetInnerHTML={{ __html: title }}
    />

    {/* Original description - moved up, right aligned */}
    <p
      className="service-description text-base sm:text-lg md:text-xl lg:text-2xl 
      max-w-[80%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] 
      ml-auto mr-4 sm:mr-8 md:mr-12 lg:mr-16 
      text-right text-[#d1d5db] 
      px-4 sm:px-6 md:px-8
      -mt-4 md:mt-10"
      style={{
        lineHeight: "1.6",
        letterSpacing: "0.01em",
      }}
    >
      {tagline}
    </p>

    {/* Centered Meta Description */}
    <p
      className="text-base sm:text-lg md:text-xl 
      max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[90%] 
      mx-auto text-center text-[#d1d5db]/90
      px-4 sm:px-6 md:px-8 
      mt-4 md:mt-8"
      style={{
        lineHeight: "1.6",
        letterSpacing: "0.01em",
      }}
    >
      {content}
    </p>
  </div>
</div>

      </div>
      <Page />
      <OurWorkUnique />
      <ImplementedProjects />
                          </>
  );
}