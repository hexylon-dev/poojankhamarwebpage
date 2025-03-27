"use client"

export default function Testimonials() {
  return (
    <div className="relative w-full min-h-[500px] bg-[#19191A] rounded-3xl overflow-hidden flex items-center px-12 py-16 max-w-6xl mx-auto">
      {/* Content container */}
      <div className="relative max-w-xl mx-auto">
        <h1 className="text-[#f0f050] text-5xl md:text-6xl font-bold leading-tight mb-12">
          Ready to shape the future with me?
        </h1>
        <button
          className="bg-[#f0f050] text-black font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors block w-full sm:w-auto"
          onClick={() => console.log("Contact button clicked")}
        >
          Contact Me Directly
        </button>
      </div>

      {/* Decorative circles - 4 circles */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="relative w-[600px] h-[600px]">
          {/* Circle 1 - Largest and lightest */}
          <div
            className="absolute rounded-full"
            style={{
              width: "100%",
              height: "100%",
              right: "-30%",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(240, 240, 80, 0.15)",
              zIndex: 1,
            }}
          />

          {/* Circle 2 */}
          <div
            className="absolute rounded-full"
            style={{
              width: "80%",
              height: "80%",
              right: "-25%",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(240, 240, 80, 0.25)",
              zIndex: 2,
            }}
          />

          {/* Circle 3 */}
          <div
            className="absolute rounded-full"
            style={{
              width: "60%",
              height: "60%",
              right: "-20%",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(240, 240, 80, 0.35)",
              zIndex: 3,
            }}
          />

          {/* Circle 4 - Smallest and darkest */}
          <div
            className="absolute rounded-full"
            style={{
              width: "40%",
              height: "40%",
              right: "-15%",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(240, 240, 80, 0.45)",
              zIndex: 4,
            }}
          />
        </div>
      </div>
    </div>
  )
}

