"use client";

export default function MTCoin({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
    >
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#b9ffff" />
          <stop offset="60%" stopColor="#2ee6ff" />
          <stop offset="100%" stopColor="#0aa3c2" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#g)" stroke="#7ff6ff" strokeWidth="4" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontSize="36"
        fontWeight="900"
        fill="#003844"
        style={{ letterSpacing: "-2px" }}
      >
        MT
      </text>
    </svg>
  );
}
