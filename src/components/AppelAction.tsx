import Link from "next/link";
import { AGENCE } from "@/data/agence";
import { PILIERS } from "@/data/navigation";
import Fleche from "@/components/Fleche";

/**
 * CTA de fin de page (§5 du master : chaque page se termine par un lien vers /contact/,
 * ancre orientee benefice — jamais « en savoir plus » ni « cliquez ici »).
 */
export default function AppelAction({
  titre = "Parlons de votre situation, sans engagement",
  texte = "Un premier échange permet de savoir si une enquête est possible, utile, et ce qu'elle impliquerait. Il est gratuit et confidentiel.",
}: {
  titre?: string;
  texte?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ardoise-200">
      <div
        aria-hidden="true"
        className="motif-points absolute -right-16 top-6 h-64 w-64 text-nuit/15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-cta to-marque"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-prose">
          <h2 className="text-2xl font-semibold text-nuit md:text-3xl">{titre}</h2>
          <p className="mt-4 leading-relaxed text-nuit-700">{texte}</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href={PILIERS.contact} className="bouton-primaire">
            Demander un échange confidentiel
            <Fleche />
          </Link>
          <a href={`tel:${AGENCE.telephoneE164}`} className="bouton-secondaire">
            {AGENCE.telephone}
          </a>
        </div>
      </div>
    </section>
  );
}
