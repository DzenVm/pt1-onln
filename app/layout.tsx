import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

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
  robots: { index: true, follow: true },
  category: "reference",
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
      </body>
    </html>
  );
}
