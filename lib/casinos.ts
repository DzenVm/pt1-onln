// Dados ilustrativos de operadores. Marcas fictícias criadas para o guia.
export type Casino = {
  id: string;
  name: string;
  rating: number; // 0–5
  bonus: string;
  bonusNote: string;
  features: string[];
  payout: string;
  established: number;
  accent: string; // cor de marca para o "logo" gerado localmente
};

export const casinos: Casino[] = [
  {
    id: "lumora",
    name: "Lumora Casino",
    rating: 4.9,
    bonus: "100% até 200€",
    bonusNote: "+ 50 rodadas grátis",
    features: ["Licença nacional", "Saques rápidos", "App móvel"],
    payout: "1–2 dias",
    established: 2021,
    accent: "#7c5cff",
  },
  {
    id: "vela-dourada",
    name: "Vela Dourada",
    rating: 4.7,
    bonus: "Até 150€",
    bonusNote: "sem requisito de aposta no 1.º depósito",
    features: ["Mesas ao vivo", "Suporte 24/7", "MB WAY"],
    payout: "24 horas",
    established: 2019,
    accent: "#e8b04b",
  },
  {
    id: "atlantica",
    name: "Atlântica Play",
    rating: 4.6,
    bonus: "120% até 250€",
    bonusNote: "+ programa VIP",
    features: ["+2000 slots", "Torneios semanais", "Cashback"],
    payout: "1–3 dias",
    established: 2020,
    accent: "#2bb6a3",
  },
  {
    id: "fado",
    name: "Fado Bet",
    rating: 4.4,
    bonus: "Até 100€",
    bonusNote: "+ 20 rodadas no registo",
    features: ["Roleta ao vivo", "Multibanco", "Sem comissões"],
    payout: "2 dias",
    established: 2018,
    accent: "#ff6b6b",
  },
  {
    id: "marola",
    name: "Marola Casino",
    rating: 4.2,
    bonus: "75% até 150€",
    bonusNote: "+ missões diárias",
    features: ["Crash games", "Pagamentos instantâneos", "Modo demo"],
    payout: "Até 24 horas",
    established: 2022,
    accent: "#4d8dff",
  },
];

export const gameTypes = [
  {
    id: "slots",
    title: "Slots",
    text: "Milhares de máquinas com jackpots, megaways e funções bónus.",
  },
  {
    id: "roleta",
    title: "Roleta",
    text: "Versões europeia, francesa e americana, também em mesa ao vivo.",
  },
  {
    id: "blackjack",
    title: "Blackjack",
    text: "Variantes clássicas e ao vivo com croupiers reais a transmitir.",
  },
  {
    id: "ao-vivo",
    title: "Casino ao vivo",
    text: "Game shows e mesas transmitidas em direto em português.",
  },
];

export const payments = [
  "MB WAY",
  "Multibanco",
  "Visa",
  "Mastercard",
  "Transferência bancária",
  "Paysafecard",
];

export const criteria = [
  {
    title: "Licença e segurança",
    text: "Verificamos a licença do SRIJ e os protocolos de proteção de dados de cada operador.",
  },
  {
    title: "Bónus justos",
    text: "Lemos os termos completos e destacamos requisitos de aposta e prazos pouco claros.",
  },
  {
    title: "Velocidade de pagamento",
    text: "Testamos depósitos e levantamentos reais para medir o tempo até receber o dinheiro.",
  },
  {
    title: "Experiência móvel",
    text: "Avaliamos a app e o site em telemóvel: rapidez, estabilidade e facilidade de uso.",
  },
];

export const faq = [
  {
    q: "Os casinos listados são legais em Portugal?",
    a: "Apenas destacamos operadores que afirmam possuir licença do SRIJ. Confirme sempre a licença no site oficial do operador antes de jogar.",
  },
  {
    q: "A Sortuga aceita depósitos ou gere contas?",
    a: "Não. A Sortuga é um guia informativo independente. Todo o registo, depósito e jogo acontece diretamente no site do operador.",
  },
  {
    q: "Como avaliam os casinos?",
    a: "Usamos quatro critérios: licença e segurança, justiça dos bónus, velocidade de pagamento e experiência móvel. A pontuação resulta da combinação destes fatores.",
  },
  {
    q: "Posso jogar a partir do telemóvel?",
    a: "Sim. Todos os operadores em destaque oferecem site otimizado para telemóvel e, em muitos casos, aplicação dedicada.",
  },
  {
    q: "É preciso ter mais de 18 anos?",
    a: "Sim. O jogo a dinheiro é estritamente reservado a maiores de 18 anos. A Sortuga não se destina a menores.",
  },
];
