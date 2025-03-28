import React from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Helmet } from "react-helmet";


const ThoughtMarquee = () => {
  const thoughts = [
    {
      name: "Creative Spark",
      username: "@inspiration",
      body: "The best way to predict the future is to create it. What will you build today?",
      img: "https://avatar.vercel.sh/creative",
    },
    {
      name: "Problem Solver",
      username: "@solution",
      body: "Every problem is a gift - without problems we wouldn't grow. What's challenging you?",
      img: "https://avatar.vercel.sh/solver",
    },
    {
      name: "Mind Explorer",
      username: "@curiosity",
      body: "The mind is like a parachute - it only works when it's open. Stay curious!",
      img: "https://avatar.vercel.sh/explorer",
    },
    {
      name: "Dream Weaver",
      username: "@imagination",
      body: "Reality is just a shared dream. What if you could reshape it?",
      img: "https://avatar.vercel.sh/dreamer",
    },
    {
      name: "Wisdom Keeper",
      username: "@knowledge",
      body: "The only true wisdom is in knowing you know nothing. Stay humble, keep learning.",
      img: "https://avatar.vercel.sh/wisdom",
    },
    {
      name: "Change Maker",
      username: "@impact",
      body: "Small actions repeated consistently lead to massive transformations. What's your daily practice?",
      img: "https://avatar.vercel.sh/changer",
    },
    {
      name: "Idea Generator",
      username: "@innovation",
      body: "Ideas are like seeds - some will grow, others won't, but you need to plant many to get a harvest.",
      img: "https://avatar.vercel.sh/idea",
    },
    {
      name: "Perspective Shifter",
      username: "@awareness",
      body: "The map is not the territory. How might you be seeing only part of the picture?",
      img: "https://avatar.vercel.sh/perspective",
    },
  ];

  const firstRow = thoughts.slice(0, thoughts.length / 2);
  const secondRow = thoughts.slice(thoughts.length / 2);

  const MarqueeRow = ({ thoughts, direction }) => {
    // Duplicate thoughts multiple times to ensure continuous movement
    const repeatCount = 4;
    const repeatedThoughts = Array(repeatCount).fill(thoughts).flat();
    console.log(repeatedThoughts, "repeatedThoughts");

    return (
      <div
        className={`
        flex 
        ${
          direction === "right"
            ? "animate-marquee-right"
            : "animate-marquee-left"
        } 
        space-x-4 
        py-4
      `}
      >
        {repeatedThoughts.map((thought, index) => (
          <div
            key={index}
            className={`
              flex-shrink-0 
              w-72 
              p-4 
              rounded-lg 
              shadow-lg 
              bg-[#1a1a1a] 
              border 
              border-[#333] 
              hover:border-[#ffff33] 
              transition-all 
              duration-300
              h-40
            `}
          >
            <div className="flex items-center mb-2">
              <img
                src={thought.img}
                alt={thought.name}
                className="w-10 h-10 rounded-full mr-3 border-2 border-[#ffff33]"
              />
              <div>
                <h3 className="font-semibold text-sm text-[#ffff33]">
                  {thought.name}
                </h3>
                <p className="text-base text-gray-400">{thought.username}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">{thought.body}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black overflow-hidden py-8">
      
      <Helmet>
        <title>Thoughts & Inspirations | Poojan Khamar</title>
        <meta
          name="description"
          content="Explore a collection of thought-provoking insights and inspirations on creativity, innovation, and leadership."
        />
        <meta name="keywords" content="innovation, creativity, leadership, inspiration, motivation, problem-solving, ideas" />
        <meta name="author" content="Poojan Khamar" />
        <meta property="og:title" content="Thoughts & Inspirations | Poojan Khamar" />
        <meta property="og:description" content="Discover a stream of innovative and insightful thoughts on leadership and creativity." />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/thoughts" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thoughts & Inspirations | Poojan Khamar" />
        <meta name="twitter:description" content="Explore a collection of thought-provoking insights and inspirations on creativity and leadership." />
        <meta name="twitter:image" content="https://yourdomain.com/twitter-image.jpg" />
      </Helmet>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffff33] via-yellow-200 to-yellow-300 mb-8 md:mb-16 tracking-tight text-center"
      >
        Thoughts
      </motion.h1>
      <div className="mb-4">
        <MarqueeRow thoughts={firstRow} direction="left" />
      </div>
      <div>
        <MarqueeRow thoughts={secondRow} direction="right" />
      </div>
    </div>
  );
};

export default ThoughtMarquee;
