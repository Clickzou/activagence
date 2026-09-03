import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "enquete-solvabilite-recouvrement-toulouse",
  titre: "Enquête de solvabilité et recouvrement à Toulouse",
  metaTitre: "Enquête de solvabilité et recouvrement à Toulouse",
  metaDescription:
    "Débiteur introuvable, jugement inexécuté, client douteux : identifier à Toulouse les actifs et l'employeur pour rendre une saisie possible.",
  chapo:
    "Un jugement qui condamne quelqu'un à vous payer ne vaut rien si l'on ignore où il travaille et ce qu'il possède. C'est ce qui manque presque toujours.",
  essentiel:
    "Obtenir une condamnation est une chose ; se faire payer en est une autre. Une mesure d'exécution ne peut porter que sur ce que l'on a identifié : un employeur pour une saisie sur rémunération, un compte pour une saisie-attribution, un bien pour une saisie-vente. Activ'Agence conduit à Toulouse des enquêtes de solvabilité qui rendent l'exécution possible : localisation du débiteur, identification de son employeur, recherche de biens mobiliers et immobiliers, vérification de l'existence réelle d'une activité. Ces recherches se mènent exclusivement dans des sources légalement accessibles et par constatations de terrain. En amont, la même méthode sert à vérifier la surface financière d'un client ou d'un partenaire avant de s'engager — un contrôle bien moins coûteux que le recouvrement qu'il évite.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  libelleCourt: "Solvabilité et recouvrement",
  image: {
    src: "/images/motif-solvabilite.webp",
    alt: "Bureau comptable : calculatrice, factures impayées empilées dans un parapheur et registre fermé",
  },
  contenu: [
    { type: "titre2", texte: "Deux moments, deux usages" },
    { type: "titre3", texte: "Avant de s'engager" },
    {
      type: "paragraphe",
      texte:
        "Vérifier la surface financière d'un futur client, d'un fournisseur ou d'un partenaire avant de signer. Existence réelle de l'activité, ancienneté, dirigeants, éventuelles procédures en cours : ce qui n'apparaît pas dans un extrait Kbis mais qui change la décision. C'est la vérification la moins chère du dossier, et celle qui évite le reste.",
    },
    { type: "titre3", texte: "Après l'impayé" },
    {
      type: "paragraphe",
      texte:
        "Le débiteur ne répond plus, a changé d'adresse, ou déclare n'avoir rien. Il faut alors identifier ce sur quoi une mesure d'exécution pourra porter. Sans cette information, un jugement reste une feuille de papier — et la plupart des créances abandonnées le sont pour cette raison, pas faute de droit.",
    },
    { type: "titre2", texte: "Ce qu'il faut identifier pour exécuter" },
    {
      type: "tableau",
      entetes: ["Mesure envisagée", "Information nécessaire", "Recherche"],
      lignes: [
        [
          "Saisie sur rémunération",
          "L'employeur actuel",
          "Localisation du débiteur puis identification de son activité professionnelle",
        ],
        [
          "Saisie-vente",
          "Adresse réelle et biens présents",
          "Constatations de terrain sur le lieu de vie effectif",
        ],
        [
          "Saisie immobilière",
          "Biens détenus",
          "Recherches documentaires sur le patrimoine immobilier",
        ],
        [
          "Action contre une société",
          "Existence réelle, actifs, dirigeants",
          "Vérifications sur la structure et son activité effective",
        ],
        [
          "Saisie-attribution sur compte",
          "L'établissement bancaire",
          "Relève de l'huissier de justice, qui dispose d'un accès dédié",
        ],
      ],
      legende:
        "Nous intervenons en complément de l'huissier : il dispose de moyens propres pour certaines recherches, nous prenons le terrain et la localisation.",
    },
    {
      type: "encadre",
      titre: "Ce que nous ne pouvons pas faire",
      texte:
        "Nous n'avons aucun accès aux comptes bancaires, aux soldes, ni aux fichiers fiscaux. Ces informations relèvent de l'huissier de justice dans le cadre d'une procédure d'exécution, ou d'une décision de justice. Une agence qui vous les promettrait vous exposerait, et le résultat serait inexploitable.",
    },
    { type: "titre2", texte: "L'articulation avec l'huissier" },
    {
      type: "paragraphe",
      texte:
        "C'est un point souvent mal compris, et il détermine l'efficacité du dossier. Le commissaire de justice dispose de prérogatives légales pour interroger certains fichiers, notamment sur les comptes bancaires. Ce dont il ne dispose pas, c'est du terrain : savoir où la personne vit réellement, si elle travaille et où, ce qu'elle possède visiblement.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est exactement là que nous intervenons. Une créance bloquée depuis des mois se débloque souvent avec deux informations : une adresse réelle et un employeur. Nous travaillons volontiers en lien direct avec l'étude chargée de l'exécution, avec votre accord. La répartition précise des rôles est détaillée dans notre article [détective, commissaire de justice ou avocat : qui fait quoi](/blog/detective-huissier-avocat-qui-fait-quoi/).",
    },
    { type: "titre2", texte: "Quand la recherche n'a pas de sens" },
    {
      type: "paragraphe",
      texte:
        "Nous vous le dirons franchement plutôt que d'encaisser un devis : si le débiteur est manifestement insolvable, si le montant de la créance est inférieur au coût des recherches et de l'exécution, ou si la prescription approche, une enquête ne se justifie pas. Une mission qui ne peut rien rapporter n'a pas à être vendue.",
    },
    {
      type: "paragraphe",
      texte:
        "À l'inverse, sur des créances significatives ou en série, la démarche est presque toujours rentable. Ces recherches reposent principalement sur du temps d'analyse et des vérifications ciblées, non sur des vacations d'observation : voyez notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/) pour le fonctionnement du devis.",
    },
    {
      type: "paragraphe",
      texte:
        "Lorsque le débiteur est un particulier introuvable, la mission relève de notre page [recherche de personne et de débiteur](/recherche-de-personne-debiteur-toulouse/). Si l'impayé s'accompagne de soupçons d'organisation d'insolvabilité par une société écran, voyez [concurrence déloyale et structures liées](/enquete-concurrence-deloyale-entreprise/).",
    },
    { type: "titre2", texte: "Devant quelle juridiction votre dossier ira" },
    {
      type: "paragraphe",
      texte:
        "La question paraît lointaine au moment où l'on cherche simplement à savoir si un débiteur peut payer. Elle ne l'est pas : la juridiction compétente détermine la procédure, les délais et le type d'éléments qu'il faudra produire. À Toulouse, un litige entre deux commerçants ou deux sociétés relève du tribunal de commerce ; un litige impliquant un particulier, du tribunal judiciaire. L'appel se porte devant la cour d'appel de Toulouse dans les deux cas.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette distinction a une conséquence pratique pour l'enquête : devant le tribunal de commerce, l'existence réelle de l'activité et la surface financière apparente pèsent lourd ; devant le tribunal judiciaire, ce sont plutôt les éléments de train de vie et de résidence effective. Nous adaptons les constatations à la juridiction visée, ce qui suppose de la connaître avant de commencer.",
    },
    { type: "titre2", texte: "Les trois situations qui reviennent le plus" },
    { type: "titre3", texte: "La créance impayée entre entreprises" },
    {
      type: "paragraphe",
      texte:
        "Un client cesse de payer, les relances restent sans réponse, le téléphone ne répond plus. Avant d'engager une injonction de payer ou une assignation, la vraie question est de savoir si la société existe encore, si elle exerce toujours, et si elle a de quoi honorer la dette. Une société radiée ou en liquidation change entièrement la stratégie — et l'on préfère le savoir avant d'avoir payé des frais de procédure.",
    },
    { type: "titre3", texte: "Le jugement obtenu mais inexécuté" },
    {
      type: "paragraphe",
      texte:
        "C'est le cas le plus frustrant : vous avez gagné, le titre exécutoire est là, et le commissaire de justice revient bredouille. Le débiteur n'a pas disparu, il n'a simplement rien de saisissable à l'adresse connue. L'enquête cherche alors ce qui existe ailleurs : une activité exercée sous un autre nom, un bien détenu via une société civile, un employeur permettant une saisie sur rémunération.",
    },
    { type: "titre3", texte: "La vérification avant d'accorder un encours" },
    {
      type: "paragraphe",
      texte:
        "Un nouveau client demande des conditions de paiement inhabituelles dès la première commande. Une vérification de quelques jours coûte une fraction de l'encours demandé, et se double utilement d'un [renseignement sur la société elle-même](/renseignement-partenaire-concurrent-toulouse/) : dirigeants, historique, réalité de l'exploitation.",
    },
    { type: "titre2", texte: "Ce qui fait échouer un recouvrement" },
    {
      type: "liste",
      items: [
        "**Attendre trop longtemps.** Une créance de six mois se recouvre bien mieux qu'une créance de trois ans : le débiteur en difficulté organise progressivement son insolvabilité, et les prescriptions courent.",
        "**Poursuivre la mauvaise entité.** Le nom commercial n'est pas la raison sociale ; le dirigeant n'est pas la société. Une assignation dirigée contre la mauvaise personne se solde par une irrecevabilité et des frais perdus.",
        "**Ignorer une procédure collective en cours.** Une fois la procédure ouverte, les poursuites individuelles sont suspendues et la créance doit être déclarée dans les délais, faute de quoi elle devient inopposable.",
        "**Se fier à une adresse ancienne.** C'est la cause d'échec la plus banale : le débiteur a déménagé, l'acte n'a jamais été délivré, et la procédure s'enlise. Voir [la recherche de personne et de débiteur](/recherche-de-personne-debiteur-toulouse/).",
      ],
    },
    { type: "titre2", texte: "Combien de temps, pour quel budget" },
    {
      type: "paragraphe",
      texte:
        "Une vérification de solvabilité se règle en général en quelques jours ouvrés : elle repose sur du temps d'analyse et sur l'accès à des sources d'information légales, non sur des vacations de terrain. C'est l'une de nos prestations les moins coûteuses, et elle démarre à 490 € TTC — le détail figure sur [nos tarifs](/tarifs-detective-prive-toulouse/).",
    },
    {
      type: "paragraphe",
      texte:
        "Lorsque des constatations sur place sont nécessaires — vérifier qu'un local est réellement exploité, qu'un matériel s'y trouve, qu'une activité y est exercée —, comptez quelques jours de plus et un budget qui suit le nombre de déplacements. Nous vous disons lequel des deux volets votre dossier appelle avant d'engager quoi que ce soit.",
    },
  ],
  faq: [
    {
      question: "Pouvez-vous me dire combien il y a sur le compte du débiteur ?",
      reponse:
        "Non. Les soldes bancaires ne sont accessibles ni à nous ni à vous : c'est le commissaire de justice qui, dans le cadre d'une procédure d'exécution, peut interroger le fichier dédié. Nous identifions ce qui est constatable : adresse réelle, employeur, biens visibles, activité.",
    },
    {
      question: "Est-ce utile si j'ai déjà un jugement ?",
      reponse:
        "C'est même le cas le plus fréquent. Un jugement ne s'exécute que sur ce qui a été identifié. Beaucoup de créances sont abandonnées non par manque de droit, mais parce que personne ne sait où le débiteur travaille ni ce qu'il possède.",
    },
    {
      question: "Faut-il attendre l'impayé pour faire une vérification ?",
      reponse:
        "Non, et c'est même l'inverse qui est rentable. Une vérification de surface financière avant de s'engager coûte une fraction de ce que coûte un recouvrement. Sur des engagements importants ou des clients nouveaux, elle se rentabilise vite.",
    },
    {
      question: "Combien de temps prend une enquête de solvabilité ?",
      reponse:
        "Les vérifications documentaires aboutissent souvent en quelques jours. La localisation d'un débiteur qui a déménagé demande davantage de temps, selon la qualité des éléments de départ. Nous évaluons gratuitement le réalisme de la démarche avant de commencer.",
    },
    {
      question: "Une enquête de solvabilité est-elle légale sans l'accord du débiteur ?",
      reponse:
        "Oui, dès lors que vous justifiez d'un intérêt légitime — une créance, un litige, un engagement en cours — et que les informations sont obtenues par des sources légales ou des constatations dans des lieux ouverts au public. Le débiteur n'a pas à être informé, et il n'aurait aucun intérêt à l'être.",
    },
    {
      question: "Que se passe-t-il si le débiteur est en liquidation judiciaire ?",
      reponse:
        "Les poursuites individuelles sont suspendues et votre créance doit être déclarée auprès du mandataire dans le délai imparti, sous peine de ne plus pouvoir être réclamée. Notre rapport signale systématiquement une procédure collective en cours : c'est une information qui change immédiatement la marche à suivre, et votre avocat doit la connaître sans délai.",
    },
  ],
  motifsLies: ["recherche-de-personne-debiteur-toulouse", "enquete-concurrence-deloyale-entreprise"],
};
