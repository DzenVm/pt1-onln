// Configuração central do site Sortuga.
// Todos os textos foram redigidos de forma original para este projeto.

export const site = {
  name: "Sortuga",
  tagline: "Guia independente de casinos online em Portugal",
  domain: "sortuga.pt",
  email: "ola@sortuga.pt",
  description:
    "A Sortuga compara casinos online licenciados em Portugal, explica bónus, " +
    "métodos de pagamento e jogo responsável de forma clara e honesta.",
  legalAge: 18,
} as const;

export const nav = [
  { href: "/#casinos", label: "Casinos" },
  { href: "/#bonus", label: "Bónus" },
  { href: "/#jogos", label: "Jogos" },
  { href: "/#pagamentos", label: "Pagamentos" },
  { href: "/#faq", label: "FAQ" },
  { href: "/jogo-responsavel", label: "Jogo responsável" },
] as const;
