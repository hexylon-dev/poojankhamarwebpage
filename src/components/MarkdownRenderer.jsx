import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        p: ({children}) => <p className="mb-4 last:mb-0">{children}</p>,
        br: () => <br />,
        pre: ({children}) => <pre className="bg-gray-800 p-3 rounded-lg my-2">{children}</pre>,
        strong: ({children}) => <strong className="text-[#FF6600]">{children}</strong>,
        em: ({children}) => <em className="text-[#FF6600]">{children}</em>,
        code: ({children}) => <code className="text-[#FF6600] bg-gray-800 px-1 rounded">{children}</code>
      }}
      className="whitespace-pre-wrap"
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
