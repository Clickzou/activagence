import Link from "next/link";
import { AGENCE } from "@/data/agence";
import { PILIERS } from "@/data/navigation";
import Fleche from "@/components/Fleche";

/**
 * Encart lateral des pages internes.
 *
 * Il repond a un defaut de mise en page : le bloc « l'essentiel » occupait la
 * colonne de lecture et laissait la moitie droite vide. Il sert aussi la
 * conversion — le telephone et le CTA restent visibles pendant toute la lecture —
 * et le maillage interne, avec des liens contextuels vers les pages voisines.
 */
export default function AsideContact({
  liens = [],
  titre = "Parler à quelqu'un",
  collant = true,
}: {
  liens?: { libelle: string; href: string }[];
  titre?: string;
  /** `false` pour aligner la hauteur de l'encart sur celle des colonnes voisines. */
  collant?: boolean;
}) {
  return (
    <aside className={collant ? "lg:sticky lg:top-28" : "h-full"}>
      <div
        className={`overflow-hidden rounded-2xl border border-ardoise-100 shadow-carte${
          collant ? "" : " flex h-full flex-col"
        }`}
      >
        <div className="bg-nuit px-7 py-7 text-white">
          <p className="font-display text-lg font-semibold">{titre}</p>
          <p className="mt-2 text-sm leading-relaxed text-ardoise-200">
            Le premier échange est gratuit, confidentiel, et n&apos;engage à rien.
          </p>
          <a
            href={`tel:${AGENCE.telephoneE164}`}
            className="mt-5 block font-display text-2xl font-semibold text-cta transition-colors hover:text-white"
          >
            {AGENCE.telephone}
          </a>
          <p className="mt-1 text-xs text-ardoise-400">{AGENCE.horaires.libelle}</p>

          <Link href={PILIERS.contact} className="bouton-primaire mt-6 w-full">
            Écrire à l&apos;agence
            <Fleche />
          </Link>
        </div>

        <div className="bg-white px-7 py-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-ardoise-400">
            Agréments CNAPS
          </p>
          <ul className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed text-nuit-700">
            {AGENCE.cnaps.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>

        {liens.length > 0 && (
          <nav
            aria-label="Pages liées"
            className="flex-1 border-t border-ardoise-100 bg-ardoise-50 px-7 py-6"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-ardoise-400">
              À lire aussi
            </p>
            <ul className="mt-3 space-y-2.5 text-sm">
              {liens.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-start gap-2 text-nuit-700 transition-colors hover:text-cta-600"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cta"
                    />
                    <span className="leading-snug">{l.libelle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </aside>
  );
}
