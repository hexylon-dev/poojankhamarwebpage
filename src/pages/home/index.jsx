import React, { useEffect, useState } from "react";
import HeroSection from "../../components/home/HeroSection";
import JourneyPage from "../../components/home/Journey";
import LatestLab from "../../components/home/LatestLab";
import ReadyShapeFuture from "../../components/home/ReadyToShapFuture";
import ReimagineBoundary from "../../components/home/ReimagineBoundary";
import IdeasCard from "../../components/home/IdeasCard";
import Testimonials from "../../components/home/Testimonials";
import "../../styles/ShimmerButton.css"
import "../../styles/animations.css"


function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the position of the second card
  const calculateCardPosition = () => {
    const cardHeight = 500; // Height of your cards
    const scrollThreshold = 600; // Adjust this based on when you want the stacking to complete

    // Start with full offset (cards separated)
    const offset = cardHeight + 40; // Card height + margin

    // Reduce offset as user scrolls
    const reduction = Math.min(
      offset,
      (scrollPosition / scrollThreshold) * offset
    );
    return offset - reduction;
  };

  const secondCardOffset = calculateCardPosition();

  return (
    <>
      <HeroSection />
      <JourneyPage />

      <div className="min-h-screen bg-black">
        <div className="w-full max-w-7xl mx-auto px-4 py-16 ">
          <h1 className="text-6xl font-bold text-[#ffff33] text-center mb-8 leading-tight ">
            Highlighted Sections
          </h1>
        </div>
        <div className="sticky top-20 z-10">
          <ReimagineBoundary />
        </div>
        <div
          className="sticky top-20 z-20 transition-transform duration-300"
          style={{
            transform: `translateY(${secondCardOffset}px)`,
          }}
        >
          <IdeasCard />
        </div>
        <div className="h-[40vh]"></div>
      </div>
      <LatestLab />

      <ReadyShapeFuture />
      {/* <div className="w-full bg-black">
      <Testimonials />
      </div> */}

    </>
  );
}

export default Home;
