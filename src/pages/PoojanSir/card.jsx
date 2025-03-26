"use client"

import { useEffect, useState } from "react"

export default function CardStacking() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate the position of the second card
  const calculateCardPosition = () => {
    const cardHeight = 250 // Height of the card in pixels
    const scrollThreshold = 300 // How much scroll before card is fully stacked

    // Start with full offset (cards separated)
    const offset = cardHeight + 20 // Card height + some margin

    // Reduce offset as user scrolls, but never go below 0
    const reduction = Math.min(offset, (scrollPosition / scrollThreshold) * offset)
    return offset - reduction
  }

  const secondCardOffset = calculateCardPosition()

  return (
    <div className="min-h-[150vh] w-full bg-gray-50 pt-10 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">Card Stacking Effect</h1>
      <p className="text-center text-gray-500 mb-10">Scroll down to see the stacking effect</p>

      <div className="relative max-w-2xl mx-auto">
        {/* First card - stays fixed */}
        <div className="w-full h-[250px] rounded-xl p-6 shadow-lg sticky top-20 z-10 bg-rose-100">
          <h2 className="text-xl font-semibold mb-3">Card One</h2>
          <p className="text-gray-700">This is the first card with some sample content.</p>
          <div className="mt-auto pt-4">
            <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              Learn More
            </button>
          </div>
        </div>

        {/* Second card - moves to stack on top of first card */}
        <div
          className="w-full h-[250px] rounded-xl p-6 shadow-lg sticky top-20 z-20 bg-blue-100 transition-transform duration-300"
          style={{
            transform: `translateY(${secondCardOffset}px)`,
          }}
        >
          <h2 className="text-xl font-semibold mb-3">Card Two</h2>
          <p className="text-gray-700">This is the second card with different content.</p>
          <div className="mt-auto pt-4">
            <button className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              Learn More
            </button>
          </div>
        </div>

        {/* Spacer to allow scrolling */}
        <div className="h-[100vh]"></div>
      </div>
    </div>
  )
}

