import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="lz-foot" aria-label="Rodapé">
      <div className="lz-wrap">
        <div className="lz-foot__grid">
          <div>
            <h2 className="lz-foot__h">Aviso legal</h2>
            <p className="lz-foot__p">
              Este site destina-se a maiores de 18 anos. Publicamos texto
              informativo; não aceitamos apostas neste domínio. Procure ajuda
              especializada se o jogo deixar de ser controlável.
            </p>
          </div>
          <div>
            <h2 className="lz-foot__h">Jogo responsável</h2>
            <p className="lz-foot__p">
              Estabeleça um teto de gastos e a duração da sessão antes de jogar
              noutro site. Não persiga perdas. Para uma pausa longa, use as
              ferramentas legais do operador e as linhas independentes.
            </p>
          </div>
          <div>
            <h2 className="lz-foot__h">Sinais de alerta</h2>
            <p className="lz-foot__p">
              Esconder apostas, pedir dinheiro emprestado para jogar ou falhar
              compromissos por causa do jogo merece conversa cedo. Os contactos
              indicados são gratuitos e confidenciais.
            </p>
          </div>
        </div>

        <p className="lz-foot__tag">
          Apostar pode tornar-se dependência — trate o casino como lazer com
          limite, nunca como rendimento.
        </p>

        <div className="lz-foot__rg">
          <p
            className="lz-foot__rg-inner"
            role="group"
            aria-label="Idade mínima e ligações oficiais"
          >
            <span className="lz-foot__age" aria-label="Apenas para maiores de 18 anos">
              18+
            </span>
            <span className="lz-foot__sep" aria-hidden="true">
              |
            </span>
            <a
              href="https://www.srij.turismodeportugal.pt/pt"
              target="_blank"
              rel="noopener noreferrer"
            >
              SRIJ
            </a>
            <span className="lz-foot__sep" aria-hidden="true">
              |
            </span>
            <a href="https://www.icad.pt/" target="_blank" rel="noopener noreferrer">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.65"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9.25" />
                <circle cx="12" cy="9" r="2.15" fill="currentColor" stroke="none" />
                <path d="M7.5 18.5c.85-2.6 2.35-4 4.5-4s3.65 1.4 4.5 4" />
              </svg>
              <span>ICAD</span>
            </a>
          </p>
        </div>

        <div className="lz-foot__legal">
          <p>
            © {year} — {site.name}. Guia informativo independente. Todos os
            direitos reservados.
          </p>
          <nav className="lz-foot__links" aria-label="Ligações do rodapé">
            <Link href="/sobre">Sobre</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/termos">Termos</Link>
            <Link href="/privacidade">Privacidade</Link>
            <Link href="/jogo-responsavel">Jogo responsável</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
