import type { MetadataRoute } from "next";
import { SITE } from "@/data/agence";

/**
 * Crawlers de recherche IA autorises explicitement (§4 du master).
 *
 * Regle a ne pas oublier : ne jamais bloquer un *search bot* en croyant bloquer
 * un *training bot*. OAI-SearchBot, PerplexityBot et Claude-SearchBot conditionnent
 * la presence dans les reponses de ChatGPT, Perplexity et Claude — or 45 % des
 * consommateurs passent desormais par un assistant IA pour se faire recommander
 * une entreprise locale.
 */
const BOTS_IA = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "CCBot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  const regles = { allow: "/", disallow: ["/api/"] };

  return {
    rules: [
      { userAgent: "*", ...regles },
      ...BOTS_IA.map((bot) => ({ userAgent: bot, ...regles })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
