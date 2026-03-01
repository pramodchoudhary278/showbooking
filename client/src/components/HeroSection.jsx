// import React from 'react'
// import { assets } from '../assets/assets'

// const HeroSection = () => {
//   return (
//     <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/daredevil.png")] bg-cover bg-center h-screen'>
//         <img src={assets.bookingmovie} alt="" className='max-h-11 lg:h-11 mt-20'/>

//         <h1 className='text-5xl md:text-[70px] md:leading-18 font-bold max-w-110'>Book <br /> your shows</h1>

//         <div>
            
//         </div>
//     </div>
//   )
// }

// export default HeroSection



import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { TicketIcon, PlayCircleIcon } from 'lucide-react'

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');

        .hero {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        /* ── Background Image ── */
        .hero__bg {
          position: absolute;
          inset: 0;
          background-image: url('/daredevil.png');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          transform: scale(1.04);
          transition: transform 0.1s;
          z-index: 0;
        }

        /* Responsive bg position */
        @media (max-width: 768px) {
          .hero__bg {
            background-position: 70% center;
          }
        }

        @media (max-width: 480px) {
          .hero__bg {
            background-position: 80% center;
          }
        }

        /* ── Overlays ── */
        /* Dark left-side fade for text readability */
        .hero__overlay-left {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(8,8,12,0.92) 0%,
            rgba(8,8,12,0.75) 35%,
            rgba(8,8,12,0.3) 60%,
            transparent 100%
          );
          z-index: 1;
        }

        /* Bottom fade to page */
        .hero__overlay-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 35%;
          background: linear-gradient(to bottom, transparent, #0a0a0f);
          z-index: 1;
        }

        /* Top fade for navbar */
        .hero__overlay-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 200px;
          background: linear-gradient(to bottom, rgba(8,8,12,0.6), transparent);
          z-index: 1;
        }

        /* ── Content ── */
        .hero__content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          padding: 0 clamp(24px, 5vw, 144px);
          max-width: 680px;
          width: 100%;
        }

        /* Booking logo / badge */
        .hero__badge {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 16px 6px 6px;
          background: rgba(232,184,75,0.1);
          border: 1px solid rgba(232,184,75,0.25);
          border-radius: 40px;
        }

        .hero__badge-logo {
          height: 28px;
          width: auto;
        }

        .hero__badge-text {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #e8b84b;
        }

        /* Eyebrow */
        .hero__eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #e8b84b;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hero__eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 2px;
          background: #e8b84b;
          border-radius: 1px;
        }

        /* Title */
        .hero__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 9vw, 110px);
          letter-spacing: 0.04em;
          line-height: 0.95;
          color: #e8e8f0;
        }

        .hero__title span {
          color: #e8b84b;
          display: block;
        }

        /* Subtitle */
        .hero__subtitle {
          font-size: clamp(13px, 1.6vw, 16px);
          line-height: 1.7;
          color: rgba(232,232,240,0.55);
          max-width: 420px;
        }

        /* Stats row */
        .hero__stats {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .hero__stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .hero__stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px;
          letter-spacing: 0.06em;
          color: #e8b84b;
          line-height: 1;
        }

        .hero__stat-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6b6b8a;
        }

        .hero__stat-divider {
          width: 1px;
          height: 36px;
          background: rgba(255,255,255,0.1);
        }

        /* CTA Buttons */
        .hero__actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .hero__btn-primary {
          display: flex; align-items: center; gap: 8px;
          padding: 14px 32px;
          background: #e8b84b; color: #0a0a0f;
          border: none; border-radius: 40px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 24px rgba(232,184,75,0.4);
          text-decoration: none;
        }

        .hero__btn-primary:hover {
          background: #f0c860;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(232,184,75,0.5);
        }

        .hero__btn-primary:active { transform: scale(0.97); }
        .hero__btn-primary svg { width: 16px; height: 16px; }

        .hero__btn-secondary {
          display: flex; align-items: center; gap: 8px;
          padding: 14px 28px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 40px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 600;
          color: #e8e8f0; cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          text-decoration: none;
        }

        .hero__btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-1px);
        }

        .hero__btn-secondary svg { width: 16px; height: 16px; }

        /* ── Scroll indicator ── */
        .hero__scroll {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .hero__scroll-text {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #4a4a6a;
        }

        .hero__scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(232,184,75,0.5), transparent);
          animation: scrollLine 1.8s ease-in-out infinite;
        }

        @keyframes scrollLine {
          0%, 100% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          50% { opacity: 0.4; transform: scaleY(0.6); }
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .hero__content { max-width: 100%; }
          .hero__overlay-left {
            background: linear-gradient(
              to bottom,
              rgba(8,8,12,0.5) 0%,
              rgba(8,8,12,0.75) 40%,
              rgba(8,8,12,0.92) 100%
            );
          }
          .hero__stats { gap: 16px; }
        }

        @media (max-width: 480px) {
          .hero__actions { gap: 10px; }
          .hero__btn-primary, .hero__btn-secondary { padding: 12px 22px; font-size: 12px; }
        }
      `}</style>

      <div className="hero">
        {/* Background */}
        <div className="hero__bg" />

        {/* Overlays */}
        <div className="hero__overlay-top" />
        <div className="hero__overlay-left" />
        <div className="hero__overlay-bottom" />

        {/* Content */}
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge">
            <img src={assets.bookingmovie} alt="booking" className="hero__badge-logo" />
            <span className="hero__badge-text">book with us</span>
          </div>

          {/* Eyebrow */}
          <p className="hero__eyebrow">Now in Cinemas</p>

          {/* Title */}
          <h1 className="hero__title">
            Book Your
            <span>Shows</span>
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle">
            Your gateway to seamless movie booking. Find the best seats, best times, and best experiences — all in one place.
          </p>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">500+</span>
              <span className="hero__stat-label">Movies</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">50+</span>
              <span className="hero__stat-label">Theaters</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">10K+</span>
              <span className="hero__stat-label">Happy Guests</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <button
              className="hero__btn-primary"
              onClick={() => { navigate('/movies'); scrollTo(0, 0); }}
            >
              <TicketIcon /> Book Now
            </button>
            <button
              className="hero__btn-secondary"
              onClick={() => { navigate('/movies'); scrollTo(0, 0); }}
            >
              <PlayCircleIcon /> Watch Trailers
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
          <span className="hero__scroll-text">Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </div>
    </>
  )
}

export default HeroSection