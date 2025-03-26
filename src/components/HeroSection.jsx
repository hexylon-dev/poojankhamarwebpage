import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CircleDollarSign, LineChart, Zap } from "lucide-react";

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

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
      }}
    >
      <div className="bg-black text-white w-64 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
        <div className="space-y-4 p-0">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800">
            <Icon className="w-5 h-5 text-[#FF6600]" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Component({ handleNavigateToContactPage }) {
  const canvasRef = useRef(null);
  const [showCards, setShowCards] = useState(false);
  const [flowUpStarted, setFlowUpStarted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;

    const particles = [];
    const particleCount = 200;
    const connectionDistance = 300;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        angle: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.5,
        flowing: false,
        targetY: -100,
      });
    }

    function drawHexagon(x, y, size) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(hx, hy);
        } else {
          ctx.lineTo(hx, hy);
        }
      }
      ctx.closePath();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        if (flowUpStarted) {
          // Flow particles upward
          particle.flowing = true;
          particle.y -= particle.speed * 3;
          particle.x += Math.sin(particle.y / 30) * particle.speed;
        } else {
          particle.x += Math.cos(particle.angle) * particle.speed;
          particle.y += Math.sin(particle.angle) * particle.speed;

          if (particle.x < 0 || particle.x > canvas.width)
            particle.angle = Math.PI - particle.angle;
          if (particle.y < 0 || particle.y > canvas.height)
            particle.angle = -particle.angle;
        }

        drawHexagon(particle.x, particle.y, particle.size * 2);
        ctx.fillStyle = "rgba(255, 102, 0, 0.4)";
        ctx.fill();

        // Only draw connections if not in flow-up mode
        if (!flowUpStarted) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[j].x - particle.x;
            const dy = particles[j].y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(255, 102, 0, ${
                0.2 - (distance / connectionDistance) * 0.2
              })`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
    };

    const handleScroll = () => {
      const secondSection = document.getElementById('second-section');
      if (secondSection) {
        const rect = secondSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && !flowUpStarted) {
          setFlowUpStarted(true);
          setShowCards(true);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [flowUpStarted]);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-black">
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />
      <div className="relative z-10 min-h-screen max-w-5xl mx-auto px-4 flex flex-col justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-3 min-h-[170px]"
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
            href="#second-section"
            className="border-2 border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600] hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Explore Solutions
          </a>
        </motion.div>
      </div>

      <div id="second-section" className="relative z-10 min-h-screen max-w-5xl mx-auto px-4 text-center">
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <FeatureCard
            icon={CircleDollarSign}
            title="Enhance Your Yield"
            description="Provide liquidity, stake, or utilize recursive borrows with $MCO to generate sustainable yields."
            delay={0.2}
          />
          <FeatureCard
            icon={LineChart}
            title="Track Performance"
            description="Monitor your investments and analyze market trends with our advanced analytics dashboard."
            delay={0.4}
          />
          <FeatureCard
            icon={Zap}
            title="Optimize Strategy"
            description="Leverage AI-powered insights to optimize your investment strategy and maximize returns."
            delay={0.6}
          />
        </div>
      </div>
    </div>
  );
} 