// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import BlurCircle from "../components/BlurCircle";
// import { Heart, PlayCircleIcon, StarIcon } from "lucide-react";
// import timeFormat from "../lib/timeFormat";
// import DateSelect from "../components/DateSelect";
// import MovieCard from "../components/MovieCard";
// // import Loading from "../components/Loading";
// import { useAppContext } from "../context/AppContext";
// import toast from "react-hot-toast";
// import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
// import Loading from "../components/Loading";

// const MovieDetails = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [show, setShow] = useState(null);

//  const {shows,axios,getToken,user,fetchFavoriteMovies,favoriteMovies,image_base_url} = useAppContext();

//   const getShow = async () => {
//     try {
//       const { data } = await axios.get(`/api/show/${id}`);
//       if (data.success) {
//         setShow(data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleFavorite = async () => {
//     try {
//       if (!user) return toast.error("Please login to proceed");

//       const { data } = await axios.post(
//         "/api/user/update-favorite",
//         { movieId: id },
//         { headers: { Authorization: `Bearer ${await getToken()}` } }
//       );

//       if (data.success) {
//         await fetchFavoriteMovies();
//         toast.success(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   useEffect(() => {
//     getShow();
//   }, [id]);

//   return show ? (
//   <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
//     {/* Top Section */}
//     <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
//       <img src={image_base_url + show.movie.poster_path} alt="poster" className="max-md:mx-auto rounded-xl h-104 max-w-70 object-cover"/>

//       <div className="relative flex flex-col gap-3">
//         <BlurCircle top="-100px" left="-100px" />
//         <p className="text-primary">ENGLISH</p>

//         <h1 className="text-4xl font-semibold max-w-96 text-balance">
//           {show.movie.title}
//         </h1>

//         <div className="flex items-center gap-2 text-gray-300">
//           <StarIcon className="w-5 h-5 text-primary fill-primary" />
//           {show.movie.vote_average.toFixed(1)} User Rating
//         </div>

//         <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
//           {show.movie.overview}
//         </p>

//         <p>
//           {timeFormat(show.movie.runtime)} •{" "}
//           {show.movie.genres.map((genre) => genre.name).join(", ")} •{" "}
//           {show.movie.release_date.split("-")[0]}
//         </p>

//         <div className="flex items-center flex-wrap gap-4 mt-4">
//           <button className="flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95">
//             <PlayCircleIcon className="w-5 h-5" />
//             Watch Trailer
//           </button>

//           <a
//             href="#dateSelect"
//             className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95"
//           >
//             Buy Tickets
//           </a>

//           <button onClick={handleFavorite} className="bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95">
//             <Heart className={`w-5 h-5 ${favoriteMovies.find(movie => movie._id === id) ? 'fill-primary text-primary' : ""}`} />
//           </button>
//         </div>
//       </div>
//     </div>

//     {/* Cast Section */}
//     <p className="text-lg font-medium mt-20">Your Favorite Cast</p>

//     <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
//       <div className="flex items-center gap-4 w-max px-4">
//         {show.movie.casts.slice(0, 12).map((cast, index) => (
//           <div key={index} className="flex flex-col items-center text-center">
//             <img
//               src={image_base_url + cast.profile_path}
//               alt=""
//               className="rounded-full h-20 aspect-square object-cover"
//             />
//             <p className="font-medium text-xs mt-3">{cast.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Date Select */}
//     <DateSelect dateTime={show.dateTime} id={id} />

//     {/* Recommendation */}
//     <p className="text-lg font-medium mt-20 mb-8">You May Also Like</p>
//     <div className="flex flex-wrap max-sm:justify-center gap-8">
//         {shows.slice(0, 4).map((movie, index) => (
//           <MovieCard key={index} movie={movie} />
//         ))}
//     </div>

//     <div className="flex justify-center mt-20">
//         <button onClick={() => {
//             navigate("/movies");
//             scrollTo(0, 0);
//           }}
//           className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
//         >
//           Show more
//         </button>
//     </div>

//   </div>
// ) : (
//   <Loading />
// );
// };

// export default MovieDetails;



