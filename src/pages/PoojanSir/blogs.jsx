"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Start from "./assets/icons/star"
import { Helmet } from "react-helmet-async";
import slugify from "slugify";

const staticData = [
  {
    "id": "1",
    "title": "The Foundations of Artificial General Intelligence (AGI)",
    "created_at": "Mar 7, 2025",
    "readTime": "2 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*es92W_SCgPRlFnk0OYpm-Q.jpeg"
  },
  {
    "id": "2",
    "title": "The Current State of AGI Research",
    "created_at": "Mar 8, 2025",
    "readTime": "1 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-RR71PFlJ4g7OB_9HRNq7w.jpeg"
  },
  {
    "id": "3",
    "title": "Challenges and Limitations of AGI",
    "created_at": "Mar 10, 2025",
    "readTime": "1 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*FwNYuCcC-P8juwLrjLOPjA.png"
  },
{
    "id": "4",
    "title": "Applications and Future Prospects of AGI",
    "created_at": "Mar 11, 2025",
    "readTime": "1 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*d_sovg5vbZuUjQfmHo--RQ.png"
  },
{
    "id": "5",
    "title": "Ethical and Safety Considerations in AGI Development",
    "created_at": "Mar 12, 2025",
    "readTime": "1 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*o7c-JPeLyy9jtjWENanfNA.png"
  },
{
    "id": "6",
    "title": "The Technological Path to Artificial General Intelligence (AGI): A Deep Dive",
    "created_at": "Mar 13, 2025",
    "readTime": "4 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-1ogHVqb4j72K6qhmrdT3A.png"
  },
{
    "id": "7",
    "title": "The Technological Path to Artificial General Intelligence (AGI): A Comprehensive Deep Dive",
    "created_at": "Mar 17, 2025",
    "readTime": "3 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Lc3L26Tjf7CtIoImWeYG1w.png"
  },
{
    "id": "8",
    "title": "Is AI a Job Stealer or a Helpful Companion?",
    "created_at": "Mar 18, 2025",
    "readTime": "3 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5R3tDSHyxeoKnwW6qyS1mg.jpeg"
  },
{
    "id": "9",
    "title": "The Rise of AI Orchestration — When Machines Manage Machines",
    "created_at": "Mar 19, 2025",
    "readTime": "2 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*wHreFPlnvm1PO7edGCVFLA.png"
  },
{
    "id": "10",
    "title": "From LLMs to Super AI: The Future is Closer Than You Think",
    "created_at": "Mar 20, 2025",
    "readTime": "4 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*vye26w-xUrGKehEGAhsa4Q.png"
  },
{
    "id": "11",
    "title": "AI and Human Symbiosis — The Future of Work",
    "created_at": "Mar 20, 2025",
    "readTime": "1 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*YA9yfGui8Mj0qWUazXSRXQ.png"
  },
{
    "id": "12",
    "title": "The Dawn of AI-Generated Societies — What If AI Runs the World?",
    "created_at": "Mar 21, 2025",
    "readTime": "2 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*tTHaSvPJcsHtDHYJlRpncw.png"
  },
{
    "id": "13",
    "title": "From AI Agents to AI Consciousness — Can Machines Ever Think Like Us?",
    "created_at": "Mar 22, 2025",
    "readTime": "2 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*dZ6OQDZr-CizwnxVAA4kMQ.png"
  },
{
    "id": "14",
    "title": "The Evolution of AI: 2024 to 2050 — A Detailed Roadmap",
    "created_at": "Mar 24, 2025",
    "readTime": "5 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*zs2lnLY47IBcZT4bmuoskQ.png"
  },
{
    "id": "15",
    "title": "The Future of AI: What to Expect in the Next 5–10 Years",
    "created_at": "Mar 25, 2025",
    "readTime": "3 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*SgLZDh6XZR4wLkYobA2GTQ.png"
  },
{
    "id": "16",
    "title": "AI Agents: Your Digital Assistants That Can Think for Themselves!",
    "created_at": "Mar 26, 2025",
    "readTime": "3 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0JIO5K4Ps8EbYOFyp9Z28w.png"
  },
{
    "id": "17",
    "title": "How AI Agents Are Transforming Every Industry + How You Can Build Yours Today",
    "created_at": "Mar 27, 2025",
    "readTime": "2 min read",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Id9Xd2qkMNK2tZCiAfwIJg.png"
  },
]

export default function Blog() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);



  const apiUrl = "htt://192.168.1.50:4000/v1/blogs/search/7eea1f02-35ab-4074-97d2-251eaa754ac6";

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
          setData(staticData);
        } else {
          setData(result.data);
        }
      } catch (err) {
        setData(staticData);
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
  console.log(
    {
       data
     }
   )
  return (
    <div className="min-h-screen bg-black text-white font-sans">
         <Helmet>
        <title>{data.length > 0 ? `Blogs | ${data[0]?.title}` : "Blogs"}</title>
        {/* <meta name="description" content={data.length > 0 ? data[0]?.description : "Latest blogs"} /> */}
        <meta name="keywords" content="blogs, tech, articles, SEO, tutorials" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={data.length > 0 ? data[0]?.title : "Blogs"} />
        {/* <meta property="og:description" content={data.length > 0 ? data[0]?.description : "Latest blogs"} /> */}
        <meta property="og:image" content={data.length > 0 ? data[0]?.thumbnail : "/placeholder.svg"} />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.length > 0 ? data[0]?.title : "Blogs"} />
        {/* <meta name="twitter:description" content={data.length > 0 ? data[0]?.description : "Latest blogs"} /> */}
        <meta name="twitter:image" content={data.length > 0 ? data[0]?.thumbnail : "/placeholder.svg"} />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "headline": data.length > 0 ? data[0]?.title : "Blog",
            // "description": data.length > 0 ? data[0]?.description : "Latest blog articles",
            "author": {
              "@type": "Person",
              "name": "Your Site Name"
            },
            "datePublished": data.length > 0 ? data[0]?.created_at : "",
            "dateModified": data.length > 0 ? data[0]?.updated_at : ""
          })}
        </script>
      </Helmet>
      <div className="container mx-auto px-4 py-8 pt-32 max-w-4xl">
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