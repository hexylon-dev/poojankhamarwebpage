import React from 'react';

const SocialShare = () => {
  const handleNavigation = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className="flex flex-col gap-4 sticky top-8">
      <button onClick={() => handleNavigation('https://www.facebook.com/hexylonanalytics/')}
        className="w-12 h-12 flex items-center justify-center rounded-full text-white hover:bg-black transition-all duration-300 bg-[#ff6600] border border-[#ff6600]/20" 
        aria-label="Share on Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      </button>
      <button onClick={() => handleNavigation('https://x.com/Hexylonanalytix')}
        className="w-12 h-12 flex items-center justify-center rounded-full text-white hover:bg-black transition-all duration-300 bg-[#ff6600] border border-[#ff6600]/20" 
        aria-label="Share on X (Twitter)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </button>
      <button onClick={() => handleNavigation('https://www.linkedin.com/company/hexylon-analytics/')}
        className="w-12 h-12 flex items-center justify-center rounded-full text-white hover:bg-black transition-all duration-300 bg-[#ff6600] border border-[#ff6600]/20" 
        aria-label="Share on LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </button>
    </div>
  );
};

export default SocialShare;