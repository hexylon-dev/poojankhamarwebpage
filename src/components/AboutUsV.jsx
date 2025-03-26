import React from 'react';
import { PageTitle } from './PageTitle';
import { FeatureGrid } from './FeatureGrid';
import { features } from '../Data/features';

function AboutUsV() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#1a1a1a] relative overflow-hidden">
      {/* Background pattern - adjusted opacity for mobile */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSIjZmY2NjAwIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10 sm:opacity-20 animate-pulse"></div>
      
      {/* Floating orbs - adjusted for different screen sizes */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-[#ff6600] rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob"></div>
      <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-32 sm:w-48 h-32 sm:h-48 bg-[#ff8533] rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-4 sm:-bottom-8 left-10 sm:left-20 w-28 sm:w-44 h-28 sm:h-44 bg-[#ff6600] rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000"></div>
      <div className="hidden sm:block absolute top-1/2 right-1/4 w-36 h-36 bg-[#ff4500] rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-6000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <PageTitle 
          title="Why Choose Us"
          subtitle="Empowering businesses with cutting-edge AI and data analytics solutions"
        />
        <FeatureGrid features={features} />
      </div>
    </div>
  );
}

export default AboutUsV;