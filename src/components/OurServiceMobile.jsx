import { useState } from "react";
import {
  ChevronDown,
  FileText,
  Paintbrush,
  TestTube,
  Truck,
} from "lucide-react";

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
import ServviceCardNaturalLanguage from "../assets/svgs/ServiceCardNaturalLanguage";
import ServiceCardComputerVision from "../assets/svgs/ServiceCardComputerVision";
import ServiceCardRecommendationSystems from "../assets/svgs/ServiceCardRecommendationSystems";
import ServiceCardCustomAI from "../assets/svgs/ServiceCardCustomAI";
import ServiceCardAutoML from "../assets/svgs/ServiceCardAutoML";
import ServiceCardNaturalLanguage from "../assets/svgs/ServiceCardNaturalLanguage";
import ServiceCardConversationalAI from "../assets/svgs/ServiceCardConversationalAI";
import ServiceCardAIforProcessAutomation from "../assets/svgs/ServiceCardAIforProcessAutomation";
import ServiceCardAIPoweredDataAnalytics from "../assets/svgs/ServiceCardAIPoweredDataAnalytics";
import { Navigate, useNavigate } from "react-router-dom";
import blue from "../assets/particle.png";

// const accordionData = [
//   {
//     id: 1,
//     path: "/services/predictive-analytics",
//     title: "Predictive Analytics Solutions Development",
//     iconSvg: <ServicePredictiveAnalytics />,
//     description:
//       "Unlock actionable insights and drive business growth with Hexylon's Predictive Analytics Solutions. Using advanced AI, machine learning, and data science, we forecast trends, optimize processes, and mitigate risks. Our tailored solutions empower businesses to enhance efficiency, streamline resource allocation, and improve customer satisfaction. From sales forecasting and risk management to personalized customer insights, our tools ensure sustainable growth and profitability. Powered by technologies like Python, TensorFlow, and cloud platforms, Hexylon delivers scalable, data-driven strategies. Partner with us to make smarter decisions, adapt to market changes, and achieve measurable results with cutting-edge predictive analytics. Contact us today!",
//   },
//   {
//     id: 2,
//     path: "/services/natural-language",
//     title: "Natural Language Processing (NLP)",
//     iconSvg: <NaturalLanguage />,
//     description:
//       "Hexylon delivers cutting-edge Natural Language Processing (NLP) solutions to transform your business. Using AI-driven models like GPT and BERT, we automate tasks, enhance customer experiences, and extract actionable insights from unstructured data. Our services include AI-powered chatbots, sentiment analysis, text classification, and language translation, helping businesses streamline operations and personalize interactions. Using advanced technologies like SpaCy and top cloud-based AI platforms, we deliver scalable, tailored NLP solutions that ensure accuracy, efficiency, and impactful results. With Hexylon, unlock the power of language to boost efficiency, improve decision-making, and drive measurable growth. Contact us today to revolutionize your operations with NLP.",
//   },
//   {
//     id: 3,
//     path: "/services/computer-vision",
//     title: "Computer Vision",
//     iconSvg: <ServiceComputerVision />,
//     description:
//       "Hexylon Analytics offers cutting-edge AI-driven computer vision solutions to help businesses unlock actionable insights and optimize operations. Using advanced algorithms, deep learning, and real-time image and video analysis, we enhance security, improve healthcare, and automate processes. Our services include AI-powered object detection, facial recognition, real-time surveillance, healthcare imaging, and autonomous vehicle vision systems. With robust technologies like OpenCV, TensorFlow, and Nvidia CUDA, we provide scalable, customized solutions to meet your industry needs. Leverage the power of computer vision to drive efficiency, security, and innovation in your business. Contact us to revolutionize your operations with AI-driven vision technology.",
//   },
//   {
//     id: 4,
//     path: "/services/recommendation-systems",
//     title: "Recommendation Systems",
//     iconSvg: <ServiceRecommendationSystems />,
//     description:
//       "Hexylon Analytics delivers advanced AI-driven recommendation systems that personalize user experiences and boost business outcomes. Our machine learning-based engines use collaborative filtering, content-based filtering, and predictive analytics to optimize product suggestions, content recommendations, and mobile app experiences. These smart algorithms enhance user engagement, increase conversions, and improve customer satisfaction. By analyzing user behaviour and preferences, our recommendation systems provide tailored, data-driven solutions for industries like e-commerce, media, and entertainment. Our scalable, customizable recommendation engines will help your business stay competitive, engaging users with dynamic, personalized content that drives results. Contact Hexylon Analytics to enhance your business with powerful AI-powered recommendations.",
//   },
//   {
//     id: 5,
//     title: "Custom AI Models",
//     path: "/services/custom-ai-models",
//     iconSvg: <ServiceCustomAI />,
//     description:
//       "Elevate your business with our tailored custom AI models, designed to optimize operations, enhance customer experiences, and drive innovation. Our machine learning and deep learning expertise empowers businesses with predictive insights, automated processes, and scalable solutions. From personalized customer experiences to operational efficiency, our custom AI models deliver actionable results. Contact us today to unlock the full potential of your data with our custom AI model development services!",
//   },
//   {
//     id: 6,
//     title: "Automated Machine Learning (AutoML)",
//     path: "/services/automated-machine-learning",
//     iconSvg: <AutoML />,
//     description:
//       "Transform your business with our cutting-edge AutoML solutions. By automating the entire machine learning pipeline—from data preprocessing and model selection to deployment and ongoing optimization—our solutions empower you to unlock valuable insights faster. With AutoML, you can automate decision-making, improve operational efficiency, and scale your business effortlessly. Whether you're looking to predict trends, optimize resources, or enhance customer experiences, AutoML enables data-driven growth. Reach out today to start your journey with AutoML and unlock the full potential of your data!",
//   },
//   {
//     id: 7,
//     title: "AI-Powered Data Analytics",
//     path: "/services/ai-powered-data-analytics",
//     iconSvg: <ServiceNaturalLanguage />,
//     description:
//       "Our AI-powered data analytics solutions automate complex data workflows, allowing you to make data-driven decisions faster and more accurately. With AI, you can uncover trends, predict outcomes, and optimize business processes, all while saving time and costs. Let's help you unlock the power of your data and drive better outcomes for your business.",
//   },
//   {
//     id: 8,
//     title: "Conversational AI",
//     path: "/services/conversational-ai",
//     iconSvg: <ServiceConversationalAI />,
//     description:
//       "Our conversational AI solutions help businesses automate and enhance customer engagement, deliver personalized experiences, and drive operational efficiency. Whether through chatbots, virtual assistants, or voice solutions, we enable businesses to stay ahead with AI-powered communication systems. Let us show you how conversational AI can revolutionize your customer interactions and business outcomes.",
//   },
//   {
//     id: 9,
//     title: "AI for Process Automation",
//     path: "/services/ai-for-process-automation",
//     iconSvg: <ServiceAIforProcessAutomation />,
//     description:
//       "Hexylon Analytics is a leading provider of AI-powered process automation solutions designed to revolutionize business operations. In today’s fast-paced world, efficiency and accuracy are crucial to maintaining a competitive edge, and Hexylon Analytics leverages advanced artificial intelligence to streamline workflows, reduce costs, and boost productivity. By automating repetitive tasks, optimizing workflows, and enhancing scalability, businesses can focus on innovation and strategic growth. With solutions that minimize human error, speed up processes, and provide actionable insights, Hexylon Analytics ensures operational excellence across various industries.",
//   },
// ];

