import { FileText, icons } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import ServicePredictiveAnalytics from "../assets/svgs/ServicePredictiveAnalytics";
import NaturalLanguage from "../assets/svgs/ServiceNaturalLanguage";
import ServiceComputerVision from "../assets/svgs/ServiceComputerVision";
import ServiceRecommendationSystems from "../assets/svgs/ServiceRecommendationSystems";
import ServiceCustomAI from "../assets/svgs/ServiceCustomAI";
import AutoML from "../assets/svgs/AutoML";
import ServiceConversationalAI from "../assets/svgs/ServiceConversationalAI";
import ServiceAIforProcessAutomation from "../assets/svgs/ServiceAIforProcessAutomation";
import ServiceNaturalLanguage from "../assets/svgs/ServiceNaturalLanguage";
import ServiceCardPredictiveAnalytics from "../assets/svgs/ServiceCardPredictiveAnalytics";
import OurServicesMobile from "./OurServiceMobile";
import ServviceCardNaturalLanguage from "../assets/svgs/ServiceCardNaturalLanguage";
import ServiceCardComputerVision from "../assets/svgs/ServiceCardComputerVision";
import ServiceCardRecommendationSystems from "../assets/svgs/ServiceCardRecommendationSystems";
import ServiceCardCustomAI from "../assets/svgs/ServiceCardCustomAI";
import ServiceCardAutoML from "../assets/svgs/ServiceCardAutoML";
import ServiceCardNaturalLanguage from "../assets/svgs/ServiceCardNaturalLanguage";
import ServiceCardConversationalAI from "../assets/svgs/ServiceCardConversationalAI";
import ServiceCardAIforProcessAutomation from "../assets/svgs/ServiceCardAIforProcessAutomation";
import { Navigate, useNavigate } from "react-router-dom";
import ServiceCardAIPoweredDataAnalytics from "../assets/svgs/ServiceCardAIPoweredDataAnalytics";
import ServiceAiPowerDataAnalyst from "../assets/svgs/ServiceAiPowerDataAnalyst";

