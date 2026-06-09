import type { Casino } from "@/lib/casinos";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span className="stars" aria-label={`Avaliação ${rating} em 5`}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)} {rating.toFixed(1)}
    </span>
  );
}

export default function CasinoCard({
  casino,
  rank,
}: {
  casino: Casino;
  rank: number;
}) {
  const initials = casino.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <article className="casino">
      <span className="rank">{rank}</span>
      <div className="casino-logo" style={{ background: casino.accent }}>
        {initials}
      </div>

      <div className="casino-body">
        <h3>{casino.name}</h3>
        <Stars rating={casino.rating} />
        <div className="tags">
          {casino.features.map((f) => (
            <span className="tag" key={f}>
              {f}
            </span>
          ))}
          <span className="tag">Levantamentos: {casino.payout}</span>
        </div>
      </div>

      <div className="casino-bonus">
        <span className="bonus-amount">{casino.bonus}</span>
        <span className="bonus-note">{casino.bonusNote}</span>
        <a className="btn btn-gold btn-block" href={`/ir/${casino.id}`}>
          Visitar site
        </a>
      </div>
    </article>
  );
}