const accordionData = [
  {
    id: 1,
    title: "Predictive Analytics Solutions Development",
    iconSvg: <ServicePredictiveAnalytics />,
    cardImg: <ServiceCardPredictiveAnalytics />,
    path: "/services/predictive-analytics",
    description:
      "Unlock actionable insights and drive business growth with Hexylon's Predictive Analytics Solutions. Using advanced AI, machine learning, and data science, we forecast trends, optimize processes, and mitigate risks. Our tailored solutions empower businesses to enhance efficiency, streamline resource allocation, and improve customer satisfaction. From sales forecasting and risk management to personalized customer insights, our tools ensure sustainable growth and profitability. Powered by technologies like Python, TensorFlow, and cloud platforms, Hexylon delivers scalable, data-driven strategies. Partner with us to make smarter decisions, adapt to market changes, and achieve measurable results with cutting-edge predictive analytics. Contact us today!",
  },
  {
    id: 2,
    title: "Natural Language Processing (NLP)",
    iconSvg: <NaturalLanguage />,
    cardImg: <ServviceCardNaturalLanguage />,
    path: "/services/natural-language",
    description:
      "Hexylon delivers cutting-edge Natural Language Processing (NLP) solutions to transform your business. Using AI-driven models like GPT and BERT, we automate tasks, enhance customer experiences, and extract actionable insights from unstructured data. Our services include AI-powered chatbots, sentiment analysis, text classification, and language translation, helping businesses streamline operations and personalize interactions. Using advanced technologies like SpaCy and top cloud-based AI platforms, we deliver scalable, tailored NLP solutions that ensure accuracy, efficiency, and impactful results. With Hexylon, unlock the power of language to boost efficiency, improve decision-making, and drive measurable growth. Contact us today to revolutionize your operations with NLP.",
  },
  {
    id: 3,
    title: "Computer Vision",
    path: "/services/computer-vision",
    iconSvg: <ServiceComputerVision />,
    cardImg: <ServiceCardComputerVision  />,
    description:
      "Hexylon Analytics offers cutting-edge AI-driven computer vision solutions to help businesses unlock actionable insights and optimize operations. Using advanced algorithms, deep learning, and real-time image and video analysis, we enhance security, improve healthcare, and automate processes. Our services include AI-powered object detection, facial recognition, real-time surveillance, healthcare imaging, and autonomous vehicle vision systems. With robust technologies like OpenCV, TensorFlow, and Nvidia CUDA, we provide scalable, customized solutions to meet your industry needs. Leverage the power of computer vision to drive efficiency, security, and innovation in your business. Contact us to revolutionize your operations with AI-driven vision technology.",
  },
  {
    id: 4,
    title: "Recommendation Systems",
    path: "/services/recommendation-systems",
    iconSvg: <ServiceRecommendationSystems />,
    cardImg: <ServiceCardRecommendationSystems />,
    description:
      "Hexylon Analytics delivers advanced AI-driven recommendation systems that personalize user experiences and boost business outcomes. Our machine learning-based engines use collaborative filtering, content-based filtering, and predictive analytics to optimize product suggestions, content recommendations, and mobile app experiences. These smart algorithms enhance user engagement, increase conversions, and improve customer satisfaction. By analyzing user behaviour and preferences, our recommendation systems provide tailored, data-driven solutions for industries like e-commerce, media, and entertainment. Our scalable, customizable recommendation engines will help your business stay competitive, engaging users with dynamic, personalized content that drives results. Contact Hexylon Analytics to enhance your business with powerful AI-powered recommendations.",
  },
  {
    id: 5,
    title: "Custom AI Models",
    iconSvg: <ServiceCustomAI />,
    cardImg: <ServiceCardCustomAI />,
    path: "/services/custom-ai-models",
    description:
      "Elevate your business with our tailored custom AI models, designed to optimize operations, enhance customer experiences, and drive innovation. Our machine learning and deep learning expertise empowers businesses with predictive insights, automated processes, and scalable solutions. From personalized customer experiences to operational efficiency, our custom AI models deliver actionable results. Contact us today to unlock the full potential of your data with our custom AI model development services!",
  },
  {
    id: 6,
    title: "Automated Machine Learning (AutoML)",
    path:"/services/automated-machine-learning",
    iconSvg: <AutoML />,
    cardImg: <ServiceCardAutoML/>,
    description:
      "Transform your business with our cutting-edge AutoML solutions. By automating the entire machine learning pipeline—from data preprocessing and model selection to deployment and ongoing optimization—our solutions empower you to unlock valuable insights faster. With AutoML, you can automate decision-making, improve operational efficiency, and scale your business effortlessly. Whether you're looking to predict trends, optimize resources, or enhance customer experiences, AutoML enables data-driven growth. Reach out today to start your journey with AutoML and unlock the full potential of your data!",
  },
  {
    id: 7,
    title: "AI-Powered Data Analytics",
    path: "/services/ai-powered-data-analytics",
    iconSvg: <ServiceNaturalLanguage />,
    cardImg: <ServiceCardAIPoweredDataAnalytics/>,
    description:
      "Our AI-powered data analytics solutions automate complex data workflows, allowing you to make data-driven decisions faster and more accurately. With AI, you can uncover trends, predict outcomes, and optimize business processes, all while saving time and costs. Let's help you unlock the power of your data and drive better outcomes for your business.",
  },
  {
    id: 8,
    title: "Conversational AI",
    path: "/services/conversational-ai",
    iconSvg: <ServiceConversationalAI />,
    cardImg: <ServiceCardConversationalAI />,
    description:
      "Our conversational AI solutions help businesses automate and enhance customer engagement, deliver personalized experiences, and drive operational efficiency. Whether through chatbots, virtual assistants, or voice solutions, we enable businesses to stay ahead with AI-powered communication systems. Let us show you how conversational AI can revolutionize your customer interactions and business outcomes.",
  },
  {
    id: 9,
    title: "AI for Process Automation",
    path: "/services/ai-for-process-automation",
    iconSvg: <ServiceAIforProcessAutomation />,
    cardImg: <ServiceCardAIforProcessAutomation  />,
    description:
      "Hexylon Analytics is a leading provider of AI-powered process automation solutions designed to revolutionize business operations. In today’s fast-paced world, efficiency and accuracy are crucial to maintaining a competitive edge, and Hexylon Analytics leverages advanced artificial intelligence to streamline workflows, reduce costs, and boost productivity. By automating repetitive tasks, optimizing workflows, and enhancing scalability, businesses can focus on innovation and strategic growth. With solutions that minimize human error, speed up processes, and provide actionable insights, Hexylon Analytics ensures operational excellence across various industries.",
  },
];

