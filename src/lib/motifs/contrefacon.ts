import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "enquete-contrefacon-toulouse",
  titre: "Contrefaçon et circuits parallèles : l'enquête à Toulouse",
  metaTitre: "Enquête contrefaçon et circuits parallèles à Toulouse",
  metaDescription:
    "Identifier à Toulouse la source d'une contrefaçon ou d'un circuit parallèle, constater les faits et préparer la saisie-contrefaçon avec votre avocat.",
  chapo:
    "Sur un produit contrefait, la difficulté n'est presque jamais de constater la copie. C'est de remonter à celui qui la fabrique, l'importe ou la revend — et de le prouver.",
  essentiel:
    "Une contrefaçon ou un circuit parallèle se combat sur deux terrains : établir la matérialité des faits, puis identifier les acteurs de la chaîne. Activ'Agence intervient depuis Toulouse sur les deux volets : achats témoins documentés, constatations datées dans les points de vente et sur les places de marché en ligne, identification des revendeurs, observation des flux logistiques depuis des lieux ouverts au public, recherche des sociétés et dirigeants impliqués. Nos constatations sont réunies dans un rapport horodaté, destiné à votre avocat : elles servent à motiver une requête en saisie-contrefaçon, à alimenter une action en concurrence déloyale ou à obtenir le retrait d'offres en ligne. Nous n'exécutons pas la saisie-contrefaçon elle-même : elle relève du commissaire de justice, sur autorisation d'un juge.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  libelleCourt: "Contrefaçon et circuits parallèles",
  image: {
    src: "/images/motif-contrefacon.webp",
    alt: "Allée d'entrepôt logistique, cartons neutres empilés sur palettes et l'un d'eux ouvert",
  },
  contenu: [
    { type: "titre2", texte: "Trois situations, trois enquêtes différentes" },
    {
      type: "paragraphe",
      texte:
        "La contrefaçon proprement dite : un tiers fabrique ou vend un produit reproduisant votre marque, votre modèle ou votre brevet. L'enjeu de l'enquête est d'établir l'offre à la vente, d'en conserver la trace et de remonter la chaîne.",
    },
    {
      type: "paragraphe",
      texte:
        "Le circuit parallèle : ce sont vos propres produits, authentiques, mais écoulés hors du réseau que vous avez organisé — export non autorisé, déstockage par un distributeur agréé, revente en ligne à prix cassé. Le travail consiste à identifier la fuite dans votre propre réseau.",
    },
    {
      type: "paragraphe",
      texte:
        "Le détournement de clientèle par un ancien salarié ou un partenaire relève, lui, de la [concurrence déloyale](/enquete-concurrence-deloyale-entreprise/) : les faits à établir et les fondements juridiques n'y sont pas les mêmes.",
    },
    { type: "titre2", texte: "Ce que nous établissons" },
    {
      type: "liste",
      items: [
        "**L'offre à la vente** : constatation datée du produit proposé, en boutique, sur un marché, sur une place de marché en ligne ou dans un salon professionnel.",
        "**L'achat témoin** : acquisition d'un exemplaire, conservé sous scellé avec sa facture, son emballage et sa traçabilité d'expédition.",
        "**L'identification du vendeur** : société réellement derrière une enseigne ou un compte marchand, dirigeants, adresse d'exploitation, autres comptes exploités.",
        "**La chaîne d'approvisionnement** : livraisons observées, entrepôts utilisés, transporteurs, en restant sur la voie publique.",
        "**L'ampleur apparente** : nombre de points de vente, volumes visibles, récurrence des offres dans le temps.",
      ],
    },
    {
      type: "encadre",
      titre: "Pourquoi l'achat témoin est décisif",
      texte:
        "Une capture d'écran d'annonce disparaît avec l'annonce. Un exemplaire acheté, payé, facturé et conservé avec son emballage d'expédition matérialise à la fois l'offre, la vente, le vendeur et le circuit d'acheminement. C'est la pièce qui tient dans la durée.",
    },
    { type: "titre2", texte: "Notre place à côté de votre avocat" },
    {
      type: "paragraphe",
      texte:
        "La saisie-contrefaçon est une mesure judiciaire : votre avocat présente une requête, le juge l'autorise, un commissaire de justice l'exécute. Elle est redoutablement efficace, mais elle suppose une requête motivée et un lieu correctement identifié — sans quoi elle échoue et peut se retourner contre vous.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est précisément là que notre travail sert : fournir les éléments factuels qui permettent de désigner le bon lieu, le bon jour, la bonne société. Nous intervenons en amont de la mesure ; nous ne l'exécutons pas et nous ne remplaçons pas le commissaire de justice.",
    },
    {
      type: "avertissement",
      titre: "Ce que nous refusons",
      texte:
        "Nous ne pénétrons pas dans un entrepôt, nous ne nous présentons pas comme un client sous une fausse identité d'entreprise pour obtenir des documents internes, et nous n'accédons à aucun système informatique. Une preuve obtenue ainsi serait écartée et exposerait pénalement votre société, qui a commandé la mission.",
    },
    { type: "titre2", texte: "Ce que vous recevez" },
    {
      type: "listeOrdonnee",
      items: [
        "Un rapport de constatations daté et horodaté, décrivant chaque opération dans l'ordre où elle s'est déroulée.",
        "Les pièces matérielles : exemplaires achetés, factures, emballages, relevés d'annonces avec leur date de constatation.",
        "L'identification documentée des acteurs, avec les sources qui l'établissent.",
        "Une synthèse des zones d'ombre, pour que votre conseil sache ce que la requête peut affirmer et ce qu'elle doit se contenter d'indiquer.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "La valeur de ces pièces devant un tribunal est expliquée sur notre page [la recevabilité du rapport en justice](/rapport-detective-prive-preuve-justice/). Si votre besoin porte sur la protection ou la vie d'un titre — dépôt, usage, cession, notoriété —, voyez plutôt notre page [marques et modèles](/enquete-marques-modeles-toulouse/).",
    },
    { type: "titre2", texte: "Devant quelle juridiction, et dans quel délai" },
    {
      type: "paragraphe",
      texte:
        "Le contentieux de la contrefaçon de marques, dessins et modèles est concentré devant quelques tribunaux judiciaires spécialisés : pour un litige toulousain, il ne se plaidera donc pas nécessairement à Toulouse, et votre avocat vous dira lequel est compétent. En revanche, les constatations, elles, se font là où les produits circulent — et c'est souvent ici.",
    },
    {
      type: "paragraphe",
      texte:
        "Le calendrier est déterminant pour une raison propre à cette matière : la saisie-contrefaçon doit être suivie d'une action au fond dans un délai bref, faute de quoi elle est annulée et les pièces saisies deviennent inutilisables. Réunir les éléments avant de déclencher la mesure évite ce piège.",
    },
    { type: "titre2", texte: "Le cas des places de marché en ligne" },
    {
      type: "paragraphe",
      texte:
        "C'est aujourd'hui le canal dominant, et le plus frustrant : l'annonce disparaît, le compte est fermé, un autre rouvre le lendemain. Trois réflexes changent la donne.",
    },
    {
      type: "liste",
      items: [
        "**Constater avant de signaler.** Un signalement fait disparaître l'offre — donc la preuve. On constate d'abord, on signale ensuite.",
        "**Acheter un exemplaire.** L'achat témoin matérialise l'offre, la vente, le vendeur et le circuit d'expédition, là où une capture d'écran ne prouve presque rien.",
        "**Relever les mentions légales du vendeur professionnel** et les informations d'expédition : elles mènent à une société réelle, souvent une entité déjà connue sous d'autres comptes.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Certaines identifications ne s'obtiennent que par voie judiciaire, l'hébergeur ou la place de marché n'ayant aucune obligation de nous répondre. Nous le disons plutôt que de laisser espérer.",
    },
    { type: "titre2", texte: "Évaluer l'ampleur avant de choisir la cible" },
    {
      type: "paragraphe",
      texte:
        "Attaquer le revendeur le plus visible est rarement la bonne stratégie : il est remplaçable, et l'action ne tarit pas la source. Le travail utile consiste à situer chaque acteur dans la chaîne — fabricant, importateur, grossiste, revendeurs — puis à choisir le maillon dont la neutralisation arrête le flux.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette cartographie repose sur des constatations répétées : récurrence des offres, volumes visibles, points de livraison communs, entrepôts utilisés. Elle se recoupe avec l'identification des sociétés et de leurs dirigeants, qui relève du même travail que le [renseignement sur un partenaire ou un concurrent](/renseignement-partenaire-concurrent-toulouse/).",
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "L'établissement de l'offre et l'achat témoin se règlent en quelques jours, sur un budget documentaire. Remonter la chaîne suppose des vacations d'observation, à partir de 480 € TTC l'une — voir [nos tarifs](/tarifs-detective-prive-toulouse/). Nous fixons un budget maximum avec vous avant d'engager cette seconde phase, et nous faisons un point avant de la poursuivre.",
    },
  ],
  faq: [
    {
      question: "Pouvez-vous réaliser la saisie-contrefaçon ?",
      reponse:
        "Non, et personne d'autre qu'un commissaire de justice mandaté par ordonnance ne le peut. Notre rôle est de réunir les éléments qui permettent à votre avocat de présenter une requête motivée et de désigner précisément le lieu et la personne visés.",
    },
    {
      question: "Un achat témoin réalisé par vos soins est-il valable ?",
      reponse:
        "Un achat effectué dans les conditions normales du commerce, documenté et conservé, constitue un élément de preuve régulier. Ce qui poserait problème, c'est un achat obtenu par tromperie sur la qualité de l'acheteur pour accéder à des conditions réservées — nous ne procédons pas ainsi.",
    },
    {
      question: "Comment identifier un vendeur derrière un compte en ligne ?",
      reponse:
        "Par les mentions légales obligatoires du vendeur professionnel, les informations d'expédition, les recoupements entre comptes et, quand c'est nécessaire, une constatation à l'adresse d'expédition. Certaines identifications ne peuvent être obtenues que par voie judiciaire : nous le disons plutôt que de contourner.",
    },
    {
      question: "Combien de temps faut-il pour remonter un circuit ?",
      reponse:
        "L'établissement de l'offre et l'achat témoin se font en quelques jours. Remonter à la source demande davantage : plusieurs semaines lorsqu'il faut observer des livraisons ou recouper des expéditions successives. Nous fixons un budget maximum avec vous avant d'engager cette seconde phase.",
    },
    {
      question: "Faut-il avoir déposé sa marque pour agir ?",
      reponse:
        "L'action en contrefaçon suppose un titre — marque, dessin ou modèle, brevet. Sans titre, il reste l'action en concurrence déloyale, fondée sur le parasitisme ou la confusion, qui obéit à d'autres conditions : c'est l'objet de notre page sur [la concurrence déloyale](/enquete-concurrence-deloyale-entreprise/). Votre conseil en propriété industrielle vous dira ce dont vous disposez.",
    },
    {
      question: "Les douanes peuvent-elles agir à notre place ?",
      reponse:
        "Une demande d'intervention auprès des douanes permet la retenue de marchandises soupçonnées de contrefaçon, et c'est un outil puissant en complément d'une action judiciaire. Elle suppose un titre et une demande formalisée : votre avocat ou votre conseil en propriété industrielle la prépare. Nos constatations servent à documenter le circuit et à cibler les flux.",
    },
  ],
  motifsLies: [
    "enquete-concurrence-deloyale-entreprise",
    "enquete-vol-interne-detournement-entreprise",
  ],
};
