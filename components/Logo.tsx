// "Logótipo" SVG inline — gerado localmente, sem imagens externas nem CDN.
export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="Sortuga"
      style={{ width: size, height: size }}
    >
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c5cff" />
          <stop offset="1" stopColor="#38d39f" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#sg)" />
      <path
        d="M16 30c0-4 3-6 8-6s8 2 8 6"
        stroke="#0d1020"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="24" cy="18" r="5" fill="#0d1020" />
      <circle cx="24" cy="18" r="2" fill="#fff" />
    </svg>
  );
}
