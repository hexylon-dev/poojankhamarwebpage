import React from "react";
import Marquee from "react-fast-marquee";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Helmet } from "react-helmet";
import Dhaval from "../../assets/poojan/dhaval.webp";
import Dinky from "../../assets/poojan/Dinky Photo.webp";
import Vivek from "../../assets/poojan/vivek.webp";
import ParthDev from "../../assets/poojan/Parth dev.webp";
import Rishit from "../../assets/poojan/Rishit_Khadawala.webp";
import Sneha from "../../assets/poojan/Sneha.webp";
import Rutvik from "../../assets/poojan/Rutvik.webp";
import Gopi from "../../assets/poojan/Gopi.webp";
import ParthCyber from "../../assets/poojan/Parth cyber.webp";
import Syrin from "../../assets/poojan/Syrin.webp";
import Dhruvi from "../../assets/poojan/Dhruvi.webp";
import Poojan from "../../assets/poojan/poojan.webp";
import Princy from "../../assets/poojan/Princy.webp";
import Keval from "../../assets/poojan/kewal.webp";
import Sid from "../../assets/poojan/Siddhart.webp";
import Umesh from "../../assets/poojan/Umesh.webp";
import Harsh from "../../assets/poojan/Harsh.webp";
import Parth from "../../assets/poojan/Parth.webp";
import Honey from "../../assets/poojan/Honey .webp";
import Jignesh from "../../assets/poojan/Jignesh sir.webp";
import nakul from '../../assets/poojan/nakul.webp'
import Rushik from "../../assets/poojan/Rushik sir.webp";
// import Nrupansh from "../../assets/poojan/Nrupansh sir.jpg";

const thoughts = [
  {
    name: "Rishit Khadawala",
    username: "@khadawala_rishit",
    body: "Life is like a river—keep flowing, adapt to obstacles, and find your way",
    img: Rishit,
  },

  {
    name: "Poojan Khamar",
    username: "@poojan_555",
    body: "Believe in yourself. Fail, learn, repeat. Build confidence through effort—success will follow as a natural result",
    img: Poojan,
  },
  {
    name: "Jignesh Patel",
    username: "@Jignesh",
    body: "Temptation to quit is very high when you about to succeed",
    img: Jignesh,
  },
  {
    name: "Rushik Bhatt",
    username: "@Rushik",
    body: "By Preserving Old Oracles, we Journey Amidst Noise with timeless clarity and purpose.",
    img: Rushik,
  },
  {
    name: "Vivek Dafda",
    username: "@vivek_15.10",
    body: "The Only Thing We're Allowed To Do Is Believe That We Won't Regret The Choice We Made.",
    img: Vivek,
  },
  {
    name: "Parth Champaneri",
    username: "@parthsoni11",
    body: "Success is like WiFi—sometimes you just need to move a little to get a better connection",
    img: ParthDev,
  },
  {
    name: "Umesh Taviya",
    username: "@taviya.umesh_oo7",
    body: "Every error occurrs for a reason",
    img: Umesh,
  },
  {
    name: "Dhaval Makani",
    username: "@_itz_dhaval_18",
    body: "Life is like UI design—clarity, balance, and simplicity make the experience truly seamless.",
    img: Dhaval,
  },
  {
    name: "Sneha Khaniya",
    username: "@Sneha",
    body: "Life is all about Our Mind. Shift your perspective, and you shift your world—limitations exist only in perception.",
    img: Sneha,
  },
  {
    name: "Rutvik Prajapati",
    username: "@r__kprajapati45",
    body: "Simplicity is the soul of efficiency",
    img: Rutvik,
  },
  {
    name: "Dinky Shahu",
    username: "@shahu_dinky",
    body: "The basic design is functional, but the great design speaks",
    img: Dinky,
  },
  {
    name: "Princy Bhalu",
    username: "princy_bhalu",
    body: "Everything you want is already yours. You just have to believe it and align with it",
    img: Princy,
  },
  {
    name: "Keval Maru",
    username: "@keval_543",
    body: "Opportunities don't appear; they're built by those who execute, not just think.",
    img: Keval,
  },
  {
    name: "Gopi Kotadiya",
    username: "@Gopi",
    body: "Develop passion for learning,if you do you will never stop to grow",
    img: Gopi,
  },
  {
    name: "Siddharth Ramnani",
    username: "@Siddharth",
    body: "Work hard, study well, and eat and sleep plenty. That is the Turtle Hermit way to learn! ",
    img: Sid,
  },
  {
    name: "Dhruvi Senjaliya",
    username: "@_dhruvi_512",
    body: "Life is a complex algorithm, and every experience is a valuable dataset that shapes who we become.",
    img: Dhruvi,
  },
  {
    name: "Parth Gandhi",
    username: "@parth.gandhi_03",
    body: "End each day with no regrets, knowing you've grown, learned, or achieved something new.",
    img: Parth,
  },
  {
    name: "Nakul Nandola",
    username: "@nakul_.rajput07",
    body: "The universe doesn't whisper—it echoes. Every choice you make reverberates into eternity, shaping worlds you'll never see",
    img: nakul,
  },
  {
    name: "Syrin Macwan",
    username: "@syrin_2398",
    body: "Be a learner, life will never fail you.",
    img: Syrin,
  },
  {
    name: "Parth Prajapati",
    username: "@parth",
    body: "Today Is Hard, Tomorrow Is Much Harder, The Day After Tomorrow Is Nice, Most People Die Tomorrow Evening",
    img: ParthCyber,
  },
  {
    name: "Harsh Maniya",
    username: "@harsh_maniya__0828",
    body: "Consistency is only key to beat failure...",
    img: Harsh,
  },

  {
    name: "Honey Patel",
    username: "@Honey",
    body: "Secure the code, train the mind, craft the interface, and build the future—where cybersecurity, AI/ML, frontend, backend, and design unite.",
    img: Honey,
  },
];

