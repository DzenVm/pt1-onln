import Link from "next/link";
import { site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <Logo />
              <span>{site.name}</span>
            </Link>
            <p className="mt-2" style={{ maxWidth: 360 }}>
              {site.description}
            </p>
            <div className="mt-2" style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span className="age-badge">18+</span>
              <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
                Jogue com responsabilidade.
              </span>
            </div>
          </div>

          <div>
            <h4>Explorar</h4>
            <ul>
              <li><Link href="/#casinos">Melhores casinos</Link></li>
              <li><Link href="/#bonus">Bónus</Link></li>
              <li><Link href="/#jogos">Tipos de jogos</Link></li>
              <li><Link href="/#pagamentos">Pagamentos</Link></li>
              <li><Link href="/#faq">Perguntas frequentes</Link></li>
            </ul>
          </div>

          <div>
            <h4>Informação</h4>
            <ul>
              <li><Link href="/sobre">Sobre a {site.name}</Link></li>
              <li><Link href="/jogo-responsavel">Jogo responsável</Link></li>
              <li><Link href="/privacidade">Política de privacidade</Link></li>
              <li><Link href="/cookies">Política de cookies</Link></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
          </div>
        </div>

        <p className="disclaimer">
          A {site.name} é um guia informativo e independente. Não operamos jogos
          de fortuna ou azar nem aceitamos apostas. O jogo a dinheiro está
          reservado a maiores de 18 anos e pode causar dependência. Em Portugal,
          jogue apenas em operadores licenciados pelo SRIJ. Se precisar de ajuda,
          contacte a linha SOS Jogo: 213 950 911.
        </p>

        <div className="footer-bottom">
          <span>© {year} {site.name}. Todos os direitos reservados.</span>
          <span>Conteúdo para maiores de 18 anos · Jogue com responsabilidade</span>
        </div>
      </div>
    </footer>
  );
}
