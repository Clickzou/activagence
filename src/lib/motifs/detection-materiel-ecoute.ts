import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "detection-materiel-ecoute-toulouse",
  titre: "Détection de matériel d'écoute à Toulouse",
  metaTitre: "Détection de matériel d'écoute à Toulouse",
  metaDescription:
    "Recherche de micros et de dispositifs de captation dans vos locaux à Toulouse : méthode, cadre légal et conduite à tenir en cas de découverte.",
  chapo:
    "Poser un micro chez quelqu'un est un délit. Le trouver ne suffit pas : encore faut-il que la découverte soit constatée dans des conditions qui permettront d'agir.",
  essentiel:
    "La détection de matériel d'écoute consiste à rechercher, dans un local dont vous avez la jouissance, les dispositifs de captation du son ou de l'image installés à votre insu : micros autonomes, émetteurs radio, enregistreurs dissimulés, caméras. Activ'Agence intervient à Toulouse et en Occitanie avec un balayage des fréquences radio, une inspection physique méthodique des points d'installation habituels et un contrôle des équipements suspects. La prestation n'est possible que dans un lieu dont vous êtes propriétaire, locataire ou occupant légitime — un domicile, un bureau, un véhicule vous appartenant. Toute découverte est décrite dans un rapport daté et horodaté, avec le dispositif laissé en place ou retiré selon la stratégie retenue avec votre avocat : un dispositif arraché sans constat perd une partie de sa valeur probatoire.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  libelleCourt: "Détection de matériel d'écoute",
  image: {
    src: "/images/motif-detection-ecoute.webp",
    alt: "Appareil de détection de fréquences radio et sonde posés sur un bureau, près d'une prise murale démontée",
  },
  contenu: [
    { type: "titre2", texte: "Ce que dit la loi" },
    {
      type: "paragraphe",
      texte:
        "Capter, enregistrer ou transmettre, sans le consentement de leur auteur, des paroles prononcées à titre privé ou confidentiel constitue une atteinte à l'intimité de la vie privée, réprimée par le code pénal. La fabrication, l'importation, la détention ou la publicité d'appareils conçus pour réaliser ces captations sont elles aussi sanctionnées.",
    },
    {
      type: "paragraphe",
      texte:
        "La conséquence pratique est simple : nous détectons, nous ne posons jamais. Une agence qui vous proposerait d'installer un dispositif d'écoute vous ferait commettre un délit, et le prestataire comme le commanditaire en répondraient.",
    },
    { type: "titre2", texte: "Dans quels lieux nous pouvons intervenir" },
    {
      type: "tableau",
      entetes: ["Lieu", "Intervention possible ?", "Condition"],
      lignes: [
        ["Vos bureaux, vos locaux professionnels", "Oui", "Vous en avez la jouissance"],
        ["Votre domicile", "Oui", "Vous en êtes propriétaire, locataire ou occupant"],
        ["Votre véhicule", "Oui", "Le véhicule vous appartient ou vous est affecté"],
        [
          "Salle de réunion louée, chambre d'hôtel occupée",
          "Oui",
          "Pendant la durée de votre occupation",
        ],
        [
          "Le domicile ou le véhicule d'un tiers",
          "Non",
          "Ce serait une intrusion, quelle que soit la raison invoquée",
        ],
        [
          "Un local professionnel dont vous avez été évincé",
          "Non",
          "Vous n'en avez plus la jouissance : la question se règle en justice",
        ],
      ],
    },
    { type: "titre2", texte: "Comment se déroule un balayage" },
    {
      type: "listeOrdonnee",
      items: [
        "Un échange préalable, en dehors du local concerné : si un dispositif est actif, l'organisation de l'intervention ne doit pas y être discutée.",
        "L'analyse du spectre radio à la recherche d'émissions anormales, local par local, avec relevé des sources identifiées.",
        "L'inspection physique des points d'installation classiques : prises, plafonniers, détecteurs, mobilier, gaines, équipements informatiques et de téléphonie.",
        "Le contrôle des appareils déjà présents — un objet du quotidien peut avoir été remplacé par un modèle modifié.",
        "La rédaction d'un rapport décrivant la méthode, les zones couvertes et les constatations, qu'elles soient positives ou négatives.",
      ],
    },
    {
      type: "encadre",
      titre: "Un rapport négatif n'est pas un rapport inutile",
      texte:
        "Dans la majorité des interventions, aucun dispositif n'est découvert. Le rapport documente alors ce qui a été contrôlé et comment : c'est ce qui permet de clore une inquiétude, et c'est une pièce utile lorsque le climat de suspicion est lui-même devenu un sujet, notamment dans un conflit entre associés ou dans une séparation.",
    },
    { type: "titre2", texte: "Si un dispositif est découvert" },
    {
      type: "paragraphe",
      texte:
        "Le premier réflexe — l'arracher — est le mauvais. Un dispositif retiré et manipulé perd une partie de sa valeur : on ne peut plus établir avec certitude où il était, depuis quand, ni qui l'a posé. Nous décrivons la découverte, la photographions en place et vous orientons vers votre avocat, qui décidera de la suite : dépôt de plainte, constat par commissaire de justice, ou conservation en l'état.",
    },
    {
      type: "paragraphe",
      texte:
        "Si l'inquiétude porte sur un véhicule, voyez notre page [détection de traceur GPS](/detection-traceur-gps-toulouse/) ; si elle porte sur un téléphone ou un ordinateur, voyez [détection de logiciel espion](/detection-logiciel-espion-toulouse/). Ces trois vérifications sont souvent demandées ensemble et peuvent être menées dans la même intervention.",
    },
    {
      type: "paragraphe",
      texte:
        "Lorsque la découverte s'inscrit dans un contexte de fuite d'informations en entreprise, elle se prolonge naturellement par une enquête de [contre-espionnage industriel](/contre-espionnage-industriel-toulouse/).",
    },
    { type: "titre2", texte: "Ce que l'on trouve réellement, et ce que l'on ne trouve pas" },
    {
      type: "paragraphe",
      texte:
        "Le matériel de captation vendu au grand public a beaucoup changé. Les émetteurs radio permanents, faciles à repérer au balayage, ont laissé la place à des enregistreurs autonomes qui n'émettent rien — une carte mémoire, une batterie, un boîtier de la taille d'une clé. Aucun analyseur de spectre ne les détecte : seule l'inspection physique les trouve.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est pourquoi une intervention sérieuse combine toujours les deux approches. Un prestataire qui ne ferait qu'un passage d'analyseur en trente minutes ne chercherait, en réalité, qu'une partie du problème — et vous laisserait avec un faux sentiment de sécurité.",
    },
    { type: "titre2", texte: "Les emplacements que nous contrôlons systématiquement" },
    {
      type: "liste",
      items: [
        "**Les points d'alimentation permanents** : prises, blocs multiprises, chargeurs laissés en place, détecteurs de fumée, luminaires. Un dispositif alimenté n'a pas de limite d'autonomie, c'est le plus durable.",
        "**Le mobilier de réunion** : dessous de table, pieds de chaise, plantes, cadres, goulottes — tout ce qui se trouve à hauteur de conversation et que personne ne déplace jamais.",
        "**Les équipements de téléphonie et de réseau** : boîtiers, prises murales, matériel intercalé sur une ligne ou dans une baie.",
        "**Les objets du quotidien** susceptibles d'avoir été remplacés par un modèle modifié : réveil, enceinte, souris, chargeur, stylo.",
        "**Les véhicules**, quand ils font partie du périmètre — un point traité en détail sur notre page [détection de traceur GPS](/detection-traceur-gps-toulouse/).",
      ],
    },
    { type: "titre2", texte: "Le contexte dans lequel ces demandes arrivent" },
    {
      type: "paragraphe",
      texte:
        "Elles se ressemblent d'un dossier à l'autre. En entreprise : un appel d'offres perdu dans des conditions inexplicables, un concurrent qui connaît une position de négociation, un conflit entre associés où chacun soupçonne l'autre. Le prolongement naturel est alors une enquête de [contre-espionnage industriel](/contre-espionnage-industriel-toulouse/).",
    },
    {
      type: "paragraphe",
      texte:
        "Chez les particuliers : une séparation conflictuelle, un ex-conjoint qui semble savoir ce qui se dit à la maison, une personne qui répète des propos tenus dans une seule pièce. Dans les deux cas, la vérification tranche — et, le plus souvent, elle rassure.",
    },
    { type: "titre2", texte: "Ce que vaut le rapport si vous portez plainte" },
    {
      type: "paragraphe",
      texte:
        "La captation de paroles privées est un délit. Si un dispositif est découvert, le rapport décrit sa nature, son emplacement exact, la date et l'heure de la découverte, et il est accompagné de clichés pris en place avant tout retrait. C'est ce qui permet à votre avocat de déposer une plainte utile, et le cas échéant de faire constater par un commissaire de justice.",
    },
    {
      type: "paragraphe",
      texte:
        "L'identification de l'auteur, en revanche, relève de l'enquête judiciaire : nous établissons la présence du dispositif, pas la main qui l'a posé. Sur la valeur du rapport devant un juge, voyez [la recevabilité en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "Une intervention sur un logement ou un plateau de bureaux de taille courante demande une demi-journée et démarre à 590 € TTC ; plusieurs sites ou de grandes surfaces allongent la durée à proportion. Le détail figure sur [nos tarifs](/tarifs-detective-prive-toulouse/). Nous intervenons hors des heures d'ouverture quand la discrétion vis-à-vis des équipes l'impose.",
    },
  ],
  faq: [
    {
      question: "Pouvez-vous poser un micro pour moi ?",
      reponse:
        "Non, dans aucune circonstance. Capter des paroles privées à l'insu des intéressés est un délit, y compris chez soi lorsque des tiers sont enregistrés. Nous ne réalisons que de la détection.",
    },
    {
      question: "Faut-il prévenir vos salariés d'une intervention dans les bureaux ?",
      reponse:
        "L'intervention porte sur les locaux, pas sur les personnes : elle ne constitue pas une surveillance des salariés. Elle se déroule le plus souvent en dehors des heures d'ouverture, ce qui évite d'alimenter les rumeurs. Si des équipements individuels doivent être contrôlés, la question de l'information se pose et nous la traitons avec vous.",
    },
    {
      question: "Un téléphone qui chauffe ou une batterie qui se vide sont-ils des signes ?",
      reponse:
        "Ce sont des indices très faibles, qui s'expliquent presque toujours autrement. Les signes qui justifient une vérification sont d'un autre ordre : des informations connues d'un tiers alors qu'elles n'ont été dites que dans une pièce précise, ou la répétition de coïncidences trop précises pour être fortuites.",
    },
    {
      question: "Combien de temps dure une intervention ?",
      reponse:
        "Une demi-journée pour un logement ou un plateau de bureaux de taille courante ; davantage pour des locaux étendus ou lorsque plusieurs sites doivent être traités. Nous vous donnons une durée et un prix fermes après avoir pris connaissance des surfaces concernées.",
    },
    {
      question: "Faut-il refaire l'intervention régulièrement ?",
      reponse:
        "Un balayage constate une situation à un instant donné : il ne protège pas l'avenir. Dans un contexte sensible — négociation en cours, conflit entre associés —, certaines entreprises font contrôler leurs salles de réunion avant les échéances importantes. Pour un particulier, une intervention ponctuelle suffit presque toujours à trancher.",
    },
    {
      question: "Puis-je enregistrer moi-même une conversation chez moi ?",
      reponse:
        "Enregistrer une conversation à laquelle vous participez ne vous expose pas de la même manière qu'un enregistrement clandestin de tiers, mais l'usage d'un tel enregistrement en justice obéit à des règles strictes et son opportunité se discute avec un avocat. Enregistrer des personnes en votre absence, en revanche, est un délit — sans exception.",
    },
  ],
  motifsLies: [
    "contre-espionnage-industriel-toulouse",
    "enquete-vol-interne-detournement-entreprise",
  ],
};
