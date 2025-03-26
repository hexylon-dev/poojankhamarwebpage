import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, icons } from "lucide-react";
import newlogo from "../assets/newlogo.png";
import ServicePredictiveAnalytics from "../assets/svgs/ServicePredictiveAnalytics";
import NaturalLanguage from "../assets/svgs/ServiceNaturalLanguage";
import ServiceComputerVision from "../assets/svgs/ServiceComputerVision";
import ServiceRecommendationSystems from "../assets/svgs/ServiceRecommendationSystems";
import ServiceCustomAI from "../assets/svgs/ServiceCustomAI";
import AutoML from "../assets/svgs/AutoML";
import ServiceConversationalAI from "../assets/svgs/ServiceConversationalAI";
import ServiceAIforProcessAutomation from "../assets/svgs/ServiceAIforProcessAutomation";
import ServiceAiPowerDataAnalyst from "../assets/svgs/ServiceAiPowerDataAnalyst";

const menuItems = [
  { id: 1, label: "Home", path: "" },
  { id: 2, label: "Blog", path: "blogs" },
  { id: 3, label: "Service", path: "services", isDropdown: true },
  // { id: 4, label: "Technologies", path: "technologies" },
  { id: 5, label: "About Us", path: "about-us" },
  { id: 6, label: "Our Work", path: "our-work" },
  // { id: 7, label: "Career", path: "careers" },
];

