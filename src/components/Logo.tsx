export default function Logo() {
  return (
    <div className="relative group cursor-pointer">
      <svg
        viewBox="0 0 100 100"
        className="h-12 w-12 transition-transform duration-500 group-hover:scale-110"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for light mode */}
          <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="50%" stopColor="#F7931E" />
            <stop offset="100%" stopColor="#FDC830" />
          </linearGradient>
          
          {/* Gradient for dark mode */}
          <linearGradient id="darkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ECDC4" />
            <stop offset="50%" stopColor="#44A8B3" />
            <stop offset="100%" stopColor="#00CED1" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Outer hexagon (representing structure/code) */}
        <path
          d="M 50 8 L 85 28 L 85 72 L 50 92 L 15 72 L 15 28 Z"
          fill="none"
          stroke="url(#primaryGrad)"
          strokeWidth="2.5"
          className="dark:stroke-[url(#darkGrad)] transition-all duration-300 opacity-70 group-hover:opacity-100"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner star/compass (8-pointed, Islamic geometry + navigation/direction) */}
        <g className="transition-all duration-500 group-hover:rotate-180 origin-center" style={{ transformBox: 'fill-box' }}>
          <path
            d="M 50 25 L 54 45 L 65 40 L 57 50 L 65 60 L 54 55 L 50 75 L 46 55 L 35 60 L 43 50 L 35 40 L 46 45 Z"
            fill="url(#primaryGrad)"
            className="dark:fill-[url(#darkGrad)] transition-all duration-300 opacity-20 group-hover:opacity-30"
          />
        </g>

        {/* Central "F" and "K" creatively merged */}
        <g filter="url(#glow)">
          {/* F shape with code-like structure */}
          <path
            d="M 40 38 L 40 62 M 40 38 L 48 38 M 40 49 L 46 49"
            stroke="url(#primaryGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="dark:stroke-[url(#darkGrad)] transition-all duration-300"
          />
          
          {/* K shape integrated with F */}
          <path
            d="M 52 38 L 52 62 M 52 48 L 60 38 M 52 52 L 60 62"
            stroke="url(#primaryGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="dark:stroke-[url(#darkGrad)] transition-all duration-300"
          />
        </g>

        {/* Four corner code symbols </> representing developer identity */}
        <g className="opacity-40 group-hover:opacity-60 transition-opacity duration-300">
          <text x="12" y="20" fontSize="10" fill="url(#primaryGrad)" className="dark:fill-[url(#darkGrad)] font-mono">&lt;</text>
          <text x="82" y="20" fontSize="10" fill="url(#primaryGrad)" className="dark:fill-[url(#darkGrad)] font-mono">/&gt;</text>
          <text x="12" y="90" fontSize="10" fill="url(#primaryGrad)" className="dark:fill-[url(#darkGrad)] font-mono">{`{`}</text>
          <text x="84" y="90" fontSize="10" fill="url(#primaryGrad)" className="dark:fill-[url(#darkGrad)] font-mono">{`}`}</text>
        </g>

        {/* Subtle dots at hexagon vertices (Islamic geometric touch) */}
        <g className="opacity-50">
          <circle cx="50" cy="8" r="2" fill="url(#primaryGrad)" className="dark:fill-[url(#darkGrad)]" />
          <circle cx="85" cy="28" r="2" fill="url(#primaryGrad)" className="dark:fill-[url(#darkGrad)]" />
          <circle cx="85" cy="72" r="2" fill="url(#primaryGrad)" className="dark:fill-[url(#darkGrad)]" />
          <circle cx="50" cy="92" r="2" fill="url(#primaryGrad)" className="dark:fill-[url(#darkGrad)]" />
          <circle cx="15" cy="72" r="2" fill="url(#primaryGrad)" className="dark:fill-[url(#darkGrad)]" />
          <circle cx="15" cy="28" r="2" fill="url(#primaryGrad)" className="dark:fill-[url(#darkGrad)]" />
        </g>
      </svg>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 dark:from-cyan-500/20 dark:to-teal-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
    </div>
  );
}
