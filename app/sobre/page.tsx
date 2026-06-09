import type { Metadata } from "next";
import Sheet from "@/components/Sheet";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre nós",
  description: `Quem somos e como funciona a ${site.name}.`,
};

export default function Sobre() {
  return (
    <Sheet
      kicker="Quem somos"
      title={`Sobre a ${site.name}`}
      intro="Somos um guia independente que ajuda jogadores em Portugal a comparar casinos online de forma clara, honesta e segura."
      pills={["Media, não operador", "Foco no mercado SRIJ", "Apenas 18+"]}
    >
      <h2>Independência editorial</h2>
      <p>
        As nossas análises seguem sempre a mesma metodologia. Podemos receber
        comissões de afiliação quando um utilizador se regista através de uma
        ligação, mas isso nunca altera a pontuação nem a ordem das recomendações.
      </p>
      <h2>O que não fazemos</h2>
      <p>
        A {site.name} não opera jogos, não aceita depósitos e não gere contas de
        jogador. Todo o processo de registo e jogo acontece no site do operador
        licenciado.
      </p>
      <h2>Contacto</h2>
      <p>
        Questões ou sugestões? Escreva para <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </Sheet>
  );
}
