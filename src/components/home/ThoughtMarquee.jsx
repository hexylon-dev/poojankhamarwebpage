import React from "react";
import Marquee from "react-fast-marquee";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Helmet } from "react-helmet";
import Dhaval from "../../assets/poojan/dhaval.png";
import Dinky from "../../assets/poojan/Dinky Photo.jpg";
import Vivek from "../../assets/poojan/WhatsApp Image 2025-02-26 at 8.03.41 PM (1) 1.png";
import ParthDev from "../../assets/poojan/Parth dev.png";
import Rishit from "../../assets/poojan/Rishit_Khadawala.jpg";
import Sneha from "../../assets/poojan/Sneha.jpg";
import Rutvik from "../../assets/poojan/Rutvik.png";
import Gopi from "../../assets/poojan/Gopi.jpg";
import ParthCyber from "../../assets/poojan/Path cyber (2).jpg";
import Syrin from "../../assets/poojan/Syrin.jpg";
import Dhruvi from "../../assets/poojan/Dhruvi.jpg";
import Poojan from "../../assets/poojan/poojan.png";
import Princy from "../../assets/poojan/Princy.png";
import Keval from "../../assets/poojan/kewal.jpg";
import Sid from "../../assets/poojan/Siddhart.jpg";
import Umesh from "../../assets/poojan/Umesh.jpg";
import Harsh from "../../assets/poojan/Harsh.jpg";
import Parth from "../../assets/poojan/Parth.jpg";
import Honey from "../../assets/poojan/Honey .jpg";
import Jignesh from "../../assets/poojan/Jignesh sir.png";
import Rushik from "../../assets/poojan/Rushik sir.png";
import Nrupansh from "../../assets/poojan/Nrupansh sir.jpg";

const thoughts = [
  {
    name: "Rishit Khadawala",
    username: "@knowledge",
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
    username: "@knowledge",
    body: "Temptation to quit is very high when you about to succeed",
    img: Jignesh,
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
    username: "@knowledge",
    body: "Every error occurrs for a reason",
    img: Umesh,
  },
  {
    name: "Dhaval Makani",
    username: "@imagination",
    body: "Life is like UI design—clarity, balance, and simplicity make the experience truly seamless.",
    img: Dhaval,
  },
  {
    name: "Sneha Khaniya",
    username: "@knowledge",
    body: "Life is all about Our Mind. Shift your perspective, and you shift your world—limitations exist only in perception.",
    img: Sneha,
  },
  {
    name: "Rutvik Prajapati",
    username: "@knowledge",
    body: "Simplicity is the soul of efficiency",
    img: Rutvik,
  },
  {
    name: "Dinky Shahu",
    username: "@knowledge",
    body: "The basic design is functional, but the great design speaks",
    img: Dinky,
  },
  {
    name: "Princy Bhalu",
    username: "@knowledge",
    body: "Everything you want is already yours. You just have to believe it and align with it",
    img: Princy,
  },
  {
    name: "Keval Maru",
    username: "@knowledge",
    body: "Opportunities don't appear; they're built by those who execute, not just think.",
    img: Keval,
  },
  {
    name: "Gopi Kotadiya",
    username: "@knowledge",
    body: "Develop passion for learning,if you do you will never stop to grow",
    img: Gopi,
  },
  {
    name: "Sidharth Ramnani",
    username: "@knowledge",
    body: "Work hard, study well, and eat and sleep plenty. That is the Turtle Hermit way to learn! ",
    img: Sid,
  },
  {
    name: "Dhruvi Senjaliya",
    username: "@knowledge",
    body: "Life is a complex algorithm, and every experience is a valuable dataset that shapes who we become.",
    img: Dhruvi,
  },
  {
    name: "Parth Gandhi",
    username: "@knowledge",
    body: "End each day with no regrets, knowing you've grown, learned, or achieved something new.",
    img: Parth,
  },
  {
    name: "Nakul Patel",
    username: "@knowledge",
    body: "The universe doesn't whisper—it echoes. Every choice you make reverberates into eternity, shaping worlds you'll never see",
    img: Gopi,
  },
  {
    name: "Syrin Macwan",
    username: "@knowledge",
    body: "Be a learner, life will never fail you.",
    img: Syrin,
  },
  {
    name: "Parth Prajapati",
    username: "@knowledge",
    body: "Today Is Hard, Tomorrow Is Much Harder, The Day After Tomorrow Is Nice, Most People Die Tomorrow Evening",
    img: ParthCyber,
  },
  {
    name: "Harsh Maviya",
    username: "@knowledge",
    body: "Consistency is only key to beat failure...",
    img: Harsh,
  },
  {
    name: "Honey Patel",
    username: "@knowledge",
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
