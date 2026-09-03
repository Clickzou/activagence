import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { PAGES_NOINDEX, PILIERS } from "@/data/navigation";
import { articlesPublies } from "@/lib/articles";
import { MOTIFS } from "@/lib/motifs";
import { VILLES } from "@/lib/villes";

/**
 * Sitemap — corrige deux defauts releves par l'audit du 2026-09-02 :
 *  1. les pages de service n'y figuraient pas ;
 *  2. les 18 pages de demonstration du theme y figuraient.
 *
 * Regle : aucune page noindex dans le sitemap. La liste est derivee de la
 * navigation pour qu'une page ajoutee au menu ne puisse pas etre oubliee ici.
 */

interface Entree {
  path: string;
  priorite: number;
  frequence: MetadataRoute.Sitemap[number]["changeFrequency"];
}

const PAGES: Entree[] = [
  { path: PILIERS.accueil, priorite: 1.0, frequence: "weekly" },
  { path: PILIERS.particuliers, priorite: 0.9, frequence: "monthly" },
  { path: PILIERS.entreprise, priorite: 0.9, frequence: "monthly" },
  { path: PILIERS.filature, priorite: 0.8, frequence: "monthly" },
  { path: PILIERS.preuve, priorite: 0.8, frequence: "monthly" },
  { path: PILIERS.tarifs, priorite: 0.8, frequence: "monthly" },
  { path: PILIERS.faq, priorite: 0.6, frequence: "monthly" },
  { path: PILIERS.blog, priorite: 0.7, frequence: "weekly" },
  { path: PILIERS.contact, priorite: 0.7, frequence: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const modifie = new Date();

  const pages = PAGES.filter((p) => !PAGES_NOINDEX.includes(p.path)).map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: modifie,
    changeFrequency: p.frequence,
    priority: p.priorite,
  }));

  // Les articles publies : les brouillons sont exclus par articlesPublies().
  const articles = articlesPublies().map((a) => ({
    url: absoluteUrl(`/blog/${a.slug}/`),
    lastModified: new Date(a.dateModification ?? a.datePublication),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  // Pages motif : une par intention de recherche, toutes indexables.
  const motifs = MOTIFS.map((m) => ({
    url: absoluteUrl(`/${m.slug}/`),
    lastModified: modifie,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Pages villes (silo 6) : pages de service locales.
  const villes = VILLES.map((v) => ({
    url: absoluteUrl(`/${v.slug}/`),
    lastModified: modifie,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...motifs, ...villes, ...articles];
}
