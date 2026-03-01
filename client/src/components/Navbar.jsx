// import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
// import React, {  use, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { assets } from '../assets/assets'
// import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
// import { useAppContext } from '../context/AppContext'


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const {user} = useUser();
//   const {openSignIn} = useClerk();

//   const navigate = useNavigate();
  
//   const {favoriteMovies} = useAppContext();

//   return (
//     <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5'>
        
//         <Link to='/' className='max-md:flex-1'>  
//           <img src={assets.cinetixlogo} alt="" className='w-40 h-20'/>
//         </Link>

//         <div className={` max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen md:rounded-full bg-black/70 backdrop-blur md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'} `}>
          
//           <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>

//           <Link onClick={() => {scrollTo(0,0); setIsOpen(false)}} to='/'>Home</Link>
//           <Link onClick={() => {scrollTo(0,0); setIsOpen(false)}} to='/movies'>Movies</Link>
//           <Link onClick={() => {scrollTo(0,0); setIsOpen(false)}} to='/'>Theaters</Link>
//           <Link onClick={() => {scrollTo(0,0); setIsOpen(false)}} to='/'>Releases</Link>
//           {favoriteMovies.length > 0 && <Link onClick={() => {scrollTo(0, 0);setIsOpen(false);}} to="/favorite">Favorites</Link>}

//         </div>
    
//         <div className='flex items-center gap-8'>
//           <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer'/>
//           {
//             !user ? (
//               <button onClick={openSignIn} className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>Login
//               </button>
//             ) : (
//                <UserButton> 
//                   <UserButton.MenuItems>
//                      <UserButton.Action label="My Bookings" labelIcon={<TicketPlus width={15}/>} onClick={() => navigate('/my-bookings')}/>
//                   </UserButton.MenuItems>
//                </UserButton>
//             )
//           }
//         </div>
        
        
        
//         <MenuIcon className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>

//     </div>
//   )
// }

// export default Navbar


// import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
// import React, { useState, useEffect, useRef } from 'react'
// import { Link, useNavigate, useLocation } from 'react-router-dom'
// import { assets } from '../assets/assets'
// import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
// import { useAppContext } from '../context/AppContext'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [query, setQuery] = useState('');
//   const searchInputRef = useRef(null);

//   const { user } = useUser();
//   const { openSignIn } = useClerk();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { favoriteMovies, shows, image_base_url } = useAppContext();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     if (searchOpen) {
//       setTimeout(() => searchInputRef.current?.focus(), 100);
//     } else {
//       setQuery('');
//     }
//   }, [searchOpen]);

//   useEffect(() => {
//     setSearchOpen(false);
//     setIsOpen(false);
//   }, [location.pathname]);

//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === 'Escape') { setSearchOpen(false); setIsOpen(false); }
//     };
//     window.addEventListener('keydown', handler);
//     return () => window.removeEventListener('keydown', handler);
//   }, []);

//   const navLinks = [
//     { label: 'Home', to: '/' },
//     { label: 'Movies', to: '/movies' },
//     { label: 'Theaters', to: '/theaters' },
//     { label: 'Releases', to: '/releases' },
//     ...(favoriteMovies.length > 0 ? [{ label: 'Favorites', to: '/favorite' }] : []),
//   ];

//   const isActive = (to) => location.pathname === to;

//   const results = query.trim().length > 0
//     ? shows.filter(s =>
//         s.title?.toLowerCase().includes(query.toLowerCase()) ||
//         s.genres?.some(g => g.name.toLowerCase().includes(query.toLowerCase())) ||
//         s.overview?.toLowerCase().includes(query.toLowerCase())
//       )
//     : [];

//   const handleResultClick = (id) => {
//     navigate(`/movies/${id}`);
//     scrollTo(0, 0);
//     setSearchOpen(false);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');

//         * { box-sizing: border-box; }

//         .navbar {
//           position: fixed;
//           top: 0; left: 0; right: 0;
//           z-index: 50;
//           font-family: 'DM Sans', sans-serif;
//           transition: background 0.3s, box-shadow 0.3s;
//         }

//         .navbar--scrolled {
//           background: rgba(10,10,15,0.92);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           box-shadow: 0 1px 0 rgba(232,184,75,0.12), 0 8px 32px rgba(0,0,0,0.4);
//         }

//         .navbar--top {
//           background: linear-gradient(to bottom, rgba(10,10,15,0.8), transparent);
//         }

//         .navbar-inner {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 20px;
//           padding: 14px clamp(24px, 5vw, 144px);
//         }

//         .navbar-logo { flex-shrink: 0; z-index: 60; }
//         .navbar-logo img { width: 130px; height: auto; display: block; }

//         .navbar-links {
//           display: flex;
//           align-items: center;
//           gap: 4px;
//           padding: 6px 8px;
//           background: rgba(255,255,255,0.04);
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 40px;
//         }

//         .nav-link {
//           padding: 7px 16px;
//           font-size: 13px;
//           font-weight: 500;
//           color: rgba(232,232,240,0.6);
//           border-radius: 40px;
//           text-decoration: none;
//           transition: color 0.2s, background 0.2s;
//           white-space: nowrap;
//         }

//         .nav-link:hover { color: #e8e8f0; background: rgba(255,255,255,0.06); }
//         .nav-link--active { color: #0a0a0f !important; background: #e8b84b !important; font-weight: 600; }

//         .navbar-actions { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }

//         .search-btn {
//           display: flex; align-items: center; justify-content: center;
//           width: 36px; height: 36px; border-radius: 50%;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.08);
//           cursor: pointer;
//           transition: all 0.2s;
//           color: rgba(232,232,240,0.6);
//         }

//         .search-btn:hover, .search-btn--active {
//           background: rgba(232,184,75,0.1) !important;
//           border-color: rgba(232,184,75,0.3) !important;
//           color: #e8b84b !important;
//         }

//         .search-btn svg { width: 16px; height: 16px; }