import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BlurCircle from "../components/BlurCircle";
import { Heart, PlayCircleIcon, StarIcon, ClockIcon, CalendarIcon, ChevronRightIcon } from "lucide-react";
import timeFormat from "../lib/timeFormat";
import DateSelect from "../components/DateSelect";
import MovieCard from "../components/MovieCard";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const { shows, axios, getToken, user, fetchFavoriteMovies, favoriteMovies, image_base_url } = useAppContext();

  const getShow = async () => {
    try {
      const { data } = await axios.get(`/api/show/${id}`);
      if (data.success) setShow(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFavorite = async () => {
    try {
      if (!user) return toast.error("Please login to proceed");
      const { data } = await axios.post(
        "/api/user/update-favorite",
        { movieId: id },
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      );
      if (data.success) {
        await fetchFavoriteMovies();
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { getShow(); }, [id]);

  const isFavorite = favoriteMovies.find(m => m._id === id);

  return show ? (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');

        .movie-details {
          font-family: 'DM Sans', sans-serif;
          color: #e8e8f0;
          min-height: 100vh;
          background: #0a0a0f;
        }

        /* ── Hero Backdrop ── */
        .movie-hero {
          position: relative;
          width: 100%;
          height: 520px;
          overflow: hidden;
        }

        .movie-hero__backdrop {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(0.35);
          transform: scale(1.05);
        }

        .movie-hero__gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(10,10,15,0.3) 0%,
            rgba(10,10,15,0.1) 40%,
            rgba(10,10,15,0.85) 80%,
            #0a0a0f 100%
          );
        }

        .movie-hero__side-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(10,10,15,0.7) 0%, transparent 40%, transparent 60%, rgba(10,10,15,0.7) 100%);
        }

        /* ── Main Content ── */
        .movie-content {
          position: relative;
          max-width: 1200px;
          margin: -180px auto 0;
          padding: 0 clamp(24px, 5vw, 80px) 80px;
          z-index: 1;
        }

        /* ── Top Section ── */
        .movie-top {
          display: flex;
          gap: 40px;
          align-items: flex-end;
          margin-bottom: 60px;
        }

        @media (max-width: 768px) {
          .movie-top { flex-direction: column; align-items: center; }
          .movie-hero { height: 300px; }
          .movie-content { margin-top: -80px; }
        }

        /* Poster */
        .movie-poster-wrapper {
          position: relative;
          flex-shrink: 0;
        }

        .movie-poster {
          width: 200px;
          height: 300px;
          object-fit: cover;
          border-radius: 16px;
          border: 2px solid rgba(232,184,75,0.2);
          box-shadow: 0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,184,75,0.08);
          display: block;
        }

        .movie-poster__fav-btn {
          position: absolute;
          top: 12px; right: 12px;
          display: flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 50%;
          background: rgba(10,10,15,0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
        }

        .movie-poster__fav-btn:hover {
          background: rgba(232,184,75,0.15);
          border-color: rgba(232,184,75,0.4);
          transform: scale(1.1);
        }

        .movie-poster__fav-btn svg { width: 16px; height: 16px; }

        /* Info */
        .movie-info { flex: 1; min-width: 0; }

        .movie-info__lang {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: rgba(232,184,75,0.1);
          border: 1px solid rgba(232,184,75,0.25);
          border-radius: 20px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #e8b84b;
          margin-bottom: 14px;
        }

        .movie-info__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 5vw, 56px);
          letter-spacing: 0.05em;
          line-height: 1;
          color: #e8e8f0;
          margin-bottom: 16px;
        }

        .movie-info__rating {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(232,184,75,0.1);
          border: 1px solid rgba(232,184,75,0.2);
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #e8b84b;
          margin-bottom: 16px;
        }

        .movie-info__rating svg { width: 15px; height: 15px; fill: #e8b84b; color: #e8b84b; }

        .movie-info__overview {
          font-size: 14px;
          line-height: 1.8;
          color: #8888a8;
          max-width: 600px;
          margin-bottom: 18px;
        }

        .movie-info__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 28px;
        }

        .meta-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #6b6b8a;
          padding: 6px 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 8px;
        }

        .meta-chip svg { width: 13px; height: 13px; color: #e8b84b; }

        /* Genre tags */
        .movie-info__genres {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }

        .genre-tag {
          padding: 5px 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          font-size: 11px;
          font-weight: 500;
          color: #8888a8;
          transition: all 0.2s;
        }

        .genre-tag:hover {
          background: rgba(232,184,75,0.08);
          border-color: rgba(232,184,75,0.2);
          color: #e8b84b;
        }

        /* Action buttons */
        .movie-info__actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .btn-trailer {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 24px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 40px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 600;
          color: #e8e8f0; cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
        }

        .btn-trailer:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-1px);
        }

        .btn-trailer svg { width: 18px; height: 18px; }

        .btn-buy {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 32px;
          background: #e8b84b; color: #0a0a0f;
          border: none; border-radius: 40px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(232,184,75,0.3);
          text-decoration: none;
        }

        .btn-buy:hover {
          background: #f0c860;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(232,184,75,0.45);
        }

        .btn-buy:active { transform: scale(0.97); }

        /* ── Section Headers ── */
        .section-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }

        .section-header__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px;
          letter-spacing: 0.08em;
          color: #e8e8f0;
        }

        .section-header__title span { color: #e8b84b; }

        .section-header__line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, rgba(232,184,75,0.2), transparent);
        }

        /* ── Cast ── */
        .cast-section { margin-top: 60px; }

        .cast-scroll {
          overflow-x: auto;
          padding-bottom: 12px;
        }

        .cast-scroll::-webkit-scrollbar { height: 4px; }
        .cast-scroll::-webkit-scrollbar-track { background: transparent; }
        .cast-scroll::-webkit-scrollbar-thumb { background: rgba(232,184,75,0.2); border-radius: 2px; }

        .cast-list {
          display: flex;
          gap: 16px;
          width: max-content;
        }

        .cast-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .cast-item:hover { transform: translateY(-3px); }

        .cast-item__img-wrapper {
          position: relative;
          width: 72px; height: 72px;
        }

        .cast-item__img {
          width: 72px; height: 72px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255,255,255,0.08);
          transition: border-color 0.2s;
        }

        .cast-item:hover .cast-item__img { border-color: rgba(232,184,75,0.5); }

        .cast-item__name {
          font-size: 11px;
          font-weight: 500;
          color: #8888a8;
          text-align: center;
          max-width: 72px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: color 0.2s;
        }

        .cast-item:hover .cast-item__name { color: #e8e8f0; }

        /* ── Date Select Section ── */
        .date-section { margin-top: 60px; }

        /* ── Recommendations ── */
        .reco-section { margin-top: 60px; }

        .reco-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        @media (max-width: 1024px) { .reco-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px)  { .reco-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 400px)  { .reco-grid { grid-template-columns: 1fr; } }

        .reco-more {
          display: flex;
          justify-content: center;
          margin-top: 36px;
        }

        .btn-more {
          display: flex; align-items: center; gap-8px;
          padding: 12px 36px;
          background: transparent;
          border: 1px solid rgba(232,184,75,0.3);
          border-radius: 40px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 600;
          color: #e8b84b; cursor: pointer;
          letter-spacing: 0.05em;
          transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
        }

        .btn-more:hover {
          background: rgba(232,184,75,0.08);
          box-shadow: 0 0 20px rgba(232,184,75,0.1);
          transform: translateY(-1px);
        }
      `}</style>

      <div className="movie-details">

        {/* ── Hero Backdrop ── */}
        <div className="movie-hero">
          <img
            src={image_base_url + show.movie.backdrop_path}
            alt={show.movie.title}
            className="movie-hero__backdrop"
          />
          <div className="movie-hero__gradient" />
          <div className="movie-hero__side-fade" />
        </div>

        {/* ── Main Content ── */}
        <div className="movie-content">
          <BlurCircle top="-80px" left="-80px" variant="gold" size="lg" />
          <BlurCircle bottom="200px" right="-80px" variant="purple" size="md" />

          {/* Top Section */}
          <div className="movie-top">

            {/* Poster */}
            <div className="movie-poster-wrapper">
              <img
                src={image_base_url + show.movie.poster_path}
                alt="poster"
                className="movie-poster"
              />
              <button onClick={handleFavorite} className="movie-poster__fav-btn">
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-primary text-primary' : 'text-gray-400'}`} />
              </button>
            </div>

            {/* Info */}
            <div className="movie-info">
              <span className="movie-info__lang">🎬 English</span>

              <h1 className="movie-info__title">{show.movie.title}</h1>

              <div className="movie-info__rating">
                <StarIcon />
                {show.movie.vote_average.toFixed(1)} User Rating
              </div>

              <p className="movie-info__overview">{show.movie.overview}</p>

              {/* Meta chips */}
              <div className="movie-info__meta">
                <span className="meta-chip">
                  <ClockIcon /> {timeFormat(show.movie.runtime)}
                </span>
                <span className="meta-chip">
                  <CalendarIcon /> {show.movie.release_date.split("-")[0]}
                </span>
              </div>

              {/* Genre tags */}
              <div className="movie-info__genres">
                {show.movie.genres.map((g) => (
                  <span key={g.id} className="genre-tag">{g.name}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="movie-info__actions">
                <button className="btn-trailer">
                  <PlayCircleIcon /> Watch Trailer
                </button>
                <a href="#dateSelect" className="btn-buy">
                  Buy Tickets <ChevronRightIcon style={{width:15, height:15}} />
                </a>
              </div>
            </div>
          </div>

          {/* ── Cast ── */}
          <div className="cast-section">
            <div className="section-header">
              <h2 className="section-header__title">Featured <span>Cast</span></h2>
              <div className="section-header__line" />
            </div>
            <div className="cast-scroll">
              <div className="cast-list">
                {show.movie.casts.slice(0, 12).map((cast, index) => (
                  <div key={index} className="cast-item">
                    <div className="cast-item__img-wrapper">
                      <img
                        src={image_base_url + cast.profile_path}
                        alt={cast.name}
                        className="cast-item__img"
                      />
                    </div>
                    <p className="cast-item__name">{cast.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Date Select ── */}
          <div className="date-section" id="dateSelect">
            <div className="section-header">
              <h2 className="section-header__title">Select <span>Date</span></h2>
              <div className="section-header__line" />
            </div>
            <DateSelect dateTime={show.dateTime} id={id} />
          </div>

          {/* ── Recommendations ── */}
          <div className="reco-section">
            <div className="section-header">
              <h2 className="section-header__title">You May Also <span>Like</span></h2>
              <div className="section-header__line" />
            </div>
            <div className="reco-grid">
              {shows.slice(0, 4).map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>
            <div className="reco-more">
              <button className="btn-more" onClick={() => { navigate("/movies"); scrollTo(0, 0); }}>
                Explore All Movies
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default MovieDetails;