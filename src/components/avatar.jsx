import React, { useRef, useMemo, useState , useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import ReactMarkdown from 'react-markdown'
import MarkdownRenderer from "./MarkdownRenderer";
let LastIndex = null;
const API_BASE_URL = 'http://192.168.1.22:6001'

const api = {
  streamResponse: async ({ role, content }, onChunk, onError, onComplete, abortController) => {
    const { signal } = abortController; // Use the signal from the provided AbortController

    try {
      const response = await fetch(`${API_BASE_URL}/generate/stream`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role, content }),
        // signal, // Pass the abort signal to fetch
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          onComplete();
          break;
        }

        buffer += decoder.decode(value, { stream: true });

        onChunk(buffer);

        // If the abort signal is triggered, stop the stream
        if (signal.aborted) {
          reader.cancel();
          onComplete();
          break;
        }
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Streaming aborted');
      } else {
        onError(error);
      }
    }
  },
};

// Usage
// const abortController = new AbortController(); // Correct way to create an AbortController

// // When you want to stop the stream, call abort() on the controller
// abortController.abort(); // This will trigger the abortSignal

// // Call the streamResponse function, passing the abortController
// api.streamResponse(
//   {
//     role: 'user',
//     content: 'Hello, World!',
//   },
//   (chunk) => { console.log(chunk); },
//   (error) => { console.error(error); },
//   () => { console.log('Streaming complete!'); },
//   abortController // Pass the abortController (not signal)
// );

  export function ChatScreen({ closeChat, initialMessage = '' }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const [isStreaming, setIsStreaming] = useState(false);
    const [abortController, setAbortController] = useState(null);
    const [isLoadingMsg, setIsLoadingMsg] = useState(false);
    const [lastIndex, setLastIndex] = useState(null);
  
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    useEffect(() => {
      scrollToBottom();
    }, [messages]);
  
    useEffect(() => {
      if (initialMessage.trim()) {
        setNewMessage(initialMessage);
        handleSendMessage();
      }
    }, [initialMessage]);
  
    const handleStreamResponse = ({ role, content }, onChunk, onError = () => {}, onComplete, controller) => {
      setIsStreaming(true);
      api.streamResponse(
        { role, content },
        (data) => {
          console.log('Data:', data);
          onChunk(data);
        },
        (error) => {
          console.error('Streaming error:', error);
          onError(error);
          setIsStreaming(false);
        },
        onComplete, controller
      );
    };
  
    const handleSendMessage = async () => {
      if (newMessage.trim() && !isLoading) {
        setMessages((prev) => [
          ...prev,
          { id: prev.length + 1, text: newMessage, sender: 'user' },
        ]);
        setIsLoadingMsg(true);
  
        const controller = new AbortController();
        setAbortController(controller);
  
        const messageToSend = newMessage;
        setNewMessage('');
  
        let fullMessage = '';
  
        await handleStreamResponse(
          { role: 'user', content: messageToSend },
          (data) => {
            setIsLoadingMsg(false);
            fullMessage = data;
            if (lastIndex === null) {
              setLastIndex(messages.length);
              setMessages((prev) => [
                ...prev,
                { id: prev.length + 1, text: fullMessage, sender: 'assistant' },
              ]);
            } else {
              setMessages((prev) => [
                ...prev.slice(0, -1),
                { id: lastIndex, text: fullMessage, sender: 'assistant' },
              ]);
            }
          },
          (error) => {
            console.error('Error during streaming', error);
          },
          () => {
            setLastIndex(null);
            setAbortController(null);
            setIsStreaming(false);
          },
          controller
        );
      }
    };
  
    const handlePauseStream = () => {
      console.log("call pus")
      if (abortController) {
        abortController.abort();
        setAbortController(null);
        setIsStreaming(false);
      }
    };
  
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-20 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-lg text-white shadow-xl">
          <div className="flex items-center justify-between p-4 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MWSML4vrVMASbwcXtBNuWIf19oYgmy.png"
                  alt="Company Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold">Chat with Hex</h2>
            </div>
            <button
              onClick={closeChat}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
  
          <div className="h-[400px] p-4 space-y-4 overflow-y-auto custom-scrollbar">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender !== 'user' && (
                  <div className="h-[50px] w-[50px] rounded-full overflow-hidden flex-shrink-0 mr-3">
                    <ShowAvatar />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${message.sender === 'user' ? 'bg-[#FF6600] text-white' : 'bg-[#252525] text-gray-200'}`}
                >
                  <MarkdownRenderer content={message.text} />
                </div>
              </div>
            ))}
  
            {isLoadingMsg && (
              <div className="flex space-y-4 flex-col">
                <div className="flex items-start space-x-3">
                  <div className="h-[50px] w-[50px] rounded-full bg-gray-700 animate-pulse" />
                  <div className="bg-gray-700 animate-pulse rounded-lg p-3 w-[60%] h-[20px]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
  
          <div className="p-4 border-t border-zinc-800">
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 transition-colors"
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isLoading}
              />
              <button
                onClick={isStreaming ? handlePauseStream : handleSendMessage}
                disabled={isLoading}
                className={`bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
              >
                {isStreaming ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="6" y1="4" x2="6" y2="20" />
                    <line x1="18" y1="4" x2="18" y2="20" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  

function ParticleSystem({ isLoading, onTransitionComplete }) {
  const pointsRef = useRef(null);
  const targetPositions = useRef(null);
  const originalPositions = useRef(null);
  const animationProgress = useRef(0);
  const time = useRef(0);
  const particles = useMemo(() => {
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const hexagonPositions = new Float32Array(particleCount * 3);
  
    // Convert hex color #FF6600 to RGB values
    const color = new THREE.Color("#FF6600");
  
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 0.8 + Math.random() * 0.2;
  
      // Set random sphere-like positions
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi);
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
  
      // Calculate hexagon positions
      const sideIndex = Math.floor(i / (particleCount / 6));
      const t = (i % (particleCount / 6)) / (particleCount / 6);
      const angle = (sideIndex / 6) * Math.PI * 2;
      const nextAngle = ((sideIndex + 1) / 6) * Math.PI * 2;
      const hexRadius = 1.5;
  
      hexagonPositions[i * 3] =
        THREE.MathUtils.lerp(Math.cos(angle), Math.cos(nextAngle), t) *
        hexRadius;
      hexagonPositions[i * 3 + 1] =
        THREE.MathUtils.lerp(Math.sin(angle), Math.sin(nextAngle), t) *
        hexRadius;
      hexagonPositions[i * 3 + 2] = 0;
  
      // Set color using Three.js Color object
      colors[i * 3] = color.r;     // Red
      colors[i * 3 + 1] = color.g; // Green
      colors[i * 3 + 2] = color.b; // Blue
    }
  
    originalPositions.current = positions.slice();
    targetPositions.current = hexagonPositions;
  
    return { positions, colors, particleCount };
  }, []);
  
  useFrame(() => {
    if (pointsRef.current) {
      time.current += 0.01;
      const positions = pointsRef.current.geometry.attributes.position.array;
  
      if (isLoading) {
        animationProgress.current += (1 - animationProgress.current) * 0.05;
      } else {
        animationProgress.current += (0 - animationProgress.current) * 0.05;
      }
  
      for (let i = 0; i < particles.particleCount; i++) {
        const idx = i * 3;
        const originalX = originalPositions.current[idx];
        const originalY = originalPositions.current[idx + 1];
        const originalZ = originalPositions.current[idx + 2];
  
        const targetX = targetPositions.current[idx];
        const targetY = targetPositions.current[idx + 1];
        const targetZ = targetPositions.current[idx + 2];
  
        positions[idx] = THREE.MathUtils.lerp(
          originalX,
          targetX,
          animationProgress.current
        );
        positions[idx + 1] = THREE.MathUtils.lerp(
          originalY,
          targetY,
          animationProgress.current
        );
        positions[idx + 2] = THREE.MathUtils.lerp(
          originalZ,
          targetZ,
          animationProgress.current
        );
      }
  
      pointsRef.current.rotation.z += 0.005;
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
  
      if (animationProgress.current > 0.99 && isLoading) {
        onTransitionComplete();
      }
    }
  });
  

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.particleCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        color="#FF6600"
      />
    </points>
  );
}