const items = [
  {
    id: 1,
    title: "Predictive Analytics Solutions Development",
    iconSvg: <ServicePredictiveAnalytics className="w-7 h-7" />,
    cardImg: <ServiceCardPredictiveAnalytics />,
    path: "/services/predictive-analytics",
    description:
      "Unlock actionable insights and drive business growth with Hexylon's Predictive Analytics Solutions. Using advanced AI, machine learning, and data science, we forecast trends, optimize processes, and mitigate risks. Our tailored solutions empower businesses to enhance efficiency, streamline resource allocation, and improve customer satisfaction. From sales forecasting and risk management to personalized customer insights, our tools ensure sustainable growth and profitability. Powered by technologies like Python, TensorFlow, and cloud platforms, Hexylon delivers scalable, data-driven strategies. Partner with us to make smarter decisions, adapt to market changes, and achieve measurable results with cutting-edge predictive analytics. Contact us today!",
  },
  {
    id: 2,
    title: "Natural Language Processing (NLP)",
    iconSvg: <NaturalLanguage className="w-7 h-7" />,
    cardImg: <ServviceCardNaturalLanguage className="w-[80%]" />,
    path: "/services/natural-language",
    description:
      "Hexylon delivers cutting-edge Natural Language Processing (NLP) solutions to transform your business. Using AI-driven models like GPT and BERT, we automate tasks, enhance customer experiences, and extract actionable insights from unstructured data. Our services include AI-powered chatbots, sentiment analysis, text classification, and language translation, helping businesses streamline operations and personalize interactions. Using advanced technologies like SpaCy and top cloud-based AI platforms, we deliver scalable, tailored NLP solutions that ensure accuracy, efficiency, and impactful results. With Hexylon, unlock the power of language to boost efficiency, improve decision-making, and drive measurable growth. Contact us today to revolutionize your operations with NLP.",
  },
  {
    id: 3,
    title: "Computer Vision",
    path: "/services/computer-vision",
    iconSvg: <ServiceComputerVision className="w-7 h-7" />,
    cardImg: <ServiceCardComputerVision className="w-[85%]" />,
    description:
      "Hexylon Analytics offers cutting-edge AI-driven computer vision solutions to help businesses unlock actionable insights and optimize operations. Using advanced algorithms, deep learning, and real-time image and video analysis, we enhance security, improve healthcare, and automate processes. Our services include AI-powered object detection, facial recognition, real-time surveillance, healthcare imaging, and autonomous vehicle vision systems. With robust technologies like OpenCV, TensorFlow, and Nvidia CUDA, we provide scalable, customized solutions to meet your industry needs. Leverage the power of computer vision to drive efficiency, security, and innovation in your business. Contact us to revolutionize your operations with AI-driven vision technology.",
  },
  {
    id: 4,
    title: "Recommendation Systems",
    path: "/services/recommendation-systems",
    iconSvg: <ServiceRecommendationSystems className="w-7 h-7" />,
    cardImg: <ServiceCardRecommendationSystems className="w-[85%]" />,
    description:
      "Hexylon Analytics delivers advanced AI-driven recommendation systems that personalize user experiences and boost business outcomes. Our machine learning-based engines use collaborative filtering, content-based filtering, and predictive analytics to optimize product suggestions, content recommendations, and mobile app experiences. These smart algorithms enhance user engagement, increase conversions, and improve customer satisfaction. By analyzing user behaviour and preferences, our recommendation systems provide tailored, data-driven solutions for industries like e-commerce, media, and entertainment. Our scalable, customizable recommendation engines will help your business stay competitive, engaging users with dynamic, personalized content that drives results. Contact Hexylon Analytics to enhance your business with powerful AI-powered recommendations.",
  },
  {
    id: 5,
    title: "Custom AI Models",
    iconSvg: <ServiceCustomAI className="w-7 h-7" />,
    cardImg: <ServiceCardCustomAI className="w-[90%]" />,
    path: "/services/custom-ai-models",
    description:
      "Elevate your business with our tailored custom AI models, designed to optimize operations, enhance customer experiences, and drive innovation. Our machine learning and deep learning expertise empowers businesses with predictive insights, automated processes, and scalable solutions. From personalized customer experiences to operational efficiency, our custom AI models deliver actionable results. Contact us today to unlock the full potential of your data with our custom AI model development services!",
  },
  {
    id: 6,
    title: "Automated Machine Learning (AutoML)",
    path: "/services/automated-machine-learning",
    iconSvg: <AutoML className="w-7 h-7" />,
    cardImg: <ServiceCardAutoML className="w-[80%]" />,
    description:
      "Transform your business with our cutting-edge AutoML solutions. By automating the entire machine learning pipeline—from data preprocessing and model selection to deployment and ongoing optimization—our solutions empower you to unlock valuable insights faster. With AutoML, you can automate decision-making, improve operational efficiency, and scale your business effortlessly. Whether you're looking to predict trends, optimize resources, or enhance customer experiences, AutoML enables data-driven growth. Reach out today to start your journey with AutoML and unlock the full potential of your data!",
  },
  {
    id: 7,
    title: "AI-Powered Data Analytics",
    path: "/services/ai-powered-data-analytics",
    iconSvg: <ServiceNaturalLanguage className="w-7 h-7" />,
    cardImg: <ServiceCardAIPoweredDataAnalytics className="w-[80%]" />,
    description:
      "Our AI-powered data analytics solutions automate complex data workflows, allowing you to make data-driven decisions faster and more accurately. With AI, you can uncover trends, predict outcomes, and optimize business processes, all while saving time and costs. Let's help you unlock the power of your data and drive better outcomes for your business.",
  },
  {
    id: 8,
    title: "Conversational AI",
    path: "/services/conversational-ai",
    iconSvg: <ServiceConversationalAI className="w-7 h-7" />,
    cardImg: <ServiceCardConversationalAI className="w-[80%]" />,
    description:
      "Our conversational AI solutions help businesses automate and enhance customer engagement, deliver personalized experiences, and drive operational efficiency. Whether through chatbots, virtual assistants, or voice solutions, we enable businesses to stay ahead with AI-powered communication systems. Let us show you how conversational AI can revolutionize your customer interactions and business outcomes.",
  },
  {
    id: 9,
    title: "AI for Process Automation",
    path: "/services/ai-for-process-automation",
    iconSvg: <ServiceAIforProcessAutomation className="w-7 h-7" />,
    cardImg: <ServiceCardAIforProcessAutomation className="w-[80%]" />,
    description:
      "Hexylon Analytics is a leading provider of AI-powered process automation solutions designed to revolutionize business operations. In today’s fast-paced world, efficiency and accuracy are crucial to maintaining a competitive edge, and Hexylon Analytics leverages advanced artificial intelligence to streamline workflows, reduce costs, and boost productivity. By automating repetitive tasks, optimizing workflows, and enhancing scalability, businesses can focus on innovation and strategic growth. With solutions that minimize human error, speed up processes, and provide actionable insights, Hexylon Analytics ensures operational excellence across various industries.",
  },
];

