import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  PhoneCall,
  LocateIcon,
  Locate,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
// import { OnlyMailSendToContactUs } from "../service/api";

gsap.registerPlugin(ScrollTrigger);

const FooterWithTransition = () => {
  const sectionRef = useRef(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-up",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".footer-content",
            start: "top bottom-=100",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#19191A] text-gray-300 py-12 px-4 md:px-6 relative z-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left side - Navigation options */}
          <div className="flex flex-wrap gap-8 mb-8 md:mb-0">
            <div
              className="text-white hover:text-gray-400 cursor-pointer transition-colors"
              onClick={() => handleNavigation("/")}
            >
              Home
            </div>
            <div
              className="text-white hover:text-gray-400 cursor-pointer transition-colors"
              onClick={() => handleNavigation("/about")}
            >
              About
            </div>
            <div
              className="text-white hover:text-gray-400 cursor-pointer transition-colors"
              onClick={() => handleNavigation("/innovations")}
            >
              Innovation
            </div>
            <div
              className="text-white hover:text-gray-400 cursor-pointer transition-colors"
              onClick={() => handleNavigation("/blogs")}
            >
              Blogs
            </div>
            <div
              className="text-white hover:text-gray-400 cursor-pointer transition-colors"
              onClick={() => handleNavigation("/ideas")}
            >
              Ideas
            </div>
            <div
              className="text-white hover:text-gray-400 cursor-pointer transition-colors"
              onClick={() => handleNavigation("/contact")}
            >
              Contact
            </div>
          </div>

          {/* Right side - Social media icons */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <a
              href="https://www.linkedin.com/in/poojan-khamar-30a560126/"
              className="p-3 bg-[#ffff33] rounded-full hover:bg-yellow-400 transition-all duration-300 social-icon group shadow-[0_0_15px_rgba(255,255,51,0.3)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://www.instagram.com/poojan_555/"
              className="p-3 bg-[#ffff33] rounded-full hover:bg-yellow-400 transition-all duration-300 social-icon group shadow-[0_0_15px_rgba(255,255,51,0.3)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Additional footer content can be added here */}

      </div>
    </footer>
  );
};

export default FooterWithTransition;