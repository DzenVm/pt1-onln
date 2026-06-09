import type { Metadata } from "next";
import Sheet from "@/components/Sheet";
import { site, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de utilização",
  description: "Condições de uso do site Sortuga.",
};

export default function Termos() {
  return (
    <Sheet
      kicker="Legal"
      title="Termos de utilização"
      intro="Ao navegar neste site, aceita as condições descritas abaixo."
      pills={["Conteúdo informativo", "Apenas 18+"]}
    >
      <h2>Natureza do serviço</h2>
      <p>
        A {site.name} disponibiliza conteúdo informativo e comparativo sobre
        casinos online. Não somos um operador de jogo, não aceitamos apostas e
        não processamos pagamentos.
      </p>
      <h2>Idade mínima</h2>
      <p>
        O conteúdo destina-se exclusivamente a maiores de 18 anos. O jogo a
        dinheiro pode causar dependência.
      </p>
      <h2>Ligações de afiliação</h2>
      <p>
        Algumas ligações para operadores podem gerar comissões. Isto não tem
        custo para o utilizador e não influencia a nossa avaliação editorial.
      </p>
      <h2>Limitação de responsabilidade</h2>
      <p>
        Esforçamo-nos por manter a informação atualizada, mas as condições dos
        operadores mudam. Verifique sempre os termos no site oficial antes de se
        registar ou depositar.
      </p>

      <h2>Informação legal da empresa</h2>
      <ul>
        <li>
          <strong>Denominação:</strong> {company.fullName}
        </li>
        <li>
          <strong>Registo:</strong> {company.register}
        </li>
        <li>
          <strong>KRS:</strong> {company.krs}
        </li>
        <li>
          <strong>NIP:</strong> {company.nip}
        </li>
        <li>
          <strong>REGON:</strong> {company.regon}
        </li>
        <li>
          <strong>Sede:</strong> {company.address}
        </li>
      </ul>
    </Sheet>
  );
}
