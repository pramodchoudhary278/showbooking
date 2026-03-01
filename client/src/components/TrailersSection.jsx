// import React, { useState } from 'react';
// import { dummyTrailers } from "../assets/assets";
// import ReactPlayer from 'react-player';
// import BlurCircle from './BlurCircle';
// import { PlayCircleIcon } from "lucide-react";

// const TrailersSection = () => {
//   const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

//   return (
//     <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
//       <p className="text-gray-300 font-medium text-lg max-w-[960] mx-auto">
//         Trailers
//       </p>

//       <div className="relative mt-6">
//         <BlurCircle top="-100px" right="-100px" />
//         <ReactPlayer
//           url={currentTrailer.videoUrl}
//           controls={false}
//           className="mx-auto max-w-full"
//           width="960px"
//           height="540px" />
//       </div>

//       <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
//         {dummyTrailers.map((trailer) => (
//           <div
//             key={trailer.image}
//             className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer"
//             onClick={() => setCurrentTrailer(trailer)}
//           >
//             <img
//               src={trailer.image}
//               alt="trailer"
//               className="rounded-lg w-full h-full object-cover brightness-75"
//             />
//             <PlayCircleIcon
//               strokeWidth={1.6}
//               className="absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2"
//             />
//           </div>
//         ))}
//       </div>      
//     </div>
//   );
// };

// export default TrailersSection;


import React, { useState } from 'react';
import { dummyTrailers } from "../assets/assets";
import ReactPlayer from 'react-player';
import BlurCircle from './BlurCircle';
import { PlayCircleIcon, FilmIcon } from "lucide-react";

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
  const [playing, setPlaying] = useState(false);

  const handleTrailerClick = (trailer) => {
    setCurrentTrailer(trailer);
    setPlaying(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');

        .trailers-section {
          font-family: 'DM Sans', sans-serif;
          padding: 80px clamp(24px, 6vw, 176px);
          overflow: hidden;
          position: relative;
        }

        /* ── Header ── */
        .trailers-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
          max-width: 960px;
          margin: 0 auto 36px;
        }

        .trailers-header__eyebrow {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #e8b84b;
        }

        .trailers-header__eyebrow svg {
          width: 13px;
          height: 13px;
        }

        .trailers-header__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 5vw, 52px);
          letter-spacing: 0.06em;
          color: #e8e8f0;
          line-height: 1;
        }

        .trailers-header__title span {
          color: #e8b84b;
        }

        /* ── Player Wrapper ── */
        .player-wrapper {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: 0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(232,184,75,0.08);
          background: #0a0a0f;
          aspect-ratio: 16/9;
        }

        .player-wrapper :global(.react-player) {
          position: absolute;
          top: 0;
          left: 0;
        }

        /* Play overlay */
        .player-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.45);
          cursor: pointer;
          transition: background 0.2s;
          z-index: 2;
        }

        .player-overlay:hover {
          background: rgba(0,0,0,0.3);
        }

        .player-overlay__icon {
          width: 72px;
          height: 72px;
          color: #e8b84b;
          filter: drop-shadow(0 0 20px rgba(232,184,75,0.5));
          transition: transform 0.2s, filter 0.2s;
        }

        .player-overlay:hover .player-overlay__icon {
          transform: scale(1.1);
          filter: drop-shadow(0 0 30px rgba(232,184,75,0.7));
        }

        /* Now Playing badge */
        .now-playing-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(10,10,15,0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(232,184,75,0.3);
          border-radius: 20px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #e8b84b;
          z-index: 3;
        }

        .now-playing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e8b84b;
          animation: pulse-dot 1.5s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        /* ── Divider ── */
        .trailers-divider {
          width: 100%;
          max-width: 960px;
          margin: 32px auto;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(232,184,75,0.2) 30%,
            rgba(232,184,75,0.2) 70%,
            transparent
          );
        }

        /* ── Thumbnails ── */
        .thumbnails-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 960px;
          margin: 0 auto;
        }

        @media (max-width: 640px) {
          .thumbnails-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .thumbnail-item {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          aspect-ratio: 16/9;
        }

        .thumbnail-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .thumbnail-item--active {
          border-color: #e8b84b;
          box-shadow: 0 0 0 2px rgba(232,184,75,0.2), 0 10px 30px rgba(0,0,0,0.5);
        }

        .thumbnail-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s, brightness 0.3s;
          filter: brightness(0.6);
        }

        .thumbnail-item:hover img,
        .thumbnail-item--active img {
          transform: scale(1.06);
          filter: brightness(0.85);
        }

        .thumbnail-play {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s;
        }

        .thumbnail-play svg {
          width: 28px;
          height: 28px;
          color: white;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.6));
          transition: color 0.2s, transform 0.2s;
        }

        .thumbnail-item--active .thumbnail-play svg,
        .thumbnail-item:hover .thumbnail-play svg {
          color: #e8b84b;
          transform: scale(1.15);
        }

        /* Active indicator bar */
        .thumbnail-item--active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #e8b84b;
          box-shadow: 0 0 8px rgba(232,184,75,0.8);
        }

        /* ── Trailer title below thumbnails ── */
        .trailer-title {
          text-align: center;
          margin-top: 20px;
          font-size: 13px;
          color: rgba(232,232,240,0.4);
          letter-spacing: 0.05em;
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
        }

        .trailer-title span {
          color: #e8b84b;
          font-weight: 600;
        }
      `}</style>

      <div className="trailers-section">
        <BlurCircle top="-100px" right="-100px" />

        {/* Header */}
        <div className="trailers-header">
          <span className="trailers-header__eyebrow">
            <FilmIcon />
            Watch Now
          </span>
          <h2 className="trailers-header__title">
            Latest <span>Trailers</span>
          </h2>
        </div>

        {/* Main Player */}
        <div className="player-wrapper">
          {/* Now Playing badge */}
          <div className="now-playing-badge">
            <span className="now-playing-dot" />
            Now Playing
          </div>

          <ReactPlayer
            url={currentTrailer.videoUrl}
            controls
            playing={playing}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />

          {/* Play overlay shown when not playing */}
          {!playing && (
            <div className="player-overlay" onClick={() => setPlaying(true)}>
              <PlayCircleIcon strokeWidth={1.2} className="player-overlay__icon" />
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="trailers-divider" />

        {/* Thumbnail Selector */}
        <div className="thumbnails-grid">
          {dummyTrailers.map((trailer) => (
            <div
              key={trailer.image}
              onClick={() => handleTrailerClick(trailer)}
              className={`thumbnail-item ${currentTrailer.image === trailer.image ? 'thumbnail-item--active' : ''}`}
            >
              <img src={trailer.image} alt="trailer thumbnail" />
              <div className="thumbnail-play">
                <PlayCircleIcon strokeWidth={1.5} />
              </div>
            </div>
          ))}
        </div>

        {/* Current trailer label */}
        <p className="trailer-title">
          Playing: <span>{currentTrailer.title || "Selected Trailer"}</span>
        </p>
      </div>
    </>
  );
};

export default TrailersSection;