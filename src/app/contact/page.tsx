import type { Metadata } from "next";
import { AGENCE, adresseUneLigne } from "@/data/agence";
import { PILIERS } from "@/data/navigation";
import { pageMetadata } from "@/lib/seo";
import { filArianeSchema, grapheJsonLd } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import FormulaireContact from "@/components/FormulaireContact";

const PATH = PILIERS.contact;

export const metadata: Metadata = pageMetadata({
  title: "Contacter un détective privé à Toulouse — Activ'Agence",
  description:
    "Premier échange gratuit et confidentiel avec notre agence de détectives privés à Toulouse. Par téléphone, par e-mail ou via le formulaire discret.",
  path: PATH,
});

export default function Contact() {
  return (
    <>
      <JsonLd
        data={grapheJsonLd(filArianeSchema([{ nom: "Contact", path: PATH }]))}
      />

      <PageHeader
        titre="Contacter notre agence de détectives privés à Toulouse"
        chapo="Le premier échange est gratuit, sans engagement, et couvert par la confidentialité. Il sert d'abord à savoir si une enquête est possible et si elle vous apportera quelque chose."
        filAriane={[{ nom: "Contact", path: PATH }]}
        reperes={[
          "Premier échange gratuit",
          "Réponse sous 24 h ouvrées",
          "Confidentialité totale",
        ]}
        image={{
          src: "/images/agence-detective-prive-toulouse.webp",
          alt: "Façade du quartier des Minimes, où se trouvent les bureaux de l'agence",
        }}
      />

      <div className="anim-entree mx-auto grid max-w-6xl gap-14 px-4 py-16 lg:grid-cols-[1.15fr_1fr]">
        <section>
          <h2 className="text-2xl font-semibold text-nuit md:text-3xl">
            Nous écrire
          </h2>
          <p className="mt-3 max-w-prose leading-relaxed text-nuit-700">
            Si vous préférez ne pas téléphoner, ce formulaire suffit. Vous n&apos;êtes pas
            obligé de tout détailler&nbsp;: dites-nous simplement de quel type de situation il
            s&apos;agit, et par quel moyen vous souhaitez que nous vous répondions.
          </p>
          <div className="mt-8">
            <FormulaireContact />
          </div>
        </section>

        <aside className="lg:pt-4">
          <div className="rounded-2xl border border-ardoise-100 p-7 shadow-carte">
            <h2 className="font-display text-xl font-semibold text-nuit">
              Nous joindre directement
            </h2>

            <dl className="mt-6 space-y-5 text-nuit-700">
              <div>
                <dt className="text-sm uppercase tracking-wider text-ardoise-400">
                  Téléphone
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${AGENCE.telephoneE164}`}
                    className="font-display text-2xl font-semibold text-nuit hover:text-marque-600"
                  >
                    {AGENCE.telephone}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-sm uppercase tracking-wider text-ardoise-400">E-mail</dt>
                <dd className="mt-1">
                  <a href={`mailto:${AGENCE.email}`} className="lien-contenu">
                    {AGENCE.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-sm uppercase tracking-wider text-ardoise-400">Agence</dt>
                <dd className="mt-1">
                  <address className="not-italic leading-relaxed">
                    {AGENCE.adresse.rue}
                    <br />
                    {AGENCE.adresse.complement}
                    <br />
                    {AGENCE.adresse.codePostal} {AGENCE.adresse.ville}
                  </address>
                </dd>
              </div>

              <div>
                <dt className="text-sm uppercase tracking-wider text-ardoise-400">
                  Horaires
                </dt>
                <dd className="mt-1 leading-relaxed">{AGENCE.horaires.libelle}</dd>
              </div>

              <div>
                <dt className="text-sm uppercase tracking-wider text-ardoise-400">
                  Autorisations CNAPS
                </dt>
                <dd className="mt-1 space-y-1 font-mono text-xs text-nuit-700">
                  {AGENCE.cnaps.map((n) => (
                    <span key={n} className="block">
                      {n}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 rounded-2xl border border-ardoise-100 bg-ardoise-50 p-7">
            <h2 className="font-display text-lg font-semibold text-nuit">
              Ce qui se passe après votre message
            </h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-nuit-700">
              <li>
                <span className="font-semibold">1.</span> Nous vous répondons sous 24&nbsp;h
                ouvrées, uniquement par le moyen que vous avez indiqué.
              </li>
              <li>
                <span className="font-semibold">2.</span> Nous écoutons votre situation et
                vous disons franchement ce qui peut être établi — et ce qui ne le peut pas.
              </li>
              <li>
                <span className="font-semibold">3.</span> Si une enquête est pertinente, vous
                recevez un devis écrit avec un budget maximum. Rien ne démarre avant votre
                accord.
              </li>
            </ol>
          </div>

          {/* Carte chargee en lazy : elle ne doit pas peser sur le premier rendu. */}
          <div className="mt-8">
            <h2 className="font-display text-lg font-semibold text-nuit">Nous situer</h2>
            <p className="mt-2 text-sm text-ardoise-400">{adresseUneLigne()}</p>
            <iframe
              title="Localisation de l'agence Activ'Agence, 23 boulevard des Minimes à Toulouse"
              src="https://www.openstreetmap.org/export/embed.html?bbox=1.4292%2C43.6171%2C1.4492%2C43.6271&layer=mapnik&marker=43.6221%2C1.4392"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-3 h-72 w-full rounded-2xl border border-ardoise-100"
            />
          </div>
        </aside>
      </div>
    </>
  );
}
