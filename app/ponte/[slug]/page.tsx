import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { operators, getOperator } from "@/lib/casinos";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

// Gera as páginas-ponte estáticas para cada operador.
export function generateStaticParams() {
  return operators.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const op = getOperator(slug);
  const name = op?.name ?? "operador";
  return {
    title: `Redirecionamento editorial — ${name}`,
    description:
      "Este domínio não aloja jogos. O botão abre o site oficial do operador no seu browser.",
    // Página de transição: nunca indexada (boa prática e alinhado com Google Ads).
    robots: { index: false, follow: false },
    alternates: { canonical: `/ponte/${slug}` },
  };
}

export default async function Ponte({ params }: Params) {
  const { slug } = await params;
  const op = getOperator(slug);
  if (!op) notFound();

  return (
    <section className="lz-sheet lz-sheet--narrow">
      <div className="lz-wrap">
        <article className="lz-bridge">
          <nav className="lz-crumb" aria-label={`Trilho ${op.name}`}>
            <Link href="/">Início</Link> / <Link href="/avaliacao">Avaliação</Link> /{" "}
            {op.name}
          </nav>

          <h1 className="lz-h1">Próximo passo: site {op.name}</h1>
          <p className="lz-intro" style={{ marginInline: "auto" }}>
            O registo, o saldo e as apostas são tratados exclusivamente no
            operador. Se o navegador não abrir a nova página, utilize o botão
            abaixo.
          </p>

          <div className="lz-prose" style={{ marginInline: "auto", textAlign: "left" }}>
            <p>
              Vai sair de {site.name} e entrar num domínio licenciado, gerido
              por <strong>{op.name}</strong> ({op.license}).
            </p>
            <p>
              Antes de aceitar qualquer campanha, leia integralmente os termos
              publicados nesse site. Este domínio não aloja jogos nem aceita
              apostas. Conteúdo apenas para maiores de 18 anos.
            </p>
          </div>

          <div className="lz-btn-wrap">
            <a
              className="lz-btn lz-btn--primary lz-btn--cta"
              href={op.url}
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              Abrir {op.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
            </a>
          </div>

          <p className="lz-hero-note" style={{ marginTop: "1.5rem" }}>
            18+ · Jogue com responsabilidade · SOS Jogo: 213 950 911
          </p>
        </article>

        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/avaliacao" style={{ color: "var(--gold-light)", fontWeight: 600 }}>
            ← Voltar à avaliação
          </Link>
        </p>
      </div>
    </section>
  );
}
