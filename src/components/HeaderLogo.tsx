"use client";

export function HeaderLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 520"
      role="img"
      aria-label="Hope Cuts RI logo"
      className="h-12 sm:h-14 w-auto"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="header-poleMetal" x1="0" x2="1">
          <stop offset="0" stopColor="#e9edf2" />
          <stop offset="0.25" stopColor="#b8c0cc" />
          <stop offset="0.5" stopColor="#f7f9fb" />
          <stop offset="0.75" stopColor="#aab3bf" />
          <stop offset="1" stopColor="#eef2f7" />
        </linearGradient>
        <clipPath id="header-poleClip">
          <rect x="110" y="95" width="190" height="330" rx="42" />
        </clipPath>
        <filter id="header-softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000" floodOpacity="0.25" />
        </filter>
        <filter id="header-textShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#000" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter="url(#header-softShadow)">
        <rect x="95" y="55" width="220" height="70" rx="35" fill="url(#header-poleMetal)" stroke="#7b8594" strokeWidth="6" />
        <rect x="112" y="72" width="186" height="36" rx="18" fill="#d7dde6" opacity="0.7" />
        <rect x="110" y="95" width="190" height="330" rx="42" fill="#ffffff" stroke="#7b8594" strokeWidth="6" />
        <g clipPath="url(#header-poleClip)">
          <g transform="rotate(-18 205 260)">
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                values="-60 0;-60 70"
                dur="1.5s"
                repeatCount="indefinite"
              />
              <rect x="120" y="40" width="70" height="520" fill="#1E3A8A" opacity="0.95" />
              <rect x="190" y="40" width="70" height="520" fill="#ffffff" />
              <rect x="260" y="40" width="70" height="520" fill="#C41E3A" opacity="0.95" />
              <rect x="330" y="40" width="70" height="520" fill="#ffffff" />
              <rect x="400" y="40" width="70" height="520" fill="#1E3A8A" opacity="0.95" />
              <rect x="470" y="40" width="70" height="520" fill="#ffffff" />
              <rect x="540" y="40" width="70" height="520" fill="#C41E3A" opacity="0.95" />
            </g>
          </g>
          <rect x="110" y="95" width="70" height="330" fill="#ffffff" opacity="0.22" />
        </g>
        <rect x="95" y="400" width="220" height="70" rx="35" fill="url(#header-poleMetal)" stroke="#7b8594" strokeWidth="6" />
        <rect x="112" y="418" width="186" height="36" rx="18" fill="#d7dde6" opacity="0.7" />
      </g>

      <g filter="url(#header-textShadow)">
        <text x="380" y="250" fontFamily="Impact, 'Arial Black', Montserrat, system-ui, sans-serif" fontSize="170" fontWeight="900" letterSpacing="4" fill="#C41E3A" stroke="#ffffff" strokeWidth="14" paintOrder="stroke">
          HOPE
        </text>
        <text x="392" y="264" fontFamily="Impact, 'Arial Black', Montserrat, system-ui, sans-serif" fontSize="170" fontWeight="900" letterSpacing="4" fill="#1E3A8A" opacity="0.95">
          HOPE
        </text>
        <text x="380" y="250" fontFamily="Impact, 'Arial Black', Montserrat, system-ui, sans-serif" fontSize="170" fontWeight="900" letterSpacing="4" fill="#C41E3A" stroke="#ffffff" strokeWidth="14" paintOrder="stroke">
          HOPE
        </text>
      </g>

      <g filter="url(#header-textShadow)">
        <text x="520" y="385" fontFamily="'Brush Script MT', Pacifico, 'Segoe Script', cursive" fontSize="150" fontWeight="700" fill="#1E3A8A" stroke="#ffffff" strokeWidth="12" paintOrder="stroke">
          Cutz
        </text>
      </g>

      <g transform="translate(930 325) scale(1.2)" filter="url(#header-textShadow)">
        <path
          d="M50 0 L62 34 L98 35 L69 56 L79 90 L50 70 L21 90 L31 56 L2 35 L38 34 Z"
          fill="#1E3A8A"
          stroke="#ffffff"
          strokeWidth="8"
        />
      </g>
    </svg>
  );
}
