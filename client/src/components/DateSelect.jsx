// import { useState } from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import BlurCircle from "./BlurCircle";


// const DateSelect = ({ dateTime, id }) => {
//   const navigate = useNavigate();

//   const [selected, setSelected] = useState(null);

//   const onBookHandler = () => {
//     if (!selected) {
//       return toast("Please select a date");
//     }
//     navigate(`/movies/${id}/${selected}`);
//     scrollTo(0, 0);
//   };

//   return (
//     <div id="dateSelect" className="pt-30">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg">
//         <BlurCircle top="-100px" left="-100px" />
//         <BlurCircle top="100px" right="0" />
//         <div>
//           <p className="text-lg font-semibold">Choose Date</p>
//           <div className="flex items-center gap-6 text-sm mt-5">
//             <ChevronLeftIcon width={28} />
//             <span className="grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4">
//               {Object.keys(dateTime).map((date) => (
//                 <button
//                   onClick={() => setSelected(date)}
//                   key={date}
//                   className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer ${
//                     selected === date
//                       ? "bg-primary text-white"
//                       : "border border-primary/70"
//                   }`}
//                 >
//                   <span>{new Date(date).getDate()}</span>
//                   <span>
//                     {new Date(date).toLocaleString("en-US", { month: "short" })}
//                   </span>
//                 </button>
//               ))}
//             </span>
//             <ChevronRightIcon width={28} />
//           </div>
//         </div>
//         <button
//           onClick={onBookHandler}
//           className="bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/90 transiton-all cursor-pointer"
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DateSelect;



import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, ArrowRightIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import BlurCircle from "./BlurCircle";

