import Link from "next/link";
import type { GroupeServices } from "@/data/detail-services";
import Fleche from "@/components/Fleche";

/**
 * « Detail des services » : le sommaire des prestations, place juste sous
 * l'en-tete des deux pages piliers.
 *
 * Il tient cette place parce qu'il repond a la premiere question du visiteur —
 * « est-ce que vous traitez mon cas ? » — avant tout argumentaire. Chaque ligne
 * est un lien vers la page dediee de la prestation : c'est aussi le point de
 * depart du maillage descendant du silo.
 */
export default function DetailServices({
  intro,
  groupes,
  titre = "Détail des services",
}: {
  intro: string;
  groupes: GroupeServices[];
  titre?: string;
}) {
  return (
    <section className="border-b border-ardoise-100 bg-white px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]">
      <div className="mx-auto max-w-6xl">
        <p className="surtitre">Nos prestations</p>
        <h2 className="mt-4 max-w-3xl text-2xl font-semibold text-nuit md:text-3xl">
          {titre}
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-nuit-700">{intro}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {groupes.map((groupe) => (
            <div
              key={groupe.titre}
              className="flex flex-col rounded-2xl border border-ardoise-100 bg-ardoise-50 p-7 shadow-carte"
            >
              <h3 className="font-display text-lg font-semibold text-nuit">
                {groupe.titre}
              </h3>
              <ul className="mt-5 flex flex-1 flex-col gap-1">
                {groupe.lignes.map((ligne) => (
                  <li key={ligne.libelle}>
                    <Link
                      href={ligne.href}
                      className="group -mx-3 flex items-start gap-3 rounded-xl px-3 py-2.5 leading-relaxed text-nuit-700 transition-colors hover:bg-white hover:text-cta-600"
                    >
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-cta" />
                      <span className="flex-1 text-[0.95rem]">{ligne.libelle}</span>
                      <span className="mt-0.5 shrink-0 text-cta opacity-0 transition-opacity group-hover:opacity-100">
                        <Fleche />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
