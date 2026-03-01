// import { assets } from "../assets/assets";

// const Footer = () => {
//   return (
//     <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
//       <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
//         <div className="md:max-w-96">
//           <img className="w-36 h-auto" src={assets.cinetixlogo} alt="logo" />
//           <p className="mt-6 text-lg">
//             <i>Your gateway to seamless movie booking and unforgettable cinema experiences. <br /> Book smarter. Watch better. Experience cinema with CINETIX. </i>
//           </p>
//           <div className="flex items-center gap-2 mt-4">
//             <img
//               src={assets.googlePlay}
//               alt="google play"
//               className="h-9 w-auto"
//             />
//             <img src={assets.appStore} alt="app store" className="h-9 w-auto" />
//           </div>
//         </div>
//         <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
//           <div>
//             <h2 className="font-semibold mb-5">Company</h2>
//             <ul className="text-sm space-y-2">
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">About us</a>
//               </li>
//               <li>
//                 <a href="#">Contact us</a>
//               </li>
//               <li>
//                 <a href="#">Privacy policy</a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="font-semibold mb-5">Get in touch</h2>
//             <div className="text-sm space-y-2">
//               <p>+250-784-652-570</p>
//               <p>pramodchoudhary@gmail.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <p className="pt-4 text-center text-sm pb-5">
//         Copyright {new Date().getFullYear()} © CINETIX. All Right Reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;



// import { assets } from "../assets/assets";
// import { Link } from "react-router-dom";

// const movieQuotes = [
//   { quote: "Why so serious?", movie: "The Dark Knight, 2008" },
//   { quote: "I am inevitable.", movie: "Avengers: Endgame, 2019" },
//   { quote: "To infinity and beyond!", movie: "Toy Story, 1995" },
//   { quote: "May the Force be with you.", movie: "Star Wars, 1977" },
//   { quote: "I'll be back.", movie: "The Terminator, 1984" },
//   { quote: "You can't handle the truth!", movie: "A Few Good Men, 1992" },
// ];

// // Pick a random quote once per render
// const randomQuote = movieQuotes[Math.floor(Math.random() * movieQuotes.length)];

// const Footer = () => {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&family=Playfair+Display:ital@1&display=swap');

//         .footer {
//           font-family: 'DM Sans', sans-serif;
//           background: #0d0d14;
//           color: #e8e8f0;
//           margin-top: 100px;
//           position: relative;
//           overflow: hidden;
//         }

//         /* Top glow line */
//         .footer::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 10%; right: 10%;
//           height: 1px;
//           background: linear-gradient(to right, transparent, rgba(232,184,75,0.4) 40%, rgba(232,184,75,0.4) 60%, transparent);
//         }

//         /* Background texture */
//         .footer::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(ellipse at 50% 0%, rgba(232,184,75,0.04) 0%, transparent 60%);
//           pointer-events: none;
//         }

//         /* ── Quote Banner ── */
//         .footer-quote-banner {
//           position: relative;
//           z-index: 1;
//           text-align: center;
//           padding: 52px clamp(24px, 6vw, 144px) 48px;
//           border-bottom: 1px solid rgba(255,255,255,0.05);
//         }

//         .footer-quote-mark {
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: 80px;
//           line-height: 0.6;
//           color: rgba(232,184,75,0.15);
//           display: block;
//           margin-bottom: 16px;
//           letter-spacing: 0;
//         }

//         .footer-quote-text {
//           font-family: 'Playfair Display', serif;
//           font-style: italic;
//           font-size: clamp(20px, 3vw, 32px);
//           color: #e8e8f0;
//           line-height: 1.4;
//           margin-bottom: 12px;
//         }

//         .footer-quote-source {
//           font-size: 12px;
//           font-weight: 600;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           color: #e8b84b;
//         }

