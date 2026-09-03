import type { PageMotif } from "./types";
import { motif as adultere } from "./adultere-infidelite";
import { motif as pension } from "./pension-alimentaire-concubinage";
import { motif as garde } from "./droit-de-garde-visite";
import { motif as recherchePersonne } from "./recherche-de-personne";
import { motif as succession } from "./succession-heritiers";
import { motif as arretMaladie } from "./arret-maladie-abusif";
import { motif as concurrence } from "./concurrence-deloyale";
import { motif as volInterne } from "./vol-interne-detournement";
import { motif as preEmbauche } from "./pre-embauche";
import { motif as solvabilite } from "./solvabilite-recouvrement";
import { motif as biensActifs } from "./recherche-biens-actifs";
import { motif as renseignementPartenaire } from "./renseignement-partenaire-concurrent";
import { motif as contrefacon } from "./contrefacon";
import { motif as contreEspionnage } from "./contre-espionnage-industriel";
import { motif as detectionEcoute } from "./detection-materiel-ecoute";
import { motif as renseignementCollaborateur } from "./renseignement-collaborateur";
import { motif as emploiDuTemps } from "./controle-emploi-du-temps";
import { motif as marques } from "./marques-modeles";
import { motif as comportementProche } from "./comportement-proche";
import { motif as renseignementsFamiliaux } from "./renseignements-familiaux";
import { motif as avantMariage } from "./avant-mariage";
import { motif as paternite } from "./paternite-genealogie";
import { motif as traceurGps } from "./detection-traceur-gps";
import { motif as logicielEspion } from "./detection-logiciel-espion";

/**
 * Registre des pages motif.
 *
 * Une intention de recherche = une page. Avant d'en ajouter une, verifier
 * qu'aucune existante ne couvre deja la meme intention : c'est la regle
 * anti-cannibalisation du master (§2).
 */
const TOUS: PageMotif[] = [
  // Silo particuliers
  adultere,
  pension,
  garde,
  recherchePersonne,
  succession,
  comportementProche,
  renseignementsFamiliaux,
  avantMariage,
  paternite,
  traceurGps,
  logicielEspion,
  // Silo entreprises
  arretMaladie,
  concurrence,
  volInterne,
  preEmbauche,
  solvabilite,
  biensActifs,
  renseignementPartenaire,
  contrefacon,
  contreEspionnage,
  detectionEcoute,
  renseignementCollaborateur,
  emploiDuTemps,
  marques,
];

export const MOTIFS = TOUS;

export function motifParSlug(slug: string): PageMotif | undefined {
  return TOUS.find((m) => m.slug === slug);
}

export function motifsDuSilo(
  silo: PageMotif["silo"],
  sauf?: string,
): PageMotif[] {
  return TOUS.filter((m) => m.silo === silo && m.slug !== sauf);
}

/** Liens prets a l'emploi pour le maillage depuis les pages piliers. */
export function liensMotifs(silo: PageMotif["silo"]) {
  return motifsDuSilo(silo).map((m) => ({
    libelle: m.libelleCourt,
    href: `/${m.slug}/`,
  }));
}
