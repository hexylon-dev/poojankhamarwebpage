import React from 'react';

const SalesForecastingSVG = () => {
  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
      {/* Background with gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2d2d2d', stopOpacity: 1 }} />
        </linearGradient>

        {/* Glowing effect for the icon */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
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

      {/* Icon */}
      {/* <g transform="translate(400, 120)" filter="url(#glow)">
        <circle cx="0" cy="0" r="40" fill="#2a2a2a" />
        <path
          d="M -15 10 L 0 -15 L 15 10 M 0 -15 L 0 15"
          stroke="#ffffff"
          fill="none"
          strokeWidth="3"
        />
        <circle cx="0" cy="0" r="25" stroke="#ffffff40" fill="none" strokeWidth="1" />
      </g> */}

      {/* Text */}
      <text
        x="400"
        y="200"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
      >
        Sales and Market Forecasting
      </text>
      <text
        x="400"
        y="250"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fill="#cccccc"
        textAnchor="middle"
        opacity="0.8"
      >
        Leverage historical data to predict sales trends,
      </text>
      <text
        x="400"
        y="275"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fill="#cccccc"
        textAnchor="middle"
        opacity="0.8"
      >
        market movements, and customer demands for proactive decision-making.
      </text>
    </svg>
  );
};

export default SalesForecastingSVG;
