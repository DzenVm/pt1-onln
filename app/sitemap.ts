import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { operators } from "@/lib/casinos";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const now = new Date();
  const paths: [string, number][] = [
    ["/", 1],
    ["/avaliacao", 0.9],
    // Páginas de transição: declaradas para que o caminho
    // anúncio → /avaliacao → /ponte/[slug] → operador seja totalmente
    // visível ao crawler em cada passo.
    ...operators.map((o) => [`/ponte/${o.slug}`, 0.7] as [string, number]),
    ["/jogo-responsavel", 0.8],
    ["/sobre", 0.5],
    ["/contacto", 0.5],
    ["/termos", 0.3],
    ["/privacidade", 0.3],
    ["/cookies", 0.3],
  ];
  return paths.map(([path, priority]) => ({
    url: `${base}${path}`,
    lastModified: now,
    priority,
  }));
}
