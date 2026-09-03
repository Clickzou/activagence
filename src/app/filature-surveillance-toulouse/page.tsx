import type { Metadata } from "next";
import { PILIERS } from "@/data/navigation";
import { CONTENU_FILATURE } from "@/lib/piliers/filature";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, filArianeSchema, grapheJsonLd, serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import CorpsIllustre from "@/components/CorpsIllustre";
import Faq from "@/components/Faq";
import AppelAction from "@/components/AppelAction";
import {
  IconeAgrement,
  IconeAnciennete,
  IconeDiscretion,
  IconeRapport,
} from "@/components/IconesPreuve";

const PATH = PILIERS.filature;

export const metadata: Metadata = pageMetadata({
  title: "Filature et surveillance à Toulouse — Activ'Agence",
  description:
    "Comment se déroule une filature, quels moyens elle mobilise et ce que la loi autorise. Détectives privés agréés CNAPS à Toulouse depuis 30 ans.",
  path: PATH,
});

const FAQ = [
  {
    question: "Combien de détectives faut-il pour une filature ?",
    reponse:
      "Cela dépend du terrain. Une surveillance statique devant un domicile peut se conduire à un intervenant. Une filature mobile en centre-ville de Toulouse, avec des changements de mode de transport, en demande généralement deux ou plus : un seul véhicule qui suit trop longtemps finit toujours par être repéré. Nous dimensionnons l'équipe selon l'objectif, et nous vous le disons avant de commencer.",
  },
  {
    question: "Une filature peut-elle échouer ?",
    reponse:
      "Oui, et il faut le savoir avant de s'engager. La personne peut ne pas sortir, changer d'habitude, ou l'objectif recherché peut ne pas se produire pendant la vacation. C'est pour cela que nous raisonnons en vacations d'observation, et que nous faisons un point après les premières : poursuivre n'a de sens que si les premiers éléments le justifient.",
  },
  {
    question: "Est-il légal de suivre quelqu'un dans la rue ?",
    reponse:
      "Un détective privé autorisé peut observer et constater des faits dans les lieux ouverts au public, dès lors que son client a un intérêt légitime et que l'atteinte à la vie privée reste proportionnée. En revanche, entrer dans un lieu privé, poser un traceur GPS sur un véhicule ou surveiller une personne de manière permanente sont illicites — et rendraient la preuve inutilisable.",
  },
  {
    question: "Peut-on filmer ou photographier la personne ?",
    reponse:
      "Nous photographions des faits visibles depuis l'espace public, dans la stricte mesure nécessaire à l'établissement de ce qui nous a été demandé. Les clichés sont annexés au rapport et référencés par date et heure. Ils ne sont jamais diffusés, publiés ni communiqués à un tiers.",
  },
];

export default function Filature() {
  return (
    <>
      <JsonLd
        data={grapheJsonLd(
          serviceSchema({
            nom: "Filature et surveillance à Toulouse",
            description:
              "Filatures mobiles, surveillances statiques et constatations horodatées dans l'agglomération toulousaine.",
            path: PATH,
          }),
          filArianeSchema([{ nom: "Filature et surveillance", path: PATH }]),
          faqSchema(FAQ),
        )}
      />

      <PageHeader
        titre="Filature et surveillance à Toulouse"
        chapo="Une filature ne s'improvise pas. Elle demande des moyens, des relais et une méthode — parce qu'un intervenant repéré, c'est une mission perdue et une personne mise en alerte."
        filAriane={[{ nom: "Filature et surveillance", path: PATH }]}
        reperes={[
          "Véhicules banalisés",
          "Constatations horodatées",
          "Toulouse et son agglomération",
        ]}
        image={{
          src: "/images/agence-detective-prive-toulouse-camionnette-espion.webp",
          alt: "Poste d'observation équipé à l'intérieur d'une camionnette de surveillance",
        }}
      />

      <CorpsIllustre
        essentiel="La filature consiste à observer les déplacements et les rencontres d'une personne dans les lieux ouverts au public, afin d'établir des faits précis et datables. À Toulouse, Activ'Agence conduit ces missions avec ses propres moyens : autos et motos banalisées, camionnettes de surveillance, laboratoire photo et vidéo, liaisons radio entre le bureau et les intervenants sur le terrain. Une filature se compte en vacations d'observation, pas en heures isolées : établir un fait répété — une relation, une activité concurrente, une cohabitation — suppose plusieurs sorties à des jours et horaires différents. Ce que nous constatons est consigné avec sa date et son heure, puis remis dans un rapport écrit destiné à être produit en justice."
        contenu={CONTENU_FILATURE}
        citation="Un intervenant repéré, c'est une mission perdue et une personne mise en alerte. C'est pour cela qu'une filature se prépare."
        imageCitation={{
          src: "/images/detective-prive-toulouse-surveillance.webp",
          alt: "Rue au crépuscule vue depuis un véhicule de surveillance, téléobjectif posé sur le tableau de bord",
        }}
        colonneSurtitre="Nos moyens"
        colonneTitre="Ce que nous engageons sur le terrain"
        colonne={[
          {
            Icone: IconeDiscretion,
            titre: "Véhicules banalisés",
            texte: "Autos, motos et camionnettes aménagées, changées d'une vacation à l'autre.",
            href: PILIERS.filature,
          },
          {
            Icone: IconeRapport,
            titre: "Laboratoire photo et vidéo",
            texte: "Prises de vue à distance, clichés horodatés et annexés au rapport.",
            href: PILIERS.preuve,
          },
          {
            Icone: IconeAgrement,
            titre: "Détection technique",
            texte: "Recherche de dispositifs d'écoute, de traceurs GPS et de logiciels espions.",
            href: PILIERS.particuliers,
          },
          {
            Icone: IconeAnciennete,
            titre: "Liaisons radio",
            texte: "Coordination entre le bureau et les intervenants pendant toute la vacation.",
            href: PILIERS.tarifs,
          },
        ]}
        visuels={[
          {
            src: "/images/agence-detective-prive-toulouse-camionnette-espion.webp",
            alt: "Poste d'observation équipé à l'intérieur d'une camionnette de surveillance",
          },
          {
            src: "/images/contexte-suivi-urbain.webp",
            alt: "Carrefour urbain vu depuis l'habitacle d'un véhicule à l'arrêt",
          },
          {
            src: "/images/contexte-equipe-relais.webp",
            alt: "Deux véhicules banalisés stationnés l'un derrière l'autre le long d'un trottoir",
          },
        ]}
        asideTitre="Une situation à faire constater ?"
        asideLiens={[
          { libelle: "La valeur du rapport en justice", href: PILIERS.preuve },
          { libelle: "Tarifs et déroulement d'une enquête", href: PILIERS.tarifs },
          { libelle: "Nos enquêtes pour les particuliers", href: PILIERS.particuliers },
          { libelle: "Nos enquêtes pour les entreprises", href: PILIERS.entreprise },
        ]}
        engagementsTitre="Ce que nous garantissons sur chaque mission"
        avecMoyens={false}
      />

      <Faq items={FAQ} titre="Questions sur les filatures" />

      <AppelAction
        titre="Une situation à faire constater ?"
        texte="Expliquez-nous ce que vous cherchez à établir. Nous vous dirons quels moyens seraient nécessaires, sur quelle durée, et si le résultat est réaliste."
      />
    </>
  );
}
