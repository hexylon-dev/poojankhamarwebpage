import React from "react";
import InnovationHighlight from "../../components/Innovation/InnovationHighlight";
import OurProjects from "../../components/Innovation/OurProjects";
import InovativeIdea from "../../components/Innovation/InovativeIdea/InovativeIdea";

function index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <InnovationHighlight />
        <div className="space-y-32">
          <OurProjects
            title="VIDHYARTHI AI "
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

          <InovativeIdea />
        </div>
      </div>
    </div>
  );
}

export default index;