const OurServices = () => {
  const [activeSections, setActiveSections] = useState([]);
  const sectionRefs = useRef([]);
  const scrollContainerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [activeId, setActiveId] = useState(1);

  const navigate = useNavigate();

  console.log(activeSections, "activeSections");

  // useEffect(() => {
  //   const options = {
  //     root: scrollContainerRef.current,
  //     rootMargin: "0px",
  //     threshold: 0.6, // Section must be at least 60% visible to become active
  //   };

  //   console.log(sectionRefs.current, "sectionRefs");

  //   const observer = new IntersectionObserver((entries) => {
  //     console.log(observer, "entries");

  //     let mostVisibleSection = null;
  //     let maxRatio = 0;

  //     console.log(mostVisibleSection, "mostVisibleSection");

  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
  //         mostVisibleSection = entry.target.id;
  //         maxRatio = entry.intersectionRatio; // Track the most visible section
  //       }
  //     });

  //     if (mostVisibleSection) {
  //       setActiveSections([mostVisibleSection]); // Set only the most visible section as active
  //     }
  //   }, options);

  //   sectionRefs.current.forEach((section) => {
  //     console.log(section, "section");

  //     if (section) observer.observe(section);
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Element is considered visible when 50% is in view
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setCurrentSection(sectionId);
          setActiveId(sectionId);
          console.log(`Current visible section: ${sectionId}`);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  console.log(activeSections, "activeSections");

  const isActive = (itemId) => {
    // console.log(itemId <= activeId , itemId , activeId)
    return itemId <= activeId;
  };

  return (
    <>
      <div className="relative bg-black z-10 w-full justify-start hidden lg:flex">
        <div className="xl:w-[10%] w-[5%]"></div>
        <div className="sticky top-[70px] self-start bg-transparent  h-screen overflow-y-auto xl:min-w-[500px] min-w-[400px] scrollbar-hidden ">
          <div className=" p-2 max-h-[calc(100vh-70px)]  w-full ">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600  uppercase mb-4 ml-2">
              OUR SERVICES
            </h2>
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-3 pb-4`}
              >
                {item.id !== 9 && (
                  <div
                    className={`absolute left-6  bottom-0 h-[30px] w-1 transition-all duration-300 ease-in-out ${
                      isActive(item.id) ? "bg-blue-500" : "bg-blue-500/20"
                    }`}
                  />
                )}

                <div
                  className={`flex items-center justify-center relative w-[50px] h-[50px] border  rounded-full bg-[#5F5F5F] shadow-[inset_0px_-6px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out ${
                    isActive(item.id)
                      ? "border-blue-500 scale-110 "
                      : "border-gray-600"
                  } `}
                >
                  {item.iconSvg}
                </div>

                <div className="flex-1 justify-start">
                  <h3
                    className={`text-normal font-medium transition-colors duration-300 ${
                      isActive(item.id) ? "text-blue-500" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="bg-transparent w-full overflow-y-auto"
          ref={scrollContainerRef}
        >
          {items.map((section, index) => (
            <div
              key={section.id}
              id={`${section.id}`}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`h-content mb-1 flex justify-center items-center ${
                currentSection === `section-${section.id}`
                  ? "border-2 border-blue-500"
                  : ""
              }`}
            >
              <div className="flex flex-col 4xl:max-w-[1500px] max-w-[1000px] ml-auto bg-[transparent] shadow-xl  h-full w-full border border-[#374151]">
                <figure className="flex justify-center items-center xl:pl-[5rem] pl-[2rem] py-12 ">
                  {section.cardImg}
                </figure>
                <div className="flex flex-col p-8  items-center w-full h-full">
                  <div className="text-2xl font-bold text-center text-[#2182DF] p-4 border border-[#2182DF] rounded-full flex items-center justify-center max-w-7xl mb-10  ">
                    {section.title}
                  </div>
                  <div className="text-lg text-center text-white max-w-6xl">
                    {section.description}
                  </div>
                  <div className="flex justify-end pt-6 mt-5">
                    <button className="group relative px-6 py-2 bg-black border border-blue-500 rounded-md ">
                      <div className="absolute inset-0 rounded-md bg-black  blur-md transition-all group-hover:blur-lg" />
                      <div className="relative flex items-center space-x-2 text-blue-500">
                        <span
                          className="text-lg"
                          onClick={() => navigate(section.path)}
                        >
                          read more
                        </span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden relative bg-black z-10 flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600  uppercase my-12 text-center">
          OUR SERVICES
        </h2>
        <OurServicesMobile />
      </div>
    </>
  );
};

export default OurServices;
