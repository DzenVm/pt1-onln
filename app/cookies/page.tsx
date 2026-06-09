import type { Metadata } from "next";
import Sheet from "@/components/Sheet";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Que cookies a Sortuga utiliza e como controlá-los.",
};

export default function Cookies() {
  return (
    <Sheet
      kicker="Legal"
      title="Política de cookies"
      intro="Um cookie é um pequeno ficheiro guardado no seu dispositivo. Usamos apenas cookies de 1.ª parte, sem partilha com terceiros para publicidade."
      pills={["1.ª parte", "12 meses", "Revogável"]}
    >
      <h2>Categorias</h2>
      <ul>
        <li>
          <strong>Necessários</strong> — essenciais ao funcionamento do site.
          Sempre ativos.
        </li>
        <li>
          <strong>Análise</strong> — ajudam-nos a perceber como o site é
          utilizado. Opcionais.
        </li>
        <li>
          <strong>Marketing</strong> — permitem mostrar conteúdo relevante.
          Opcionais.
        </li>
      </ul>
      <h2>Como gerir</h2>
      <p>
        Na primeira visita mostramos um banner com as opções <em>Aceitar tudo</em>,{" "}
        <em>Recusar opcionais</em> e <em>Personalizar</em>. A escolha é guardada
        num cookie próprio ({site.name}) durante 12 meses. Pode limpar os cookies
        no navegador a qualquer momento para voltar a ver o banner.
      </p>
    </Sheet>
  );
}
