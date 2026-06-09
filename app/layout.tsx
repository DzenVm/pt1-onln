import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import { organizationLd, websiteLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: "Guia de casino online em Portugal",
    template: `%s · ${site.name}`,
  },
  description:
    "Ajuda a perceber o mercado legal de casino em Portugal (SRIJ): comparar " +
    "campanhas, métodos de pagamento e regras. 18+. Somos media, não operador.",
  keywords: [
    "casino online Portugal",
    "casino licenciado SRIJ",
    "bónus de registo",
    "slots legais",
    "jogo responsável",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: site.name,
    title: "Guia de casino online em Portugal",
    description:
      "Comparar campanhas, métodos de pagamento e regras de casino legal em Portugal. 18+.",
    url: `https://${site.domain}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Guia de casino online em Portugal",
    description:
      "Comparar campanhas, métodos de pagamento e regras de casino legal em Portugal. 18+.",
  },
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "reference",
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#07060b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body>
        <a href="#conteudo" className="lz-skip">
          Saltar para o conteúdo
        </a>
        <div className="lzx-particles" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <main id="conteudo">{children}</main>
        <Footer />
        <CookieConsent />
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
      </body>
    </html>
  );
}
