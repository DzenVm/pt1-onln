import type { Metadata } from "next";
import Link from "next/link";
import { casinos } from "@/lib/casinos";

export const metadata: Metadata = {
  title: "A nossa avaliação de casinos",
  description:
    "Comparação editorial de casinos online com licença para Portugal: bónus, métodos e prazos de levantamento. 18+.",
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
      <div className="lz-wrap">
        <p className="lz-eyebrow" style={{ display: "block", marginBottom: ".5rem" }}>
          <Link href="/" style={{ color: "var(--gold)" }}>
            Início
          </Link>{" "}
          / Avaliação
        </p>
        <h1 className="lz-h1">A nossa avaliação de casinos</h1>
        <p className="lz-intro" style={{ maxWidth: "65ch" }}>
          Comparação editorial e independente. Os valores abaixo são exemplos
          ilustrativos com marcas fictícias — confirme sempre as condições reais,
          a licença do SRIJ e os termos do bónus no site do operador antes de
          jogar. Jogar a dinheiro implica perdas possíveis. <strong>18+.</strong>
        </p>

        <div className="lz-deck">
          {casinos.map((c, i) => (
            <article className="lz-cardx" key={c.id}>
              <div className="lz-cardx__bar">
                <span className="lz-cardx__rank">{i + 1}</span>
                <span>Destaque editorial · licença consultável no SRIJ</span>
              </div>
              <div className="lz-cardx__body">
                <div className="lz-cardx__brand">
                  <span className="lz-cardx__logo" style={{ background: c.accent }}>
                    {c.name.slice(0, 2)}
                  </span>
                  <span className="lz-cardx__name">{c.name}</span>
                  <span className="lz-score">
                    <span className="lz-score__num">{c.rating.toFixed(1)}</span>
                    <Stars rating={c.rating} />
                  </span>
                </div>
                <div className="lz-cardx__side">
                  <table className="lz-table">
                    <tbody>
                      <tr>
                        <th>Bónus</th>
                        <td>{c.bonus}</td>
                      </tr>
                      <tr>
                        <th>Pagamentos</th>
                        <td>{c.methods}</td>
                      </tr>
                      <tr>
                        <th>Levantamento</th>
                        <td>{c.payout}</td>
                      </tr>
                      <tr>
                        <th>Catálogo</th>
                        <td>{c.games}</td>
                      </tr>
                      <tr>
                        <th>Desde</th>
                        <td>{c.established}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="lz-terms">{c.bonusNote} Aplicam-se termos. 18+.</p>
                  <a className="lz-btn lz-btn--primary lz-btn--block" href={`/ir/${c.id}`}>
                    Visitar o site oficial
                  </a>
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

        <p className="lz-intro">
          <Link href="/" className="lz-prose" style={{ color: "var(--gold-light)" }}>
            ← Voltar ao guia
          </Link>
        </p>
      </div>
    </section>
  );
}
