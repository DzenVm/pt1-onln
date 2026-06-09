import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre nós",
  description: `Quem somos e como funciona a ${site.name}.`,
};

export default function Sobre() {
  return (
    <article className="section container" style={{ maxWidth: 820 }}>
      <span className="eyebrow">Quem somos</span>
      <h1>Sobre a {site.name}</h1>
      <p className="lead">
        Somos um guia independente que ajuda jogadores em Portugal a comparar
        casinos online de forma clara, honesta e segura.
      </p>

      <h2 className="mt-3">Independência editorial</h2>
      <p>
        As nossas análises seguem sempre a mesma metodologia. Podemos receber
        comissões de afiliação quando um utilizador se regista através de um
        link, mas isso nunca altera a pontuação nem a ordem das recomendações.
      </p>

      <h2 className="mt-3">O que não fazemos</h2>
      <p>
        A {site.name} não opera jogos, não aceita depósitos e não gere contas de
        jogador. Todo o processo de registo e jogo acontece no site do operador
        licenciado.
      </p>

      <h2 className="mt-3">Contacto</h2>
      <p>
        Questões ou sugestões? Escreva para{" "}
        <a href={`mailto:${site.email}`} style={{ color: "var(--brand-2)" }}>
          {site.email}
        </a>
        .
      </p>
    </article>
  );
}
