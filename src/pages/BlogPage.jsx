import React from 'react';
import { useLocation } from 'react-router-dom';
import BlogLayout from '../components/Blogs/BlogLayout';

const BlogPage = () => {
  const location = useLocation();
  const blogData = location.state;

  if (!blogData) {
    return <div>Blog not found</div>;
  }

  const renderContent = (content) => {
    if (!content) return null;

    const sections = content.split(/(?=^##)/m);

    return sections.map((section, sectionIndex) => {
      const lines = section.trim().split('\n');
      const title = lines[0];
      const body = lines.slice(1).join('\n').trim();

      if (title.startsWith('## ')) {
        return (
          <section key={sectionIndex} className="mb-12">
            <h2 
              className="text-4xl font-bold text-[#ff6600] mt-12 mb-6"
              id={title.toLowerCase().replace('## ', '').replace(/\s+/g, '-')}
            >
              {title.replace('## ', '')}
            </h2>
            {renderBody(body)}
          </section>
        );
      } else {
        return renderBody(section);
      }
    });
  };

  const renderBody = (body) => {
    const paragraphs = body.split('\n\n');
    return paragraphs.map((paragraph, index) => {
      if (!paragraph.trim()) {
        return <div key={index} className="h-4" />;
      }

      if (paragraph.trim().startsWith('### ')) {
        return (
          <h3 
            key={index} 
            className="text-3xl font-semibold text-[#ff6600] mt-8 mb-4" 
            id={paragraph.toLowerCase().replace('### ', '').replace(/\s+/g, '-')}
          >
            {paragraph.replace('### ', '')}
          </h3>
        );
      }

      if (paragraph.trim().startsWith('-')) {
        const listItems = paragraph.split('-').filter(item => item.trim() !== '');
        return (
          <ul key={index} className="list-disc pl-6 mb-4">
            {listItems.map((item, i) => (
              <li key={i} className="ml-6 mb-3 text-gray-300">
                {item.trim()}
              </li>
            ))}
          </ul>
        );
      }

      // Bold Text and Regular paragraphs
      return (
        <p key={index} className="mb-6 text-gray-300 leading-relaxed">
          {paragraph.split('**').map((part, i) => 
            i % 2 === 0 ? part : <strong key={i}>{part}</strong>
          )}
        </p>
      );
    });
  };

  return (
    <BlogLayout 
      title={blogData.title}
      category={blogData.tag}
      readTime="13 MIN READ"
      date={blogData.date}
      image={blogData.image}
    >
      <div className="prose prose-lg prose-invert max-w-none">
        <h1 className="text-5xl font-bold text-[#ff6600] mb-8">{blogData.title}</h1>
        <p className="text-xl mb-8 text-gray-300">
          {blogData.description}
        </p>
        
        <div className="text-gray-300">
          {renderContent(blogData.content)}
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogPage;
