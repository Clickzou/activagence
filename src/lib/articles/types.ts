/**
 * Modele d'article de blog.
 *
 * Le contenu est structure en blocs typés plutot qu'en HTML libre : le rendu reste
 * coherent, le comptage de mots est fiable (regle des 2 000 mots minimum) et les
 * blocs a forte valeur SEO/GEO — reponse directe, tableau, FAQ — sont explicites
 * au lieu d'etre noyes dans du balisage.
 */

export type Silo =
  | "particuliers"
  | "entreprises"
  | "filature"
  | "preuve"
  | "tarifs";

export type Statut = "brouillon" | "publie";

export type BlocContenu =
  | { type: "paragraphe"; texte: string }
  | { type: "titre2"; texte: string }
  | { type: "titre3"; texte: string }
  | { type: "liste"; items: string[] }
  | { type: "listeOrdonnee"; items: string[] }
  | { type: "encadre"; titre: string; texte: string }
  | { type: "avertissement"; titre: string; texte: string }
  | { type: "citation"; texte: string; source?: string }
  | { type: "image"; src: string; alt: string; legende?: string }
  | {
      type: "tableau";
      entetes: string[];
      lignes: string[][];
      legende?: string;
    };

export interface LienExterne {
  /** Ancre = nom de la source, jamais l'URL nue. */
  ancre: string;
  url: string;
  /** A quoi sert ce lien pour le lecteur — sert au controle qualite. */
  motif: string;
}

export interface Article {
  slug: string;
  /** H1 de l'article. */
  titre: string;
  /** <= 60 caracteres, mot-cle principal en tete. */
  metaTitre: string;
  /** <= 155 caracteres. */
  metaDescription: string;
  /** Reponse directe de 130-170 mots, extractible hors contexte par un LLM. */
  essentiel: string;
  chapo: string;
  silo: Silo;
  /** Page pilier vers laquelle l'article fait remonter l'autorite. */
  pilier: string;
  datePublication: string;
  dateModification?: string;
  statut: Statut;
  image?: { src: string; alt: string };
  contenu: BlocContenu[];
  faq?: { question: string; reponse: string }[];
  /** Minimum 3 (regle E-E-A-T du master). Verifie par scripts/check-seo.mjs. */
  liensExternes: LienExterne[];
  /** Slugs d'articles connexes, pour le maillage intra-silo. */
  articlesLies?: string[];
}

/** Compte les mots reels d'un article — memes regles que le controle de prebuild. */
export function compterMots(article: Article): number {
  const morceaux: string[] = [article.essentiel, article.chapo];

  for (const bloc of article.contenu) {
    switch (bloc.type) {
      case "paragraphe":
      case "titre2":
      case "titre3":
        morceaux.push(bloc.texte);
        break;
      case "liste":
      case "listeOrdonnee":
        morceaux.push(bloc.items.join(" "));
        break;
      case "encadre":
      case "avertissement":
        morceaux.push(bloc.titre, bloc.texte);
        break;
      case "citation":
        morceaux.push(bloc.texte);
        break;
      case "image":
        // La légende compte comme du contenu, pas l'attribut alt.
        morceaux.push(bloc.legende ?? "");
        break;
      case "tableau":
        morceaux.push(bloc.entetes.join(" "), bloc.lignes.flat().join(" "), bloc.legende ?? "");
        break;
    }
  }

  for (const qr of article.faq ?? []) {
    morceaux.push(qr.question, qr.reponse);
  }

  return morceaux
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}
