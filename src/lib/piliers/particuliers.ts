import type { BlocContenu } from "@/lib/articles/types";

/**
 * Contenu de la page pilier « détective privé pour particuliers ».
 * Structuré en blocs, comme les pages villes et la page entreprises, pour être
 * rendu par le même gabarit.
 */
export const CONTENU_PARTICULIERS: BlocContenu[] = [
  { type: "titre2", texte: "Avant tout, une conversation" },
  {
    type: "paragraphe",
    texte:
      "La plupart des personnes qui nous appellent n'ont jamais eu affaire à un détective privé. Elles hésitent, parfois depuis des mois. Le premier échange ne sert pas à vendre une enquête : il sert à comprendre votre situation, à vous dire ce qui peut légalement être établi, et — c'est fréquent — à vous dire quand une enquête n'apporterait rien.",
  },
  { type: "titre3", texte: "Les enquêtes sur des personnes" },
  {
    type: "paragraphe",
    texte:
      "Recherche d'une personne disparue ou perdue de vue, éléments permettant le réajustement d'une pension alimentaire, respect des modalités de garde et de droit de visite fixées par le juge, contrôle des fréquentations d'un proche vulnérable dans un contexte d'addiction ou d'emprise.",
  },
  {
    type: "paragraphe",
    texte:
      "Ces missions reposent sur des constatations répétées plutôt que sur un fait isolé : c'est la régularité documentée qui emporte la conviction d'un juge, jamais une observation unique.",
  },
  { type: "titre3", texte: "Les enquêtes familiales" },
  {
    type: "paragraphe",
    texte:
      "Constat d'adultère et enquête extra-conjugale, avec constatations horodatées destinées à une procédure de divorce pour faute. Renseignements familiaux dans le cadre d'un litige, vérification d'une situation déclarée avant un mariage, recherche en paternité et généalogie en appui d'une succession.",
  },
  {
    type: "paragraphe",
    texte:
      "Une précision que beaucoup ignorent : les descendants ne peuvent jamais être entendus comme témoins sur les griefs invoqués entre leurs parents. Compter sur ce que dira l'enfant n'est pas une stratégie, c'est une impasse.",
  },
  { type: "titre3", texte: "Les enquêtes patrimoniales et techniques" },
  {
    type: "paragraphe",
    texte:
      "Enquête de solvabilité avant un engagement ou une action en recouvrement, identification des biens mobiliers et immobiliers, localisation d'un débiteur et de ses ressources. Côté technique : détection de matériel d'écoute au domicile ou dans un véhicule, recherche de traceurs GPS posés à votre insu, détection de logiciels espions sur un ordinateur ou un téléphone.",
  },
  { type: "titre2", texte: "Les situations pour lesquelles on nous appelle" },
  {
    type: "liste",
    items: [
      "**Doute conjugal** et constat avant divorce — voir [doute conjugal et infidélité](/detective-prive-adultere-infidelite-toulouse/).",
      "**Pension alimentaire** et vie maritale dissimulée — voir [pension alimentaire et concubinage](/enquete-pension-alimentaire-concubinage/).",
      "**Droit de garde** et modalités de visite non respectées — voir [droit de garde et de visite](/enquete-droit-de-garde-visite-enfant/).",
      "**Recherche de personne** ou de débiteur — voir [recherche de personne](/recherche-de-personne-debiteur-toulouse/).",
      "**Succession** : localiser un héritier, identifier un patrimoine — voir [succession et héritiers](/enquete-succession-recherche-heritiers/).",
      "**Filature et surveillance** : constatations horodatées — voir [filature et surveillance](/filature-surveillance-toulouse/).",
    ],
  },
  { type: "titre2", texte: "Ce qui rend une preuve utilisable" },
  {
    type: "paragraphe",
    texte:
      "C'est la question qui décide de tout. Une photographie prise par un proche, un message lu sur le téléphone de l'autre, un enregistrement réalisé à son insu : ces éléments sont le plus souvent écartés par le juge, et peuvent se retourner contre celui qui les produit. Un constat établi par une agence autorisée par le CNAPS, à partir d'observations faites dans l'espace public et proportionnées au but poursuivi, ne souffre pas de cette faiblesse.",
  },
  {
    type: "paragraphe",
    texte:
      "Nous avons consacré une page entière à cette question : [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/). Pour la méthode de terrain, voyez [comment se déroule une filature](/filature-surveillance-toulouse/), et pour le budget, [nos tarifs et le déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
  },
];