//         .login-btn {
//           padding: 8px 22px;
//           background: #e8b84b; color: #0a0a0f;
//           border: none; border-radius: 40px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 12px; font-weight: 700;
//           letter-spacing: 0.07em; text-transform: uppercase;
//           cursor: pointer;
//           transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
//           box-shadow: 0 4px 14px rgba(232,184,75,0.25);
//         }

//         .login-btn:hover {
//           background: #f0c860;
//           transform: translateY(-1px);
//           box-shadow: 0 6px 20px rgba(232,184,75,0.4);
//         }

//         .menu-toggle {
//           display: none; align-items: center; justify-content: center;
//           width: 38px; height: 38px; border-radius: 8px;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.08);
//           cursor: pointer; color: #e8e8f0;
//           transition: background 0.2s;
//           flex-shrink: 0;
//         }

//         .menu-toggle:hover {
//           background: rgba(232,184,75,0.1);
//           border-color: rgba(232,184,75,0.3);
//           color: #e8b84b;
//         }

//         .menu-toggle svg { width: 20px; height: 20px; }

//         /* ── Search Overlay ── */
//         .search-overlay {
//           position: fixed; inset: 0; z-index: 100;
//           background: rgba(5,5,10,0.9);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           display: flex; flex-direction: column; align-items: center;
//           padding: 90px 24px 40px;
//           opacity: 0; pointer-events: none;
//           transition: opacity 0.25s;
//         }

//         .search-overlay--open { opacity: 1; pointer-events: all; }

//         .search-close-btn {
//           position: absolute; top: 24px; right: 24px;
//           display: flex; align-items: center; justify-content: center;
//           width: 38px; height: 38px; border-radius: 50%;
//           background: rgba(255,255,255,0.06);
//           border: 1px solid rgba(255,255,255,0.1);
//           color: #e8e8f0; cursor: pointer;
//           transition: background 0.2s, color 0.2s;
//         }

//         .search-close-btn:hover { background: rgba(232,184,75,0.1); color: #e8b84b; }
//         .search-close-btn svg { width: 18px; height: 18px; }

//         .search-label {
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: clamp(28px, 4vw, 48px);
//           letter-spacing: 0.08em;
//           color: #e8e8f0;
//           margin-bottom: 28px;
//           text-align: center;
//         }

//         .search-label span { color: #e8b84b; }

//         .search-input-wrapper {
//           position: relative;
//           width: 100%; max-width: 640px;
//           margin-bottom: 24px;
//         }

//         .search-input-icon {
//           position: absolute; left: 18px; top: 50%;
//           transform: translateY(-50%);
//           color: #6b6b8a; width: 18px; height: 18px;
//           pointer-events: none;
//         }

//         .search-input {
//           width: 100%;
//           padding: 16px 18px 16px 50px;
//           background: #12121a;
//           border: 1px solid rgba(232,184,75,0.25);
//           border-radius: 12px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 16px; color: #e8e8f0;
//           outline: none;
//           transition: border-color 0.2s, box-shadow 0.2s;
//         }

//         .search-input::placeholder { color: #4a4a6a; }

//         .search-input:focus {
//           border-color: rgba(232,184,75,0.5);
//           box-shadow: 0 0 0 3px rgba(232,184,75,0.08);
//         }

//         .search-hint {
//           font-size: 13px; color: #4a4a6a;
//           text-align: center; margin-top: 8px;
//         }

//         .search-count {
//           width: 100%; max-width: 640px;
//           font-size: 11px; color: #6b6b8a;
//           margin-bottom: 10px;
//           letter-spacing: 0.05em;
//         }

//         .search-count span { color: #e8b84b; font-weight: 600; }

//         .search-results {
//           width: 100%; max-width: 640px;
//           display: flex; flex-direction: column; gap: 8px;
//           max-height: 55vh; overflow-y: auto;
//         }

//         .search-results::-webkit-scrollbar { width: 4px; }
//         .search-results::-webkit-scrollbar-track { background: transparent; }
//         .search-results::-webkit-scrollbar-thumb { background: rgba(232,184,75,0.2); border-radius: 2px; }

//         .search-result-item {
//           display: flex; align-items: center; gap: 14px;
//           padding: 12px;
//           background: #12121a;
//           border: 1px solid rgba(255,255,255,0.06);
//           border-radius: 12px; cursor: pointer;
//           transition: border-color 0.2s, background 0.2s, transform 0.15s;
//         }

//         .search-result-item:hover {
//           border-color: rgba(232,184,75,0.25);
//           background: #1a1a26;
//           transform: translateX(4px);
//         }

//         .search-result-img {
//           width: 72px; height: 46px;
//           object-fit: cover; border-radius: 6px;
//           flex-shrink: 0; background: #1a1a26;
//         }

//         .search-result-info { flex: 1; min-width: 0; }

//         .search-result-title {
//           font-size: 14px; font-weight: 600; color: #e8e8f0;
//           white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
//           margin-bottom: 4px;
//         }

//         .search-result-meta {
//           font-size: 11px; color: #6b6b8a;
//           display: flex; align-items: center; gap: 6px;
//           flex-wrap: wrap;
//         }

//         .search-result-rating {
//           display: flex; align-items: center; gap: 3px;
//           color: #e8b84b; font-weight: 600;
//         }

//         .search-result-arrow {
//           color: #4a4a6a; flex-shrink: 0;
//           transition: color 0.2s, transform 0.2s;
//         }

//         .search-result-item:hover .search-result-arrow {
//           color: #e8b84b; transform: translateX(2px);
//         }

//         .search-empty {
//           text-align: center; padding: 40px 20px;
//           color: #4a4a6a; font-size: 14px;
//         }

//         /* Mobile Drawer */
//         .mobile-drawer {
//           position: fixed; inset: 0; z-index: 55;
//           display: flex; flex-direction: column;
//           background: #0a0a0f; padding: 24px;
//           transform: translateX(100%);
//           transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
//         }

//         .mobile-drawer--open { transform: translateX(0); }

//         .mobile-drawer__header {
//           display: flex; align-items: center; justify-content: space-between;
//           margin-bottom: 48px;
//         }

