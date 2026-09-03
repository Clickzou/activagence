import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "enquete-arret-maladie-abusif-salarie",
  titre: "Arrêt de travail détourné : faire constater les faits à Toulouse",
  metaTitre: "Arrêt de travail abusif : enquête à Toulouse",
  metaDescription:
    "Salarié en arrêt qui exerce une autre activité : ce qu'un employeur peut faire constater à Toulouse, et ce que le rapport vaut aux prud'hommes.",
  chapo:
    "Un employeur ne contrôle pas l'état de santé d'un salarié — c'est le rôle du médecin. En revanche, il peut faire constater une activité incompatible avec l'arrêt, à des conditions strictes.",
  essentiel:
    "Lorsqu'un employeur a des raisons sérieuses de penser qu'un salarié en arrêt de travail exerce une autre activité — travail pour un concurrent, activité non déclarée, gestion d'un commerce —, il peut faire réaliser une enquête par un détective privé autorisé. Activ'Agence constate à Toulouse des faits matériels observables depuis l'espace public : présence répétée sur un lieu d'activité, exercice visible d'une tâche professionnelle, horaires. Trois conditions encadrent la mission : un motif légitime préexistant, une surveillance limitée dans le temps et ciblée sur le fait à établir, et aucune investigation sur l'état de santé lui-même, qui relève exclusivement du contrôle médical. Sous ces conditions, le rapport est recevable devant le conseil de prud'hommes. Une surveillance permanente ou générale serait, elle, écartée.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  libelleCourt: "Arrêt de travail détourné",
  image: {
    src: "/images/motif-arret-travail.webp",
    alt: "Rue résidentielle vue depuis un véhicule en stationnement, maison aux volets clos en face",
  },
  contenu: [
    { type: "titre2", texte: "La distinction qui décide de tout" },
    {
      type: "paragraphe",
      texte:
        "Il faut séparer deux questions que l'on confond souvent. La première : le salarié est-il réellement malade ? Cette question ne vous appartient pas — elle relève du médecin traitant, du service médical de l'assurance maladie et, si vous le déclenchez, de la contre-visite médicale patronale. La seconde : le salarié exerce-t-il, pendant son arrêt, une activité incompatible avec la loyauté qu'il vous doit ? Celle-là est factuelle, et elle est constatable.",
    },
    {
      type: "encadre",
      titre: "Ce qui fonde une sanction",
      texte:
        "Ce n'est pas l'absence de maladie — que vous ne pouvez pas établir — mais le manquement à l'obligation de loyauté qui subsiste pendant la suspension du contrat. Travailler pour un concurrent, exercer une activité rémunérée non déclarée ou tenir un commerce pendant un arrêt en sont des illustrations classiques.",
    },
    { type: "titre2", texte: "Les trois conditions de la validité" },
    {
      type: "listeOrdonnee",
      items: [
        "**Un motif légitime préexistant.** Vous devez pouvoir expliquer ce qui a éveillé votre soupçon : un signalement, une observation concordante, une incohérence constatée. Une surveillance déclenchée sans motif serait disproportionnée.",
        "**Une atteinte proportionnée.** Les constatations se font dans des lieux ouverts au public, sur une durée limitée, ciblées sur le fait à établir. Pas de surveillance du domicile en continu, pas de suivi de la vie privée.",
        "**Aucune investigation médicale.** Nous ne cherchons ni à savoir de quoi souffre le salarié, ni à obtenir un élément de son dossier de santé. Ce serait illicite et rendrait tout le rapport inexploitable.",
      ],
    },
    { type: "titre2", texte: "Ce qui est constaté, concrètement" },
    {
      type: "tableau",
      entetes: ["Constatation", "Recevable ?", "Précision"],
      lignes: [
        [
          "Présence répétée sur un lieu d'activité professionnelle",
          "Oui",
          "Relevés horodatés sur plusieurs jours, depuis l'espace public",
        ],
        [
          "Exercice visible d'une tâche professionnelle",
          "Oui",
          "Service en salle, livraison, chantier, accueil de clientèle",
        ],
        [
          "Activité déclarée sous un autre statut",
          "Oui",
          "Vérifications documentaires dans des sources légalement accessibles",
        ],
        [
          "Sorties personnelles, courses, loisirs",
          "Non pertinent",
          "Sans lien avec la loyauté due à l'employeur ; hors du champ de la mission",
        ],
        [
          "État de santé, traitement, consultations",
          "Interdit",
          "Relève du seul contrôle médical",
        ],
      ],
      legende:
        "Le rapport rapporte des faits professionnels observables, jamais des éléments de vie privée sans rapport avec l'objet de la mission.",
    },
    { type: "titre2", texte: "Ce que le rapport permet ensuite" },
    {
      type: "paragraphe",
      texte:
        "Les constatations vous donnent une base factuelle pour engager une procédure disciplinaire, et le rapport peut être produit devant le conseil de prud'hommes si le salarié conteste. Sa force tient à sa précision : des faits datés et horodatés, accompagnés de leurs supports, pèsent autrement qu'un récit général.",
    },
    {
      type: "paragraphe",
      texte:
        "Les conditions de recevabilité sont développées sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/). Nous vous recommandons de faire valider le cadre par votre conseil avant d'engager la mission : c'est le meilleur moyen d'éviter qu'un dossier solide sur le fond soit écarté sur la forme.",
    },
    { type: "titre2", texte: "Durée et dimensionnement" },
    {
      type: "paragraphe",
      texte:
        "Une activité régulière — un commerce tenu, un poste occupé chez un tiers — se constate en quelques vacations d'observation réparties sur des jours différents. Une activité occasionnelle en demande davantage. Nous cadrons ensemble une durée et un budget maximum avant de commencer, et nous faisons un point d'étape : si les premières vacations n'établissent rien, poursuivre n'a pas de sens.",
    },
    {
      type: "paragraphe",
      texte:
        "Le principe des vacations et les moyens engagés sont expliqués sur notre page [filature et surveillance à Toulouse](/filature-surveillance-toulouse/) ; le fonctionnement financier sur la page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "La frontière que l'employeur ne peut pas franchir" },
    {
      type: "paragraphe",
      texte:
        "Un employeur ne contrôle jamais l'état de santé d'un salarié : le diagnostic, la durée de l'arrêt et son bien-fondé médical relèvent du médecin, et le cas échéant du service médical de l'assurance maladie ou d'une contre-visite médicale diligentée dans le cadre prévu par la loi. Chercher à connaître la pathologie d'un salarié serait une atteinte au secret médical.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce qui peut être constaté, c'est un fait extérieur et matériel : l'exercice d'une activité pendant la période d'arrêt. La nuance paraît fine, elle est décisive. Nous n'établissons pas qu'un salarié n'était pas malade ; nous établissons qu'il tenait un commerce, travaillait sur un chantier ou exerçait pour un concurrent tel jour, à telle heure, à tel endroit ouvert au public.",
    },
    { type: "titre2", texte: "Ce qui caractérise la faute, et ce qui ne la caractérise pas" },
    {
      type: "tableau",
      entetes: ["Fait constaté", "Fautif ?", "Pourquoi"],
      lignes: [
        [
          "Activité professionnelle rémunérée pendant l'arrêt",
          "Oui, en principe",
          "Manquement à l'obligation de loyauté, et préjudice pour l'employeur",
        ],
        [
          "Travail pour une entreprise concurrente",
          "Oui",
          "Cumule déloyauté et concurrence pendant l'exécution du contrat",
        ],
        [
          "Activité bénévole ou associative",
          "Rarement",
          "Suppose de démontrer un préjudice pour l'employeur",
        ],
        [
          "Sortie, courses, loisirs, vacances",
          "Non",
          "Relève de la vie privée ; seules les heures de sortie autorisées concernent l'assurance maladie",
        ],
        [
          "Aide ponctuelle à un proche",
          "Non en soi",
          "Ne devient un sujet que si elle prend la forme d'une activité régulière",
        ],
      ],
      legende:
        "Un rapport honnête distingue ces cas. Un rapport qui présenterait une sortie ordinaire comme une preuve de fraude se retournerait immédiatement contre l'employeur.",
    },
    { type: "titre2", texte: "Le délai qui commande toute la procédure" },
    {
      type: "paragraphe",
      texte:
        "Comme pour toute sanction disciplinaire, l'employeur dispose d'un délai court à compter de la connaissance exacte des faits pour engager la procédure. Engager l'enquête vite, la mener sans traîner et agir dès le rapport remis fait donc partie de la stratégie, au même titre que la qualité des constatations. C'est un point à caler avec votre avocat avant même de nous saisir.",
    },
    { type: "titre2", texte: "Devant le conseil de prud'hommes de Toulouse" },
    {
      type: "paragraphe",
      texte:
        "Si le salarié conteste son licenciement, c'est là que le rapport sera discuté, et il le sera contradictoirement : le salarié y répondra, expliquera, produira ses propres pièces. Un rapport qui résiste à cette discussion est un rapport factuel, daté, limité à quelques journées ciblées et exempt de toute appréciation sur la personne. C'est la seule manière de rédiger que nous pratiquions — et c'est aussi ce qui explique nos refus quand la demande sort de ce cadre.",
    },
    {
      type: "paragraphe",
      texte:
        "Sur la façon dont un juge apprécie ce type de pièce, voyez [la recevabilité du rapport en justice](/rapport-detective-prive-preuve-justice/) ; sur le budget, [nos tarifs](/tarifs-detective-prive-toulouse/), une surveillance de ce type se comptant en vacations d'observation à partir de 480 € TTC.",
    },
  ],
  faq: [
    {
      question: "Ai-je le droit de faire surveiller un salarié en arrêt ?",
      reponse:
        "Vous pouvez faire réaliser une enquête par une agence autorisée si vous avez un motif légitime préexistant et si la surveillance reste proportionnée : lieux ouverts au public, durée limitée, ciblée sur le fait à établir. Une surveillance générale et permanente de la vie privée d'un salarié serait illicite et le rapport écarté.",
    },
    {
      question: "Le salarié doit-il être informé ?",
      reponse:
        "Non, pas préalablement : une enquête annoncée n'établirait rien. Le salarié en prend connaissance lorsque le rapport lui est opposé dans la procédure disciplinaire ou devant le conseil de prud'hommes, où il peut le discuter contradictoirement.",
    },
    {
      question: "Puis-je vérifier si l'arrêt est justifié médicalement ?",
      reponse:
        "Pas par une enquête privée. Le contrôle de la réalité de l'état de santé passe par la contre-visite médicale patronale ou par le service médical de l'assurance maladie. Notre mission porte exclusivement sur l'existence d'une activité incompatible avec la loyauté due pendant la suspension du contrat.",
    },
    {
      question: "Et si l'enquête n'établit rien ?",
      reponse:
        "C'est un résultat, et il vaut mieux le connaître avant d'engager une procédure. Nous vous le disons après les premières vacations plutôt que de prolonger la mission. Un licenciement fondé sur une suspicion non établie coûte bien plus cher qu'une enquête arrêtée à temps.",
    },
    {
      question: "Puis-je envoyer quelqu'un vérifier au domicile du salarié ?",
      reponse:
        "Non. Le domicile est un lieu privé : rien de ce qui s'y passe ne peut être observé, et une visite sur place par un membre de l'entreprise constituerait une atteinte à la vie privée doublée d'un risque de harcèlement. Seule une contre-visite médicale, dans le cadre légal prévu, permet un contrôle au domicile — et elle est réalisée par un médecin, pas par nous.",
    },
    {
      question: "Le salarié peut-il obtenir des dommages-intérêts pour la surveillance elle-même ?",
      reponse:
        "Si la surveillance a été disproportionnée — permanente, intrusive, menée sans motif légitime préexistant — oui, et l'employeur peut être condamné de ce seul chef, indépendamment de ce qui a été découvert. C'est la raison pour laquelle nous limitons les constatations à quelques journées ciblées et aux seuls lieux ouverts au public.",
    },
  ],
  motifsLies: ["enquete-concurrence-deloyale-entreprise", "enquete-vol-interne-detournement-entreprise"],
};
