import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from 'lucide-react';

// Helper functions for mobile view
const getMobileColSpanClass = (cols) => {
  switch (cols) {
    case 1: return 'col-span-1';
    case 2: return 'col-span-2';
    case 3: return 'col-span-3';
    case 4: return 'col-span-4';
    default: return 'col-span-4';
  }
};

const getMobileRowSpanClass = (rows) => {
  switch (rows) {
    case 1: return 'row-span-1';
    case 2: return 'row-span-2';
    case 3: return 'row-span-3';
    default: return 'row-span-2';
  }
};

const ReimagineBoundary = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'The Foundations of Artificial General Intelligence (AGI)',
      category: 'Technology',
      description: 'Exploring the latest trends and challenges in cybersecurity.',
      backgroundImage: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*m4AIaefondNBaqAXghWVCQ.png',
      overlayOpacity: 'bg-black bg-opacity-50',
      color: 'bg-blue-200',
      textColor: 'text-white',
      size: {
        mobile: { cols: 4, rows: 2 },
        desktop: { cols: 2, rows: 3, position: 'col-start-1 row-start-1' }
      }
    },
    {
      id: 2,
      title: 'The Current State of AGI Research',
      category: 'Technology',
      description: 'Diving deep into Artificial Intelligence and Machine Learning.',
      backgroundImage: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*dZ6OQDZr-CizwnxVAA4kMQ.png',
      overlayOpacity: 'bg-black bg-opacity-40',
      color: 'bg-green-300',
      textColor: 'text-white',
      size: {
        mobile: { cols: 4, rows: 2 },
        desktop: { cols: 1, rows: 2, position: 'col-start-1' }
      }
    },
    {
      id: 3,
      title: 'Challenges and Limitations of AGI',
      category: 'Motivation',
      description: 'Stories that inspire and motivate personal growth.',
      backgroundImage: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*vye26w-xUrGKehEGAhsa4Q.png',
      overlayOpacity: 'bg-black bg-opacity-40',
      color: 'bg-green-400',
      textColor: 'text-white',
      size: {
        mobile: { cols: 4, rows: 2 },
        desktop: { cols: 1, rows: 2, position: 'col-start-2' }
      }
    },
    {
      id: 4,
      title: 'Applications and Future Prospects of AGI',
      category: 'Science',
      description: 'Exploring the depths of human mind and behavior.',
      backgroundImage: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5R3tDSHyxeoKnwW6qyS1mg.jpeg',
      overlayOpacity: 'bg-black bg-opacity-60',
      color: 'bg-yellow-200',
      textColor: 'text-white',
      size: {
        mobile: { cols: 4, rows: 3 },
        desktop: {
          cols: 2,
          rows: 6,
          position: 'col-start-3 row-start-1 row-end-6'  // Full height
        }
      }
    }
  ]);

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Mobile Layout */}
        <div className="md:hidden grid grid-cols-4 auto-rows-min gap-4 p-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`
                ${getMobileColSpanClass(blog.size.mobile.cols)} 
                ${getMobileRowSpanClass(blog.size.mobile.rows)}
                ${blog.color} 
                p-4 
                rounded-lg 
                shadow-md 
                relative 
                overflow-hidden
                min-h-[200px]
              `}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${blog.backgroundImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>

              {/* Overlay */}
              <div className={`absolute inset-0 ${blog.overlayOpacity}`}></div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h2 className={`text-lg font-bold ${blog.textColor}`}>{blog.title}</h2>
                  <p className={`mt-1 text-xs ${blog.textColor}`}>{blog.description}</p>
                </div>

                <button
                  className="mt-2 bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold flex items-center gap-1 self-start"
                  onClick={() => navigate("/blogs")}
                >
                  Read Now <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 md:grid-rows-5 gap-4 p-4 h-[80vh]">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`
                ${blog.size.desktop.position} 
                col-span-${blog.size.desktop.cols} 
                row-span-${blog.size.desktop.rows} 
                ${blog.color} 
                p-6 
                rounded-lg 
                shadow-md 
                relative 
                overflow-hidden
                transition-all duration-300 hover:shadow-lg
              `}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${blog.backgroundImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>

              {/* Overlay */}
              <div className={`absolute inset-0 ${blog.overlayOpacity}`}></div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className={`flex justify-between items-center text-2xl md:text-3xl font-bold ${blog.textColor}`}>
                    <span>{blog.title}</span>
                    <span
                      className="flex items-center justify-center rounded-full p-1 w-8 h-8 border border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors"
                      onClick={() => navigate("/blogs")}
                    >
                      <ArrowUpRight className="text-yellow-400 hover:text-black w-5 h-5 cursor-pointer" />
                    </span>
                  </div>

                  <p className={`mt-4 text-sm md:text-base ${blog.textColor}`}>{blog.description}</p>
                </div>

                <div className="w-16 h-1 bg-white rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReimagineBoundary;