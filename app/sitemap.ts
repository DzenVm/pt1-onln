import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, priority: 1 },
    { url: `${base}/jogo-responsavel`, lastModified: now, priority: 0.8 },
    { url: `${base}/sobre`, lastModified: now, priority: 0.5 },
    { url: `${base}/privacidade`, lastModified: now, priority: 0.3 },
    { url: `${base}/cookies`, lastModified: now, priority: 0.3 },
  ];
}
