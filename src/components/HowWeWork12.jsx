import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const CaseStudyModal = ({ isOpen, onClose, caseStudy }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (modalRef.current) {
        modalRef.current.style.opacity = "1";
      }
      if (contentRef.current) {
        contentRef.current.style.transform = "translateY(0)";
        contentRef.current.style.opacity = "1";
      }
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 opacity-0 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        ref={contentRef}
        className="bg-[#1A1A1A] rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative transform translate-y-4 opacity-0 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="relative">
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="w-full h-2 bg-[#FF6600]" />
        </div>

        {/* Content section */}
        <div className="px-12 py-8">
          <h1 className="text-4xl font-bold text-white mb-6">
            {caseStudy.title}
          </h1>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {caseStudy.description}
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">
            {caseStudy.subTitle}
          </h2>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {caseStudy.subDescription}
          </p>

          <div className="flex flex-wrap gap-6 mt-8">
            {/* Results Button */}
            <button className="group relative px-8 py-3 rounded-full border-2 border-[#0066CC] hover:border-[#0066CC]/80 transition-all duration-300 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[#0066CC] to-[#0088FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <div className="relative flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0066CC] group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <span className="font-semibold text-[#0066CC] group-hover:text-white transition-colors duration-300">
                  Result Achieved
                </span>
              </div>
            </button>

            {/* Implementation Button */}
            <button className="group relative px-8 py-3 rounded-full border-2 border-[#FF6600] hover:border-[#FF6600]/80 transition-all duration-300 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF6600] to-[#FF8533] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <div className="relative flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#FF6600] group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-semibold text-[#FF6600] group-hover:text-white transition-colors duration-300">
                  Implementation Time
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowWeWorkSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const [triggerTyping, setTriggerTyping] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const scrollTriggerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const objervRef = useRef(null); // Reference to the section
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: headerRef.current,
        start: "top 80%",
        onEnter: () => {
          if (!typingComplete) {
            setTriggerTyping(true);
            // document.body.style.overflow = "hidden";
          }
        },
        once: true,
      });
    }, sectionRef.current);

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    console.log("objervRef", objervRef.current);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("entry", entry);
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it's visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (objervRef.current) {
      observer.observe(objervRef.current);
    }

    return () => {
      if (objervRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div
        ref={sectionRef}
        className=" min-h-screen  relative overflow-hidden py-20"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #003366 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="max-w-12xl mx-auto px-4 md:px-8">
          <div ref={headerRef} className="relative mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0056A6] text-center">
              Our Process
            </h2>
            <p className="mt-3 text-lg text-white text-center">
              Leveraging cutting-edge technology to redefine workflows and
              achieve seamless integration.
            </p>
          </div>

          <div
            ref={objervRef}
            className="flex flex-col lg:flex-row max-w-12xl min-h-[30rem] justify-center items-center mx-auto bg-black rounded-2xl p-4 gap-8 lg:gap-0"
          >
            <div className="relative w-[18rem] h-[28rem] rounded-lg lg:mr-[99px] p-5">
              {/* Left border */}
              <div
                className={`absolute left-0 top-0 w-[0.5px] h-[100%] bg-orange-500 rounded-l-3xl ${
                  isVisible ? "animate-draw-height-line" : ""
                }`}
              ></div>
              {/* Top border */}
              <div
                className={`absolute left-0 top-0 w-full h-[0.5px] bg-orange-500 rounded-tl-3xl ${
                  isVisible ? "animate-draw-width-line" : ""
                }`}
              ></div>
              {/* Bottom border */}
              <div
                className={`absolute left-0 bottom-0 w-full h-[0.5px] bg-orange-500 ${
                  isVisible ? "animate-draw-width-line" : ""
                }`}
              ></div>
              {/* Right border with gap */}
              <div
                className={`absolute right-0 top-0 w-[0.5px] h-[5rem] bg-orange-500 rounded-tr-3xl ${
                  isVisible ? "animate-draw-height-5rem-line-bottom-to-top" : ""
                }`}
              ></div>
              {/* Attach fill circle top to right border between border gap */}
              {/* start animation need to be here */}
              <div className="absolute right-[-3px] top-20 w-[0.5rem] h-[0.5rem] bg-orange-500 rounded-full "></div>
              {/* Right border with gap */}
              <div
                className={`absolute right-0 bottom-0 w-[0.5px] h-[5.04rem] bg-orange-500  rounded-l-xl  ${
                  isVisible ? "animate-draw-height-5-04rem--line-bottom-to-top" : ""
                }`}
              ></div>

              <div
                className={`absolute right-[-50px] bottom-[4.5rem] w-[1px] h-[19.2rem] bg-orange-500 rounded-full transform rotate-[19deg] ${
                  isVisible ? "animate-draw-height-line-cross-line" : ""
                } hidden lg:block`}
              ></div>

              <div className="flex flex-col items-center space-y-6 h-full justify-center">
                {/* Light orange icon */}
                <div className="text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[0.5px]0 h-[0.5px]0 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h2
                  className="text-xl font-bold text-white text-center"
                  style={{ margin: "0px", marginTop: "10px" }}
                >
                  Business Strategy &
                  <br />
                  Analysis
                </h2>

                {/* Text content */}
                <p className="max-w-sm text-center leading-relaxed text-white/90">
                  Unlock business growth through expert analysis and actionable
                  strategies. Leverage data-driven insights for optimized
                  business performance and success.
                </p>

                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedCaseStudy({
                      title:
                        "In-Depth Business Analysis for Tailored Strategies",
                      description:
                        "We begin by deploying expert consultants to assess your business, identify challenges, and define your goals. This comprehensive analysis helps us design custom AI solutions aligned with your business needs, ensuring maximum efficiency and performance.",
                      subTitle: "Real-World Example of Business Impact",
                      subDescription:
                        "For example, our team recently spent two weeks onsite, analyzing a client's inventory and supply chain processes. By understanding their unique challenges, we created a bespoke AI solution that significantly improved their inventory management and reduced operational disruptions, showing how strategic business analysis can directly enhance performance.",
                      content:
                        "Our team spent two weeks on-site, analyzing the client's existing inventory systems and supply chain processes. By understanding their unique challenges, we developed a custom AI solution that reduced stockouts by 35% and improved inventory turnover by 20%.",
                    });
                  }}
                  className="mt-2 bg-[#003366] text-white hover:bg-[#FF6600] transition-colors duration-300 px-4 py-2 rounded-md"
                >
                  View Case Study
                </button>
              </div>
            </div>
            {/* center card */}
            <div className="relative w-[18rem] h-[28rem] rounded-lg lg:mr-[99px] p-5">
              {/* Left border */}
              <div className="absolute left-0 top-0 w-[0.5px] min-h-[4.9rem] bg-orange-500 rounded-r-full  "></div>

              {/* Top border */}
              <div
                className={`absolute left-0 top-0 w-full h-[0.5px] bg-orange-500 rounded-tl-3xl ${
                  isVisible ? "animate-draw-width-line" : ""
                }`}
              ></div>

              {/* Bottom border */}
              <div
                className={`absolute left-0 bottom-0 w-[99.99%] h-[0.5px] bg-orange-500 rounded-bl-3xl rounded-br-3xl ${
                  isVisible ? "animate-draw-width-line-99-99" : ""
                }`}
              ></div>
              {/* Right border with gap */}
              <div className="absolute right-0 top-0 w-[0.5px] min-h-24 bg-orange-500 rounded-tr-3xl"></div>

              {/* Attach fill circle top to right border between border gap */}
              {/* end animation need to be here */}
              <div className="absolute right-[-3px] top-[5.9rem] w-[0.5rem] h-[0.5rem] bg-orange-500 rounded-full"></div>

              {/* Right border with gap */}
              <div className="absolute right-[1px] bottom-0 w-[0.5px] h-[4.9rem] bg-orange-500"></div>
              <div className="absolute bottom-0 left-0  w-[0.5px] min-h-24 bg-orange-500 rounded-l-3xl"></div>

              {/* Attach fill circle top to right border between border gap */}
              <div className="absolute bottom-[5.9rem] left-[-3px]  w-[0.5rem] h-[0.5rem] bg-orange-500 rounded-full"></div>

              <div className="flex flex-col items-center space-y-6 h-full justify-center">
                {/* Light orange icon */}
                <div className="text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[0.5px]0 h-[0.5px]0 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h2
                  className="text-xl font-bold text-white text-center"
                  style={{ margin: "0px", marginTop: "10px" }}
                >
                  Custom AI Model &
                  <br />
                  Data Insights
                </h2>

                {/* Text content */}
                <p className="max-w-sm text-center leading-relaxed text-white/90">
                  Transforming data into actionable insights with customized AI
                  models. Unlock business potential with AI-driven data analysis
                  and tailored strategies.
                </p>

                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedCaseStudy({
                      title:
                        "Unlocking Data Insights to Drive Strategic Growth",
                      description:
                        "We gather and analyze your business data, uncovering hidden patterns and insights that inform the development of tailored AI models. Our advanced data processing techniques maximize the value of your data, driving meaningful business transformation.",
                      subTitle: "Real-World Example of Business Impact",
                      subDescription:
                        "For example, our team recently spent two weeks onsite, analyzing a client's inventory and supply chain processes. By understanding their unique challenges, we created a bespoke AI solution that significantly improved their inventory management and reduced operational disruptions, showing how strategic business analysis can directly enhance performance.",

                      content:
                        "By collecting and analyzing five years of transaction data, we identified subtle patterns of fraudulent activity. Our AI model increased fraud detection rates by 60% while reducing false positives by 40%, saving the bank millions in potential losses.",
                    });
                  }}
                  className="mt-2 bg-[#003366] text-white hover:bg-[#FF6600] transition-colors duration-300 px-4 py-2 rounded-md"
                >
                  View Case Study
                </button>
              </div>
            </div>

            <div className="relative w-[18rem] h-[28rem] rounded-lg p-5 transform lg:rotate-[180deg]">
              {/* Left border */}
              <div className="absolute left-0 top-0 w-[0.5px] h-full bg-orange-500 rounded-l-3xl"></div>
              {/* Top border */}
              <div
                className={`absolute left-0 top-0 w-full h-[0.5px] bg-orange-500 rounded-tl-3xl ${
                  isVisible ? "animate-draw-width-line" : ""
                }`}
              ></div>
              {/* Bottom border */}
              <div
                className={`absolute left-0 bottom-0 w-full h-[0.5px] bg-orange-500 ${
                  isVisible ? "animate-draw-width-line" : ""
                }`}
              ></div>
              {/* Right border with gap */}
              <div className="absolute right-0 top-0 w-[0.5px] min-h-24 bg-orange-500 rounded-tr-3xl"></div>
              {/* Attach fill circle top to right border between border gap */}
              <div className="absolute right-[-4px] top-[5.9rem] w-[0.5rem] h-[0.5rem] bg-orange-500 rounded-full"></div>
              {/* Right border with gap */}
              <div className="absolute right-0 bottom-[-1px] w-[0.5px] h-[5.10rem] bg-orange-500"></div>
              <div
                className={`absolute right-[-51px]  bottom-[4.5rem] w-[1px] h-[19.2rem] bg-orange-500 rounded-full transform rotate-[19deg] ${
                  isVisible ? "animate-draw-height-line-cross-line" : ""
                } hidden lg:block`}
              ></div>
              <div className="flex flex-col items-center space-y-6 h-full justify-center transform lg:rotate-[180deg] rotate-0">
                {/* Light orange icon */}
                <div className="text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[0.5px]0 h-[0.5px]0 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h2
                  className="text-xl font-bold text-white text-center"
                  style={{ margin: "0px", marginTop: "10px" }}
                >
                  AI System
                  <br />
                  Integration to Deploy
                </h2>

                {/* Text content */}
                <p className="max-w-sm text-center leading-relaxed text-white/90">
                  Seamlessly integrating AI into your systems, from design to
                  deployment. Delivering complete end-to-end AI solutions for
                  operational excellence.
                </p>

                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedCaseStudy({
                      title:
                        "Complete AI System Integration for Seamless Performance",
                      description:
                        "We specialize in integrating custom AI models into your existing business systems, ensuring smooth operations and enhanced performance. Our end-to-end approach includes rigorous testing and continuous improvement, ensuring your systems evolve alongside your business.",
                      subTitle: "Real-World Example of Business Impact",
                      subDescription:
                        "For example, our team recently spent two weeks onsite, analyzing a client's inventory and supply chain processes. By understanding their unique challenges, we created a bespoke AI solution that significantly improved their inventory management and reduced operational disruptions, showing how strategic business analysis can directly enhance performance.",

                      content:
                        "We developed a neural network model that analyzes patient data to predict potential complications. This model achieved a 92% accuracy rate in identifying high-risk patients, allowing for early interventions and significantly improving patient outcomes.",
                    });
                  }}
                  className="mt-2 bg-[#003366] text-white hover:bg-[#FF6600] transition-colors duration-300 px-4 py-2 rounded-md"
                >
                  View Case Study
                </button>
              </div>
            </div>
          </div>
          {/* <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 transition-opacity duration-500"
          style={{ opacity: typingComplete ? 1 : 0 }}
        >
          {steps.map((step, index) => (
            <WorkCard
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              caseStudy={step.caseStudy}
            />
          ))}
        </div> */}

          <CaseStudyModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            caseStudy={selectedCaseStudy}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#003366]/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default HowWeWorkSection;
