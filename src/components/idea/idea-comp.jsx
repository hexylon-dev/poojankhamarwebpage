import React, { useState, useEffect, useRef , useMemo } from 'react';
import { FiZap as Zap, FiUsers as Users, FiTarget as Target } from 'react-icons/fi';

const AnimatedHeader = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [heroAnimation, setHeroAnimation] = useState({
    title: false,
    subtitle: false,
    description: false
  });
  
  const [scrollAnimation, setScrollAnimation] = useState({
    feature1: false,
    feature2: false,
    feature3: false,
    feature4: false
  });
  
  const featuresRef = useRef(null);
  const observer = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: clientX - rect.left,
      y: clientY - rect.top
    });
  };

  useEffect(() => {
    setHeroAnimation({
      title: true,
      subtitle: true,
      description: true
    });

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setScrollAnimation({
            feature1: true,
            feature2: true,
            feature3: true,
            feature4: true
          });
        }
      });
    }, { threshold: 0.5 });

    if (featuresRef.current) {
      observer.current.observe(featuresRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gray-950 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-yellow-900/20"
          style={{
            transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`,
            filter: 'blur(100px)',
            opacity: 0.6
          }}
        />
        
        <div 
          className="absolute w-full h-full"
          style={{
            background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 215, 0, 0.15), transparent)`,
            opacity: 0.8
          }}
        />
        {/* boxes */}
        {/* <div 
          className="absolute inset-0 perspective-1000"
          style={{
            transform: `perspective(1000px) rotateX(${5 + mousePos.y * 0.01}deg) rotateY(${-5 - mousePos.x * 0.01}deg)`
          }}
        >
          <div className="grid grid-cols-10 gap-4 p-8 absolute inset-0 transform translate-z-0">
            {Array.from({ length: 10 }).map((_, i) => {
              const row = Math.floor(i / 10);
              const col = i % 10;
              const distance = Math.sqrt(
                Math.pow((col / 10) * window.innerWidth - mousePos.x, 2) + 
                Math.pow((row / 10) * window.innerHeight - mousePos.y, 2)
              );
              
              const waveIntensity = Math.max(0, 1 - distance / 300);
              const phase = Date.now() * 0.02 - distance * 0.1;
              const waveHeight = Math.sin(phase) * 15 * waveIntensity;
              const baseElevation = 30 - distance * 0.05;
              const elevation = Math.max(0, baseElevation + waveHeight);

              return (
                <div 
                  key={i}
                  className="bg-gradient-to-br from-yellow-500/5 to-yellow-700/5 border border-yellow-500/10 rounded-md backdrop-blur-sm"
                  style={{
                    height: '100%',
                    transform: `translateZ(${elevation}px) scale(${1 + elevation * 0.01})`,
                    transition: 'transform 0.3s ease-out',
                    opacity: 0.1 + (elevation * 0.03)
                  }}
                />
              );
            })}
          </div>
        </div> */}
        {/* <Grid3DEffect /> */}
        
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => {
            const size = Math.random() * 4 + 2;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const speed = Math.random() * 50 + 30;
            
            return (
              <div
                key={i}
                className="absolute rounded-full bg-yellow-400 mt-0"
                style={{
                  width: size,
                  height: size,
                  left: `${x}%`,
                  top: `${y}%`,
                  opacity: Math.random() * 0.3 + 0.2,
                  filter: 'blur(1px)',
                  animation: `float-up ${speed}s infinite linear ${Math.random() * 10}s`,
                  transform: `translate(${(mousePos.x - window.innerWidth/2) * 0.01}px, ${(mousePos.y - window.innerHeight/2) * 0.01}px)`
                }}
              />
            );
          })}
        </div>
        
        <div 
          className="absolute top-0 left-0 w-full opacity-30"
          style={{
            background: `linear-gradient(
              ${45 + mousePos.x * 0.05}deg, 
              transparent, 
              rgba(255, 255, 255, 0.1) ${50 + mousePos.y * 0.02}%, 
              transparent
            )`
          }}
        />
      </div>

      <div 
        className="text-center relative z-10 mt-44 flex flex-col justify-center px-4"
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 -z-10 grid grid-cols-12 grid-rows-6 gap-4 opacity-10">
          {Array.from({ length: 12 * 6 }).map((_, i) => (
            <div 
              key={i}
              className="bg-white/10 rounded-lg transition-all duration-500"
              style={{
                transform: `perspective(1000px)
                   rotateX(${(mousePos.y / window.innerHeight) * 20 - 10}deg)
                  rotateY(${(mousePos.x / window.innerWidth) * 20 - 10}deg)
                  scale(${1 + (Math.sin(i * 0.5 + Date.now() * 0.002) * 0.1)})`
              }}
            />
          ))}
        </div>

        <h1
          className={`text-5xl md:text-8xl font-bold mb-6 transition-all duration-1000 transform 
            ${heroAnimation.title ? 
              'translate-y-0 opacity-100 animate-float' : 
              'translate-y-10 opacity-0'}`}
        >
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent
                          relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-200 before:animate-text-shine
                          before:bg-clip-text before:text-transparent">
            Innovator's Playbook
            <br /> 
            <span className="inline-block mt-4 text-6xl md:text-7xl font-medium">Bold Ideas, Real Impact</span>
          </span>
        </h1>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 transform ${
            heroAnimation.description ? 
            'translate-y-0 opacity-100' : 
            'translate-y-10 opacity-0'}`}
        >
          <p className="text-2xl text-gray-300 leading-relaxed font-light drop-shadow-md">
            Where Visionary Ideas Become{' '}
            <span className="font-bold text-yellow-400 relative inline-block">
              <span className="relative">
                Global Innovations
              </span>
            </span>
          </p>
        </div>

        <div className={`mt-14 transition-all duration-1000 delay-700 transform ${
          heroAnimation.description ? 
          'translate-y-0 opacity-100' : 
          'translate-y-10 opacity-0'}`}
        >
          <button className="px-10 py-5 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 text-black 
            font-extrabold rounded-2xl shadow-2xl hover:shadow-glow transition-all duration-300 transform 
            hover:scale-105 hover:-translate-y-1 relative overflow-hidden group animate-gradient-x">
            <span className="relative z-10">Launch Your Idea 🚀</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
              -skew-x-12 group-hover:animate-shine"/>
          </button>
        </div>
      </div>
      
      <div ref={featuresRef} className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-yellow-300 to-yellow-500 
          bg-clip-text text-transparent animate-gradient-text">
          Why Innovation Hub?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10 px-8">
          {[ 
            [Zap, "Your Idea. Your Ownership.", "Every idea you share stays 100% yours. We ensure strict confidentiality and protect your intellectual property."],
            [Users, "A Trusted Network", "Your idea isn't just seen; it's valued. Our platform connects you with like-minded innovators who can help shape, refine, and enhance your vision."],
            [Target, "Attract Opportunities", "Game-changing ideas deserve the right exposure. When you submit your concept, it can gain traction among industry experts, collaborators, and future partners."]
          ].map(([Icon, title, text], index) => (
            <div 
              key={index}
              className={`bg-gray-900/90 p-10 rounded-3xl shadow-2xl backdrop-blur-lg transition-all duration-700 transform 
                ${scrollAnimation[`feature${index + 1}`] ? 
                  'translate-y-0 opacity-100 rotate-0 scale-100' : 
                  'translate-y-20 opacity-0 rotate-5 scale-90'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="h-24 w-24 rounded-3xl bg-yellow-400/20 flex items-center justify-center mb-8 mx-auto
                transition-all duration-500 group-hover:bg-yellow-400/30 group-hover:rotate-[15deg] 
                group-hover:scale-110 shadow-lg">
                <Icon className="w-12 h-12 text-yellow-400" />
              </div>

              <h3 className="text-2xl font-bold mb-5 text-center bg-gradient-to-r from-yellow-400 to-yellow-300 
                bg-clip-text text-transparent">
                {title}
              </h3>
              <p className="text-gray-300 text-center text-lg leading-relaxed font-light">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }

        @keyframes text-shine {
          0% { opacity: 0; left: -100%; }
          40%, 100% { opacity: 1; left: 100%; }
        }

        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(-100%); opacity: 0.3; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient-text {
          background-size: 300% 300%;
          animation: gradient-text 8s ease infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-text 3s ease infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default AnimatedHeader;



const Grid3DEffect = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Pre-calculate grid elements to improve performance
  const gridElements = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => {
      const row = Math.floor(i / 10);
      const col = i % 10;
      return { row, col, id: i };
    });
  }, []);

  return (
    <div 
      className="absolute inset-0 perspective-1000"
      style={{
        transform: `perspective(1000px) rotateX(${5 + mousePos.y * 0.005}deg) rotateY(${-5 - mousePos.x * 0.005}deg)`
      }}
    >
      <div className="grid grid-cols-10 gap-4 p-8 absolute inset-0 transform translate-z-0">
        {gridElements.map(({ row, col, id }) => {
          // Optimize calculations
          const normalizedX = (col / 10) * (typeof window !== 'undefined' ? window.innerWidth : 1000);
          const normalizedY = (row / 10) * (typeof window !== 'undefined' ? window.innerHeight : 800);
          
          const distance = Math.sqrt(
            Math.pow(normalizedX - mousePos.x, 2) + 
            Math.pow(normalizedY - mousePos.y, 2)
          ) * 0.5;
          
          const waveIntensity = Math.max(0, 1 - distance / 150);
          const phase = Date.now() * 0.01 - distance * 0.05;
          const waveHeight = Math.sin(phase) * 10 * waveIntensity;
          const baseElevation = 20 - distance * 0.03;
          const elevation = Math.max(0, baseElevation + waveHeight);
          
          return (
            <div
              key={id}
              className="bg-gradient-to-br from-yellow-500/5 to-yellow-700/5 border border-yellow-500/10 rounded-md backdrop-blur-sm"
              style={{
                height: '100%',
                transform: `translateZ(${elevation}px) scale(${1 + elevation * 0.005})`,
                transition: 'transform 0.15s ease-out',
                opacity: 0.1 + (elevation * 0.02)
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