//         /* ── Main Footer Body ── */
//         .footer-body {
//           position: relative;
//           z-index: 1;
//           display: grid;
//           grid-template-columns: 1.4fr 1fr 1fr 1fr;
//           gap: 48px;
//           padding: 56px clamp(24px, 6vw, 144px) 48px;
//           border-bottom: 1px solid rgba(255,255,255,0.05);
//         }

//         @media (max-width: 1024px) {
//           .footer-body { grid-template-columns: 1fr 1fr; gap: 40px; }
//         }

//         @media (max-width: 580px) {
//           .footer-body { grid-template-columns: 1fr; gap: 32px; }
//         }

//         /* Brand col */
//         .footer-brand__logo { width: 130px; height: auto; margin-bottom: 20px; }

//         .footer-brand__desc {
//           font-size: 13px;
//           line-height: 1.8;
//           color: #6b6b8a;
//           margin-bottom: 24px;
//           max-width: 280px;
//         }

//         .footer-brand__apps {
//           display: flex;
//           gap: 10px;
//           flex-wrap: wrap;
//         }

//         .footer-brand__apps img {
//           height: 36px; width: auto;
//           opacity: 0.8;
//           transition: opacity 0.2s, transform 0.2s;
//           cursor: pointer;
//         }

//         .footer-brand__apps img:hover { opacity: 1; transform: translateY(-2px); }

//         /* Nav cols */
//         .footer-col__title {
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           color: #e8b84b;
//           margin-bottom: 20px;
//           position: relative;
//           padding-bottom: 12px;
//         }

//         .footer-col__title::after {
//           content: '';
//           position: absolute;
//           bottom: 0; left: 0;
//           width: 24px; height: 1px;
//           background: #e8b84b;
//           border-radius: 1px;
//         }

//         .footer-col__links {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//           list-style: none;
//           padding: 0; margin: 0;
//         }

//         .footer-col__links li a,
//         .footer-col__links li span {
//           font-size: 13px;
//           color: #6b6b8a;
//           text-decoration: none;
//           transition: color 0.2s, padding-left 0.2s;
//           display: inline-block;
//           cursor: pointer;
//         }

//         .footer-col__links li a:hover { color: #e8e8f0; padding-left: 4px; }

//         /* Social icons */
//         .footer-social {
//           display: flex;
//           gap: 10px;
//           margin-top: 6px;
//         }

//         .social-icon {
//           display: flex; align-items: center; justify-content: center;
//           width: 36px; height: 36px; border-radius: 8px;
//           background: rgba(255,255,255,0.04);
//           border: 1px solid rgba(255,255,255,0.07);
//           color: #6b6b8a;
//           cursor: pointer;
//           transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
//           text-decoration: none;
//           font-size: 14px;
//         }

//         .social-icon:hover {
//           background: rgba(232,184,75,0.1);
//           border-color: rgba(232,184,75,0.3);
//           color: #e8b84b;
//           transform: translateY(-2px);
//         }

//         /* Contact items */
//         .contact-item {
//           display: flex;
//           flex-direction: column;
//           gap: 2px;
//           margin-bottom: 14px;
//         }

//         .contact-item__label {
//           font-size: 10px;
//           font-weight: 600;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: #4a4a6a;
//         }

//         .contact-item__value {
//           font-size: 13px;
//           color: #6b6b8a;
//           transition: color 0.2s;
//         }

//         .contact-item__value:hover { color: #e8e8f0; }

//         /* ── Footer Bottom ── */
//         .footer-bottom {
//           position: relative;
//           z-index: 1;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           flex-wrap: wrap;
//           gap: 12px;
//           padding: 20px clamp(24px, 6vw, 144px);
//         }

//         .footer-bottom__copy {
//           font-size: 12px;
//           color: #4a4a6a;
//           letter-spacing: 0.03em;
//         }

//         .footer-bottom__copy span { color: #e8b84b; }

