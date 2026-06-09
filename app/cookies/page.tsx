import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Que cookies a Sortuga utiliza e como controlá-los.",
};

export default function Cookies() {
  return (
    <article className="section container" style={{ maxWidth: 820 }}>
      <span className="eyebrow">Legal</span>
      <h1>Política de cookies</h1>
      <p>
        Um cookie é um pequeno ficheiro guardado no seu dispositivo. A{" "}
        {site.name} utiliza apenas cookies de 1.ª parte (próprios), sem partilha
        com terceiros para publicidade.
      </p>

      <h2 className="mt-3">Categorias</h2>
      <ul style={{ color: "var(--muted)", lineHeight: 2 }}>
        <li>
          <strong style={{ color: "var(--text)" }}>Necessários</strong> —
          essenciais ao funcionamento do site. Sempre ativos.
        </li>
        <li>
          <strong style={{ color: "var(--text)" }}>Análise</strong> —
          ajudam-nos a perceber como o site é utilizado. Opcionais.
        </li>
        <li>
          <strong style={{ color: "var(--text)" }}>Marketing</strong> —
          permitem mostrar conteúdo relevante. Opcionais.
        </li>
      </ul>

      <h2 className="mt-3">Como gerir</h2>
      <p>
        Quando visita o site pela primeira vez, mostramos um banner com as
        opções <em>Aceitar tudo</em>, <em>Recusar opcionais</em> e{" "}
        <em>Personalizar</em>. A sua escolha é guardada num cookie próprio
        durante 12 meses. Pode limpar os cookies no seu navegador a qualquer
        momento para voltar a ver o banner.
      </p>
    </article>
  );
}
