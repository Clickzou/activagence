import Link from "next/link";
import type { Metadata } from "next";
import { AGENCE } from "@/data/agence";
import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";

const PATH = "/politique-de-cookies/";

export const metadata: Metadata = pageMetadata({
  title: "Politique de cookies — Activ'Agence Toulouse",
  description: "Quels cookies sont utilisés sur activagencetoulouse.fr et pourquoi.",
  path: PATH,
  noindex: true,
});

export default function PolitiqueCookies() {
  return (
    <>
      <PageHeader
        titre="Politique de cookies"
        chapo="Ce site est conçu pour fonctionner sans traceur publicitaire ni cookie de mesure d'audience tiers."
        filAriane={[{ nom: "Politique de cookies", path: PATH }]}
      />

      <div className="anim-entree mx-auto max-w-prose px-4 py-16 leading-relaxed text-nuit-700 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-nuit [&_p]:mt-4">
        <h2>Ce que nous déposons</h2>
        <p>
          En l&apos;état actuel, ce site ne dépose aucun cookie publicitaire, aucun cookie de
          profilage et aucun traceur de réseau social. Les polices de caractères sont servies
          depuis notre propre serveur&nbsp;: aucune requête n&apos;est adressée à un service
          tiers lors de votre visite.
        </p>

        <h2>Formulaire de contact</h2>
        <p>
          Les informations que vous saisissez dans le formulaire ne sont utilisées que pour
          vous répondre, par le moyen que vous avez choisi. Elles ne sont ni cédées, ni
          louées, ni communiquées à un tiers. Voir les{" "}
          <Link href="/mentions-legales/" className="lien-contenu">
            mentions légales
          </Link>{" "}
          pour l&apos;exercice de vos droits.
        </p>

        <h2>Carte de localisation</h2>
        <p>
          La carte affichée sur la page de contact est fournie par OpenStreetMap et n&apos;est
          chargée qu&apos;au moment où elle devient visible à l&apos;écran.
        </p>

        <h2>Si cela devait changer</h2>
        <p>
          Si un outil de mesure d&apos;audience venait à être installé, cette page serait mise
          à jour et un bandeau de consentement serait affiché avant tout dépôt, conformément
          aux recommandations de la CNIL. Pour toute question&nbsp;: {AGENCE.email}.
        </p>
      </div>
    </>
  );
}
