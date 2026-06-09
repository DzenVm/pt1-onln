// Dados e conteúdo editorial do guia. Texto original, redigido para este site.

export type Operator = {
  slug: string;
  name: string;
  url: string; // site oficial do operador (domínio .pt licenciado)
  rating: number;
  bonus: string;
  bonusNote: string;
  payout: string;
  methods: string;
  games: string;
  license: string;
  since: string;
  accent: string;
};

// Operadores reais com licença do SRIJ para Portugal.
// Nota: não publicamos valores promocionais fixos — as campanhas mudam com
// frequência e têm termos próprios. Confirme sempre a oferta no site oficial.
export const operators: Operator[] = [
  {
    slug: "888",
    name: "888 Casino",
    url: "https://www.888.pt/",
    rating: 4.7,
    bonus: "Oferta de boas-vindas para novos registos",
    bonusNote:
      "Valor e condições definidos no site oficial e sujeitos a rollover e verificação.",
    payout: "Geralmente 1–3 dias úteis",
    methods: "MB Way · Multibanco · Visa · Mastercard",
    games: "Slots, roleta, blackjack e casino ao vivo",
    license: "Licença SRIJ (domínio 888.pt)",
    since: "desde 2016",
    accent: "#2d9f78",
  },
  {
    slug: "betano",
    name: "Betano",
    url: "https://www.betano.pt/",
    rating: 4.6,
    bonus: "Promoção de registo de casino",
    bonusNote:
      "Consulte o valor atual e os termos completos no site oficial antes de aceitar.",
    payout: "Geralmente 24–48 horas",
    methods: "MB Way · Multibanco · Transferência bancária",
    games: "Casino, slots e live (também desporto na mesma marca)",
    license: "Licença SRIJ (domínio betano.pt)",
    since: "desde 2017",
    accent: "#c9a44c",
  },
];

export function getOperator(slug: string) {
  return operators.find((o) => o.slug === slug);
}

export const features = [
  {
    title: "Licença consultável",
    text:
      "Antes de carregar saldo, confronte a designação social do operador com o " +
      "registo público do SRIJ. Quem trabalha dentro da lei não esconde a referência da licença.",
    icon: "shield",
  },
  {
    title: "Fundos e dados resguardados",
    text:
      "Contas segregadas, RGPD e auditorias externas integram o pacote regulado — " +
      "ainda assim, nunca revele PIN ou códigos de confirmação a terceiros.",
    icon: "lock",
  },
  {
    title: "Limites ao seu alcance",
    text:
      "Pausas, tetos de depósito e autoexclusão são direitos previstos. Localize estas " +
      "opções na área de conta antes de subir o valor das apostas.",
    icon: "clock",
  },
  {
    title: "Termos em português claro",
    text:
      "Bónus, rollover e exceções de pagamento têm de estar escritos de forma " +
      "compreensível. Se algo soar ambíguo, peça esclarecimento ao apoio antes de aceitar.",
    icon: "doc",
  },
];

export const checklist = [
  {
    head: "Enquadramento do SRIJ.",
    body:
      "O Serviço de Regulação e Inspeção de Jogos define quem pode angariar jogadores em " +
      "Portugal. Comparar o nome da sociedade com a lista oficial do regulador é o primeiro filtro.",
  },
  {
    head: "Experiência verdadeiramente local.",
    body:
      "Operadores virados para o mercado nacional costumam apresentar euros, interface em " +
      "português europeu e, muitas vezes, MB Way ou Multibanco — confirme na caixa de depósito.",
  },
  {
    head: "Campanhas e o que vem em letra miúda.",
    body:
      "Percentagens vistosas escondem prazos curtos, jogos excluídos e tetos de aposta durante o " +
      "rollover. Guardar o PDF dos termos evita dúvidas mais tarde.",
  },
  {
    head: "Slots, mesas e direto.",
    body:
      "Os catálogos variam com as licenças dos fornecedores. O RTP divulgado é um indicador " +
      "estatístico, não uma promessa de retorno; no casino ao vivo o ritmo e os mínimos são outros.",
  },
  {
    head: "Levantar os ganhos.",
    body:
      "Verificação de identidade, histórico de jogo responsável e banco de destino influenciam os " +
      "prazos. Use sempre dados reais no registo para não bloquear o primeiro levantamento.",
  },
  {
    head: "Fora do mapa legal.",
    body:
      "Ofertas com criptomoedas agressivas ou licenças opacas correm o risco de ficar sem rede de " +
      "proteção nacional. Este guia foca-se no que é transparente perante a lei portuguesa.",
  },
];

