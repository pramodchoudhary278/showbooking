// // import { dummyShowsData } from "../assets/assets";
// import BlurCircle from "../components/BlurCircle";
// import MovieCard from "../components/MovieCard";
// import { useAppContext } from "../context/AppContext";


// const Movies = () => {
 
//   const {shows} = useAppContext();

//   return shows.length > 0 ? (
//     <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
//       <BlurCircle top="150px" left="0" />
//       <BlurCircle bottom="50px" right="50px" />
//       <h1 className="text-lg font-medium my-4">Now Showing</h1>
//       <div className="flex flex-wrap max-sm:justify-center gap-8">
//         {shows.map((movie) => (
//           <MovieCard movie={movie} key={movie._id} />
//         ))}
//       </div>
//     </div>
//   ) : (

//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-3xl font-bold text-center">No movies available</h1>
//     </div>
//   );
// };

// export default Movies;



import BlurCircle from "../components/BlurCircle";
import MovieCard from "../components/MovieCard";
import { useAppContext } from "../context/AppContext";

const Movies = () => {
  const { shows } = useAppContext();

  return shows.length > 0 ? (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Bebas+Neue&display=swap');

        .movies-page {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          padding: 120px clamp(24px, 5vw, 176px) 100px;
          min-height: 80vh;
          overflow: hidden;
        }

        .movies-page__header {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 40px;
        }

        .movies-page__eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #e8b84b;
        }

        .movies-page__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 5vw, 52px);
          letter-spacing: 0.06em;
          color: #e8e8f0;
          line-height: 1;
        }

        .movies-page__title span { color: #e8b84b; }

        .movies-page__count {
          font-size: 13px;
          color: #6b6b8a;
        }

        .movies-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(232,184,75,0.2) 30%, rgba(232,184,75,0.2) 70%, transparent);
          margin-bottom: 40px;
        }

        .movies-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        @media (max-width: 1280px) {
          .movies-grid { grid-template-columns: repeat(4, 1fr); }
        }

        @media (max-width: 1024px) {
          .movies-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
        }

        @media (max-width: 640px) {
          .movies-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
        }

        @media (max-width: 360px) {
          .movies-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="movies-page">
        <BlurCircle top="150px" left="0" variant="gold" size="lg" />
        <BlurCircle bottom="50px" right="50px" variant="purple" size="md" />

        {/* Header */}
        <div className="movies-page__header">
          <span className="movies-page__eyebrow">🎬 In Cinemas Now</span>
          <h1 className="movies-page__title">Now <span>Showing</span></h1>
          <p className="movies-page__count">{shows.length} movies available</p>
        </div>

        <div className="movies-divider" />

        {/* Grid */}
        <div className="movies-grid">
          {shows.map((movie) => (
            <MovieCard movie={movie} key={movie._id} />
          ))}
        </div>
      </div>
    </>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, letterSpacing: '0.08em', color: '#e8e8f0' }}>
        No Movies
      </p>
      <p style={{ fontSize: 14, color: '#6b6b8a' }}>Check back soon for upcoming shows</p>
    </div>
  );
};

export default Movies;