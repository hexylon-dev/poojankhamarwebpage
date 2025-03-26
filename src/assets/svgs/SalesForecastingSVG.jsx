import React from 'react';

const SalesForecastingSVG = ({ content }) => {
  return (
    <svg
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      {/* Background with gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2d2d2d', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Main background */}
      <rect x="0" y="0" width="800" height="400" rx="20" fill="url(#bgGradient)" />

      {/* Decorative elements */}
      <path
        d="M 50 200 Q 200 100, 400 200 T 750 200"
        stroke="#ffffff20"
        fill="none"
        strokeWidth="2"
      />
      <path
        d="M 50 220 Q 200 120, 400 220 T 750 220"
        stroke="#ffffff15"
        fill="none"
        strokeWidth="2"
      />

      {/* Text with wrapping */}
      <foreignObject x="50" y="150" width="700" height="200">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            padding: '10px',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(20px, 5vw, 36px)', // Ensure font size is at least 20px and scales up
              fontWeight: 'bold',
              margin: '0',
            }}
          >
            {content.name}
          </h1>
          <p
            style={{
              fontSize: 'clamp(14px, 3vw, 20px)', // Ensure font size is at least 14px and scales up
              opacity: 0.8,
              margin: '0',
            }}
          >
            {content.description}
          </p>
        </div>
      </foreignObject>
    </svg>
  );
};

export default SalesForecastingSVG;
