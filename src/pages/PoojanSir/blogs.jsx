"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Start from "./assets/icons/star"

export default function Blog() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = "http://192.168.1.50:4000/v1/blogs/search/7eea1f02-35ab-4074-97d2-251eaa754ac6";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        
        // Check if data is empty or null
        if (!result.data || result.data.length === 0) {
          setError("No blog posts available");
        } else {
          setData(result.data);
        }
      } catch (err) {
        setError(err.message || "Blog not available");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Render method for when blog is not available
  const renderErrorState = () => (
    <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#CCFF00]">
          Blog Not Available
        </h2>
        <p className="text-zinc-400 mb-6">
          {error || "Unable to load blog posts at this time."}
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-[#CCFF00] text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );

  // Render method for loading state
  const renderLoadingState = () => (
    <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin w-12 h-12 border-4 border-[#CCFF00] border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-zinc-400">Loading blog posts...</p>
      </div>
    </div>
  );

  // Render blog posts or error/loading states
  if (loading) {
    return renderLoadingState();
  }

  if (error || !data) {
    return renderErrorState();
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <span className="text-[#CCFF00] text-sm">List</span>
        </div>

        <div className="space-y-6">
          {data.map((post) => (
            <div key={post.id} className="border-b border-zinc-800 pb-6">
              <Link to={`/blogs/${post.id}`} className="group">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex-1 space-y-2">
                    <h2 className="text-xl md:text-2xl font-bold leading-tight">{post.title}</h2>
                    <div className="flex items-center space-x-2">
                      <span className="text-[#CCFF00] text-lg"><Start /></span>
                      <span className="text-sm text-zinc-400">
                        {new Date(post.created_at).toLocaleString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      <span className="text-sm text-zinc-400">•</span>
                      <span className="text-sm text-zinc-400">{post.readTime}</span>
                    </div>
                  </div>
                  <div className="w-full md:w-48 h-28 relative rounded-lg overflow-hidden">
                    <img src={post.thumbnail || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}