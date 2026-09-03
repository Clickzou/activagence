import Link from "next/link";
import type { Metadata } from "next";
import { AGENCE } from "@/data/agence";
import { PILIERS } from "@/data/navigation";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, filArianeSchema, grapheJsonLd } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import AppelAction from "@/components/AppelAction";

const PATH = PILIERS.faq;

export const metadata: Metadata = pageMetadata({
  title: "Détective privé : questions fréquentes — Activ'Agence",
  description:
    "Cadre légal, déroulement, confidentialité, tarifs, recevabilité du rapport : les réponses aux questions posées à notre agence de détectives à Toulouse.",
  path: PATH,
});

/**
 * Reprise et developpement des 9 questions de l'ancienne page /faqs/, qui n'etait
 * balisee par aucun FAQPage. Le format question/reponse est celui que les moteurs
 * generatifs extraient en priorite : chaque reponse doit se comprendre seule.
 */
const QUESTIONS = [
  {
    question: "Quels types d'enquêtes votre agence propose-t-elle ?",
    reponse:
      "Nous couvrons trois grands domaines. Pour les particuliers : enquêtes conjugales et familiales, recherche de personne, révision de pension alimentaire, droit de garde, enquête de solvabilité. Pour les entreprises : concurrence déloyale, contrefaçon, vol interne, contrôle d'un arrêt de travail, vérification avant embauche, contre-espionnage. Et pour les deux : filatures, surveillances, détection de matériel d'écoute et de traceurs GPS.",
  },
  {
    question: "Comment engager vos services ?",
    reponse:
      `Par téléphone au ${AGENCE.telephone}, par e-mail, ou via le formulaire du site en choisissant le moyen par lequel vous souhaitez être recontacté. Le premier échange est gratuit et confidentiel. Si une enquête est pertinente, nous établissons un devis écrit ; rien ne démarre sans votre accord.`,
  },
  {
    question: "Quelle discrétion assurez-vous ?",
    reponse:
      "Votre identité n'est jamais communiquée à un tiers. Nos intervenants ne se présentent jamais au nom de leur client et travaillent avec des véhicules banalisés. Nous ne vous contactons que par le moyen que vous avez choisi et ne laissons aucun message identifiable sans votre accord. Le rapport vous est remis directement.",
  },
  {
    question: "Comment se déroule une enquête ?",
    reponse:
      "En sept étapes : premier échange gratuit, définition précise du fait à établir, devis écrit avec budget maximum, vérifications documentaires, investigation de terrain, point d'étape après les premières vacations, puis remise du rapport. Les vérifications documentaires précèdent presque toujours le terrain, car ce qui peut être trouvé sans sortir n'a pas à être payé en heures de surveillance.",
  },
  {
    question: "Quels sont les coûts associés à vos services ?",
    reponse:
      "Ils dépendent du type d'investigation, du nombre d'intervenants nécessaires et de la durée. Une recherche documentaire et une filature de plusieurs jours n'ont rien de comparable. Le premier échange et le devis sont gratuits, et le devis fixe un budget maximum qui ne sera pas dépassé sans votre accord.",
  },
  {
    question: "Comment être sûr que vos détectives sont qualifiés ?",
    reponse:
      `La profession est réglementée par le Livre VI du Code de la sécurité intérieure et contrôlée par le CNAPS. Activ'Agence exerce sous deux autorisations : ${AGENCE.cnaps.join(" et ")}. Ces numéros sont vérifiables. Une agence qui ne les affiche pas exerce illégalement, et son rapport sera contestable dans son principe même.`,
  },
  {
    question: "Dans quels secteurs intervenez-vous ?",
    reponse:
      "Notre agence est installée 23 boulevard des Minimes à Toulouse. Nous intervenons dans toute l'agglomération — Blagnac, Colomiers, Tournefeuille, Muret, Balma —, puis en Haute-Garonne et dans le reste de l'Occitanie. Des missions plus éloignées restent possibles selon leur nature.",
  },
  {
    question: "Quelle est la durée typique d'une enquête ?",
    reponse:
      "Une vérification documentaire se règle souvent en quelques jours. Une surveillance destinée à établir un fait répété demande plusieurs vacations d'observation, parfois espacées sur deux à trois semaines pour couvrir des jours et des horaires différents. Nous vous tenons informé de l'avancement et de toute modification de la durée prévue.",
  },
  {
    question: "Comment le rapport d'enquête m'est-il remis ?",
    reponse:
      "Confidentiellement, par le moyen que vous choisissez : remise en main propre dans nos bureaux, envoi électronique sécurisé ou courrier postal. Le rapport contient l'objet de la mission, la période et les moyens employés, le récit chronologique horodaté des constatations, les éléments matériels annexés et des conclusions strictement factuelles.",
  },
  {
    question: "Puis-je faire suivre quelqu'un sans motif particulier ?",
    reponse:
      "Non. Le commanditaire doit justifier d'un intérêt légitime : une procédure engagée ou envisagée, un litige, une décision à prendre. La curiosité, la jalousie ou la volonté de nuire n'en sont pas. C'est une condition de la légalité de la mission — et de l'utilisation du rapport devant un juge.",
  },
  {
    question: "Que refusez-vous de faire, même si on vous le demande ?",
    reponse:
      "Poser un traceur GPS sur un véhicule à l'insu de son utilisateur, intercepter des communications, accéder à des comptes ou des messageries, pénétrer dans un domicile ou un lieu privé, et surveiller une personne de manière permanente et disproportionnée. Ces procédés rendent la preuve inutilisable et exposent pénalement celui qui les commande comme celui qui les exécute.",
  },
  {
    question: "Travaillez-vous avec les avocats ?",
    reponse:
      "Régulièrement, et c'est souvent la formule la plus efficace. L'avocat sait quel fait précis doit être établi pour servir le dossier ; cette précision raccourcit l'enquête et en réduit le coût. Nous pouvons échanger directement avec le vôtre, avec votre accord.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={grapheJsonLd(
          faqSchema(QUESTIONS),
          filArianeSchema([{ nom: "Questions fréquentes", path: PATH }]),
        )}
      />

      <PageHeader
        titre="Questions fréquentes sur le métier de détective privé"
        chapo="Le cadre légal, le déroulement d'une mission, la confidentialité, les tarifs et la valeur du rapport : les réponses aux questions que l'on nous pose le plus souvent."
        filAriane={[{ nom: "Questions fréquentes", path: PATH }]}
        reperes={[
          "Cadre légal",
          "Déroulement d'une mission",
          "Confidentialité",
          "Tarifs",
        ]}
        image={{
          src: "/images/detective-prive-toulouse-materiels.webp",
          alt: "Détective privé photographiant au téléobjectif depuis l'habitacle d'un véhicule",
        }}
      />

      <Faq items={QUESTIONS} titre="Vos questions, nos réponses" />

      <div className="mx-auto max-w-4xl px-4 pb-8">
        <p className="max-w-prose leading-relaxed text-nuit-700">
          Vous ne trouvez pas votre réponse&nbsp;? Trois pages vont plus loin&nbsp;:{" "}
          <Link href={PILIERS.preuve} className="lien-contenu">
            la recevabilité du rapport en justice
          </Link>
          ,{" "}
          <Link href={PILIERS.tarifs} className="lien-contenu">
            les tarifs et le déroulement d&apos;une enquête
          </Link>{" "}
          et{" "}
          <Link href={PILIERS.filature} className="lien-contenu">
            le déroulement d&apos;une filature
          </Link>
          .
        </p>
      </div>

      <AppelAction
        titre="Votre question n'est pas dans cette liste ?"
        texte="Posez-la directement. Le premier échange est gratuit, confidentiel, et n'engage à rien."
      />
    </>
  );
}
