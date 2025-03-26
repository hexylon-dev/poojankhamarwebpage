import React from 'react';
import Header from '../components/Header'
import ValueCard from '../components/ValueCard'
import Background from '../components/BackGround'
import { values } from '../Data/values';

function AboutUs5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-neutral-900 relative overflow-hidden">
      <Background position="top-right" />
      <Background position="bottom-left" />
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSIjZmY2NjAwIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10 animate-pulse-slow" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <Header />
        
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs5;