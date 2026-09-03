import type { QuestionReponse } from "@/lib/schema";
import { rendreTexte } from "@/components/ContenuArticle";

/**
 * FAQ en <details> natifs : accessible, sans JavaScript, et entierement visible
 * au chargement pour les moteurs comme pour les lecteurs d'ecran.
 * Le balisage FAQPage est injecte separement par la page appelante.
 */
export default function Faq({
  items,
  titre = "Questions fréquentes",
}: {
  items: QuestionReponse[];
  titre?: string;
}) {
  return (
    <section aria-labelledby="titre-faq" className="bg-ardoise-50 py-20">
      <div className="mx-auto max-w-4xl px-4">
      <h2 id="titre-faq" className="text-2xl font-semibold text-nuit md:text-3xl">
        {titre}
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((qr) => (
          <details key={qr.question} className="carte group px-6 py-5">
            <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-lg font-medium text-nuit marker:content-['']">
              {qr.question}
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 text-marque transition-transform group-open:rotate-45"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 max-w-prose leading-relaxed text-nuit-700">
              {rendreTexte(qr.reponse)}
            </p>
          </details>
        ))}
        </div>
      </div>
    </section>
  );
}
