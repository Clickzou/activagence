import type { Metadata } from "next";
import { Source_Sans_3, Spectral } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { agenceSchema, grapheJsonLd, siteSchema } from "@/lib/schema";
import { SITE } from "@/data/agence";

// Fonts auto-hebergees par Next : aucune requete vers fonts.googleapis.com au runtime.
const display = Spectral({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Détective privé à Toulouse — Activ'Agence, agréée CNAPS",
    template: "%s",
  },
  description:
    "Agence de détectives privés à Toulouse depuis 30 ans. Enquêtes pour particuliers et entreprises, filatures, rapports recevables en justice.",
  icons: { icon: "/favicon-activ-agence.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Graphe global : l'entite (ProfessionalService) et le site sont declares une seule
  // fois, dans le layout. Les pages n'ajoutent que leur Service / FAQPage / fil d'Ariane.
  const graphe = grapheJsonLd(agenceSchema(), siteSchema());

  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <JsonLd data={graphe} />
      </body>
    </html>
  );
}
