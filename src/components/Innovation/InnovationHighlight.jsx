import React from "react";
import { Helmet } from "react-helmet";  // ✅ SEO Meta Tags ke liye
import { useNavigate } from "react-router-dom";

function InnovationHighlight() {
  const navigate = useNavigate();

  return (
    <>
      {/* ✅ SEO Meta Tags for This Section */}
      <Helmet>
        <title>Innovations | Disrupting Industries with AI & Automation</title>
        <meta
          name="description"
          content="Explore groundbreaking innovations that challenge norms, disrupt industries, and redefine the future. AI, automation, and fearless execution drive our vision."
        />
        <meta name="keywords" content="innovation, AI solutions, automation, disruptive technology, bold thinking" />
        <meta name="author" content="Poojan Khamar" />
      </Helmet>

      <div className="space-y-8 mt-32 animate-fade-in">
        <h1
          className="text-2xl md:text-7xl font-bold bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] bg-clip-text text-transparent leading-tight tracking-tight"
        >
          Innovations that Reimagine Boundaries
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-[#ffff33] to-yellow-400"></div>

        <p className="text-lg md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
          Innovation isn't just about new ideas; it's about fearless execution.
          I believe in creating solutions that challenge the norm, disrupt
          industries, and redefine the way we think. Every project here is a
          reflection of bold thinking, hands-on leadership, and a vision focused
          on tomorrow.
        </p>

        <div className="flex justify-start">
          <button
            className="group relative bg-[#ffff33] text-black px-4 py-2 rounded-full font-semibold 
            transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ffff33]/30 mb-4 md:mb-0 md:px-8 md:py-4"
            onClick={() => {
              navigate("/contact");
            }}
          >
            <span className="relative z-10">Contact Me Directly</span>
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </button>
        </div>
      </div>
    </>
  );
}

export default InnovationHighlight;
