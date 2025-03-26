import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  MapPin,
  Phone,
  Mail,
  Building,
  CircuitBoard,
  Cpu,
  Network,
} from "lucide-react";
import ContactNavbar from "../components/NavbarForContact";
import ContactFooter from "../components/FooterOfContact";
import { CreateContactUsResponseApi } from "../service/api";

const THEME = {
  primary: "#000000",
  saffron: "#FF6600",
  white: "#FFFFFF",
};

const ContactPage = () => {
  const formRef = useRef(null);
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    area_of_interest: "",
    email: "",
    phone: "",
  });

  useGSAP(
    () => {
      // Animated circuit pattern
      gsap.to(".circuit-line", {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power1.inOut",
        stagger: 0.1,
      });

      // Floating icons animation
      gsap.to(".tech-icon", {
        y: "random(-15, 15)",
        rotation: "random(-15, 15)",
        duration: "random(2, 3)",
        repeat: -1,
        yoyo: true,
        ease: "none",
        stagger: {
          amount: 1.5,
          from: "random",
        },
      });

      // Hero text animation
      gsap.from(".hero-text span", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Form animation
      gsap.from(".form-container", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      });

      // Contact info animation
      gsap.from(".contact-item", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top center",
        },
      });
    },
    { scope: containerRef }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CreateContactUsResponseApi({
        ...formData,
        workspace_id : "2d258123-b62f-4662-9a24-145dff11331a",
        description: `${formData.area_of_interest}`,
      });
    } catch (err) {
      console.log(err);
    }
    gsap.to(formRef.current, {
      scale: 0.98,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        setFormData({
          name: "",
          company_name: "",
          area_of_interest: "",
          email: "",
          phone: "",
        });
      },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {/* <ContactNavbar /> */}
      <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
        {/* Decorative Circuit Pattern */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 0 }}
        >
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="150"
              height="130"
              patternUnits="userSpaceOnUse"
            >
              {/* Hexagon path */}
              <path
                className="circuit-line"
                d="M60 0 L90 17.32 L90 52 L60 69.28 L30 52 L30 17.32 Z"
                fill="none"
                stroke="#333333"
                strokeWidth="1.5"
                strokeDasharray="600"
                strokeDashoffset="600"
                opacity="0.4"
              />

              {/* Connection dots at vertices */}
              <circle cx="60" cy="0" r="2" fill={THEME.saffron} opacity="0.3" />
              <circle
                cx="90"
                cy="17.32"
                r="2"
                fill={THEME.saffron}
                opacity="0.3"
              />
              <circle
                cx="90"
                cy="52"
                r="2"
                fill={THEME.saffron}
                opacity="0.3"
              />
              <circle
                cx="60"
                cy="69.28"
                r="2"
                fill={THEME.saffron}
                opacity="0.3"
              />
              <circle
                cx="30"
                cy="52"
                r="2"
                fill={THEME.saffron}
                opacity="0.3"
              />
              <circle
                cx="30"
                cy="17.32"
                r="2"
                fill={THEME.saffron}
                opacity="0.3"
              />

              {/* Inner circuit lines */}
              <path
                className="circuit-line"
                d="M60 0 L60 69.28 M30 17.32 L90 52 M90 17.32 L30 52"
                fill="none"
                stroke="#333333"
                strokeWidth="0.8"
                strokeDasharray="600"
                strokeDashoffset="600"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Main Content - Updated padding for mobile */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-16 sm:mt-24">
          {/* Hero Section - Updated text sizes */}
          <div className="text-center mb-8 sm:mb-16">
            <h1
              className="hero-text text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: THEME.white }}
            >
              <span>Let's Connect </span>
              <span style={{ color: THEME.saffron }}>& Innovate</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Transform your business with our cutting-edge AI solutions. Fill
              out the form below to start your journey.
            </p>
          </div>

          {/* Form Section */}
          <div className="form-container relative max-w-4xl mx-auto mb-12 sm:mb-24">
            <div
              className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#FF6600]/20 
                            shadow-[0_0_15px_rgba(255,102,0,0.1)] hover:shadow-[0_0_20px_rgba(255,102,0,0.15)] 
                            transition-all duration-300"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h3
                    className="text-2xl font-bold text-white mb-2 bg-clip-text text-transparent 
                                bg-gradient-to-r from-[#FF6600] to-[#FF8533]"
                  >
                    Get Started
                  </h3>
                  <p className="text-gray-400">
                    Fill out the form below to connect with us
                  </p>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="form-group relative">
                    <label className="block text-[#FF6600] text-sm mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-12 bg-black/30 border border-[#FF6600]/20 rounded-lg px-4 text-white 
                               focus:outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/50 
                               transition-all duration-300 hover:border-[#FF6600]/40"
                      placeholder="Enter Your Name Here"
                      required
                    />
                  </div>

                  {/* Company Name Input */}
                  <div className="form-group relative">
                    <label className="block text-[#FF6600] text-sm mb-2 font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      className="w-full h-12 bg-black/30 border border-[#FF6600]/20 rounded-lg px-4 text-white 
                               focus:outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/50 
                               transition-all duration-300 hover:border-[#FF6600]/40"
                      placeholder="Company Name"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="form-group relative">
                    <label className="block text-[#FF6600] text-sm mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-12 bg-black/30 border border-[#FF6600]/20 rounded-lg px-4 text-white 
                               focus:outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/50 
                               transition-all duration-300 hover:border-[#FF6600]/40"
                      placeholder="email@example.com"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="form-group relative">
                    <label className="block text-[#FF6600] text-sm mb-2 font-medium">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-12 bg-black/30 border border-[#FF6600]/20 rounded-lg px-4 text-white 
                               focus:outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/50 
                               transition-all duration-300 hover:border-[#FF6600]/40"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>
                </div>

                {/* Area of Interest - Full Width */}
                <div className="form-group relative">
                  <label className="block text-[#FF6600] text-sm mb-2 font-medium">
                    Area of Interest
                  </label>
                  <textarea
                    name="area_of_interest"
                    value={formData.area_of_interest}
                    onChange={handleChange}
                    className="w-full h-24 bg-black/30 border border-[#FF6600]/20 rounded-lg px-4 py-3 text-white 
                             focus:outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]/50 
                             transition-all duration-300 hover:border-[#FF6600]/40 resize-none"
                    placeholder="Tell us what you're interested in..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-[#FF6600] to-[#FF8533] rounded-lg text-white 
                           font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,102,0,0.3)] 
                           hover:scale-[1.02] active:scale-[0.98] active:opacity-90 
                           relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#FF8533] to-[#FF6600] opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Section - Updated grid layout */}
          <div className="contact-section grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2
                className="text-2xl sm:text-3xl font-bold text-center lg:text-left"
                style={{ color: THEME.white }}
              >
                Get in Touch
              </h2>

              {/* Contact items - Updated padding and layout */}
              <div className="space-y-3">
                {[
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: [
                      {
                        label: "Office 1",
                        address:
                          "B/410, Ganesh Plaza,Nr. Navrangpura Post Office, Navrangpura, Ahmedabad, Gujarat, India - 380 009",
                      },
                      {
                        label: "Office 2",
                        address:
                          "301/2, Parshwa Tower 2, 901, Sarkhej - Gandhinagar Hwy, near Pakwan II, Bodakdev, Ahmedabad, Gujarat 380054",
                      },
                    ],
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+91 7990821728",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "Support@hexylon.in",
                  },
                  {
                    icon: Building,
                    title: "Business Hours",
                    content: "Mon - Fri: 9:00 AM - 7:00 PM IST",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="contact-item mx-auto flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-4 rounded-lg"
                    style={{ opacity: 1 }}
                  >
                    <div
                      className="mx-auto sm:mx-0 sm:ml-8 p-3 rounded-full mb-3 sm:mb-0 sm:mr-4"
                      style={{ backgroundColor: `${THEME.white}10` }}
                    >
                      <item.icon size={24} style={{ color: THEME.saffron }} />
                    </div>
                    <div className="text-center sm:text-center md:text-left sm:mx-auto md:mx-0 w-full">
                      <h3
                        className="font-medium"
                        style={{ color: THEME.saffron }}
                      >
                        {item.title}
                      </h3>
                      {Array.isArray(item.content) ? (
                        <div className="space-y-4">
                          {item.content.map((office, i) => (
                            <div key={i} className="space-y-1">
                              <h4 className="text-[#FF6600] font-medium">
                                {office.label}
                              </h4>
                              <p className="text-white">{office.address}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-white">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Section - Updated for mobile */}
            <div className="relative h-[400px] lg:h-full">
              <div className="absolute inset-0 bg-gray-500 rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 p-4">
                {/* Maps with responsive heights */}
                <div className="w-full h-[200px] sm:h-full bg-gray-100 relative rounded-xl">
                  <div className="absolute top-0 right-0 bg-black/70 text-white p-2 text-sm rounded-br-lg z-10">
                    Navrangpura Office
                  </div>
                  <div className="absolute inset-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.684982717429!2d72.55826618629733!3d23.035335962144465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f461610533%3A0xa56a93bc9468d0!2sGanesh%20Plaza%2C%20Navrangpura%20Rd%2C%20Near%20Navrangpura%20Post%20Office%2C%20Shrimali%20Society%2C%20Navrangpura%2C%20Ahmedabad%2C%20Gujarat%20380009!5e0!3m2!1sen!2sin!4v1730131237754!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* Second Location Map */}
                <div className="w-full h-[200px] sm:h-full bg-gray-100 relative rounded-xl">
                  <div className="absolute top-0 right-0 bg-black/70 text-white p-2 text-sm rounded-br-lg z-10">
                    Bodakdev Office
                  </div>
                  <div className="absolute inset-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.398666957087!2d72.50663587609359!3d23.042744079156696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b267d71ff83%3A0x33e839fd89d2b559!2sParshwa%20Tower%202!5e0!3m2!1sen!2sin!4v1710843955399!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ContactFooter /> */}
    </>
  );
};

export default ContactPage;
