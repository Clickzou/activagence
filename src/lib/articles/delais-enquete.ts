import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "combien-de-temps-prend-une-enquete",
  titre: "Combien de temps prend une enquête de détective privé ?",
  metaTitre: "Combien de temps prend une enquête de détective ?",
  metaDescription:
    "Recherche, filature, cohabitation à établir : les délais réels par type de mission, et les trois facteurs qui les allongent ou les raccourcissent.",
  essentiel:
    "La durée d'une enquête dépend moins du budget que de la nature du fait à établir. Une recherche documentaire — solvabilité, adresse, vérification d'un parcours professionnel — aboutit souvent en quelques jours ouvrés, parce qu'elle repose sur du temps d'analyse. Une constatation ponctuelle, comme un rendez-vous à une heure connue, tient en une vacation. En revanche, établir une régularité — une cohabitation, une activité concurrente, un comportement installé — demande plusieurs observations réparties sur une à trois semaines, à des jours et horaires différents : c'est la répétition documentée qui emporte la conviction d'un juge, jamais un fait isolé. Trois facteurs allongent une mission : la régularité des habitudes de la personne, la nature du terrain, et le moment où l'enquête est lancée par rapport à l'annonce d'une séparation ou d'une procédure.",
  chapo:
    "« Vous aurez quelque chose quand ? » C'est la deuxième question posée, juste après celle du prix. La réponse honnête dépend de ce qu'il faut établir — et elle n'est pas la même selon les cas.",
  silo: "preuve",
  pilier: PILIERS.preuve,
  datePublication: "2026-09-02",
  statut: "publie",
  image: {
    src: "/images/article-delais.webp",
    alt: "Horloge murale ronde sur un mur uni de couloir de bureau",
  },
  liensExternes: [
    {
      ancre: "article 9 du Code de procédure civile",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006410096",
      motif: "Charge et loyauté de la preuve.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Cadre d'exercice de la profession.",
    },
    {
      ancre: "service-public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F10113",
      motif: "Présentation officielle du divorce pour faute.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "Ce qui détermine la durée : le fait à établir" },
    {
      type: "paragraphe",
      texte:
        "Le réflexe naturel consiste à raisonner en budget : « avec tant, j'ai combien de jours ? ». Ce n'est pas la bonne entrée. La durée d'une mission découle presque entièrement de la nature de ce qu'il faut démontrer, et ce point se règle en quelques minutes lors du premier échange.",
    },
    {
      type: "paragraphe",
      texte:
        "Un fait ponctuel se constate en une fois. Un fait répété demande, par définition, plusieurs constatations. Cette distinction paraît évidente une fois formulée, mais elle explique à elle seule pourquoi deux missions apparemment proches peuvent tenir en trois jours ou s'étaler sur trois semaines.",
    },
    {
      type: "encadre",
      titre: "La question qui fixe le délai",
      texte:
        "« Est-ce que je dois prouver que cela s'est produit une fois, ou que cela se produit régulièrement ? » La première réponse tient en une vacation. La seconde suppose une série d'observations sur plusieurs semaines.",
    },
    { type: "titre2", texte: "Les délais par type de mission" },
    { type: "titre3", texte: "La recherche documentaire : quelques jours" },
    {
      type: "paragraphe",
      texte:
        "Vérifier la solvabilité d'un partenaire, contrôler un parcours professionnel déclaré, identifier l'existence réelle d'une activité : ces missions reposent sur du temps d'analyse et sur l'exploitation de sources légalement accessibles. Elles n'exigent aucune présence sur le terrain, donc aucune attente.",
    },
    {
      type: "paragraphe",
      texte:
        "Le délai dépend surtout de la qualité des éléments de départ et de la réactivité des interlocuteurs sollicités. Un ancien employeur peut mettre une semaine à répondre, ou ne jamais répondre — auquel cas le rapport indiquera que l'information n'a pas pu être vérifiée, ce qui n'est ni une confirmation ni une infirmation.",
    },
    { type: "titre3", texte: "La localisation d'une personne : variable" },
    {
      type: "paragraphe",
      texte:
        "C'est le type de mission dont le délai est le plus difficile à annoncer, parce qu'il dépend entièrement de votre point de départ. Avec un nom, une date de naissance et une dernière adresse connue, la recherche aboutit souvent rapidement. Avec un nom seul, il faut écarter les homonymes un par un, et chaque piste demande une vérification de terrain.",
    },
    {
      type: "paragraphe",
      texte:
        "Nous évaluons gratuitement, dès le premier échange, ce que vos éléments permettent d'envisager. Il nous arrive de dire qu'une recherche a peu de chances d'aboutir : c'est plus utile que d'encaisser un devis. Le détail figure sur notre page [recherche de personne et de débiteur](/recherche-de-personne-debiteur-toulouse/).",
    },
    { type: "titre3", texte: "La constatation ponctuelle : une vacation" },
    {
      type: "paragraphe",
      texte:
        "Lorsque le moment et le lieu sont connus — une remise d'enfant à une heure fixée par le juge, un rendez-vous hebdomadaire, une ouverture de commerce —, une seule vacation d'observation suffit à établir le fait. C'est le cas de figure le plus rapide et le moins coûteux.",
    },
    {
      type: "paragraphe",
      texte:
        "Attention toutefois : un fait unique constaté une seule fois se conteste facilement. Dans un dossier de droit de visite, par exemple, un retard isolé n'établit rien ; ce sont trois à cinq échanges documentés qui démontrent un comportement installé.",
    },
    { type: "titre3", texte: "L'établissement d'une régularité : une à trois semaines" },
    {
      type: "paragraphe",
      texte:
        "C'est la configuration la plus fréquente, et la plus longue. Établir une cohabitation, une relation suivie, une activité concurrente exercée en parallèle suppose de démontrer une continuité. Cela se traduit par des vacations réparties : jours de semaine et week-end, matin et soir, sur une période suffisante pour écarter la coïncidence.",
    },
    {
      type: "paragraphe",
      texte:
        "La logique est la même que pour n'importe quelle preuve : un juge n'est pas convaincu par une observation, il l'est par une série cohérente. Nous détaillons ce principe sur notre page consacrée à [la pension alimentaire et au concubinage dissimulé](/enquete-pension-alimentaire-concubinage/), où la démonstration de la vie maritale repose entièrement sur cette répétition.",
    },
    {
      type: "tableau",
      entetes: ["Type de mission", "Ordre de grandeur", "Ce qui fait varier"],
      lignes: [
        [
          "Vérification documentaire",
          "Quelques jours ouvrés",
          "Réactivité des interlocuteurs sollicités",
        ],
        [
          "Localisation d'une personne",
          "De quelques jours à plusieurs semaines",
          "Qualité des éléments de départ, nombre d'homonymes",
        ],
        [
          "Constatation ponctuelle",
          "Une vacation",
          "Nécessité d'attendre le jour et l'heure concernés",
        ],
        [
          "Régularité à établir",
          "Une à trois semaines",
          "Fréquence réelle du fait, régularité des habitudes",
        ],
        [
          "Détection technique (écoutes, traceurs)",
          "Une intervention",
          "Nombre de véhicules ou de pièces à couvrir",
        ],
      ],
      legende:
        "Ordres de grandeur issus de la pratique. Chaque mission fait l'objet d'une estimation propre au premier échange.",
    },
    { type: "titre2", texte: "Les trois facteurs qui allongent une mission" },
    { type: "titre3", texte: "L'irrégularité des habitudes" },
    {
      type: "paragraphe",
      texte:
        "Une personne dont les horaires sont stables se documente vite : on sait où être et quand. Une personne aux déplacements imprévisibles impose de multiplier les vacations pour espérer couvrir le bon moment. C'est le premier facteur d'allongement, et le seul sur lequel personne n'a de prise.",
    },
    {
      type: "paragraphe",
      texte:
        "Tout ce que vous savez des habitudes de la personne raccourcit donc la mission — et réduit son coût. C'est pourquoi nous posons beaucoup de questions au premier échange : ce ne sont pas des questions de curiosité, ce sont des questions d'efficacité.",
    },
    { type: "titre3", texte: "La nature du terrain" },
    {
      type: "paragraphe",
      texte:
        "Une observation en zone dense, avec du passage et des raisons plausibles d'être là, se conduit dans de bonnes conditions. Dans un lotissement calme où un véhicule immobile se remarque en une heure, il faut fractionner : vacations plus courtes, emplacements et véhicules changés à chaque fois. À fait égal, la même mission prendra plus de temps.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce paramètre est développé sur notre page [filature et surveillance à Toulouse](/filature-surveillance-toulouse/), et décliné commune par commune sur nos pages locales.",
    },
    { type: "titre3", texte: "Le moment où l'enquête est lancée" },
    {
      type: "paragraphe",
      texte:
        "C'est le facteur le plus sous-estimé, et le seul sur lequel vous avez la main. Tant que rien n'a été dit, les habitudes sont stables et les précautions faibles. Dès qu'une séparation est annoncée, qu'un avocat est consulté ou qu'une conversation tendue a eu lieu, les comportements changent : trajets modifiés, vigilance accrue, rendez-vous déplacés.",
    },
    {
      type: "avertissement",
      titre: "Confronter avant de constater double souvent la durée",
      texte:
        "C'est humain et compréhensible, mais c'est le geste qui referme la porte. Une situation qui se serait documentée en trois vacations peut en demander le double une fois la personne alertée — quand elle reste documentable.",
    },
    { type: "titre2", texte: "Ce qui raccourcit une mission" },
    {
      type: "listeOrdonnee",
      items: [
        "**Un fait à établir formulé précisément.** « Savoir s'il voit quelqu'un » est vague ; « établir avec qui il passe ses mardis soir » est opérationnel. C'est le rôle de votre avocat, et c'est le premier levier de réduction du délai.",
        "**Tout ce que vous savez des habitudes.** Horaires de travail, jours de sport, trajets réguliers : chaque information évite une vacation à vide.",
        "**Les vérifications documentaires en amont.** Ce qui peut être trouvé sans sortir n'a pas à être payé en heures de surveillance — et se règle en quelques jours.",
        "**Un point d'étape accepté.** Après les premières vacations, faire le point permet de réorienter plutôt que de poursuivre à l'aveugle.",
      ],
    },
    { type: "titre2", texte: "Trois situations, trois délais" },
    {
      type: "paragraphe",
      texte:
        "Les ordres de grandeur restent abstraits tant qu'on ne les rapporte pas à des situations réelles. Voici trois configurations que nous rencontrons régulièrement, avec ce qui a déterminé leur durée. Les détails sont volontairement neutralisés.",
    },
    { type: "titre3", texte: "Un doute conjugal, habitudes régulières" },
    {
      type: "paragraphe",
      texte:
        "La personne concernée avait des horaires professionnels fixes et une soirée hebdomadaire systématiquement inexpliquée. Le fait à établir était donc clairement circonscrit : où se rend-elle ce soir-là, et avec qui. Trois vacations sur trois semaines ont suffi à établir la régularité, parce que le créneau était connu à l'avance et qu'il ne restait qu'à documenter sa répétition.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce qui a raccourci la mission : la précision de la demande, et le fait que l'enquête ait été lancée avant toute confrontation.",
    },
    { type: "titre3", texte: "Une vie maritale à établir pour une révision de pension" },
    {
      type: "paragraphe",
      texte:
        "Ici, il ne s'agissait pas de constater un rendez-vous mais une continuité : démontrer que deux personnes partagent effectivement un domicile. Les vacations ont dû couvrir des jours de semaine et de week-end, tôt le matin et tard le soir, sur près de trois semaines — la présence au petit matin étant l'un des éléments les plus parlants pour un juge.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce qui a allongé la mission : la nature même de ce qu'il fallait prouver. Aucune économie n'était possible sans fragiliser la démonstration.",
    },
    { type: "titre3", texte: "Une recherche de débiteur avec peu d'éléments" },
    {
      type: "paragraphe",
      texte:
        "Le créancier disposait d'un nom, d'une ancienne adresse datant de plusieurs années et d'un secteur d'activité approximatif. Les recherches documentaires ont ouvert plusieurs pistes, chacune ayant nécessité une vérification de terrain pour écarter les homonymes. L'identification de l'employeur — l'information réellement utile pour une saisie — est venue en dernier.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce qui a déterminé la durée : la pauvreté du point de départ. Avec une date de naissance, la même recherche aurait été sensiblement plus courte. C'est l'objet de notre page [solvabilité et recouvrement](/enquete-solvabilite-recouvrement-toulouse/).",
    },
    { type: "titre2", texte: "Le point d'étape, ou pourquoi nous ne promettons pas de résultat" },
    {
      type: "paragraphe",
      texte:
        "Une enquête est une obligation de moyens, jamais de résultat. Personne ne peut garantir qu'un fait se produira pendant une vacation d'observation : la personne peut ne pas sortir, changer d'habitude, ou simplement ne rien avoir à cacher. Une agence qui vous promettrait un résultat vous mentirait.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est pour cette raison que nous procédons par étapes et que nous faisons un point après les premières vacations : ce qui a été établi, ce qui reste incertain, et s'il est raisonnable de continuer. Il nous arrive régulièrement de recommander d'arrêter. Le fonctionnement du devis et du budget maximum est détaillé sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "Et après ? Le délai de remise du rapport" },
    {
      type: "paragraphe",
      texte:
        "La rédaction du rapport intervient une fois les constatations terminées. Elle demande un temps propre : reprise des relevés horodatés, sélection et référencement des supports, mise en forme du récit chronologique. Comptez quelques jours entre la dernière vacation et la remise, davantage si la mission a été longue.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce délai n'est pas une formalité administrative : c'est ce qui fait la différence entre un compte rendu et une pièce exploitable. Ce que doit contenir un rapport pour résister à la contestation est détaillé sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
    {
      type: "paragraphe",
      texte:
        "Enfin, si votre procédure impose une échéance — une audience, un délai de recours —, dites-le nous au premier échange. Nous vous dirons franchement si elle est tenable, plutôt que de l'apprendre en cours de mission.",
    },
    { type: "titre2", texte: "Le délai que vous maîtrisez : le vôtre" },
    {
      type: "paragraphe",
      texte:
        "Dans la plupart des dossiers que nous recevons, le temps le plus long n'est pas celui de l'enquête : c'est celui qui s'est écoulé avant l'appel. Des mois d'hésitation chez un particulier, plusieurs semaines de tergiversations dans une entreprise qui espère que la situation se réglera d'elle-même. Ce délai-là ne se rattrape pas, et il coûte cher.",
    },
    {
      type: "paragraphe",
      texte:
        "Il coûte cher pour trois raisons concrètes. Les traces matérielles s'effacent : une annonce en ligne disparaît, un local change d'occupant, un véhicule est vendu. Les habitudes changent : la personne observée modifie ses trajets, déménage, prend conscience d'être surveillée. Et surtout, les délais juridiques courent, qu'il s'agisse d'une prescription, d'un délai disciplinaire ou d'une date d'audience déjà fixée.",
    },
    {
      type: "paragraphe",
      texte:
        "La conséquence pratique est simple : un premier échange coûte quinze minutes et ne vous engage à rien. Il permet de savoir si une enquête est possible, ce qu'elle établirait, et surtout si le calendrier de votre dossier la rend encore utile. C'est une information que vous obtenez tout de suite, et qui vous évite parfois d'engager des frais pour rien.",
    },
  ],
  faq: [
    {
      question: "Peut-on avoir un résultat en une journée ?",
      reponse:
        "Pour une constatation ponctuelle dont le moment et le lieu sont connus, oui : une vacation suffit. Pour établir une régularité — une cohabitation, une activité concurrente —, non : il faut plusieurs observations réparties sur des jours et des horaires différents, faute de quoi la preuve se conteste facilement.",
    },
    {
      question: "Le délai dépend-il du budget que j'y mets ?",
      reponse:
        "Moins qu'on ne le croit. Doubler les intervenants ne fait pas apparaître deux fois plus vite un fait qui ne se produit qu'une fois par semaine. Le budget influe sur la capacité à couvrir plusieurs lieux simultanément, pas sur la fréquence des faits eux-mêmes.",
    },
    {
      question: "Que se passe-t-il si rien n'est constaté ?",
      reponse:
        "C'est un résultat, et il arrive régulièrement. Nous le disons au point d'étape plutôt que de prolonger la mission. Pour certaines personnes, savoir qu'il n'y avait rien à trouver est précisément ce qui permet de repartir.",
    },
    {
      question: "Combien de temps avant de pouvoir démarrer ?",
      reponse:
        "Une fois le devis accepté, une première vacation peut généralement être programmée sous quelques jours. Le délai réel dépend surtout des créneaux à couvrir : établir un fait qui se produit le samedi matin suppose d'attendre le samedi.",
    },
  ],
  articlesLies: ["detective-huissier-avocat-qui-fait-quoi"],
};
