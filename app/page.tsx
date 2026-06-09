import Link from "next/link";
import Image from "next/image";
import heroImg from "@/public/hero-casino.png";
import FeatureIcon from "@/components/FeatureIcon";
import { features, checklist, faq, habits } from "@/lib/casinos";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="lz-hero" aria-labelledby="hero-h">
        <div className="lz-wrap">
          <div className="lz-panel lz-hero-frame">
            <div className="lz-hero-grid">
              <header className="lz-hero-copy">
                <span className="lz-eyebrow">Mercado legal · SRIJ · 2026</span>
                <h1 id="hero-h" className="lz-hero-title">
                  Casinos online em Portugal
                </h1>
                <p className="lz-hero-desc">
                  Reunimos o essencial sobre operadores autorizados pelo SRIJ —
                  promoções, levantamentos e jogo responsável — para que decida
                  com a cabeça fria. Conteúdo apenas para maiores de 18 anos.
                </p>
                <div className="lz-hero-cta-row">
                  <Link className="lz-btn lz-btn--primary lz-btn--cta" href="/avaliacao">
                    Começar agora
                  </Link>
                </div>
                <p className="lz-hero-note">
                  Somos um meio informativo independente, não um operador de jogo.
                </p>
              </header>
              <div className="lz-hero-visual">
                <Image
                  className="lz-hero-art"
                  src={heroImg}
                  alt="Ilustração de casino — fichas e cartas"
                  priority
                  sizes="(max-width: 860px) 78vw, 480px"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- VANTAGENS DA LICENÇA ---------------- */}
      <section className="lz-ribbon" aria-labelledby="lic-h">
        <div className="lz-wrap">
          <header className="lz-head">
            <h2 id="lic-h" className="lz-h2">
              O que muda quando o casino tem licença portuguesa
            </h2>
            <p className="lz-sub">
              A supervisão do SRIJ impõe regras claras: da publicidade ao
              tratamento de reclamações, o enquadramento é outro face a sites
              «cinzentos».
            </p>
          </header>
          <div className="lz-panel">
            <div className="lz-features" role="list">
              {features.map((f) => (
                <article className="lz-feature" role="listitem" key={f.title}>
                  <div className="lz-feature__icon">
                    <FeatureIcon name={f.icon} />
                  </div>
                  <h3 className="lz-feature__h">{f.title}</h3>
                  <p className="lz-feature__p">{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CHECKLIST ---------------- */}
      <section className="lz-ribbon lz-ribbon--tint" aria-labelledby="chk-h">
        <div className="lz-wrap">
          <header className="lz-head">
            <h2 id="chk-h" className="lz-h2">
              Checklist antes de abrir conta
            </h2>
            <p className="lz-sub">
              Síntese editorial — não substitui o regulador nem o contrato que
              assina com o operador.
            </p>
          </header>
          <div className="lz-panel">
            <div className="lz-columns">
              {checklist.map((c) => (
                <p key={c.head}>
                  <strong>{c.head}</strong> {c.body}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="lz-ribbon" aria-labelledby="faq-h">
        <div className="lz-wrap">
          <header className="lz-head">
            <h2 id="faq-h" className="lz-h2">
              Dúvidas comuns sobre casino online em Portugal
            </h2>
            <p className="lz-sub">
              Respostas em tom jornalístico para quem pesquisa{" "}
              <strong>casino licenciado</strong>,{" "}
              <strong>bónus de registo</strong> ou{" "}
              <strong>slots legais</strong>. Este guia{" "}
              <strong>não gere apostas nem carteira</strong> e{" "}
              <strong>não promete lucros</strong>. Jogar com dinheiro real
              implica perdas possíveis. <strong>Apenas 18+.</strong>
            </p>
          </header>
          <div className="lz-panel">
            <div className="lz-faq" role="region" aria-label="Perguntas frequentes">
              {faq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <div className="lz-faq__body">{item.a}</div>
                </details>
              ))}
            </div>
            <p className="lz-faq-foot">
              Expressões como «top casino» mudam de significado conforme a
              campanha da semana. Use a{" "}
              <Link href="/avaliacao">nossa avaliação</Link> como roteiro e
              confirme os valores no operador antes de jogar.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- HÁBITOS ---------------- */}
      <section className="lz-ribbon" aria-labelledby="hab-h">
        <div className="lz-wrap">
          <header className="lz-head">
            <h2 id="hab-h" className="lz-h2">
              Quatro hábitos que o SRIJ também recomenda cultivar
            </h2>
            <p className="lz-sub">
              Pequenos rituais reduzem a impulsividade — não substituem as
              ferramentas oficiais de limite e exclusão.
            </p>
          </header>
          <div className="lz-panel">
            <div className="lz-mosaic" role="list">
              {habits.map((h) => (
                <article className="lz-tile" role="listitem" key={h.n}>
                  <p className="lz-tile__n">{h.n}</p>
                  <h3 className="lz-tile__h">{h.title}</h3>
                  <p className="lz-tile__p">{h.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
