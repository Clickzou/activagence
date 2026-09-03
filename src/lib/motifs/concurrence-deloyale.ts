import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "enquete-concurrence-deloyale-entreprise",
  titre: "Concurrence déloyale et détournement de clientèle : l'enquête à Toulouse",
  metaTitre: "Concurrence déloyale : enquête et preuve à Toulouse",
  metaDescription:
    "Débauchage, détournement de clientèle, clause de non-concurrence violée : réunir à Toulouse des preuves opposables au tribunal de commerce.",
  chapo:
    "En matière de concurrence déloyale, tout le monde sait ce qui se passe et personne ne peut le prouver. C'est précisément le problème que l'enquête résout.",
  essentiel:
    "La concurrence déloyale se joue rarement au grand jour : un ancien salarié qui emporte un fichier clients, une société créée en parallèle pendant un préavis, une clause de non-concurrence contournée par personne interposée, un réseau de revente hors circuit officiel. Activ'Agence réunit à Toulouse les éléments matériels qui permettent d'agir : constatations de terrain sur les lieux d'activité, vérifications documentaires sur les structures et leurs dirigeants, identification des liens entre les personnes concernées. Le rapport est rédigé pour être produit devant le tribunal de commerce, à l'appui d'une action en concurrence déloyale ou d'une demande de mesure d'instruction. Le premier échange est gratuit et permet de dire ce qui est établissable — et ce qui ne l'est pas.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  libelleCourt: "Concurrence déloyale",
  image: {
    src: "/images/motif-concurrence-deloyale.webp",
    alt: "Deux locaux d'activité mitoyens dans une zone artisanale, rideaux métalliques entrouverts",
  },
  contenu: [
    { type: "titre2", texte: "Quatre configurations que nous traitons régulièrement" },
    {
      type: "titre3",
      texte: "Le détournement de clientèle",
    },
    {
      type: "paragraphe",
      texte:
        "Un ancien collaborateur, parfois encore en poste, démarche vos clients pour son compte ou celui d'un concurrent. Ce qui se constate : les visites effectives chez vos clients, la présence sur les mêmes salons, l'exercice d'une activité identique dans le même secteur géographique.",
    },
    { type: "titre3", texte: "La société créée en parallèle" },
    {
      type: "paragraphe",
      texte:
        "Une structure est immatriculée pendant que le salarié est encore chez vous, souvent au nom d'un proche. Les vérifications documentaires sur les sociétés et leurs dirigeants, croisées avec des constatations de terrain, permettent d'établir le lien réel entre la personne et la structure.",
    },
    { type: "titre3", texte: "La clause de non-concurrence contournée" },
    {
      type: "paragraphe",
      texte:
        "L'ancien salarié respecte la lettre de la clause mais exerce en réalité l'activité interdite, sous un autre statut ou par personne interposée. C'est la configuration la plus fréquente, et celle où la constatation de terrain fait toute la différence : ce n'est pas ce qui est déclaré qui compte, c'est ce qui est fait.",
    },
    { type: "titre3", texte: "Les circuits parallèles" },
    {
      type: "paragraphe",
      texte:
        "Vos produits sont revendus hors réseau, parfois par un distributeur agréé. Les constatations portent sur les points de vente, les volumes visibles et la traçabilité des approvisionnements. Cette configuration recoupe souvent la contrefaçon, traitée dans le même cadre.",
    },
    { type: "titre2", texte: "Ce qui fait la différence dans un dossier" },
    {
      type: "tableau",
      entetes: ["Élément", "Valeur probatoire", "Comment il s'obtient"],
      lignes: [
        [
          "Constatations de terrain répétées",
          "Forte",
          "Vacations d'observation datées sur les lieux d'activité",
        ],
        [
          "Lien entre une personne et une structure",
          "Forte",
          "Recoupement de sources légalement accessibles sur les sociétés",
        ],
        [
          "Témoignages de clients démarchés",
          "Forte",
          "Recueillis par votre avocat, dans les formes de l'article 202 du CPC",
        ],
        [
          "Constat d'huissier sur un site ou une vitrine",
          "Forte",
          "Complémentaire de l'enquête, souvent décisif",
        ],
        [
          "Documents internes emportés",
          "Variable",
          "Leur mode d'obtention conditionne tout : voir plus bas",
        ],
      ],
      legende:
        "Une enquête privée s'articule presque toujours avec d'autres modes de preuve. Nous vous disons lequel est le plus adapté à votre situation.",
    },
    { type: "titre2", texte: "Le piège à éviter absolument" },
    {
      type: "avertissement",
      titre: "Ne fouillez pas la messagerie de votre ancien salarié",
      texte:
        "C'est le réflexe le plus fréquent, et le plus coûteux. Accéder à la messagerie personnelle d'un salarié, consulter des fichiers identifiés comme personnels ou récupérer des données sur son matériel privé expose l'employeur et fait écarter la preuve. Les éléments professionnels laissés sur le matériel de l'entreprise obéissent, eux, à des règles précises : faites-les valider par votre conseil avant de les produire.",
    },
    {
      type: "paragraphe",
      texte:
        "Le cadre général de ce qui rend une preuve utilisable est développé sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "Agir vite, et dans le bon ordre" },
    {
      type: "listeOrdonnee",
      items: [
        "Faites le point avec votre avocat sur le fondement envisagé : concurrence déloyale, violation d'une clause, parasitisme. Chacun appelle des faits différents.",
        "Engagez les constatations avant que la situation ne se stabilise : une activité qui s'installe devient plus discrète, et les premières semaines sont souvent les plus révélatrices.",
        "Rassemblez ce que vous détenez légitimement : contrats, courriers, échanges professionnels, éléments de facturation.",
        "Faites établir les constatations de terrain, puis confiez le tout à votre conseil pour décider de la suite — mise en demeure, référé, action au fond.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le dimensionnement de la mission dépend de ce qu'il faut établir : quelques vacations pour constater une activité régulière, davantage pour documenter un démarchage. Le principe est expliqué sur notre page [filature et surveillance à Toulouse](/filature-surveillance-toulouse/), le budget sur la page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
    {
      type: "paragraphe",
      texte:
        "Pour aller plus loin : notre article [débauchage de salariés : la frontière entre concurrence et faute](/blog/debauchage-salaries-concurrence-ou-faute/) situe précisément la limite entre recrutement licite et désorganisation fautive, et notre article [vol interne : constituer un dossier sans fragiliser la procédure](/blog/vol-interne-constituer-un-dossier/) s'applique lorsque des éléments matériels ont quitté l'entreprise avec le salarié.",
    },
    { type: "titre2", texte: "Devant quelle juridiction, et avec quel délai" },
    {
      type: "paragraphe",
      texte:
        "À Toulouse, une action en concurrence déloyale entre sociétés se porte devant le tribunal de commerce ; lorsqu'elle vise un ancien salarié en tant que tel, c'est le conseil de prud'hommes qui connaît du contentieux du contrat de travail. Beaucoup de dossiers empruntent les deux voies en parallèle : l'une contre la société concurrente, l'autre contre le salarié parti.",
    },
    {
      type: "paragraphe",
      texte:
        "Le calendrier compte autant que la juridiction. Plus les faits sont anciens, plus ils sont difficiles à établir : les traces s'effacent, les témoins changent d'employeur, et la faiblesse de votre réaction sera opposée à votre demande de mesures d'urgence. Un dossier monté dans les semaines qui suivent les premiers signaux vaut mieux qu'un dossier parfait construit un an plus tard.",
    },
    { type: "titre2", texte: "Les signaux qui précèdent presque toujours les faits" },
    {
      type: "liste",
      items: [
        "**Des départs rapprochés** dans une même équipe, surtout lorsqu'ils concernent des commerciaux ou des techniciens détenant le savoir-faire.",
        "**Des clients historiques qui ne renouvellent pas**, sans motif clair, dans une période resserrée.",
        "**Des consultations inhabituelles** du fichier clients ou des documents tarifaires dans les semaines précédant un départ.",
        "**Une société créée récemment** dont l'objet recoupe le vôtre, immatriculée par un proche d'un salarié en poste ou récemment parti.",
        "**Des prix impossibles à tenir** proposés par un concurrent sur vos propres appels d'offres, à des conditions qui supposent de connaître les vôtres.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Aucun de ces signaux ne constitue une preuve, et chacun peut avoir une explication banale. Leur accumulation, en revanche, justifie de vérifier — et c'est exactement le rôle d'une enquête : transformer un faisceau d'impressions en constatations datées, ou établir qu'il n'y a rien.",
    },
    { type: "titre2", texte: "Ce que le juge attend, concrètement" },
    {
      type: "paragraphe",
      texte:
        "La concurrence est libre : démarcher les clients de son ancien employeur n'est pas fautif en soi. Ce qui est sanctionné, c'est le procédé déloyal — le détournement de fichier, le dénigrement, la confusion entretenue, le débauchage désorganisant l'entreprise, ou la violation d'une clause de non-concurrence valable. Le juge cherche donc des faits précis, datés, imputables à une personne identifiée.",
    },
    {
      type: "paragraphe",
      texte:
        "Il examine ensuite le préjudice. Une perte de chiffre d'affaires documentée, des clients nommément partis, un devis identique au vôtre retrouvé chez un concurrent : ce sont ces éléments matériels qui font la différence entre une action gagnée et une action rejetée faute de preuve. Sur la valeur probatoire du rapport, voyez [la recevabilité en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "Ce que coûte une enquête de ce type" },
    {
      type: "paragraphe",
      texte:
        "Elle combine presque toujours deux volets : un volet documentaire — identification des sociétés créées, des dirigeants, des liens entre les acteurs — et un volet de terrain, en vacations d'observation, qui démarre à 480 € TTC la vacation. Le nombre de vacations dépend de ce qu'il faut établir : un fait unique se constate en une ou deux, une pratique répétée en demande davantage. Le mode de calcul est détaillé sur [nos tarifs](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Puis-je faire surveiller un ancien salarié ?",
      reponse:
        "Vous pouvez faire constater l'exercice d'une activité concurrente dans des lieux ouverts au public, si vous avez un motif légitime — une clause de non-concurrence, un soupçon étayé de détournement — et si la surveillance reste proportionnée et ciblée. Une surveillance générale de sa vie privée serait illicite.",
    },
    {
      question: "Le rapport suffit-il à gagner devant le tribunal de commerce ?",
      reponse:
        "Il apporte des faits ; c'est votre avocat qui construit la démonstration juridique du préjudice et du lien de causalité. En pratique, un dossier solide combine les constatations, des témoignages de clients recueillis dans les formes, et parfois un constat d'huissier.",
    },
    {
      question: "Combien de temps faut-il pour réunir des éléments ?",
      reponse:
        "Les vérifications documentaires sur les structures aboutissent souvent en quelques jours. Les constatations de terrain demandent plusieurs vacations réparties sur des jours différents, pour établir une régularité plutôt qu'un fait isolé.",
    },
    {
      question: "Que faire si l'activité concurrente est à l'étranger ?",
      reponse:
        "Nous vous le dirons franchement : au-delà d'un certain éloignement, l'efficacité d'une mission de terrain diminue et le coût augmente. Selon les cas, les vérifications documentaires restent possibles, ou une autre voie est préférable.",
    },
    {
      question: "Faut-il une clause de non-concurrence pour agir ?",
      reponse:
        "Non. La clause facilite l'action, mais son absence n'autorise pas tout : l'obligation de loyauté s'impose pendant le contrat, et les procédés déloyaux — détournement de fichier, dénigrement, confusion — restent fautifs après le départ, clause ou pas. En revanche, sans clause, le simple fait de travailler pour un concurrent n'est pas répréhensible.",
    },
    {
      question: "Peut-on agir contre la société concurrente et contre l'ancien salarié ?",
      reponse:
        "Oui, et c'est fréquent : l'action contre la société relève du tribunal de commerce, celle contre le salarié du conseil de prud'hommes. Les deux se nourrissent des mêmes constatations. Votre avocat décidera de l'ordre et de l'opportunité de chaque action ; notre rapport sert dans les deux procédures.",
    },
  ],
  motifsLies: ["enquete-vol-interne-detournement-entreprise", "enquete-pre-embauche-verification"],
};
