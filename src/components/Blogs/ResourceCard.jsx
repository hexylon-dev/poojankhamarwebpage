import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

function ResourceCard({ title, description, image, link, date, tag, content }) {
  const navigate = useNavigate();

  // Debug: Log the received props
  console.log("ResourceCard Props:", { title, description, image, link, date, tag, content });

  const handleClick = () => {
    // Debug: Log what we're passing to navigation
    const stateData = {
      title,
      description,
      image,
      date,
      tag,
      content
    };
    console.log("Navigating with state:", stateData);

    navigate(link, {
      state: stateData
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 hover:transform hover:translate-y-[-8px] transition-all duration-300">
      <div className="w-full max-w-[400px] flex items-center gap-2">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#ff6600]/30 to-transparent"></div>
        <p className="text-[#ff6600] text-sm font-medium px-3 py-1 rounded-full bg-[#ff6600]/10 backdrop-blur-sm border border-[#ff6600]/20">
          {date}
        </p>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#ff6600]/30 to-transparent"></div>
      </div>

      <div 
        onClick={handleClick}
        className="cursor-pointer"
      >
        <div className="group block overflow-hidden rounded-2xl max-w-[400px] relative w-full shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] z-20"></div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <img
            src={image}
            alt={title}
            className="w-full h-[250px] object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
          />
        </div>
        <div className="text-center max-w-[400px] w-full">
          <h2 className="text-2xl font-bold mb-3 hover:text-[#ff6600] transition-colors duration-300 line-clamp-2">
            {title}
          </h2>
          <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>
          <p className="text-[#ff6600] text-sm font-medium mb-5 tracking-wide uppercase">
            {tag}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResourceCard;
