import type { Metadata } from "next";
import Sheet from "@/components/Sheet";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jogo responsável",
  description:
    "Boas práticas, sinais de alerta e contactos de apoio para jogar de forma responsável em Portugal.",
  alternates: { canonical: "/jogo-responsavel" },
};

export default function JogoResponsavel() {
  return (
    <Sheet
      kicker="Apoio"
      title="Jogo responsável"
      intro={`Na ${site.name} acreditamos que o jogo só faz sentido enquanto for entretenimento. Esta página reúne boas práticas e contactos de ajuda.`}
      pills={["18+", "SOS Jogo: 213 950 911", "SNS 24: 808 24 24 24"]}
    >
      <h2>Regras simples para manter o controlo</h2>
      <ul>
        <li>Defina um orçamento mensal e nunca o ultrapasse.</li>
        <li>Estabeleça limites de tempo antes de começar a jogar.</li>
        <li>Não jogue para tentar recuperar dinheiro perdido.</li>
        <li>Não jogue sob o efeito de álcool ou em momentos de stress.</li>
        <li>Use as ferramentas de autoexclusão e limites do operador.</li>
      </ul>
      <h2>Sinais de alerta</h2>
      <p>
        Jogar mais do que pode pagar, mentir sobre o tempo ou o dinheiro gastos,
        descurar trabalho, estudos ou relações — são sinais de que o jogo pode
        estar a tornar-se um problema.
      </p>
      <h2>Precisa de ajuda?</h2>
      <p>O apoio é gratuito e confidencial. Em Portugal pode contactar:</p>
      <ul>
        <li>SOS Jogo (SICAD): 213 950 911</li>
        <li>SNS 24: 808 24 24 24</li>
        <li>Autoexclusão e registos no portal do SRIJ</li>
      </ul>
      <p>
        A autoexclusão pedida no portal do SRIJ é válida para todos os
        operadores licenciados em Portugal.
      </p>
    </Sheet>
  );
}
