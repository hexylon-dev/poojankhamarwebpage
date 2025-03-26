import React from 'react';
import { Brain, Database, Settings, ChartBar, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Innovative AI Solutions",
      description: "At Hexylon Analytics, we focus on creating AI-driven business solutions that revolutionize how businesses interact with data.",
      icon: Brain
    },
    {
      title: "Expertise in Data Analytics",
      description: "With a team of data science professionals and experience across industries, we provide the best business intelligence solutions.",
      icon: Database
    },
    {
      title: "Tailored Data Solutions",
      description: "Our approach is centered on delivering custom data analytics services that meet the specific needs of each business.",
      icon: Settings
    },
    {
      title: "Proven Track Record",
      description: "From cloud-based machine learning data solutions to predictive analytics in e-commerce, our solutions consistently deliver results.",
      icon: ChartBar
    },
    {
      title: "Customer-Focused Approach",
      description: "We work closely with our clients to ensure that the AI technologies we provide are aligned with their business goals.",
      icon: Users
    }
  ];

  return (
    <div className="relative w-full min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at left, rgba(80, 80, 80, 0.4) 0%, rgba(40, 40, 40, 0.3) 30%, rgba(0, 0, 0, 0.9) 100%),
            radial-gradient(circle at center, rgba(80, 80, 80, 0.1) 0%, rgba(40, 40, 40, 0.3) 30%, rgba(0, 0, 0, 0.9) 100%),
            radial-gradient(circle at right, rgba(80, 80, 80, 0.4) 0%, rgba(40, 40, 40, 0.3) 30%, rgba(0, 0, 0, 0.9) 100%)
          `
        }}
      />

      {/* Grid background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.1
        }}
      />

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto px-4 py-24">
        <h4 className="text-4xl font-serif text-center mb-16" style={{ color: '#d1d5db', letterSpacing: '0.01em', lineHeight: '1.6' }}>
          Why Choose Us?
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl backdrop-blur-sm transition-all duration-800 transform hover:scale-105"
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(209, 213, 219, 0.1)'
              }}
            >
              {/* Icon container */}
              <div className="p-3 rounded-lg w-12 h-12 mb-6 flex items-center justify-center"
                   style={{ backgroundColor: '#0066ff', opacity: 0.1 }}>
                <feature.icon className="w-6 h-6" style={{ color: '#0066ff' }} />
              </div>

              <h5 className="text-xl font-serif mb-4" style={{ color: '#0066ff' }}>
                {feature.title}
              </h5>
              
              <p className="leading-relaxed" style={{ 
                color: 'rgba(209, 213, 219, 0.9)',
                letterSpacing: '0.01em',
                lineHeight: '1.6'
              }}>
                {feature.description}
              </p>
              
              {/* Button-style gradient line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-800"
                   style={{
                     background: 'linear-gradient(135deg, #ff7755, #ff9966)'
                   }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;