//         .mobile-drawer__close {
//           display: flex; align-items: center; justify-content: center;
//           width: 38px; height: 38px; border-radius: 8px;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.08);
//           cursor: pointer; color: #e8e8f0;
//         }

//         .mobile-drawer__close svg { width: 18px; height: 18px; }

//         .mobile-nav-links { display: flex; flex-direction: column; gap: 4px; flex: 1; }

//         .mobile-nav-link {
//           display: flex; align-items: center;
//           padding: 14px 18px;
//           font-size: 16px; font-weight: 500;
//           color: rgba(232,232,240,0.7);
//           text-decoration: none; border-radius: 10px;
//           border: 1px solid transparent;
//           transition: all 0.2s;
//           background: none; cursor: pointer;
//           font-family: 'DM Sans', sans-serif;
//           text-align: left; width: 100%;
//         }

//         .mobile-nav-link:hover {
//           background: rgba(232,184,75,0.07);
//           border-color: rgba(232,184,75,0.15);
//           color: #e8e8f0; padding-left: 24px;
//         }

//         .mobile-nav-link--active {
//           background: rgba(232,184,75,0.1) !important;
//           border-color: rgba(232,184,75,0.25) !important;
//           color: #e8b84b !important; font-weight: 600;
//         }

//         .mobile-drawer__footer {
//           padding-top: 24px;
//           border-top: 1px solid rgba(255,255,255,0.07);
//         }

//         .mobile-drawer__footer .login-btn {
//           width: 100%; padding: 13px; font-size: 13px;
//         }

//         @media (max-width: 768px) {
//           .navbar-links { display: none; }
//           .desktop-search { display: none !important; }
//           .menu-toggle { display: flex; }
//         }
//       `}</style>

//       {/* Navbar */}
//       <nav className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--top'}`}>
//         <div className="navbar-inner">
//           <Link to="/" className="navbar-logo" onClick={() => scrollTo(0, 0)}>
//             <img src={assets.cinetixlogo} alt="Cinetix" />
//           </Link>

//           <div className="navbar-links">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.label}
//                 to={link.to}
//                 onClick={() => scrollTo(0, 0)}
//                 className={`nav-link ${isActive(link.to) ? 'nav-link--active' : ''}`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           <div className="navbar-actions">
//             <button
//               className={`search-btn desktop-search ${searchOpen ? 'search-btn--active' : ''}`}
//               onClick={() => setSearchOpen(true)}
//               title="Search (Esc to close)"
//             >
//               <SearchIcon />
//             </button>

//             {!user ? (
//               <button onClick={openSignIn} className="login-btn">Sign In</button>
//             ) : (
//               <UserButton>
//                 <UserButton.MenuItems>
//                   <UserButton.Action
//                     label="My Bookings"
//                     labelIcon={<TicketPlus width={15} />}
//                     onClick={() => navigate('/my-bookings')}
//                   />
//                 </UserButton.MenuItems>
//               </UserButton>
//             )}

//             <button className="menu-toggle" onClick={() => setIsOpen(true)}>
//               <MenuIcon />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* ── Search Overlay ── */}
//       <div className={`search-overlay ${searchOpen ? 'search-overlay--open' : ''}`}>
//         <button className="search-close-btn" onClick={() => setSearchOpen(false)}>
//           <XIcon />
//         </button>

//         <p className="search-label">Find a <span>Movie</span></p>

//         <div className="search-input-wrapper">
//           <SearchIcon className="search-input-icon" />
//           <input
//             ref={searchInputRef}
//             type="text"
//             placeholder="Search by title, genre, keyword..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="search-input"
//           />
//         </div>

//         {query.trim().length === 0 && (
//           <p className="search-hint">Press <strong style={{color:'#e8e8f0'}}>Esc</strong> to close</p>
//         )}

//         {query.trim().length > 0 && results.length > 0 && (
//           <p className="search-count">
//             Found <span>{results.length}</span> result{results.length !== 1 ? 's' : ''}
//           </p>
//         )}

//         <div className="search-results">
//           {query.trim().length > 0 && results.length === 0 && (
//             <div className="search-empty">
//               No movies found for "<strong style={{color:'#e8e8f0'}}>{query}</strong>"
//             </div>
//           )}

//           {results.map((movie) => (
//             <div
//               key={movie._id}
//               className="search-result-item"
//               onClick={() => handleResultClick(movie._id)}
//             >
//               <img
//                 src={image_base_url + movie.backdrop_path}
//                 alt={movie.title}
//                 className="search-result-img"
//                 onError={(e) => e.target.style.display = 'none'}
//               />
//               <div className="search-result-info">
//                 <p className="search-result-title">{movie.title}</p>
//                 <div className="search-result-meta">
//                   <span>{new Date(movie.release_date).getFullYear()}</span>
//                   <span>·</span>
//                   <span>{movie.genres?.slice(0, 2).map(g => g.name).join(', ')}</span>
//                   <span>·</span>
//                   <span className="search-result-rating">
//                     ★ {movie.vote_average?.toFixed(1)}
//                   </span>
//                 </div>
//               </div>
//               <svg className="search-result-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M9 18l6-6-6-6"/>
//               </svg>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       <div className={`mobile-drawer ${isOpen ? 'mobile-drawer--open' : ''}`}>
//         <div className="mobile-drawer__header">
//           <Link to="/" onClick={() => { scrollTo(0, 0); setIsOpen(false); }}>
//             <img src={assets.cinetixlogo} alt="Cinetix" style={{ width: 120, height: 'auto' }} />
//           </Link>
//           <button className="mobile-drawer__close" onClick={() => setIsOpen(false)}>
//             <XIcon />
//           </button>
//         </div>

//         <div className="mobile-nav-links">
//           {navLinks.map((link) => (
//             <Link
//               key={link.label}
//               to={link.to}
//               onClick={() => { scrollTo(0, 0); setIsOpen(false); }}
//               className={`mobile-nav-link ${isActive(link.to) ? 'mobile-nav-link--active' : ''}`}
//             >
//               {link.label}
//             </Link>
//           ))}
//           <button
//             onClick={() => { setIsOpen(false); setSearchOpen(true); }}
//             className="mobile-nav-link"
//           >
//             🔍 &nbsp;Search Movies
//           </button>
//         </div>

