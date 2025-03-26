import React from 'react';
import { ArrowRight } from 'lucide-react';

const HexylonMission = () => {
  return (
    <div className="text-gray-300 bg-black">
      {/* Background gradient overlay */}
      <div className="relative">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Content container */}
        <div className="relative max-w-4xl mx-auto px-6 py-24 space-y-16">
          {/* Mission Section */}
          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-serif tracking-tight text-gray-300">
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-orange-500" /> {/* Orange highlight line */}
            </div>
            <p className="text-lg leading-relaxed">
              At Hexylon Analytics, our mission is to empower businesses to make smarter, 
              data-driven decisions through cutting-edge AI solutions and advanced data analytics. 
              We leverage big data solutions and machine learning for predictive business analytics 
              to help organizations optimize their operations, improve efficiency, and increase profitability.
            </p>
          </section>

          {/* Vision Section */}
          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-serif tracking-tight text-gray-300">
                Our Vision
              </h2>
              <div className="w-24 h-1 bg-orange-500" /> {/* Orange highlight line */}
            </div>
            <p className="text-lg leading-relaxed">
              Our vision is to become the leading provider of cloud-based data analytics 
              and AI-powered business solutions. We aim to help businesses leverage advanced 
              data analytics and machine learning to transform their operations and gain a 
              competitive edge. By providing comprehensive business intelligence tools, we 
              empower our clients to unlock new opportunities, improve decision-making, and 
              drive sustainable business growth.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HexylonMission;