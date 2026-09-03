import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "enquete-avant-mariage-toulouse",
  titre: "Enquête avant mariage à Toulouse",
  metaTitre: "Enquête avant mariage — détective privé à Toulouse",
  metaDescription:
    "Identité, situation matrimoniale, activité, dettes : ce qui peut être vérifié à Toulouse avant de s'engager, face à une escroquerie sentimentale.",
  chapo:
    "Se marier, c'est mettre en commun un patrimoine et contracter des obligations. Vérifier ce que l'on sait de l'autre n'est pas de la méfiance : c'est la même prudence que pour n'importe quel engagement de cette portée.",
  essentiel:
    "Une enquête avant mariage vérifie des éléments factuels sur la personne avec laquelle vous vous apprêtez à vous unir : identité et état civil réels, situation matrimoniale — un mariage antérieur non dissous rend le nouveau mariage nul —, activité professionnelle effective, existence des sociétés dont elle se prévaut, procédures de surendettement publiées, cohérence entre le récit et la réalité vérifiable. Activ'Agence conduit ces vérifications depuis Toulouse à partir de sources d'information légales et de constatations faites dans des lieux ouverts au public. Elles se justifient particulièrement dans deux cas : une union comportant un enjeu patrimonial significatif, et une relation nouée à distance où la personne n'a jamais pu être rencontrée dans son environnement. Ce que nous ne faisons pas : enquêter sur la vie sentimentale passée, la santé ou les convictions de qui que ce soit.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  libelleCourt: "Enquête avant mariage",
  image: {
    src: "/images/motif-avant-mariage.webp",
    alt: "Salle des mariages d'une mairie, rangées de chaises vides et table nue",
  },
  contenu: [
    { type: "titre2", texte: "Ce qui rend la vérification légitime" },
    {
      type: "paragraphe",
      texte:
        "Le mariage produit des effets juridiques immédiats : régime matrimonial, solidarité des dettes ménagères, vocation successorale, obligations alimentaires. Vous vous engagez donc sur la foi de ce que l'autre vous a dit de sa situation. Vérifier ces déclarations, quand l'enjeu est important, relève de la même diligence que pour un achat immobilier ou une entrée au capital d'une société.",
    },
    {
      type: "paragraphe",
      texte:
        "L'intérêt légitime est ici celui de votre propre engagement. Il est réel — mais il ne s'étend pas à tout : il porte sur ce qui a une incidence sur cet engagement, et sur rien d'autre.",
    },
    { type: "titre2", texte: "Ce qui se vérifie, ce qui ne se vérifie pas" },
    {
      type: "tableau",
      entetes: ["Élément", "Vérifiable ?", "Précision"],
      lignes: [
        [
          "Identité et état civil réels",
          "Oui",
          "Cohérence des documents présentés et des éléments déclarés",
        ],
        [
          "Situation matrimoniale, mariage antérieur non dissous",
          "Oui",
          "Point décisif : un tel mariage entraînerait la nullité du vôtre",
        ],
        [
          "Activité professionnelle et sociétés détenues",
          "Oui",
          "Registres des sociétés, publications légales, constatation d'activité",
        ],
        [
          "Procédures collectives, surendettement publié",
          "Oui",
          "Publications officielles uniquement",
        ],
        [
          "Existence réelle du domicile et du cadre de vie déclarés",
          "Oui",
          "Constatations depuis des lieux ouverts au public",
        ],
        [
          "Dettes privées, comptes bancaires, patrimoine non publié",
          "Non",
          "Aucun accès légal ; voir cependant [la recherche d'actifs](/recherche-biens-actifs-toulouse/) dans un cadre contentieux",
        ],
        [
          "Vie sentimentale passée, santé, convictions, origine",
          "Non",
          "Hors du champ : vie privée et données protégées",
        ],
      ],
    },
    { type: "titre2", texte: "Le cas des relations nouées à distance" },
    {
      type: "paragraphe",
      texte:
        "C'est aujourd'hui le motif dominant de ce type de demande. Une relation entretenue pendant des mois par écrit ou en visioconférence, une demande d'aide financière qui s'installe, un projet de mariage qui se précise sans que la personne ait jamais pu être rencontrée dans son environnement : ce scénario est celui de l'escroquerie sentimentale, et il est massif.",
    },
    {
      type: "encadre",
      titre: "Les signaux qui doivent conduire à vérifier",
      texte:
        "Une identité qui ne se recoupe avec aucun élément vérifiable ; des photographies qui apparaissent ailleurs sur internet ; des demandes d'argent motivées par des urgences successives ; l'impossibilité systématique de se rencontrer ; un refus des appels vidéo imprévus. Un seul de ces signaux ne prouve rien. Trois d'entre eux justifient une vérification avant tout engagement.",
    },
    {
      type: "paragraphe",
      texte:
        "Dans ces dossiers, la vérification porte d'abord sur l'existence même de la personne telle qu'elle se présente. Le résultat est souvent net, dans un sens comme dans l'autre — et il vaut mieux le connaître avant qu'après un transfert de fonds.",
    },
    { type: "titre2", texte: "Comment nous procédons" },
    {
      type: "listeOrdonnee",
      items: [
        "Un entretien confidentiel où vous nous exposez ce qui vous a été dit : c'est cette liste de déclarations qui sera vérifiée, point par point.",
        "Une phase documentaire à partir de sources légales, en France et, selon les cas, à l'étranger.",
        "Des constatations de terrain lorsqu'elles sont nécessaires et possibles.",
        "Un rapport qui, pour chaque déclaration, indique : confirmé, non confirmé, ou non vérifiable — cette dernière catégorie étant toujours présente et jamais transformée en soupçon.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Si votre situation concerne un conjoint avec lequel vous êtes déjà marié, elle relève de nos pages [doute conjugal et infidélité](/detective-prive-adultere-infidelite-toulouse/) ou, pour le volet patrimonial, [recherche de biens et d'actifs](/recherche-biens-actifs-toulouse/).",
    },
    { type: "titre2", texte: "Le régime matrimonial, angle mort des vérifications" },
    {
      type: "paragraphe",
      texte:
        "À défaut de contrat, le mariage place les époux sous le régime légal de la communauté réduite aux acquêts : les dettes contractées pendant l'union peuvent engager des biens communs, et la solidarité joue pour les dettes ménagères. C'est ce qui rend la situation financière du futur conjoint pertinente — non par curiosité, mais parce qu'elle vous engagera.",
    },
    {
      type: "paragraphe",
      texte:
        "Deux réflexes utiles : consulter un notaire sur l'opportunité d'un contrat, et faire vérifier ce qui est publiquement vérifiable — procédures collectives, sociétés dirigées, surendettement publié. Ce que nous ne pouvons pas atteindre, notamment les dettes privées, est indiqué comme tel dans le rapport.",
    },
    { type: "titre2", texte: "Le mariage avec un ressortissant étranger" },
    {
      type: "paragraphe",
      texte:
        "C'est un motif de demande fréquent, et un sujet qu'il faut traiter sans hypocrisie : la vérification porte sur des faits — l'identité déclarée, l'état civil, l'existence du parcours annoncé — et jamais sur la nationalité ou l'origine, qui ne sont pas des critères d'appréciation licites.",
    },
    {
      type: "paragraphe",
      texte:
        "Concrètement, les vérifications à l'étranger passent par des confrères locaux autorisés, et leurs possibilités varient énormément selon les pays : dans certains, l'état civil est accessible et fiable ; dans d'autres, aucune vérification sérieuse n'est possible. Nous vous le disons avant d'engager des frais, plutôt qu'après.",
    },
    { type: "titre2", texte: "L'escroquerie sentimentale, en pratique" },
    {
      type: "paragraphe",
      texte:
        "Le schéma est stable : une relation à distance entretenue pendant des mois, une confiance construite patiemment, puis des demandes d'argent motivées par des urgences successives — un blocage en douane, une hospitalisation, un projet qui capote à la dernière minute. La rencontre physique est toujours reportée.",
    },
    {
      type: "paragraphe",
      texte:
        "La vérification porte alors sur l'existence même de la personne telle qu'elle se présente : correspondance entre l'identité déclarée et des éléments vérifiables, réutilisation de photographies, cohérence du parcours annoncé. Le résultat est souvent net dans un sens ou dans l'autre — et il vaut mieux le connaître avant un virement qu'après.",
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "Une vérification en France se règle en quelques jours ouvrés et démarre à 390 € TTC. Une vérification impliquant l'étranger demande davantage de temps et un budget qui dépend du pays concerné ; nous vous donnons une estimation ferme avant d'engager quoi que ce soit. Le détail figure sur [nos tarifs](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Mon futur conjoint sera-t-il informé ?",
      reponse:
        "Non. Les vérifications reposent sur des sources d'information légales et des constatations extérieures : elles ne supposent aucun contact avec la personne concernée ni avec son entourage.",
    },
    {
      question: "Pouvez-vous enquêter sur une personne résidant à l'étranger ?",
      reponse:
        "Selon le pays, oui, par l'intermédiaire de confrères locaux autorisés. Les délais et les possibilités varient fortement d'un État à l'autre : nous vous disons d'emblée ce qui est réalisable et ce qui ne l'est pas, plutôt que d'engager des frais sans perspective.",
    },
    {
      question: "Que faire si l'enquête confirme une escroquerie ?",
      reponse:
        "Le rapport documente les constatations et vous permet de déposer plainte utilement. Il sert aussi, très concrètement, à faire cesser une relation dont la nature réelle était devenue difficile à admettre sans éléments objectifs.",
    },
    {
      question: "Est-ce légal de vérifier son futur époux ?",
      reponse:
        "Oui, dans les limites décrites ici : les éléments vérifiés doivent avoir un lien avec l'engagement que vous vous apprêtez à prendre. Une enquête générale sur la vie privée d'une personne, elle, ne serait pas licite — et nous ne la réaliserions pas.",
    },
    {
      question: "Que faire si j'ai déjà envoyé de l'argent ?",
      reponse:
        "Signalez-le immédiatement à votre banque — certains transferts peuvent encore être bloqués — et déposez plainte. Notre rapport documente les constatations et donne à la plainte un contenu précis. Plus le signalement est rapide, plus les chances de récupération, déjà faibles dans ce type de dossier, restent ouvertes.",
    },
    {
      question: "Un mariage peut-il être annulé si l'autre a menti ?",
      reponse:
        "L'annulation pour erreur sur les qualités essentielles de la personne existe, mais elle est d'appréciation stricte : toute déception ne suffit pas. Un mariage antérieur non dissous, en revanche, entraîne la nullité. C'est une question pour un avocat, sur la base d'éléments établis — et c'est précisément ce que la vérification préalable évite d'avoir à poser.",
    },
  ],
  motifsLies: [
    "detective-prive-adultere-infidelite-toulouse",
    "recherche-biens-actifs-toulouse",
  ],
};
