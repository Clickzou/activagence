import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { articlesPublies, formaterDate, LIBELLES_SILO } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";
import { filArianeSchema, grapheJsonLd } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import AppelAction from "@/components/AppelAction";

const PATH = "/blog/";

export const metadata: Metadata = pageMetadata({
  title: "Le journal d'Activ'Agence — détective privé à Toulouse",
  description:
    "Preuve, procédure, filature, droit du travail : ce qu'il faut savoir avant de faire appel à un détective privé, expliqué par une agence agréée CNAPS.",
  path: PATH,
});

export default function Blog() {
  const articles = articlesPublies();

  return (
    <>
      <JsonLd data={grapheJsonLd(filArianeSchema([{ nom: "Journal", path: PATH }]))} />

      <PageHeader
        titre="Le journal de l'agence"
        chapo="Ce que nous expliquons chaque semaine au téléphone : ce qui constitue une preuve, ce que la loi autorise, comment se déroule réellement une enquête. Écrit par des praticiens, pas par des rédacteurs."
        filAriane={[{ nom: "Journal", path: PATH }]}
        reperes={["Preuve et procédure", "Écrit par des praticiens", "Sources citées"]}
        image={{
          src: "/images/detective-prive-toulouse-enquete-personne.webp",
          alt: "Détective privé consultant un dossier d'enquête dans la pénombre de son bureau",
        }}
      />

      <div className="anim-entree mx-auto max-w-6xl px-4 py-16">
        {articles.length === 0 ? (
          <p className="max-w-prose leading-relaxed text-nuit-700">
            Les premiers articles seront publiés prochainement.
          </p>
        ) : (
          <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <li key={a.slug} className="carte group flex flex-col overflow-hidden">
                {a.image && (
                  <Image
                    src={a.image.src}
                    alt={a.image.alt}
                    width={640}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-xs uppercase tracking-widest text-marque-600">
                    {LIBELLES_SILO[a.silo]}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-nuit">
                    <Link href={`/blog/${a.slug}/`} className="hover:text-marque-600">
                      {a.titre}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-nuit-700">{a.chapo}</p>
                  <p className="mt-5 text-xs uppercase tracking-wider text-ardoise-400">
                    <time dateTime={a.datePublication}>{formaterDate(a.datePublication)}</time>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <AppelAction
        titre="Votre situation ne ressemble à aucun de ces cas ?"
        texte="C'est le plus souvent le cas : chaque dossier est particulier. Un échange de quinze minutes vaut mieux que dix articles."
      />
    </>
  );
}
