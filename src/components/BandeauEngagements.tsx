import {
  IconeAgrement,
  IconeAnciennete,
  IconeDiscretion,
  IconeRapport,
} from "@/components/IconesPreuve";

/**
 * Les quatre engagements de l'agence, sur fond sombre.
 *
 * Bloc de réassurance placé en fin de parcours, avant la FAQ : c'est le moment
 * où le visiteur a compris ce qu'on fait et se demande à qui il a affaire.
 */
const ENGAGEMENTS = [
  {
    Icone: IconeAgrement,
    t: "Un cadre légal strict",
    d: "Constatations dans les lieux ouverts au public uniquement. Aucun traceur, aucune intrusion, aucune écoute.",
  },
  {
    Icone: IconeDiscretion,
    t: "Une discrétion réelle",
    d: "Véhicules banalisés, aucun contact avec l'entourage, aucun message identifiable sans votre accord.",
  },
  {
    Icone: IconeRapport,
    t: "Un rapport exploitable",
    d: "Constatations datées et horodatées, supports annexés, rédigées pour être produites devant un juge.",
  },
  {
    Icone: IconeAnciennete,
    t: "Un devis, puis rien",
    d: "Budget maximum fixé avant tout démarrage. Aucun dépassement sans votre accord écrit.",
  },
];

export default function BandeauEngagements({ titre }: { titre: string }) {
  return (
    <section className="bg-nuit py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <p className="surtitre !text-cta">Nos engagements</p>
        <h2 className="mt-5 max-w-2xl text-2xl font-semibold md:text-3xl">{titre}</h2>
        <dl className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ENGAGEMENTS.map(({ Icone, t, d }) => (
            <div key={t}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cta ring-1 ring-inset ring-white/15">
                <Icone />
              </span>
              <dt className="mt-5 font-display text-lg font-semibold text-white">{t}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ardoise-200">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