export default function OurServicesMobile() {
  const [openItem, setOpenItem] = useState(accordionData[0]?.id);
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-4">
      {accordionData.map((item) => (
        <div
          key={item.id}
          className={`transition-all duration-300 ease-in-out p-4 rounded-md ${
            openItem === item.id ? "text-white" : "bg-zinc-900 text-white"
          }`}
          style={{
            backgroundImage: openItem === item.id ? `url(${blue})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="cursor-pointer"
            onClick={() => setOpenItem(openItem === item.id ? "" : item.id)}
          >
            <div
              className={`flex items-center justify-between text-lg ${
                openItem === item.id ? "text-zinc-900" : "text-white"
              }`}
            >
              <span className="flex items-center gap-2 text-[#2182DF] md:text-2xl text-sm">
                {item.iconSvg}
                {item.title}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 text-white ${
                  openItem === item.id ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out mt-2 ${
              openItem === item.id
                ? "max-h-content opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-7">{item.cardImg}</div>
            <p className="text-white mt-5">{item.description}</p>
            <div className="w-full flex justify-center mt-5">
              <button className="group relative px-6 py-2 bg-black border border-blue-500 rounded-md">
                <div className="absolute inset-0 rounded-md bg-blue-500/20 blur-md transition-all group-hover:blur-lg" />
                <div
                  className="relative flex items-center space-x-2 text-blue-500"
                  onClick={() => navigate(item.path)}
                >
                  <span className="text-lg">read more</span>
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
      ))}
    </div>
  );
}
