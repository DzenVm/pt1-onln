import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jogo responsável",
  description:
    "Ferramentas, sinais de alerta e contactos de apoio para jogar de forma responsável em Portugal.",
};

export default function JogoResponsavel() {
  return (
    <article className="section container" style={{ maxWidth: 820 }}>
      <span className="eyebrow">Apoio</span>
      <h1>Jogo responsável</h1>
      <p className="lead">
        Na {site.name} acreditamos que o jogo só faz sentido enquanto for
        entretenimento. Esta página reúne boas práticas e contactos de ajuda.
      </p>

      <h2 className="mt-3">Regras simples para manter o controlo</h2>
      <ul style={{ color: "var(--muted)", lineHeight: 2 }}>
        <li>Defina um orçamento mensal e nunca o ultrapasse.</li>
        <li>Estabeleça limites de tempo antes de começar a jogar.</li>
        <li>Não jogue para tentar recuperar dinheiro perdido.</li>
        <li>Não jogue sob o efeito de álcool ou em momentos de stress.</li>
        <li>Use as ferramentas de autoexclusão e limites do operador.</li>
      </ul>

      <h2 className="mt-3">Sinais de alerta</h2>
      <p>
        Jogar mais do que pode pagar, mentir sobre o tempo ou o dinheiro
        gastos, descurar trabalho, estudos ou relações — são sinais de que o
        jogo pode estar a tornar-se um problema.
      </p>

      <div className="card mt-3" style={{ borderColor: "var(--danger)" }}>
        <h2 style={{ fontSize: "1.3rem" }}>Precisa de ajuda?</h2>
        <p>
          O apoio é gratuito e confidencial. Em Portugal pode contactar:
        </p>
        <ul style={{ color: "var(--text)", lineHeight: 2, fontWeight: 600 }}>
          <li>SOS Jogo (SICAD): 213 950 911</li>
          <li>SNS 24: 808 24 24 24</li>
          <li>Portal do jogo responsável: jogoresponsavel.pt</li>
        </ul>
        <p className="mt-2">
          Pode também pedir a autoexclusão no portal do SRIJ, válida para todos
          os operadores licenciados em Portugal.
        </p>
      </div>

      <p className="disclaimer mt-3">
        O jogo a dinheiro está reservado a maiores de 18 anos e pode causar
        dependência. Jogue com responsabilidade.
      </p>
    </article>
  );
}
