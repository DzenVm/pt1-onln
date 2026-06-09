import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section container center" style={{ paddingTop: 100 }}>
      <span className="eyebrow">Erro 404</span>
      <h1>Página não encontrada</h1>
      <p className="lead" style={{ margin: "0 auto 24px" }}>
        A página que procura não existe ou foi movida.
      </p>
      <Link className="btn btn-primary" href="/">
        Voltar ao início
      </Link>
    </section>
  );
}
