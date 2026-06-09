# Sortuga — guia de casinos online (SSR)

Site SSR construído em **Next.js 16 (App Router)** e **React 19**, pronto para
deploy na **Vercel**. Guia informativo e independente de casinos online em
Portugal, com foco em transparência e jogo responsável.

## Características

- **SSR / Server Components** por omissão (App Router).
- **Tema escuro "casino"** (preto/ouro/verde-felt) com hero animado (shimmer),
  partículas flutuantes, cartões de vantagens, checklist em colunas, acordeão de
  FAQ, mosaico de hábitos e rodapé com faixa `18+ | SRIJ | ICAD`.
- **Tudo local, sem CDN**: tipografia do sistema, ícones e ilustrações em **SVG
  inline**, estilos em CSS próprio (`app/globals.css`). Nenhum recurso externo
  é carregado. Prefixos de classe próprios (`lz-` / `lzx-`).
- **Banner de cookies com botões**: `Aceitar tudo`, `Recusar opcionais` e
  `Personalizar` (preferências de Análise/Marketing). O consentimento é guardado
  num cookie próprio de 1.ª parte + `localStorage`
  (`components/CookieConsent.tsx`).
- Páginas: início, avaliação (baralho de casinos), jogo responsável, sobre,
  contacto, termos, privacidade, cookies, 404.
- SEO: `metadata`, `sitemap.ts`, `robots.ts`, idioma `pt-PT`.
- 18+ e mensagens de jogo responsável em todo o site (relevante para a
  certificação de jogo do Google Ads).

## Estrutura

```
app/
  layout.tsx          # layout raiz, partículas, footer, cookie banner
  page.tsx            # home (hero, vantagens, checklist, FAQ, hábitos)
  globals.css         # tema escuro, estilos locais (sem CDN)
  avaliacao/          # baralho de avaliação de casinos
  jogo-responsavel/ sobre/ contacto/ termos/ privacidade/ cookies/
  ir/[id]/route.ts    # rota de saída para o operador
  sitemap.ts robots.ts not-found.tsx
components/
  Footer.tsx          # rodapé com faixa 18+ | SRIJ | ICAD
  CookieConsent.tsx   # banner de cookies (client component)
  HeroArt.tsx         # ilustração SVG inline do hero
  FeatureIcon.tsx Sheet.tsx
lib/
  site.ts casinos.ts  # configuração, conteúdo e dados (marcas fictícias)
```

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # servir build
```

## Deploy na Vercel

1. Importe o repositório na Vercel.
2. Framework detetado automaticamente: **Next.js** (sem configuração extra).
3. Deploy. Não são necessárias variáveis de ambiente.

> As marcas de casino e os bónus são **ilustrativos**. Substitua os dados em
> `lib/casinos.ts` e os links de afiliado em `app/ir/[id]/route.ts` pelos reais
> antes de publicar.
