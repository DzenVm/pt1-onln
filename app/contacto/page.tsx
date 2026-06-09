import type { Metadata } from "next";
import Sheet from "@/components/Sheet";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Como falar com a equipa da ${site.name}.`,
  alternates: { canonical: "/contacto" },
};

export default function Contacto() {
  return (
    <Sheet
      kicker="Fale connosco"
      title="Contacto"
      intro="Dúvidas editoriais, correções ou sugestões de conteúdo? Respondemos por email."
      pills={["Resposta por email", "Sem aconselhamento de jogo"]}
    >
      <h2>Email</h2>
      <p>
        Escreva para <a href={`mailto:${site.email}`}>{site.email}</a>. Trate
        assuntos editoriais e pedidos de correção; não prestamos apoio a contas
        de operadores nem a pagamentos.
      </p>
      <h2>Precisa de ajuda com o jogo?</h2>
      <p>
        Se o jogo deixou de ser controlável, contacte a linha SOS Jogo (SICAD)
        através do <strong>213 950 911</strong> ou o SNS 24 pelo{" "}
        <strong>808 24 24 24</strong>. O apoio é gratuito e confidencial.
      </p>
    </Sheet>
  );
}
