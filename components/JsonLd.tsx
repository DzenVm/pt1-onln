// Injeta dados estruturados (schema.org) para rich results / SEO.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // O conteúdo é estático e controlado por nós (sem input do utilizador).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
