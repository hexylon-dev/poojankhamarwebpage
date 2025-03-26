import React from "react";
import { CalendarIcon, UserIcon, LinkIcon } from 'lucide-react';

function Blog({ blog }) {
  return (
    <article className="max-w-4xl mx-auto my-12 bg-white rounded-xl shadow-md overflow-hidden">
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/3 relative">
        <img
          src={blog.cover_image}
          alt={blog.title}
          className="h-64 lg:h-full w-full object-cover"
        />
      </div>
      <div className="p-8 lg:w-2/3">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <time dateTime={blog.created_at}>
              {blog.created_at}
            </time>
          </div>
          <div className="flex items-center">
            <UserIcon className="w-4 h-4 mr-2" />
            <span>{blog.created_by}</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{blog.title}</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">{blog.description}</p>
        {blog.references.length > 0 && (
          <>
            <hr className="my-6 border-gray-200" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Links</h3>
              <div className="flex flex-wrap gap-3">
                {blog.references.map((link, index) => (
                  <a
                  key={index}
                  href={link}
                  className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="w-4 h-4 mr-2" />
                  {link}
                </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  </article>
  );
}

export default Blog;
