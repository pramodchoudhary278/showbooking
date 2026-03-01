// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import BlurCircle from "./BlurCircle";
// import MovieCard from "./MovieCard";
// // import { dummyShowsData } from "../assets/assets";
// import { useAppContext } from "../context/AppContext";


// const FeaturedSection = () => {
//   const navigate = useNavigate();
//   const {shows} = useAppContext();


//   return (
//     <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      
//       <div className="relative flex items-center justify-between pt-20 pb-10">
//         <BlurCircle top ='0' right='-80px'/>
//         <p className="text-gray-300 font-medium text-lg">Now Showing</p>
//         <button onClick={() => { navigate("/movies"); scrollTo(0, 0);  }}
//         className="group flex items-center gap-2 text-sm text-gray-300 cursor-pointer" >
//           View All
//           <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5" />
//         </button>
//       </div>

//       <div className="flex flex-wrap max-sm:justify-center gap-8 mt-8">
//         {shows.slice(0, 4).map((show) => (
//           <MovieCard key={show._id} movie={show} />
//         ))}
//       </div>

//       <div className="flex justify-center mt-20">
//         <button onClick={() => { navigate("/movies");scrollTo(0, 0);  }}
//           className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer" > Show more</button>
//       </div>
//     </div>
//   );
// };

// export default FeaturedSection;


// import { ArrowRight, Sparkles } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import BlurCircle from "./BlurCircle";
// import MovieCard from "./MovieCard";
// import { useAppContext } from "../context/AppContext";

// const FeaturedSection = () => {
//   const navigate = useNavigate();
//   const { shows } = useAppContext();

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');

//         .featured-section {
//           padding: 0 clamp(24px, 6vw, 176px);
//           overflow: hidden;
//           background: transparent;
//           font-family: 'DM Sans', sans-serif;
//         }

//         /* ── Header ── */
//         .featured-header {
//           position: relative;
//           display: flex;
//           align-items: flex-end;
//           justify-content: space-between;
//           padding-top: 80px;
//           padding-bottom: 48px;
//         }

//         .featured-header__left {
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }

//         .featured-header__eyebrow {
//           display: flex;
//           align-items: center;
//           gap: 7px;
//           font-size: 11px;
//           font-weight: 600;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: #e8b84b;
//         }

//         .featured-header__eyebrow svg {
//           width: 13px;
//           height: 13px;
//         }

//         .featured-header__title {
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: clamp(32px, 5vw, 52px);
//           letter-spacing: 0.06em;
//           color: #e8e8f0;
//           line-height: 1;
//         }

//         .featured-header__title span {
//           color: #e8b84b;
//         }

//         /* ── View All Button ── */
//         .view-all-btn {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 10px 22px;
//           background: transparent;
//           border: 1px solid rgba(232, 184, 75, 0.3);
//           border-radius: 40px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 12px;
//           font-weight: 600;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           color: #e8b84b;
//           cursor: pointer;
//           transition: background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.15s;
//           white-space: nowrap;
//         }

//         .view-all-btn:hover {
//           background: rgba(232, 184, 75, 0.1);
//           border-color: rgba(232, 184, 75, 0.6);
//           box-shadow: 0 0 16px rgba(232, 184, 75, 0.15);
//           transform: translateY(-1px);
//         }

//         .view-all-btn svg {
//           width: 14px;
//           height: 14px;
//           transition: transform 0.2s;
//         }

//         .view-all-btn:hover svg {
//           transform: translateX(3px);
//         }

//         /* ── Divider ── */
//         .featured-divider {
//           width: 100%;
//           height: 1px;
//           background: linear-gradient(
//             to right,
//             transparent,
//             rgba(232, 184, 75, 0.25) 30%,
//             rgba(232, 184, 75, 0.25) 70%,
//             transparent
//           );
//           margin-bottom: 48px;
//         }

//         /* ── Cards Grid ── */
//         .featured-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//           gap: 28px;
//         }

//         @media (max-width: 480px) {
//           .featured-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 16px;
//           }
//         }

//         /* ── Show More ── */
//         .show-more-wrapper {
//           display: flex;
//           justify-content: center;
//           margin-top: 60px;
//           margin-bottom: 20px;
//           padding-bottom: 40px;
//         }

//         .show-more-btn {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 14px 40px;
//           background: #e8b84b;
//           color: #0a0a0f;
//           border: none;
//           border-radius: 40px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 13px;
//           font-weight: 700;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           cursor: pointer;
//           transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
//           box-shadow: 0 4px 20px rgba(232, 184, 75, 0.3);
//         }

//         .show-more-btn:hover {
//           background: #f0c860;
//           transform: translateY(-2px);
//           box-shadow: 0 8px 28px rgba(232, 184, 75, 0.45);
//         }

//         .show-more-btn:active {
//           transform: scale(0.97);
//         }

//         .show-more-btn svg {
//           width: 15px;
//           height: 15px;
//         }

//         /* ── Empty State ── */
//         .featured-empty {
//           text-align: center;
//           padding: 80px 20px;
//           color: rgba(232, 232, 240, 0.3);
//           font-size: 15px;
//           letter-spacing: 0.05em;
//         }
//       `}</style>

