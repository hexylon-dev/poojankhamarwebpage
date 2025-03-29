import React from "react";
import { Helmet } from "react-helmet";  // ✅ React Helmet for SEO
import InnovationHighlight from "../../components/Innovation/InnovationHighlight";
import OurProjects from "../../components/Innovation/OurProjects";
import InovativeIdea from "../../components/Innovation/InovativeIdea/InovativeIdea";
import ThirdSection from "../../components/Innovation/InovativeIdea/ThirdSection";
import SecondSection from "../../components/Innovation/InovativeIdea/SecondSection"
import CTA from "../../components/Innovation/InovativeIdea/CTA";
function Index() {
  return (
    <>
      {/* ✅ SEO Meta Tags with React Helmet */}
      <Helmet>
        <title>Innovative AI Projects | Vidhyarthi AI & LOM AI</title>
        <meta
          name="description"
          content="Explore innovative AI projects like Vidhyarthi AI for personalized learning and LOM AI for industrial automation."
        />
        <meta name="keywords" content="AI projects, Vidhyarthi AI, LOM AI, industrial automation, personalized learning" />
        <meta name="author" content="Poojan Khamar" />
      </Helmet>
      <div className="min-h-screen bg-black  via-zinc-900 to-black text-white p-8">
        <div className="max-w-7xl  mx-auto">
          {/* <h1 className="text-4xl font-bold text-yellow-400 text-center mt-20 mb-8">
            Cutting-Edge AI Innovations
          </h1> */}
          <InnovationHighlight />
          <SecondSection />
          <ThirdSection />
          <div className="space-y-32">
            <OurProjects
              title="VIDHYARTHI AI"
              description="Empowering Students with Personalized AI Learning Paths"
              features={[
                "Psychological Profiling-Based Learning",
                "AI-Driven Exam Preparation & Career Guidance",
                "Adaptive Study Plans & Progress Tracking",
              ]}
            />
            <OurProjects
              title="LOM AI"
              description="Automating Industrial Workflows with Intelligence"
              features={[
                "Workflow Analysis & Optimization",
                "Real-Time Analytics & Reporting",
                "Intelligent Automation Implementation",
              ]}
            />
          </div>
          <CTA />
        </div>
      </div>
    </>
  );
}

export default Index;
