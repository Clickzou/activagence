import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "enquete-pre-embauche-verification",
  titre:
    "Enquête pré-embauche à Toulouse : vérifier un parcours avant de recruter",
  metaTitre:
    "Enquête pré-embauche à Toulouse : vérification",
  metaDescription:
    "Diplômes, expériences, références : ce qu'un employeur peut légalement vérifier à Toulouse avant d'embaucher, et ce qui lui est interdit.",
  chapo:
    "Une vérification de pré-embauche n'est pas une enquête sur une personne. C'est le contrôle de ce qu'elle a elle-même déclaré — et la loi trace une frontière nette entre les deux.",
  essentiel:
    "Avant un recrutement à responsabilité, un employeur peut faire vérifier les informations que le candidat a lui-même portées sur son CV : diplômes obtenus, périodes d'emploi, fonctions exercées, références professionnelles. Activ'Agence conduit ces vérifications depuis Toulouse, dans un cadre strict fixé par le Code du travail : les informations recherchées doivent présenter un lien direct et nécessaire avec l'emploi proposé, et le candidat doit être informé des méthodes de recrutement utilisées. Tout ce qui relève de la vie privée, de la santé, des convictions, de la situation familiale ou des origines est hors du champ — non pas par prudence, mais parce que c'est illégal et discriminatoire. Le résultat est un rapport factuel : ce qui est confirmé, ce qui ne l'est pas, ce qui n'a pas pu être vérifié.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  libelleCourt: "Enquête pré-embauche",
  image: {
    src: "/images/motif-pre-embauche.webp",
    alt: "Bureau de recrutement : CV imprimé retourné près d'un ordinateur fermé, chaise vide en face",
  },
  contenu: [
    { type: "titre2", texte: "La règle qui encadre tout" },
    {
      type: "paragraphe",
      texte:
        "Le Code du travail pose que les informations demandées à un candidat ne peuvent avoir pour finalité que d'apprécier sa capacité à occuper l'emploi proposé, et doivent présenter un lien direct et nécessaire avec cet emploi. Le candidat doit par ailleurs être informé, préalablement, des méthodes et techniques de recrutement mises en œuvre.",
    },
    {
      type: "encadre",
      titre: "Ce que cela implique concrètement",
      texte:
        "Vérifier qu'un candidat détient bien le diplôme d'ingénieur qu'il revendique pour un poste d'ingénieur est légitime. Chercher à savoir s'il a des dettes, quelle est sa situation familiale ou s'il a été syndiqué ne l'est pas — et expose l'entreprise à une action pour discrimination, indépendamment de ce qui serait découvert.",
    },
    { type: "titre2", texte: "Ce qui se vérifie, ce qui ne se vérifie pas" },
    {
      type: "tableau",
      entetes: ["Information", "Vérifiable ?", "Condition"],
      lignes: [
        [
          "Diplôme et établissement",
          "Oui",
          "Auprès de l'établissement, sur la base de ce que le candidat a déclaré",
        ],
        [
          "Périodes d'emploi et fonctions",
          "Oui",
          "Auprès des employeurs cités comme références par le candidat",
        ],
        [
          "Références professionnelles fournies",
          "Oui",
          "Ce sont les contacts que le candidat a lui-même communiqués",
        ],
        [
          "Existence réelle d'une société dirigée",
          "Oui",
          "Sources d'information légales sur les entreprises",
        ],
        [
          "Casier judiciaire",
          "Non",
          "Seul le candidat peut produire un bulletin n° 3, et pour certains emplois seulement",
        ],
        [
          "Santé, famille, convictions, origines, orientation",
          "Non",
          "Interdit et discriminatoire, quelle que soit la méthode employée",
        ],
        [
          "Vie privée hors du champ professionnel",
          "Non",
          "Sans lien direct et nécessaire avec l'emploi proposé",
        ],
      ],
      legende:
        "Un prestataire qui accepterait les trois dernières lignes ferait courir un risque juridique majeur à votre entreprise.",
    },
    { type: "titre2", texte: "Quand cette vérification a du sens" },
    {
      type: "paragraphe",
      texte:
        "Elle n'a pas vocation à être systématique. Dans la pratique, elle se justifie sur trois types de postes : les fonctions à responsabilité financière, les postes donnant accès à des informations sensibles ou à des données clients, et les métiers où un diplôme ou une habilitation conditionne l'exercice.",
    },
    {
      type: "paragraphe",
      texte:
        "Elle intervient en fin de processus, sur le ou les candidats finalistes, une fois que la décision se précise. La vérifier plus tôt reviendrait à engager des frais sur des profils qui ne seront pas retenus.",
    },
    { type: "titre2", texte: "Ce que vous recevez" },
    {
      type: "listeOrdonnee",
      items: [
        "Les informations vérifiées, telles que le candidat les a déclarées.",
        "Le résultat de chaque vérification : confirmé, non confirmé, ou non vérifiable — cette troisième catégorie est fréquente et honnête, un établissement ou un ancien employeur pouvant ne pas répondre.",
        "Les écarts constatés, factuellement, sans interprétation ni recommandation d'embauche : la décision reste la vôtre.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un écart n'est pas nécessairement une faute : une date approximative ou un intitulé de poste arrondi ne se traitent pas comme un diplôme inventé. Le rapport vous donne les faits ; l'appréciation vous appartient, idéalement avec votre conseil si l'écart est significatif.",
    },
    { type: "titre2", texte: "Le cas du salarié déjà en poste" },
    {
      type: "paragraphe",
      texte:
        "La question se pose parfois après l'embauche, lorsqu'un doute apparaît. Le cadre est alors différent : il s'agit d'une vérification portant sur un salarié en fonction, qui doit reposer sur un motif légitime et rester proportionnée — c'est l'objet de notre page [renseignements sur un collaborateur](/enquete-renseignement-collaborateur-toulouse/). Si le doute porte sur une activité concurrente exercée en parallèle, voyez [la concurrence déloyale](/enquete-concurrence-deloyale-entreprise/).",
    },
    {
      type: "paragraphe",
      texte:
        "Ces vérifications reposent sur du temps d'analyse et de contact, non sur des vacations de terrain : elles font partie de nos prestations les moins coûteuses. Le fonctionnement du devis est détaillé sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "Les trois postes où la vérification se justifie vraiment" },
    { type: "titre3", texte: "Les fonctions à responsabilité financière" },
    {
      type: "paragraphe",
      texte:
        "Direction administrative et financière, comptabilité, trésorerie, gestion de caisse : ce sont les postes où une fausse déclaration de parcours coûte le plus cher, et ceux où le risque se matérialise le plus vite. La vérification porte alors sur la réalité des fonctions exercées et sur les périodes d'emploi, pas sur la solvabilité personnelle du candidat — qui, elle, est hors du champ.",
    },
    { type: "titre3", texte: "Les postes donnant accès à des données sensibles" },
    {
      type: "paragraphe",
      texte:
        "Accès au fichier clients, aux tarifs, aux dossiers techniques, aux données personnelles de tiers : le risque n'est pas seulement celui d'une incompétence, c'est celui d'un recrutement organisé par un concurrent. Vérifier qu'un candidat n'a pas dirigé, dans un passé récent, une société concurrente est une diligence élémentaire — et le sujet croise notre page [concurrence déloyale](/enquete-concurrence-deloyale-entreprise/).",
    },
    { type: "titre3", texte: "Les métiers où un diplôme conditionne l'exercice" },
    {
      type: "paragraphe",
      texte:
        "Certaines fonctions supposent un titre, une habilitation ou une autorisation. Confier le poste à quelqu'un qui n'en dispose pas expose l'entreprise bien au-delà du litige avec le salarié : responsabilité en cas d'accident, nullité de certains actes, perte de couverture d'assurance. Ici, la vérification n'est pas une précaution, c'est une obligation de prudence.",
    },
    { type: "titre2", texte: "Ce que révèle réellement une vérification" },
    {
      type: "paragraphe",
      texte:
        "L'expérience de ce type de mission est plus nuancée que les chiffres alarmistes que l'on lit parfois. Dans la majorité des dossiers, le parcours déclaré se confirme. Les écarts constatés se répartissent en trois catégories très inégales.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**L'arrondi.** Des dates de fin d'emploi arrondies au trimestre, un intitulé de poste légèrement valorisé, une durée de mission allongée de quelques mois. C'est fréquent et rarement significatif.",
        "**L'omission.** Une période d'emploi absente du CV, souvent une expérience courte qui s'est mal terminée. Elle mérite une question en entretien, pas nécessairement un renoncement.",
        "**L'invention.** Un diplôme jamais obtenu, un employeur qui n'a jamais existé, des fonctions de direction dans une société où le candidat était salarié subalterne. C'est rare, et c'est la seule catégorie qui justifie de renoncer.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Notre rapport ne classe pas les écarts dans ces catégories : il constate. C'est à vous, éventuellement avec votre conseil, d'apprécier ce que l'écart révèle au regard du poste.",
    },
    { type: "titre2", texte: "Le risque juridique d'une vérification mal menée" },
    {
      type: "avertissement",
      titre: "La discrimination se prouve par la méthode, pas par l'intention",
      texte:
        "Un employeur qui aurait collecté des informations sur la santé, la situation familiale, les origines ou les convictions d'un candidat s'expose à une action pour discrimination — même s'il démontre que ces éléments n'ont pas motivé son refus. La seule collecte suffit à caractériser le risque. C'est pourquoi nous refusons ces demandes plutôt que de les traiter partiellement.",
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "Comptez quelques jours ouvrés, le délai dépendant surtout de la réactivité des établissements et des anciens employeurs contactés. C'est une prestation documentaire, sans vacation de terrain : elle démarre à 350 € TTC, ce qui en fait l'une de nos interventions les moins coûteuses. Le détail figure sur [nos tarifs](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Le candidat doit-il être informé de la vérification ?",
      reponse:
        "Oui. Le Code du travail impose d'informer le candidat des méthodes et techniques de recrutement utilisées. En pratique, cela se mentionne dans le processus de recrutement. Une vérification menée à l'insu du candidat fragilise l'entreprise, y compris si elle révèle quelque chose.",
    },
    {
      question: "Pouvez-vous consulter le casier judiciaire d'un candidat ?",
      reponse:
        "Non. Seule la personne concernée peut demander son bulletin n° 3, et un employeur ne peut l'exiger que pour certains emplois expressément prévus par les textes. Aucun prestataire n'a d'accès légal à ce fichier.",
    },
    {
      question: "Et si un ancien employeur refuse de répondre ?",
      reponse:
        "C'est fréquent, et c'est son droit. Le rapport indiquera alors que l'information n'a pas pu être vérifiée — ce qui n'est ni une confirmation ni une infirmation. Nous ne comblons jamais un vide par une supposition.",
    },
    {
      question: "Combien de temps prend une vérification ?",
      reponse:
        "Généralement quelques jours ouvrés, le délai dépendant surtout de la réactivité des établissements et des anciens employeurs contactés. Nous vous indiquons un délai réaliste avant de commencer.",
    },
    {
      question: "À quel moment du recrutement faut-il lancer la vérification ?",
      reponse:
        "En fin de processus, sur le ou les candidats finalistes. Plus tôt, vous payez des vérifications sur des profils qui ne seront pas retenus ; plus tard, après la promesse d'embauche, un écart découvert devient beaucoup plus difficile à traiter.",
    },
    {
      question: "Que faire si un écart apparaît après l'embauche ?",
      reponse:
        "Tout dépend de sa nature et de son lien avec le poste. Un diplôme inventé pour un emploi qui l'exigeait peut justifier une remise en cause du contrat ; un intitulé arrondi, non. C'est une question pour votre avocat, sur la base de faits établis — et la vérification relève alors de notre page [renseignements sur un collaborateur](/enquete-renseignement-collaborateur-toulouse/).",
    },
  ],
  motifsLies: ["enquete-concurrence-deloyale-entreprise", "enquete-solvabilite-recouvrement-toulouse"],
};
