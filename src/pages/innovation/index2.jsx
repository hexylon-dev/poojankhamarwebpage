import React, { useState, useEffect, useRef } from 'react';
import { Brain } from 'lucide-react';
import Brain2 from '../../assets/poojan/Group 394.png';

function InnovationHub() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState(1);
  const [animationTime, setAnimationTime] = useState(0);
  const canvasRef = useRef(null);
  
  useEffect(() => {
    // Handle scroll for section transitions
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Update active section based on scroll position
      if (position < 400) {
        setActiveSection(1);
      } else {
        setActiveSection(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Add automated animation timer
    const animationInterval = setInterval(() => {
      setAnimationTime(prev => prev + 1);
    }, 50);
    
    // Neural network animation setup
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const particles = [];
      const connections = [];
      const particleCount = 25;
      
      // Initialize particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 1 + Math.random() * 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          hue: 55, // Yellow base color
          brightness: 50 + Math.random() * 30
        });
      }
      
      // Create connections between nearby particles
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          connections.push({
            from: i,
            to: j,
            active: false,
            pulseTime: Math.random() * 100,
            pulseSpeed: 0.05 + Math.random() * 0.1
          });
        }
      }
      
      // Animation function
      const animate = () => {
        // Clear canvas with slight fade effect for trail
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw connections
        connections.forEach(conn => {
          const p1 = particles[conn.from];
          const p2 = particles[conn.to];
          
          // Calculate distance
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only draw connections if particles are close enough
          if (distance < 80) {
            // Update pulse timing
            conn.pulseTime += conn.pulseSpeed;
            
            // Pulse effect (0 to 1)
            const pulseEffect = Math.abs(Math.sin(conn.pulseTime));
            
            // Line opacity based on distance and pulse
            const opacity = (1 - distance / 80) * 0.8 * pulseEffect;
            
            // Draw line with glow
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(55, 100%, ${p1.brightness}%, ${opacity})`;
            ctx.lineWidth = 0.5 + pulseEffect;
            ctx.stroke();
            
            // Draw pulse moving along the line
            const pulsePosition = (Math.sin(conn.pulseTime * 0.5) + 1) / 2; // 0 to 1
            const pulseX = p1.x + dx * pulsePosition;
            const pulseY = p1.y + dy * pulsePosition;
            
            // Draw pulse glow
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 1 + pulseEffect * 3, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(55, 100%, 80%, ${pulseEffect * 0.7})`;
            ctx.fill();
          }
        });
        
        // Update and draw particles
        particles.forEach(p => {
          // Move with slight random variation
          p.x += p.speedX + (Math.random() - 0.5) * 0.2;
          p.y += p.speedY + (Math.random() - 0.5) * 0.2;
          
          // Bounce off walls
          if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
          if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
          
          // Keep particles inside canvas
          p.x = Math.max(0, Math.min(canvas.width, p.x));
          p.y = Math.max(0, Math.min(canvas.height, p.y));
          
          // Particle pulsing effect
          const pulseSize = p.size * (1 + Math.sin(animationTime * 0.03 + p.x * 0.01) * 0.3);
          
          // Draw glow
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulseSize * 4);
          gradient.addColorStop(0, `hsla(55, 100%, ${p.brightness + 30}%, 0.8)`);
          gradient.addColorStop(1, `hsla(55, 100%, ${p.brightness}%, 0)`);
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, pulseSize * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(55, 100%, ${p.brightness + 30}%)`;
          ctx.fill();
        });
        
        // Occasionally create energy burst from center
        if (Math.random() < 0.02) {
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          
          ctx.beginPath();
          const burstRadius = 5 + Math.random() * 15;
          const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, burstRadius);
          gradient.addColorStop(0, 'rgba(255, 255, 80, 0.8)');
          gradient.addColorStop(1, 'rgba(255, 255, 80, 0)');
          
          ctx.arc(centerX, centerY, burstRadius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
        
        requestAnimationFrame(animate);
      };
      
      // Start animation
      animate();
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(animationInterval);
    };
  }, []);

  useEffect(() => {
    // Resize canvas when window resizes
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-[200vh] bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-2 border-[#ffff33] opacity-10"
            style={{
              transform: `scale(${1 + scrollPosition * 0.001}) rotate(${scrollPosition * 0.05}deg)`,
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border-2 border-[#ffff33] opacity-5"
            style={{
              transform: `scale(${1 + scrollPosition * 0.0005}) rotate(-${scrollPosition * 0.03}deg)`,
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-[#ffff33] opacity-5 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `scale(${1 + scrollPosition * 0.002})`,
            }}
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-40 relative z-10">
        {/* Header with animated brain */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold text-[#ffff33] mb-6 leading-tight">
              Innovation Hub
              <span className="block text-3xl mt-2 font-normal">Where Ideas Transform the Future</span>
            </h1>
            <div className="w-20 h-1 bg-[#ffff33] mb-6"></div>
            <p className="text-white text-lg leading-relaxed max-w-xl">
              Turn your vision into reality! Share your innovative ideas, collaborate with like-minded creators, 
              and be part of the next big breakthrough.
            </p>
          </div>
          
          <div className="relative w-64 h-96 md:w-80 md:h-96 flex flex-col items-center">
            {/* Brain Image with enhanced glow */}
            <div className="relative z-10 mb-4">
              {/* Glow effect behind brain */}
              <div 
                className="absolute inset-0 rounded-full bg-[#ffff33]"
                style={{
                  filter: 'blur(20px)',
                  opacity: 0.2 + Math.sin(animationTime * 0.05) * 0.1,
                  transform: 'scale(1.2)',
                }}
              ></div>
              
              <img
                src={Brain2}
                alt="Brain Innovation"
                className="w-48 h-48 object-contain relative z-10"
                style={{
                  transform: `translateY(${Math.sin(animationTime * 0.05) * 5}px)`,
                }}
              />
            </div>
            
            {/* NEW NEURAL NETWORK ANIMATION below the brain image */}
            <div className="w-full h-40 relative mt-8">
              <canvas
                ref={canvasRef}
                className="w-full h-full rounded-lg"
                style={{
                  boxShadow: '0 0 20px rgba(255, 255, 51, 0.2)',
                }}
              ></canvas>
              
              {/* Overlay gradients to enhance effect */}
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 255, 51, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
                  mixBlendMode: 'screen',
                }}
              ></div>
              
              {/* Central energy beam */}
              <div 
                className="absolute top-1/2 left-1/2 w-1 h-full bg-[#ffff33] -translate-x-1/2 -translate-y-1/2"
                style={{
                  filter: 'blur(3px)',
                  opacity: 0.3 + Math.sin(animationTime * 0.1) * 0.2,
                  boxShadow: '0 0 15px 5px rgba(255, 255, 51, 0.5)',
                  transform: `scaleY(${0.6 + Math.sin(animationTime * 0.05) * 0.4})`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Main sections with animated transitions */}
        <div className="space-y-32">
          {/* First Section */}
          <div 
            className="transition-all duration-700"
            style={{
              opacity: activeSection === 1 ? 1 : 0.3,
              transform: `translateY(${activeSection === 1 ? 0 : 30}px)`,
            }}
          >
            <h2 className="text-4xl font-bold mb-8 text-[#ffff33]">
              🚀 Innovation Hub – A Powerhouse for Game-Changing Ideas
            </h2>
            <div className="bg-black/50 backdrop-blur-sm border border-[#ffff33]/20 rounded-xl p-8">
              <p className="text-xl text-white leading-relaxed">
                Join our idea-sharing platform to shape future technology, inspire creativity, and drive meaningful change.
                Our community of innovators, creators, and visionaries is ready to help you take your ideas to the next level.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {['Connect', 'Create', 'Transform'].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-[#ffff33]/10 rounded-lg p-6 border border-[#ffff33]/20 hover:bg-[#ffff33]/15 transition-all"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ffff33]/20 mb-4">
                      <span className="text-2xl text-[#ffff33]">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#ffff33] mb-2">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div 
            className="transition-all duration-700"
            style={{
              opacity: activeSection === 2 ? 1 : 0.3,
              transform: `translateY(${activeSection === 2 ? 0 : 30}px)`,
            }}
          >
            <h2 className="text-3xl font-bold mb-8 text-[#ffff33]">
              🚀 Why Share Your Ideas on the Innovation Hub?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "✅",
                  title: "Showcase Your Creativity",
                  desc: "Put your unique ideas in front of a community that values innovation and futuristic thinking."
                },
                {
                  icon: "🌍",
                  title: "Be Part of a Global Network",
                  desc: "Engage with like-minded visionaries and explore fresh perspectives to refine and enhance your ideas."
                },
                {
                  icon: "🚀",
                  title: "Accelerate Your Growth",
                  desc: "Turn your concepts into reality by receiving valuable feedback, mentorship, and exposure to industry experts."
                },
                {
                  icon: "🔍",
                  title: "Gain Visibility & Recognition",
                  desc: "Stand out as a thought leader and make your mark in the world of innovation and technology."
                },
                {
                  icon: "💡",
                  title: "Shape the Future",
                  desc: "Every great idea has the potential to disrupt industries and transform the world—yours could be next!"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-black to-[#ffff33]/10 border border-[#ffff33]/20 rounded-xl p-6 hover:shadow-[0_0_15px_rgba(255,255,51,0.1)] transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#ffff33]">{item.title}</h3>
                      <p className="text-white">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-block bg-[#ffff33] text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-[#ffff33]/90 transition-all cursor-pointer shadow-[0_0_20px_rgba(255,255,51,0.5)]">
                ✨ Start your innovation journey today!
              </div>
              <p className="mt-4 text-[#ffff33] italic">
                Your brilliant idea could change the world
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnovationHub;