import React from "react";
import Navbar from "../components/Navbar1";
import HeroSection from "../components/HerosectionV";
import HowWeWork from "../components/HowWeWork12";
import WhyUs from "../components/WhyUs4";
import IndustriesSection from "../components/IndustriesSection2";
import OurWorkSection from "../components/OurWork4";
import CommitmentSection from "../components/OurCommit1";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import OurServices from "../components/OurServices";
import OurWork from "./OurWork";
import ParticleAvatar from "../components/avatar";
import CallToAction from "../components/CallToAction";

function Home() {
  const navigate = useNavigate();
  const handleNavigateToContactPage = () => {
    window.location.href = "/contact-us";
  };

  const handleNavigateToCareersPage = () => {
    navigate("/careers");
  };

  const handleNavigateToBlogPage = () => {
    window.location.href = "/blogs";
  };

  return (
    <>
      <div className="bg-black">
        {/* <Navbar handleNavigateToContactPage={handleNavigateToContactPage} /> */}
        <HeroSection
          handleNavigateToContactPage={handleNavigateToContactPage}
        />
        <HowWeWork />
        <OurServices />
        <OurWork />
        <CallToAction />
        {/* <WhyUs /> */}
        {/* <IndustriesSection /> */}
        {/* <OurWorkSection /> */}
        {/* <CommitmentSection handleNavigateToContactPage={handleNavigateToContactPage} /> */}
        {/* <Footer handleNavigateToContactPage={handleNavigateToContactPage} /> */}
      </div>
    </>
  );
}

export default Home;
