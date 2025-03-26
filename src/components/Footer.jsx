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
import {OnlyMailSendToContactUs} from "../service/api";

gsap.registerPlugin(ScrollTrigger);

const FooterWithTransition = () => {
  const sectionRef = useRef(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // Track the current route location

  // Scroll to the top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // This will trigger on route change

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate content
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

  const handleNavigation = (item) => {
    switch (item) {
      case "Contact":
        navigate("/contact-us");
        break;
      case "Blog":
        navigate("/blogs"); // Adjust to your blog route
        break;
      case "work":
        navigate("/our-work"); // Adjust to your careers route
        break;
      case "Home":
        navigate("/");
        break;
      default:
        break;
    }
  };

  const clickOnsubscribe = async () => {
    try{
      if(emailRef.current){
        await OnlyMailSendToContactUs({
          email: emailRef.current.value ,
          workspace_id : "2d258123-b62f-4662-9a24-145dff11331a",
        });
        emailRef.current.value = "";
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <footer className="bg-[#171717] text-gray-300 py-12 px-4 md:px-6  relative z-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 ">
              <div className="w-10 h-10 ">
                <img
                  src={logo}
                  alt="Hexylon Analytics Logo"
                  className="w-100 h-100 mr-2"
                />
              </div>
              <h2 className="text-white text-xl font-semibold">
                Hexylon Analytics
              </h2>
            </div>
            <p className="text-normal text-[#9CA3AF]">
              Empowering businesses with AI-driven insights and innovative
              solutions to unlock growth, enhance workflows, and achieve
              excellence.
            </p>
            <div className="flex space-x-4">
              <div className="w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center">
                <a href="https://www.instagram.com/hexylon_analytics?igsh=NTY2aWd3bGF2aGJz" className="hover:text-orange-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center">
                <a
                  href="https://www.linkedin.com/company/hexylon-analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center">
  <a
    href="https://www.facebook.com/profile.php?id=61571091313573"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-orange-600 transition-colors"
  >
    <Facebook className="w-5 h-5" />
  </a>
</div>

            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact</h3>
            <div className="space-y-3  text-sm text-[#9CA3AF]">
              <div className="flex gap-2">
                <span>
                  <PhoneCall className="w-5 h-5" />
                </span>{" "}
                <p>+91 7990821728</p>
              </div>
              <div className="flex gap-2">
                <MapPin className="w-5 h-5" />
                <div>
                  <p>B/410, Ganesh Plaza, Nr. Navrangpura</p>
                  <p>Post Office, Navrangpura, Ahmedabad,</p>
                  <p>Gujarat, India - 380 009</p>
                </div>
              </div>
              <div className="flex gap-2">
                <MapPin className="w-5 h-5" />
                <div>
                  <p>301/2, Parshwa Tower, Sarkhej -</p>
                  <p>Gandhinagar Hwy, Nr. Pakwan II,</p>
                  <p>Bodakdev, Ahmedabad, Gujarat 380054</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-xl text-[#9CA3AF] w-28">
              <li>
                <p
                  className="hover:text-orange-600 transition-colors cursor-pointer"
                  onClick={() => handleNavigation("Home")}
                >
                  Home
                </p>
              </li>
              <li>
                <p
                  className="hover:text-orange-600 transition-colors cursor-pointer "
                  onClick={() => handleNavigation("Blog")}
                >
                  Blog
                </p>
              </li>
              <li>
                <p
                  className="hover:text-orange-600 transition-colors cursor-pointer"
                  onClick={() => handleNavigation("work")}
                >
                  Our Work
                </p>
              </li>
              <li>
                <p
                  className="hover:text-orange-600 transition-colors cursor-pointer"
                  onClick={() => handleNavigation("Contact")}
                >
                  Contact Us
                </p>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">
              Subscribe to New Blog Posts
            </h3>
            <div className="space-y-2">
              <input
                ref={emailRef}
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-black border-gray-700 text-white placeholder:text-gray-500 p-3 rounded-md w-full mb-2"
              />
              <button className=" bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md" onClick={clickOnsubscribe}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© 2024 Hexylon Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const LinkGroup = ({ children, header }) => {
  return (
    <div className="w-full px-4 sm:w-3/12 fade-up">
      <div className="mb-10 w-full">
        <h4 className="mb-3 sm:mb-9 sm:mb-2 text-lg font-semibold text-dark dark:text-white">
          {header}
        </h4>
        <div className="space-y-2 text-sm text-gray-400">{children}</div>
      </div>
    </div>
  );
};

export default FooterWithTransition;
