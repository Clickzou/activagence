import type { BlocContenu } from "@/lib/articles/types";

/**
 * Contenu de la page pilier « filature et surveillance ».
 *
 * Structuré en blocs comme les pages villes, pour être rendu par le même
 * gabarit : les sous-titres de niveau 3 deviennent des sections illustrées,
 * les titres de niveau 2 qui suivent deviennent des sections autonomes.
 */
export const CONTENU_FILATURE: BlocContenu[] = [
  { type: "titre2", texte: "Deux méthodes, deux usages" },
  {
    type: "paragraphe",
    texte:
      "Une filature n'est pas un procédé unique : selon ce qu'il faut établir, on ne se place pas au même endroit et on n'engage pas les mêmes moyens. La distinction entre poste fixe et suivi mobile détermine à la fois la faisabilité de la mission et son coût.",
  },
  { type: "titre3", texte: "La surveillance statique" },
  {
    type: "paragraphe",
    texte:
      "L'intervenant observe un point fixe — un domicile, un commerce, un lieu de travail — depuis un véhicule banalisé ou une camionnette aménagée. Elle répond aux questions du type « qui entre, qui sort, à quelle heure, et à quelle fréquence ? ». C'est la méthode adaptée pour établir une cohabitation ou la réalité d'une activité sur un lieu donné.",
  },
  {
    type: "paragraphe",
    texte:
      "Sa limite tient au terrain : dans une rue calme, un véhicule immobile finit toujours par être remarqué. On y répond par des vacations plus courtes, en changeant de véhicule et d'emplacement à chaque fois.",
  },
  { type: "titre3", texte: "La filature mobile" },
  {
    type: "paragraphe",
    texte:
      "L'équipe suit les déplacements d'une personne, à pied, en voiture ou en transports. Elle répond aux questions du type « où va-t-elle réellement, et qui rencontre-t-elle ? ». En ville, elle exige des relais entre intervenants et des changements de véhicule : un même véhicule aperçu trois fois dans la journée finit toujours par être remarqué.",
  },
  {
    type: "paragraphe",
    texte:
      "Les premières minutes sont les plus critiques. C'est pourquoi nous préférons, quand la géographie le permet, nous positionner sur un axe de passage obligé plutôt que de prendre la personne en filature dès sa sortie.",
  },
  { type: "titre3", texte: "Le nombre d'intervenants" },
  {
    type: "paragraphe",
    texte:
      "Une observation devant un point fixe très fréquenté peut se conduire à un seul intervenant. Un suivi qui bascule du métro à la voiture en demande deux, pour se relayer sans jamais rester dans le champ de vision de la personne. C'est le poste qui pèse le plus lourd dans un devis, et nous l'annonçons avant de commencer plutôt que de le découvrir en cours de mission.",
  },
  { type: "titre2", texte: "Ce qu'une filature permet d'établir" },
  {
    type: "liste",
    items: [
      "**Doute conjugal** : rendez-vous, durées de présence, accompagnements — voir [doute conjugal et infidélité](/detective-prive-adultere-infidelite-toulouse/).",
      "**Vie maritale dissimulée** : présence continue au même domicile, à des jours et horaires variés — voir [pension alimentaire et concubinage](/enquete-pension-alimentaire-concubinage/).",
      "**Droit de garde** : horaires réels de remise, personne qui prend l'enfant en charge — voir [droit de garde et de visite](/enquete-droit-de-garde-visite-enfant/).",
      "**Activité concurrente** d'un salarié ou d'un ancien salarié — voir [concurrence déloyale](/enquete-concurrence-deloyale-entreprise/).",
      "**Arrêt de travail détourné** : exercice visible d'une tâche professionnelle — voir [arrêt de travail détourné](/enquete-arret-maladie-abusif-salarie/).",
      "**Vol interne** : sorties de marchandises, circuits de revente — voir [vol interne et détournement](/enquete-vol-interne-detournement-entreprise/).",
    ],
  },
  { type: "titre2", texte: "Le terrain toulousain" },
  {
    type: "paragraphe",
    texte:
      "Notre agence est installée boulevard des Minimes depuis des années, et cela n'a rien d'anecdotique dans ce métier. Savoir qu'une rue du centre est piétonne à certaines heures, qu'un parking donne sur deux sorties distinctes ou que la circulation sur le périphérique interdit tel type de suivi à telle heure : ce sont ces détails qui décident du succès d'une vacation. Nous intervenons dans toute l'agglomération, puis en Haute-Garonne et en Occitanie. Selon votre situation, la suite se trouve sur nos pages [enquêtes pour les particuliers](/detective-prive-particuliers-toulouse/) ou [enquêtes pour les entreprises](/detective-prive-entreprise-toulouse/). Et pour savoir ce que ces constatations vaudront devant un juge, voyez [la recevabilité du rapport en justice](/rapport-detective-prive-preuve-justice/).",
  },
];
