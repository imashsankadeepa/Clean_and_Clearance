```jsx
import React from 'react';

export const AnimatedWaves = () => {
  return (
    <div className="animated-waves">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
      <style jsx>{`
        :global(:root) {
          --success: #22C55E; /* Define fallback if not in global CSS */
        }

        .animated-waves {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          z-index: 1;
        }

        .wave {
          position: absolute;
          width: 200%;
          height: 200%;
          bottom: -100%;
          left: -50%;
          border-radius: 40%;
          background: rgba(var(--success), 0.1); /* Use --success for theme consistency */
          animation: wave 20s linear infinite;
        }

        .wave1 {
          animation-duration: 20s;
          opacity: 0.3;
        }

        .wave2 {
          animation-duration: 17s;
          animation-delay: -5s;
          opacity: 0.2;
        }

        .wave3 {
          animation-duration: 25s;
          animation-delay: -2s;
          opacity: 0.1;
        }

        .wave4 {
          animation-duration: 22s;
          animation-delay: -7s;
          opacity: 0.15;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};
```