//         <div className="mobile-drawer__footer">
//           {!user ? (
//             <button onClick={() => { openSignIn(); setIsOpen(false); }} className="login-btn">
//               Sign In
//             </button>
//           ) : (
//             <UserButton>
//               <UserButton.MenuItems>
//                 <UserButton.Action
//                   label="My Bookings"
//                   labelIcon={<TicketPlus width={15} />}
//                   onClick={() => { navigate('/my-bookings'); setIsOpen(false); }}
//                 />
//               </UserButton.MenuItems>
//             </UserButton>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


// import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
// import React, { useState, useEffect, useRef } from 'react'
// import { Link, useNavigate, useLocation } from 'react-router-dom'
// import { assets } from '../assets/assets'
// import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
// import { useAppContext } from '../context/AppContext'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [query, setQuery] = useState('');
//   const searchInputRef = useRef(null);

//   const { user } = useUser();
//   const { openSignIn } = useClerk();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { favoriteMovies, shows, image_base_url } = useAppContext();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     if (searchOpen) {
//       setTimeout(() => searchInputRef.current?.focus(), 100);
//     } else {
//       setQuery('');
//     }
//   }, [searchOpen]);

//   useEffect(() => {
//     setSearchOpen(false);
//     setIsOpen(false);
//   }, [location.pathname]);

//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === 'Escape') { setSearchOpen(false); setIsOpen(false); }
//     };
//     window.addEventListener('keydown', handler);
//     return () => window.removeEventListener('keydown', handler);
//   }, []);

//   const navLinks = [
//     { label: 'Home', to: '/' },
//     { label: 'Movies', to: '/movies' },
//     { label: 'Theaters', to: '/theaters' },
//     { label: 'Releases', to: '/releases' },
//     ...(favoriteMovies.length > 0 ? [{ label: 'Favorites', to: '/favorite' }] : []),
//   ];

//   const isActive = (to) => location.pathname === to;

//   const results = query.trim().length > 0
//     ? shows.filter(s =>
//         s.title?.toLowerCase().includes(query.toLowerCase()) ||
//         s.genres?.some(g => g.name.toLowerCase().includes(query.toLowerCase())) ||
//         s.overview?.toLowerCase().includes(query.toLowerCase())
//       )
//     : [];

//   const handleResultClick = (id) => {
//     navigate(`/movies/${id}`);
//     scrollTo(0, 0);
//     setSearchOpen(false);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');

//         * { box-sizing: border-box; }

//         .navbar {
//           position: fixed;
//           top: 0; left: 0; right: 0;
//           z-index: 50;
//           font-family: 'DM Sans', sans-serif;
//           transition: background 0.3s, box-shadow 0.3s;
//         }

//         .navbar--scrolled {
//           background: rgba(28, 28, 32, 0.75);
//           backdrop-filter: blur(24px) saturate(160%) brightness(0.95);
//           -webkit-backdrop-filter: blur(24px) saturate(160%) brightness(0.95);
//           box-shadow: 
//             0 1px 0 rgba(255,255,255,0.06),
//             0 1px 0 rgba(232,184,75,0.08),
//             0 8px 32px rgba(0,0,0,0.5),
//             inset 0 1px 0 rgba(255,255,255,0.04);
//           border-bottom: 1px solid rgba(255,255,255,0.05);
//         }

//         .navbar--top {
//           background: linear-gradient(to bottom, rgba(22,22,26,0.65), transparent);
//         }

//         .navbar-inner {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 20px;
//           padding: 14px clamp(24px, 5vw, 144px);
//         }

//         .navbar-logo { flex-shrink: 0; z-index: 60; }
//         .navbar-logo img { width: 130px; height: auto; display: block; }

//         .navbar-links {
//           display: flex;
//           align-items: center;
//           gap: 4px;
//           padding: 6px 8px;
//           background: rgba(255,255,255,0.04);
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 40px;
//         }

//         .nav-link {
//           padding: 7px 16px;
//           font-size: 13px;
//           font-weight: 500;
//           color: rgba(232,232,240,0.6);
//           border-radius: 40px;
//           text-decoration: none;
//           transition: color 0.2s, background 0.2s;
//           white-space: nowrap;
//         }

//         .nav-link:hover { color: #e8e8f0; background: rgba(255,255,255,0.06); }
//         .nav-link--active { color: #0a0a0f !important; background: #e8b84b !important; font-weight: 600; }

//         .navbar-actions { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }

//         .search-btn {
//           display: flex; align-items: center; justify-content: center;
//           width: 36px; height: 36px; border-radius: 50%;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.08);
//           cursor: pointer;
//           transition: all 0.2s;
//           color: rgba(232,232,240,0.6);
//         }

//         .search-btn:hover, .search-btn--active {
//           background: rgba(232,184,75,0.1) !important;
//           border-color: rgba(232,184,75,0.3) !important;
//           color: #e8b84b !important;
//         }

//         .search-btn svg { width: 16px; height: 16px; }

//         .login-btn {
//           padding: 8px 22px;
//           background: #e8b84b; color: #0a0a0f;
//           border: none; border-radius: 40px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 12px; font-weight: 700;
//           letter-spacing: 0.07em; text-transform: uppercase;
//           cursor: pointer;
//           transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
//           box-shadow: 0 4px 14px rgba(232,184,75,0.25);
//         }

//         .login-btn:hover {
//           background: #f0c860;
//           transform: translateY(-1px);
//           box-shadow: 0 6px 20px rgba(232,184,75,0.4);
//         }

//         .menu-toggle {
//           display: none; align-items: center; justify-content: center;
//           width: 38px; height: 38px; border-radius: 8px;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.08);
//           cursor: pointer; color: #e8e8f0;
//           transition: background 0.2s;
//           flex-shrink: 0;
//         }

