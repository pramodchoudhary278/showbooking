// const BlurCircle = ({
//   top = "auto",
//   left = "auto",
//   right = "auto",
//   bottom = "auto",
// }) => {
//   return (
//     <div
//       className="absolute -z-50 h-58 w-58 aspect-square rounded-full bg-primary/30 blur-3xl"
//       style={{ top: top, left: left, right: right, bottom: bottom }}
//     ></div>
//   );
// };

// export default BlurCircle;


const BlurCircle = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
  variant = "gold", // gold | blue | purple | mixed
  size = "md",      // sm | md | lg | xl
}) => {
  const sizes = {
    sm:  { outer: "180px", inner: "90px"  },
    md:  { outer: "280px", inner: "140px" },
    lg:  { outer: "380px", inner: "190px" },
    xl:  { outer: "500px", inner: "250px" },
  };

  const variants = {
    gold: {
      outer: "rgba(232, 184, 75, 0.13)",
      inner: "rgba(232, 184, 75, 0.22)",
    },
    blue: {
      outer: "rgba(59, 130, 246, 0.12)",
      inner: "rgba(99, 179, 237, 0.2)",
    },
    purple: {
      outer: "rgba(168, 85, 247, 0.12)",
      inner: "rgba(192, 132, 252, 0.2)",
    },
    mixed: {
      outer: "rgba(232, 184, 75, 0.1)",
      inner: "rgba(168, 85, 247, 0.18)",
    },
  };

  const { outer, inner } = sizes[size] || sizes.md;
  const colors = variants[variant] || variants.gold;

  return (
    <div
      style={{
        position: "absolute",
        top, left, right, bottom,
        width: outer,
        height: outer,
        zIndex: -10,
        pointerEvents: "none",
      }}
    >
      {/* Outer soft glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: colors.outer,
          filter: "blur(60px)",
          transform: "scale(1)",
          animation: "blurPulse 6s ease-in-out infinite",
        }}
      />
      {/* Inner brighter core */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: inner,
          height: inner,
          borderRadius: "50%",
          background: colors.inner,
          filter: "blur(35px)",
          animation: "blurPulse 6s ease-in-out infinite reverse",
        }}
      />

      <style>{`
        @keyframes blurPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};

export default BlurCircle;  
        
