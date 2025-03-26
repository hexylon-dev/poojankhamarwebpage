import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ content }) => {
    // Replace HTML tags with Markdown equivalents
    const processedContent = content
        ?.replace(/<b>(.?)<\/b>/g, '$1*')
        ?.replace(/<strong>(.?)<\/strong>/g, '$1*')
        ?.replace(/\r\n\r\n/g, '\n\n')
        ?.replace(/\r\n/g, '\n\n')
        ?.replace(/\r/g, '\n\n');

    return (
        <div>
            <ReactMarkdown
                components={{
                    a: ({ node, ...props }) => (
                        <a {...props} target="_blank" rel="noopener noreferrer">
                            {props.children}
                        </a>
                    )
                }}
            >
                {processedContent}
            </ReactMarkdown>
        </div>
    );
};

export default Markdown;