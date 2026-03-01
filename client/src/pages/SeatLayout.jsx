// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
// import { assets } from "../assets/assets";
// import Loading from "../components/Loading";
// import { ArrowRightIcon, ClockIcon } from "lucide-react";
// import isoTimeFormat from "../lib/isoTimeFormat";
// import BlurCircle from "../components/BlurCircle";
// import toast from "react-hot-toast";
// import { useAppContext } from "../context/AppContext";
// const SeatLayout = () => {
//   const groupRows = [
//     ["A", "B"],
//     ["C", "D"],
//     ["E", "F"],
//     ["G", "H"],
//     ["I", "J"],
//   ];

//   const { id, date } = useParams();
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [show, setShow] = useState(null);
//   const [occupiedSeats, setOccupiedSeats] = useState([]);

//   const navigate = useNavigate();

//   const { axios, getToken, user } = useAppContext();

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

//   const handleSeatClick = (seatId) => {
//     if (!selectedTime) {
//       return toast("Please select time first");
//     }
//     if (!selectedSeats.includes(seatId) && selectedSeats.length > 4) {
//       return toast("You can only select 5 seats");
//     }
//     if (occupiedSeats.includes(seatId)) {
//       return toast("This seat is already booked");
//     }
//     setSelectedSeats((prev) =>
//       prev.includes(seatId)
//         ? prev.filter((seat) => seat !== seatId)
//         : [...prev, seatId]
//     );
//   };

//   const renderSeats = (row, count = 9) => (
//     <div key={row} className="flex gap-2 mt-2">
//       <div className="flex flex-wrap items-center justify-center gap-2">
//         {Array.from({ length: count }, (_, i) => {
//           const seatId = `${row}${i + 1}`;
//           return (
//             <button
//               key={seatId}
//               onClick={() => handleSeatClick(seatId)}
//               className={`h-8 w-8 rounded border border-primary/60 cursor-pointer ${
//                 selectedSeats.includes(seatId) && "bg-primary text-white"
//               } ${occupiedSeats.includes(seatId) && "opacity-50"}`}
//             >
//               {seatId}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );

 
//   const getOccupiedSeats = async () => {
//     try {
//       const { data } = await axios.get(
//         `/api/booking/seats/${selectedTime.showId}`
//       );
//       if (data.success) {
//         setOccupiedSeats(data.occupiedSeats);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }; 


//   const bookTickets = async () => {
//     try {
//       if (!user) return toast.error("Please login to proceed");

//       if (!selectedTime || !selectedSeats.length)
//         return toast.error("Please select a time and seats");

//       const { data } = await axios.post(
//         "/api/booking/create",
//         { showId: selectedTime.showId, selectedSeats },
//         { headers: { Authorization: `Bearer ${await getToken()}` } }
//       );

//       if (data.success) {
//         // toast.success(data.message);
//         // navigate("/my-bookings");
//         window.location.href = data.url;
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
  
//   useEffect(() => {
//     getShow();
//   }, []);

//   useEffect(() => {
//     if (selectedTime) {
//       getOccupiedSeats();
//     }
//   }, [selectedTime]);

//   return show ? (
//     <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">
//       {/* Available Timings */}
//       <div className="w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30">
//         <p className="text-lg font-semibold px-6">Available Timings</p>
//         <div className="mt-5 space-y-1">
//           {show?.dateTime?.[date]?.map((item) => (
//             <div
//               key={item.time}
//               onClick={() => setSelectedTime(item)}
//               className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${
//                 selectedTime?.time === item.time
//                   ? "bg-primary text-white"
//                   : "hover:bg-primary/20"
//               }`}
//             >
//               <ClockIcon className="w-4 h-4" />
//               <p className="text-sm">{isoTimeFormat(item.time)}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Seat Layout */}
//       <div className="relative flex-1 flex flex-col items-center max-md:mt-16">
//         <BlurCircle top="-100px" left="-100px" />
//         <BlurCircle bottom="0" right="0" />
//         <h1 className="text-2xl font-semibold mb-4">Select your seat</h1>
//         <img src={assets.screenImage} alt="screen" />
//         <p className="text-gray-400 text-sm mb-6">SCREEN SIDE</p>
//         <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
//           <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6">
//             {groupRows[0].map((row) => renderSeats(row))}
//           </div>
//           <div className="grid grid-cols-2 gap-11">
//             {groupRows.slice(1).map((group, idx) => (
//               <div key={idx}>{group.map((row) => renderSeats(row))}</div>
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={bookTickets}
//           className="flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95"
//         >
//           Proceed to Checkout
//           <ArrowRightIcon strokeWidth={3} className="w-4 h-4" />
//         </button>
//       </div>

//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default SeatLayout;




import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import Loading from "../components/Loading";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import isoTimeFormat from "../lib/isoTimeFormat";
import BlurCircle from "../components/BlurCircle";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";

