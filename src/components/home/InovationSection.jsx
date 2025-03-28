import React from "react";
import Innovations from "../../assets/Innovations.png";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InnovationSection = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <div className="w-full max-w-7xl mx-auto min-h-[500px] md:min-h-[600px] bg-black rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden border border-yellow-300">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/5 order-1 md:order-2 mb-8 md:mb-0">
          <div className="flex justify-center md:justify-end">
            <img
              src={Innovations}
              alt="Innovation visual representation"
              className="w-full max-w-md md:max-w-none md:ml-auto rounded-lg"
            />
          </div>
        </div>

        <div className="w-full md:w-3/5 order-2 md:order-1 md:pr-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-300 mb-4 md:mb-6">
            Innovations that <br className="hidden md:block" />
            Reimagine Boundaries
          </h1>

          {/* Decorative divider */}
          <div className="w-24 h-1 bg-yellow-300 mb-6 md:mb-8"></div>

          <p className="text-white text-base md:text-lg mb-8 md:mb-10">
            Innovation isn't just about new ideas; it's about fearless
            execution. I believe in creating solutions that challenge the norm,
            disrupt industries, and redefine the way we think. Every project
            here is a reflection of bold thinking, hands-on leadership, and a
            vision focused on tomorrow.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/innovation-hub")} // Redirect to /innovations
            className="bg-yellow-300 text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-yellow-400 transition-colors w-fit"
          >
            Explore Innovation <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InnovationSection;
