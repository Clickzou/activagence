import type { PageVille } from "./types";
import { ville as blagnac } from "./blagnac";
import { ville as colomiers } from "./colomiers";
import { ville as tournefeuille } from "./tournefeuille";
import { ville as muret } from "./muret";
import { ville as balma } from "./balma";
import { ville as lunion } from "./lunion";

/**
 * Registre des pages villes (silo 6).
 *
 * Regle avant d'en ajouter une : chaque page doit dire quelque chose de vrai et
 * de specifique a la commune — ce que son tissu urbain change pour une mission.
 * Dupliquer un gabarit en substituant le nom de la ville est explicitement
 * contre-productif depuis les core updates 2026.
 *
 * Les pastilles de la page d'accueil deviennent cliquables pour les communes
 * presentes ici, et restent inertes pour les autres : pas de lien mort.
 */
const TOUTES: PageVille[] = [blagnac, colomiers, tournefeuille, muret, balma, lunion];

export const VILLES = TOUTES;

export function villeParSlug(slug: string): PageVille | undefined {
  return TOUTES.find((v) => v.slug === slug);
}

/** Retourne l'URL d'une commune si sa page existe, sinon `undefined`. */
export function urlVille(nom: string): string | undefined {
  const v = TOUTES.find((x) => x.nom.toLowerCase() === nom.toLowerCase());
  return v ? `/${v.slug}/` : undefined;
}

export function villesVoisines(nom: string, sauf?: string): PageVille[] {
  return TOUTES.filter((v) => v.nom !== sauf && v.voisines?.includes(nom));
}
