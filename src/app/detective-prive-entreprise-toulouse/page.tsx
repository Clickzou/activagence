import type { Metadata } from "next";
import { PILIERS } from "@/data/navigation";
import { liensMotifs } from "@/lib/motifs";
import { CONTENU_ENTREPRISE } from "@/lib/piliers/entreprise";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, filArianeSchema, grapheJsonLd, serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import DetailServices from "@/components/DetailServices";
import { INTRO_ENTREPRISES, SERVICES_ENTREPRISES } from "@/data/detail-services";
import CorpsIllustre from "@/components/CorpsIllustre";
import Faq from "@/components/Faq";
import AppelAction from "@/components/AppelAction";
import {
  IconeAgrement,
  IconeAnciennete,
  IconeDiscretion,
  IconeRapport,
} from "@/components/IconesPreuve";

const PATH = PILIERS.entreprise;

export const metadata: Metadata = pageMetadata({
  title: "Détective privé entreprise à Toulouse — Activ'Agence",
  description:
    "Concurrence déloyale, arrêt de travail détourné, vol interne, pré-embauche : nos détectives réunissent à Toulouse des preuves opposables en justice.",
  path: PATH,
});

const FAQ = [
  {
    question: "Une entreprise a-t-elle le droit de faire suivre un salarié ?",
    reponse:
      "Elle peut faire réaliser une enquête par un détective privé autorisé, à condition que l'atteinte à la vie privée du salarié soit proportionnée au but poursuivi et que l'employeur ait un motif légitime — un soupçon sérieux de concurrence déloyale ou d'usage détourné d'un arrêt de travail, par exemple. Les investigations se déroulent exclusivement dans des lieux ouverts au public. Une surveillance permanente, une intrusion au domicile ou une géolocalisation à l'insu de la personne sont illicites et rendraient la preuve inutilisable.",
  },
  {
    question: "Le rapport peut-il être produit devant le conseil de prud'hommes ?",
    reponse:
      "Oui. Un rapport établi par une agence autorisée par le CNAPS, à partir de constatations faites dans des lieux publics et proportionnées à l'objectif, constitue un élément de preuve recevable. Sa force dépend de sa qualité : des constatations datées, horodatées, circonstanciées et accompagnées de leurs supports pèsent bien davantage qu'un récit général.",
  },
  {
    question: "Combien de temps dure une enquête en entreprise ?",
    reponse:
      "Une vérification documentaire — solvabilité, existence réelle d'une activité, antécédents professionnels — se règle souvent en quelques jours. Une surveillance destinée à établir des faits répétés demande plusieurs journées d'observation, parfois espacées. Nous fixons ensemble une durée et un budget maximum avant de commencer.",
  },
  {
    question: "L'enquête reste-t-elle confidentielle vis-à-vis de nos salariés ?",
    reponse:
      "Oui. Nos intervenants n'entrent pas dans vos locaux, ne se présentent jamais au nom de votre entreprise et travaillent avec des véhicules banalisés. Le rapport est remis au seul destinataire que vous désignez.",
  },
];



