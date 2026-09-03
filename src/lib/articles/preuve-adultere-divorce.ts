import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "preuve-adultere-divorce-recevable",
  titre: "Preuve d'adultère et divorce : ce que le juge accepte, ce qu'il écarte",
  metaTitre: "Preuve d'adultère : ce qui est recevable au divorce",
  metaDescription:
    "Constat de détective, SMS, géolocalisation, témoignages : ce qui constitue une preuve d'adultère recevable devant le juge aux affaires familiales.",
  essentiel:
    "Devant le juge aux affaires familiales, la preuve de l'adultère est libre : elle peut résulter d'un constat de détective privé, d'attestations de témoins, de documents ou de tout élément matériel. Mais cette liberté a une limite stricte, posée par l'article 259-1 du Code civil : un époux ne peut pas verser aux débats un élément obtenu par violence ou par fraude. C'est la raison pour laquelle les captures d'écran d'une messagerie ouverte à l'insu du conjoint, les enregistrements clandestins et les traceurs GPS posés sur un véhicule sont massivement écartés — et exposent celui qui les produit à des poursuites pénales. À l'inverse, le rapport d'un détective privé autorisé par le CNAPS, construit sur des constatations faites dans des lieux ouverts au public et proportionnées au but poursuivi, est un mode de preuve admis et régulièrement retenu.",
  chapo:
    "Beaucoup de dossiers de divorce achoppent non pas sur l'absence de preuve, mais sur la manière dont elle a été obtenue. Voici la ligne de partage entre ce qu'un juge retient et ce qu'il écarte.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  datePublication: "2026-09-02",
  statut: "publie",
  image: {
    src: "/images/article-preuve-adultere.webp",
    alt: "Table de cuisine avec deux chaises, une seule tasse utilisée et un trousseau de clés",
  },
  liensExternes: [
    {
      ancre: "article 259-1 du Code civil",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006426506",
      motif: "Texte qui interdit de produire une preuve obtenue par violence ou fraude.",
    },
    {
      ancre: "article 9 du Code de procédure civile",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006410096",
      motif: "Principe de la charge et de la loyauté de la preuve.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Autorité qui délivre et contrôle les autorisations d'exercice.",
    },
    {
      ancre: "service-public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F10113",
      motif: "Présentation officielle du divorce pour faute.",
    },
  ],
  contenu: [
    {
      type: "titre2",
      texte: "L'adultère est-il encore une faute en 2026 ?",
    },
    {
      type: "paragraphe",
      texte:
        "Oui. L'adultère n'est plus une infraction pénale depuis 1975, mais il reste une violation du devoir de fidélité prévu par l'article 212 du Code civil. À ce titre, il peut fonder un divorce pour faute lorsqu'il constitue une violation grave ou renouvelée des devoirs du mariage rendant intolérable le maintien de la vie commune.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette nuance a des conséquences pratiques. Le juge n'est pas tenu de prononcer le divorce aux torts exclusifs d'un époux au seul motif qu'une relation a existé : il apprécie les circonstances, l'ancienneté de la séparation de fait, l'attitude des deux conjoints. Une relation nouée après plusieurs années de séparation effective n'a pas la même portée qu'une relation dissimulée pendant la vie commune.",
    },
    {
      type: "paragraphe",
      texte:
        "L'enjeu réel est souvent moins le prononcé du divorce que ses conséquences : prestation compensatoire, dommages et intérêts sur le fondement de l'article 1240 du Code civil, et parfois la question de savoir si le conjoint qui perçoit une pension vit en réalité en couple — ce qui change la donne financièrement.",
    },
    {
      type: "titre2",
      texte: "Le principe : une preuve libre, mais loyale",
    },
    {
      type: "paragraphe",
      texte:
        "En matière de divorce, la preuve est libre. Elle peut résulter d'un constat, d'attestations, de courriers, de photographies, de relevés bancaires ou de tout autre élément. Cette liberté est cependant encadrée par deux textes qu'il faut connaître avant de constituer un dossier.",
    },
    {
      type: "paragraphe",
      texte:
        "Le premier est l'article 259-1 du Code civil : un époux ne peut verser aux débats un élément de preuve qu'il aurait obtenu par violence ou par fraude. Le second est l'article 9 du Code de procédure civile, dont découle l'exigence générale de loyauté de la preuve. Ensemble, ils dessinent une ligne simple : ce que vous obtenez en violant l'intimité ou la confiance de l'autre ne vous servira pas, et pourra se retourner contre vous.",
    },
    {
      type: "encadre",
      titre: "La question à se poser avant de produire une pièce",
      texte:
        "« Ai-je obtenu cet élément en accédant à quelque chose qui ne m'était pas ouvert ? » Si la réponse est oui — une messagerie, un téléphone, un ordinateur, un lieu privé, un véhicule —, la pièce est probablement irrecevable, et sa production peut vous exposer.",
    },
    {
      type: "titre2",
      texte: "Ce que le juge écarte le plus souvent",
    },
    {
      type: "titre3",
      texte: "Les messages lus sur le téléphone du conjoint",
    },
    {
      type: "paragraphe",
      texte:
        "C'est le cas le plus fréquent, et le plus mal compris. Le fait que les époux vivent sous le même toit ne crée aucun droit d'accès au téléphone, à la messagerie ou aux comptes de l'autre. Des captures d'écran obtenues en déverrouillant un appareil à l'insu de son propriétaire relèvent de la fraude au sens de l'article 259-1, et peuvent en outre caractériser une atteinte au secret des correspondances.",
    },
    {
      type: "paragraphe",
      texte:
        "La nuance existe : un message qui s'affiche en notification sur un écran verrouillé, visible sans manipulation, est dans une situation différente de messages consultés après déverrouillage. Mais cette nuance est fragile, dépend de l'appréciation du juge, et ne constitue jamais une stratégie sur laquelle bâtir un dossier.",
    },
    {
      type: "titre3",
      texte: "Les enregistrements réalisés à l'insu de l'autre",
    },
    {
      type: "paragraphe",
      texte:
        "Enregistrer une conversation privée sans le consentement de son interlocuteur est pénalement réprimé. En matière civile, la jurisprudence a évolué vers une appréciation au cas par cas de la proportionnalité, mais en droit de la famille la prudence reste de mise : produire un enregistrement clandestin, c'est prendre le risque de voir la pièce écartée et de fournir à la partie adverse un argument sur son propre comportement.",
    },
    {
      type: "titre3",
      texte: "Le traceur GPS posé sur le véhicule",
    },
    {
      type: "paragraphe",
      texte:
        "Poser un dispositif de géolocalisation sur le véhicule d'une personne à son insu constitue une atteinte à la vie privée, y compris entre époux, y compris sur un véhicule commun. C'est l'un des rares points sur lesquels il n'existe aucune zone grise. Un professionnel qui vous le proposerait ne serait pas un professionnel.",
    },
    {
      type: "avertissement",
      titre: "Le risque n'est pas seulement procédural",
      texte:
        "Au-delà du rejet de la pièce, ces procédés peuvent donner lieu à une plainte de votre conjoint. Il arrive qu'un dossier bien parti se retourne parce que la preuve a été mal obtenue : vous perdez l'élément, et vous fournissez à l'autre partie un grief qu'elle n'avait pas.",
    },
    {
      type: "image",
      src: "/images/justice-salle-audience.webp",
      alt: "Salle d'audience vide, bancs de bois et lumière du jour par les hautes fenêtres",
      legende:
        "C'est ici que se joue la différence entre une pièce retenue et une pièce écartée : le mode d'obtention pèse autant que le contenu.",
    },
    {
      type: "titre2",
      texte: "Ce que le juge retient",
    },
    {
      type: "tableau",
      entetes: ["Élément produit", "Statut habituel", "Ce qui fait la différence"],
      lignes: [
        [
          "Rapport de détective privé autorisé",
          "Recevable",
          "Constatations dans des lieux publics, datées, proportionnées au but poursuivi",
        ],
        [
          "Attestation de témoin (art. 202 CPC)",
          "Recevable",
          "Forme respectée, faits personnellement constatés, témoin non descendant du couple",
        ],
        [
          "Constat d'huissier de justice",
          "Recevable",
          "Réalisé dans le respect du domicile et sans provocation",
        ],
        [
          "Messages obtenus en déverrouillant un appareil",
          "Écarté le plus souvent",
          "Accès non autorisé = fraude au sens de l'article 259-1",
        ],
        [
          "Enregistrement clandestin",
          "Fragile à écarté",
          "Atteinte au droit à la vie privée, appréciation stricte en droit de la famille",
        ],
        [
          "Traceur GPS posé à l'insu",
          "Écarté",
          "Atteinte caractérisée, quelle que soit la propriété du véhicule",
        ],
      ],
      legende:
        "Synthèse indicative : chaque dossier reste apprécié souverainement par le juge, au regard de sa proportionnalité.",
    },
    {
      type: "paragraphe",
      texte:
        "L'attestation de témoin mérite une précision qui surprend souvent : les descendants du couple ne peuvent jamais être entendus sur les griefs invoqués par les époux. Un enfant, même majeur, ne peut donc pas témoigner de l'infidélité d'un parent. C'est une règle protectrice, régulièrement méconnue, qui prive certains dossiers de leur pièce principale.",
    },
    {
      type: "titre2",
      texte: "Pourquoi le constat de détective tient, lui",
    },
    {
      type: "paragraphe",
      texte:
        "Le rapport d'un détective privé n'est pas un document plus puissant qu'un autre : il est simplement obtenu dans des conditions qui ne prêtent pas le flanc à la contestation. Trois éléments l'expliquent.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "L'enquêteur est titulaire d'une autorisation délivrée par le CNAPS, vérifiable, et exerce une profession réglementée par le Livre VI du Code de la sécurité intérieure.",
        "Les constatations sont faites dans des lieux ouverts au public : une rue, un parking, l'entrée d'un immeuble. Aucune intrusion, aucun accès à un contenu privé.",
        "Le commanditaire justifie d'un intérêt légitime — une procédure de divorce engagée ou envisagée —, et l'atteinte à la vie privée reste proportionnée à ce but.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un rapport utile n'affirme rien : il constate. La différence entre une pièce qui emporte la conviction et une pièce qui reste sans effet tient presque toujours à ce niveau de précision. « La personne semble entretenir une relation » ne prouve rien. « Le 14 mars à 19 h 42, X est entré au 12 rue Y en compagnie de Z, et en est ressorti le 15 mars à 7 h 20 » est un fait.",
    },
    {
      type: "encadre",
      titre: "Un fait isolé ne suffit presque jamais",
      texte:
        "Une seule soirée constatée s'explique de mille manières. Ce qui emporte la conviction, c'est la répétition documentée : plusieurs constatations, à des dates et à des horaires différents, qui établissent une régularité. C'est aussi ce qui explique qu'une enquête se compte en vacations d'observation et non en heures isolées.",
    },
    {
      type: "titre2",
      texte: "Ce que l'adultère change concrètement dans un divorce",
    },
    {
      type: "paragraphe",
      texte:
        "On imagine souvent que prouver l'infidélité règle tout. En pratique, son effet se joue sur trois terrains distincts, qu'il vaut mieux distinguer avant d'engager des frais d'enquête.",
    },
    {
      type: "titre3",
      texte: "Le prononcé du divorce aux torts exclusifs",
    },
    {
      type: "paragraphe",
      texte:
        "C'est l'effet le plus visible, mais pas toujours le plus utile. Le divorce prononcé aux torts exclusifs d'un époux ne modifie plus, en soi, la liquidation du régime matrimonial : le partage des biens obéit à ses propres règles. Sa portée est d'abord morale et symbolique — ce qui, pour certaines personnes, compte réellement, et il n'y a rien à redire à cela dès lors que c'est assumé comme tel.",
    },
    {
      type: "titre3",
      texte: "Les dommages et intérêts",
    },
    {
      type: "paragraphe",
      texte:
        "L'époux qui subit un préjudice distinct de celui résultant de la rupture peut demander réparation, sur le fondement de l'article 1240 du Code civil ou de l'article 266 en cas de dissolution particulièrement grave. Ici, la manière dont l'infidélité s'est manifestée pèse davantage que son existence : des circonstances humiliantes, publiques, ou une situation prolongée entretenue au su de l'entourage n'ont pas la même portée qu'une relation discrète et tardive.",
    },
    {
      type: "titre3",
      texte: "La prestation compensatoire",
    },
    {
      type: "paragraphe",
      texte:
        "C'est souvent l'enjeu financier principal, et c'est là que le constat prend toute sa valeur — non pas pour établir l'infidélité elle-même, mais pour éclairer la situation matérielle réelle de l'autre époux. Un conjoint qui déclare vivre seul alors qu'il partage effectivement un domicile et des charges présente au juge une situation qui n'est pas la sienne. Le déséquilibre que la prestation compensatoire est censée corriger s'apprécie sur des faits, pas sur des déclarations.",
    },
    {
      type: "titre2",
      texte: "Le calendrier : pourquoi le moment compte plus qu'on ne le croit",
    },
    {
      type: "paragraphe",
      texte:
        "Dans notre pratique, la variable qui détermine le plus souvent la réussite d'une enquête n'est ni le budget ni les moyens engagés : c'est le moment où elle est lancée.",
    },
    {
      type: "paragraphe",
      texte:
        "Tant que rien n'a été dit, les habitudes sont stables et les précautions faibles. Dès qu'une séparation est annoncée, qu'un avocat est consulté ou qu'une conversation tendue a eu lieu, tout change : les trajets se modifient, les rendez-vous se déplacent, la vigilance augmente. Une situation qui se serait documentée en trois vacations d'observation peut alors en demander le double, sans garantie de résultat.",
    },
    {
      type: "encadre",
      titre: "L'erreur la plus coûteuse",
      texte:
        "Confronter son conjoint avant d'avoir constaté quoi que ce soit. C'est humain, et c'est compréhensible — mais c'est aussi le geste qui referme la porte. Après la confrontation, la personne sait qu'elle est soupçonnée, et adapte son comportement en conséquence.",
    },
    {
      type: "paragraphe",
      texte:
        "Cela ne signifie pas qu'il faille se précipiter. Cela signifie que si une enquête doit avoir lieu, elle a intérêt à précéder l'annonce plutôt qu'à la suivre. C'est un point que nous abordons systématiquement lors du premier échange, avant même de parler de moyens ou de budget.",
    },
    {
      type: "titre2",
      texte: "Le cas particulier de la pension alimentaire",
    },
    {
      type: "paragraphe",
      texte:
        "Après le divorce, la question se déplace souvent : l'ex-conjoint qui perçoit une prestation ou une pension vit-il en réalité en couple, sans l'avoir déclaré ? La réponse a des conséquences financières directes, et repose exactement sur la même logique probatoire.",
    },
    {
      type: "paragraphe",
      texte:
        "Ici encore, un fait isolé ne prouve rien. Ce qui établit une vie maritale, c'est la stabilité et la continuité : une présence répétée au même domicile, constatée à des jours et des heures variés, sur une période suffisante, appuyée par des éléments matériels concordants — un véhicule systématiquement stationné, une boîte aux lettres, des habitudes de vie communes.",
    },
    {
      type: "titre2",
      texte: "Comment constituer un dossier utile",
    },
    {
      type: "listeOrdonnee",
      items: [
        "Parlez-en d'abord à votre avocat. C'est lui qui sait quel fait précis doit être établi pour servir votre dossier — et cette précision raccourcit l'enquête, donc son coût.",
        "Ne touchez à rien qui appartienne à l'autre : téléphone, ordinateur, courrier, véhicule. Une pièce obtenue ainsi est perdue, et elle vous expose.",
        "Rassemblez ce que vous détenez légitimement : documents en votre possession, relevés de comptes joints, éléments matériels de votre propre domicile.",
        "Identifiez les témoins possibles, en excluant vos enfants et vos descendants, qui ne peuvent pas être entendus sur ces griefs.",
        "Faites établir les constatations par un professionnel autorisé, avant que la situation ne change ou que les habitudes ne se modifient.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le facteur temps compte davantage qu'on ne l'imagine. Une séparation qui devient officielle modifie les comportements : les habitudes changent, les précautions augmentent. Les constatations les plus nettes sont, dans la pratique, celles réalisées avant que la procédure ne soit annoncée. La méthode de terrain est détaillée sur notre page [filature et surveillance à Toulouse](/filature-surveillance-toulouse/).",
    },
    {
      type: "titre2",
      texte: "Ce qu'il faut retenir",
    },
    {
      type: "paragraphe",
      texte:
        "La preuve de l'adultère est libre, mais elle doit être loyale. Ce qui est obtenu en accédant à ce qui ne vous est pas ouvert sera écarté et pourra se retourner contre vous. Ce qui est constaté dans l'espace public, par un professionnel autorisé, avec un intérêt légitime et de manière proportionnée, est admis et régulièrement retenu. Entre les deux, il n'y a pas de zone confortable : il y a une ligne, et il vaut mieux la connaître avant de constituer son dossier qu'après.",
    },
    {
      type: "paragraphe",
      texte:
        "Le cadre général de la recevabilité est développé sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/). Pour les situations personnelles que nous traitons, voyez [nos enquêtes pour les particuliers](/detective-prive-particuliers-toulouse/) ; pour le fonctionnement du devis, [nos tarifs et le déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Une seule preuve d'adultère suffit-elle pour un divorce pour faute ?",
      reponse:
        "Rarement. Le juge apprécie la gravité et le caractère renouvelé des faits, ainsi que le contexte : ancienneté de la séparation de fait, attitude des deux époux. Un fait unique et ancien pèse peu ; des constatations répétées établissant une relation durant la vie commune pèsent davantage.",
    },
    {
      question: "Mon enfant peut-il témoigner de l'infidélité de son père ou de sa mère ?",
      reponse:
        "Non. Les descendants ne peuvent jamais être entendus sur les griefs invoqués par les époux dans une procédure de divorce. C'est une règle protectrice, souvent méconnue, qui prive certains dossiers de la pièce sur laquelle ils comptaient.",
    },
    {
      question: "Combien de temps faut-il pour établir un constat exploitable ?",
      reponse:
        "Cela dépend de la régularité des faits à constater. Une situation aux habitudes établies peut se documenter en quelques vacations d'observation ; une situation irrégulière en demande davantage, réparties sur des jours et des horaires différents. Le point d'étape après les premières vacations sert précisément à savoir s'il est raisonnable de poursuivre.",
    },
    {
      question: "Mon conjoint sera-t-il informé qu'une enquête a eu lieu ?",
      reponse:
        "Pas pendant l'enquête : les intervenants travaillent avec des véhicules banalisés et ne se présentent jamais. Il en prendra connaissance si, et seulement si, le rapport est produit dans la procédure — ce que vous décidez avec votre avocat.",
    },
  ],
  articlesLies: [],
};
