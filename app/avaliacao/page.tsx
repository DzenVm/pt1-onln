import type { Metadata } from "next";
import Link from "next/link";
import { operators } from "@/lib/casinos";
import JsonLd from "@/components/JsonLd";
import KeepParamsLink from "@/components/KeepParamsLink";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "A nossa avaliação de casinos",
  description:
    "Comparação editorial de casinos online com licença SRIJ para Portugal: 888.pt e Betano.pt. 18+.",
  alternates: { canonical: "/avaliacao" },
};

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span className="lz-stars" aria-label={`Avaliação ${rating} em 5`}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </span>
  );
}

export default function Avaliacao() {
  return (
    <section className="lz-sheet lz-sheet--narrow">
      <JsonLd
        data={breadcrumbLd([
          { name: "Início", path: "/" },
          { name: "Avaliação", path: "/avaliacao" },
        ])}
      />
      <div className="lz-wrap">
        <nav className="lz-crumb" aria-label="Trilho">
          <Link href="/">Início</Link> / Avaliação
        </nav>
        <h1 className="lz-h1">A nossa avaliação de casinos</h1>
        <p className="lz-intro" style={{ maxWidth: "65ch" }}>
          Comparação editorial e independente de operadores com licença do SRIJ.
          Não publicamos valores promocionais fixos: as campanhas mudam e têm
          termos próprios. Confirme sempre a oferta, a licença e as condições no
          site oficial antes de jogar. Jogar a dinheiro implica perdas possíveis.{" "}
          <strong>18+.</strong>
        </p>

        <div className="lz-deck">
          {operators.map((o, i) => (
            <article className="lz-cardx" key={o.slug}>
              <div className="lz-cardx__bar">
                <span className="lz-cardx__rank">{i + 1}</span>
                <span>{o.license}</span>
              </div>
              <div className="lz-cardx__body">
                <div className="lz-cardx__brand">
                  <span className="lz-cardx__logo" style={{ background: o.accent }}>
                    {o.name.slice(0, 3)}
                  </span>
                  <span className="lz-cardx__name">{o.name}</span>
                  <span className="lz-score">
                    <span className="lz-score__num">{o.rating.toFixed(1)}</span>
                    <Stars rating={o.rating} />
                  </span>
                </div>
                <div className="lz-cardx__side">
                  <table className="lz-table">
                    <tbody>
                      <tr>
                        <th>Oferta</th>
                        <td>{o.bonus}</td>
                      </tr>
                      <tr>
                        <th>Pagamentos</th>
                        <td>{o.methods}</td>
                      </tr>
                      <tr>
                        <th>Levantamento</th>
                        <td>{o.payout}</td>
                      </tr>
                      <tr>
                        <th>Catálogo</th>
                        <td>{o.games}</td>
                      </tr>
                      <tr>
                        <th>Licença</th>
                        <td>{o.license}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="lz-terms">{o.bonusNote} Aplicam-se termos. 18+.</p>
                  <KeepParamsLink
                    className="lz-btn lz-btn--primary lz-btn--block"
                    href={`/ponte/${o.slug}`}
                  >
                    Ver oferta {o.name}
                  </KeepParamsLink>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="lz-callout">
          <strong>Como pontuamos.</strong> Combinamos quatro fatores aplicados de
          forma igual a todos: licença e segurança, justiça do bónus, velocidade
          de pagamento e experiência móvel. A ordem pode mudar quando as
          condições dos operadores mudam.
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