export default function DetectiveEntreprise() {
  return (
    <>
      <JsonLd
        data={grapheJsonLd(
          serviceSchema({
            nom: "Détective privé pour entreprises à Toulouse",
            description:
              "Enquêtes commerciales, techniques et sociales pour les entreprises de Toulouse et d'Occitanie.",
            path: PATH,
          }),
          filArianeSchema([{ nom: "Détective privé pour entreprises", path: PATH }]),
          faqSchema(FAQ),
        )}
      />

      <PageHeader
        titre="Détective privé pour entreprises à Toulouse"
        chapo="Concurrence déloyale, arrêt de travail détourné, vol interne, contrefaçon, vérification avant embauche : nous réunissons les éléments qui permettent de décider et, si nécessaire, d'agir en justice."
        filAriane={[{ nom: "Détective privé pour entreprises", path: PATH }]}
        reperes={[
          "Agence agréée CNAPS",
          "Rapports pour le tribunal de commerce et les prud'hommes",
          "Intervention dans toute l'Occitanie",
        ]}
        image={{
          src: "/images/agence-detective-prive-entreprise-toulouse.webp",
          alt: "Open space d'une entreprise toulousaine, terrain des enquêtes en milieu professionnel",
        }}
      />

      <DetailServices intro={INTRO_ENTREPRISES} groupes={SERVICES_ENTREPRISES} />

      <CorpsIllustre
        essentiel="Activ'Agence intervient depuis 30 ans auprès des entreprises de Toulouse et d'Occitanie, sous double autorisation CNAPS. Nos enquêtes couvrent trois domaines : commercial (solvabilité, recherche d'actifs, concurrence déloyale), technique (contre-espionnage, détection d'écoutes, vol interne) et social (pré-embauche, contrôle d'emploi du temps, activité concurrente d'un salarié). Chaque mission se conclut par un rapport écrit et horodaté, rédigé pour être produit devant un tribunal de commerce ou un conseil de prud'hommes. Un dirigeant nous appelle rarement par curiosité : il appelle parce qu'une décision — licenciement, action en justice, rupture d'un contrat — ne peut pas reposer sur une suspicion."
        contenu={CONTENU_ENTREPRISE}
        citation="Un dirigeant nous appelle rarement par curiosité : il appelle parce qu'une décision ne peut pas reposer sur une suspicion."
        imageCitation={{
          src: "/images/contexte-zone-activite.webp",
          alt: "Zone d'activité en périphérie, quais de livraison et voie de service déserte",
        }}
        colonneSurtitre="Domaines"
        colonneTitre="Ce que nous traitons pour les entreprises"
        colonne={[
          {
            Icone: IconeRapport,
            titre: "Enquêtes commerciales",
            texte: "Solvabilité, recherche d'actifs, concurrence déloyale, contrefaçon.",
            href: "/enquete-solvabilite-recouvrement-toulouse/",
          },
          {
            Icone: IconeAgrement,
            titre: "Enquêtes techniques",
            texte: "Contre-espionnage, détection d'écoutes, vol interne et détournement.",
            href: "/enquete-vol-interne-detournement-entreprise/",
          },
          {
            Icone: IconeAnciennete,
            titre: "Enquêtes sociales",
            texte: "Pré-embauche, activité concurrente, contrôle d'un arrêt de travail.",
            href: "/enquete-arret-maladie-abusif-salarie/",
          },
          {
            Icone: IconeDiscretion,
            titre: "Discrétion vis-à-vis des équipes",
            texte: "Aucune entrée dans vos locaux, aucun contact au nom de l'entreprise.",
            href: PILIERS.filature,
          },
        ]}
        visuels={[
          {
            src: "/images/contexte-zone-activite.webp",
            alt: "Zone d'activité en périphérie, quais de livraison et voie de service déserte",
          },
          {
            src: "/images/agence-detective-prive-toulouse-camionnette-espion.webp",
            alt: "Poste d'observation équipé à l'intérieur d'une camionnette de surveillance",
          },
          {
            src: "/images/agence-detective-prive-entreprise-toulouse.webp",
            alt: "Open space d'une entreprise toulousaine, terrain des enquêtes en milieu professionnel",
          },
        ]}
        asideTitre="Un doute dans votre entreprise ?"
        asideLiens={[
          { libelle: "La valeur du rapport en justice", href: PILIERS.preuve },
          { libelle: "Tarifs et déroulement d'une enquête", href: PILIERS.tarifs },
          { libelle: "Comment se déroule une filature", href: PILIERS.filature },
          { libelle: "Nos enquêtes pour les particuliers", href: PILIERS.particuliers },
        ]}
        engagementsTitre="Ce que nous garantissons à votre entreprise"
      />

      <Faq items={FAQ} titre="Questions des dirigeants" />

      <AppelAction
        titre="Un doute sur une situation dans votre entreprise ?"
        texte="Décrivez-nous le contexte : nous vous dirons si une enquête est légalement possible, ce qu'elle peut établir, et ce qu'elle coûterait. Cet échange est gratuit et couvert par la confidentialité."
      />
    </>
  );
}
