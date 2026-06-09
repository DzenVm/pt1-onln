# Sortuga — guia de casinos online (SSR)

Site SSR construído em **Next.js 16 (App Router)** e **React 19**, pronto para
deploy na **Vercel**. Guia informativo e independente de casinos online em
Portugal, com foco em transparência e jogo responsável.

## Características

- **SSR / Server Components** por omissão (App Router).
- **Tudo local, sem CDN**: tipografia do sistema, ícones/logótipo em SVG inline
  e estilos em CSS próprio (`app/globals.css`). Nenhum recurso externo é
  carregado.
- **Banner de cookies com botões**: `Aceitar tudo`, `Recusar opcionais` e
  `Personalizar` (com preferências de Análise/Marketing). O consentimento é
  guardado num cookie próprio de 1.ª parte + `localStorage`
  (`components/CookieConsent.tsx`).
- Páginas: início, jogo responsável, sobre, privacidade, cookies, 404.
- SEO: `metadata`, `sitemap.ts`, `robots.ts`, idioma `pt-PT`.
- 18+ e mensagens de jogo responsável em todo o site (relevante para a
  certificação de jogo do Google Ads).

## Estrutura

```
app/
  layout.tsx          # layout raiz, metadata, header/footer/cookie
  page.tsx            # página inicial (hero, ranking, bónus, jogos, FAQ...)
  globals.css         # estilos locais (sem CDN)
  jogo-responsavel/   # página de jogo responsável
  sobre/ privacidade/ cookies/
  ir/[id]/route.ts    # rota de saída para o operador
  sitemap.ts robots.ts not-found.tsx
components/
  Header.tsx Footer.tsx Logo.tsx
  CookieConsent.tsx   # banner de cookies (client component)
  CasinoCard.tsx
lib/
  site.ts casinos.ts  # configuração e dados (marcas fictícias)
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
