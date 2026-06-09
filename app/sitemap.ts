import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const now = new Date();
  const paths = [
    ["/", 1],
    ["/avaliacao", 0.9],
    ["/jogo-responsavel", 0.8],
    ["/sobre", 0.5],
    ["/contacto", 0.5],
    ["/termos", 0.3],
    ["/privacidade", 0.3],
    ["/cookies", 0.3],
  ] as const;
  return paths.map(([path, priority]) => ({
    url: `${base}${path}`,
    lastModified: now,
    priority,
  }));
}
