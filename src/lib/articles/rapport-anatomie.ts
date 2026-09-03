import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "rapport-enquete-ce-qu-il-contient",
  titre: "Ce qu'un rapport d'enquête contient, ligne par ligne",
  metaTitre: "Rapport de détective : ce qu'il contient vraiment",
  metaDescription:
    "Ouverture, mission, chronologie, annexes, signature : la structure réelle d'un rapport d'enquête et ce que chaque partie sert à démontrer.",
  essentiel:
    "Un rapport d'enquête n'est pas un récit : c'est une pièce destinée à être lue par un magistrat pressé, contestée par un avocat adverse et versée à un dossier parmi des dizaines d'autres. Sa structure répond à cette destination. L'ouverture identifie l'auteur et son autorisation, la mission énonce ce qui a été demandé et pourquoi, la chronologie relate les constatations dans l'ordre où elles se sont produites, les annexes matérialisent ce qui a été observé, et la signature engage. Ce qui n'y figure pas compte autant : ni interprétation, ni jugement moral, ni conclusion sur le droit. Un rapport qui affirme qu'une personne « est de mauvaise foi » se disqualifie ; un rapport qui note qu'elle est entrée dans un immeuble à 19 h 04 et en est ressortie à 22 h 41 fait son travail.",
  chapo:
    "On imagine un récit d'enquête. C'est un document de procédure, écrit pour résister à la contestation — et sa forme n'a rien d'arbitraire.",
  silo: "preuve",
  pilier: PILIERS.preuve,
  datePublication: "2026-09-01",
  statut: "publie",
  image: {
    src: "/images/article-rapport-anatomie.webp",
    alt: "Rapport d'enquête relié ouvert sur un bureau, pages numérotées et onglets d'index",
  },
  liensExternes: [
    {
      ancre: "article 202 du Code de procédure civile",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006411000",
      motif: "Forme des attestations produites en justice.",
    },
    {
      ancre: "article 9 du Code de procédure civile",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006410096",
      motif: "Charge de la preuve et loyauté.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Autorisation d'exercer et numéro d'agrément.",
    },
    {
      ancre: "Livre VI du Code de la sécurité intérieure",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000025503132/LEGISCTA000025506099/",
      motif: "Cadre légal des activités de recherches privées.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "À qui ce document est-il destiné ?" },
    {
      type: "paragraphe",
      texte:
        "La question paraît secondaire ; elle commande en réalité toute la forme du document. Un rapport d'enquête n'est pas écrit pour le client, même si c'est lui qui le reçoit et le paie. Il est écrit pour le lecteur ultime : un juge aux affaires familiales, un conseiller prud'homal, un magistrat de la mise en état.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce lecteur a des caractéristiques précises. Il dispose de peu de temps. Il lit des dizaines de pièces par dossier. Il ne connaît rien de votre situation avant d'ouvrir le document. Et il a en face de lui un avocat adverse dont le métier est de trouver la faille dans chaque pièce produite.",
    },
    {
      type: "paragraphe",
      texte:
        "Toutes les conventions de rédaction découlent de ces quatre contraintes. La chronologie stricte existe parce qu'elle est vérifiable. L'absence d'adjectifs existe parce qu'un adjectif est contestable. La numérotation des pages et des annexes existe parce qu'un avocat doit pouvoir citer « pièce 4, page 7, ligne 12 » sans ambiguïté.",
    },
    {
      type: "avertissement",
      titre: "Le réflexe à abandonner",
      texte:
        "Beaucoup de clients espèrent un document qui « dise » quelque chose : que la personne est coupable, que la situation est scandaleuse, que le conjoint ment. Un rapport qui fait cela perd sa valeur probatoire. Le rapport constate ; c'est l'avocat qui plaide et le juge qui conclut. Cette division du travail n'est pas une timidité, c'est ce qui rend le document utilisable.",
    },
    { type: "titre2", texte: "I. L'ouverture : qui écrit, et de quel droit" },
    {
      type: "paragraphe",
      texte:
        "La première page ne contient aucune information sur l'affaire. Elle établit la qualité de l'auteur, et c'est le premier point qu'un avocat adverse examinera.",
    },
    {
      type: "liste",
      items: [
        "L'identité complète de l'agence et de l'intervenant qui a conduit les constatations.",
        "Le numéro d'autorisation d'exercice délivré par le [CNAPS](https://www.cnaps.interieur.gouv.fr/), ainsi que le numéro de carte professionnelle de l'agent.",
        "L'adresse du siège et les coordonnées permettant de joindre l'auteur.",
        "La date d'établissement du rapport, distincte des dates de constatation.",
        "Le nombre total de pages et le nombre d'annexes, qui garantissent qu'aucune pièce n'a été retirée.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Ce dernier point est régulièrement sous-estimé. Un rapport dont on ignore combien de pages il compte peut être produit tronqué, volontairement ou non. Annoncer « le présent rapport comporte quatorze pages et six annexes » ferme cette porte.",
    },
    {
      type: "paragraphe",
      texte:
        "L'absence d'autorisation d'exercer, à l'inverse, suffit à faire écarter l'intégralité du document, quelle que soit la qualité de son contenu. Les activités de recherches privées sont réglementées ; un rapport établi par une personne non autorisée n'est pas une preuve fragile, c'est une pièce produite par quelqu'un qui a exercé illégalement. Nous détaillons ce périmètre dans notre article [ce que la loi interdit à un détective privé](/blog/ce-que-la-loi-interdit-a-un-detective-prive/).",
    },
    { type: "titre2", texte: "II. La mission : ce qui a été demandé, et pourquoi" },
    {
      type: "paragraphe",
      texte:
        "La deuxième partie énonce le mandat. Elle répond à la question que le juge se posera immédiatement : au nom de quoi cette personne a-t-elle été observée ?",
    },
    {
      type: "paragraphe",
      texte:
        "C'est la partie qui porte l'intérêt légitime, et elle est plus déterminante qu'on ne le croit. Le principe est constant : une atteinte à la vie privée n'est admissible que si elle est proportionnée au but poursuivi et indispensable à l'exercice d'un droit. Un rapport qui n'expose pas ce but laisse le juge sans moyen d'apprécier la proportionnalité — et dans le doute, il écarte.",
    },
    {
      type: "paragraphe",
      texte:
        "Concrètement, cette section indique l'identité du mandant, la date du mandat, la nature de la procédure en cours ou envisagée, et l'objet précis de la recherche. « Établir si Monsieur X exerce une activité professionnelle pendant son arrêt de travail, dans le cadre d'une procédure disciplinaire envisagée » est une formulation qui tient. « Surveiller Monsieur X » n'en est pas une.",
    },
    {
      type: "paragraphe",
      texte:
        "La section précise également les limites que la mission s'est fixées : périmètre géographique, plages horaires, durée. Ces limites démontrent la proportionnalité mieux qu'aucune affirmation. Une surveillance de trois demi-journées sur une semaine se défend ; une surveillance continue de six semaines demande une justification autrement plus solide.",
    },
    {
      type: "image",
      src: "/images/contexte-devis-bureau.webp",
      alt: "Bureau avec dossier ouvert, stylo et lampe d'architecte allumée",
      legende:
        "La lettre de mission est signée avant toute intervention. C'est elle qui fixe le périmètre, et c'est elle que le rapport rappelle en deuxième partie.",
    },
    { type: "titre2", texte: "III. La chronologie : le cœur du document" },
    {
      type: "paragraphe",
      texte:
        "C'est la partie la plus longue, et la seule qui relate des faits. Elle suit une règle unique : l'ordre dans lequel les choses se sont produites, sans regroupement thématique ni hiérarchisation par importance.",
    },
    {
      type: "paragraphe",
      texte:
        "Chaque entrée comporte une date, une heure précise, un lieu identifiable et une description de ce qui a été observé. Rien d'autre. La sécheresse de ce style n'est pas une pauvreté d'écriture : c'est la condition de sa force. Un compte rendu factuel se vérifie ; un compte rendu commenté se discute.",
    },
    {
      type: "tableau",
      entetes: ["Formulation à proscrire", "Formulation retenue"],
      lignes: [
        [
          "Il a manifestement passé la nuit chez elle",
          "Entré dans l'immeuble à 23 h 12, ressorti le lendemain à 7 h 48",
        ],
        [
          "Il portait des charges lourdes malgré son arrêt",
          "A déchargé six sacs de ciment d'un véhicule utilitaire, entre 9 h 20 et 9 h 55",
        ],
        [
          "Elle semblait vouloir échapper à une surveillance",
          "A emprunté successivement trois rues sans issue avant de rejoindre l'avenue",
        ],
        [
          "Le local paraissait servir à une activité commerciale",
          "Rideau métallique relevé, quatre clients entrés et ressortis avec un sac entre 10 h et 12 h",
        ],
        [
          "Il fréquente régulièrement cette adresse",
          "Présence constatée à cette adresse les 3, 5 et 9 du mois, aux mêmes horaires",
        ],
      ],
      legende:
        "La colonne de droite dit exactement la même chose. La différence : elle ne peut pas être contestée sans contester les faits eux-mêmes.",
    },
    {
      type: "paragraphe",
      texte:
        "Une précision technique importe ici : les heures notées sont celles du constat, pas celles d'une reconstitution ultérieure. Les notes sont prises en temps réel, sur le terrain, et le rapport les reprend. Un document rédigé de mémoire trois semaines après les faits n'a pas la même valeur, et cela se voit — les horaires y sont ronds, les descriptions générales, les enchaînements approximatifs.",
    },
    {
      type: "paragraphe",
      texte:
        "La chronologie mentionne également les périodes sans observation. C'est contre-intuitif, mais essentiel : si une surveillance a été interrompue entre 14 h et 16 h, le rapport le dit. Un document qui présente une journée continue alors qu'elle ne l'était pas ouvre une brèche que l'avocat adverse exploitera. La transparence sur les manques renforce la crédibilité de ce qui est affirmé.",
    },
    { type: "titre2", texte: "IV. Les annexes : ce qui matérialise" },
    {
      type: "paragraphe",
      texte:
        "Les annexes ne sont pas un supplément décoratif. Elles transforment une affirmation écrite en élément vérifiable, et leur traitement obéit à des règles précises.",
    },
    {
      type: "liste",
      items: [
        "**Clichés horodatés**, numérotés et rattachés chacun à une entrée précise de la chronologie. Une photographie qui ne renvoie à aucune ligne du récit n'a pas d'utilité procédurale.",
        "**Prises de vue depuis l'espace public uniquement** : la voie publique, un hall d'immeuble ouvert, un parking accessible. Jamais l'intérieur d'un domicile, jamais un balcon privé, jamais au moyen d'un dispositif permettant de voir ce qui n'est pas visible à l'œil nu.",
        "**Relevés de trajets** lorsque la mission comportait un suivi, avec les points de départ et d'arrivée et les heures correspondantes.",
        "**Pièces documentaires** issues de registres publics : extraits d'immatriculation, publications légales, annonces en ligne, chacune avec sa date de consultation.",
        "**Un bordereau récapitulatif** en fin de rapport, qui liste toutes les annexes et permet de vérifier qu'aucune ne manque.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le point sur l'espace public mérite d'être appuyé, car c'est là que se joue la recevabilité. Une image obtenue depuis un lieu où le public a accès, portant sur ce qui est visible de ce lieu, ne constitue pas une atteinte au domicile. Une image obtenue au moyen d'un téléobjectif braqué sur une fenêtre en est une, et elle entraîne le rejet de la pièce — souvent avec des conséquences pour l'ensemble du rapport.",
    },
    { type: "titre2", texte: "V. La signature : l'engagement personnel" },
    {
      type: "paragraphe",
      texte:
        "La dernière page est signée par l'intervenant qui a personnellement effectué les constatations. Cette précision n'est pas administrative : elle signifie que la personne signataire pourra être entendue si le juge l'estime nécessaire, et qu'elle engage sa responsabilité professionnelle sur l'exactitude de ce qui est écrit.",
    },
    {
      type: "paragraphe",
      texte:
        "Un rapport signé par un dirigeant d'agence qui n'était pas sur le terrain perd cette qualité. Lorsqu'une mission a mobilisé plusieurs intervenants, chacun signe la partie qu'il a constatée, et le rapport l'indique.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette signature s'accompagne d'une mention de sincérité : l'auteur atteste que les constatations relatées sont exactes et qu'elles ont été effectuées personnellement. La formulation rejoint l'esprit de l'article 202 du Code de procédure civile applicable aux attestations, sans se confondre avec lui — un rapport d'enquête est une pièce d'un autre genre, mais il emprunte à cette rigueur.",
    },
    { type: "titre2", texte: "Ce qui ne doit jamais y figurer" },
    {
      type: "paragraphe",
      texte:
        "La liste des exclusions est aussi structurante que celle des contenus. Chacune de ces mentions, si elle apparaît, fournit un motif de contestation.",
    },
    {
      type: "tableau",
      entetes: ["Mention exclue", "Pourquoi"],
      lignes: [
        [
          "Jugement moral sur une personne",
          "Sort du rôle du constatant et affaiblit tout le document",
        ],
        [
          "Conclusion juridique (« il y a faute »)",
          "Relève de l'avocat et du juge, pas de l'enquêteur",
        ],
        [
          "Données obtenues d'un fichier non public",
          "Origine illicite : la pièce et parfois le rapport entier sont écartés",
        ],
        [
          "Contenu d'une conversation privée",
          "Atteinte au secret des correspondances",
        ],
        [
          "Information sur un tiers étranger à la mission",
          "Hors périmètre, disproportionné",
        ],
        [
          "Hypothèse présentée comme un constat",
          "Confusion entre ce qui est vu et ce qui est supposé",
        ],
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Une remarque sur l'avant-dernière ligne. Il arrive qu'une surveillance fasse apparaître des éléments concernant une personne qui n'était pas visée — un voisin, un collègue, un enfant. Ces éléments ne figurent pas au rapport, même lorsqu'ils sont spectaculaires. Le périmètre de la mission n'est pas seulement une limite pratique, c'est ce qui rend la démarche proportionnée.",
    },
    { type: "titre2", texte: "Combien de pages, et pour quel usage" },
    {
      type: "paragraphe",
      texte:
        "Il n'existe pas de volume type, et la longueur n'est pas un critère de qualité. Un rapport de six pages qui établit précisément trois faits datés vaut mieux qu'un document de quarante pages qui noie deux constats dans du remplissage.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce qui varie, c'est le nombre de journées de constatation, et donc le volume de la chronologie. Une mission ponctuelle produit un document court. Une mission étalée sur plusieurs semaines produit un document plus long, mais dont chaque page conserve la même densité factuelle.",
    },
    {
      type: "paragraphe",
      texte:
        "Le rapport est remis en version papier signée et, sur demande, en version numérique. Il est adressé au seul mandant ou, si celui-ci le souhaite, directement à son avocat. Ce point est réglé à la signature de la lettre de mission — les modalités de remise et le déroulement d'ensemble sont décrits sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "Ce que le rapport ne remplace pas" },
    {
      type: "paragraphe",
      texte:
        "Un rapport d'enquête est une pièce parmi d'autres, et il gagne à être accompagné. Selon les situations, il se combine avec un constat de commissaire de justice pour authentifier un élément visible et permanent, avec des attestations de témoins établies dans les formes, ou avec des documents que vous détenez déjà.",
    },
    {
      type: "paragraphe",
      texte:
        "La répartition des rôles entre ces intervenants est développée dans notre article [détective, commissaire de justice ou avocat : qui fait quoi](/blog/detective-huissier-avocat-qui-fait-quoi/), et les conditions dans lesquelles le rapport est retenu par le juge sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
    {
      type: "paragraphe",
      texte:
        "Une dernière chose, qui compte autant que tout ce qui précède : un rapport peut ne rien établir. Une surveillance qui ne constate aucun fait significatif donne lieu à un rapport qui le dit. Cette issue est plus fréquente qu'on ne l'imagine, et elle a sa valeur propre — elle referme une hypothèse et permet de passer à autre chose, ou d'orienter la procédure autrement. Un rapport qui trouverait toujours quelque chose serait un rapport dont on peut douter.",
    },
  ],
  faq: [
    {
      question: "Puis-je voir un exemple de rapport ?",
      reponse:
        "Non, et aucune agence sérieuse ne vous en montrera. Un rapport contient des données nominatives sur des personnes identifiées ; le diffuser, même partiellement anonymisé, constituerait un manquement au secret professionnel. En revanche, la structure décrite dans cet article correspond exactement à celle que vous recevrez.",
    },
    {
      question: "Le rapport contient-il des photos ?",
      reponse:
        "Lorsque la mission le justifie, oui : des clichés horodatés, numérotés et rattachés chacun à une entrée de la chronologie, pris depuis l'espace public uniquement. Aucune prise de vue à l'intérieur d'un domicile, ni au moyen d'un dispositif permettant de voir ce qui n'est pas visible à l'œil nu.",
    },
    {
      question: "Qui reçoit le rapport ?",
      reponse:
        "Le mandant, et lui seul, sauf s'il demande qu'il soit adressé directement à son avocat. Ce point est fixé dans la lettre de mission signée avant l'intervention. Aucune copie n'est communiquée à un tiers, quelle que soit sa qualité.",
    },
    {
      question: "Combien de temps faut-il pour le recevoir ?",
      reponse:
        "Le rapport est rédigé après la dernière journée de constatation, à partir des notes prises en temps réel. Le délai dépend du volume de la mission ; il se compte généralement en jours, pas en semaines. Nous détaillons les durées habituelles dans notre article sur les délais d'une enquête.",
    },
  ],
  articlesLies: [
    "detective-huissier-avocat-qui-fait-quoi",
    "combien-de-temps-prend-une-enquete",
  ],
};
