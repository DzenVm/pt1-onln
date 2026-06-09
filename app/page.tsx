import Link from "next/link";
import CasinoCard from "@/components/CasinoCard";
import {
  casinos,
  gameTypes,
  payments,
  criteria,
  faq,
} from "@/lib/casinos";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero container">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Casinos online em Portugal · 2026</span>
            <h1>Escolha o casino online certo, sem perder tempo.</h1>
            <p className="lead">
              A {site.name} compara operadores licenciados, analisa bónus reais e
              testa a rapidez dos pagamentos — para que jogue com confiança e
              responsabilidade.
            </p>

            <div className="badge-row">
              <span className="chip">✔ Operadores licenciados SRIJ</span>
              <span className="chip">✔ Análises independentes</span>
              <span className="chip">✔ 18+ · Jogo responsável</span>
            </div>

            <div className="hero-actions">
              <Link className="btn btn-primary" href="#casinos">
                Ver ranking de casinos
              </Link>
              <Link className="btn btn-ghost" href="#como-avaliamos">
                Como avaliamos
              </Link>
            </div>
          </div>

          <aside className="hero-card">
            <h3>Destaque da semana</h3>
            <ul className="mini-list">
              <li>🏆 {casinos[0].name} — {casinos[0].bonus}</li>
              <li>⚡ Levantamentos em {casinos[0].payout}</li>
              <li>📱 App móvel e MB WAY</li>
              <li>🔒 Verificação de identidade segura</li>
            </ul>
            <Link
              className="btn btn-gold btn-block mt-3"
              href={`/ir/${casinos[0].id}`}
            >
              Ver oferta
            </Link>
            <p className="bonus-note center mt-2">
              18+ · Aplicam-se termos e condições · Jogue com responsabilidade
            </p>
          </aside>
        </div>
      </section>

      {/* ---------------- RANKING DE CASINOS ---------------- */}
      <section id="casinos" className="section container">
        <div className="section-head">
          <span className="eyebrow">Ranking atualizado</span>
          <h2>Os melhores casinos online deste mês</h2>
          <p>
            Lista ordenada pela nossa pontuação combinada de segurança, bónus,
            velocidade de pagamento e experiência móvel.
          </p>
        </div>

        <div className="grid">
          {casinos.map((c, i) => (
            <CasinoCard key={c.id} casino={c} rank={i + 1} />
          ))}
        </div>
      </section>

      {/* ---------------- COMO AVALIAMOS ---------------- */}
      <section id="como-avaliamos" className="section container">
        <div className="section-head">
          <span className="eyebrow">Metodologia</span>
          <h2>Como avaliamos cada casino</h2>
          <p>
            Quatro critérios objetivos, sempre aplicados da mesma forma a todos
            os operadores.
          </p>
        </div>
        <div className="grid grid-4">
          {criteria.map((c) => (
            <div className="card" key={c.title}>
              <h3 style={{ fontSize: "1.1rem" }}>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- BÓNUS ---------------- */}
      <section id="bonus" className="section container">
        <div className="section-head">
          <span className="eyebrow">Ofertas de boas-vindas</span>
          <h2>Bónus explicados de forma simples</h2>
          <p>
            Um bom bónus não é só o valor anunciado. Verificamos sempre o
            requisito de aposta, o prazo e os jogos elegíveis.
          </p>
        </div>
        <div className="grid grid-3">
          <div className="card">
            <h3 style={{ fontSize: "1.1rem" }}>Bónus de depósito</h3>
            <p>
              O casino iguala uma percentagem do seu primeiro depósito. Ideal
              para ampliar o saldo inicial.
            </p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: "1.1rem" }}>Rodadas grátis</h3>
            <p>
              Giros sem custo em slots selecionadas. Confirme o valor por rodada
              e os ganhos máximos.
            </p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: "1.1rem" }}>Cashback &amp; VIP</h3>
            <p>
              Devolução de parte das perdas e recompensas por fidelidade para
              jogadores regulares.
            </p>
          </div>
        </div>
        <div className="disclaimer mt-3">
          Importante: todos os bónus estão sujeitos a termos e condições do
          operador, incluindo requisitos de aposta. Leia sempre as regras antes
          de aceitar uma oferta. 18+.
        </div>
      </section>

      {/* ---------------- JOGOS ---------------- */}
      <section id="jogos" className="section container">
        <div className="section-head">
          <span className="eyebrow">Catálogo</span>
          <h2>Tipos de jogos que vai encontrar</h2>
        </div>
        <div className="grid grid-4">
          {gameTypes.map((g) => (
            <div className="card" key={g.id}>
              <h3 style={{ fontSize: "1.1rem" }}>{g.title}</h3>
              <p>{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- PAGAMENTOS ---------------- */}
      <section id="pagamentos" className="section container">
        <div className="section-head">
          <span className="eyebrow">Depósitos e levantamentos</span>
          <h2>Métodos de pagamento populares em Portugal</h2>
          <p>
            Os operadores em destaque suportam os métodos mais usados por
            jogadores portugueses, com processamento seguro.
          </p>
        </div>
        <div className="badge-row">
          {payments.map((p) => (
            <span className="chip" key={p}>
              💳 {p}
            </span>
          ))}
        </div>
      </section>

      {/* ---------------- JOGO RESPONSÁVEL (resumo) ---------------- */}
      <section className="section container">
        <div className="card" style={{ borderColor: "var(--brand)" }}>
          <span className="eyebrow">Antes de jogar</span>
          <h2 style={{ fontSize: "1.6rem" }}>O jogo deve ser diversão, não um problema</h2>
          <p>
            Defina limites de tempo e de dinheiro, nunca jogue para recuperar
            perdas e faça pausas regulares. Se sentir que o jogo deixou de ser um
            passatempo, procure ajuda.
          </p>
          <Link className="btn btn-primary mt-2" href="/jogo-responsavel">
            Saber mais sobre jogo responsável
          </Link>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section id="faq" className="section container">
        <div className="section-head">
          <span className="eyebrow">Dúvidas comuns</span>
          <h2>Perguntas frequentes</h2>
        </div>
        {faq.map((item) => (
          <details className="faq-item" key={item.q}>
            <summary>
              {item.q}
              <span aria-hidden>+</span>
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>
    </>
  );
}
