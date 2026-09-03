import type { BlocContenu } from "@/lib/articles/types";

/**
 * Page ville : page de service locale, pas un article.
 *
 * Regle de differenciation (core updates 2026) : un gabarit duplique avec le nom
 * de la ville substitue se fait devaloriser. Chaque page doit dire quelque chose
 * de VRAI et de SPECIFIQUE a cette commune. L'angle retenu ici est celui que seule
 * une agence de terrain peut ecrire : ce que le tissu urbain de la ville implique
 * concretement pour une surveillance (pavillonnaire ou collectif, axes routiers,
 * stationnement, difficulte de se fondre dans le decor).
 */
export interface PageVille {
  slug: string;
  /** Nom de la commune, tel qu'il s'ecrit. */
  nom: string;
  /** H1 — contient le service et la ville. */
  titre: string;
  /** <= 60 caracteres. */
  metaTitre: string;
  /** <= 155 caracteres. */
  metaDescription: string;
  chapo: string;
  /** Reponse directe de 130-170 mots, extractible hors contexte. */
  essentiel: string;
  /** Situation geographique par rapport a Toulouse — sert au texte et au schema. */
  situation: string;
  /**
   * Visuel d'en-tete, PROPRE A CHAQUE COMMUNE : une meme image reutilisee sur
   * six pages donne un effet de gabarit duplique, ce que l'on cherche
   * precisement a eviter ici. Genere via `npm run images` depuis fal.ai.
   */
  image: { src: string; alt: string };
  /**
   * Visuels des sous-sections « terrain » : un par titre3, dans l'ordre, et
   * PROPRES A CETTE COMMUNE eux aussi.
   *
   * Ils etaient auparavant tires d'une liste partagee par le gabarit : les six
   * pages villes affichaient donc les quatre memes photos. Un en-tete unique ne
   * suffit pas a sortir de l'effet de gabarit duplique si tout le corps de page
   * est identique d'une commune a l'autre — c'est precisement ce que les core
   * updates 2026 devalorisent. Regle : aucun fichier image n'apparait sur deux
   * pages villes.
   */
  visuels: { src: string; alt: string }[];
  /** Bandeau pleine largeur du milieu de page, lui aussi propre a la commune. */
  citation: { src: string; alt: string };
  /** Ce que le terrain de cette commune change pour une mission. */
  terrain: BlocContenu[];
  faq: { question: string; reponse: string }[];
  /** Communes limitrophes traitees, pour le maillage entre pages villes. */
  voisines?: string[];
}
