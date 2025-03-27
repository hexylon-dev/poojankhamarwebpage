import React from "react";

const IdeasCard = () => {
  return (
    <div className=" relative overflow-hidden">
      <div className="max-w-6xl mx-auto p-4">
        <div
          id="card2"
          className="relative bg-[#141414] rounded-3xl border border-[rgba(204,204,204,0.1)] overflow-hidden h-[500px]"
          style={{ perspective: "1200px" }}
        >
          {/* Orange blur effect */}
          <div
            className="absolute bg-[#d48740] rounded-full blur-[100px] opacity-15"
            style={{
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          ></div>

          <div className="relative z-10 flex flex-col md:flex-row h-full px-10 py-[40px]">
            {/* Left side - Content */}
            <div className="flex-1 flex flex-col">
              <div className="mb-6">
                <h3 className="text-3xl md:text-[40px] text-white tracking-[-0.5px] leading-[1.2]">
                  Ideas That Don't Follow the Rules
                </h3>
                <p className="text-lg md:text-[20px] text-[rgba(161,161,161,0.5)] tracking-[-0.3px] leading-[1.4] mt-4">
                  <strong>
                    Creative concepts designed to disrupt and elevate.
                  </strong>
                </p>
              </div>

              {/* Button */}
              <a
                href="./ideas"
                className="inline-flex justify-center items-center self-start bg-[#ffff33] border border-[rgba(255,255,255,0.15)] rounded-[37px] px-6 py-3 shadow-[inset0-1px_0_0_rgba(47,43,67,0.1),0_1px_3px_0_rgba(47,43,67,0.1)] hover:opacity-90 transition-opacity  mb-4"
              >
                <span className="text-black  tracking-[-0.16px] leading-[24px]">
                  View Ideas
                </span>
              </a>
            </div>

            {/* Right side - Image */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full max-w-[500px] h-full rounded-lg overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/iXR2XBRSun8fqqvlwUfICnktc.png"
                  alt="Ideas Illustration"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeasCard;