export function ShowAvatar() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <ParticleSystem isLoading={false} onTransitionComplete={() => {}} />
        </Canvas>
      </div>
    </>
  );
}





export default function ParticleAvatar() {
  const avatarRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleTransitionComplete = () => {
    setShowChat(true);
  };

  const closeChat = () => {
    const chatElement = document.querySelector('.genie-effect');
    chatElement.classList.add('closing');
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setShowChat(false);
      setIsLoading(false);
    }, 500); // Match this with animation duration
  };

  // Check for phone screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed (768px for phones)
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        setIsScrolled(window.scrollY > 0); // Only set isScrolled on mobile
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const handleAvatarClick = () => {
    const avatarElement = avatarRef.current;
    const avatarRect = avatarElement.getBoundingClientRect();
    
    // Store more precise positioning variables
    document.documentElement.style.setProperty('--avatar-bottom', `${window.innerHeight - avatarRect.bottom}px`);
    document.documentElement.style.setProperty('--avatar-right', `${window.innerWidth - avatarRect.right}px`);
    document.documentElement.style.setProperty('--avatar-width', `${avatarRect.width}px`);
    document.documentElement.style.setProperty('--avatar-height', `${avatarRect.height}px`);
    document.documentElement.style.setProperty('--avatar-x', `${avatarRect.left}px`);
    document.documentElement.style.setProperty('--avatar-y', `${avatarRect.top}px`);
    
    setIsLoading(true);
  };

  return (
    <>
      <div
        ref={avatarRef}
        className={`fixed w-[200px] h-[200px] z-10 transition-all duration-500 ${
          isMobile && isScrolled
            ? "top-[-60px] left-1/2 transform -translate-x-1/2 z-50"
            : "bottom-0 right-0"
        }`}
      >
        <div
          className="relative w-full h-full flex items-center justify-center cursor-pointer"
          onClick={handleAvatarClick}
        >
          {!showChat && (
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
              <ambientLight intensity={0.5} />
              <ParticleSystem
                isLoading={isLoading}
                onTransitionComplete={handleTransitionComplete}
              />
            </Canvas>
          )}
        </div>
      </div>
      {showChat && (
        <div className={`genie-effect fixed inset-0 z-50 ${isMobile ? 'mobile-view' : ''}`}>
          <div className="genie-content">
            <div className="genie-inner">
              <div className="chat-container bg-black/80 backdrop-blur-sm w-full max-w-2xl mx-auto">
                <ChatScreen closeChat={closeChat} />
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .genie-effect {
          perspective: 2000px;
          transform-style: preserve-3d;
          pointer-events: none;
        }

        .genie-content {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .genie-inner {
          width: 100%;
          height: 100%;
          transform-origin: bottom right;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: genieEffect 0.7s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .chat-container {
          pointer-events: auto;
          transform-origin: bottom right;
          animation: genieCurve 0.7s cubic-bezier(0.2, 1, 0.3, 1);
        }

        @keyframes genieEffect {
          0% {
            clip-path: polygon(
              100% 100%,
              100% 100%,
              100% 100%,
              100% 100%
            );
            transform: 
              translate3d(var(--avatar-right), var(--avatar-bottom), 0)
              scale3d(0.1, 0.1, 1);
          }
          30% {
            clip-path: polygon(
              50% 100%,
              100% 100%,
              100% 0%,
              80% 0%
            );
          }
          100% {
            clip-path: polygon(
              0% 100%,
              100% 100%,
              100% 0%,
              0% 0%
            );
            transform: 
              translate3d(0, 0, 0)
              scale3d(1, 1, 1);
          }
        }

        @keyframes genieCurve {
          0% {
            border-radius: 0 0 50% 0;
            transform: scaleX(0.1);
          }
          50% {
            border-radius: 0 0 30% 0;
            transform: scaleX(1.2);
          }
          100% {
            border-radius: 16px;
            transform: scaleX(1);
          }
        }

        .genie-effect.closing .genie-inner {
          animation: genieEffectClose 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .genie-effect.closing .chat-container {
          animation: genieCurveClose 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes genieEffectClose {
          0% {
            clip-path: polygon(
              0% 100%,
              100% 100%,
              100% 0%,
              0% 0%
            );
            transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
          }
          70% {
            clip-path: polygon(
              50% 100%,
              100% 100%,
              100% 0%,
              80% 0%
            );
          }
          100% {
            clip-path: polygon(
              100% 100%,
              100% 100%,
              100% 100%,
              100% 100%
            );
            transform: 
              translate3d(var(--avatar-right), var(--avatar-bottom), 0)
              scale3d(0.1, 0.1, 1);
          }
        }

        @keyframes genieCurveClose {
          0% {
            border-radius: 16px;
            transform: scaleX(1);
          }
          50% {
            border-radius: 0 0 30% 0;
            transform: scaleX(1.2);
          }
          100% {
            border-radius: 0 0 50% 0;
            transform: scaleX(0.1);
          }
        }

        /* Mobile animations */
        .mobile-view .genie-inner {
          animation: mobileGenieEffect 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: top center;
        }

        .mobile-view .chat-container {
          transform-origin: top center;
          animation: mobileCurve 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes mobileGenieEffect {
          0% {
            clip-path: polygon(
              0 0,
              100% 0,
              100% 0,
              0 0
            );
            transform: translateY(-100%);
          }
          100% {
            clip-path: polygon(
              0 0,
              100% 0,
              100% 100%,
              0 100%
            );
            transform: translateY(0);
          }
        }

        @keyframes mobileCurve {
          0% {
            border-radius: 0 0 24px 24px;
            transform: translateY(-100%);
          }
          100% {
            border-radius: 0;
            transform: translateY(0);
          }
        }

        /* Mobile closing animations */
        .mobile-view.closing .genie-inner {
          animation: mobileGenieEffectClose 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-view.closing .chat-container {
          animation: mobileCurveClose 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes mobileGenieEffectClose {
          0% {
            clip-path: polygon(
              0 0,
              100% 0,
              100% 100%,
              0 100%
            );
            transform: translateY(0);
          }
          100% {
            clip-path: polygon(
              0 0,
              100% 0,
              100% 0,
              0 0
            );
            transform: translateY(-100%);
          }
        }

        @keyframes mobileCurveClose {
          0% {
            border-radius: 0;
            transform: translateY(0);
          }
          100% {
            border-radius: 0 0 24px 24px;
            transform: translateY(-100%);
          }
        }

        /* Make chat container full screen on mobile */
        @media (max-width: 768px) {
          .chat-container {
            max-width: 100%;
            height: 100vh;
            border-radius: 0;
          }
        }
      `}</style>
    </>
  );
}