//         .footer-bottom__badge {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 5px 14px;
//           background: rgba(232,184,75,0.07);
//           border: 1px solid rgba(232,184,75,0.15);
//           border-radius: 20px;
//           font-size: 11px;
//           font-weight: 600;
//           color: #e8b84b;
//           letter-spacing: 0.06em;
//         }

//         .footer-bottom__badge::before {
//           content: '🎬';
//           font-size: 13px;
//         }
//       `}</style>

//       <footer className="footer">

//         {/* ── Movie Quote Banner ── */}
//         <div className="footer-quote-banner">
//           <span className="footer-quote-mark">"</span>
//           <p className="footer-quote-text">{randomQuote.quote}</p>
//           <p className="footer-quote-source">— {randomQuote.movie}</p>
//         </div>

//         {/* ── Main Body ── */}
//         <div className="footer-body">

//           {/* Brand */}
//           <div>
//             <img src={assets.cinetixlogo} alt="Cinetix" className="footer-brand__logo" />
//             <p className="footer-brand__desc">
//               Your gateway to seamless movie booking and unforgettable cinema experiences. Book smarter. Watch better.
//             </p>
//             <div className="footer-brand__apps">
//               <img src={assets.googlePlay} alt="Google Play" />
//               <img src={assets.appStore} alt="App Store" />
//             </div>
//           </div>

//           {/* Explore */}
//           <div>
//             <h3 className="footer-col__title">Explore</h3>
//             <ul className="footer-col__links">
//               <li><Link to="/" onClick={() => scrollTo(0,0)}>Home</Link></li>
//               <li><Link to="/movies" onClick={() => scrollTo(0,0)}>Movies</Link></li>
//               <li><Link to="/theaters" onClick={() => scrollTo(0,0)}>Theaters</Link></li>
//               <li><Link to="/releases" onClick={() => scrollTo(0,0)}>Releases</Link></li>
//               <li><Link to="/my-bookings" onClick={() => scrollTo(0,0)}>My Bookings</Link></li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="footer-col__title">Company</h3>
//             <ul className="footer-col__links">
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Careers</a></li>
//               <li><a href="#">Press</a></li>
//               <li><a href="#">Privacy Policy</a></li>
//               <li><a href="#">Terms of Service</a></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="footer-col__title">Get in Touch</h3>

//             <div className="contact-item">
//               <span className="contact-item__label">Phone</span>
//               <span className="contact-item__value">+250-784-652-570</span>
//             </div>
//             <div className="contact-item">
//               <span className="contact-item__label">Email</span>
//               <span className="contact-item__value">pramodchoudhary@gmail.com</span>
//             </div>

//             <h3 className="footer-col__title" style={{marginTop: 24}}>Follow Us</h3>
//             <div className="footer-social">
//               <a href="#" className="social-icon" title="Twitter/X">𝕏</a>
//               <a href="#" className="social-icon" title="Instagram">ig</a>
//               <a href="#" className="social-icon" title="YouTube">▶</a>
//               <a href="#" className="social-icon" title="Facebook">f</a>
//             </div>
//           </div>

//         </div>

//         {/* ── Bottom Bar ── */}
//         <div className="footer-bottom">
//           <p className="footer-bottom__copy">
//             Copyright {new Date().getFullYear()} © <span>CINETIX</span>. All Rights Reserved.
//           </p>
//           <div className="footer-bottom__badge">
//             Now Showing Across India
//           </div>
//         </div>

//       </footer>
//     </>
//   );
// };

// export default Footer;


import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const movieQuotes = [
  { quote: "Why so serious?", movie: "The Dark Knight, 2008" },
  { quote: "I am inevitable.", movie: "Avengers: Endgame, 2019" },
  { quote: "To infinity and beyond!", movie: "Toy Story, 1995" },
  { quote: "May the Force be with you.", movie: "Star Wars, 1977" },
  { quote: "I'll be back.", movie: "The Terminator, 1984" },
  { quote: "You can't handle the truth!", movie: "A Few Good Men, 1992" },
];