//       <div className="featured-section">
//         {/* Header */}
//         <div className="featured-header">
//           <BlurCircle top="0" right="-80px" />

//           <div className="featured-header__left">
//             <span className="featured-header__eyebrow">
//               <Sparkles />
//               In Cinemas Now
//             </span>
//             <h2 className="featured-header__title">
//               Now <span>Showing</span>
//             </h2>
//           </div>

//           <button
//             onClick={() => { navigate("/movies"); scrollTo(0, 0); }}
//             className="view-all-btn"
//           >
//             View All
//             <ArrowRight />
//           </button>
//         </div>

//         {/* Gold divider */}
//         <div className="featured-divider" />

//         {/* Movie Cards */}
//         {shows.length > 0 ? (
//           <div className="featured-grid">
//             {shows.slice(0, 4).map((show) => (
//               <MovieCard key={show._id} movie={show} />
//             ))}
//           </div>
//         ) : (
//           <div className="featured-empty">No shows available at the moment.</div>
//         )}

//         {/* Show More */}
//         <div className="show-more-wrapper">
//           <button
//             onClick={() => { navigate("/movies"); scrollTo(0, 0); }}
//             className="show-more-btn"
//           >
//             Explore All Movies
//             <ArrowRight />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeaturedSection;


import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlurCircle from "./BlurCircle";
import MovieCard from "./MovieCard";
import { useAppContext } from "../context/AppContext";

const FeaturedSection = () => {
  const navigate = useNavigate();
  const { shows } = useAppContext();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');

        .featured-section {
          padding: 0 clamp(24px, 6vw, 176px);
          overflow: hidden;
          background: transparent;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Header ── */
        .featured-header {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding-top: 80px;
          padding-bottom: 48px;
        }

        .featured-header__left {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .featured-header__eyebrow {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #e8b84b;
        }

        .featured-header__eyebrow svg {
          width: 13px;
          height: 13px;
        }

        .featured-header__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 5vw, 52px);
          letter-spacing: 0.06em;
          color: #e8e8f0;
          line-height: 1;
        }

        .featured-header__title span {
          color: #e8b84b;
        }

        /* ── View All Button ── */
        .view-all-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          background: transparent;
          border: 1px solid rgba(232, 184, 75, 0.3);
          border-radius: 40px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #e8b84b;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.15s;
          white-space: nowrap;
        }

        .view-all-btn:hover {
          background: rgba(232, 184, 75, 0.1);
          border-color: rgba(232, 184, 75, 0.6);
          box-shadow: 0 0 16px rgba(232, 184, 75, 0.15);
          transform: translateY(-1px);
        }

        .view-all-btn svg {
          width: 14px;
          height: 14px;
          transition: transform 0.2s;
        }

        .view-all-btn:hover svg {
          transform: translateX(3px);
        }

        /* ── Divider ── */
        .featured-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(232, 184, 75, 0.25) 30%,
            rgba(232, 184, 75, 0.25) 70%,
            transparent
          );
          margin-bottom: 48px;
        }

        /* ── Cards Grid ── */
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          align-items: stretch;
        }

        @media (max-width: 1024px) {
          .featured-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 400px) {
          .featured-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Show More ── */
        .show-more-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 60px;
          margin-bottom: 20px;
          padding-bottom: 40px;
        }

        .show-more-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 40px;
          background: #e8b84b;
          color: #0a0a0f;
          border: none;
          border-radius: 40px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(232, 184, 75, 0.3);
        }

        .show-more-btn:hover {
          background: #f0c860;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(232, 184, 75, 0.45);
        }

        .show-more-btn:active {
          transform: scale(0.97);
        }

        .show-more-btn svg {
          width: 15px;
          height: 15px;
        }

        /* ── Empty State ── */
        .featured-empty {
          text-align: center;
          padding: 80px 20px;
          color: rgba(232, 232, 240, 0.3);
          font-size: 15px;
          letter-spacing: 0.05em;
        }
      `}</style>

      <div className="featured-section">
        {/* Header */}
        <div className="featured-header">
          <BlurCircle top="0" right="-80px" />

          <div className="featured-header__left">
            <span className="featured-header__eyebrow">
              <Sparkles />
              In Cinemas Now
            </span>
            <h2 className="featured-header__title">
              Now <span>Showing</span>
            </h2>
          </div>

          <button
            onClick={() => { navigate("/movies"); scrollTo(0, 0); }}
            className="view-all-btn"
          >
            View All
            <ArrowRight />
          </button>
        </div>

        {/* Gold divider */}
        <div className="featured-divider" />

        {/* Movie Cards */}
        {shows.length > 0 ? (
          <div className="featured-grid">
            {shows.slice(0, 4).map((show) => (
              <MovieCard key={show._id} movie={show} />
            ))}
          </div>
        ) : (
          <div className="featured-empty">No shows available at the moment.</div>
        )}

        {/* Show More */}
        <div className="show-more-wrapper">
          <button
            onClick={() => { navigate("/movies"); scrollTo(0, 0); }}
            className="show-more-btn"
          >
            Explore All Movies
            <ArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedSection;