import type { Article, Silo } from "./types";
import { article as preuveAdultere } from "./preuve-adultere-divorce";
import { article as troisMetiers } from "./detective-huissier-avocat";
import { article as delais } from "./delais-enquete";
import { article as controleArret } from "./controle-arret-travail";
import { article as revisionPension } from "./revision-pension";
import { article as retrouverPersonne } from "./retrouver-une-personne";
import { article as traceurGps } from "./traceur-gps-vehicule";
import { article as limitesLegales } from "./limites-legales-detective";
import { article as nonConcurrence } from "./clause-non-concurrence";
import { article as attestation } from "./attestation-temoin";
import { article as volInterne } from "./vol-interne-dossier";
import { article as rapportAnatomie } from "./rapport-anatomie";
import { article as debauchage } from "./debauchage-salaries";
import { article as verifierPartenaire } from "./verifier-partenaire";
import { article as contrefacon } from "./contrefacon-distribution";
import { article as checklistDivorce } from "./checklist-divorce";
import { article as succession } from "./succession-bloquee";
import { article as nonRepresentation } from "./non-representation-enfant";
import { article as emprise } from "./emprise-proche-vulnerable";
import { article as logicielEspion } from "./logiciel-espion-telephone";

/**
 * Registre des articles.
 *
 * Cadence retenue (§3, silo 7 du master) : 2 articles par mois MAXIMUM.
 * Publier davantage d'articles generiques est contre-productif depuis les core
 * updates de 2026, qui devalorisent le contenu produit en masse sans matiere
 * originale. Chaque article doit apporter un element non copiable : une regle
 * juridique precise, un barème, une procedure decrite de l'interieur.
 *
 * Pour ajouter un article :
 *   1. creer src/lib/articles/<slug>.ts sur le modele de preuve-adultere-divorce.ts
 *   2. l'importer et l'ajouter au tableau ci-dessous
 *   3. `npm run seo:check` verifie les 2 000 mots, les 3 liens externes et les metas
 */
const TOUS: Article[] = [
  preuveAdultere,
  troisMetiers,
  delais,
  controleArret,
  revisionPension,
  retrouverPersonne,
  traceurGps,
  limitesLegales,
  nonConcurrence,
  attestation,
  volInterne,
  rapportAnatomie,
  debauchage,
  verifierPartenaire,
  contrefacon,
  checklistDivorce,
  succession,
  nonRepresentation,
  emprise,
  logicielEspion,
];

export const ARTICLES = TOUS;

export function articlesPublies(): Article[] {
  return TOUS.filter((a) => a.statut === "publie").sort((a, b) =>
    b.datePublication.localeCompare(a.datePublication),
  );
}

export function articleParSlug(slug: string): Article | undefined {
  return articlesPublies().find((a) => a.slug === slug);
}

export function articlesDuSilo(silo: Silo, sauf?: string): Article[] {
  return articlesPublies().filter((a) => a.silo === silo && a.slug !== sauf);
}

export const LIBELLES_SILO: Record<Silo, string> = {
  particuliers: "Particuliers",
  entreprises: "Entreprises",
  filature: "Filature et surveillance",
  preuve: "Preuve et procédure",
  tarifs: "Tarifs et déroulement",
};

export function formaterDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
