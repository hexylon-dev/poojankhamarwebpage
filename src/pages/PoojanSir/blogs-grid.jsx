import React, { useState } from 'react';

const BlogsGrid = () => {
  // State to store blog data with background images
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Cyber Security',
      category: 'Technology',
      description: 'Exploring the latest trends and challenges in cybersecurity.',
      backgroundImage: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*m4AIaefondNBaqAXghWVCQ.png',
      overlayOpacity: 'bg-black bg-opacity-50',
      color: 'bg-blue-200',
      textColor: 'text-white',
      size: {
        cols: 2,
        rows: 3,
        position: 'col-start-1 row-start-1'
      }
    },
    {
      id: 2,
      title: 'AIML',
      category: 'Technology',
      description: 'Diving deep into Artificial Intelligence and Machine Learning.',
      backgroundImage: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*dZ6OQDZr-CizwnxVAA4kMQ.png',
      overlayOpacity: 'bg-black bg-opacity-40',
      color: 'bg-green-300',
      textColor: 'text-white',
      size: {
        cols: 1,
        rows: 2,
        position: 'col-start-1 row-start-4'
      }
    },
    {
      id: 3,
      title: 'Inspiring',
      category: 'Motivation',
      description: 'Stories that inspire and motivate personal growth.',
      backgroundImage: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*vye26w-xUrGKehEGAhsa4Q.png',
      overlayOpacity: 'bg-black bg-opacity-40',
      color: 'bg-green-400',
      textColor: 'text-white',
      size: {
        cols: 1,
        rows: 2,
        position: 'col-start-2 row-start-4'
      }
    },
    {
      id: 4,
      title: 'Psychology',
      category: 'Science',
      description: 'Exploring the depths of human mind and behavior.',
      backgroundImage: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5R3tDSHyxeoKnwW6qyS1mg.jpeg',
      overlayOpacity: 'bg-black bg-opacity-60',
      color: 'bg-yellow-200',
      textColor: 'text-white',
      size: {
        cols: 3,
        rows: 5,
        position: 'col-start-3 row-start-1'
      }
    }
  ]);

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 p-4 h-screen">
      {blogs.map((blog) => (
        <div 
          key={blog.id}
          className={`
            ${blog.size.position} 
            col-span-${blog.size.cols} 
            row-span-${blog.size.rows} 
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
            <h2 className={`text-2xl font-bold ${blog.textColor}`}>{blog.title}</h2>
            
            <button className="mt-2 bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold flex items-center gap-2">
              Read Now →
            </button>
            
            {blog.size.cols >= 3 && (
              <>
                <p className={`mt-4 text-sm ${blog.textColor}`}>{blog.description}</p>
                <div className="mt-6 w-16 h-1 bg-white rounded"></div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsGrid;