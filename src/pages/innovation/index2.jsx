import React, { useEffect, useState } from 'react';
import { Brain } from 'lucide-react';
import Brain2 from '../../assets/poojan/Group 394.png'

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
                transform: `translate(-50%, -50%) rotate(${offset + scrollPosition / 2}deg) translateX(300px)`,
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
        <div className="min-h-[200vh] bg-black relative">
            <div className="fixed inset-0 flex">
                {/* Left side - Animation */}
                <div className="w-1/2 flex items-center justify-center">
                    <div className="relative w-[600px] h-[600px]">
                        <div
                            className="absolute inset-0 rounded-full border-2 border-dotted border-[#ffff33]"
                            style={{
                                opacity: scrollPosition < breakoutPoint ? 0.3 : Math.max(0.3 - (scrollPosition - breakoutPoint) / 300, 0)
                            }}
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-48 h-48 relative">
                                {/* Removed commented-out code for brevity */}
                            </div>
                        </div>

                        {/* Brain2 Image in the center */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <img
                                src={Brain2}
                                alt="Brain Innovation"
                                className="w-64 h-64 object-contain"
                                style={{
                                    opacity: scrollPosition < breakoutPoint ? 1 : Math.max(1 - (scrollPosition - breakoutPoint) / 300, 0),
                                    transition: 'all 0.3s ease-out',
                                }}
                            />
                        </div>

                        <div
                            className="absolute top-1/2 left-1/2 w-12 h-12 bg-[#ffff33] rounded-full -translate-x-6 -translate-y-6"
                            style={getCircleStyles(0)}
                        />
                        <div
                            className="absolute top-1/2 left-1/2 w-12 h-12 bg-[#ffff33] rounded-full -translate-x-6 -translate-y-6"
                            style={getCircleStyles(180)}
                        />
                    </div>
                </div>

                {/* Right side - Content */}
                <div className="w-1/2 flex flex-col justify-center px-12 relative">
                    {/* Large Background Circle - Now placed behind the content */}
                    <div
                        className="absolute -left-1/2 -bottom-1/2 w-[800px] h-[800px] bg-[#ffff33] rounded-full opacity-10 z-0"
                        style={{
                            opacity: scrollPosition > breakoutPoint ? Math.min((scrollPosition - breakoutPoint) / 300, 0.1) : 0,
                            transform: `scale(${Math.min((scrollPosition - breakoutPoint) / 300, 1)})`,
                            transition: 'all 0.3s ease-out',
                        }}
                    />

                    {/* First Section */}
                    <div className="mb-32 relative z-10" style={{
                        opacity: scrollPosition < breakoutPoint ? 1 : 0,
                        transform: `translateY(${scrollPosition < breakoutPoint ? 0 : 20}px)`,
                        transition: 'all 0.3s ease-out',
                    }}>
                        <h1 className="text-4xl font-bold mb-6 text-[#ffff33]">
                            🚀 Innovation Hub – A Powerhouse for Game-Changing Ideas
                        </h1>
                        <p className="text-xl text-white leading-relaxed">
                            Turn your vision into reality! Share your innovative ideas, collaborate with like-minded creators, and be part of the next big breakthrough. Join our idea-sharing platform to shape future technology, inspire creativity, and drive meaningful change.
                        </p>
                    </div>

                    {/* Second Section */}
                    <div className="relative z-10" style={{
                        opacity: scrollPosition > breakoutPoint ? 1 : 0,
                        transform: `translateY(${scrollPosition > breakoutPoint ? 0 : 20}px)`,
                        transition: 'all 0.3s ease-out',
                    }}>
                        <h2 className="text-3xl font-bold mb-8 text-[#ffff33]">
                            🚀 Why Share Your Ideas on the Innovation Hub?
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <span className="text-2xl text-[#ffff33]">✅</span>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-[#ffff33]">Showcase Your Creativity</h3>
                                    <p className="text-white">Put your unique ideas in front of a community that values innovation and futuristic thinking.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="text-2xl text-[#ffff33]">🌍</span>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-[#ffff33]">Be Part of a Global Network</h3>
                                    <p className="text-white">Engage with like-minded visionaries and explore fresh perspectives to refine and enhance your ideas.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="text-2xl text-[#ffff33]">🚀</span>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-[#ffff33]">Accelerate Your Growth</h3>
                                    <p className="text-white">Turn your concepts into reality by receiving valuable feedback, mentorship, and exposure to industry experts.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="text-2xl text-[#ffff33]">🔍</span>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-[#ffff33]">Gain Visibility & Recognition</h3>
                                    <p className="text-white">Stand out as a thought leader and make your mark in the world of innovation and technology.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="text-2xl text-[#ffff33]">💡</span>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-[#ffff33]">Shape the Future</h3>
                                    <p className="text-white">Every great idea has the potential to disrupt industries and transform the world—yours could be next!</p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-8 text-xl font-semibold text-[#ffff33]">
                            ✨ Start your innovation journey today—share your idea now!
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Circle;
