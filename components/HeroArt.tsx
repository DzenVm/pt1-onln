// Ilustração do hero — SVG inline gerado localmente (sem imagens externas/CDN).
// Cartas, fichas e brilho em tons de ouro e verde "felt".
export default function HeroArt() {
  return (
    <svg
      className="lz-hero-art"
      viewBox="0 0 520 520"
      role="img"
      aria-label="Ilustração de cartas e fichas de casino"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lzGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e0c878" />
          <stop offset="1" stopColor="#c9a44c" />
        </linearGradient>
        <linearGradient id="lzFelt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2d9f78" />
          <stop offset="1" stopColor="#1f6b52" />
        </linearGradient>
        <radialGradient id="lzGlow" cx="50%" cy="42%" r="55%">
          <stop offset="0" stopColor="rgba(201,164,76,0.35)" />
          <stop offset="1" stopColor="rgba(201,164,76,0)" />
        </radialGradient>
      </defs>

      <circle cx="260" cy="230" r="210" fill="url(#lzGlow)" />

      {/* mesa / roleta estilizada */}
      <circle cx="260" cy="250" r="150" fill="#0e1f15" stroke="url(#lzGold)" strokeWidth="6" />
      <circle cx="260" cy="250" r="118" fill="none" stroke="url(#lzFelt)" strokeWidth="10" strokeDasharray="14 12" />
      <circle cx="260" cy="250" r="40" fill="url(#lzGold)" />
      <circle cx="260" cy="250" r="22" fill="#0e1f15" />

      {/* carta esquerda */}
      <g transform="rotate(-16 150 220)">
        <rect x="86" y="150" width="128" height="178" rx="16" fill="#fffdf8" stroke="url(#lzGold)" strokeWidth="4" />
        <path d="M150 178l26 30-26 30-26-30z" fill="#1f6b52" />
        <text x="100" y="186" fontSize="26" fontWeight="700" fill="#1f6b52" fontFamily="system-ui">A</text>
        <text x="184" y="316" fontSize="26" fontWeight="700" fill="#1f6b52" fontFamily="system-ui" transform="rotate(180 192 308)">A</text>
      </g>

      {/* carta direita */}
      <g transform="rotate(15 380 215)">
        <rect x="300" y="142" width="128" height="178" rx="16" fill="#fffdf8" stroke="url(#lzGold)" strokeWidth="4" />
        <path d="M364 170c18 14 30 28 30 44 0 14-12 22-22 16 4 12 10 18 16 22h-48c6-4 12-10 16-22-10 6-22-2-22-16 0-16 12-30 30-44z" fill="#c0392b" />
        <text x="314" y="178" fontSize="26" fontWeight="700" fill="#c0392b" fontFamily="system-ui">K</text>
      </g>

      {/* fichas */}
      <g>
        <ellipse cx="160" cy="408" rx="58" ry="22" fill="#0e1f15" opacity="0.5" />
        <circle cx="160" cy="392" r="40" fill="url(#lzFelt)" stroke="url(#lzGold)" strokeWidth="5" />
        <circle cx="160" cy="392" r="22" fill="none" stroke="#fffdf8" strokeWidth="4" strokeDasharray="6 8" />
        <circle cx="248" cy="412" r="34" fill="#c9a44c" stroke="#fffdf8" strokeWidth="4" strokeDasharray="6 8" />
        <circle cx="330" cy="396" r="40" fill="#13121b" stroke="url(#lzGold)" strokeWidth="5" />
        <circle cx="330" cy="396" r="22" fill="none" stroke="#e0c878" strokeWidth="4" strokeDasharray="6 8" />
      </g>
    </svg>
  );
}
