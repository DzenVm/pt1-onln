import Link from "next/link";

// Estrutura comum das páginas internas (sobre, termos, etc.).
export default function Sheet({
  kicker,
  title,
  intro,
  pills,
  children,
}: {
  kicker: string;
  title: string;
  intro: string;
  pills?: string[];
  children: React.ReactNode;
}) {
  return (
    <section className="lz-sheet lz-sheet--narrow">
      <div className="lz-wrap">
        <div style={{ marginBottom: "clamp(1.35rem,3.5vw,2rem)" }}>
          <span className="lz-inner-bar">{kicker}</span>
          <div className="lz-inner-body">
            <h1 className="lz-h1">{title}</h1>
            <p className="lz-intro">{intro}</p>
            {pills && pills.length > 0 && (
              <div className="lz-pill-row">
                {pills.map((p) => (
                  <span className="lz-pill" key={p}>
                    {p}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="lz-panel">
          <div className="lz-prose" style={{ maxWidth: "none" }}>
            {children}
          </div>
        </div>

        <p style={{ marginTop: "2rem" }}>
          <Link href="/" style={{ color: "var(--gold-light)", fontWeight: 600 }}>
            ← Voltar ao guia
          </Link>
        </p>
      </div>
    </section>
  );
}