const ThoughtCard = ({ thought, index }) => {
  return (
    <div
      key={index}
      className={`
        flex-shrink-0 
        w-96  
        p-6  
        rounded-xl
        shadow-lg 
        bg-[#1a1a1a] 
        border-2 
        border-[#333] 
        hover:border-[#ffff33] 
        transition-all 
        duration-300
        h-52
      `}
    >
      <div className="flex items-center mb-4">
        {" "}
        {/* Increased margin-bottom */}
        <img
          src={thought.img}
          alt={thought.name}
          className="w-14 h-14 rounded-full mr-4 border-2 border-[#ffff33]" // Larger image
        />
        <div>
          <h3 className="font-semibold text-lg text-[#ffff33]">
            {" "}
            {/* Increased text size */}
            {thought.name}
          </h3>
          <p className="text-lg text-gray-400">{thought.username}</p>{" "}
          {/* Increased text size */}
        </div>
      </div>
      <p className="text-base text-gray-300">{thought.body}</p>{" "}
      {/* Increased text size */}
    </div>
  );
};

const ThoughtsMarquee = () => {
  // Split the thoughts array into two halves
  const halfLength = Math.ceil(thoughts.length / 2);
  const firstRowThoughts = thoughts.slice(0, halfLength);
  const secondRowThoughts = thoughts.slice(halfLength);

  return (
    <div className="bg-black py-10 flex flex-col gap-6">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffff33] text-center mb-4 md:mb-8 leading-tight">
          Team Thoughts & Insights
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto">
          Explore inspiring thoughts from our team. Gain wisdom, motivation, and
          unique perspectives on innovation, growth, and success.
        </p>
      </div>
      {/* First row - Left to Right */}
      <div className="mb-2">
        <Marquee gradient={false} speed={50} direction="left" pauseOnHover>
          {firstRowThoughts.map((thought, index) => (
            <div key={index} className="mx-4">
              <ThoughtCard thought={thought} index={index} />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Second row - Right to Left */}
      <div>
        <Marquee gradient={false} speed={40} direction="right" pauseOnHover>
          {secondRowThoughts.map((thought, index) => (
            <div key={index} className="mx-4">
              <ThoughtCard thought={thought} index={index + halfLength} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ThoughtsMarquee;
