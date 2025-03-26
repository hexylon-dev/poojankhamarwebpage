import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Lightbulb, Users } from "lucide-react";

const TypeWriter = ({ words, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        setTypingSpeed(150);

        if (currentText === currentWord) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        setTypingSpeed(100);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

const DarkCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative w-full h-full">
      <div className="relative">
        {/* Orange/Coral tab and blur effects remain unchanged */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-[#ff7a33] rounded-b-lg before:absolute before:inset-0 before:blur-xl before:bg-[#ff7a33]/50 before:-z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-3 blur-2xl bg-[#ff6600]/60" />
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-32 h-4 blur-3xl bg-[#ff6600]/40" />
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 blur-[40px] bg-[#ff6600]/30" />
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 blur-[50px] bg-[#ff6600]/20" />
      </div>
      
      {/* Updated card with increased height */}
      <div className="mt-[2px] w-full aspect-[16/13] sm:aspect-[16/12] bg-[#1a1a1a] rounded-[28px] border border-[#333333]/30 shadow-xl p-4 sm:p-6">
        <div className="flex flex-col items-center h-full justify-center space-y-4 sm:space-y-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF6600] rounded-lg flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-white text-center">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 text-center max-w-[250px] sm:max-w-[300px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Component({ handleNavigateToContactPage }) {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const animationFrameRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"]
    });
  
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
    const [scrollPercentage, setScrollPercentage] = useState(0);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      const particles = [];
      const particleCount = 150;
      const hexagonPoints = [];
      const hexagonRadius = Math.min(canvas.width, canvas.height) * 0.15; // Responsive hexagon size
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
  
      // Generate hexagon target points
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        hexagonPoints.push({
          x: centerX + hexagonRadius * Math.cos(angle),
          y: centerY + hexagonRadius * Math.sin(angle)
        });
      }
  
      // Initialize particles with random positions and movement
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 1;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          baseX: Math.random() * canvas.width,
          baseY: Math.random() * canvas.height,
          targetX: 0,
          targetY: 0,
          velocity: {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed
          },
          initialized: false
        });
      }
  
      // Assign particles to hexagon points
      const assignHexagonPositions = () => {
        let particleIndex = 0;
        for (let i = 0; i < hexagonPoints.length; i++) {
          const startPoint = hexagonPoints[i];
          const endPoint = hexagonPoints[(i + 1) % hexagonPoints.length];
          const particlesPerSide = Math.floor(particleCount / 6);
  
          for (let j = 0; j < particlesPerSide && particleIndex < particles.length; j++) {
            const ratio = j / particlesPerSide;
            const particle = particles[particleIndex];
            
            particle.targetX = startPoint.x + (endPoint.x - startPoint.x) * ratio;
            particle.targetY = startPoint.y + (endPoint.y - startPoint.y) * ratio;
            
            particleIndex++;
          }
        }
      };
  
      assignHexagonPositions();
  
      let scrollOffset = 0;
      let lastScrollOffset = 0;
      const updateScrollOffset = () => {
        lastScrollOffset = scrollOffset;
        scrollOffset = window.scrollY;
      };
      window.addEventListener('scroll', updateScrollOffset);
  
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        // Calculate scroll percentage (0 to 1)
        const scrollPercentage = scrollOffset / (document.documentElement.scrollHeight - window.innerHeight);
        setScrollPercentage(scrollPercentage);
        
        // Check if scroll is at 0% or beyond 8%
        const shouldBeRandom = scrollPercentage === 0 || scrollPercentage > 0.05;
        
        particles.forEach((particle, i) => {
          if (shouldBeRandom) {
            // Reset to random movement
            if (!particle.velocity) {
              const angle = Math.random() * Math.PI * 2;
              const speed = 20 + Math.random() * 1;
              particle.velocity = {
                x: Math.cos(angle) * speed,
                y: Math.sin(angle) * speed
              };
            }
            
            // Random movement
            particle.x += particle.velocity.x;
            particle.y += particle.velocity.y;
  
            // Bounce off walls
            if (particle.x < 0 || particle.x > canvas.width) particle.velocity.x *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.velocity.y *= -1;
          } else {
            // Move towards hexagon formation
            const targetX = particle.targetX;
            const targetY = particle.targetY + (scrollOffset * 0.5);
  
            particle.x += (targetX - particle.x) * 0.1;
            particle.y += (targetY - particle.y) * 0.1;
          }
  
          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 102, 0, 0.6)";
          ctx.fill();
  
          // Draw connections with longer distance when in random mode
          const connectionDistance = shouldBeRandom ? 100 : 50;
          particles.forEach((otherParticle, j) => {
            if (i !== j) {
              const dx = otherParticle.x - particle.x;
              const dy = otherParticle.y - particle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
  
              if (distance < connectionDistance) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(255, 102, 0, ${0.3 - (distance / connectionDistance) * 0.2})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });
        });
  
        animationFrameRef.current = requestAnimationFrame(animate);
      };
  
      animate();
  
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        assignHexagonPositions();
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener('scroll', updateScrollOffset);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, []);

  // Features array and rest of the component remain the same
  const features = [
    {
      icon: Shield,
      title: "Bespoke AI Solutions",
      description: "Customized AI solutions designed specifically to address your business challenges and objectives, ensuring optimal performance and measurable results. We create personalized models that align with your goals, driving innovation and efficiency."
    },
    {
      icon: Lightbulb,
      title: "Expert Guidance & Support",
      description: "Work with industry-leading consultants who bring deep expertise and experience, guiding you through every stage of your AI transformation journey. From initial strategy sessions to implementation and scaling, we provide continuous support to ensure success."
    },
    {
      icon: Users,
      title: "Complete AI Lifecycle Support",
      description: "Receive complete support from the initial consultation to deployment and beyond. Our end-to-end services guarantee that your AI solutions are seamlessly integrated, continuously optimized, and evolve with your business needs, ensuring sustained growth and value."
    }
  ];

  return (
    <div ref={containerRef} className="bg-black">
      {/* Increased grid size from 4rem to 8rem */}
      {/* <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(217, 217, 217, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(217, 217, 217, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, black 0%, black 100%)
          `,
          backgroundSize: '8rem 8rem, 8rem 8rem, 100% 100%',
        }}
      /> */}

      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />
      
      {/* Updated scroll percentage indicator */}
      {/* <div className="fixed bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/80 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg z-50 border border-[#FF6600] text-sm sm:text-base">
        {(scrollPercentage * 100).toFixed(1)}%
      </div> */}

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale, opacity, y }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-3 min-h-[120px] sm:min-h-[170px]"
          >
            Unlock Insights with{" "}
            <br/>
            <TypeWriter
              words={["AI-Powered Analytics", "Hexylon Analytics"]}
              className="text-[#FF6600]"
            />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0"
          >
            At Hexylon Analytics, we believe every business is unique, and so
            should be the technology that drives it. We specialize in creating AI
            solutions tailored specifically to your company's processes and
            workflow.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <button
              className="bg-[#FF6600] hover:bg-[#FF8533] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors duration-300 w-full sm:w-auto"
              onClick={handleNavigateToContactPage}
            >
              Get Started
            </button>
            <a
              href="/about-us"
              className="border-2 border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors duration-300 w-full sm:w-auto"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div id="why-choose-us" className="relative z-10 min-h-screen bg-transparent py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                Why Choose <span className="text-[#FF6600]">Hexylon</span>
              </h2>
              <div 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-colors duration-300"
                style={{
                  backgroundColor: scrollPercentage > 0.04 && scrollPercentage <= 0.15
                    ? '#FF6600' 
                    : '#1a1a1a'
                }}
              />
            </div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              We combine cutting-edge technology with deep industry expertise to deliver
              solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-0">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <DarkCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}