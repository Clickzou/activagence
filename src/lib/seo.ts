import type { Metadata } from "next";
import { SITE } from "@/data/agence";

/**
 * Helper de metadonnees — applique les regles SEO_MASTER_ACTIVAGENCE §4 :
 *  - canonical auto-referent avec trailing slash
 *  - title <= 60 caracteres, description <= 155
 *  - og:image dediee 1200x630 (l'ancien site servait le favicon)
 */

export const OG_IMAGE = {
  url: `${SITE.url}/images/og-activagence.jpg`,
  width: 1200,
  height: 630,
  alt: "Activ'Agence — agence de détectives privés à Toulouse",
};

/** Construit une URL absolue avec trailing slash. */
export function absoluteUrl(path: string): string {
  if (path === "/" || path === "") return `${SITE.url}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${clean.endsWith("/") ? clean : `${clean}/`}`;
}

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  image?: string;
}

export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
  image,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ? { ...OG_IMAGE, url: `${SITE.url}${image}` } : OG_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.nom,
      title,
      description,
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

/**
 * Controle de longueur en developpement. Le prebuild (scripts/check-seo.mjs)
 * fait le meme controle et bloque le build en cas de depassement.
 */
export function assertMetaLengths(title: string, description: string, path: string) {
  if (process.env.NODE_ENV !== "production") {
    if (title.length > 60) {
      console.warn(`[SEO] title trop long (${title.length}/60) sur ${path} : ${title}`);
    }
    if (description.length > 155) {
      console.warn(
        `[SEO] description trop longue (${description.length}/155) sur ${path}`,
      );
    }
  }
}
