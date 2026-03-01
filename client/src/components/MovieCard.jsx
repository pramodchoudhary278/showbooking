// import { StarIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import timeFormat from "../lib/timeFormat";
// import { useAppContext } from "../context/AppContext";


// const MovieCard = ({ movie }) => {
//   const navigate = useNavigate();
//   const {image_base_url} = useAppContext();
//   return (
//     <div className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66">
//       <img onClick={() => { navigate(`/movies/${movie._id}`);scrollTo(0, 0);}} 
//       src={image_base_url + movie.backdrop_path} alt="poster" className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer" />

//       <p className="font-semibold mt-2 truncate">{movie.title}</p>

//       <p className="text-sm text-gray-400 mt-2">
//         {new Date(movie.release_date).getFullYear()} •{" "}
//         {movie.genres.slice(0, 2).map((genre) => genre.name).join(" | ")}{" "}• {timeFormat(movie.runtime)}
//       </p>

//       <div className="flex items-center justify-between mt-4 pb-3">
//         <button onClick={() => {navigate(`/movies/${movie._id}`);scrollTo(0, 0);}}
//           className="px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"> Buy Tickets </button>
        
//         <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
//           <StarIcon className="w-4 h-4 text-primary fill-primary" />
//           {movie.vote_average.toFixed(1)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;

// import { StarIcon, TicketIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import timeFormat from "../lib/timeFormat";
// import { useAppContext } from "../context/AppContext";

// const MovieCard = ({ movie }) => {
//   const navigate = useNavigate();
//   const { image_base_url } = useAppContext();

//   const handleNavigate = () => {
//     navigate(`/movies/${movie._id}`);
//     scrollTo(0, 0);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

//         .movie-card {
//           font-family: 'DM Sans', sans-serif;
//           display: flex;
//           flex-direction: column;
//           background: #12121a;
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 16px;
//           overflow: hidden;
//           transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
//           cursor: pointer;
//           width: 100%;
//         }

//         .movie-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(232,184,75,0.15);
//           border-color: rgba(232,184,75,0.2);
//         }

//         .movie-card__img-wrapper {
//           position: relative;
//           width: 100%;
//           aspect-ratio: 16/10;
//           overflow: hidden;
//         }

//         .movie-card__img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: center;
//           transition: transform 0.4s;
//         }

//         .movie-card:hover .movie-card__img {
//           transform: scale(1.05);
//         }

//         .movie-card__rating {
//           position: absolute;
//           top: 10px;
//           right: 10px;
//           display: flex;
//           align-items: center;
//           gap: 4px;
//           padding: 4px 9px;
//           background: rgba(10,10,15,0.85);
//           backdrop-filter: blur(6px);
//           border: 1px solid rgba(232,184,75,0.3);
//           border-radius: 20px;
//           font-size: 11px;
//           font-weight: 600;
//           color: #e8b84b;
//         }

//         .movie-card__rating svg {
//           width: 11px;
//           height: 11px;
//           fill: #e8b84b;
//           color: #e8b84b;
//         }

//         .movie-card__body {
//           padding: 14px 14px 16px;
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//           flex: 1;
//         }

//         .movie-card__title {
//           font-size: 14px;
//           font-weight: 600;
//           color: #e8e8f0;
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }

//         .movie-card__meta {
//           font-size: 11px;
//           color: #6b6b8a;
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }

//         .movie-card__footer {
//           margin-top: auto;
//           padding-top: 12px;
//         }

//         .movie-card__btn {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 6px;
//           width: 100%;
//           padding: 9px 0;
//           background: #e8b84b;
//           color: #0a0a0f;
//           border: none;
//           border-radius: 8px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 12px;
//           font-weight: 700;
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//           cursor: pointer;
//           transition: background 0.2s, box-shadow 0.2s;
//         }

//         .movie-card__btn:hover {
//           background: #f0c860;
//           box-shadow: 0 4px 14px rgba(232,184,75,0.35);
//         }

//         .movie-card__btn svg {
//           width: 13px;
//           height: 13px;
//         }
//       `}</style>

//       <div className="movie-card" onClick={handleNavigate}>
//         {/* Poster */}
//         <div className="movie-card__img-wrapper">
//           <img
//             src={image_base_url + movie.backdrop_path}
//             alt={movie.title}
//             className="movie-card__img"
//           />
//           {/* Rating badge */}
//           <div className="movie-card__rating">
//             <StarIcon />
//             {movie.vote_average.toFixed(1)}
//           </div>
//         </div>

//         {/* Body */}
//         <div className="movie-card__body">
//           <p className="movie-card__title">{movie.title}</p>
//           <p className="movie-card__meta">
//             {new Date(movie.release_date).getFullYear()} &bull;{" "}
//             {movie.genres.slice(0, 2).map((g) => g.name).join(" | ")} &bull;{" "}
//             {timeFormat(movie.runtime)}
//           </p>