const DateSelect = ({ dateTime, id }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const dates = Object.keys(dateTime);

  const onBookHandler = () => {
    if (!selected) return toast("Please select a date first");
    navigate(`/movies/${id}/${selected}`);
    scrollTo(0, 0);
  };

  const getDayName = (dateStr) => new Date(dateStr).toLocaleString("en-US", { weekday: "short" });
  const getDayNum  = (dateStr) => new Date(dateStr).getDate();
  const getMonth   = (dateStr) => new Date(dateStr).toLocaleString("en-US", { month: "short" });

  const isToday = (dateStr) => {
    const d = new Date(dateStr);
    const t = new Date();
    return d.getDate() === t.getDate() && d.getMonth() === t.getMonth() && d.getFullYear() === t.getFullYear();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');

        .date-select {
          font-family: 'DM Sans', sans-serif;
          position: relative;
        }

        .date-select__card {
          position: relative;
          background: #12121a;
          border: 1px solid rgba(232,184,75,0.15);
          border-radius: 20px;
          padding: 36px 40px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* Subtle inner glow top border */
        .date-select__card::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(232,184,75,0.4), transparent);
        }

        /* ── Header ── */
        .date-select__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .date-select__title-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .date-select__eyebrow {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e8b84b;
        }

        .date-select__eyebrow svg { width: 12px; height: 12px; }

        .date-select__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 0.08em;
          color: #e8e8f0;
          line-height: 1;
        }

        .date-select__title span { color: #e8b84b; }

        /* ── Dates Row ── */
        .date-select__row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .date-nav-btn {
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #6b6b8a; cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .date-nav-btn:hover {
          background: rgba(232,184,75,0.1);
          border-color: rgba(232,184,75,0.3);
          color: #e8b84b;
        }

        .date-nav-btn svg { width: 16px; height: 16px; }

        /* Date Cards */
        .dates-list {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .date-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          width: 64px;
          height: 72px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .date-card:hover {
          border-color: rgba(232,184,75,0.35);
          background: rgba(232,184,75,0.06);
          transform: translateY(-2px);
        }

        .date-card--selected {
          background: #e8b84b !important;
          border-color: #e8b84b !important;
          box-shadow: 0 8px 24px rgba(232,184,75,0.35);
          transform: translateY(-3px) !important;
        }

        .date-card__today-dot {
          position: absolute;
          top: 7px; right: 8px;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #e8b84b;
        }

        .date-card--selected .date-card__today-dot {
          background: #0a0a0f;
        }

        .date-card__day {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b6b8a;
          transition: color 0.2s;
        }

        .date-card__num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.04em;
          color: #e8e8f0;
          line-height: 1;
          transition: color 0.2s;
        }

        .date-card__month {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #6b6b8a;
          transition: color 0.2s;
        }

        .date-card--selected .date-card__day,
        .date-card--selected .date-card__num,
        .date-card--selected .date-card__month {
          color: #0a0a0f !important;
        }

        /* ── Footer Row ── */
        .date-select__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .date-select__selected-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .selected-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4a4a6a;
        }

        .selected-value {
          font-size: 15px;
          font-weight: 600;
          color: #e8e8f0;
        }

        .selected-value--empty {
          color: #4a4a6a;
          font-weight: 400;
          font-style: italic;
          font-size: 13px;
        }

        /* Book Button */
        .book-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 13px 36px;
          background: #e8b84b; color: #0a0a0f;
          border: none; border-radius: 40px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(232,184,75,0.3);
        }

        .book-btn:hover {
          background: #f0c860;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(232,184,75,0.45);
        }

        .book-btn:active { transform: scale(0.97); }

        .book-btn--disabled {
          background: rgba(232,184,75,0.2) !important;
          color: rgba(232,184,75,0.4) !important;
          box-shadow: none !important;
          transform: none !important;
          cursor: not-allowed;
        }

        .book-btn svg { width: 15px; height: 15px; }

        @media (max-width: 640px) {
          .date-select__card { padding: 24px 20px; }
          .date-select__footer { flex-direction: column; align-items: stretch; }
          .book-btn { justify-content: center; }
        }
      `}</style>

      <div className="date-select">
        <div className="date-select__card">
          <BlurCircle top="-80px" left="-80px" variant="gold" size="sm" />
          <BlurCircle bottom="0" right="-60px" variant="purple" size="sm" />

          {/* Header */}
          <div className="date-select__header">
            <div className="date-select__title-group">
              <span className="date-select__eyebrow">
                <CalendarIcon /> Pick a Date
              </span>
              <h3 className="date-select__title">
                Choose <span>Showdate</span>
              </h3>
            </div>
            <span style={{ fontSize: 12, color: '#4a4a6a' }}>
              {dates.length} date{dates.length !== 1 ? 's' : ''} available
            </span>
          </div>

          {/* Dates */}
          <div className="date-select__row">
            <button className="date-nav-btn">
              <ChevronLeftIcon />
            </button>

            <div className="dates-list">
              {dates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelected(date)}
                  className={`date-card ${selected === date ? 'date-card--selected' : ''}`}
                >
                  {isToday(date) && <span className="date-card__today-dot" />}
                  <span className="date-card__day">{getDayName(date)}</span>
                  <span className="date-card__num">{getDayNum(date)}</span>
                  <span className="date-card__month">{getMonth(date)}</span>
                </button>
              ))}
            </div>

            <button className="date-nav-btn">
              <ChevronRightIcon />
            </button>
          </div>

          {/* Footer */}
          <div className="date-select__footer">
            <div className="date-select__selected-info">
              <span className="selected-label">Selected Date</span>
              {selected ? (
                <span className="selected-value">
                  {getDayName(selected)}, {getDayNum(selected)} {getMonth(selected)}
                </span>
              ) : (
                <span className="selected-value selected-value--empty">No date selected</span>
              )}
            </div>

            <button
              onClick={onBookHandler}
              className={`book-btn ${!selected ? 'book-btn--disabled' : ''}`}
            >
              Book Seats
              <ArrowRightIcon strokeWidth={2.5} />
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default DateSelect;