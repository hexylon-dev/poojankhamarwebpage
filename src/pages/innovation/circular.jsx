import React, { useEffect, useState } from 'react';
import { Brain } from 'lucide-react';

function Circle() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const breakoutPoint = 500;
  const mergePoint = 800;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCircleStyles = (offset) => {
    if (scrollPosition < breakoutPoint) {
      return {
        transform: `translate(-50%, -50%) rotate(${offset + scrollPosition}deg) translateX(300px)`,
        transition: 'all 0.3s ease-out',
      };
    } else {
      const progress = Math.min((scrollPosition - breakoutPoint) / (mergePoint - breakoutPoint), 1);
      const moveToBottom = progress * 400;
      const moveToCenter = progress * 300;
      const scale = 1 + progress * 4;
      const opacity = progress < 0.8 ? 1 : 1 - ((progress - 0.8) / 0.2);
      
      return {
        transform: `translate(calc(-50% + ${moveToCenter}px), calc(-50% + ${moveToBottom}px)) scale(${scale})`,
        opacity,
        transition: 'all 0.3s ease-out',
      };
    }
  };

  return (
    <div className="min-h-[200vh] bg-white relative">
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="relative w-[600px] h-[600px]">
          <div 
            className="absolute inset-0 rounded-full border-2 border-dotted border-gray-200"
            style={{
              opacity: scrollPosition < breakoutPoint ? 1 : Math.max(1 - (scrollPosition - breakoutPoint) / 300, 0)
            }}
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 relative">
              <div className="absolute inset-0 border-2 border-gray-800" style={{
                clipPath: 'path("M 40 0 L 120 0 C 180 0 180 80 180 120 L 180 160 C 180 180 160 190 120 190 L 40 190 C 0 190 0 160 0 120 L 0 70 C 0 30 0 0 40 0 Z")'
              }} />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <div className="absolute w-full h-full flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-pink-500 rounded-full"
                        style={{
                          transform: `rotate(${i * 72}deg) translateY(-8px)`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-0 w-full h-1/3 border-2 border-gray-800" />
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="absolute top-1/2 left-1/2 w-12 h-12 bg-pink-500 rounded-full -translate-x-6 -translate-y-6"
            style={getCircleStyles(0)}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-12 h-12 bg-pink-500 rounded-full -translate-x-6 -translate-y-6"
            style={getCircleStyles(180)}
          />

          <div 
            className="absolute bottom-[-200px] left-1/2 w-96 h-96 bg-pink-100 rounded-full -translate-x-1/2"
            style={{
              opacity: scrollPosition > breakoutPoint ? Math.min((scrollPosition - breakoutPoint) / 300, 1) : 0,
              transform: `scale(${Math.min((scrollPosition - breakoutPoint) / 300, 1)})`,
              transition: 'all 0.3s ease-out',
            }}
          />
        </div>
      </div>

      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 text-3xl font-bold text-gray-900" style={{
        opacity: scrollPosition > mergePoint ? 1 : 0,
        transform: `translateY(${scrollPosition > mergePoint ? 0 : 20}px)`,
        transition: 'all 0.3s ease-out',
      }}>
        What Do We Serve?
      </div>
    </div>
  );
}

export default Circle;