//           <div className="movie-card__footer">
//             <button
//               className="movie-card__btn"
//               onClick={(e) => { e.stopPropagation(); handleNavigate(); }}
//             >
//               <TicketIcon />
//               Buy Tickets
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MovieCard;




import { StarIcon, TicketIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import timeFormat from "../lib/timeFormat";
import { useAppContext } from "../context/AppContext";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { image_base_url } = useAppContext();

  const handleNavigate = () => {
    navigate(`/movies/${movie._id}`);
    scrollTo(0, 0);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');

        .mc {
          font-family: 'DM Sans', sans-serif;
          display: flex;
          flex-direction: column;
          background: #12121a;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          width: 100%;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
        }

        .mc:hover {
          transform: translateY(-6px);
          border-color: rgba(232,184,75,0.25);
          box-shadow: 0 20px 50px rgba(0,0,0,0.55), 0 0 0 1px rgba(232,184,75,0.1);
        }

        /* ── Poster ── */
        .mc__img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 2/3;
          overflow: hidden;
          background: #1a1a26;
        }

        .mc__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.45s ease;
          display: block;
        }

        .mc:hover .mc__img { transform: scale(1.06); }

        .mc__img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 45%,
            rgba(10,10,15,0.65) 72%,
            rgba(10,10,15,0.97) 100%
          );
        }

        /* Rating — top left */
        .mc__rating {
          position: absolute;
          top: 10px; left: 10px;
          display: flex; align-items: center; gap: 4px;
          padding: 4px 9px;
          background: rgba(10,10,15,0.82);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(232,184,75,0.3);
          border-radius: 20px;
          font-size: 11px; font-weight: 700;
          color: #e8b84b; z-index: 2;
        }

        .mc__rating svg { width: 10px; height: 10px; fill: #e8b84b; color: #e8b84b; }

        /* Genre — top right */
        .mc__genre-badge {
          position: absolute;
          top: 10px; right: 10px;
          padding: 4px 9px;
          background: rgba(10,10,15,0.82);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(232,232,240,0.7);
          z-index: 2;
          max-width: 90px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Title at bottom of image */
        .mc__img-title {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 12px 12px 10px;
          z-index: 2;
        }

        .mc__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 17px;
          letter-spacing: 0.06em;
          color: #e8e8f0;
          line-height: 1.15;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .mc__year {
          font-size: 11px;
          color: rgba(232,232,240,0.4);
          margin-top: 2px;
        }

        /* ── Body ── */
        .mc__body {
          padding: 12px 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .mc__meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #5a5a7a;
          flex-wrap: wrap;
        }

        .mc__meta svg { width: 11px; height: 11px; color: #e8b84b; flex-shrink: 0; }

        .mc__meta-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: #3a3a5a;
          flex-shrink: 0;
        }

        /* ── Button ── */
        .mc__btn {
          display: flex; align-items: center; justify-content: center;
          gap: 7px; width: 100%; padding: 10px 0;
          background: rgba(232,184,75,0.08);
          color: #e8b84b;
          border: 1px solid rgba(232,184,75,0.22);
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s;
          margin-top: auto;
        }

        .mc__btn:hover {
          background: #e8b84b;
          color: #0a0a0f;
          border-color: #e8b84b;
          box-shadow: 0 4px 16px rgba(232,184,75,0.35);
          transform: translateY(-1px);
        }

        .mc__btn svg { width: 13px; height: 13px; }

        @media (max-width: 480px) {
          .mc__title { font-size: 15px; }
          .mc__btn { font-size: 10px; padding: 9px 0; }
        }
      `}</style>

      <div className="mc" onClick={handleNavigate}>

        {/* Poster image */}
        <div className="mc__img-wrap">
          <img
            src={image_base_url + movie.poster_path}
            alt={movie.title}
            className="mc__img"
            onError={(e) => {
              e.target.src = image_base_url + movie.backdrop_path;
            }}
          />
          <div className="mc__img-overlay" />

          <div className="mc__rating">
            <StarIcon />
            {movie.vote_average.toFixed(1)}
          </div>

          {movie.genres?.[0] && (
            <div className="mc__genre-badge">{movie.genres[0].name}</div>
          )}

          <div className="mc__img-title">
            <p className="mc__title">{movie.title}</p>
            <p className="mc__year">{new Date(movie.release_date).getFullYear()}</p>
          </div>
        </div>

        {/* Body */}
        <div className="mc__body">
          <div className="mc__meta">
            <ClockIcon />
            <span>{timeFormat(movie.runtime)}</span>
            <span className="mc__meta-dot" />
            <span>{movie.genres.slice(0, 2).map(g => g.name).join(" · ")}</span>
          </div>

          <button
            className="mc__btn"
            onClick={(e) => { e.stopPropagation(); handleNavigate(); }}
          >
            <TicketIcon />
            Buy Tickets
          </button>
        </div>

      </div>
    </>
  );
};

export default MovieCard;