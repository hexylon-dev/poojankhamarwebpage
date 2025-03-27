"use client"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw"

export default function BlogPost() {
  // Sample markdown content
  const [blogData, setBlogData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  console.log("blogData", blogData)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("http://192.168.1.50:4000/v1/blogs/48271009-bcbf-4cc2-867c-e7858802c09e")
        if (!response.ok) {
          throw new Error("Failed to fetch blog data")
        }
        const data = await response.json()
        setBlogData(data.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [])
  if (loading) return <p className="text-center text-gray-400">Loading...</p>
  if (error) return <p className="text-center text-red-500">Error: {error}</p>

  return (
    <div className="min-h-screen bg-black mx-auto">
      <div className="min-h-screen bg-black text-gray-200 p-4 md:p-8 max-w-4xl mx-auto">
        {/* Category Tag */}
        <div className="mb-4 text-sm">
          <span className="text-gray-400">{blogData.category || "Uncategorized"}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-300 mb-2 leading-tight">
          {blogData.title || "Blog Title"}
        </h1>

        {/* Date and Read Time */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span> {new Date(blogData.created_at).toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }) || "Unknown Date"}</span>
          <span>•</span>
          <span>{blogData.readTime || "N/A"} min read</span>
        </div>

        {/* Featured Image */}
        {blogData.thumbnail && (
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <img
              src={blogData.thumbnail}
              alt={blogData.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]} // Enables rendering raw HTML
            components={{
              p: ({ children }) => <p className="text-lg text-gray-300">{children}</p>,
            }}
          >
            {blogData.content || "No content available."}
          </ReactMarkdown>
        </div>

        {/* Highlighted Section */}
        {blogData.highlight && (
          <div className="my-8 py-4 border-l-4 border-yellow-300 pl-4">
            <p className="text-xl font-medium text-yellow-300">{blogData.highlight}</p>
          </div>
        )}
      </div>
    </div>
  )
}
