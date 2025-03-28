import React from 'react';
import { Brain, Code, Megaphone, Palette, Users } from 'lucide-react';
import Dhaval from '../../assets/poojan/dhaval.png'
import Dinky from '../../assets/poojan/Dinky Photo.jpg'
import Vivek from '../../assets/poojan/WhatsApp Image 2025-02-26 at 8.03.41 PM (1) 1.png'
import ParthDev from '../../assets/poojan/Parth dev.png'
import Umesh from '../../assets/poojan/Umesh.jpg'
import Rishit from '../../assets/poojan/Rishit_Khadawala.jpg'
import Sneha from '../../assets/poojan/Sneha.jpg'
import Rutvik from '../../assets/poojan/Rutvik.png'
import Gopi from '../../assets/poojan/Gopi.jpg'
import ParthCyber from '../../assets/poojan/Path cyber (2).jpg'
import Harsh from '../../assets/poojan/Harsh.jpg'
import Syrin from '../../assets/poojan/Syrin.jpg'
import Parth from '../../assets/poojan/Parth.jpg'
import Dhruvi from '../../assets/poojan/Dhruvi.jpg'
import Poojan from '../../assets/poojan/poojan.png'
import Jignesh from '../../assets/poojan/Jignesh sir.png'
import Rushik from '../../assets/poojan/Rushik sir.png'
import Uday from '../../assets/poojan/Uday-C-Patel lom.jpg'
import Nrupansh from '../../assets/poojan/Nrupansh sir.jpg'
import Princy from '../../assets/poojan/Princy.png'
import Keval from '../../assets/poojan/kewal.jpg'
import Sid from '../../assets/poojan/Siddhart.jpg'
// import Nakul from '../../assets/poojan'
function App() {
  const departments = [
    {
        icon: <Users className="w-8 h-8" />, 
        title: "Co-Directors",
        subtitle: "The Leadership Backbone",
        description: "Vision without execution is nothing. And execution is our game. Alongside me, my co-directors play a crucial role in defining strategy, making high-stakes decisions, and leading innovation.",
        members: [
          {
            name: "Poojan Khamar",
            role: "Co-Director",
            image: Poojan
          },
          {
              name: "Jignesh Patel",
              role: "Co-Director",
              image: Jignesh
            },
            {
              name: "Rushik Bhatt",
              role: "Co-Director",
              image: Rushik
            },
            {
              name: "Nrupansh Dalwadi",
              role: "Co-Director",
              image: Nrupansh
            },
        ]
      },
      {
        icon: <Palette className="w-8 h-8" />, 
        title: "Creative Team",
        subtitle: "The Visionary Creators",
        description: "Our creative team transforms concepts into compelling designs that resonate with users. We blend aesthetics with functionality to create impactful experiences.",
        members: [
          {
            name: "Princy Bhalu",
            role: "Team Leader",
            image: Princy
          },
            {
              name: "Keval Maru",
              role: "Team Leader",
              image: Keval
            },
            {
              name: "Sidhharth Ramnani",
              role: "Team Leader",
              image: Sid
            }
        ]
      },
      {
        icon: <Palette className="w-8 h-8" />, 
        title: "Design Team",
        subtitle: "The Creative Architects",
        description: "Design isn't just about how things look—it's about how they work. We bring ideas to life with precision and impact.",
        members: [
          {
            name: "Dhaval Makani",
            role: "Lead Designer",
            image: Dhaval
          },
          {
            name: "Dinky Sahu",
            role: "UI/UX Designer",
            image: Dinky
          }
        ]
      },

    {
        icon: <Code className="w-8 h-8" />, 
        title: "Development Team",
        subtitle: "The Code Warriors",
        description: "Every great innovation starts with a solid foundation of code. From AI platforms to custom solutions, our full-stack developers are the architects of the digital future.",
        members: [
          {
            name: "Vivek Dafda",
            role: "Frontend Developer",
            image: Vivek
          },
          {
            name: "Parth Champaneri",
            role: "Frontend Developer",
            image: ParthDev
          },
          {
            name: "Umesh Taviya",
            role: "Frontend Developer",
            image: Umesh
          },
          {
            name: "Rishit Khadawala",
            role: "Backend Developer",
            image: Rishit
          },
          {
            name: "Sneha Khaniya",
            role: "Backend Developer",
            image: Sneha
          },
          {
            name: "Rutvik Prajapati",
            role: "Frontend Developer",
            image: Rutvik
          },
        ]
      },
    {
      icon: <Brain className="w-8 h-8" />, 
      title: "AI/ML Team",
      subtitle: "The Intelligence Engineers",
      description: "We don't just build AI—we teach it to think. Our engineers are pioneering the future of AI, crafting models that understand human behavior, predict trends, and revolutionize industries.",
      members: [
        {
            name: "Gopi Kotadiya",
            role: "AI/ML Engineer",
            image: Gopi
          },
          {
            name: "Parth Prajapati",
            role: "AI/ML Engineer",
            image: ParthCyber
          },
          {
            name: "Harsh Maniya",
            role: "AI/ML Engineer",
            image: Harsh
          },
          {
            name: "Nakul Nandola",
            role: "AI/ML Engineer",
            image: Gopi
          },
          {
            name: "Syrin macwan",
            role: "AI/ML Engineer",
            image: Syrin
          },
          {
            name: "Parth Modi",
            role: "AI/ML Engineer",
            image: Parth
          },
          {
            name: "Dhruvi Senjaliya",
            role: "AI/ML Engineer",
            image: Dhruvi
          },
      ]
    },

  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-10">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#ffff33]/5 opacity-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#ffff33] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#ffff33] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ffff33] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-5000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header section with enhanced styling */}
        <div className="text-center mb-24">
          <h1 className="text-6xl font-bold mb-8 relative inline-block">
            <span className="bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] text-transparent bg-clip-text">Meet Our Team</span>
            <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-[#ffff33] via-yellow-400 to-[#ffff33] transform scale-x-100 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the brilliant minds behind our success
          </p>
        </div>

        <div className="space-y-24">
          {departments.map((dept, index) => (
            <div 
              key={index} 
              className="bg-black/60 backdrop-blur-lg border-2 border-[#ffff33] rounded-2xl shadow-xl overflow-hidden hover:shadow-[#ffff33]/40 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-[#ffff33] rounded-full text-black transform transition-transform duration-300 hover:scale-110 hover:rotate-6 shadow-lg">
                    {dept.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-[#ffff33] mb-2">{dept.title}</h2>
                    <p className="text-lg text-white font-medium">{dept.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-4xl">{dept.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                  {dept.members.map((member, memberIndex) => (
                    <div 
                      key={memberIndex} 
                      className="group relative flex flex-col items-center"
                      style={{ animation: `fadeIn 0.6s ease-out ${memberIndex * 0.1}s both` }}
                    >
                      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#ffff33] relative mb-4 shadow-lg shadow-[#ffff33]/20 hover:shadow-[#ffff33]/40 transition-all duration-300 transform group-hover:scale-105 animate-pulse-slow">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="text-center mt-2 bg-black/60 backdrop-blur-sm py-3 px-6 rounded-xl border border-[#ffff33]/30 transform transition-all duration-300 group-hover:border-[#ffff33] group-hover:scale-105 w-full">
                        <h3 className="text-xl font-bold text-[#ffff33] mb-1">{member.name}</h3>
                        <p className="text-white text-sm">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-5000 {
          animation-delay: 5s;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 51, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(255, 255, 51, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 51, 0); }
        }
        
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
      `}</style>
    </div>
  );
}

export default App;