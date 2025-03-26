import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const index = useRef(0);

  useEffect(() => {
    if (index.current < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(text.slice(0, index.current + 1));
        index.current += 1;
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [displayText, text]);

  return (
    <div className="font-mono text-[#FF6600]">
      {displayText}
      <span className="animate-pulse">_</span>
    </div>
  );
};

const IndustryCard = ({
  industry,
  icon,
  solutions,
  isActive,
  onClick,
  index,
}) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 0,
        scale: 1,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.1,
        delay: index,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [index]);

  useEffect(() => {
    if (isActive) {
      gsap.to(cardRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(cardRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`cursor-pointer transform transition-all duration-500 ${
        isActive ? "bg-[#003366] text-white" : "bg-white hover:bg-blue-50"
      } rounded-xl shadow-xl backdrop-blur-sm overflow-hidden`}
    >
      <div className={`${isActive ? "p-6" : "p-4"} h-full flex flex-col relative`}>
        {/* Glowing effect */}
        {isActive && (
          <div className="absolute inset-0 opacity-20 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600] to-[#003366] blur-xl"></div>
          </div>
        )}

        {/* Content */}
        <div ref={contentRef} className="relative z-10">
          <div className="flex items-center gap-4 mb-2">
            <div
              className={`p-3 rounded-lg transform transition-all duration-500 ${
                isActive ? "bg-white/10 rotate-12" : "bg-blue-50"
              }`}
            >
              {icon}
            </div>
            <h3
              className={`font-bold ${
                isActive ? "text-white text-2xl" : "text-[#003366] text-xl"
              }`}
            >
              {industry}
            </h3>
          </div>

          {isActive && (
            <div className="grid gap-4 mt-4 transition-all duration-500 text-xl">
              {solutions.map((solution, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 transform transition-all duration-500 hover:translate-x-2"
                >
                  <svg
                    className="w-5 h-5 text-[#FF6600] mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1">{solution.title}</h4>
                    <p className="text-sm opacity-80">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const activeCardRef = useRef(null);

  const industries = [
    {
      industry: "Manufacturing",
      icon: (
        <svg
          className="w-8 h-8 text-[#FF6600]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      solutions: [
        {
          title: "Streamline Operations",
          description:
            "Optimize production and reduce downtime with predictive analytics.",
        },
        {
          title: "Predictive Maintenance",
          description: "Prevent costly equipment failures before they happen.",
        },
        {
          title: "Supply Chain Optimization",
          description: "Improve logistics and inventory management.",
        },
      ],
    },
    {
      industry: "Retail & E-commerce",
      icon: (
        <svg
          className="w-8 h-8 text-[#FF6600]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      solutions: [
        {
          title: "Enhance Customer Experience",
          description: "Deliver personalized shopping experiences using AI.",
        },
        {
          title: "Dynamic Pricing",
          description: "Adjust pricing strategies based on real-time demand.",
        },
        {
          title: "Inventory Forecasting",
          description: "Prevent overstock or stockouts with smart predictions.",
        },
      ],
    },
    {
      industry: "Finance & Fintech",
      icon: (
        <svg
          className="w-8 h-8 text-[#FF6600]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      solutions: [
        {
          title: "Fraud Detection",
          description: "AI-driven models to identify fraudulent transactions.",
        },
        {
          title: "Risk Assessment",
          description: "Automate risk management for faster decision-making.",
        },
        {
          title: "Algorithmic Trading",
          description:
            "Use machine learning to optimize investment strategies.",
        },
      ],
    },
    {
      industry: "Healthcare",
      icon: (
        <svg
          className="w-8 h-8 text-[#FF6600]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      solutions: [
        {
          title: "Revolutionize Patient Care",
          description: "Predictive diagnostics to improve patient outcomes.",
        },
        {
          title: "Resource Management",
          description:
            "Optimize hospital operations and allocation of resources.",
        },
        {
          title: "Drug Discovery",
          description: "Accelerate research with AI-driven insights.",
        },
      ],
    },
    {
      industry: "Service Industry",
      icon: (
        <svg
          className="w-8 h-8 text-[#FF6600]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      solutions: [
        {
          title: "Customer Support Automation",
          description:
            "Streamline client interactions with AI-driven chatbots and virtual assistants.",
        },
        {
          title: "Data-Driven Decision Making",
          description:
            "Use analytics to improve service quality and customer satisfaction.",
        },
        {
          title: "Process Automation",
          description:
            "Automate routine tasks to reduce operational costs and increase efficiency.",
        },
      ],
    },
  ];

  const handleIndustryClick = (index) => {
    if (index === activeIndustry) return;

    const clickedCard = cardsRef.current[index];
    const activeCard = activeCardRef.current;
    // const leftColumn = document.querySelector('.left-column');
    // const rightColumn = document.querySelector('.right-column');

    // Get the positions of the clicked card and the active card
    const clickedRect = clickedCard.getBoundingClientRect();
    const activeRect = activeCard.getBoundingClientRect();

    // Calculate the distance to move
    const deltaX = activeRect.left - clickedRect.left;
    const deltaY = activeRect.top - clickedRect.top;

    // Animate the clicked card
    gsap.to(clickedCard, {
      x: deltaX,
      y: deltaY,
      scale: 1.05,
      zIndex: 10,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => {
        // Reset position after animation
        gsap.set(clickedCard, { clearProps: "all" });
        setActiveIndustry(index);
      }
    });

    // Animate the active card to the clicked card's position
    gsap.to(activeCard, {
      x: -deltaX,
      y: -deltaY,
      scale: 0.95,
      opacity: 0,
      zIndex: 5,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => {
        // Reset position after animation
        gsap.set(activeCard, { clearProps: "all" });
      }
    });

    // Animate other cards
    cardsRef.current.forEach((card, i) => {
      if (i !== index && i !== activeIndustry) {
        gsap.to(card, {
          scale: 0.95,
          opacity: 0.7,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });

    // Scroll to the section
    gsap.to(window, {
      duration: 0.5,
    
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    // Reset all cards
    cardsRef.current.forEach((card, i) => {
      if (i === activeIndustry) {
        gsap.to(card, {
          scale: 1.05,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(card, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });
  }, [activeIndustry]);

  return (
    <div
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-[#003366]"
    >
      {/* Animated Header */}
      <div className="text-center mb-20">
        <div className="relative inline-block">
          <div className="text-sm text-[#FF6600] mb-2">
            <TypewriterText text="> Analyzing industry requirements..." />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            AI Solutions by Industry
            <div className="h-1 w-32 bg-[#FF6600] mx-auto mt-4 rounded-full"></div>
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="left-column flex flex-col self-center">
            <div ref={el => activeCardRef.current = el}>
              <IndustryCard
                key={industries[activeIndustry].industry}
                {...industries[activeIndustry]}
                index={activeIndustry}
                isActive={true}
                onClick={() => {}}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column flex flex-col space-y-4">
            {industries.map((industry, index) => {
              if (index !== activeIndustry) {
                return (
                  <div key={index} ref={el => cardsRef.current[index] = el}>
                    <IndustryCard
                      {...industry}
                      index={index}
                      isActive={false}
                      onClick={() => handleIndustryClick(index)}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;

