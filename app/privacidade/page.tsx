import type { Metadata } from "next";
import Sheet from "@/components/Sheet";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a Sortuga trata os seus dados pessoais.",
};

export default function Privacidade() {
  return (
    <Sheet
      kicker="Legal"
      title="Política de privacidade"
      intro="Esta política explica como tratamos dados quando visita o site, em conformidade com o RGPD."
      pills={["RGPD", "Cookies próprios"]}
    >
      <h2>Que dados recolhemos</h2>
      <p>
        Recolhemos apenas dados técnicos mínimos (estatísticas de visita
        agregadas) e, com o seu consentimento, dados de análise. Não pedimos
        nome, morada nem dados de pagamento.
      </p>
      <h2>Cookies</h2>
      <p>
        Utilizamos cookies próprios. Pode gerir as preferências a qualquer
        momento através do banner de cookies. Saiba mais na{" "}
        <a href="/cookies">política de cookies</a>.
      </p>
      <h2>Os seus direitos</h2>
      <p>
        Pode solicitar acesso, retificação ou eliminação dos seus dados
        escrevendo para <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </Sheet>
  );
}
