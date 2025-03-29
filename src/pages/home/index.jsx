import React, { useEffect, useState, useRef } from "react";
import HeroSection from "../../components/home/HeroSection";
import JourneyPage from "../../components/home/Journey";
import LatestLab from "../../components/home/LatestLab";
import ReadyShapeFuture from "../../components/home/ReadyToShapFuture";
import ReimagineBoundary from "../../components/home/ReimagineBoundary";
import IdeasCard from "../../components/home/IdeasCard";
import Testimonials from "../../components/home/Testimonials";
import { motion } from "framer-motion";
import "../../styles/ShimmerButton.css";
import "../../styles/animations.css";
import ThoughtMarquee from "../../components/home/ThoughtMarquee";
import InovationSection from "../../components/home/InovationSection";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const journeyRef = useRef(null);

  const scrollToJourney = () => {
    if (journeyRef.current) {
      journeyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <section id="journey">
        <JourneyPage />
      </section>
      <div className="bg-black">
        <InovationSection />
      </div>

      {/* Background Transition for Smooth Flow */}
      {/* <div className="h-32 bg-gradient-to-b from-black to-gray-900"></div> */}

      {/* Highlighted Sections */}
      <section
        id="highlighted-sections"
        className="relative min-h-screen bg-black text-white py-4 md:py-16 px-8 md:px-16"
      >
        <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffff33] text-center mb-4 md:mb-8 leading-tight">
            AI & Innovation Blog Sections
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto">
            Discover the latest insights on Artificial Intelligence, AGI
            research, and future technology trends. Stay informed with expert
            analyses and innovations.
          </p>
        </div>

        {/* Schema Markup for SEO (to be added in the main page <head> section) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "AI & Innovation Blog Sections",
            description:
              "Explore expert blogs on AI, AGI, and emerging technologies. Get insights into the latest research, applications, and trends in artificial intelligence.",
            mainEntity: {
              "@type": "Blog",
              name: "AI & Innovation Insights",
              blogPost: [
                {
                  "@type": "BlogPosting",
                  headline:
                    "The Foundations of Artificial General Intelligence (AGI)",
                  author: { "@type": "Person", name: "AI Expert" },
                  datePublished: "2025-03-29",
                  image: "/path-to-image.png",
                },
                {
                  "@type": "BlogPosting",
                  headline: "Applications and Future Prospects of AGI",
                  author: { "@type": "Person", name: "Tech Analyst" },
                  datePublished: "2025-03-29",
                  image: "/path-to-image.png",
                },
              ],
            },
          })}
        </script>

        {/* Background Effects */}

        {/* Sticky Components */}
        <div className="relative z-10">
          <div className="sticky top-20 z-10">
            <ReimagineBoundary />
          </div>
          <div
            className="sticky top-20 z-20 transition-transform duration-300"
            style={{ transform: `translateY(${secondCardOffset}px)` }}
          >
            {/* <IdeasCard /> */}
          </div>
        </div>

        {/* Spacer for Sticky Effect */}
        <div className="h-[10vh]"></div>
      </section>
      <ThoughtMarquee />

      {/* <LatestLab /> */}

      <ReadyShapeFuture />
      {/* <div className="w-full bg-black">
      <Testimonials />
      </div> */}
    </>
  );
}

export default Home;