//         .menu-toggle:hover {
//           background: rgba(232,184,75,0.1);
//           border-color: rgba(232,184,75,0.3);
//           color: #e8b84b;
//         }

//         .menu-toggle svg { width: 20px; height: 20px; }

//         /* ── Search Overlay ── */
//         .search-overlay {
//           position: fixed; inset: 0; z-index: 100;
//           background: rgba(5,5,10,0.9);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           display: flex; flex-direction: column; align-items: center;
//           padding: 90px 24px 40px;
//           opacity: 0; pointer-events: none;
//           transition: opacity 0.25s;
//         }

//         .search-overlay--open { opacity: 1; pointer-events: all; }

//         .search-close-btn {
//           position: absolute; top: 24px; right: 24px;
//           display: flex; align-items: center; justify-content: center;
//           width: 38px; height: 38px; border-radius: 50%;
//           background: rgba(255,255,255,0.06);
//           border: 1px solid rgba(255,255,255,0.1);
//           color: #e8e8f0; cursor: pointer;
//           transition: background 0.2s, color 0.2s;
//         }

//         .search-close-btn:hover { background: rgba(232,184,75,0.1); color: #e8b84b; }
//         .search-close-btn svg { width: 18px; height: 18px; }

//         .search-label {
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: clamp(28px, 4vw, 48px);
//           letter-spacing: 0.08em;
//           color: #e8e8f0;
//           margin-bottom: 28px;
//           text-align: center;
//         }

//         .search-label span { color: #e8b84b; }

//         .search-input-wrapper {
//           position: relative;
//           width: 100%; max-width: 640px;
//           margin-bottom: 24px;
//         }

//         .search-input-icon {
//           position: absolute; left: 18px; top: 50%;
//           transform: translateY(-50%);
//           color: #6b6b8a; width: 18px; height: 18px;
//           pointer-events: none;
//         }

//         .search-input {
//           width: 100%;
//           padding: 16px 18px 16px 50px;
//           background: #12121a;
//           border: 1px solid rgba(232,184,75,0.25);
//           border-radius: 12px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 16px; color: #e8e8f0;
//           outline: none;
//           transition: border-color 0.2s, box-shadow 0.2s;
//         }

//         .search-input::placeholder { color: #4a4a6a; }

//         .search-input:focus {
//           border-color: rgba(232,184,75,0.5);
//           box-shadow: 0 0 0 3px rgba(232,184,75,0.08);
//         }

//         .search-hint {
//           font-size: 13px; color: #4a4a6a;
//           text-align: center; margin-top: 8px;
//         }

//         .search-count {
//           width: 100%; max-width: 640px;
//           font-size: 11px; color: #6b6b8a;
//           margin-bottom: 10px;
//           letter-spacing: 0.05em;
//         }

//         .search-count span { color: #e8b84b; font-weight: 600; }

//         .search-results {
//           width: 100%; max-width: 640px;
//           display: flex; flex-direction: column; gap: 8px;
//           max-height: 55vh; overflow-y: auto;
//         }

//         .search-results::-webkit-scrollbar { width: 4px; }
//         .search-results::-webkit-scrollbar-track { background: transparent; }
//         .search-results::-webkit-scrollbar-thumb { background: rgba(232,184,75,0.2); border-radius: 2px; }

//         .search-result-item {
//           display: flex; align-items: center; gap: 14px;
//           padding: 12px;
//           background: #12121a;
//           border: 1px solid rgba(255,255,255,0.06);
//           border-radius: 12px; cursor: pointer;
//           transition: border-color 0.2s, background 0.2s, transform 0.15s;
//         }

//         .search-result-item:hover {
//           border-color: rgba(232,184,75,0.25);
//           background: #1a1a26;
//           transform: translateX(4px);
//         }

//         .search-result-img {
//           width: 72px; height: 46px;
//           object-fit: cover; border-radius: 6px;
//           flex-shrink: 0; background: #1a1a26;
//         }

//         .search-result-info { flex: 1; min-width: 0; }

//         .search-result-title {
//           font-size: 14px; font-weight: 600; color: #e8e8f0;
//           white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
//           margin-bottom: 4px;
//         }

//         .search-result-meta {
//           font-size: 11px; color: #6b6b8a;
//           display: flex; align-items: center; gap: 6px;
//           flex-wrap: wrap;
//         }

//         .search-result-rating {
//           display: flex; align-items: center; gap: 3px;
//           color: #e8b84b; font-weight: 600;
//         }

//         .search-result-arrow {
//           color: #4a4a6a; flex-shrink: 0;
//           transition: color 0.2s, transform 0.2s;
//         }

//         .search-result-item:hover .search-result-arrow {
//           color: #e8b84b; transform: translateX(2px);
//         }

//         .search-empty {
//           text-align: center; padding: 40px 20px;
//           color: #4a4a6a; font-size: 14px;
//         }

//         /* Mobile Drawer */
//         .mobile-drawer {
//           position: fixed; inset: 0; z-index: 55;
//           display: flex; flex-direction: column;
//           background: #0a0a0f; padding: 24px;
//           transform: translateX(100%);
//           transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
//         }

//         .mobile-drawer--open { transform: translateX(0); }

//         .mobile-drawer__header {
//           display: flex; align-items: center; justify-content: space-between;
//           margin-bottom: 48px;
//         }

//         .mobile-drawer__close {
//           display: flex; align-items: center; justify-content: center;
//           width: 38px; height: 38px; border-radius: 8px;
//           background: rgba(255,255,255,0.05);
//           border: 1px solid rgba(255,255,255,0.08);
//           cursor: pointer; color: #e8e8f0;
//         }

//         .mobile-drawer__close svg { width: 18px; height: 18px; }

//         .mobile-nav-links { display: flex; flex-direction: column; gap: 4px; flex: 1; }

//         .mobile-nav-link {
//           display: flex; align-items: center;
//           padding: 14px 18px;
//           font-size: 16px; font-weight: 500;
//           color: rgba(232,232,240,0.7);
//           text-decoration: none; border-radius: 10px;
//           border: 1px solid transparent;
//           transition: all 0.2s;
//           background: none; cursor: pointer;
//           font-family: 'DM Sans', sans-serif;
//           text-align: left; width: 100%;
//         }

