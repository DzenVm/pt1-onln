import Link from "next/link";

export default function NotFound() {
  return (
    <section className="lz-sheet">
      <div className="lz-wrap" style={{ textAlign: "center", paddingTop: "3rem" }}>
        <span className="lz-eyebrow">Erro 404</span>
        <h1 className="lz-h1">Página não encontrada</h1>
        <p className="lz-intro" style={{ margin: "0 auto 1.5rem", maxWidth: "48ch" }}>
          A página que procura não existe ou foi movida.
        </p>
        <Link className="lz-btn lz-btn--primary" href="/">
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}
