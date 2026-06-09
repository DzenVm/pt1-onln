import { site, company } from "./site";
import { faq } from "./casinos";

const base = `https://${site.domain}`;

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: company.fullName,
  url: base,
  email: site.email,
  logo: `${base}/icon.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Przemiarki 23/8",
    addressLocality: "Kraków",
    postalCode: "30-384",
    addressCountry: "PL",
  },
  identifier: [
    { "@type": "PropertyValue", name: "KRS", value: company.krs },
    { "@type": "PropertyValue", name: "NIP", value: company.nip },
    { "@type": "PropertyValue", name: "REGON", value: company.regon },
  ],
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: base,
  inLanguage: "pt-PT",
  description: site.description,
};

export const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${base}${it.path}`,
    })),
  };
}
