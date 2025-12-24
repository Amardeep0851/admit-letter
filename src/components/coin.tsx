export default function RupeeCoin() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="metal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5f5f5" />
          <stop offset="60%" stopColor="#cfcfcf" />
          <stop offset="100%" stopColor="#9e9e9e" />
        </radialGradient>
      </defs>

      {/* Coin body */}
      <circle cx="100" cy="100" r="90" fill="url(#metal)" />

      {/* Inner ring */}
      <circle
        cx="100"
        cy="100"
        r="75"
        fill="none"
        stroke="#b0b0b0"
        strokeWidth="3"
      />

      {/* ₹ Symbol */}
      <text
        x="100"
        y="115"
        textAnchor="middle"
        fontSize="72"
        fontWeight="700"
        fill="#8a8a8a"
        fontFamily="Inter, sans-serif"
      >
        ₹1
      </text>
    </svg>
  );
}
