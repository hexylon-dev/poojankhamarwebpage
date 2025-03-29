import React from "react";
import { Helmet } from "react-helmet";  // ✅ React Helmet for SEO
import InnovationHighlight from "../../components/Innovation/InnovationHighlight";
import OurProjects from "../../components/Innovation/OurProjects";
import InovativeIdea from "../../components/Innovation/InovativeIdea/InovativeIdea";

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

      <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white p-8">
        <div className="max-w-6xl mx-auto">
          {/* <h1 className="text-4xl font-bold text-yellow-400 text-center mt-20 mb-8">
            Cutting-Edge AI Innovations
          </h1> */}
          <InnovationHighlight />
          <div class="flex justify-center px-4">
            <h2 class="relative font-bold text-2xl md:text-3xl lg:text-4xl mb-4 mt-10 text-center">
              <span class="relative z-10 px-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300">
                The Big Leap: Transformative Ideas for the Future
              </span>
              <span class="absolute top-full left-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-[#ffff33] to-transparent transform -translate-x-1/2"></span>
            </h2>
          </div>
          <div className="space-y-32">

            <OurProjects
              title="VIDHYARTHI AI"
              description="Vidhyarthi AI is an AI-powered education platform that personalizes learning based on students’ psychological profiles, creating custom paths to success. From psychological profiling to exam strategies, it transforms the way students learn, prepare, and grow."
              features={[
                "Psychological Profiling-Based Learning",
                "AI-Driven Exam Preparation & Career Guidance",
                "Adaptive Study Plans & Progress Tracking",
              ]}
            />

            <OurProjects
              title="LOM AI"
              description="Lom AI is designed to automate the Line-O-Matic ecosystem, identifying inefficiencies and transforming manual processes through AI & IoT integration. It streamlines operations and enhances business efficiency at every level."
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
    </>
  );
}

export default Index;