export const faq = [
  {
    q: "Afinal, o que é um casino «legal» em Portugal?",
    a:
      "É um operador de casino à distância com autorização válida do SRIJ para o público " +
      "português. Confirme sempre no portal do regulador e no domínio oficial antes de partilhar " +
      "documentos. Fora deste circuito, a proteção do consumidor é muito mais frágil.",
  },
  {
    q: "Slots, mesas automáticas e live: o que muda na prática?",
    a:
      "As slots e o RNG seguem tabelas de pagamento fixas no software; o live casino filma " +
      "crupiês reais, com ritmo mais lento e apostas mínimas diferentes. Em qualquer variante o " +
      "resultado é aleatório — não existe fórmula infalível. O RTP é uma média teórica de longo prazo.",
  },
  {
    q: "Bónus, giros e rollover: onde está a letra miúda?",
    a:
      "Procure a data de validade, os jogos que não contam, a aposta máxima durante o rollover e " +
      "se o método de depósito desqualifica a oferta. Recusar o pacote promocional continua a ser " +
      "uma opção válida se preferir jogar só com saldo real.",
  },
  {
    q: "MB Way, Multibanco e o primeiro levantamento: o que esperar?",
    a:
      "É comum combinar cartão, transferência e soluções locais. O primeiro cash-out pode " +
      "demorar enquanto o operador conclui a verificação de identidade. Nunca envie códigos SMS ou " +
      "dados de cartão a «assistentes» em redes sociais.",
  },
  {
    q: "App ou navegador: as regras mudam?",
    a:
      "Conta, limites de jogo responsável e termos legais aplicam-se da mesma forma. Prefira redes " +
      "privadas e bloqueio de ecrã; Wi-Fi público não é sítio para introduzir dados sensíveis.",
  },
  {
    q: "A mesma marca tem desporto e casino: posso juntar bónus?",
    a:
      "Nem sempre. Saldo partilhado não significa regulamento único: freebets, odds mínimas e " +
      "contribuições para rollover diferem. Abra a secção correta da promoção antes de aceitar.",
  },
  {
    q: "Este site é operador ou processa pagamentos?",
    a:
      "Não. Publicamos análises e ligações; o registo, o depósito e o jogo acontecem apenas no " +
      "site licenciado. Algumas ligações podem ser remuneradas — isso não dispensa ler o contrato " +
      "da marca escolhida.",
  },
  {
    q: "Onde pedir ajuda se sentir perda de controlo?",
    a:
      "Use os limites da conta, fale com o apoio do operador e contacte linhas independentes de " +
      "jogo responsável. O apoio é gratuito e confidencial. Menores de idade não devem jogar.",
  },
];

export const habits = [
  {
    n: "01",
    title: "Orçamento fechado",
    text:
      "Defina um teto em euros antes de entrar no lobby e trate o casino como custo de lazer, " +
      "nunca como fonte de rendimento.",
  },
  {
    n: "02",
    title: "Relógio à vista",
    text:
      "Alarmes de 30 a 45 minutos interrompem maratonas silenciosas à frente do ecrã.",
  },
  {
    n: "03",
    title: "Pausa prolongada",
    text:
      "Se precisar de afastamento longo, siga o fluxo de autoexclusão do operador e informe-se " +
      "junto do SRIJ sobre registos nacionais.",
  },
  {
    n: "04",
    title: "Falar cedo",
    text:
      "Família, médico ou linhas anónimas ajudam quando o jogo ocupa conversas, sono ou contas. " +
      "Peça apoio antes de a situação se agravar.",
  },
];
