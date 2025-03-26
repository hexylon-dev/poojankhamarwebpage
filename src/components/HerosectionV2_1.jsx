import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Lightbulb, Users, ChartBar } from "lucide-react";

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
  
        // Calculate formation progress based on scroll
        const scrollProgress = Math.min(scrollOffset / 300, 1); // Adjust 300 to control formation sensitivity
        const verticalOffset = scrollOffset * 0.5; // Adjust 0.5 to control downward movement speed
  
        particles.forEach((particle, i) => {
          if (scrollOffset === 0) {
            // Random movement when not scrolling
            particle.x += particle.velocity.x;
            particle.y += particle.velocity.y;
  
            // Bounce off walls
            if (particle.x < 0 || particle.x > canvas.width) particle.velocity.x *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.velocity.y *= -1;
          } else {
            // Move towards hexagon formation when scrolling
            const targetX = particle.targetX;
            const targetY = particle.targetY + verticalOffset;
  
            particle.x += (targetX - particle.x) * (0.02 * scrollProgress);
            particle.y += (targetY - particle.y) * (0.02 * scrollProgress);
          }
  
          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 102, 0, 0.6)";
          ctx.fill();
  
          // Draw connections
          const connectionDistance = scrollOffset === 0 ? 100 : 50;
          particles.forEach((otherParticle, j) => {
            if (i !== j) {
              const dx = otherParticle.x - particle.x;
              const dy = otherParticle.y - particle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
  
              if (distance < connectionDistance) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(255, 102, 0, ${0.2 - (distance / connectionDistance) * 0.2})`;
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
      title: "Security First",
      description: "Enterprise-grade security measures to protect your valuable data and insights"
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Cutting-edge AI technology tailored to your specific business needs"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals with deep expertise in AI and analytics"
    },
    {
      icon: ChartBar,
      title: "Actionable Insights",
      description: "Transform complex data into clear, actionable business intelligence"
    }
  ];

  return (
    <div ref={containerRef} className="bg-black">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <motion.div 
          style={{ scale, opacity, y }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        >
          {/* Rest of the JSX remains the same */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-3 min-h-[170px]"
          >
            Unlock Insights with{" "}
            <TypeWriter
              words={["AI-Powered Analytics", "Hexylon Analytics"]}
              className="text-[#FF6600]"
            />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
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
            className="flex flex-wrap gap-4 justify-center"
          >
            <button
              className="bg-[#FF6600] hover:bg-[#FF8533] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
              onClick={handleNavigateToContactPage}
            >
              Get Started
            </button>
            <a
              href="#why-choose-us"
              className="border-2 border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div id="why-choose-us" className="min-h-screen bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-[#FF6600]">Hexylon</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver
              solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-[#FF6600] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}