//         .mobile-nav-link:hover {
//           background: rgba(232,184,75,0.07);
//           border-color: rgba(232,184,75,0.15);
//           color: #e8e8f0; padding-left: 24px;
//         }

//         .mobile-nav-link--active {
//           background: rgba(232,184,75,0.1) !important;
//           border-color: rgba(232,184,75,0.25) !important;
//           color: #e8b84b !important; font-weight: 600;
//         }

//         .mobile-drawer__footer {
//           padding-top: 24px;
//           border-top: 1px solid rgba(255,255,255,0.07);
//         }

//         .mobile-drawer__footer .login-btn {
//           width: 100%; padding: 13px; font-size: 13px;
//         }

//         @media (max-width: 768px) {
//           .navbar-links { display: none; }
//           .desktop-search { display: none !important; }
//           .menu-toggle { display: flex; }
//         }
//       `}</style>

//       {/* Navbar */}
//       <nav className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--top'}`}>
//         <div className="navbar-inner">
//           <Link to="/" className="navbar-logo" onClick={() => scrollTo(0, 0)}>
//             <img src={assets.cinetixlogo} alt="Cinetix" />
//           </Link>

//           <div className="navbar-links">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.label}
//                 to={link.to}
//                 onClick={() => scrollTo(0, 0)}
//                 className={`nav-link ${isActive(link.to) ? 'nav-link--active' : ''}`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           <div className="navbar-actions">
//             <button
//               className={`search-btn desktop-search ${searchOpen ? 'search-btn--active' : ''}`}
//               onClick={() => setSearchOpen(true)}
//               title="Search (Esc to close)"
//             >
//               <SearchIcon />
//             </button>

//             {!user ? (
//               <button onClick={openSignIn} className="login-btn">Sign In</button>
//             ) : (
//               <UserButton>
//                 <UserButton.MenuItems>
//                   <UserButton.Action
//                     label="My Bookings"
//                     labelIcon={<TicketPlus width={15} />}
//                     onClick={() => navigate('/my-bookings')}
//                   />
//                 </UserButton.MenuItems>
//               </UserButton>
//             )}

//             <button className="menu-toggle" onClick={() => setIsOpen(true)}>
//               <MenuIcon />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* ── Search Overlay ── */}
//       <div className={`search-overlay ${searchOpen ? 'search-overlay--open' : ''}`}>
//         <button className="search-close-btn" onClick={() => setSearchOpen(false)}>
//           <XIcon />
//         </button>

//         <p className="search-label">Find a <span>Movie</span></p>

//         <div className="search-input-wrapper">
//           <SearchIcon className="search-input-icon" />
//           <input
//             ref={searchInputRef}
//             type="text"
//             placeholder="Search by title, genre, keyword..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="search-input"
//           />
//         </div>

//         {query.trim().length === 0 && (
//           <p className="search-hint">Press <strong style={{color:'#e8e8f0'}}>Esc</strong> to close</p>
//         )}

//         {query.trim().length > 0 && results.length > 0 && (
//           <p className="search-count">
//             Found <span>{results.length}</span> result{results.length !== 1 ? 's' : ''}
//           </p>
//         )}

//         <div className="search-results">
//           {query.trim().length > 0 && results.length === 0 && (
//             <div className="search-empty">
//               No movies found for "<strong style={{color:'#e8e8f0'}}>{query}</strong>"
//             </div>
//           )}

//           {results.map((movie) => (
//             <div
//               key={movie._id}
//               className="search-result-item"
//               onClick={() => handleResultClick(movie._id)}
//             >
//               <img
//                 src={image_base_url + movie.backdrop_path}
//                 alt={movie.title}
//                 className="search-result-img"
//                 onError={(e) => e.target.style.display = 'none'}
//               />
//               <div className="search-result-info">
//                 <p className="search-result-title">{movie.title}</p>
//                 <div className="search-result-meta">
//                   <span>{new Date(movie.release_date).getFullYear()}</span>
//                   <span>·</span>
//                   <span>{movie.genres?.slice(0, 2).map(g => g.name).join(', ')}</span>
//                   <span>·</span>
//                   <span className="search-result-rating">
//                     ★ {movie.vote_average?.toFixed(1)}
//                   </span>
//                 </div>
//               </div>
//               <svg className="search-result-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M9 18l6-6-6-6"/>
//               </svg>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       <div className={`mobile-drawer ${isOpen ? 'mobile-drawer--open' : ''}`}>
//         <div className="mobile-drawer__header">
//           <Link to="/" onClick={() => { scrollTo(0, 0); setIsOpen(false); }}>
//             <img src={assets.cinetixlogo} alt="Cinetix" style={{ width: 120, height: 'auto' }} />
//           </Link>
//           <button className="mobile-drawer__close" onClick={() => setIsOpen(false)}>
//             <XIcon />
//           </button>
//         </div>

//         <div className="mobile-nav-links">
//           {navLinks.map((link) => (
//             <Link
//               key={link.label}
//               to={link.to}
//               onClick={() => { scrollTo(0, 0); setIsOpen(false); }}
//               className={`mobile-nav-link ${isActive(link.to) ? 'mobile-nav-link--active' : ''}`}
//             >
//               {link.label}
//             </Link>
//           ))}
//           <button
//             onClick={() => { setIsOpen(false); setSearchOpen(true); }}
//             className="mobile-nav-link"
//           >
//             🔍 &nbsp;Search Movies
//           </button>
//         </div>

