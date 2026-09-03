import type { BlocContenu } from "@/lib/articles/types";

/**
 * Contenu de la page pilier « détective privé pour entreprises ».
 * Structuré en blocs, comme les pages villes, pour partager le même gabarit.
 */
export const CONTENU_ENTREPRISE: BlocContenu[] = [
  { type: "titre2", texte: "Trois domaines d'investigation" },
  {
    type: "paragraphe",
    texte:
      "Les demandes des entreprises se répartissent en trois familles, et elles n'engagent ni les mêmes moyens ni les mêmes délais. Une vérification documentaire se règle en quelques jours ; une surveillance destinée à établir des faits répétés demande plusieurs vacations.",
  },
  { type: "titre3", texte: "Les enquêtes commerciales" },
  {
    type: "paragraphe",
    texte:
      "Vérifier avec qui vous traitez, et récupérer ce qui vous est dû. Enquête de solvabilité avant un engagement, recherche de biens et d'actifs d'un débiteur, identification de son employeur en vue d'un avis à tiers détenteur, renseignement sur l'activité réelle d'un partenaire ou d'un concurrent — ce qui n'apparaît pas dans un extrait Kbis.",
  },
  {
    type: "paragraphe",
    texte:
      "S'y ajoutent la constatation du débauchage, du détournement de clientèle et de la revente hors réseau, ainsi que l'identification des points de vente en matière de contrefaçon. Ces missions reposent d'abord sur de la recherche documentaire, complétée par des vérifications de terrain.",
  },
  { type: "titre3", texte: "Les enquêtes techniques" },
  {
    type: "paragraphe",
    texte:
      "Quand la menace est à l'intérieur ou sur vos équipements. Contre-espionnage industriel et identification des fuites d'information, surveillances et filatures avec relevés horodatés, détection de matériel d'écoute dans les bureaux, les salles de réunion et les véhicules, établissement des faits en cas de vol, d'escroquerie ou de détournement.",
  },
  {
    type: "paragraphe",
    texte:
      "Ces missions mobilisent du matériel spécifique et des interventions discrètes : nos intervenants n'entrent pas dans vos locaux et ne se présentent jamais au nom de votre entreprise.",
  },
  { type: "titre3", texte: "Les enquêtes sociales" },
  {
    type: "paragraphe",
    texte:
      "Sur les personnes qui travaillent, ont travaillé ou vont travailler chez vous — dans le strict cadre de ce que la loi autorise. Vérification du parcours déclaré avant une embauche, contrôle de l'exercice d'une activité concurrente en parallèle, constatation de l'usage réel d'un arrêt de travail.",
  },
  {
    type: "paragraphe",
    texte:
      "Ce cadre a une limite nette : les informations recherchées doivent présenter un lien direct et nécessaire avec l'emploi concerné. Tout ce qui relève de la vie privée, de la santé ou des convictions est hors du champ — non par prudence, mais parce que c'est illégal.",
  },
  { type: "titre2", texte: "Ce que nous établissons pour les entreprises" },
  {
    type: "liste",
    items: [
      "**Arrêt de travail détourné** : activité incompatible avec la loyauté due — voir [arrêt de travail détourné](/enquete-arret-maladie-abusif-salarie/).",
      "**Concurrence déloyale** : débauchage, détournement de clientèle, société créée en parallèle — voir [concurrence déloyale](/enquete-concurrence-deloyale-entreprise/).",
      "**Vol interne** : sorties de marchandises, circuits de revente, écarts d'inventaire — voir [vol interne et détournement](/enquete-vol-interne-detournement-entreprise/).",
      "**Vérification avant embauche** : diplômes, périodes d'emploi, références — voir [enquête pré-embauche](/enquete-pre-embauche-verification/).",
      "**Solvabilité et recouvrement** : actifs, employeur, existence réelle d'une activité — voir [solvabilité et recouvrement](/enquete-solvabilite-recouvrement-toulouse/).",
      "**Filature et surveillance** : constatations horodatées depuis l'espace public — voir [filature et surveillance](/filature-surveillance-toulouse/).",
    ],
  },
  { type: "titre2", texte: "Ce que nous refusons, même sur demande" },
  {
    type: "paragraphe",
    texte:
      "Une preuve obtenue de façon déloyale est écartée des débats, et elle expose celui qui l'a commandée. Nous refusons donc systématiquement quatre demandes : poser un traceur GPS sur un véhicule à l'insu de son utilisateur, intercepter des communications ou accéder à des comptes personnels, pénétrer dans un domicile ou un lieu privé, et surveiller un salarié de manière permanente et disproportionnée.",
  },
  {
    type: "paragraphe",
    texte:
      "Ce n'est pas de la prudence excessive : un dossier solide sur le fond se perd régulièrement sur la forme. Le détail de ce qui rend une preuve utilisable figure sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/), et le fonctionnement du devis sur la page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
  },
];
