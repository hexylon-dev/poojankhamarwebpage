import React from "react";
import OurWorkBusinessOperation from "../assets/svgs/OurWorkBusinessOperation";
import OurWorkWebDevelopment from "../assets/svgs/OurWorkWebDevelopment";
import OurWorkAiDriven from "../assets/svgs/OurWorkAiDriven";
import OurWorkUnique from "../components/OurWorkUnique";
import { useNavigate } from "react-router-dom";

function OurWork() {
  const navigate = useNavigate();
  return (
    <>
    <div className="bg-black relative ">
      <div className="text-[#2182DF] text-2xl md:text-4xl text-center mt-20 max-w-7xl mx-auto">
          <h1> Our Work </h1>
          <div className="text-gray-100 text-lg  md:text-2xl text-center mt-5">
          Transforming business operations with automation and real-time dashboards, empowering digital presence through custom websites and platforms like Reequitiz, and delivering personalized education with AI-driven learning paths and career guidance.
          </div>
        </div>
      <div className="flex gap-4 bg-black md:pl-10 p-2 pb-5 pt-28 max-w-[1600px] lg:flex-row flex-col  justify-center m-auto">
        <div className="block rounded-3xl border border-[#2182DF] p-4 max-w-4xl">
          <h2 className="mt-2 font-semibold text-2xl text-white">
            Transforming Business Operations
          </h2>
          <div className="flex flex-col-reverse xl:flex-row mt-7 justify-center items-center">
            <p className="sm:mt-1 block text-sm sm:text-base text-[#B6B6B6] xl:max-w-[350px] w-full xl:text-left text-center ">
              Our solutions empower businesses to streamline processes across
              departments such as HR, Sales, and Purchasing. We integrate
              advanced automation and provide user-friendly dashboards for
              real-time insights, ensuring smooth operations and enhanced
              productivity in Assembly, Customer Support, and Admin functions.
            </p>

            <div className="inline-flex align-middle justify-center items-center select-none text-white mb-3 ">
              <OurWorkBusinessOperation className="md:h-[200px] h-[120px] w-[150px]" />
            </div>
          </div>
        </div>
        <div className="block rounded-3xl border border-[#2182DF] p-4 max-w-4xl">
          <h2 className="mt-2 font-semibold text-2xl text-white">
            Web Development & Empowering Platforms
          </h2>
          <div className="flex flex-col-reverse xl:flex-row mt-7 justify-center items-center">
            <p className="sm:mt-1 block text-sm sm:text-base text-[#B6B6B6] xl:max-w-[350px] w-full xl:text-left text-center ">
              We create custom websites that elevate your online presence and
              streamline business operations. Tailored to meet your specific
              needs, our user-friendly solutions ensure a seamless digital
              experience. For instance, platforms like Reequitiz empower
              individuals to confidently navigate financial landscapes, offering
              a blend of education and practical strategies to transform
              beginners into informed contributors.
            </p>
            <div className="inline-flex align-middle justify-center items-center select-none text-white mb-3 ">
              <OurWorkWebDevelopment className="md:h-[200px] h-[120px] w-[150px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 bg-black md:pl-10 p-2 pb-5  max-w-[1600px] lg:flex-row flex-col justify-center m-auto">
        <div className="block rounded-3xl border border-[#2182DF] p-4 sm:col-span-2 xl:w-[50%] lg:w-[45%] w-[94%]">
          <h2 className="mt-2 font-semibold text-2xl text-white">
            AI-Driven Personalized Learning
          </h2>
          <div className="flex flex-col-reverse xl:flex-row mt-7 justify-center items-center">
            <p className="sm:mt-1 block text-sm sm:text-base text-[#B6B6B6] xl:max-w-[450px] w-full xl:text-left text-center ">
              Our Education AI system is designed to create customized learning
              paths that adapt to each student's unique needs and strengths.
               Offering multilingual support, interactive learning environments,
              and continuous progress tracking, it ensures a tailored
              educational journey. The platform also includes career
              assessments, providing students with clarity and guidance as they
              navigate their path toward success.
            </p>
            <div className="inline-flex align-middle justify-center items-center select-none text-white">
              <OurWorkAiDriven className="md:h-[200px] h-[120px] w-[150px]" />
            </div>
          </div>
        </div>
        <div className="block self-center min-w-4xl">
          <button className="group relative px-6 py-2 bg-black border border-blue-500 rounded-md ">
            <div className="absolute inset-0 rounded-md bg-black  blur-md transition-all group-hover:blur-lg" />
            <div className="relative flex items-center space-x-2 text-blue-500" onClick={() => navigate("/our-work")}>
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
    </>
  );
}

export default OurWork;
