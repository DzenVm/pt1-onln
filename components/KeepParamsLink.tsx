"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

/**
 * KeepParamsLink — encaminha a query-string atual (UTM/gclid/…) para um
 * caminho interno FIXO, de forma segura para o Google Ads.
 *
 * Salvaguardas:
 *  - O destino é SEMPRE o `href` interno fixo passado pelo nosso código.
 *    Nunca lemos o destino de um parâmetro do URL (sem open redirect).
 *  - Só reencaminhamos uma allowlist de parâmetros de marketing, reserializados
 *    com URLSearchParams (corretamente codificados). Os valores vão apenas para
 *    o atributo `href`; nunca são escritos no DOM como texto (sem reflexão XSS).
 *  - Same-origin e conteúdo idêntico independentemente dos parâmetros (sem cloaking).
 *  - A leitura da search é feita via useSyncExternalStore com snapshot de
 *    servidor vazio, para que as páginas continuem estáticas (não usamos
 *    useSearchParams, que tornaria a rota dinâmica).
 */

// Apenas parâmetros de campanha conhecidos são reencaminhados.
const ALLOWED = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gbraid",
  "wbraid",
  "gad_source",
  "gad_campaignid",
  "fbclid",
  "msclkid",
  "ttclid",
];

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getSnapshot() {
  return window.location.search;
}

// No servidor (e na hidratação inicial) não há parâmetros → href estático.
function getServerSnapshot() {
  return "";
}

function buildQuery(search: string): string {
  if (!search) return "";
  let incoming: URLSearchParams;
  try {
    incoming = new URLSearchParams(search);
  } catch {
    return "";
  }
  const out = new URLSearchParams();
  for (const key of ALLOWED) {
    const value = incoming.get(key);
    if (value) out.set(key, value);
  }
  const qs = out.toString();
  return qs ? `?${qs}` : "";
}

type Props = {
  /** Caminho interno FIXO (tem de começar por "/"). */
  href: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export default function KeepParamsLink({ href, children, ...rest }: Props) {
  const search = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Garantia extra: só permitimos caminhos internos. Qualquer outra coisa
  // (ex.: "http://", "//evil.com") é normalizada para a raiz.
  const safePath = href.startsWith("/") && !href.startsWith("//") ? href : "/";
  // O href fixo nunca traz query no nosso uso; se trouxer, não duplicamos "?".
  const finalHref = safePath.includes("?")
    ? safePath
    : safePath + buildQuery(search);

  return (
    <Link href={finalHref} {...rest}>
      {children}
    </Link>
  );
}
