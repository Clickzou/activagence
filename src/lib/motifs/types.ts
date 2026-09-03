import type { BlocContenu, Silo } from "@/lib/articles/types";

/**
 * Page « motif » : une situation concrete qui declenche l'appel.
 *
 * C'est le gisement identifie par l'audit du 2026-09-02 : l'ancien site listait
 * 17 prestations sans en developper aucune, alors que chaque ligne correspond a
 * une intention de recherche distincte (« preuve infidelite divorce », « enquete
 * arret maladie abusif »…). Une page par motif, jamais deux pour la meme intention.
 *
 * Le contenu est typé comme celui des articles, et le texte accepte la syntaxe
 * `[ancre](/cible/)` pour les liens contextuels du maillage interne.
 */
export interface PageMotif {
  slug: string;
  /** H1 — doit contenir le service et « Toulouse » (regle §4 du master). */
  titre: string;
  /** <= 60 caracteres. */
  metaTitre: string;
  /** <= 155 caracteres. */
  metaDescription: string;
  chapo: string;
  /** Reponse directe de 130-170 mots, extractible hors contexte par un LLM. */
  essentiel: string;
  silo: Extract<Silo, "particuliers" | "entreprises">;
  /** Page pilier du silo, vers laquelle la page fait remonter l'autorite. */
  pilier: string;
  /** Libelle court pour le fil d'Ariane et les blocs de liens. */
  libelleCourt: string;
  image?: { src: string; alt: string };
  contenu: BlocContenu[];
  faq: { question: string; reponse: string }[];
  /** Slugs des autres motifs du meme silo a proposer en fin de page. */
  motifsLies?: string[];
}