// Pick a random quote once per render
const randomQuote = movieQuotes[Math.floor(Math.random() * movieQuotes.length)];

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&family=Playfair+Display:ital@1&display=swap');

        .footer {
          font-family: 'DM Sans', sans-serif;
          background: #0d0d14;
          color: #e8e8f0;
          margin-top: 100px;
          position: relative;
          overflow: hidden;
        }

        /* Top glow line */
        .footer::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(232,184,75,0.4) 40%, rgba(232,184,75,0.4) 60%, transparent);
        }

        /* Background texture */
        .footer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(232,184,75,0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        /* ── Quote Banner ── */
        .footer-quote-banner {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 52px clamp(24px, 6vw, 144px) 48px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .footer-quote-mark {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 80px;
          line-height: 0.6;
          color: rgba(232,184,75,0.15);
          display: block;
          margin-bottom: 16px;
          letter-spacing: 0;
        }

        .footer-quote-text {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: clamp(20px, 3vw, 32px);
          color: #e8e8f0;
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .footer-quote-source {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #e8b84b;
        }

        /* ── Main Footer Body ── */
        .footer-body {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 48px;
          padding: 56px clamp(24px, 6vw, 144px) 48px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        @media (max-width: 1024px) {
          .footer-body { grid-template-columns: 1fr 1fr; gap: 40px; }
        }

        @media (max-width: 580px) {
          .footer-body { grid-template-columns: 1fr; gap: 32px; }
        }

        /* Brand col */
        .footer-brand__logo { width: 56px; height: 56px; object-fit: contain; margin-bottom: 16px; border-radius: 8px; }

        .footer-brand__desc {
          font-size: 13px;
          line-height: 1.8;
          color: #6b6b8a;
          margin-bottom: 24px;
          max-width: 280px;
        }

        .footer-brand__apps {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .footer-brand__apps img {
          height: 36px; width: auto;
          opacity: 0.8;
          transition: opacity 0.2s, transform 0.2s;
          cursor: pointer;
        }

        .footer-brand__apps img:hover { opacity: 1; transform: translateY(-2px); }

        .footer-brand__header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .footer-brand__name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 0.12em;
          color: #e8e8f0;
          line-height: 1;
        }

        .footer-brand__name span { color: #e8b84b; }

        .footer-newsletter {
          margin: 20px 0 24px;
        }

        .footer-newsletter__label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4a4a6a;
          margin-bottom: 10px;
        }

        .footer-newsletter__form {
          display: flex;
          gap: 8px;
        }

        .footer-newsletter__input {
          flex: 1;
          padding: 9px 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #e8e8f0;
          outline: none;
          transition: border-color 0.2s;
          min-width: 0;
        }

        .footer-newsletter__input::placeholder { color: #4a4a6a; }
        .footer-newsletter__input:focus { border-color: rgba(232,184,75,0.4); }

        .footer-newsletter__btn {
          padding: 9px 16px;
          background: #e8b84b;
          color: #0a0a0f;
          border: none;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s;
          flex-shrink: 0;
        }

        .footer-newsletter__btn:hover { background: #f0c860; }
        .footer-col__title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e8b84b;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 12px;
        }

        .footer-col__title::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 24px; height: 1px;
          background: #e8b84b;
          border-radius: 1px;
        }

        .footer-col__links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          list-style: none;
          padding: 0; margin: 0;
        }

        .footer-col__links li a,
        .footer-col__links li span {
          font-size: 13px;
          color: #6b6b8a;
          text-decoration: none;
          transition: color 0.2s, padding-left 0.2s;
          display: inline-block;
          cursor: pointer;
        }

        .footer-col__links li a:hover { color: #e8e8f0; padding-left: 4px; }

        /* Social icons */
        .footer-social {
          display: flex;
          gap: 10px;
          margin-top: 6px;
        }

        .social-icon {
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          color: #6b6b8a;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
          text-decoration: none;
          font-size: 14px;
        }

        .social-icon:hover {
          background: rgba(232,184,75,0.1);
          border-color: rgba(232,184,75,0.3);
          color: #e8b84b;
          transform: translateY(-2px);
        }

        /* Contact items */
        .contact-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-bottom: 14px;
        }

        .contact-item__label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4a4a6a;
        }

        .contact-item__value {
          font-size: 13px;
          color: #6b6b8a;
          transition: color 0.2s;
        }

        .contact-item__value:hover { color: #e8e8f0; }

        /* ── Footer Bottom ── */
        .footer-bottom {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 20px clamp(24px, 6vw, 144px);
        }

        .footer-bottom__copy {
          font-size: 12px;
          color: #4a4a6a;
          letter-spacing: 0.03em;
        }

        .footer-bottom__copy span { color: #e8b84b; }

        .footer-bottom__badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          background: rgba(232,184,75,0.07);
          border: 1px solid rgba(232,184,75,0.15);
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          color: #e8b84b;
          letter-spacing: 0.06em;
        }

        .footer-bottom__badge::before {
          content: '🎬';
          font-size: 13px;
        }
      `}</style>

      <footer className="footer">

        {/* ── Movie Quote Banner ── */}
        <div className="footer-quote-banner">
          <span className="footer-quote-mark">"</span>
          <p className="footer-quote-text">{randomQuote.quote}</p>
          <p className="footer-quote-source">— {randomQuote.movie}</p>
        </div>

        {/* ── Main Body ── */}
        <div className="footer-body">

          {/* Brand */}
          <div>
            <div className="footer-brand__header">
              <img src={assets.cinetixlogo} alt="Cinetix" className="footer-brand__logo" />
              <div className="footer-brand__name">CINE<span>TIX</span><br/><span style={{fontSize:10, color:'#4a4a6a', letterSpacing:'0.2em', fontFamily:"'DM Sans', sans-serif", fontWeight:600}}>BOOK SHOWS</span></div>
            </div>
            <p className="footer-brand__desc">
              Your gateway to seamless movie booking and unforgettable cinema experiences. Book smarter. Watch better.
            </p>

            <div className="footer-brand__apps">
              <img src={assets.googlePlay} alt="Google Play" />
              <img src={assets.appStore} alt="App Store" />
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="footer-col__title">Explore</h3>
            <ul className="footer-col__links">
              <li><Link to="/" onClick={() => scrollTo(0,0)}>Home</Link></li>
              <li><Link to="/movies" onClick={() => scrollTo(0,0)}>Movies</Link></li>
              <li><Link to="/theaters" onClick={() => scrollTo(0,0)}>Theaters</Link></li>
              <li><Link to="/releases" onClick={() => scrollTo(0,0)}>Releases</Link></li>
              <li><Link to="/my-bookings" onClick={() => scrollTo(0,0)}>My Bookings</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="footer-col__title">Company</h3>
            <ul className="footer-col__links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-col__title">Get in Touch</h3>

            <div className="contact-item">
              <span className="contact-item__label">Phone</span>
              <span className="contact-item__value">+250-784-652-570</span>
            </div>
            <div className="contact-item">
              <span className="contact-item__label">Email</span>
              <span className="contact-item__value">pramodchoudhary@gmail.com</span>
            </div>

            <h3 className="footer-col__title" style={{marginTop: 24}}>Follow Us</h3>
            <div className="footer-social">
              <a href="#" className="social-icon" title="Twitter/X">𝕏</a>
              <a href="#" className="social-icon" title="Instagram">ig</a>
              <a href="#" className="social-icon" title="YouTube">▶</a>
              <a href="#" className="social-icon" title="Facebook">f</a>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom">
          <p className="footer-bottom__copy">
            Copyright {new Date().getFullYear()} © <span>CINETIX</span>. All Rights Reserved.
          </p>
          <div className="footer-bottom__badge">
            Now Showing Across India
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;