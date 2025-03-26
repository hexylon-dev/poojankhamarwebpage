import React from 'react';
import  HexagonBg  from '../HexagonBg';
import { PageHeader } from '../PageHeader';
import { ServiceCard } from '../ServiceCard';
import { services } from '../../Data/services';
import '../../styles/animation.css';

function weDo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-neutral-950 
      relative overflow-hidden">
      <HexagonBg />
      
      <div className="container mx-auto px-4 py-16 md:py-32 relative">
        <PageHeader 
          title="What We Do"
          subtitle="Hexylon Analytics offers a wide range of AI-powered business analytics services"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default weDo;