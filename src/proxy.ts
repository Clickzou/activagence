import { NextResponse, type NextRequest } from "next/server";
import { PAGES_SUPPRIMEES_410, REDIRECTIONS_301 } from "@/data/navigation";

/**
 * Traitement des anciennes URL WordPress (plan de migration, §8 du master).
 * Convention Next 16 : ce fichier remplace src/middleware.ts (deprecie).
 *
 * Deux comportements distincts :
 *
 * 1. 410 Gone sur les 19 pages de demonstration du theme.
 *    Pourquoi 410 et non 301 (decision de l'audit du 2026-09-02) : ces pages n'ont
 *    ni trafic ni lien entrant. Une redirection vers la home transmettrait un signal
 *    de mauvaise qualite vers la page la plus importante du site. Le 410 demande
 *    explicitement a Google de les retirer de l'index, plus vite qu'un 404.
 *
 * 2. 301 en UN SEUL SAUT pour les 8 URL francaises conservees.
 *    Les regles sont ici plutot que dans next.config.ts : avec `trailingSlash: true`,
 *    une URL sans slash final serait d'abord normalisee (308) puis redirigee (308),
 *    soit une chaine a deux sauts. Le proxy traite les deux formes, avec ou sans
 *    slash, et pointe directement sur la destination finale.
 *
 *    LIMITE CONNUE : Next 16 normalise le trailing slash AVANT d'atteindre le proxy.
 *    Une requete sur `/moyens` (sans slash) fait donc 308 vers `/moyens/` puis 301
 *    vers la destination. Sans consequence en pratique : les URL reellement indexees
 *    par Google sont les formes canoniques AVEC slash — celles que servait WordPress
 *    et que listait son sitemap —, et elles redirigent en un seul saut. Les formes
 *    sans slash ne figuraient que dans l'ancien menu interne, qui disparait.
 */

const GONE = new Set(
  PAGES_SUPPRIMEES_410.flatMap((slug) => [`/${slug}`, `/${slug}/`]),
);

/** Retire le slash final pour comparer un chemin aux cles de la table. */
function normaliser(chemin: string): string {
  const bas = chemin.toLowerCase();
  return bas.length > 1 && bas.endsWith("/") ? bas.slice(0, -1) : bas;
}

export default function proxy(request: NextRequest) {
  const chemin = request.nextUrl.pathname.toLowerCase();

  if (GONE.has(chemin)) {
    return new NextResponse(
      "410 Gone — cette page a été supprimée lors de la refonte du site.",
      {
        status: 410,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "X-Robots-Tag": "noindex",
        },
      },
    );
  }

  const destination = REDIRECTIONS_301[normaliser(chemin)];
  if (destination) {
    return NextResponse.redirect(new URL(destination, request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|images|favicon|api).*)"],
};
