import Link from "next/link";
import Image from "next/image";
import { VILLES } from "@/lib/villes";
import { ZONE_INTERVENTION } from "@/data/agence";
import Fleche from "@/components/Fleche";

/**
 * Section de maillage entre les pages villes, en bas de chaque page locale.
 *
 * Raison d'etre : les six pages villes forment un silo horizontal. Sans lien
 * entre elles, chacune ne recoit que le lien descendant de l'accueil et reste
 * une impasse. Une section visible en fin de lecture — la ou le visiteur qui
 * n'habite pas la commune affichee cherche la sienne — sert donc autant le
 * maillage interne que la navigation reelle.
 *
 * Chaque carte reprend le visuel d'en-tete de la commune ciblee : ce sont six
 * images distinctes, jamais un visuel generique repete six fois.
 */
export default function AutresVilles({ sauf }: { sauf: string }) {
  const autres = VILLES.filter((v) => v.slug !== sauf);
  if (autres.length === 0) return null;

  return (
    <section className="bg-ardoise-50 px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]">
      <div className="mx-auto max-w-6xl">
        <p className="surtitre">Zone d&apos;intervention</p>
        <h2 className="mt-4 max-w-3xl text-2xl font-semibold text-nuit md:text-3xl">
          Détective privé dans les autres communes de l&apos;agglomération
        </h2>
        <p className="mt-5 max-w-prose leading-relaxed text-nuit-700">
          Chaque commune a son propre terrain, et donc ses propres contraintes de
          surveillance. Voici comment nous y travaillons.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {autres.map((v) => (
            <li key={v.slug}>
              <Link
                href={`/${v.slug}/`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ardoise-100 bg-white shadow-carte transition-colors hover:border-cta"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={v.image.src}
                    alt={v.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-nuit">
                    Détective privé à {v.nom}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-nuit-700">
                    {v.situation.charAt(0).toUpperCase() + v.situation.slice(1)}.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cta-600">
                    Voir la page
                    <span className="transition-transform group-hover:translate-x-1">
                      <Fleche />
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-prose text-sm leading-relaxed text-ardoise-400">
          Nous intervenons également dans le reste de la Haute-Garonne et en Occitanie —{" "}
          {ZONE_INTERVENTION.villesEtendues.join(", ")} — selon la nature de la mission.
        </p>
      </div>
    </section>
  );
}