//         <div className="mobile-drawer__footer">
//           {!user ? (
//             <button onClick={() => { openSignIn(); setIsOpen(false); }} className="login-btn">
//               Sign In
//             </button>
//           ) : (
//             <UserButton>
//               <UserButton.MenuItems>
//                 <UserButton.Action
//                   label="My Bookings"
//                   labelIcon={<TicketPlus width={15} />}
//                   onClick={() => { navigate('/my-bookings'); setIsOpen(false); }}
//                 />
//               </UserButton.MenuItems>
//             </UserButton>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchInputRef = useRef(null);

  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  const location = useLocation();
  const { favoriteMovies, shows, image_base_url } = useAppContext();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [searchOpen]);

  useEffect(() => {
    setSearchOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') { setSearchOpen(false); setIsOpen(false); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Movies', to: '/movies' },
    { label: 'Theaters', to: '/theaters' },
    { label: 'Releases', to: '/releases' },
    ...(favoriteMovies.length > 0 ? [{ label: 'Favorites', to: '/favorite' }] : []),
  ];

  const isActive = (to) => location.pathname === to;

  const results = query.trim().length > 0
    ? shows.filter(s =>
        s.title?.toLowerCase().includes(query.toLowerCase()) ||
        s.genres?.some(g => g.name.toLowerCase().includes(query.toLowerCase())) ||
        s.overview?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleResultClick = (id) => {
    navigate(`/movies/${id}`);
    scrollTo(0, 0);
    setSearchOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');

        * { box-sizing: border-box; }

        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.3s, box-shadow 0.3s;
        }

        .navbar--scrolled {
          background: rgba(28, 28, 32, 0.75);
          backdrop-filter: blur(24px) saturate(160%) brightness(0.95);
          -webkit-backdrop-filter: blur(24px) saturate(160%) brightness(0.95);
          box-shadow: 
            0 1px 0 rgba(255,255,255,0.06),
            0 1px 0 rgba(232,184,75,0.08),
            0 8px 32px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .navbar--top {
          background: linear-gradient(to bottom, rgba(22,22,26,0.65), transparent);
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 10px clamp(24px, 5vw, 144px);
        }

        .navbar-logo { flex-shrink: 0; z-index: 60; }
        .navbar-logo img { width: 56px; height: 56px; display: block; object-fit: contain; border-radius: 8px; }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 40px;
        }

        .nav-link {
          padding: 7px 16px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(232,232,240,0.6);
          border-radius: 40px;
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }

        .nav-link:hover { color: #e8e8f0; background: rgba(255,255,255,0.06); }
        .nav-link--active { color: #0a0a0f !important; background: #e8b84b !important; font-weight: 600; }

        .navbar-actions { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }

        .search-btn {
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer;
          transition: all 0.2s;
          color: rgba(232,232,240,0.6);
        }

        .search-btn:hover, .search-btn--active {
          background: rgba(232,184,75,0.1) !important;
          border-color: rgba(232,184,75,0.3) !important;
          color: #e8b84b !important;
        }

        .search-btn svg { width: 16px; height: 16px; }

        .login-btn {
          padding: 8px 22px;
          background: #e8b84b; color: #0a0a0f;
          border: none; border-radius: 40px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(232,184,75,0.25);
        }

        .login-btn:hover {
          background: #f0c860;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(232,184,75,0.4);
        }

        .menu-toggle {
          display: none; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer; color: #e8e8f0;
          transition: background 0.2s;
          flex-shrink: 0;
        }

        .menu-toggle:hover {
          background: rgba(232,184,75,0.1);
          border-color: rgba(232,184,75,0.3);
          color: #e8b84b;
        }

        .menu-toggle svg { width: 20px; height: 20px; }

        /* ── Search Overlay ── */
        .search-overlay {
          position: fixed; inset: 0; z-index: 100;
          background: rgba(5,5,10,0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex; flex-direction: column; align-items: center;
          padding: 90px 24px 40px;
          opacity: 0; pointer-events: none;
          transition: opacity 0.25s;
        }

        .search-overlay--open { opacity: 1; pointer-events: all; }

        .search-close-btn {
          position: absolute; top: 24px; right: 24px;
          display: flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: #e8e8f0; cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }

        .search-close-btn:hover { background: rgba(232,184,75,0.1); color: #e8b84b; }
        .search-close-btn svg { width: 18px; height: 18px; }

        .search-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          letter-spacing: 0.08em;
          color: #e8e8f0;
          margin-bottom: 28px;
          text-align: center;
        }

        .search-label span { color: #e8b84b; }

        .search-input-wrapper {
          position: relative;
          width: 100%; max-width: 640px;
          margin-bottom: 24px;
        }

        .search-input-icon {
          position: absolute; left: 18px; top: 50%;
          transform: translateY(-50%);
          color: #6b6b8a; width: 18px; height: 18px;
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 16px 18px 16px 50px;
          background: #12121a;
          border: 1px solid rgba(232,184,75,0.25);
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px; color: #e8e8f0;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .search-input::placeholder { color: #4a4a6a; }

        .search-input:focus {
          border-color: rgba(232,184,75,0.5);
          box-shadow: 0 0 0 3px rgba(232,184,75,0.08);
        }

        .search-hint {
          font-size: 13px; color: #4a4a6a;
          text-align: center; margin-top: 8px;
        }

        .search-count {
          width: 100%; max-width: 640px;
          font-size: 11px; color: #6b6b8a;
          margin-bottom: 10px;
          letter-spacing: 0.05em;
        }

        .search-count span { color: #e8b84b; font-weight: 600; }

        .search-results {
          width: 100%; max-width: 640px;
          display: flex; flex-direction: column; gap: 8px;
          max-height: 55vh; overflow-y: auto;
        }

        .search-results::-webkit-scrollbar { width: 4px; }
        .search-results::-webkit-scrollbar-track { background: transparent; }
        .search-results::-webkit-scrollbar-thumb { background: rgba(232,184,75,0.2); border-radius: 2px; }

        .search-result-item {
          display: flex; align-items: center; gap: 14px;
          padding: 12px;
          background: #12121a;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px; cursor: pointer;
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
        }

        .search-result-item:hover {
          border-color: rgba(232,184,75,0.25);
          background: #1a1a26;
          transform: translateX(4px);
        }

        .search-result-img {
          width: 72px; height: 46px;
          object-fit: cover; border-radius: 6px;
          flex-shrink: 0; background: #1a1a26;
        }

        .search-result-info { flex: 1; min-width: 0; }

        .search-result-title {
          font-size: 14px; font-weight: 600; color: #e8e8f0;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
          margin-bottom: 4px;
        }

        .search-result-meta {
          font-size: 11px; color: #6b6b8a;
          display: flex; align-items: center; gap: 6px;
          flex-wrap: wrap;
        }

        .search-result-rating {
          display: flex; align-items: center; gap: 3px;
          color: #e8b84b; font-weight: 600;
        }

        .search-result-arrow {
          color: #4a4a6a; flex-shrink: 0;
          transition: color 0.2s, transform 0.2s;
        }

        .search-result-item:hover .search-result-arrow {
          color: #e8b84b; transform: translateX(2px);
        }

        .search-empty {
          text-align: center; padding: 40px 20px;
          color: #4a4a6a; font-size: 14px;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed; inset: 0; z-index: 55;
          display: flex; flex-direction: column;
          background: #0a0a0f; padding: 24px;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }

        .mobile-drawer--open { transform: translateX(0); }

        .mobile-drawer__header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 48px;
        }

        .mobile-drawer__close {
          display: flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer; color: #e8e8f0;
        }

        .mobile-drawer__close svg { width: 18px; height: 18px; }

        .mobile-nav-links { display: flex; flex-direction: column; gap: 4px; flex: 1; }

        .mobile-nav-link {
          display: flex; align-items: center;
          padding: 14px 18px;
          font-size: 16px; font-weight: 500;
          color: rgba(232,232,240,0.7);
          text-decoration: none; border-radius: 10px;
          border: 1px solid transparent;
          transition: all 0.2s;
          background: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          text-align: left; width: 100%;
        }

        .mobile-nav-link:hover {
          background: rgba(232,184,75,0.07);
          border-color: rgba(232,184,75,0.15);
          color: #e8e8f0; padding-left: 24px;
        }

        .mobile-nav-link--active {
          background: rgba(232,184,75,0.1) !important;
          border-color: rgba(232,184,75,0.25) !important;
          color: #e8b84b !important; font-weight: 600;
        }

        .mobile-drawer__footer {
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        .mobile-drawer__footer .login-btn {
          width: 100%; padding: 13px; font-size: 13px;
        }

        @media (max-width: 768px) {
          .navbar-links { display: none; }
          .desktop-search { display: none !important; }
          .menu-toggle { display: flex; }
        }
      `}</style>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--top'}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" onClick={() => scrollTo(0, 0)}>
            <img src={assets.cinetixlogo} alt="Cinetix" />
          </Link>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => scrollTo(0, 0)}
                className={`nav-link ${isActive(link.to) ? 'nav-link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar-actions">
            <button
              className={`search-btn desktop-search ${searchOpen ? 'search-btn--active' : ''}`}
              onClick={() => setSearchOpen(true)}
              title="Search (Esc to close)"
            >
              <SearchIcon />
            </button>

            {!user ? (
              <button onClick={openSignIn} className="login-btn">Sign In</button>
            ) : (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="My Bookings"
                    labelIcon={<TicketPlus width={15} />}
                    onClick={() => navigate('/my-bookings')}
                  />
                </UserButton.MenuItems>
              </UserButton>
            )}

            <button className="menu-toggle" onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Search Overlay ── */}
      <div className={`search-overlay ${searchOpen ? 'search-overlay--open' : ''}`}>
        <button className="search-close-btn" onClick={() => setSearchOpen(false)}>
          <XIcon />
        </button>

        <p className="search-label">Find a <span>Movie</span></p>

        <div className="search-input-wrapper">
          <SearchIcon className="search-input-icon" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search by title, genre, keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {query.trim().length === 0 && (
          <p className="search-hint">Press <strong style={{color:'#e8e8f0'}}>Esc</strong> to close</p>
        )}

        {query.trim().length > 0 && results.length > 0 && (
          <p className="search-count">
            Found <span>{results.length}</span> result{results.length !== 1 ? 's' : ''}
          </p>
        )}

        <div className="search-results">
          {query.trim().length > 0 && results.length === 0 && (
            <div className="search-empty">
              No movies found for "<strong style={{color:'#e8e8f0'}}>{query}</strong>"
            </div>
          )}

          {results.map((movie) => (
            <div
              key={movie._id}
              className="search-result-item"
              onClick={() => handleResultClick(movie._id)}
            >
              <img
                src={image_base_url + movie.backdrop_path}
                alt={movie.title}
                className="search-result-img"
                onError={(e) => e.target.style.display = 'none'}
              />
              <div className="search-result-info">
                <p className="search-result-title">{movie.title}</p>
                <div className="search-result-meta">
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                  <span>·</span>
                  <span>{movie.genres?.slice(0, 2).map(g => g.name).join(', ')}</span>
                  <span>·</span>
                  <span className="search-result-rating">
                    ★ {movie.vote_average?.toFixed(1)}
                  </span>
                </div>
              </div>
              <svg className="search-result-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer__header">
          <Link to="/" onClick={() => { scrollTo(0, 0); setIsOpen(false); }}>
            <img src={assets.cinetixlogo} alt="Cinetix" style={{ width: 48, height: 48, objectFit: 'contain', borderRadius: 8 }} />
          </Link>
          <button className="mobile-drawer__close" onClick={() => setIsOpen(false)}>
            <XIcon />
          </button>
        </div>

        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => { scrollTo(0, 0); setIsOpen(false); }}
              className={`mobile-nav-link ${isActive(link.to) ? 'mobile-nav-link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => { setIsOpen(false); setSearchOpen(true); }}
            className="mobile-nav-link"
          >
            🔍 &nbsp;Search Movies
          </button>
        </div>

        <div className="mobile-drawer__footer">
          {!user ? (
            <button onClick={() => { openSignIn(); setIsOpen(false); }} className="login-btn">
              Sign In
            </button>
          ) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<TicketPlus width={15} />}
                  onClick={() => { navigate('/my-bookings'); setIsOpen(false); }}
                />
              </UserButton.MenuItems>
            </UserButton>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;