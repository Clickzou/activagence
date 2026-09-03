import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  articleParSlug,
  articlesDuSilo,
  articlesPublies,
  formaterDate,
  LIBELLES_SILO,
} from "@/lib/articles";
import { compterMots } from "@/lib/articles/types";
import { AGENCE, SITE } from "@/data/agence";
import { PILIERS } from "@/data/navigation";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { faqSchema, filArianeSchema, grapheJsonLd } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import ContenuArticle, { ancreDepuisTitre } from "@/components/ContenuArticle";
import SommaireArticle from "@/components/SommaireArticle";
import Faq from "@/components/Faq";
import AppelAction from "@/components/AppelAction";
import Fleche from "@/components/Fleche";

export function generateStaticParams() {
  return articlesPublies().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articleParSlug(slug);
  if (!article) return {};

  return pageMetadata({
    title: article.metaTitre,
    description: article.metaDescription,
    path: `/blog/${article.slug}/`,
    image: article.image?.src,
  });
}

/** ~230 mots par minute : moyenne admise pour un texte informatif en français. */
function tempsDeLecture(mots: number): number {
  return Math.max(1, Math.round(mots / 230));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleParSlug(slug);
  if (!article) notFound();

  const url = absoluteUrl(`/blog/${article.slug}/`);
  const connexes = articlesDuSilo(article.silo, article.slug).slice(0, 3);
  const mots = compterMots(article);
  const minutes = tempsDeLecture(mots);

  // Titres de niveau 2, pour le sommaire et la navigation dans un texte long.
  const titres = article.contenu
    .filter((b) => b.type === "titre2")
    .map((b) => ({ texte: (b as { texte: string }).texte, ancre: ancreDepuisTitre((b as { texte: string }).texte) }));

  const schemaArticle = {
    "@type": "Article",
    headline: article.titre,
    description: article.metaDescription,
    datePublished: article.datePublication,
    // La fraicheur est un facteur de citation par les moteurs generatifs :
    // dateModification doit refleter une vraie mise a jour, jamais la date du build.
    dateModified: article.dateModification ?? article.datePublication,
    inLanguage: SITE.langue,
    mainEntityOfPage: url,
    author: { "@id": `${SITE.url}/#agence` },
    publisher: { "@id": `${SITE.url}/#agence` },
    ...(article.image ? { image: `${SITE.url}${article.image.src}` } : {}),
    wordCount: mots,
  };

  return (
    <>
      <JsonLd
        data={grapheJsonLd(
          schemaArticle,
          filArianeSchema([
            { nom: "Journal", path: "/blog/" },
            { nom: article.titre, path: `/blog/${article.slug}/` },
          ]),
          ...(article.faq ? [faqSchema(article.faq)] : []),
        )}
      />

      {/* ---- En-tête d'article : titre sur l'image, en pleine largeur ---- */}
      <header className="relative isolate overflow-hidden bg-nuit text-white">
        {article.image && (
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 -z-20 object-cover opacity-35"
          />
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-nuit via-nuit/92 to-nuit/55"
        />

        <div className="px-4 py-14 sm:px-8 lg:px-14 xl:px-[100px] md:py-20">
          <nav aria-label="Fil d'Ariane" className="mb-7 text-sm text-ardoise-300">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Accueil
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-ardoise-400">/</span>
                <Link href="/blog/" className="transition-colors hover:text-white">
                  Journal
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-ardoise-400">/</span>
                <span className="text-white">{LIBELLES_SILO[article.silo]}</span>
              </li>
            </ol>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cta">
            {LIBELLES_SILO[article.silo]}
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.12] md:text-5xl">
            {article.titre}
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ardoise-200">
            {article.chapo}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ardoise-300">
            <time dateTime={article.datePublication}>
              {formaterDate(article.datePublication)}
            </time>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-cta" />
            <span>{minutes} min de lecture</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-cta" />
            <span>Par {AGENCE.nom}</span>
          </div>
        </div>
      </header>

      {/* ---- Corps : sommaire collant à gauche, texte à droite ---- */}
      <div
        id="corps-article"
        className="px-4 py-14 sm:px-8 lg:px-14 xl:px-[100px] md:py-16"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:self-start">
            <SommaireArticle titres={titres} />
          </aside>

          <article className="anim-entree min-w-0 max-w-3xl">
            {/* Réponse directe : le passage qu'un moteur génératif extrait. */}
            <div className="rounded-2xl border-l-4 border-cta bg-ardoise-50 px-7 py-6">
              <p className="mb-2 font-display text-xs uppercase tracking-widest text-cta-600">
                L&apos;essentiel
              </p>
              <p className="text-lg leading-relaxed text-nuit-700">{article.essentiel}</p>
            </div>

            <ContenuArticle blocs={article.contenu} />

            {/* Sources : signal E-E-A-T, minimum 3 par article. */}
            <section className="mt-16 rounded-2xl border border-ardoise-100 bg-white p-7 shadow-carte">
              <h2 className="font-display text-lg font-semibold text-nuit">
                Sources et références
              </h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {article.liensExternes.map((l) => (
                  <li key={l.url} className="border-t border-ardoise-100 pt-4">
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-marque-600 underline decoration-cta decoration-2 underline-offset-4 hover:text-cta-600"
                    >
                      {l.ancre}
                    </a>
                    <span className="mt-1 block text-sm leading-relaxed text-ardoise-400">
                      {l.motif}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Remontée vers le pilier du silo (maillage descendant du master §5). */}
            <section className="mt-8 overflow-hidden rounded-2xl bg-nuit p-7 text-white">
              <p className="max-w-prose leading-relaxed text-ardoise-200">
                Cet article relève de nos enquêtes{" "}
                <Link
                  href={article.pilier}
                  className="font-medium text-cta underline decoration-cta/60 underline-offset-4 hover:text-white"
                >
                  {LIBELLES_SILO[article.silo].toLowerCase()}
                </Link>
                . Pour la valeur juridique du rapport, voyez{" "}
                <Link
                  href={PILIERS.preuve}
                  className="font-medium text-cta underline decoration-cta/60 underline-offset-4 hover:text-white"
                >
                  la recevabilité en justice
                </Link>
                {" "}; pour le budget,{" "}
                <Link
                  href={PILIERS.tarifs}
                  className="font-medium text-cta underline decoration-cta/60 underline-offset-4 hover:text-white"
                >
                  nos tarifs et le déroulement d&apos;une enquête
                </Link>
                .
              </p>
              <p className="mt-6">
                <Link href={PILIERS.contact} className="bouton-primaire">
                  Parler de votre situation
                  <Fleche />
                </Link>
              </p>
            </section>

            {connexes.length > 0 && (
              <section className="mt-14">
                <p className="surtitre">À lire également</p>
                <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                  {connexes.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/blog/${a.slug}/`}
                        className="carte group flex h-full flex-col overflow-hidden"
                      >
                        {a.image && (
                          <Image
                            src={a.image.src}
                            alt={a.image.alt}
                            width={640}
                            height={360}
                            sizes="(max-width: 640px) 100vw, 40vw"
                            className="h-36 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        <span className="flex flex-1 flex-col p-5">
                          <span className="font-display font-semibold leading-snug text-nuit transition-colors group-hover:text-cta-600">
                            {a.titre}
                          </span>
                          <span className="mt-2 text-sm leading-relaxed text-ardoise-400">
                            {tempsDeLecture(compterMots(a))} min de lecture
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>
        </div>
      </div>

      {article.faq && <Faq items={article.faq} titre="Questions fréquentes sur ce sujet" />}

      <AppelAction />
    </>
  );
}
