import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a Sortuga trata os seus dados pessoais.",
};

export default function Privacidade() {
  return (
    <article className="section container" style={{ maxWidth: 820 }}>
      <span className="eyebrow">Legal</span>
      <h1>Política de privacidade</h1>
      <p>
        Esta política explica como a {site.name} recolhe e trata dados quando
        visita o nosso site, em conformidade com o RGPD.
      </p>

      <h2 className="mt-3">Que dados recolhemos</h2>
      <p>
        Recolhemos apenas dados técnicos mínimos (como estatísticas de visita
        agregadas) e, com o seu consentimento, dados de análise. Não pedimos
        nome, morada nem dados de pagamento.
      </p>

      <h2 className="mt-3">Cookies</h2>
      <p>
        Utilizamos cookies próprios. Pode gerir as suas preferências a qualquer
        momento através do banner de cookies. Saiba mais na{" "}
        <a href="/cookies" style={{ color: "var(--brand-2)" }}>
          política de cookies
        </a>
        .
      </p>

      <h2 className="mt-3">Os seus direitos</h2>
      <p>
        Pode solicitar acesso, retificação ou eliminação dos seus dados
        escrevendo para{" "}
        <a href={`mailto:${site.email}`} style={{ color: "var(--brand-2)" }}>
          {site.email}
        </a>
        .
      </p>
    </article>
  );
}
