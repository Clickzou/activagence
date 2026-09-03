import { AGENCE, SITE, ZONE_INTERVENTION } from "@/data/agence";
import { absoluteUrl } from "@/lib/seo";

/**
 * JSON-LD — SEO_MASTER_ACTIVAGENCE §4.
 *
 * L'ancien site ne declarait qu'un `Organization` sans adresse : le balisage
 * qui compte pour une activite locale (`LocalBusiness` / `ProfessionalService`)
 * etait entierement absent. C'est ce fichier qui le corrige.
 *
 * Regle stricte : aucun `aggregateRating` tant qu'aucun avis reel n'existe.
 * Une note inventee est une donnee structuree trompeuse, sanctionnable.
 */

const ID_AGENCE = `${SITE.url}/#agence`;
const ID_SITE = `${SITE.url}/#website`;

export function agenceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": ID_AGENCE,
    name: AGENCE.nom,
    alternateName: AGENCE.nomComplet,
    description:
      "Agence de détectives privés à Toulouse. Enquêtes pour particuliers et entreprises, filatures, recherche de preuve recevable en justice.",
    url: `${SITE.url}/`,
    telephone: AGENCE.telephoneE164,
    email: AGENCE.email,
    image: `${SITE.url}/images/agence-detective-prive-toulouse.webp`,
    logo: `${SITE.url}/images/logo-activ-agence.png`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${AGENCE.adresse.rue}, ${AGENCE.adresse.complement}`,
      postalCode: AGENCE.adresse.codePostal,
      addressLocality: AGENCE.adresse.ville,
      addressRegion: "Occitanie",
      addressCountry: AGENCE.adresse.pays,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: AGENCE.geo.latitude,
      longitude: AGENCE.geo.longitude,
    },
    openingHoursSpecification: AGENCE.horaires.schema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.jours,
      opens: h.ouverture,
      closes: h.fermeture,
    })),
    areaServed: [
      { "@type": "City", name: ZONE_INTERVENTION.principale },
      ...ZONE_INTERVENTION.agglomeration.map((v) => ({ "@type": "City", name: v })),
      ...ZONE_INTERVENTION.region.map((r) => ({
        "@type": "AdministrativeArea",
        name: r,
      })),
    ],
    // Autorisations CNAPS : signal E-E-A-T central dans un secteur reglemente.
    hasCredential: AGENCE.cnaps.map((numero) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Autorisation CNAPS",
      identifier: numero,
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "CNAPS — Conseil national des activités privées de sécurité",
        url: "https://www.cnaps.interieur.gouv.fr/",
      },
    })),
    knowsLanguage: "fr-FR",
    ...(AGENCE.sameAs.length > 0 ? { sameAs: AGENCE.sameAs } : {}),
  };
}

export function siteSchema() {
  return {
    "@type": "WebSite",
    "@id": ID_SITE,
    url: `${SITE.url}/`,
    name: SITE.nom,
    inLanguage: SITE.langue,
    publisher: { "@id": ID_AGENCE },
  };
}

export interface FilAriane {
  nom: string;
  path: string;
}

export function filArianeSchema(items: FilAriane[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${SITE.url}/`,
      },
      ...items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: it.nom,
        item: absoluteUrl(it.path),
      })),
    ],
  };
}

export interface QuestionReponse {
  question: string;
  reponse: string;
}

/** Retire la syntaxe de liens et de gras : les donnees structurees veulent du texte nu. */
function texteNu(v: string): string {
  return v
    .replace(/\[([^\]]+)\]\((?:https?:\/\/[^\s)]+|\/[^\s)]*)\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1");
}

export function faqSchema(items: QuestionReponse[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: texteNu(q.reponse) },
    })),
  };
}

export function serviceSchema(input: {
  nom: string;
  description: string;
  path: string;
  /**
   * Prix d'entree par prestation. Un prix balise est repris tel quel par les
   * moteurs et par les reponses generatives : il ne se declare que s'il
   * correspond a une prestation reellement disponible a ce tarif.
   */
  offres?: { nom: string; prixMini: number; unite: string }[];
}) {
  return {
    "@type": "Service",
    name: input.nom,
    description: input.description,
    url: absoluteUrl(input.path),
    serviceType: "Enquête privée",
    provider: { "@id": ID_AGENCE },
    areaServed: { "@type": "City", name: ZONE_INTERVENTION.principale },
    ...(input.offres?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Prestations d'enquête privée",
            itemListElement: input.offres.map((o) => ({
              "@type": "Offer",
              name: o.nom,
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: o.prixMini,
                priceCurrency: "EUR",
                valueAddedTaxIncluded: true,
                unitText: o.unite,
              },
              availability: "https://schema.org/InStock",
            })),
          },
        }
      : {}),
  };
}

/** Assemble un @graph complet et le rend injectable dans un <script>. */
export function grapheJsonLd(...noeuds: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": noeuds,
  };
}
