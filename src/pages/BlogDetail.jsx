// src/pages/BlogDetail.js

import { CalendarIcon } from "@heroicons/react/16/solid";
import { UserIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.jpg";
import data from "../components/BlogStatic";
import { GetBlogApi } from "../service/api";

const BlogDetail = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState();
  useEffect(() => {
    (async () => {
      const res = await GetBlogApi(id);
      setBlog(res.data);
    })();
  }, [id]);

  if (!blog) {
    return <p className="text-center text-lg mt-8">Blog not found.</p>
  }
  const HtmlRenderer = ({ htmlContent }) => {
    return <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };
  
  const formatContent = (content) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-6 mb-4">{paragraph.slice(2)}</h1>
      } else if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-5 mb-3">{paragraph.slice(3)}</h2>
      } else if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold mt-4 mb-2">{paragraph.slice(4)}</h3>
      } else if (paragraph.trim() === 'Introduction' || paragraph.trim() === 'Conclusion') {
        return <h2 key={index} className="text-2xl font-bold mt-5 mb-3">{paragraph}</h2>
      } else if (paragraph.trim().length > 0) {
        return <p key={index} className="mb-4">{paragraph}</p>
      }
      return null
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.meta_data.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{blog.created_at}</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>By {blog.created_by}</span>
            </div>
          </div>
          <div className="mb-8">
            <img
              src={blog.cover_image}
              alt="Blog post cover"
              className="rounded-lg object-cover w-full max-h-[400px]"
            />
          </div>
          <div className="prose max-w-none">
          <HtmlRenderer htmlContent={blog.content} />
          </div>
          {blog.references.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Related Links</h2>
              <div className="flex flex-wrap gap-4">
                {blog.references.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    className="inline-block px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300 text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogDetail;