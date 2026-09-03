import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "enquete-comportement-proche-toulouse",
  titre: "Contrôle des fréquentations et de l'emploi du temps d'un proche à Toulouse",
  metaTitre: "Contrôle des fréquentations d'un proche à Toulouse",
  metaDescription:
    "Adolescent en danger, proche sous emprise ou en addiction : ce qu'une enquête peut établir à Toulouse, et à quelle condition selon l'âge.",
  chapo:
    "Un parent inquiet et un conjoint méfiant n'ont pas les mêmes droits. Ce qui détermine ce qui est possible, ce n'est pas l'intensité de l'inquiétude : c'est l'âge de la personne et le lien juridique qui vous unit à elle.",
  essentiel:
    "Lorsqu'un proche s'isole, change de comportement ou paraît sous influence, une enquête peut établir des faits : déplacements réels, lieux fréquentés, personnes rencontrées, emploi du temps sur des journées données. Activ'Agence conduit ces missions depuis Toulouse dans un cadre strict. Pour un enfant mineur, le titulaire de l'autorité parentale a un intérêt légitime à agir : il est responsable de sa protection. Pour un majeur, l'intérêt légitime doit être démontré — une procédure de protection engagée, une situation d'emprise avérée, un danger caractérisé — et il ne suffit jamais de vouloir savoir. Les constatations se font exclusivement dans des lieux ouverts au public, sur des périodes ciblées, sans jamais accéder aux communications ni aux appareils de la personne concernée.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  libelleCourt: "Fréquentations d'un proche",
  image: {
    src: "/images/motif-comportement-proche.webp",
    alt: "Abri de bus éclairé la nuit dans une rue déserte, banc vide et trottoir humide",
  },
  contenu: [
    { type: "titre2", texte: "La distinction qui commande tout : mineur ou majeur" },
    {
      type: "paragraphe",
      texte:
        "Pour un enfant mineur, le parent titulaire de l'autorité parentale exerce un devoir de protection : il est fondé à savoir où va son enfant, avec qui, et à quoi il est exposé. Une enquête ciblée sur des faits précis — un lieu fréquenté, une personne majeure qui gravite autour de lui — s'inscrit dans ce cadre.",
    },
    {
      type: "paragraphe",
      texte:
        "Pour un majeur, la règle s'inverse : il dispose du droit au respect de sa vie privée, y compris vis-à-vis de sa famille. Le fait d'être son parent, son conjoint ou son enfant ne crée aucun droit de regard. Il faut un intérêt légitime démontrable — et c'est la première chose que nous examinons avec vous.",
    },
    {
      type: "encadre",
      titre: "Ce qui constitue un intérêt légitime pour un majeur",
      texte:
        "Une procédure de protection juridique en cours ou envisagée pour une personne vulnérable ; une situation d'emprise avec des actes de disposition patrimoniale inexpliqués ; un danger caractérisé et documenté. À l'inverse, l'inquiétude d'un parent devant les choix de vie d'un enfant majeur, aussi sincère soit-elle, n'en est pas un.",
    },
    { type: "titre2", texte: "Les situations que nous acceptons" },
    {
      type: "liste",
      items: [
        "**Mineur en danger** : lieux fréquentés, adultes présents autour de lui, cohérence entre l'emploi du temps déclaré et la réalité.",
        "**Addiction supposée** : constatation de fréquentations et de lieux, sur des journées ciblées — jamais un suivi permanent.",
        "**Emprise sur une personne vulnérable** : identification de l'entourage, constatation des visites, vérification de l'existence réelle de la structure ou de l'association concernée.",
        "**Isolement inexpliqué d'un parent âgé** : vérification de sa situation, de son environnement et des personnes présentes à son domicile, dans les limites de ce qui s'observe depuis l'extérieur.",
      ],
    },
    {
      type: "avertissement",
      titre: "Ce que nous refusons, même à un parent",
      texte:
        "Accéder au téléphone, aux messages ou aux comptes en ligne d'un proche, quel que soit son âge. Installer un logiciel de surveillance sur son appareil. Poser un traceur sur son véhicule. Entrer chez lui. Ces actes sont pénalement réprimés, y compris entre membres d'une même famille, et y compris lorsqu'un mineur est concerné.",
    },
    { type: "titre2", texte: "Ce que l'enquête peut réellement apporter" },
    {
      type: "paragraphe",
      texte:
        "Des faits datés, vérifiables, sur une période courte. Cela suffit souvent : une inquiétude diffuse devient une situation précise, sur laquelle on peut agir — en parlant, en saisissant un juge des enfants, en engageant une mesure de protection, en signalant une structure.",
    },
    {
      type: "paragraphe",
      texte:
        "Quand la question porte sur le respect des modalités de garde après une séparation, elle relève de notre page [droit de garde et de visite](/enquete-droit-de-garde-visite-enfant/). Quand elle porte sur une personne qui a disparu ou dont vous avez perdu la trace, voyez [recherche de personne](/recherche-de-personne-debiteur-toulouse/).",
    },
    { type: "titre2", texte: "Comment nous travaillons" },
    {
      type: "listeOrdonnee",
      items: [
        "Un entretien confidentiel où nous établissons deux choses : ce que vous savez déjà, et quel est votre lien juridique avec la personne concernée.",
        "Un avis franc : dans une partie des demandes, nous disons qu'une enquête n'est pas possible, ou qu'elle n'apporterait rien d'exploitable.",
        "Des observations ciblées, dans des lieux ouverts au public, sur des créneaux définis avec vous.",
        "Un rapport écrit, factuel, sans jugement de valeur sur les personnes constatées.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le déroulement concret d'une journée d'observation est décrit sur notre page [filature et surveillance](/filature-surveillance-toulouse/) ; le budget correspondant figure dans [nos tarifs](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "Le mineur : ce que l'autorité parentale permet, et jusqu'où" },
    {
      type: "paragraphe",
      texte:
        "Le titulaire de l'autorité parentale a un devoir de protection : savoir où va son enfant, avec qui, et à quoi il est exposé s'inscrit dans ce cadre. Cela ne signifie pas que tout est permis. L'enfant, même mineur, a droit à une vie privée, et le contrôle doit rester proportionné à son âge et au danger réellement soupçonné.",
    },
    {
      type: "paragraphe",
      texte:
        "En pratique, cela dessine une ligne claire : constater les lieux fréquentés et les personnes majeures qui gravitent autour de lui, oui. Lire ses messages, installer un logiciel de surveillance sur son téléphone à son insu, le faire suivre en permanence, non — voir [détection de logiciel espion](/detection-logiciel-espion-toulouse/) sur ce que la loi punit.",
    },
    { type: "titre2", texte: "Ce que le juge des enfants peut, et que nous ne pouvons pas" },
    {
      type: "paragraphe",
      texte:
        "Lorsqu'un mineur est en danger, le juge des enfants du tribunal judiciaire de Toulouse peut être saisi — par les parents, par le mineur lui-même, ou par le procureur. Il dispose de moyens qui n'appartiennent qu'à lui : mesure d'investigation éducative, mesure d'assistance, injonctions. C'est souvent la voie utile, et notre rapport sert alors à motiver la saisine.",
    },
    {
      type: "paragraphe",
      texte:
        "Le dire fait partie de notre travail : dans une partie des situations, ce qu'il faut n'est pas une enquête privée mais une saisine, un signalement, ou l'intervention d'un professionnel de santé. Nous vous orientons plutôt que de vendre une mission.",
    },
    { type: "titre2", texte: "Le majeur vulnérable : la question patrimoniale" },
    {
      type: "paragraphe",
      texte:
        "Dans les dossiers d'emprise sur une personne âgée ou fragilisée, ce sont souvent les actes patrimoniaux qui alertent en premier : donations inhabituelles, retraits répétés, procuration donnée à un tiers récemment apparu, vente précipitée d'un bien. Ces éléments relèvent de la [recherche de biens et d'actifs](/recherche-biens-actifs-toulouse/) et se combinent avec les constatations de terrain.",
    },
    {
      type: "paragraphe",
      texte:
        "Réunis, ils fondent une demande de mesure de protection devant le juge des contentieux de la protection, ou un signalement. C'est l'usage le plus fréquent — et le plus efficace — de ce type d'enquête.",
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "Les constatations se comptent en vacations d'observation, à partir de 480 € TTC l'une, ciblées sur des créneaux définis avec vous. Deux à quatre suffisent en général à établir une habitude. Le volet documentaire, moins coûteux, précède toujours le terrain. Le détail figure sur [nos tarifs](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Puis-je faire suivre mon enfant majeur ?",
      reponse:
        "Pas au seul motif qu'il est votre enfant. Un majeur a droit au respect de sa vie privée vis-à-vis de sa famille. Il faut un intérêt légitime — une mesure de protection, une situation d'emprise avec des conséquences patrimoniales, un danger caractérisé. Nous examinons cette question avec vous avant toute chose, et nous refusons la mission si la condition n'est pas remplie.",
    },
    {
      question: "Mon enfant mineur peut-il l'apprendre ?",
      reponse:
        "Nos intervenants restent invisibles : c'est le cœur du métier. Cela dit, la question de ce que vous ferez ensuite du rapport mérite d'être posée dès le départ — dans la plupart des situations familiales, le dialogue reste l'objectif, et le rapport n'est qu'un moyen d'en avoir un qui porte sur des faits.",
    },
    {
      question: "Une association ou un groupe peut-il être vérifié ?",
      reponse:
        "Son existence légale, ses dirigeants déclarés, ses locaux et son activité apparente peuvent être vérifiés à partir de sources publiques et de constatations extérieures. Nous ne nous introduisons pas dans une réunion privée et nous n'infiltrons aucun groupe.",
    },
    {
      question: "Le rapport peut-il servir devant un juge ?",
      reponse:
        "Oui, s'il est établi dans les conditions décrites ici. Il est fréquemment produit à l'appui d'une demande de mesure de protection ou d'une saisine du juge des enfants. Sa valeur probatoire est expliquée sur notre page sur [la recevabilité du rapport en justice](/rapport-detective-prive-preuve-justice/).",
    },
    {
      question: "Puis-je faire suivre l'adulte qui fréquente mon enfant mineur ?",
      reponse:
        "La constatation porte sur ce qui concerne votre enfant : les lieux où il se rend, les personnes présentes, la fréquence des contacts. Cela conduit à identifier un tiers, ce qui est légitime au titre de la protection. Cela n'autorise pas une enquête générale sur la vie privée de cette personne, qui elle serait illicite.",
    },
    {
      question: "Et si mon enfant majeur est dans un groupe qui m'inquiète ?",
      reponse:
        "L'existence légale du groupe, ses dirigeants déclarés, ses locaux et son activité apparente se vérifient à partir de sources publiques. Le suivi de votre enfant majeur, lui, suppose un intérêt légitime démontrable — un danger caractérisé, des actes patrimoniaux inexpliqués. Sans cela, nous refusons, et nous vous orientons vers les associations d'aide aux victimes de dérives sectaires.",
    },
  ],
  motifsLies: [
    "enquete-droit-de-garde-visite-enfant",
    "recherche-de-personne-debiteur-toulouse",
  ],
};