const serviceDropdownItems = [
  {
    id: 1,
    label: "Predictive Analytics Solutions Develpment",
    path: "services/predictive-analytics",
    icon: <ServicePredictiveAnalytics />,
  },
  {
    id: 2,
    label: "Natural Language Processing (NLP)",
    path: "services/natural-language",
    icon: <NaturalLanguage />,
  },
  {
    id: 3,
    label: "Computer Vision",
    path: "services/computer-vision",

    icon: <ServiceComputerVision />,
  },
  {
    id: 4,
    label: "Recommendation Systems",
    path: "services/recommendation-systems",
    icon: <ServiceRecommendationSystems />,
  },
  {
    id: 5,
    label: "Custom AI Models",
    path: "services/custom-ai-models",
    icon: <ServiceCustomAI />,
  },
  {
    id: 6,
    label: "Automated Machine Learning (AutoML)",
    path: "services/automated-machine-learning",
    icon: <AutoML />,
  },
  {
    id: 7,
    label: "AI-Powered Data Analytics",
    path: "services/ai-powered-data-analytics",
    icon: <ServiceAiPowerDataAnalyst />,
  },
  {
    id: 8,
    label: "Conversational AI",
    path: "services/conversational-ai",
    icon: <ServiceConversationalAI />,
  },
  {
    id: 9,
    label: "AI for Process Automation",
    path: "services/ai-for-process-automation",
    icon: <ServiceAIforProcessAutomation />,
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen((prev) => !prev);
  };

  const bodyStopScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const bodyEnableScroll = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <div className="fixed w-full z-50 px-2">
      <header
        className={`transition-all duration-500 ${
          isScrolled ? "mt-2" : "mt-2"
        }`}
      >
        <nav
          className={`mx-auto backdrop-blur-xl border md:rounded-full rounded-2xl bg-[#5E5E5E]/20  ${
            isScrolled
              ? "max-w-6xl shadow-lg border"
              : "max-w-7xl border-4"
          } transition-all duration-300  border-gray-900`}
        >
          <div className="px-6 md:py-0 py-4 flex items-center justify-between relative ">
            <NavLink to="/" className="flex items-center">
              <img
                src={newlogo}
                alt="Vidhyarhi Ai Logo"
                className="h-8 w-auto"
              />
            </NavLink>

            <div className="hidden md:flex items-center gap-0 ">
              {menuItems.map((item) =>
                item.isDropdown ? (
                  <div
                    key={item.id}
                    className=" text-white/70 hover:text-[#FF7A33] text-sm font-medium px-5 py-6"
                    onMouseEnter={() => setIsServiceDropdownOpen(true)}
                    onMouseLeave={() => setIsServiceDropdownOpen(false)}
                  >
                    <span className="cursor-pointer flex items-center">
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </span>

                    {isServiceDropdownOpen && (
                      <div
                        className="absolute left-1/2 transform -translate-x-1/2 mt-5 bg-black border border-orange-500/50 border-t-0 rounded-lg shadow-lg p-3 xl:max-w-4xl lg:max-w-2xl xl max-w-xl w-full"
                        onMouseLeave={() => setIsServiceDropdownOpen(false)}
                      >
                        <div className="grid grid-cols-2 lg:gap-4 gap-2">
                          {serviceDropdownItems.map((service) => (
                            <NavLink
                              key={service.id}
                              to={`/${service.path}`}
                              className={({ isActive }) =>
                                `flex items-center space-x-2 lg:px-2 px-1 py-2 text-lg rounded-lg ${
                                  isActive
                                    ? "text-[#FF7A33] bg-[#FF7A33]/10"
                                    : "text-white/70"
                                } hover:text-[#FF7A33] hover:bg-[#FF7A33]/10 transition-colors duration-200`
                              }
                            >
                              <span
                                className={({ isActive }) =>
                                  `inline-block self-start ${
                                    isActive
                                      ? "text-[#FF7A33] bg-[#FF7A33]/10"
                                      : "text-white/70"
                                  } hover:text-[#FF7A33] hover:bg-[#FF7A33]/10 transition-colors duration-200`
                                }
                              >
                                {service.icon}
                              </span>
                              <span>{service.label}</span>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.id}
                    to={`/${item.path}`}
                    className={({ isActive }) =>
                      `text-sm font-medium ${
                        isActive ? "text-[#FF7A33]" : "text-white/70"
                      } hover:text-[#FF7A33] px-5 py-6`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </div>

            <div>
              <NavLink
                to="/contact-us"
                className="md:block hidden px-6 py-2 bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white text-sm font-medium rounded-xl  hover:bg-[#FF8533]/50"
              >
                Contact Us
              </NavLink>
            </div>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden px-2 py-4 space-y-4  border-[#4361ee]/20">
              {menuItems.map((item) =>
                item.isDropdown ? (
                  <div key={item.id} className="space-y-2">
                    <span
                      className="block text-white/70 font-medium flex items-center cursor-pointer hover:text-[#FF7A33]"
                      onClick={toggleServiceDropdown}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </span>
                    {isServiceDropdownOpen && (
                      <div
                        className="relative left-0 mt-2 bg-[#000] border border-gray-900 border-t-0 rounded-lg shadow-lg w-full p-1 max-h-60 overflow-y-auto"
                        onMouseLeave={() => setIsServiceDropdownOpen(false)}
                      >
                        <div className="grid grid-cols-1 gap-1">
                          {serviceDropdownItems.map((service) => (
                            <NavLink
                              key={service.id}
                              to={`/${service.path}`}
                              className={({ isActive }) =>
                                `flex items-center space-x-1 px-1 py-2 text-[1.1rem] rounded-lg ${
                                  isActive
                                    ? "text-[#FF7A33] bg-[#FF7A33]/10"
                                    : "text-white/70"
                                } hover:text-[#FF7A33] hover:bg-[#FF7A33]/10 transition-colors duration-200`
                              }
                            >
                              <span
                                className={({ isActive }) =>
                                  `inline-block self-start ${
                                    isActive
                                      ? "text-[#FF7A33] bg-[#FF7A33]/10"
                                      : "text-white/70"
                                  } hover:text-[#FF7A33] hover:bg-[#FF7A33]/10 transition-colors duration-200`
                                }
                              >
                                {service.icon}
                              </span>
                              <span>{service.label}</span>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.id}
                    to={`/${item.path}`}
                    className={({ isActive }) =>
                      `block font-medium ${
                        isActive ? "text-[#FF7A33]" : "text-white/70"
                      } hover:text-[#FF7A33] `
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
              <NavLink
                to="/contact-us"
                className="block px-6 py-2 bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white text-sm font-medium rounded-xl  hover:bg-[#FF8533]/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