const SeatLayout = () => {
  const groupRows = [
    ["A", "B"],
    ["C", "D"],
    ["E", "F"],
    ["G", "H"],
    ["I", "J"],
  ];

  const { id, date } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);
  const [occupiedSeats, setOccupiedSeats] = useState([]);

  const navigate = useNavigate();
  const { axios, getToken, user } = useAppContext();

  const getShow = async () => {
    try {
      const { data } = await axios.get(`/api/show/${id}`);
      if (data.success) setShow(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSeatClick = (seatId) => {
    if (!selectedTime) return toast("Please select a time first");
    if (!selectedSeats.includes(seatId) && selectedSeats.length >= 5)
      return toast("You can only select up to 5 seats");
    if (occupiedSeats.includes(seatId)) return toast("This seat is already booked");
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((s) => s !== seatId) : [...prev, seatId]
    );
  };

  const getOccupiedSeats = async () => {
    try {
      const { data } = await axios.get(`/api/booking/seats/${selectedTime.showId}`);
      if (data.success) setOccupiedSeats(data.occupiedSeats);
      else toast.error(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const bookTickets = async () => {
    try {
      if (!user) return toast.error("Please login to proceed");
      if (!selectedTime || !selectedSeats.length)
        return toast.error("Please select a time and seats");
      const { data } = await axios.post(
        "/api/booking/create",
        { showId: selectedTime.showId, selectedSeats },
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      );
      if (data.success) window.location.href = data.url;
      else toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => { getShow(); }, []);
  useEffect(() => { if (selectedTime) getOccupiedSeats(); }, [selectedTime]);

  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex items-center gap-3">
      <span className="row-label">{row}</span>
      <div className="flex gap-2 flex-wrap">
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`;
          const isSelected = selectedSeats.includes(seatId);
          const isOccupied = occupiedSeats.includes(seatId);
          return (
            <button
              key={seatId}
              onClick={() => handleSeatClick(seatId)}
              disabled={isOccupied}
              title={seatId}
              className={`seat ${isSelected ? "seat--selected" : ""} ${isOccupied ? "seat--occupied" : ""}`}
            >
              <span className="seat-back" />
              <span className="seat-base" />
            </button>
          );
        })}
      </div>
    </div>
  );

  return show ? (
    <>
      <style>{`
        :root {
          --bg: #0a0a0f;
          --surface: #12121a;
          --surface2: #1a1a26;
          --border: rgba(255,255,255,0.07);
          --gold: #e8b84b;
          --gold-dim: rgba(232,184,75,0.15);
          --gold-glow: rgba(232,184,75,0.35);
          --available: #1e2a3a;
          --available-border: #2e4a6a;
          --selected: #e8b84b;
          --selected-glow: rgba(232,184,75,0.5);
          --occupied: #1a1a1a;
          --text: #e8e8f0;
          --text-muted: #6b6b8a;
          --radius: 6px;
          --font: 'DM Sans', sans-serif;
        }

        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');

        .seat-page {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--font);
          color: var(--text);
          display: flex;
          gap: 0;
          position: relative;
          overflow: hidden;
        }

        .seat-page::before {
          content: '';
          position: fixed;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(232,184,75,0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Timing Sidebar ── */
        .timing-sidebar {
          position: sticky;
          top: 80px;
          height: max-content;
          width: 220px;
          flex-shrink: 0;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          margin: 40px 0 40px 40px;
        }

        .timing-sidebar__header {
          padding: 20px 20px 12px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border);
        }

        .timing-slot {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          border-left: 3px solid transparent;
          font-size: 13px;
          font-weight: 500;
        }

        .timing-slot:hover {
          background: var(--gold-dim);
          color: var(--gold);
        }

        .timing-slot--active {
          background: var(--gold-dim);
          border-left-color: var(--gold);
          color: var(--gold);
        }

        .timing-slot svg {
          width: 14px;
          height: 14px;
          opacity: 0.7;
        }

        /* ── Main Area ── */
        .seat-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 40px 80px;
          position: relative;
          z-index: 1;
        }

        .seat-main__title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 38px;
          letter-spacing: 0.08em;
          color: var(--text);
          margin-bottom: 48px;
          text-align: center;
        }

        .seat-main__title span {
          color: var(--gold);
        }

        /* ── Screen ── */
        .screen-wrapper {
          width: 100%;
          max-width: 620px;
          margin-bottom: 8px;
          position: relative;
        }

        .screen-img {
          width: 100%;
          filter: drop-shadow(0 0 24px rgba(232,184,75,0.2));
        }

        .screen-label {
          text-align: center;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 36px;
        }

        /* ── Seats ── */
        .seats-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
        }

        .seats-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .seats-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 10px;
        }

        .row-label {
          width: 18px;
          font-size: 10px;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }

        /* ── Individual Seat ── */
        .seat {
          position: relative;
          width: 30px;
          height: 28px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: transform 0.15s;
        }

        .seat:hover:not(:disabled) {
          transform: translateY(-2px);
        }

        .seat:disabled {
          cursor: not-allowed;
          opacity: 1;
        }

        .seat-back {
          position: absolute;
          top: 0;
          left: 2px;
          right: 2px;
          height: 16px;
          background: var(--available);
          border: 1px solid var(--available-border);
          border-radius: 4px 4px 2px 2px;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
        }

        .seat-base {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 12px;
          background: var(--available);
          border: 1px solid var(--available-border);
          border-radius: 2px 2px 5px 5px;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
        }

        /* Selected */
        .seat--selected .seat-back,
        .seat--selected .seat-base {
          background: var(--selected);
          border-color: var(--selected);
          box-shadow: 0 0 10px var(--selected-glow), 0 0 20px rgba(232,184,75,0.2);
        }

        /* Occupied */
        .seat--occupied .seat-back,
        .seat--occupied .seat-base {
          background: var(--occupied);
          border-color: #2a2a2a;
          opacity: 0.4;
        }

        /* Hover (available only) */
        .seat:not(.seat--selected):not(.seat--occupied):hover .seat-back,
        .seat:not(.seat--selected):not(.seat--occupied):hover .seat-base {
          background: #253650;
          border-color: #4a7ab5;
        }

        /* ── Legend ── */
        .legend {
          display: flex;
          gap: 24px;
          margin-top: 40px;
          padding: 14px 28px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 40px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .legend-dot {
          width: 16px;
          height: 14px;
          border-radius: 3px;
          border: 1px solid;
        }

        .legend-dot--available {
          background: var(--available);
          border-color: var(--available-border);
        }

        .legend-dot--selected {
          background: var(--selected);
          border-color: var(--selected);
          box-shadow: 0 0 8px var(--selected-glow);
        }

        .legend-dot--occupied {
          background: var(--occupied);
          border-color: #2a2a2a;
          opacity: 0.5;
        }

        /* ── Summary Bar ── */
        .summary-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 44px;
          padding: 18px 28px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          width: 100%;
          max-width: 620px;
        }

        .summary-seats {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .summary-seat-chip {
          padding: 4px 10px;
          background: var(--gold-dim);
          border: 1px solid rgba(232,184,75,0.3);
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          color: var(--gold);
          letter-spacing: 0.05em;
        }

        .summary-empty {
          font-size: 13px;
          color: var(--text-muted);
        }

        /* ── CTA Button ── */
        .checkout-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: var(--gold);
          color: #0a0a0f;
          border: none;
          border-radius: 40px;
          font-family: var(--font);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.2s, background 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
          box-shadow: 0 4px 20px rgba(232,184,75,0.3);
        }

        .checkout-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(232,184,75,0.45);
          background: #f0c860;
        }

        .checkout-btn:active {
          transform: scale(0.97);
        }

        @media (max-width: 768px) {
          .seat-page { flex-direction: column; }
          .timing-sidebar {
            width: calc(100% - 32px);
            margin: 20px 16px 0;
            position: static;
          }
          .seat-main { padding: 32px 16px 60px; }
          .seats-split { grid-template-columns: 1fr; gap: 10px; }
          .summary-bar { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="seat-page">
        {/* Timing Sidebar */}
        <div className="timing-sidebar">
          <p className="timing-sidebar__header">Show Times</p>
          <div>
            {show?.dateTime?.[date]?.map((item) => (
              <div
                key={item.time}
                onClick={() => setSelectedTime(item)}
                className={`timing-slot ${selectedTime?.time === item.time ? "timing-slot--active" : ""}`}
              >
                <ClockIcon />
                <span>{isoTimeFormat(item.time)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Seat Area */}
        <div className="seat-main">
          <h1 className="seat-main__title">
            Pick Your <span>Seats</span>
          </h1>

          <div className="screen-wrapper">
            <img src={assets.screenImage} alt="screen" className="screen-img" />
          </div>
          <p className="screen-label">▲ Screen This Side</p>

          {/* Seat Grid */}
          <div className="seats-container">
            {/* Front rows A & B */}
            <div className="seats-section">
              {groupRows[0].map((row) => renderSeats(row))}
            </div>

            {/* Remaining rows in 2 columns */}
            <div className="seats-split">
              {groupRows.slice(1).map((group, idx) => (
                <div key={idx} className="seats-section">
                  {group.map((row) => renderSeats(row))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="legend">
            <div className="legend-item">
              <div className="legend-dot legend-dot--available" />
              Available
            </div>
            <div className="legend-item">
              <div className="legend-dot legend-dot--selected" />
              Selected
            </div>
            <div className="legend-item">
              <div className="legend-dot legend-dot--occupied" />
              Booked
            </div>
          </div>

          {/* Summary + CTA */}
          <div className="summary-bar">
            <div className="summary-seats">
              {selectedSeats.length > 0 ? (
                selectedSeats.map((s) => (
                  <span key={s} className="summary-seat-chip">{s}</span>
                ))
              ) : (
                <span className="summary-empty">No seats selected yet</span>
              )}
            </div>
            <button onClick={bookTickets} className="checkout-btn">
              Checkout
              <ArrowRightIcon strokeWidth={3} style={{ width: 14, height: 14 }} />
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default SeatLayout;