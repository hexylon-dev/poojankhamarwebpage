import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from 'lucide-react';

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
        desktop: { cols: 1, rows: 2, position: 'col-start-1 ' }
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
        desktop: { cols: 3, rows: 5, position: 'col-start-3 row-start-1' }
      }
    }
  ]);

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Mobile Layout */}
        <div className="md:hidden grid grid-cols-4 gap-4 p-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`
                col-span-${blog.size.mobile.cols} 
                row-span-${blog.size.mobile.rows} 
                ${blog.color} 
                p-4 
                rounded-lg 
                shadow-md 
                relative 
                overflow-hidden
                h-64  // Fixed height for mobile
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

              <div className="relative z-10">
                <h2 className={`text-xl font-bold ${blog.textColor}`}>{blog.title}</h2>

                <button className="mt-2 bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold flex items-center gap-2">
                  Read Now →
                </button>

                <p className={`mt-2 text-xs ${blog.textColor}`}>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid  gap-4 p-4 h-screen">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`
                ${blog.size.desktop.position} 
                col-span-${blog.size.desktop.cols} 
                row-span-${blog.size.desktop.rows} 
                ${blog.color} 
                p-4 
                rounded-lg 
                shadow-md 
                h-full 
                relative 
                overflow-hidden
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

              <div className="relative z-10">
                <div className={`flex justify-between items-center text-2xl md:text-3xl font-bold ${blog.textColor}`}>
                  <span>{blog.title}</span>
                  <span className="flex items-center justify-center rounded-full p-1 w-8 h-8 border border-yellow-400">
                    <ArrowUpRight
                      onClick={() => navigate("/blogs")}
                      className="text-yellow-400 w-5 h-5 cursor-pointer"
                    />
                  </span>
                </div>


                <p className={`mt-4 text-sm md:text-base ${blog.textColor}`}>{blog.description}</p>

                <div className="mt-6 w-16 h-1 bg-white rounded"></div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReimagineBoundary;